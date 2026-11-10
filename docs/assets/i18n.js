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
      ash_result: "Result", ash_ph: "Paste panel JSON. An array of panels, or a bundle with a chapters key.",
      nika_title_ph: "Song title / MV concept",
      nika_defdur: "Default duration (seconds)",
      nika_defsec: "Default section name",
      nika_defrole: "Default role",
      nika_instrdur: "Instrumental duration (seconds), fill-gap button",
      nika_fmt: "Block format: [TIME], then one [COMBO] tag per bracket, then the lyric line. Pick tags below. The result is written to the Music prompt column.",
      nika_inst: "Instruments", nika_tex: "Texture", nika_mood: "Mood", nika_dyn: "Dynamics",
      nika_key: "Key (optional)", nika_tempo: "Tempo (optional)",
      nika_target: "Apply to row", nika_apply: "Apply to row", nika_copytag: "Copy tags", nika_reset: "Reset",
      nika_pasteadd: "Add from paste", nika_pastereset: "Reset from paste", nika_pasteexp: "Export to paste", nika_pasteclr: "Clear paste",
      nika_pastehint: "Two formats: a standard block [00:00–00:06] + tags [PIANO][SOFT] + lyric, or one line [00:00.00-00:04.00][Am][soft] lyric. A section uses [name].",
      nika_stat_rows: "Rows", nika_col_kind: "Type / name", nika_col_prompt: "Music prompt", nika_col_act: "Actions",
      nika_clean: "Clean lyrics", nika_clean_s: "[section] + lyric",
      nika_block: "Standard block", nika_block_s: "[TIME] + [COMBO] + lyric",
      nika_subtag: "SECTION", nika_row: "row", nika_emptyph: "(empty)", nika_lyricph: "lyric",
      nika_promptph: "music prompt", nika_promptph_i: "music prompt / pad / drums",
      nika_sec_title: "Section name. Paste format [name]",
      nika_up_line: "Row above", nika_dn_line: "Row below", nika_up_ins: "Instrument above", nika_dn_ins: "Instrument below",
      nika_up_sec: "Section above", nika_dn_sec: "Section below",
      nika_secword: "section", nika_norows: "no rows yet",
      nika_sec_noprompt: "A section has no prompt column. Pick a normal row or an instrumental.",
      nika_loadfail: "Could not load the saved data.",
      nika_acoustic: "Acoustic",
      veta_empty_slot: "empty", veta_note_ph: "note (optional)", veta_del_photo: "Remove photo", veta_del: "Remove",
      veta_sheet_ratio: "Ratio", veta_sheet_h: "Height", veta_sheet_gap: "Gap", veta_sheet_cols: "Columns",
      veta_sheet_nums: "Numbers", veta_sheet_notes: "Notes", veta_on: "on", veta_off: "off", veta_board_empty: "(board empty)"

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
      ash_result: "Hasil", ash_ph: "Tempel JSON panel. Array panel, atau bundel dengan kunci chapters.",
      nika_title_ph: "Judul lagu / konsep MV",
      nika_defdur: "Durasi default (detik)",
      nika_defsec: "Nama sub judul default",
      nika_defrole: "Role default",
      nika_instrdur: "Durasi instrumental (detik), tombol isi jeda",
      nika_fmt: "Format blok: [TIME], lalu tag [COMBO] satu per kurung, lalu baris lirik. Pilih tag di bawah. Hasilnya ditulis ke kolom Prompt musik.",
      nika_inst: "Instrumen", nika_tex: "Tekstur", nika_mood: "Mood", nika_dyn: "Dinamika",
      nika_key: "Key (opsional)", nika_tempo: "Tempo (opsional)",
      nika_target: "Terapkan ke baris", nika_apply: "Terapkan ke baris", nika_copytag: "Copy tag", nika_reset: "Reset",
      nika_pasteadd: "Tambah dari paste", nika_pastereset: "Reset dari paste", nika_pasteexp: "Export ke paste", nika_pasteclr: "Hapus paste",
      nika_pastehint: "Dua format: blok standar [00:00–00:06] + tag [PIANO][SOFT] + lirik, atau satu baris [00:00.00-00:04.00][Am][soft] lirik. Sub judul pakai [nama].",
      nika_stat_rows: "Baris", nika_col_kind: "Jenis / nama", nika_col_prompt: "Prompt musik", nika_col_act: "Aksi",
      nika_clean: "Lirik bersih", nika_clean_s: "[sub judul] + lirik",
      nika_block: "Blok standar", nika_block_s: "[TIME] + [COMBO] + lirik",
      nika_subtag: "SUB JUDUL", nika_row: "baris", nika_emptyph: "(kosong)", nika_lyricph: "lirik",
      nika_promptph: "prompt musik", nika_promptph_i: "prompt musik / pad / drums",
      nika_sec_title: "Nama sub judul. Format paste [nama]",
      nika_up_line: "Baris di atas", nika_dn_line: "Baris di bawah", nika_up_ins: "Instrumen di atas", nika_dn_ins: "Instrumen di bawah",
      nika_up_sec: "Sub judul di atas", nika_dn_sec: "Sub judul di bawah",
      nika_secword: "sub judul", nika_norows: "belum ada baris",
      nika_sec_noprompt: "Sub judul tidak punya kolom prompt. Pilih baris biasa atau instrumental.",
      nika_loadfail: "Gagal memuat data.",
      nika_acoustic: "Akustik",
      veta_empty_slot: "kosong", veta_note_ph: "catatan (opsional)", veta_del_photo: "Hapus foto", veta_del: "Hapus",
      veta_sheet_ratio: "Rasio", veta_sheet_h: "Tinggi", veta_sheet_gap: "Jarak", veta_sheet_cols: "Kolom",
      veta_sheet_nums: "Nomor", veta_sheet_notes: "Catatan", veta_on: "tampil", veta_off: "off", veta_board_empty: "(papan kosong)"

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
      ash_result: "结果", ash_ph: "粘贴分镜 JSON。面板数组，或带 chapters 键的包。",
      nika_title_ph: "歌名 / MV 概念",
      nika_defdur: "默认时长（秒）",
      nika_defsec: "默认分段名",
      nika_defrole: "默认角色",
      nika_instrdur: "器乐时长（秒），补空档按钮",
      nika_fmt: "块格式：[TIME]，然后每个括号一个 [COMBO] 标签，再一行歌词。在下面选标签。结果写入音乐提示列。",
      nika_inst: "乐器", nika_tex: "质感", nika_mood: "情绪", nika_dyn: "动态",
      nika_key: "调（可选）", nika_tempo: "速度（可选）",
      nika_target: "应用到行", nika_apply: "应用到行", nika_copytag: "复制标签", nika_reset: "重置",
      nika_pasteadd: "从粘贴添加", nika_pastereset: "从粘贴重置", nika_pasteexp: "导出到粘贴", nika_pasteclr: "清空粘贴",
      nika_pastehint: "两种格式：标准块 [00:00–00:06] + 标签 [PIANO][SOFT] + 歌词，或单行 [00:00.00-00:04.00][Am][soft] 歌词。分段用 [名称]。",
      nika_stat_rows: "行", nika_col_kind: "类型 / 名称", nika_col_prompt: "音乐提示", nika_col_act: "操作",
      nika_clean: "干净歌词", nika_clean_s: "[分段] + 歌词",
      nika_block: "标准块", nika_block_s: "[TIME] + [COMBO] + 歌词",
      nika_subtag: "分段", nika_row: "行", nika_emptyph: "（空）", nika_lyricph: "歌词",
      nika_promptph: "音乐提示", nika_promptph_i: "音乐提示 / pad / 鼓",
      nika_sec_title: "分段名。粘贴格式 [名称]",
      nika_up_line: "上方加行", nika_dn_line: "下方加行", nika_up_ins: "上方加器乐", nika_dn_ins: "下方加器乐",
      nika_up_sec: "上方加分段", nika_dn_sec: "下方加分段",
      nika_secword: "分段", nika_norows: "还没有行",
      nika_sec_noprompt: "分段没有提示列。请选普通行或器乐。",
      nika_loadfail: "无法读取已存数据。",
      nika_acoustic: "原声",
      veta_empty_slot: "空", veta_note_ph: "备注（可选）", veta_del_photo: "删除照片", veta_del: "删除",
      veta_sheet_ratio: "比例", veta_sheet_h: "高度", veta_sheet_gap: "间距", veta_sheet_cols: "列",
      veta_sheet_nums: "编号", veta_sheet_notes: "备注", veta_on: "显示", veta_off: "关", veta_board_empty: "（板子是空的）"

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
      ash_result: "結果", ash_ph: "パネル JSON を貼る。配列、または chapters キーの束。",
      nika_title_ph: "曲名 / MV のコンセプト",
      nika_defdur: "初期の長さ（秒）",
      nika_defsec: "初期のセクション名",
      nika_defrole: "初期のロール",
      nika_instrdur: "インストの長さ（秒）、隙間埋めボタン",
      nika_fmt: "ブロック形式：[TIME]、次に括弧ごとの [COMBO] タグ、その後に歌詞。下でタグを選ぶ。結果は音楽プロンプト列に入る。",
      nika_inst: "楽器", nika_tex: "質感", nika_mood: "ムード", nika_dyn: "ダイナミクス",
      nika_key: "キー（任意）", nika_tempo: "テンポ（任意）",
      nika_target: "行に適用", nika_apply: "行に適用", nika_copytag: "タグをコピー", nika_reset: "リセット",
      nika_pasteadd: "貼り付けから追加", nika_pastereset: "貼り付けからリセット", nika_pasteexp: "貼り付けへ書き出し", nika_pasteclr: "貼り付けを消す",
      nika_pastehint: "二つの形式：標準ブロック [00:00–00:06] + タグ [PIANO][SOFT] + 歌詞、または一行 [00:00.00-00:04.00][Am][soft] 歌詞。セクションは [名前]。",
      nika_stat_rows: "行", nika_col_kind: "種類 / 名前", nika_col_prompt: "音楽プロンプト", nika_col_act: "操作",
      nika_clean: "きれいな歌詞", nika_clean_s: "[セクション] + 歌詞",
      nika_block: "標準ブロック", nika_block_s: "[TIME] + [COMBO] + 歌詞",
      nika_subtag: "セクション", nika_row: "行", nika_emptyph: "（空）", nika_lyricph: "歌詞",
      nika_promptph: "音楽プロンプト", nika_promptph_i: "音楽プロンプト / pad / ドラム",
      nika_sec_title: "セクション名。貼り付け形式 [名前]",
      nika_up_line: "上に行", nika_dn_line: "下に行", nika_up_ins: "上にインスト", nika_dn_ins: "下にインスト",
      nika_up_sec: "上にセクション", nika_dn_sec: "下にセクション",
      nika_secword: "セクション", nika_norows: "行はまだない",
      nika_sec_noprompt: "セクションにプロンプト列はない。通常の行かインストを選ぶ。",
      nika_loadfail: "保存データを読めなかった。",
      nika_acoustic: "アコースティック",
      veta_empty_slot: "空", veta_note_ph: "メモ（任意）", veta_del_photo: "写真を消す", veta_del: "削除",
      veta_sheet_ratio: "比率", veta_sheet_h: "高さ", veta_sheet_gap: "間隔", veta_sheet_cols: "列",
      veta_sheet_nums: "番号", veta_sheet_notes: "メモ", veta_on: "表示", veta_off: "オフ", veta_board_empty: "（板は空）"

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
      ash_result: "결과", ash_ph: "패널 JSON을 붙여 넣기. 배열, 또는 chapters 키가 있는 묶음.",
      nika_title_ph: "곡 제목 / MV 콘셉트",
      nika_defdur: "기본 길이 (초)",
      nika_defsec: "기본 구간 이름",
      nika_defrole: "기본 역할",
      nika_instrdur: "연주 길이 (초), 간격 채우기 버튼",
      nika_fmt: "블록 형식: [TIME], 그다음 괄호마다 [COMBO] 태그, 그다음 가사. 아래에서 태그를 고른다. 결과는 음악 프롬프트 칸에 들어간다.",
      nika_inst: "악기", nika_tex: "질감", nika_mood: "무드", nika_dyn: "다이내믹",
      nika_key: "키 (선택)", nika_tempo: "템포 (선택)",
      nika_target: "줄에 적용", nika_apply: "줄에 적용", nika_copytag: "태그 복사", nika_reset: "리셋",
      nika_pasteadd: "붙여넣기에서 추가", nika_pastereset: "붙여넣기에서 리셋", nika_pasteexp: "붙여넣기로 내보내기", nika_pasteclr: "붙여넣기 지우기",
      nika_pastehint: "두 형식: 표준 블록 [00:00–00:06] + 태그 [PIANO][SOFT] + 가사, 또는 한 줄 [00:00.00-00:04.00][Am][soft] 가사. 구간은 [이름].",
      nika_stat_rows: "줄", nika_col_kind: "종류 / 이름", nika_col_prompt: "음악 프롬프트", nika_col_act: "동작",
      nika_clean: "깨끗한 가사", nika_clean_s: "[구간] + 가사",
      nika_block: "표준 블록", nika_block_s: "[TIME] + [COMBO] + 가사",
      nika_subtag: "구간", nika_row: "줄", nika_emptyph: "(비움)", nika_lyricph: "가사",
      nika_promptph: "음악 프롬프트", nika_promptph_i: "음악 프롬프트 / pad / 드럼",
      nika_sec_title: "구간 이름. 붙여넣기 형식 [이름]",
      nika_up_line: "위에 줄", nika_dn_line: "아래에 줄", nika_up_ins: "위에 연주", nika_dn_ins: "아래에 연주",
      nika_up_sec: "위에 구간", nika_dn_sec: "아래에 구간",
      nika_secword: "구간", nika_norows: "아직 줄 없음",
      nika_sec_noprompt: "구간에는 프롬프트 칸이 없다. 일반 줄이나 연주를 고른다.",
      nika_loadfail: "저장 데이터를 열지 못했다.",
      nika_acoustic: "어쿠스틱",
      veta_empty_slot: "빔", veta_note_ph: "메모 (선택)", veta_del_photo: "사진 삭제", veta_del: "삭제",
      veta_sheet_ratio: "비율", veta_sheet_h: "높이", veta_sheet_gap: "간격", veta_sheet_cols: "열",
      veta_sheet_nums: "번호", veta_sheet_notes: "메모", veta_on: "표시", veta_off: "끔", veta_board_empty: "(보드 빔)"

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

  /* Levia /levia/ page strings. Merged into the packs above so one file stays the source. */
  var LEV = {
    en: {
      nav_levia: "Levia",
      lev_role: "Architecture and design practice",
      lev_lead: "Floor plans, elevations, site plans and renders for small residential work, drawn to a scale and checked against the model before anything is sent. Cost sheets on international standard. Measured work, not mood boards.",
      lev_what_h: "What this page is",
      lev_what_p: "This is the public home of the Levia app, an application built and operated by VAH Official. It is the address a person lands on before connecting a Google account. It does not sell anything and it takes no orders.",
      lev_practice: "The practice itself lives at",
      lev_do_h: "What the app does",
      lev_do_p: "The Levia app connects to one Google account, the one the owner authorises, and works with that account's own practice documents: a drawing folder, a reports folder, a budget sheet. It reads them, writes daily reports into them, and updates the budget rows from the token statement.",
      lev_do_1: "Files are read and written only inside folders that account already owns.",
      lev_do_2: "Nothing is shared, posted or sent to a third party by the app.",
      lev_do_3: "Access can be revoked at any time from the Google account's own permissions page, which stops the app immediately.",
      lev_do_4: "The app does not create accounts for other people and does not collect data about them.",
      lev_who_h: "Who runs it",
      lev_who_p: "VAH Official is a small studio. Levia is its architecture side. The work is drawings and cost sheets for clients who commission them, and each delivered set belongs to the buyer.",
      lev_pol_h: "Policies",
      lev_pol_p: "One privacy policy, one set of terms, one data-deletion page, shared with the rest of VAH Official so there is no second version to disagree with.",
      lev_pol_privacy: "Privacy policy",
      lev_pol_terms: "Terms of service",
      lev_pol_delete: "User data deletion",
      lev_contact_h: "Contact",
      lev_contact_p: "Email:",
      lev_contact_note: "Questions about the app, the policies, or a deletion request go to that address.",
      lev_foot: "VAH Official · Levia · architecture and design"
    },
    id: {
      nav_levia: "Levia",
      lev_role: "Praktik arsitektur dan desain",
      lev_lead: "Denah, tampak, site plan dan render untuk rumah kecil, digambar dengan skala dan dicek terhadap model sebelum dikirim. RAB standar internasional. Kerja terukur, bukan mood board.",
      lev_what_h: "Halaman ini apa",
      lev_what_p: "Ini rumah publik aplikasi Levia, dibuat dan dijalankan oleh VAH Official. Alamat yang dibuka sebelum menghubungkan akun Google. Tidak menjual apa pun dan tidak menerima pesanan.",
      lev_practice: "Praktiknya sendiri ada di",
      lev_do_h: "Aplikasinya kerja apa",
      lev_do_p: "Aplikasi Levia terhubung ke satu akun Google, akun yang pemiliknya izinkan, dan bekerja di dokumen praktik milik akun itu: folder gambar, folder laporan, satu sheet anggaran. Dibaca, laporan harian ditulis ke situ, baris anggaran diperbarui dari statement token.",
      lev_do_1: "File hanya dibaca dan ditulis di folder milik akun itu sendiri.",
      lev_do_2: "Tidak ada yang dibagikan, diposting atau dikirim ke pihak ketiga.",
      lev_do_3: "Akses bisa dicabut kapan saja dari halaman izin akun Google, dan aplikasi langsung berhenti.",
      lev_do_4: "Aplikasi tidak membuat akun untuk orang lain dan tidak mengumpulkan data mereka.",
      lev_who_h: "Siapa yang menjalankan",
      lev_who_p: "VAH Official studio kecil. Levia sisi arsitekturnya. Kerjanya gambar dan RAB untuk klien yang memesan, dan setiap set yang dikirim jadi milik pembelinya.",
      lev_pol_h: "Kebijakan",
      lev_pol_p: "Satu kebijakan privasi, satu ketentuan layanan, satu halaman hapus data, dipakai bersama seluruh VAH Official supaya tidak ada versi kedua yang bisa bertentangan.",
      lev_pol_privacy: "Kebijakan privasi",
      lev_pol_terms: "Ketentuan layanan",
      lev_pol_delete: "Hapus data pengguna",
      lev_contact_h: "Kontak",
      lev_contact_p: "Email:",
      lev_contact_note: "Pertanyaan soal aplikasi, kebijakan, atau permintaan hapus data ke alamat itu.",
      lev_foot: "VAH Official · Levia · arsitektur dan desain"
    },
    zh: {
      nav_levia: "Levia",
      lev_role: "建筑与设计事务所",
      lev_lead: "小型住宅的平面、立面、总平面与效果图。按比例绘制，发送前与模型逐项核对。造价表按国际标准。是测量的活，不是拼贴。",
      lev_what_h: "这是什么页面",
      lev_what_p: "这是 Levia 应用的公开主页，由 VAH Official 开发和运营。在连接 Google 账号之前会先来到这里。这里不出售任何东西，也不接受订单。",
      lev_practice: "事务所本身在这里",
      lev_do_h: "应用做什么",
      lev_do_p: "Levia 应用连接一个 Google 账号，即所有者授权的那个，只处理该账号自己的业务文档：图纸文件夹、报告文件夹、一份预算表。读取它们，把每日报告写进去，并按 token 账单更新预算行。",
      lev_do_1: "文件只在该账号自己拥有的文件夹内读写。",
      lev_do_2: "应用不分享、不发布、不向第三方发送任何内容。",
      lev_do_3: "随时可在 Google 账号的授权页面撤销访问，应用会立即停止。",
      lev_do_4: "应用不为他人创建账号，也不收集他人的数据。",
      lev_who_h: "谁在运营",
      lev_who_p: "VAH Official 是一个小工作室，Levia 是它的建筑部分。工作内容是受委托的图纸与造价表，每一套交付的文件归买家所有。",
      lev_pol_h: "政策",
      lev_pol_p: "一份隐私政策、一份服务条款、一页数据删除说明，与 VAH Official 其余部分共用，避免出现第二个互相矛盾的版本。",
      lev_pol_privacy: "隐私政策",
      lev_pol_terms: "服务条款",
      lev_pol_delete: "删除用户数据",
      lev_contact_h: "联系",
      lev_contact_p: "邮箱：",
      lev_contact_note: "关于应用、政策或删除数据的请求，请发到该地址。",
      lev_foot: "VAH Official · Levia · 建筑与设计"
    },
    ja: {
      nav_levia: "Levia",
      lev_role: "建築・デザインの実務",
      lev_lead: "小規模住宅の平面図、立面図、配置図、パース。縮尺どおりに描き、送る前に模型と照合する。数量・費用表は国際基準。測った仕事で、ムードボードではない。",
      lev_what_h: "このページについて",
      lev_what_p: "Levia アプリの公開ホームです。VAH Official が作り、運営しています。Google アカウントを接続する前に開くページです。何も販売せず、注文も受けません。",
      lev_practice: "実務そのものはこちらに",
      lev_do_h: "アプリがすること",
      lev_do_p: "Levia アプリは、所有者が許可した 1 つの Google アカウントに接続し、そのアカウント自身の業務文書だけを扱います。図面フォルダ、レポートフォルダ、予算シート。読み取り、日次レポートを書き込み、トークン明細から予算行を更新します。",
      lev_do_1: "ファイルはそのアカウントが持つフォルダの中だけで読み書きします。",
      lev_do_2: "共有・投稿・第三者への送信は行いません。",
      lev_do_3: "Google アカウントの許可ページからいつでも取り消せます。取り消すと即座に停止します。",
      lev_do_4: "他人のアカウントを作らず、他人のデータも集めません。",
      lev_who_h: "運営",
      lev_who_p: "VAH Official は小さなスタジオです。Levia はその建築部門です。仕事は依頼された図面と費用表で、納品した一式は購入者のものです。",
      lev_pol_h: "ポリシー",
      lev_pol_p: "プライバシーポリシー、利用規約、データ削除のページは各 1 つ。VAH Official 全体で共用し、食い違う第 2 版を作らないようにしています。",
      lev_pol_privacy: "プライバシーポリシー",
      lev_pol_terms: "利用規約",
      lev_pol_delete: "ユーザーデータの削除",
      lev_contact_h: "連絡先",
      lev_contact_p: "メール：",
      lev_contact_note: "アプリ、ポリシー、削除依頼についてはそのアドレスへ。",
      lev_foot: "VAH Official · Levia · 建築とデザイン"
    },
    ko: {
      nav_levia: "Levia",
      lev_role: "건축·디자인 실무",
      lev_lead: "소규모 주택의 평면도, 입면도, 배치도, 렌더. 축척대로 그리고 보내기 전에 모델과 대조합니다. 물량·비용표는 국제 기준. 잰 작업이고 무드보드가 아닙니다.",
      lev_what_h: "이 페이지는",
      lev_what_p: "Levia 앱의 공개 홈입니다. VAH Official이 만들고 운영합니다. Google 계정을 연결하기 전에 열리는 주소입니다. 아무것도 팔지 않고 주문도 받지 않습니다.",
      lev_practice: "실제 작업은 이쪽에 있습니다",
      lev_do_h: "앱이 하는 일",
      lev_do_p: "Levia 앱은 소유자가 허용한 Google 계정 하나에 연결해 그 계정의 업무 문서만 다룹니다. 도면 폴더, 보고서 폴더, 예산 시트. 읽고, 일일 보고서를 쓰고, 토큰 명세로 예산 행을 갱신합니다.",
      lev_do_1: "파일은 그 계정이 가진 폴더 안에서만 읽고 씁니다.",
      lev_do_2: "공유, 게시, 제3자 전송은 하지 않습니다.",
      lev_do_3: "Google 계정 권한 페이지에서 언제든 취소할 수 있고, 취소하면 즉시 멈춥니다.",
      lev_do_4: "다른 사람의 계정을 만들지 않고 그들의 데이터도 모으지 않습니다.",
      lev_who_h: "운영",
      lev_who_p: "VAH Official은 작은 스튜디오이고 Levia는 그 건축 쪽입니다. 작업은 의뢰받은 도면과 비용표이며, 납품한 세트는 구매자의 것입니다.",
      lev_pol_h: "정책",
      lev_pol_p: "개인정보 정책, 이용 약관, 데이터 삭제 안내는 각각 하나씩. VAH Official 전체가 함께 쓰며 서로 어긋나는 두 번째 판을 만들지 않습니다.",
      lev_pol_privacy: "개인정보 정책",
      lev_pol_terms: "이용 약관",
      lev_pol_delete: "사용자 데이터 삭제",
      lev_contact_h: "연락",
      lev_contact_p: "이메일:",
      lev_contact_note: "앱, 정책, 삭제 요청은 그 주소로 보내 주세요.",
      lev_foot: "VAH Official · Levia · 건축과 디자인"
    }
  };
  Object.keys(LEV).forEach(function (c) {
    if (!T[c]) return;
    Object.keys(LEV[c]).forEach(function (k) { T[c][k] = LEV[c][k]; });
  });

  window.VAH_I18N = { apply: apply, t: function (k) { return (T[current()] || T.en)[k] || k; }, current: current, langs: LANGS, setTheme: setTheme };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
