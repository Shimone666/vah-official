/* ==========================================================================
   Nika Composer — logika grid beat + timestamp terkunci + prompt musik standar
   100% browser. Tidak ada backend, tidak ada panggilan jaringan.
   ========================================================================== */

const CS = 100;

/* ---------- util waktu ---------- */
function toCs(seconds) {
  const n = Number(seconds);
  if (!isFinite(n) || n < 0) return 0;
  return Math.round(n * CS);
}
function fromCs(cs) { return cs / CS; }
function uid() {
  try {
    if (globalThis.crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  } catch (e) {}
  return "id-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
}
function formatTs(cs) {
  if (cs < 0) cs = 0;
  const totalSec = Math.floor(cs / CS);
  const cc = cs % CS;
  const mm = Math.floor(totalSec / 60);
  const ss = totalSec % 60;
  return String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0") + "." + String(cc).padStart(2, "0");
}
function formatSrt(cs) {
  if (cs < 0) cs = 0;
  const totalSec = Math.floor(cs / CS);
  const cc = cs % CS;
  const hh = Math.floor(totalSec / 3600);
  const mm = Math.floor((totalSec % 3600) / 60);
  const ss = totalSec % 60;
  const ms = cc * 10;
  return String(hh).padStart(2, "0") + ":" + String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0") + "," + String(ms).padStart(3, "0");
}
/* format standar blok musik: mm:ss (tanpa senin), pemisah en dash */
function formatStdTime(cs) {
  if (cs < 0) cs = 0;
  const totalSec = Math.floor(cs / CS);
  const mm = Math.floor(totalSec / 60);
  const ss = totalSec % 60;
  return String(mm).padStart(2, "0") + ":" + String(ss).padStart(2, "0");
}
function parseTimeToSec(s) {
  const m = String(s || "").trim().match(/^(\d{1,2}):(\d{2})(?:[.:](\d{1,2}))?$/);
  if (!m) return null;
  let sec = Number(m[1]) * 60 + Number(m[2]);
  if (m[3] != null) {
    const frac = Number(m[3]);
    sec += m[3].length === 1 ? frac / 10 : frac / 100;
  }
  return sec;
}

/* ---------- tag prompt musik standar ---------- */
function isChordish(s) {
  return /^[A-G](#|b)?(m|maj|min|dim|aug|sus|add)?\d{0,2}$/.test(String(s || "").trim());
}
function isKvTag(s) {
  return /^[A-Z][A-Z0-9_]*=[A-Za-z0-9#b]+$/.test(String(s || "").trim());
}
function isStdTag(s) {
  const t = String(s || "").trim();
  if (!t) return false;
  if (isKvTag(t)) return true;
  return /^[A-Z0-9_+#=\-.]+$/.test(t);
}
/* prompt -> grup kurung. Kalau semua bagian adalah tag standar, tiap tag jadi
   grup sendiri: "PIANO, SOFT" -> [PIANO][SOFT]. Kalau ada teks bebas, tetap
   satu grup supaya tidak merusak prompt buatan user. */
function promptGroups(prompt) {
  const raw = String(prompt || "").trim();
  if (!raw) return [];
  const parts = raw.split(",").map((p) => p.trim()).filter(Boolean);
  if (parts.length > 1 && parts.every(isStdTag)) return parts;
  if (parts.length === 1 && isStdTag(parts[0])) return parts;
  return [raw];
}

/* ---------- state ---------- */
let lines = [];
let lastRawLyrics = "";
let selectedId = null;

function defaultLine(kind) {
  const k = kind || "line";
  return {
    id: uid(),
    kind: k,
    duration_s: k === "section" ? 0 : Number(document.getElementById("defaultDur")?.value) || 4,
    name: k === "section" ? (document.getElementById("defaultSection")?.value || "Verse") : "",
    role: k === "instr" ? "instrumen" : document.getElementById("defaultRole")?.value || "sing",
    chord: "",
    lyric: "",
    prompt: k === "instr" ? "INSTRUMENTAL" : "",
    lipsync: false,
  };
}
function isSection(row) { return row.kind === "section"; }
function isInstr(row) { return row.kind === "instr" || row.role === "instrumen"; }
function isTimed(row) { return !isSection(row); }

/* ---------- operasi baris ---------- */
function insertLineAt(index, prefill) {
  const kind = (prefill && prefill.kind) || "line";
  const row = Object.assign(defaultLine(kind), prefill || {});
  row.id = row.id || uid();
  if (index < 0) index = 0;
  if (index > lines.length) index = lines.length;
  lines.splice(index, 0, row);
  render();
  exportAll();
}
function addLine(prefill) { insertLineAt(lines.length, prefill); }
function addSection() {
  addLine({ kind: "section", name: document.getElementById("defaultSection")?.value || "Verse", duration_s: 0 });
}
function addInstrumental() {
  addLine({ kind: "instr", role: "instrumen", lyric: "", prompt: "INSTRUMENTAL" });
}
function _idxOf(id) { return lines.findIndex((l) => l.id === id); }
function addLineAbove(id) { const i = _idxOf(id); if (i < 0) return; insertLineAt(i, { kind: "line" }); }
function addLineBelow(id) { const i = _idxOf(id); if (i < 0) return; insertLineAt(i + 1, { kind: "line" }); }
function addInstrAbove(id) {
  const i = _idxOf(id); if (i < 0) return;
  insertLineAt(i, { kind: "instr", role: "instrumen", lyric: "", prompt: "INSTRUMENTAL" });
}
function addInstrBelow(id) {
  const i = _idxOf(id); if (i < 0) return;
  insertLineAt(i + 1, { kind: "instr", role: "instrumen", lyric: "", prompt: "INSTRUMENTAL" });
}
function addSectionAbove(id) {
  const i = _idxOf(id); if (i < 0) return;
  insertLineAt(i, { kind: "section", name: document.getElementById("defaultSection")?.value || "Verse", duration_s: 0 });
}
function addSectionBelow(id) {
  const i = _idxOf(id); if (i < 0) return;
  insertLineAt(i + 1, { kind: "section", name: document.getElementById("defaultSection")?.value || "Chorus", duration_s: 0 });
}
function removeLine(id) {
  lines = lines.filter((l) => l.id !== id);
  if (selectedId === id) selectedId = null;
  render(); exportAll();
}
function moveLine(id, dir) {
  const i = _idxOf(id);
  if (i < 0) return;
  const j = i + dir;
  if (j < 0 || j >= lines.length) return;
  const tmp = lines[i]; lines[i] = lines[j]; lines[j] = tmp;
  render(); exportAll();
}
function updateField(id, field, value) {
  const row = lines.find((l) => l.id === id);
  if (!row) return;
  if (field === "duration_s") {
    let d = parseFloat(value);
    if (!isFinite(d) || d < 0) d = 0;
    if (isSection(row)) d = 0;
    else if (d < 0.01) d = 0.01;
    row.duration_s = fromCs(toCs(d));
  } else if (field === "lipsync") {
    row.lipsync = !!value;
  } else if (field === "kind") {
    row.kind = value;
    if (value === "section") { row.duration_s = 0; row.lyric = ""; row.prompt = ""; }
    if (value === "instr") {
      row.role = "instrumen";
      if (!row.prompt) row.prompt = "INSTRUMENTAL";
      row.lyric = "";
    }
  } else {
    row[field] = value;
  }
  render(); exportAll();
}

/* ---------- timeline ---------- */
function timeline() {
  let cursor = 0;
  return lines.map((l, idx) => {
    const durCs = isSection(l) ? 0 : Math.max(1, toCs(l.duration_s));
    const start = cursor;
    const end = cursor + durCs;
    cursor = end;
    return Object.assign({}, l, {
      index: idx + 1,
      start_cs: start,
      end_cs: end,
      duration_cs: durCs,
      start_fmt: formatTs(start),
      end_fmt: formatTs(end),
    });
  });
}

function ui(k, fallback) {
  var v = window.VAH_I18N && VAH_I18N.t ? VAH_I18N.t(k) : k;
  return !v || v === k ? fallback : v;
}

function escapeAttr(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

/* ---------- render ---------- */
function render() {
  const tb = document.getElementById("tbody");
  if (!tb) return;
  const tl = timeline();
  tb.innerHTML = "";

  tl.forEach((row) => {
    const tr = document.createElement("tr");
    if (isSection(row)) tr.classList.add("section-row");
    if (isInstr(row)) tr.classList.add("instr-row");
    if (selectedId && row.id === selectedId) tr.classList.add("sel-row");

    if (isSection(row)) {
      tr.innerHTML =
        '<td>' + row.index + "</td>" +
        '<td class="ts muted">—</td><td class="ts muted">—</td><td class="muted">0</td>' +
        '<td colspan="5"><div class="section-bar"><span class="tag">' + escapeAttr(ui("nika_subtag", "SECTION")) + '</span>' +
        '<input class="section-name" value="' + escapeAttr(row.name) +
        '" onchange="updateField(\'' + row.id + '\',\'name\',this.value)" ' +
        'placeholder="Verse 1 / Pre-chorus / Chorus…" title="' + escapeAttr(ui("nika_sec_title", "Section name. Paste format [name]")) + '"></div></td>' +
        "<td></td><td>" + actionsHtml(row.id) + "</td>";
    } else {
      const instr = isInstr(row);
      const roles = ["sing", "build", "hold", "drop", "breath", "instrumen"];
      const roleOpts = roles.map((r) =>
        '<option value="' + r + '"' + (r === row.role ? " selected" : "") + ">" + r + "</option>").join("");
      tr.innerHTML =
        '<td>' + row.index + "</td>" +
        '<td class="ts">' + row.start_fmt + "</td>" +
        '<td class="ts">' + row.end_fmt + "</td>" +
        '<td><input class="num" type="number" min="0.01" step="0.01" value="' + row.duration_s +
        '" onchange="updateField(\'' + row.id + '\',\'duration_s\',this.value)"></td>' +
        '<td><span class="kind-badge' + (instr ? " instr" : "") + '">' + (instr ? "instrumental" : escapeAttr(ui("nika_row", "row"))) + "</span></td>" +
        "<td><select onchange=\"updateField('" + row.id + "','role',this.value)\">" + roleOpts + "</select></td>" +
        '<td><input class="num" style="width:72px;text-align:center;font-family:var(--tool-mono)" value="' + escapeAttr(row.chord) +
        '" onchange="updateField(\'' + row.id + '\',\'chord\',this.value)" placeholder="Am"></td>' +
        '<td><input class="lyric" value="' + escapeAttr(row.lyric) +
        '" onchange="updateField(\'' + row.id + '\',\'lyric\',this.value)" placeholder="' + escapeAttr(instr ? ui("nika_emptyph", "(empty)") : ui("nika_lyricph", "lyric")) + '"></td>' +
        '<td><input class="prompt" value="' + escapeAttr(row.prompt) +
        '" onchange="updateField(\'' + row.id + '\',\'prompt\',this.value)" placeholder="' + escapeAttr(instr ? ui("nika_promptph_i", "music prompt / pad / drums") : ui("nika_promptph", "music prompt")) + '"></td>' +
        '<td style="text-align:center"><input type="checkbox"' + (row.lipsync ? " checked" : "") + (instr ? " disabled" : "") +
        ' onchange="updateField(\'' + row.id + '\',\'lipsync\',this.checked)"></td>' +
        "<td>" + actionsHtml(row.id) + "</td>";
    }
    tb.appendChild(tr);
  });

  const totalCs = tl.length ? tl[tl.length - 1].end_cs : 0;
  document.getElementById("statDuration").textContent = formatTs(totalCs);
  document.getElementById("statLines").textContent = String(lines.length);
  document.getElementById("statBpm").textContent = document.getElementById("bpm")?.value || "—";
  renderTargetOptions();
}

function actionsHtml(id) {
  return '<div class="acts">' +
    '<button type="button" title="' + escapeAttr(ui("nika_up_line", "Row above")) + '" onclick="addLineAbove(\'' + id + '\')">+↑</button>' +
    '<button type="button" title="' + escapeAttr(ui("nika_dn_line", "Row below")) + '" onclick="addLineBelow(\'' + id + '\')">+↓</button>' +
    '<button type="button" title="' + escapeAttr(ui("nika_up_ins", "Instrument above")) + '" onclick="addInstrAbove(\'' + id + '\')">I↑</button>' +
    '<button type="button" title="' + escapeAttr(ui("nika_dn_ins", "Instrument below")) + '" onclick="addInstrBelow(\'' + id + '\')">I↓</button>' +
    '<button type="button" title="' + escapeAttr(ui("nika_up_sec", "Section above")) + '" onclick="addSectionAbove(\'' + id + '\')">S↑</button>' +
    '<button type="button" title="' + escapeAttr(ui("nika_dn_sec", "Section below")) + '" onclick="addSectionBelow(\'' + id + '\')">S↓</button>' +
    '<button type="button" onclick="moveLine(\'' + id + '\',-1)">↑</button>' +
    '<button type="button" onclick="moveLine(\'' + id + '\',1)">↓</button>' +
    '<button type="button" onclick="removeLine(\'' + id + '\')">×</button>' +
    "</div>";
}

/* ---------- pemilih baris target ---------- */
function renderTargetOptions() {
  const sel = document.getElementById("targetRow");
  if (!sel) return;
  const tl = timeline();
  const cur = sel.value || selectedId || "";
  sel.innerHTML = tl.map((r) => {
    const label = r.index + " · " + (isSection(r) ? ui("nika_secword", "section") + " " + (r.name || "") : isInstr(r) ? "instrumental" : ui("nika_row", "row"));
    return '<option value="' + r.id + '">' + escapeAttr(label) + "</option>";
  }).join("") || '<option value="">— ' + escapeAttr(ui("nika_norows", "no rows yet")) + ' —</option>';
  if (cur && tl.some((r) => r.id === cur)) sel.value = cur;
  else if (tl.length) { sel.value = tl[tl.length - 1].id; selectedId = tl[tl.length - 1].id; }
}

/* ---------- prompt musik standar ---------- */
function collectTags(groupId) {
  const box = document.getElementById(groupId);
  if (!box) return [];
  return [...box.querySelectorAll('input[type="checkbox"]')]
    .filter((c) => c.checked)
    .map((c) => c.value);
}
function buildStandardTags() {
  const tags = [];
  const tempo = (document.getElementById("tagTempo")?.value || "").trim();
  const key = (document.getElementById("tagKey")?.value || "").trim();
  if (tempo) tags.push(tempo.toUpperCase().startsWith("TEMPO=") ? tempo : "TEMPO=" + tempo);
  if (key) tags.push(key.toUpperCase().startsWith("KEY=") ? key : "KEY=" + key);
  tags.push(...collectTags("tagInst"));
  tags.push(...collectTags("tagTexture"));
  tags.push(...collectTags("tagMood"));
  tags.push(...collectTags("tagDyn"));
  return tags;
}
function standardTagsString() {
  return buildStandardTags().map((t) => "[" + t + "]").join("");
}
function applyStandardPrompt() {
  const sel = document.getElementById("targetRow");
  const id = sel && sel.value;
  if (!id) { alert("Belum ada baris untuk diisi."); return; }
  const row = lines.find((l) => l.id === id);
  if (!row) return;
  if (isSection(row)) { alert(ui("nika_sec_noprompt", "A section has no prompt column. Pick a normal row or an instrumental.")); return; }
  const tags = buildStandardTags();
  updateField(id, "prompt", tags.join(", "));
  selectedId = id;
}
function copyStandardTags() {
  const s = standardTagsString();
  if (!s) { alert("Pilih minimal satu tag."); return; }
  navigator.clipboard.writeText(s).then(
    () => {},
    () => { alert(s); }
  );
}
function resetStandardTags() {
  ["tagInst", "tagTexture", "tagMood", "tagDyn"].forEach((id) => {
    const box = document.getElementById(id);
    if (box) box.querySelectorAll('input[type="checkbox"]').forEach((c) => { c.checked = false; });
  });
  const k = document.getElementById("tagKey"); if (k) k.value = "";
  const t = document.getElementById("tagTempo"); if (t) t.value = "";
}

/* ---------- parse paste ---------- */
const STD_TIME_RE = /^\[(\d{1,2}:\d{2}(?:[.:]\d{1,2})?)\s*[-–—]\s*(\d{1,2}:\d{2}(?:[.:]\d{1,2})?)\]$/;
const ONE_LINE_RE = /^\[(\d{1,2}:\d{2}\.\d{2})(?:-(\d{1,2}:\d{2}\.\d{2}))?\]\[([^\]]*)\]\[([^\]]*)\]\s*(.*)$/;

function parsePasteToRows(raw) {
  const parts = String(raw || "").split(/\r?\n/).map((s) => s.trim());
  const rows = [];
  let i = 0;
  while (i < parts.length) {
    const ln = parts[i];
    if (!ln) { i++; continue; }

    /* --- blok standar: [TIME] lalu tag [COMBO] lalu lirik --- */
    const mt = ln.match(STD_TIME_RE);
    if (mt) {
      i++;
      const tags = [];
      let lyric = "";
      while (i < parts.length && parts[i]) {
        const nxt = parts[i];
        if (STD_TIME_RE.test(nxt)) break;
        const mg = nxt.match(/^((?:\[[^\]]*\])+)\s*(.*)$/);
        if (mg) {
          const groups = (mg[1].match(/\[[^\]]*\]/g) || [])
            .map((g) => g.slice(1, -1).trim()).filter(Boolean);
          groups.forEach((g) => tags.push(g));
          if (mg[2]) { lyric = mg[2].trim(); i++; }
          else i++;
          continue;
        }
        lyric = nxt; i++;
        break;
      }
      let chord = "";
      const rest = tags.slice();
      if (rest.length > 1 && isChordish(rest[0])) chord = rest.shift();
      const prompt = rest.join(", ");
      const isInst = !lyric && (tags.some((t) => /instrumental/i.test(t)) || rest.length === 0 || !chord);
      const a = parseTimeToSec(mt[1]);
      const b = parseTimeToSec(mt[2]);
      const dur = (a != null && b != null && b > a) ? b - a : null;
      rows.push({
        kind: isInst ? "instr" : "line",
        role: isInst ? "instrumen" : "sing",
        chord: chord,
        prompt: prompt || (isInst ? "INSTRUMENTAL" : ""),
        lyric: lyric,
        duration_s: dur,
      });
      continue;
    }

    /* --- format satu baris: [ts][chord][prompt] lirik --- */
    const mo = ln.match(ONE_LINE_RE);
    if (mo) {
      rows.push({
        kind: "line", chord: mo[3].trim(), prompt: mo[4].trim(),
        lyric: (mo[5] || "").trim(),
      });
      i++; continue;
    }

    /* --- sub judul --- */
    if (/^\[[^\]]+\]$/.test(ln) && !/^\[\d/.test(ln)) {
      rows.push({ kind: "section", name: ln.slice(1, -1).trim(), duration_s: 0 });
      i++; continue;
    }

    /* --- cue --- */
    const mc = ln.match(/^\((.+)\)$/);
    if (mc) { rows.push({ kind: "line", prompt: mc[1].trim(), lyric: "" }); i++; continue; }

    /* --- lirik polos --- */
    rows.push({ kind: "line", lyric: ln, prompt: "" });
    i++;
  }
  return rows;
}

function importLyrics(replaceAll) {
  const raw = document.getElementById("pasteLyrics").value || "";
  if (!raw.trim()) return;

  if (replaceAll) {
    lines = [];
    lastRawLyrics = raw.trim();
  } else {
    lastRawLyrics = (lastRawLyrics ? lastRawLyrics + "\n\n" : "") + raw.trim();
  }

  const rows = parsePasteToRows(raw);
  rows.forEach((r) => {
    const prefill = Object.assign({}, r);
    if (prefill.duration_s == null) delete prefill.duration_s;
    addLine(prefill);
  });
  render();
  exportAll();
}

function recalcAll() {
  lines.forEach((l) => {
    if (isSection(l)) l.duration_s = 0;
    else l.duration_s = fromCs(Math.max(1, toCs(l.duration_s)));
  });
  render(); exportAll();
}

/* ---------- jeda instrumental ---------- */
function ensureInstrGaps() {
  const dur = Number(document.getElementById("instrDur")?.value) || 4;
  const out = [];
  function pushInstr(prompt) {
    out.push(Object.assign(defaultLine("instr"), {
      kind: "instr", role: "instrumen", duration_s: dur, lyric: "",
      prompt: prompt || "INSTRUMENTAL",
    }));
  }
  if (!lines.length || !isInstr(lines[0])) pushInstr("INSTRUMENTAL, INTRO");
  for (let i = 0; i < lines.length; i++) {
    const row = lines[i];
    if (isSection(row)) {
      const prev = out[out.length - 1];
      if (!prev || !isInstr(prev)) pushInstr("INSTRUMENTAL, BEFORE " + (row.name || "SECTION"));
    }
    out.push(Object.assign({}, row, { id: row.id || uid() }));
  }
  if (!out.length || !isInstr(out[out.length - 1])) pushInstr("INSTRUMENTAL, OUTRO");
  lines = out;
  render(); exportAll();
}

function clearPasteText() { document.getElementById("pasteLyrics").value = ""; }
function pushFormulaToPaste() {
  const el = document.getElementById("outStd");
  const box = document.getElementById("pasteLyrics");
  const formula = (el.value || "").trim();
  if (!formula) return;
  box.value = box.value && box.value.trim() ? box.value.trim() + "\n\n" + formula : formula;
}

/* ---------- export ---------- */
function buildCleanLyrics(tl) {
  let out = "";
  tl.forEach((row) => {
    if (isSection(row)) {
      const n = (row.name || "").trim();
      if (n) out += (out ? "\n" : "") + "[" + n + "]\n";
      return;
    }
    if (isInstr(row)) return;
    const lyric = (row.lyric || "").trim();
    if (lyric) out += lyric + "\n";
  });
  return out;
}

function buildStandardBlocks(tl) {
  const out = [];
  tl.forEach((row) => {
    if (isSection(row)) return;
    const time = "[" + formatStdTime(row.start_cs) + "–" + formatStdTime(row.end_cs) + "]";
    const groups = [];
    const chord = (row.chord || "").trim();
    if (chord) groups.push("[" + chord + "]");
    promptGroups(row.prompt).forEach((g) => groups.push("[" + g + "]"));
    const head = groups.length ? groups.join("") : "[INSTRUMENTAL]";
    const lyric = (row.lyric || "").trim();
    out.push(time + "\n" + head + (lyric ? "\n" + lyric : ""));
  });
  return out.join("\n\n");
}

function exportAll() {
  const tl = timeline();
  const bpm = document.getElementById("bpm")?.value || "120";
  let style = (document.getElementById("style")?.value || "").trim();
  if (style && !/\bBPM\b/i.test(style)) style = style.replace(/,?\s*$/, "") + ", " + bpm + " BPM";
  document.getElementById("outStyle").value = style;

  let suno = "";
  tl.forEach((row) => {
    if (isSection(row)) {
      const n = (row.name || "").trim();
      if (n) suno += "\n[" + n + "]\n";
      return;
    }
    const ts = row.start_fmt + "-" + row.end_fmt;
    const chord = (row.chord || "").trim();
    const lyric = (row.lyric || "").trim();
    const instr = isInstr(row);
    const p = (row.prompt || "").trim();
    /* tag pertama sudah instrumental? jangan tambahkan marker "Instrumental" lagi */
    const pIsInstr = /instrumental/i.test(p.split(",")[0]);
    const parts = [];
    if (instr && !pIsInstr) parts.push("Instrumental");
    else if (!instr && row.role && row.role !== "sing") parts.push(row.role);
    if (p) {
      if (!instr || !/^instrumental$/i.test(p)) parts.push(p);
    }
    const prompt = parts.join(", ") || (instr ? "Instrumental" : "");
    suno += "[" + ts + "][" + chord + "][" + prompt + "]" + (!instr && lyric ? " " + lyric : "") + "\n";
  });

  document.getElementById("outLyrics").value = buildCleanLyrics(tl);
  document.getElementById("outStd").value = buildStandardBlocks(tl);
  document.getElementById("outSuno").value = suno.trim() + "\n";

  const csvHeader = "index,kind,start,end,duration_s,name,role,chord,lyric,prompt,lipsync";
  const csvRows = tl.map((r) => {
    const q = (s) => '"' + String(s == null ? "" : s).replace(/"/g, '""') + '"';
    return [
      r.index,
      r.kind || (isInstr(r) ? "instr" : isSection(r) ? "section" : "line"),
      r.start_fmt, r.end_fmt, fromCs(r.duration_cs).toFixed(2),
      q(r.name), r.role, q(r.chord), q(r.lyric), q(r.prompt),
      r.lipsync ? "yes" : "no",
    ].join(",");
  });
  document.getElementById("outCsv").value = csvHeader + "\n" + csvRows.join("\n");

  let srt = "", n = 1;
  tl.forEach((r) => {
    if (isSection(r) || isInstr(r) || !r.lyric) return;
    srt += n + "\n" + formatSrt(r.start_cs) + " --> " + formatSrt(r.end_cs) + "\n" + r.lyric + "\n\n";
    n++;
  });
  document.getElementById("outSrt").value = srt;
}

/* ---------- util export ---------- */
function copyText(id) {
  const el = document.getElementById(id);
  if (!el) return;
  navigator.clipboard.writeText(el.value || "").then(
    () => {},
    () => { el.select(); document.execCommand("copy"); }
  );
}
function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
function saveLocal() {
  const payload = {
    title: document.getElementById("title").value,
    bpm: document.getElementById("bpm").value,
    tsig: document.getElementById("tsig").value,
    style: document.getElementById("style").value,
    lines: lines,
    paste: document.getElementById("pasteLyrics").value,
  };
  localStorage.setItem("nika_composer_v2", JSON.stringify(payload));
  alert("Tersimpan di browser (localStorage v2).");
}
function loadLocal() {
  const raw = localStorage.getItem("nika_composer_v2") || localStorage.getItem("nika_composer_v1");
  if (!raw) { alert("Belum ada data tersimpan."); return; }
  try {
    const data = JSON.parse(raw);
    document.getElementById("title").value = data.title || "";
    document.getElementById("bpm").value = data.bpm || 120;
    document.getElementById("tsig").value = data.tsig || "4/4";
    document.getElementById("style").value = data.style || "";
    if (typeof data.paste === "string") document.getElementById("pasteLyrics").value = data.paste;
    lines = Array.isArray(data.lines)
      ? data.lines.map((l) => {
          if (!l.kind) {
            if (l.role === "instrumen" || (!(l.lyric || "").trim() && /instrumental/i.test(l.section || ""))) {
              l.kind = "instr";
            } else if (l.section && !(l.lyric || "").trim() && !l.prompt) {
              l.kind = "section"; l.name = l.section;
            } else {
              l.kind = "line";
            }
          }
          l.id = l.id || uid();
          return l;
        })
      : [];
    recalcAll();
  } catch (e) {
    alert(ui("nika_loadfail", "Could not load the saved data."));
  }
}

/* ---------- chrome ---------- */
function setTheme(mode) {
  document.documentElement.dataset.theme = mode;
  try { localStorage.setItem("nika-composer-theme", mode); } catch (e) {}
}
function initChrome() {
  const btn = document.getElementById("modeBtn");
  if (btn) btn.addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(cur);
  });
  let saved = null;
  try { saved = localStorage.getItem("nika-composer-theme"); } catch (e) {}
  if (saved) setTheme(saved);
  else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  else setTheme("light");

  document.querySelectorAll("[data-style-preset]").forEach((b) => {
    b.addEventListener("click", () => {
      const el = document.getElementById("style");
      el.value = b.getAttribute("data-style-preset");
      exportAll();
    });
  });

  document.getElementById("bpm")?.addEventListener("change", () => {
    document.getElementById("statBpm").textContent = document.getElementById("bpm").value;
    exportAll();
  });
  document.getElementById("style")?.addEventListener("change", exportAll);
}

initChrome();
lines = [];
render();
exportAll();
document.addEventListener("vah-lang", function () { render(); });
