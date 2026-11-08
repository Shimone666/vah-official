/* VAH Official language switch. UI chrome only. No lore. */
(function () {
  "use strict";
  var KEY = "vah-lang";
  var LANGS = ["en", "id", "zh", "ja", "ko"];
  var LABEL = { en: "EN", id: "ID", zh: "中文", ja: "日本語", ko: "한국어" };

  var T = {
    en: {
      nav_home: "Home", nav_nika: "Nika", nav_veta: "Veta", nav_ashrael: "Ashrael", nav_tools: "Tools",
      nav_privacy: "Privacy", nav_terms: "Terms", nav_delete: "Data deletion",
      home_lead: "Public home for three agents. Songs, empty panel boards, and panel checks. Webtoon lore stays empty.",
      home_world_h: "Who is here",
      home_world_p: "Nika holds songs and content. Veta holds an empty webtoon board for layout only. Ashrael holds Panel QC. What shows is the public role, not a story.",
      home_ip_h: "Open a page",
      nika_card: "Composer. Grid, locked timestamps, standard music prompt. Runs in the browser.",
      veta_card: "Webtoon board. Ratio, gap, order, notes. Starts empty. No script and no lore.",
      ash_card: "Panel QC. Checks panel JSON in the browser. Nothing is uploaded.",
      lore_h: "Webtoon lore",
      lore_slot: "Left empty. This public page does not carry a story.",
      tools_h: "Tools",
      foot_home: "VAH Official · public theme · lore empty",
      daynight: "Day / Night",
      open: "Open"
    },
    id: {
      nav_home: "Beranda", nav_nika: "Nika", nav_veta: "Veta", nav_ashrael: "Ashrael", nav_tools: "Alat",
      nav_privacy: "Privasi", nav_terms: "Ketentuan", nav_delete: "Hapus data",
      home_lead: "Beranda publik untuk tiga agen. Lagu, papan panel kosong, dan cek panel. Lore webtoon tetap kosong.",
      home_world_h: "Siapa di sini",
      home_world_p: "Nika pegang lagu dan konten. Veta pegang papan webtoon kosong, hanya layout. Ashrael pegang Panel QC. Yang tampil peran publik, bukan cerita.",
      home_ip_h: "Buka halaman",
      nika_card: "Composer. Grid, timestamp terkunci, prompt musik standar. Jalan di browser.",
      veta_card: "Papan webtoon. Rasio, jarak, urutan, catatan. Mulai kosong. Tidak ada naskah dan tidak ada lore.",
      ash_card: "Panel QC. Cek JSON panel di browser. Tidak ada unggahan.",
      lore_h: "Lore webtoon",
      lore_slot: "Dikosongkan. Halaman publik ini tidak membawa cerita.",
      tools_h: "Alat",
      foot_home: "VAH Official · tema publik · lore kosong",
      daynight: "Siang / Malam",
      open: "Buka"
    },
    zh: {
      nav_home: "首页", nav_nika: "Nika", nav_veta: "Veta", nav_ashrael: "Ashrael", nav_tools: "工具",
      nav_privacy: "隐私", nav_terms: "条款", nav_delete: "删除数据",
      home_lead: "三位角色的公开主页。歌曲、空白分镜板、分镜检查。漫画设定保持空白。",
      home_world_h: "这里是谁",
      home_world_p: "Nika 负责歌曲与内容。Veta 负责空白漫画分镜板，只做版式。Ashrael 负责分镜检查。这里只显示公开职责，不是故事。",
      home_ip_h: "打开页面",
      nika_card: "作曲工具。网格、锁定时间戳、标准音乐提示。在浏览器里运行。",
      veta_card: "漫画分镜板。比例、间距、顺序、备注。从空白开始。没有剧本，没有设定。",
      ash_card: "分镜检查。在浏览器里检查分镜 JSON。不会上传。",
      lore_h: "漫画设定",
      lore_slot: "留空。这个公开页面不承载故事。",
      tools_h: "工具",
      foot_home: "VAH Official · 公开页 · 设定留空",
      daynight: "日 / 夜",
      open: "打开"
    },
    ja: {
      nav_home: "ホーム", nav_nika: "Nika", nav_veta: "Veta", nav_ashrael: "Ashrael", nav_tools: "ツール",
      nav_privacy: "プライバシー", nav_terms: "規約", nav_delete: "データ削除",
      home_lead: "三人の公開ホーム。曲、空のコマ割り、コマ検査。ウェブトゥーンの設定は空のまま。",
      home_world_h: "ここにいる人",
      home_world_p: "Nika は曲とコンテンツ。Veta は空のコマ割り板、レイアウトだけ。Ashrael はコマ検査。公開の役割だけを出す。物語ではない。",
      home_ip_h: "ページを開く",
      nika_card: "作曲ツール。グリッド、固定タイムスタンプ、標準の音楽プロンプト。ブラウザで動く。",
      veta_card: "ウェブトゥーン板。比率、間隔、順番、メモ。空から始まる。脚本も設定もない。",
      ash_card: "コマ検査。ブラウザでパネル JSON を確認。アップロードしない。",
      lore_h: "ウェブトゥーン設定",
      lore_slot: "空のまま。この公開ページに物語は載せない。",
      tools_h: "ツール",
      foot_home: "VAH Official · 公開テーマ · 設定は空",
      daynight: "昼 / 夜",
      open: "開く"
    },
    ko: {
      nav_home: "홈", nav_nika: "Nika", nav_veta: "Veta", nav_ashrael: "Ashrael", nav_tools: "도구",
      nav_privacy: "개인정보", nav_terms: "약관", nav_delete: "데이터 삭제",
      home_lead: "세 사람의 공개 홈. 곡, 빈 칸 보드, 칸 검사. 웹툰 설정은 비워 둔다.",
      home_world_h: "여기 있는 사람",
      home_world_p: "Nika는 곡과 콘텐츠. Veta는 빈 웹툰 보드, 레이아웃만. Ashrael은 칸 검사. 공개 역할만 보인다. 이야기가 아니다.",
      home_ip_h: "페이지 열기",
      nika_card: "작곡 도구. 그리드, 고정 타임스탬프, 표준 음악 프롬프트. 브라우저에서 동작.",
      veta_card: "웹툰 보드. 비율, 간격, 순서, 메모. 빈 칸에서 시작. 원고도 설정도 없음.",
      ash_card: "칸 검사. 브라우저에서 패널 JSON을 확인. 업로드하지 않음.",
      lore_h: "웹툰 설정",
      lore_slot: "비워 둠. 이 공개 페이지에는 이야기를 싣지 않는다.",
      tools_h: "도구",
      foot_home: "VAH Official · 공개 테마 · 설정 비움",
      daynight: "낮 / 밤",
      open: "열기"
    }
  };

  /* Tool chrome. Keys used on the three apps. */
  var EXTRA = {
    en: {
      nika_sub: "Grid beat · locked timestamp · standard music prompt",
      nika_proj: "Project", nika_title: "Title / concept", nika_style: "Music style (global)",
      nika_new: "New line defaults", nika_prompt: "Standard music prompt", nika_quick: "Quick fill", nika_priv: "Privacy",
      nika_priv_p: "Runs in the browser. No file upload. No network call from this tool. Save local keeps a copy in this browser only.",
      nika_addline: "+ Line", nika_addsec: "+ Section", nika_addins: "+ Instrumental",
      nika_gaps: "Fill instrumental gaps", nika_recalc: "Recalc timestamps", nika_export: "Refresh export",
      nika_save: "Save local", nika_load: "Load local",
      veta_sub: "Panel board for layout only: ratio, gap, size, order, numbers.",
      veta_emptyline: "The board starts empty. No script, no draft, no lore. Add an empty panel if you need one.",
      veta_set: "Panel settings", veta_ratio: "Panel ratio", veta_maxh: "Max slot height (px)",
      veta_gap: "Gap between panels (px)", veta_cols: "Columns", veta_opts: "Options",
      veta_notes: "Show note field", veta_nums: "Show panel numbers", veta_hint: "Show ratio on the slot",
      veta_add: "+ Empty panel", veta_clearn: "Clear notes", veta_reset: "Clear board",
      veta_priv: "Privacy",
      veta_priv_p: "Runs in the browser. A photo is read locally and is never uploaded. Settings stay in this browser. No webtoon lore on this page.",
      veta_can: "What this can and cannot do",
      veta_can_p: "Can: add or remove panels, change order, set ratio, gap, size, columns, numbers, notes. Not here: script, dialogue, characters, lore, chapter draft, sample art.",
      veta_board_h: "Board is still empty",
      veta_board_p: "No panels yet. Press Empty panel to set the layout.",
      veta_sheet: "Panel setting sheet",
      veta_sheet_p: "Numbers, ratio, and the active settings. No story text.",
      ash_sub: "One color. Checks panel JSON in this browser. Nothing is uploaded.",
      ash_settings: "Settings", ash_input: "Input", ash_check: "Check", ash_clear: "Clear",
      ash_sample: "Load sample", ash_report: "Copy report", ash_drop: "or drop a .json file here",
      ash_result: "Result", ash_ph: "Paste panel JSON. An array of panels, or a bundle with a chapters key."
    },
    id: {
      nika_sub: "Grid beat · timestamp terkunci · prompt musik format standar",
      nika_proj: "Proyek", nika_title: "Judul / konsep", nika_style: "Style musik (global)",
      nika_new: "Default baris baru", nika_prompt: "Prompt musik standar", nika_quick: "Quick fill", nika_priv: "Privasi",
      nika_priv_p: "Semua berjalan di browser. Tidak ada unggahan. Tidak ada panggilan jaringan dari tool ini. Save lokal hanya di browser ini.",
      nika_addline: "+ Baris", nika_addsec: "+ Sub judul", nika_addins: "+ Instrumental",
      nika_gaps: "Isi jeda instrumental", nika_recalc: "Recalc timestamp", nika_export: "Refresh export",
      nika_save: "Save lokal", nika_load: "Load lokal",
      veta_sub: "Papan panel untuk setting saja: rasio, jarak, ukuran, urutan, nomor.",
      veta_emptyline: "Papan ini sengaja kosong. Tidak ada naskah, tidak ada draft, tidak ada lore. Tambah panel kosong bila perlu.",
      veta_set: "Setting panel", veta_ratio: "Rasio panel", veta_maxh: "Tinggi maksimum slot (px)",
      veta_gap: "Jarak antar panel (px)", veta_cols: "Kolom", veta_opts: "Pelapan",
      veta_notes: "Tampilkan kolom catatan", veta_nums: "Tampilkan nomor panel", veta_hint: "Tampilkan rasio pada slot",
      veta_add: "+ Panel kosong", veta_clearn: "Hapus catatan", veta_reset: "Kosongkan papan",
      veta_priv: "Privasi",
      veta_priv_p: "Semua berjalan di browser. Foto hanya dibaca lokal dan tidak pernah diunggah. Setting di browser ini. Tidak ada lore di halaman ini.",
      veta_can: "Yang bisa dan tidak bisa",
      veta_can_p: "Bisa: tambah atau hapus panel, ubah urutan, atur rasio, jarak, ukuran, kolom, nomor, catatan. Tidak ada di sini: naskah, dialog, karakter, lore, draft chapter, gambar contoh.",
      veta_board_h: "Papan masih kosong",
      veta_board_p: "Belum ada panel. Tekan Panel kosong untuk menyiapkan setting.",
      veta_sheet: "Lembar setting panel",
      veta_sheet_p: "Daftar nomor, rasio, dan setting aktif. Tidak berisi isi cerita.",
      ash_sub: "Satu warna. Cek JSON panel di browser ini. Tidak ada unggahan.",
      ash_settings: "Setting", ash_input: "Masukan", ash_check: "Cek", ash_clear: "Bersihkan",
      ash_sample: "Muat contoh", ash_report: "Salin laporan", ash_drop: "atau jatuhkan file .json di sini",
      ash_result: "Hasil", ash_ph: "Tempel JSON panel. Array panel, atau bundel dengan kunci chapters."
    },
    zh: {
      nika_sub: "节拍网格 · 锁定时间戳 · 标准音乐提示",
      nika_proj: "项目", nika_title: "标题 / 概念", nika_style: "音乐风格（全局）",
      nika_new: "新行默认", nika_prompt: "标准音乐提示", nika_quick: "快速填入", nika_priv: "隐私",
      nika_priv_p: "只在浏览器里运行。不上传文件。这个工具不发网络请求。本地保存只留在这台浏览器。",
      nika_addline: "+ 行", nika_addsec: "+ 分段", nika_addins: "+ 器乐",
      nika_gaps: "补器乐空档", nika_recalc: "重算时间戳", nika_export: "刷新导出",
      nika_save: "本地保存", nika_load: "本地读取",
      veta_sub: "只做版式的分镜板：比例、间距、大小、顺序、编号。",
      veta_emptyline: "板子从空白开始。没有剧本，没有草稿，没有设定。需要时再加空白分镜。",
      veta_set: "分镜设置", veta_ratio: "分镜比例", veta_maxh: "槽最大高度（px）",
      veta_gap: "分镜间距（px）", veta_cols: "列数", veta_opts: "选项",
      veta_notes: "显示备注", veta_nums: "显示编号", veta_hint: "在槽上显示比例",
      veta_add: "+ 空白分镜", veta_clearn: "清除备注", veta_reset: "清空板子",
      veta_priv: "隐私",
      veta_priv_p: "只在浏览器里运行。照片只在本地读取，从不上传。设置留在这台浏览器。本页没有漫画设定。",
      veta_can: "能做和不能做",
      veta_can_p: "能做：加减分镜、改顺序、设比例、间距、大小、列、编号、备注。这里没有：剧本、对白、角色、设定、章节草稿、示例图。",
      veta_board_h: "板子还是空的",
      veta_board_p: "还没有分镜。按空白分镜开始排版。",
      veta_sheet: "分镜设置表",
      veta_sheet_p: "编号、比例和当前设置。不含故事正文。",
      ash_sub: "一种颜色。在这个浏览器里检查分镜 JSON。不会上传。",
      ash_settings: "设置", ash_input: "输入", ash_check: "检查", ash_clear: "清空",
      ash_sample: "载入示例", ash_report: "复制报告", ash_drop: "或把 .json 文件拖到这里",
      ash_result: "结果", ash_ph: "粘贴分镜 JSON。面板数组，或带 chapters 键的包。"
    },
    ja: {
      nika_sub: "グリッド · 固定タイムスタンプ · 標準の音楽プロンプト",
      nika_proj: "プロジェクト", nika_title: "タイトル / コンセプト", nika_style: "音楽スタイル（全体）",
      nika_new: "新しい行の初期値", nika_prompt: "標準の音楽プロンプト", nika_quick: "クイック入力", nika_priv: "プライバシー",
      nika_priv_p: "ブラウザの中だけで動く。アップロードしない。このツールは通信しない。ローカル保存はこのブラウザだけ。",
      nika_addline: "+ 行", nika_addsec: "+ セクション", nika_addins: "+ インスト",
      nika_gaps: "インストの隙間を埋める", nika_recalc: "タイムスタンプ再計算", nika_export: "書き出しを更新",
      nika_save: "ローカル保存", nika_load: "ローカル読込",
      veta_sub: "レイアウトだけのコマ板。比率、間隔、サイズ、順番、番号。",
      veta_emptyline: "板は空から始まる。脚本も下書きも設定もない。必要なら空のコマを足す。",
      veta_set: "コマ設定", veta_ratio: "コマ比率", veta_maxh: "スロット最大高さ（px）",
      veta_gap: "コマの間隔（px）", veta_cols: "列", veta_opts: "オプション",
      veta_notes: "メモ欄を表示", veta_nums: "番号を表示", veta_hint: "スロットに比率を表示",
      veta_add: "+ 空のコマ", veta_clearn: "メモを消す", veta_reset: "板を空にする",
      veta_priv: "プライバシー",
      veta_priv_p: "ブラウザの中だけで動く。写真はローカルで読むだけで、アップロードしない。設定はこのブラウザに残る。このページに設定資料はない。",
      veta_can: "できること、できないこと",
      veta_can_p: "できる：コマの追加と削除、順番、比率、間隔、サイズ、列、番号、メモ。ここにはない：脚本、セリフ、キャラ、設定、章の下書き、見本画像。",
      veta_board_h: "板はまだ空",
      veta_board_p: "コマはまだない。空のコマを押してレイアウトを始める。",
      veta_sheet: "コマ設定シート",
      veta_sheet_p: "番号、比率、今の設定。物語の本文は入らない。",
      ash_sub: "一色。このブラウザでパネル JSON を検査。アップロードしない。",
      ash_settings: "設定", ash_input: "入力", ash_check: "検査", ash_clear: "クリア",
      ash_sample: "サンプル", ash_report: "報告をコピー", ash_drop: "または .json をここに落とす",
      ash_result: "結果", ash_ph: "パネル JSON を貼る。配列、または chapters キーの束。"
    },
    ko: {
      nika_sub: "그리드 · 고정 타임스탬프 · 표준 음악 프롬프트",
      nika_proj: "프로젝트", nika_title: "제목 / 콘셉트", nika_style: "음악 스타일 (전체)",
      nika_new: "새 줄 기본값", nika_prompt: "표준 음악 프롬프트", nika_quick: "빠른 입력", nika_priv: "프라이버시",
      nika_priv_p: "브라우저 안에서만 동작. 업로드 없음. 이 도구는 네트워크를 부르지 않음. 로컬 저장은 이 브라우저에만.",
      nika_addline: "+ 줄", nika_addsec: "+ 구간", nika_addins: "+ 연주",
      nika_gaps: "연주 간격 채우기", nika_recalc: "타임스탬프 다시 계산", nika_export: "내보내기 새로고침",
      nika_save: "로컬 저장", nika_load: "로컬 불러오기",
      veta_sub: "레이아웃만 하는 칸 보드. 비율, 간격, 크기, 순서, 번호.",
      veta_emptyline: "보드는 빈 칸에서 시작. 원고도 초고도 설정도 없음. 필요하면 빈 칸을 추가.",
      veta_set: "칸 설정", veta_ratio: "칸 비율", veta_maxh: "슬롯 최대 높이 (px)",
      veta_gap: "칸 간격 (px)", veta_cols: "열", veta_opts: "옵션",
      veta_notes: "메모 표시", veta_nums: "번호 표시", veta_hint: "슬롯에 비율 표시",
      veta_add: "+ 빈 칸", veta_clearn: "메모 지우기", veta_reset: "보드 비우기",
      veta_priv: "프라이버시",
      veta_priv_p: "브라우저 안에서만 동작. 사진은 로컬에서만 읽고 업로드하지 않음. 설정은 이 브라우저에 남음. 이 페이지에 웹툰 설정 없음.",
      veta_can: "되는 것, 안 되는 것",
      veta_can_p: "됨: 칸 추가·삭제, 순서, 비율, 간격, 크기, 열, 번호, 메모. 여기 없음: 원고, 대사, 캐릭터, 설정, 챕터 초고, 예시 그림.",
      veta_board_h: "보드가 아직 빔",
      veta_board_p: "칸이 없음. 빈 칸을 눌러 레이아웃을 시작.",
      veta_sheet: "칸 설정 시트",
      veta_sheet_p: "번호, 비율, 현재 설정. 이야기 본문은 없음.",
      ash_sub: "한 가지 색. 이 브라우저에서 패널 JSON을 검사. 업로드하지 않음.",
      ash_settings: "설정", ash_input: "입력", ash_check: "검사", ash_clear: "지우기",
      ash_sample: "샘플", ash_report: "보고 복사", ash_drop: "또는 .json 파일을 여기에",
      ash_result: "결과", ash_ph: "패널 JSON을 붙여 넣기. 배열, 또는 chapters 키가 있는 묶음."
    }
  };

  LANGS.forEach(function (code) {
    Object.keys(EXTRA[code]).forEach(function (k) { T[code][k] = EXTRA[code][k]; });
  });

  function current() {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (LANGS.indexOf(saved) >= 0) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("id") === 0) return "id";
    if (nav.indexOf("zh") === 0) return "zh";
    if (nav.indexOf("ja") === 0) return "ja";
    if (nav.indexOf("ko") === 0) return "ko";
    return "en";
  }

  function apply(code) {
    if (LANGS.indexOf(code) < 0) code = "en";
    var pack = T[code];
    document.documentElement.lang = code === "zh" ? "zh-Hans" : code;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (pack[k] != null) el.textContent = pack[k];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-placeholder");
      if (pack[k] != null) el.setAttribute("placeholder", pack[k]);
    });
    document.querySelectorAll("[data-vah-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-vah-lang") === code ? "true" : "false");
    });
    try { localStorage.setItem(KEY, code); } catch (e) {}
    document.dispatchEvent(new CustomEvent("vah-lang", { detail: code }));
  }

  var THEME_KEY = "vah-theme";
  function setTheme(mode) {
    if (mode !== "dark" && mode !== "light") mode = "light";
    document.documentElement.dataset.theme = mode;
    if (document.body) document.body.dataset.mode = mode === "dark" ? "night" : "day";
    try { localStorage.setItem(THEME_KEY, mode); } catch (e) {}
  }
  function mountTheme() {
    var btn = document.getElementById("modeBtn");
    if (btn && !btn.dataset.themeReady) {
      btn.dataset.themeReady = "1";
      btn.addEventListener("click", function () {
        setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
      });
    }
    var saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY) || localStorage.getItem("vah-home-theme") || localStorage.getItem("veta-webtoon-theme") || localStorage.getItem("ashrael-qc-mode");
    } catch (e) {}
    if (saved === "night") saved = "dark";
    if (saved === "day") saved = "light";
    if (saved === "dark" || saved === "light") setTheme(saved);
    else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
    else setTheme("light");
  }

  function mount() {
    document.querySelectorAll("[data-langbar]").forEach(function (bar) {
      if (bar.dataset.ready) return;
      bar.dataset.ready = "1";
      bar.setAttribute("role", "group");
      LANGS.forEach(function (code) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "langbtn";
        b.textContent = LABEL[code];
        b.setAttribute("data-vah-lang", code);
        b.addEventListener("click", function () { apply(code); });
        bar.appendChild(b);
      });
    });
    mountTheme();
    apply(current());
  }

  window.VAH_I18N = { apply: apply, t: function (k) { return (T[current()] || T.en)[k] || k; }, current: current, langs: LANGS, setTheme: setTheme };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
