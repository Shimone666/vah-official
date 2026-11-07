/* VAH Official - public concept database.
 *
 * Level: CONCEPT ONLY.
 *   - no character names
 *   - no agent identities or personal history
 *   - no specific areas, cities, or sectors
 *   - no story plot, chapter outline, or webtoon script
 *   - no internal repository paths, credentials, or internal notes
 *
 * Setting: a future world in 2056. Everything here is revisable.
 * This file is the single place to edit the database: change any string,
 * commit, and the page picks it up. Nothing is uploaded, nothing is stored
 * server-side, and the whole thing runs in the reader's browser.
 */
window.VAH_DB = {
  meta: {
    version: "2026-11-07",
    review: {
      en: "7 November 2026",
      id: "7 November 2026",
      zh: "2026年11月7日",
      ja: "2026年11月7日",
      ko: "2026년 11월 7일"
    }
  },

  /* ---- groups and categories --------------------------------------- */
  groups: {
    world: { en: "World", id: "Dunia", zh: "世界", ja: "ワールド", ko: "월드" },
    agents: { en: "Agents", id: "Agen", zh: "代理", ja: "エージェント", ko: "에이전트" }
  },

  cats: [
    { id: "world.setting", group: "world", label: { en: "Setting", id: "Latar", zh: "设定", ja: "設定", ko: "설정" } },
    { id: "world.society", group: "world", label: { en: "Society", id: "Masyarakat", zh: "社会", ja: "社会", ko: "사회" } },
    { id: "world.tech", group: "world", label: { en: "Technology", id: "Teknologi", zh: "技术", ja: "技術", ko: "기술" } },
    { id: "world.env", group: "world", label: { en: "Environment", id: "Lingkungan", zh: "环境", ja: "環境", ko: "환경" } },
    { id: "world.econ", group: "world", label: { en: "Economy", id: "Ekonomi", zh: "经济", ja: "経済", ko: "경제" } },
    { id: "world.archive", group: "world", label: { en: "Archive", id: "Arsip", zh: "档案", ja: "記録", ko: "기록" } },
    { id: "agent.nika", group: "agents", label: { en: "Nika", id: "Nika", zh: "Nika", ja: "Nika", ko: "Nika" } },
    { id: "agent.veta", group: "agents", label: { en: "Veta", id: "Veta", zh: "Veta", ja: "Veta", ko: "Veta" } },
    { id: "agent.ashrael", group: "agents", label: { en: "Ashrael", id: "Ashrael", zh: "Ashrael", ja: "Ashrael", ko: "Ashrael" } }
  ],

  /* ---- entries ------------------------------------------------------ */
  entries: [
    {
      id: "era-2056", cat: "world.setting",
      t: {
        en: "The year 2056",
        id: "Tahun 2056",
        zh: "2056 年",
        ja: "2056 年",
        ko: "2056년"
      },
      d: {
        en: "A near future that stopped asking for more and started asking what already works. The year is the anchor of the setting, not a verdict on it.",
        id: "Masa depan dekat yang berhenti bertanya 'lebih banyak lagi' dan mulai bertanya apa yang sudah bekerja. Tahun 2056 adalah jangkar latar ini, bukan vonis atasnya.",
        zh: "一个不再追问“还要更多”、转而追问“什么已经奏效”的近未来。年份是设定的锚点，而不是对它的判决。",
        ja: "「もっと」を求め続けるのをやめ、「すでに機能しているものは何か」を問うようになった近未来。年は設定の錨であり、裁定ではない。",
        ko: "더 이상 ‘더 많은 것’을 요구하지 않고 ‘이미 작동하는 것은 무엇인가’를 묻기 시작한 근미래. 그해는 세팅의 닻이지 판결이 아니다."
      }
    },
    {
      id: "virtual-avatar", cat: "world.setting",
      t: {
        en: "Virtual avatar practice",
        id: "Praktik avatar virtual",
        zh: "虚拟化身实践",
        ja: "バーチャルアバターの実践",
        ko: "가상 아바타 관행"
      },
      d: {
        en: "A tuned representation can carry reputation, rights, and memory. Physical presence is an option in this world, not a requirement.",
        id: "Representasi yang disesuaikan bisa membawa reputasi, hak, dan ingatan. Kehadiran fisik adalah pilihan di dunia ini, bukan syarat.",
        zh: "经过调校的表征可以承载声誉、权利与记忆。在这个世界里，实体在场是一种选择，而不是前提。",
        ja: "調整された表現は評判・権利・記憶を運ぶ。この世界では物理的な存在は前提ではなく、選択肢である。",
        ko: "조정된 표현은 평판과 권리, 기억을 실어 나른다. 이 세계에서 물리적 존재는 조건이 아니라 선택이다."
      }
    },
    {
      id: "world-record", cat: "world.setting",
      t: {
        en: "The world record",
        id: "Catatan dunia",
        zh: "世界记录",
        ja: "ワールドレコード",
        ko: "세계 기록"
      },
      d: {
        en: "One living, versioned description of the setting, read by production and written back by it. It is maintained rather than remembered.",
        id: "Satu deskripsi hidup dan berversi tentang latar ini, dibaca lalu ditulis balik oleh produksi. Ia dipelihara, bukan diingat.",
        zh: "一份有生命、有版本的世界描述，由制作读取并回写。它是被维护的，而不是被记住的。",
        ja: "設定を記したひとつの生きた解釈であり、制作が読み、制作が書き戻す。記憶されるのではなく維持される。",
        ko: "세팅을 담은 살아 있고 버전 관리되는 하나의 설명. 제작이 읽고 되돌려 쓴다. 기억되는 것이 아니라 관리된다."
      }
    },
    {
      id: "canon-layers", cat: "world.setting",
      t: {
        en: "Canon layers",
        id: "Lapisan kanon",
        zh: "设定分层",
        ja: "設定レイヤー",
        ko: "칸 레이어"
      },
      d: {
        en: "Fixed, revisable, and draft. Public pages show only the fixed layer, so the record can move without the surface breaking.",
        id: "Tetap, bisa diubah, dan draf. Halaman publik hanya menampilkan lapisan tetap, jadi catatannya boleh bergeser tanpa merusak permukaannya.",
        zh: "固定、可修订、草稿三层。公开页面只展示固定层，因此记录可以移动，而界面不会破损。",
        ja: "固定・修正可・下書き。公開ページは固定層だけを見せるため、記録が動いても表面は崩れない。",
        ko: "고정, 수정 가능, 초안. 공개 페이지는 고정 레이어만 보여 주므로 기록이 움직여도 화면은 무너지지 않는다."
      }
    },
    {
      id: "daily-work", cat: "world.society",
      t: {
        en: "The working day",
        id: "Hari kerja",
        zh: "工作日",
        ja: "一日の仕事",
        ko: "업무 하루"
      },
      d: {
        en: "Make, check, release. Short cycles with a check between them, and a record left behind every time.",
        id: "Buat, cek, rilis. Siklus pendek dengan pemeriksaan di antaranya, dan jejak yang ditinggalkan setiap kali.",
        zh: "制作、校验、发布。循环很短，中间夹一次检查，每次都留下记录。",
        ja: "つくる、確かめる、公開する。短いサイクルに検査を挟み、そのたびに記録を残す。",
        ko: "만들고, 검사하고, 공개한다. 짧은 주기 사이에 확인이 있고, 매번 흔적이 남는다."
      }
    },
    {
      id: "trust-evidence", cat: "world.society",
      t: {
        en: "Trust through evidence",
        id: "Kepercayaan lewat bukti",
        zh: "以证据建立信任",
        ja: "証拠による信頼",
        ko: "증거를 통한 신뢰"
      },
      d: {
        en: "Confidence comes from checks that somebody else can repeat, not from a claim that only sounds certain.",
        id: "Keyakinan datang dari pemeriksaan yang bisa diulang orang lain, bukan dari klaim yang hanya terdengar pasti.",
        zh: "信任来自他人可以重复的检查，而不是听起来斩钉截铁的声明。",
        ja: "確信は、他の人が再現できる検査から生まれる。听起来確かそうな主張からではない。",
        ko: "확신은 남이 반복할 수 있는 검사에서 온다. 확신처럼 들리는 주장에서가 아니다."
      }
    },
    {
      id: "craft-culture", cat: "world.society",
      t: {
        en: "Craft culture",
        id: "Budaya kerajinan",
        zh: "手艺文化",
        ja: "クラフト文化",
        ko: "장인 문화"
      },
      d: {
        en: "Generators supply material; judgement stays human. The interesting work is choosing, cutting, and signing off.",
        id: "Generator menyediakan bahan; penilaian tetap di tangan manusia. Pekerjaan menariknya adalah memilih, memotong, dan memberi tanda final.",
        zh: "生成器提供素材，判断仍由人完成。真正有趣的工作是取舍、剪辑与定稿。",
        ja: "生成器は素材を用意し、判断は人の手にある。面白い作業は選ぶこと、切ること、そして確定すること。",
        ko: "생성기는 재료를 내고 판단은 사람의 몫. 재미있는 일은 고르고, 자르고, 확정하는 일이다."
      }
    },
    {
      id: "public-record", cat: "world.society",
      t: {
        en: "The public record",
        id: "Catatan publik",
        zh: "公开记录",
        ja: "公開レコード",
        ko: "공개 기록"
      },
      d: {
        en: "What the public page shows is a projection of the internal record, filtered by rule rather than by preference.",
        id: "Yang tampil di halaman publik adalah proyeksi catatan internal, disaring oleh aturan, bukan oleh selera.",
        zh: "公开页面所展示的是内部记录的投影，由规则过滤，而非由偏好过滤。",
        ja: "公開ページに出るものは内部記録の投影で、好みではなく規則で絞り込まれている。",
        ko: "공개 페이지에 보이는 것은 내부 기록의 투영이며, 취향이 아니라 규칙으로 거른다."
      }
    },
    {
      id: "synthetic-media", cat: "world.tech",
      t: {
        en: "Synthetic media",
        id: "Media sintetis",
        zh: "合成媒体",
        ja: "合成メディア",
        ko: "합성 미디어"
      },
      d: {
        en: "Generated image, voice, and music are ordinary here. Provenance and consent are the scarce parts.",
        id: "Gambar, suara, dan musik hasil generasi sudah biasa di sini. Yang langka adalah asal-usul dan persetujuan.",
        zh: "生成的图像、声音与音乐在这里已是常态。稀缺的是来源与许可。",
        ja: "生成された画像・音声・音楽はここでは日常。希少なのは来歴と同意。",
        ko: "생성된 이미지, 목소리, 음악은 여기서는 보통 일이다. 드문 것은 출처와 동의다."
      }
    },
    {
      id: "agentic-work", cat: "world.tech",
      t: {
        en: "Agentic work",
        id: "Kerja agen",
        zh: "代理式工作",
        ja: "エージェントの仕事",
        ko: "에이전트 작업"
      },
      d: {
        en: "An agent takes a bounded brief, produces artefacts, and reports what it did so a person can judge the result.",
        id: "Agen menerima brief yang dibatasi, menghasilkan artefak, dan melaporkan apa yang ia kerjakan supaya orang bisa menilai hasilnya.",
        zh: "代理接受一份边界清晰的简报，产出成果，并汇报自己做了什么，好让人来评判。",
        ja: "エージェントは範囲を限られた指示を受け、成果を生み、何をしたかを報告する。人はそこで判断する。",
        ko: "에이전트는 범위가 정된 지시를 받고 산출물을 만들며, 무엇을 했는지 보고한다. 사람이 판단한다."
      }
    },
    {
      id: "local-first", cat: "world.tech",
      t: {
        en: "Local-first tools",
        id: "Alat local-first",
        zh: "本地优先工具",
        ja: "ローカルファーストの道具",
        ko: "로컬 우선 도구"
      },
      d: {
        en: "Public tools run inside the reader's browser. Files are read locally and never uploaded anywhere.",
        id: "Alat publik berjalan di dalam browser pembaca. Berkas dibaca secara lokal dan tidak pernah diunggah ke mana pun.",
        zh: "公开工具在读者的浏览器里运行。文件在本地读取，绝不上传到任何地方。",
        ja: "公開ツールは読者のブラウザ内で動く。ファイルはローカルで読まれ、どこにもアップロードされない。",
        ko: "공개 도구는 읽는 사람의 브라우저 안에서 돈다. 파일은 로컬에서만 읽히고 어디에도 올라가지 않는다."
      }
    },
    {
      id: "verification-layer", cat: "world.tech",
      t: {
        en: "The verification layer",
        id: "Lapisan verifikasi",
        zh: "校验层",
        ja: "検証レイヤー",
        ko: "검증 레이어"
      },
      d: {
        en: "Every artefact passes a separate check stage: format, consistency, and safety, each with its own severity.",
        id: "Setiap artefak melewati tahap pemeriksaan tersendiri: format, konsistensi, dan keamanan, masing-masing dengan tingkat keparahan sendiri.",
        zh: "每件成果都要经过独立的校验环节：格式、一致性与安全，各自有各自的严重等级。",
        ja: "すべての成果は独立した検査段階を通る。形式、一貫性、安全。それぞれに固有の重大度がある。",
        ko: "모든 산출물은 별도 검사 단계를 거친다. 형식, 일관성, 안전, 각각 고유한 심각도를 가진다."
      }
    },
    {
      id: "climate-baseline", cat: "world.env",
      t: {
        en: "Climate baseline",
        id: "Baseline iklim",
        zh: "气候基线",
        ja: "気候ベースライン",
        ko: "기후 기준선"
      },
      d: {
        en: "Adaptation is normal. Design assumes heat, water stress, and seasonal extremes as given conditions.",
        id: "Adaptasi adalah hal wajar. Desain mengasumsikan panas, stres air, dan ekstrem musiman sebagai kondisi bawaan.",
        zh: "适应已是常态。设计默认把高温、水资源紧张与季节极端当作既有条件。",
        ja: "適応は日常。設計は熱、水の逼迫、季節的極端を前提条件として扱う。",
        ko: "적응은 당연하다. 설계는 열, 물 부족, 계절 극단을 주어진 조건으로 다룬다."
      }
    },
    {
      id: "settlement-form", cat: "world.env",
      t: {
        en: "Settlement form",
        id: "Bentuk permukiman",
        zh: "聚落形态",
        ja: "居住の形態",
        ko: "정주 형태"
      },
      d: {
        en: "Dense vertical housing with shared energy, water, and civic space. Floor area is planned rather than improvised.",
        id: "Hunian vertikal padat dengan energi, air, dan ruang civic yang bersama. Luas lantai direncanakan, bukan dikerjakan seadanya.",
        zh: "高密度垂直居住，能源、供水与公共空间共享。楼面面积是规划出来的，不是临时凑出来的。",
        ja: "高密度の垂直住宅。エネルギー・水・市民空間は共有。床面積は即興ではなく計画される。",
        ko: "밀도 높은 수직 주거. 에너지와 물, 시민 공간은 공유한다. 바닥 면적은 즉흥이 아니라 계획된다."
      }
    },
    {
      id: "energy-grid", cat: "world.env",
      t: {
        en: "Distributed energy",
        id: "Energi terdistribusi",
        zh: "分布式能源",
        ja: "分散型エネルギー",
        ko: "분산형 에너지"
      },
      d: {
        en: "Local generation and long-duration storage keep grids islanded. A region can run for months without its neighbours.",
        id: "Generasi lokal dan penyimpanan jangka panjang membuat jaringan tetap terisolasi. Sebuah wilayah bisa jalan berbulan-bulan tanpa tetangganya.",
        zh: "本地发电与长时储能让电网保持孤岛运行。一个区域可以数月不依赖邻区。",
        ja: "地域発電と長時間蓄電により、送電網は島状運転を保つ。地域どうしで依存せず数か月も成立する。",
        ko: "지역 발전과 장시간 저장으로 전력망은 섬유 상태를 유지한다. 지역끼리 서로 없이도 몇 달을 버틸 수 있다."
      }
    },
    {
      id: "mobility", cat: "world.env",
      t: {
        en: "Mobility",
        id: "Mobilitas",
        zh: "流动性",
        ja: "移動",
        ko: "이동성"
      },
      d: {
        en: "Travel is costly and slow. Most production and collaboration happens without anybody relocating.",
        id: "Perjalanan mahal dan lambat. Sebagian besar produksi dan kolaborasi terjadi tanpa ada yang berpindah tempat.",
        zh: "出行昂贵而缓慢。绝大部分制作与协作都不需要任何人搬迁。",
        ja: "移動は高く、遅い。制作と協働の大半は、誰も移動しなくて進む。",
        ko: "여행은 비싸고 느리다. 대부분의 제작과 협업은 아무도 옮기지 않고 이루어진다."
      }
    },
    {
      id: "creative-economy", cat: "world.econ",
      t: {
        en: "Creative economy",
        id: "Ekonomi kreatif",
        zh: "创意经济",
        ja: "クリエイティブ経済",
        ko: "창작 경제"
      },
      d: {
        en: "Value moved away from owning assets and towards owning method, access, and the trust of an audience.",
        id: "Nilai berpindah dari memiliki aset menuju memiliki metode, akses, dan kepercayaan audiens.",
        zh: "价值从拥有资产，转向拥有方法、渠道与受众的信任。",
        ja: "価値の中心が資産の所有から、方法・アクセス・聴衆の信頼へ移った。",
        ko: "가치는 자산 소유에서 방법, 접근, 관객 신뢰의 소유로 옮겨갔다."
      }
    },
    {
      id: "synthetic-rights", cat: "world.econ",
      t: {
        en: "Rights in synthetic work",
        id: "Hak atas karya sintetis",
        zh: "合成作品的权利",
        ja: "合成作品の権利",
        ko: "합성 작품의 권리"
      },
      d: {
        en: "Who owns an output made with models, tools, and agents is settled by contract rather than by default.",
        id: "Siapa memiliki keluaran yang dibuat dengan model, alat, dan agen ditentukan oleh kontrak, bukan oleh aturan bawaan.",
        zh: "由模型、工具与代理共同产出的成果归谁所有，由合同约定，而不是默认。",
        ja: "モデル・道具・エージェントで作る成果の所有者は、既定ではなく契約で決める。",
        ko: "모델, 도구, 에이전트가 함께 만든 산출물의 주인은 기본값이 아니라 계약으로 정한다."
      }
    },
    {
      id: "audit-culture", cat: "world.econ",
      t: {
        en: "Audit culture",
        id: "Budaya audit",
        zh: "审计文化",
        ja: "監査文化",
        ko: "감사 문화"
      },
      d: {
        en: "Public work is expected to carry a trail of checks, sources, and revisions that anybody can follow.",
        id: "Karya publik diharapkan membawa jejak pemeriksaan, sumber, dan revisi yang bisa diikuti siapa saja.",
        zh: "公开作品被期待带上一条任何人都能跟读的检查、来源与修订痕迹。",
        ja: "公開の作品には、誰もがたどれる検査・出典・改訂の履歴が添えられる。",
        ko: "공개 작업에는 누구나 따라갈 수 있는 검사, 출처, 수정 이력이 함께한다."
      }
    },
    {
      id: "small-studio", cat: "world.econ",
      t: {
        en: "Small studio shape",
        id: "Bentuk studio kecil",
        zh: "小工作室形态",
        ja: "小さなスタジオ",
        ko: "작은 스튜디오"
      },
      d: {
        en: "A small mixed crew can ship what once needed an institution. The cost is coordination, not capability.",
        id: "Tim kecil yang beragam bisa mengerjakan apa yang dulu butuh institusi. Biayanya koordinasi, bukan kemampuan.",
        zh: "一支小而复合的团队可以完成过去需要机构才能完成的事。代价是协调，而不是能力。",
        ja: "少数人で構成された複業チームで、かつて機関を要した仕事を届けられる。コストは能力ではなく調整力。",
        ko: "작고 복합적인 팀이 예전에 기관이 필요했던 일을 해낼 수 있다. 비용은 역량이 아니라 조율이다."
      }
    },
    {
      id: "concept-archive", cat: "world.archive",
      t: {
        en: "Concept archive",
        id: "Arsip konsep",
        zh: "概念档案",
        ja: "コンセプト・アーカイブ",
        ko: "컨셉 기록보관소"
      },
      d: {
        en: "A public archive of ideas and structures, deliberately kept at concept level rather than at story level.",
        id: "Arsip publik berisi ide dan struktur, sengaja disimpan di tingkat konsep, bukan di tingkat cerita.",
        zh: "一个关于想法与结构的公开档案，刻意保持在概念层面，而非故事层面。",
        ja: "アイデアと構造の公開アーカイブ。物語ではなくコンセプトの水準に留める意図がある。",
        ko: "아이디어와 구조를 담은 공개 기록보관소. 이야기 단계가 아니라 컨셉 단계에 의도적으로 머문다."
      }
    },
    {
      id: "redaction", cat: "world.archive",
      t: {
        en: "Redaction rules",
        id: "Aturan penyensoran",
        zh: "保留规则",
        ja: "秘匿のルール",
        ko: "삭제 규칙"
      },
      d: {
        en: "Names, identities, and specific places are held back on purpose. The absence is a decision, not an oversight.",
        id: "Nama, identitas, dan tempat tertentu ditahan dengan sengaja. Ketiadaannya adalah keputusan, bukan kelalaian.",
        zh: "姓名、身份与具体地点是被有意保留的。这份缺失是一种决定，而非疏漏。",
        ja: "名前・身元・特定の場所は意図的に伏せる。その不在は疏忽ではなく判断である。",
        ko: "이름, 신원, 특정 장소는 의도적으로 남겨 둔다. 그 부재는 실수가 아니라 결정이다."
      }
    },
    {
      id: "plot-hold", cat: "world.archive",
      t: {
        en: "The story is held back",
        id: "Cerita ditahan",
        zh: "故事被保留",
        ja: "物語は伏せられる",
        ko: "이야기는 남겨 둔다"
      },
      d: {
        en: "The public surface describes the craft and the method. It does not narrate what is being made.",
        id: "Permukaan publik menjelaskan kerajinan dan metodenya. Tidak menceritakan apa yang sedang dibuat.",
        zh: "公开界面描述工艺与方法，不叙述正在被创作的内容。",
        ja: "公開の面は技法と方法を語る。いま作られているものを物語らない。",
        ko: "공개 화면은 기법과 방법을 설명한다. 지금 만드는 대상을 서술하지 않는다."
      }
    },
    {
      id: "revision-marks", cat: "world.archive",
      t: {
        en: "Revision marks",
        id: "Tanda revisi",
        zh: "修订标记",
        ja: "改訂マーク",
        ko: "수정 표식"
      },
      d: {
        en: "Entries carry a review date and are allowed to change. A world that cannot change is a fossil, not a setting.",
        id: "Setiap entri membawa tanggal tinjauan dan boleh berubah. Dunia yang tak bisa berubah adalah fosil, bukan latar.",
        zh: "每条记录带有复核日期，并且允许更改。不能改变的世界是化石，不是设定。",
        ja: "各項目にはレビュー日があり、書き換えられる。変わらない世界は化石であって設定ではない。",
        ko: "각 항목에는 검토일이 붙고 바뀔 수 있다. 변하지 않는 세계는 화석이지 설정이 아니다."
      }
    },
    {
      id: "nika-role", cat: "agent.nika",
      t: {
        en: "Nika · content and music",
        id: "Nika · konten dan musik",
        zh: "Nika · 内容与音乐",
        ja: "Nika · コンテンツと音楽",
        ko: "Nika · 콘텐츠와 음악"
      },
      d: {
        en: "The public-facing role in brand communication, audience engagement, and music production.",
        id: "Peran menghadap publik dalam komunikasi merek, interaksi audiens, dan produksi musik.",
        zh: "在品牌传播、受众互动与音乐制作中承担面向公众的角色。",
        ja: "ブランドコミュニケーション、オーディエンスとの対話、音楽制作を担う公開担当。",
        ko: "브랜드 커뮤니케이션, 관객 소통, 음악 제작을 맡는 공개 역할."
      }
    },
    {
      id: "music-standard", cat: "agent.nika",
      t: {
        en: "The standard music prompt",
        id: "Prompt musik standar",
        zh: "标准音乐提示",
        ja: "標準音楽プロンプト",
        ko: "표준 음악 프롬프트"
      },
      d: {
        en: "One grammar for a track: a time block, a tag group, and a lyric line. The same shape, so any two prompts can be compared.",
        id: "Satu tata bahasa untuk sebuah lagu: blok waktu, grup tag, dan satu baris lirik. Bentuknya sama, jadi dua prompt apa pun bisa dibandingkan.",
        zh: "一首曲子只有一种语法：时间块、标签组与一行歌词。形状统一，任意两个提示都可以比较。",
        ja: "一曲の文法はひとつ：時間ブロック、タグ群、歌詞の一行。同じ形なので、どのプロンプト同士でも比較できる。",
        ko: "한 곡의 문법은 하나. 시간 블록, 태그 묶음, 가사 한 줄. 형태가 같으니 어떤 두 프롬프트든 비교할 수 있다."
      }
    },
    {
      id: "timeline-lock", cat: "agent.nika",
      t: {
        en: "Locked timeline",
        id: "Timeline terkunci",
        zh: "锁定时间轴",
        ja: "固定タイムライン",
        ko: "잠긴 타임라인"
      },
      d: {
        en: "Timestamps are computed from the blocks, never typed by hand. Audio drift is designed out of the process.",
        id: "Timestamp dihitung dari blok-blok, tidak pernah diketik manual. Pergeseran audio dirancang keluar dari prosesnya.",
        zh: "时间戳由区块计算得出，绝不手写。音频漂移被从流程中设计掉了。",
        ja: "タイムスタンプはブロックから算出する。手入力はしない。音声のずれは工程から設計で外す。",
        ko: "타임스탬프는 블록에서 계산한다. 손으로 입력하지 않는다. 오디오 드리프트는 공정에서 설계로 제거된다."
      }
    },
    {
      id: "concept-card", cat: "agent.nika",
      t: {
        en: "Concept to campaign",
        id: "Konsep jadi kampanye",
        zh: "从概念到投放",
        ja: "コンセプトからキャンペーン",
        ko: "컨셉에서 캠페인으로"
      },
      d: {
        en: "An idea becomes a card with an angle, a mood, and a format before it becomes content.",
        id: "Ide berubah menjadi kartu berisi sudut, suasana, dan format sebelum menjadi konten.",
        zh: "一个想法先成为一张写明角度、基调与形式的卡片，然后才成为内容。",
        ja: "アイデアは、角度とムードと形式を書き込んだカードになって初めてコンテンツになる。",
        ko: "아이디어는 각도와 분위기, 형식을 담은 카드가 된 뒤에야 콘텐츠가 된다."
      }
    },
    {
      id: "veta-role", cat: "agent.veta",
      t: {
        en: "Veta · visual and production systems",
        id: "Veta · visual dan sistem produksi",
        zh: "Veta · 视觉与制作系统",
        ja: "Veta · ビジュアルと制作システム",
        ko: "Veta · 비주얼과 제작 시스템"
      },
      d: {
        en: "Visual development, storyboard craft, and the production systems that keep one chapter consistent with the next.",
        id: "Pengembangan visual, kerangka storyboard, dan sistem produksi yang menjaga satu chapter konsisten dengan chapter berikutnya.",
        zh: "视觉开发、分镜工艺，以及让每一章与下一章保持一致的制作系统。",
        ja: "ビジュアル開発、絵コンテ、そして章を次章とつなげておく制作システム。",
        ko: "비주얼 개발, 스토리보드 기법, 그리고 한 편을 다음 편과 이어지게 유지하는 제작 시스템."
      }
    },
    {
      id: "panel-board", cat: "agent.veta",
      t: {
        en: "The panel board",
        id: "Papan panel",
        zh: "分镜板",
        ja: "コマ割り板",
        ko: "패널 보드"
      },
      d: {
        en: "It starts empty on purpose. Ratio, gap, columns, and numbering are settled before anything is drawn.",
        id: "Papan ini mulai kosong dengan sengaja. Rasio, jarak, kolom, dan nomor disepakati sebelum ada yang digambar.",
        zh: "它刻意从空白开始。比例、间距、列数与编号在落笔之前就先定好。",
        ja: "意図的に空から始める。比率・間隔・段数・番号は、描く前に決めておく。",
        ko: "의도적으로 빈 상태로 시작한다. 비율, 간격, 열 수, 번호는 그리기 전에 정해진다."
      }
    },
    {
      id: "visual-consistency", cat: "agent.veta",
      t: {
        en: "Visual consistency",
        id: "Konsistensi visual",
        zh: "视觉一致性",
        ja: "ビジュアルの一貫性",
        ko: "비주얼 일관성"
      },
      d: {
        en: "A fixed rule set, so panels drawn on different days still read as one body of work.",
        id: "Set aturan tetap, supaya panel yang digambar pada hari berbeda tetap terbaca sebagai satu karya utuh.",
        zh: "一套固定规则，让不同时间画出的分镜读起来仍像同一件作品。",
        ja: "固定したルールセットにより、別々の日に描いたコマも一つの作品として読める。",
        ko: "고정된 규칙 세트 덕분에 서로 다른 날 그린 패널도 하나의 작품으로 읽힌다."
      }
    },
    {
      id: "asset-pipeline", cat: "agent.veta",
      t: {
        en: "Asset pipeline",
        id: "Pipeline aset",
        zh: "素材流水线",
        ja: "アセットのパイプライン",
        ko: "에셋 파이프라인"
      },
      d: {
        en: "One asset, many uses, one source of truth. Everything downstream points back at the same file.",
        id: "Satu aset, banyak pakai, satu sumber kebenaran. Semua ke hilir menunjuk ke berkas yang sama.",
        zh: "一份素材，多处使用，一个唯一来源。所有下游都指回同一个文件。",
        ja: "ひとつの素材、多くの用途、ひとつの情報源。以降のすべてが同じファイルを指す。",
        ko: "하나의 에셋, 여러 용도, 하나의 출처. 이후의 모든 것이 같은 파일을 가리킨다."
      }
    },
    {
      id: "ashrael-role", cat: "agent.ashrael",
      t: {
        en: "Ashrael · technical operations",
        id: "Ashrael · operasi teknis",
        zh: "Ashrael · 技术运营",
        ja: "Ashrael · 技術運用",
        ko: "Ashrael · 기술 운영"
      },
      d: {
        en: "Tooling, integration, automation, documentation, and the quality gate everything passes before release.",
        id: "Perkakas, integrasi, otomasi, dokumentasi, dan gerbang kualitas yang harus dilewati semuanya sebelum rilis.",
        zh: "工具、集成、自动化、文档，以及发布前每样东西都要经过的质量关卡。",
        ja: "道具・連携・自動化・ドキュメント、そして公開前にすべてが通過する品質ゲート。",
        ko: "도구, 통합, 자동화, 문서, 그리고 공개 전에 모든 것이 통과해야 하는 품질 관문."
      }
    },
    {
      id: "panel-qc", cat: "agent.ashrael",
      t: {
        en: "Panel QC",
        id: "Panel QC",
        zh: "分镜质检",
        ja: "コマ QC",
        ko: "패널 QC"
      },
      d: {
        en: "A panel file is checked for blocking issues and warnings. The report says what failed and where.",
        id: "Berkas panel diperiksa untuk masalah penghalang dan peringatan. Laporan menyebut apa yang gagal dan di mana.",
        zh: "对分镜文件检查阻断性问题与警告。报告说明哪里失败、失败在哪。",
        ja: "コマファイルを、重大な問題と警告进行检查する。報告は何がどこで失敗したかを記す。",
        ko: "패널 파일을 차단 문제와 경고로 검사한다. 보고서는 무엇이 어디서 실패했는지 밝힌다."
      }
    },
    {
      id: "check-rules", cat: "agent.ashrael",
      t: {
        en: "Check rules",
        id: "Aturan pemeriksaan",
        zh: "检查规则",
        ja: "検査ルール",
        ko: "검사 규칙"
      },
      d: {
        en: "Every rule carries a severity, so a blocking issue is never confused with a suggestion.",
        id: "Setiap aturan membawa tingkat keparahan, supaya masalah penghalang tak pernah tertukar dengan saran.",
        zh: "每条规则都带严重等级，阻断性问题绝不会与建议混淆。",
        ja: "すべてのルールに重大度がある。重大な問題が提案と混同されることはない。",
        ko: "모든 규칙에 심각도가 있어 차단 문제와 제안이 뒤섞이지 않는다."
      }
    },
    {
      id: "traceability", cat: "agent.ashrael",
      t: {
        en: "Traceability",
        id: "Jejak audit",
        zh: "可追溯性",
        ja: "追跡可能性",
        ko: "추적 가능성"
      },
      d: {
        en: "Any release can be traced back to the checks that cleared it, and to the rules those checks applied.",
        id: "Setiap rilis bisa ditelusuri kembali ke pemeriksaan yang meluluskannya, dan ke aturan yang dipakai pemeriksaan itu.",
        zh: "任何一次发布都能回溯到放行它的检查，以及这些检查所依据的规则。",
        ja: "いかなる公開も、それを許した検査と、その検査が用いた規則までたどれる。",
        ko: "모든 공개는 그것을 통과시킨 검사와, 그 검사가 적용한 규칙까지 거슬러 올라간다."
      }
    }
  ],

  /* ---- page strings ------------------------------------------------- */
  ui: {
    en: {
      nav_db: "Database",
      hp_eyebrow: "Public concept record",
      hp_lead: "A world set in 2056, and the agents who work inside it. This page holds concepts only: the craft, the method, and the rules. The story stays behind.",
      hp_meta: "Set in 2056 · Concept level only · Nothing uploaded",
      hp_roles_h: "Three public roles",
      hp_roles_p: "Each role is a working role, not a persona. What is public is the method and the output, never the person behind it.",
      hp_db_h: "The VAH database",
      hp_db_p: "Concepts that hold the setting together. Every line here is written to be edited later, so read it as a working draft.",
      hp_review: "Last reviewed",
      hp_search_ph: "Search concepts",
      hp_all: "All",
      hp_count: "{n} of {m} shown",
      hp_empty: "Nothing matches that.",
      hp_held_h: "Held back",
      hp_held_p: "Character names, identities, specific places, and the plot of the story are not published here. The absence is deliberate, and it is what lets this surface keep changing without breaking anything.",
      hp_tools_h: "Tools",
      hp_tools_p: "Every tool runs in your browser. No upload, no account, no tracking.",
      hp_footer: "VAH Official · public concept record · set in 2056"
    },
    id: {
      nav_db: "Basis data",
      hp_eyebrow: "Catatan konsep publik",
      hp_lead: "Dunia yang ditetapkan di tahun 2056, dan agen-agen yang bekerja di dalamnya. Halaman ini hanya memuat konsep: kerajinan, metode, dan aturannya. Ceritanya tetap di belakang.",
      hp_meta: "Dunia 2056 · Tingkat konsep saja · Tidak ada unggahan",
      hp_roles_h: "Tiga peran publik",
      hp_roles_p: "Setiap peran adalah peran kerja, bukan persona. Yang publik adalah metode dan hasilnya, bukan orang di baliknya.",
      hp_db_h: "Basis data VAH",
      hp_db_p: "Konsep yang menyatukan latar ini. Semua baris di sini ditulis untuk diubah nanti, jadi baca sebagai draf kerja.",
      hp_review: "Ditinjau terakhir",
      hp_search_ph: "Cari konsep",
      hp_all: "Semua",
      hp_count: "{n} dari {m} ditampilkan",
      hp_empty: "Tidak ada yang cocok.",
      hp_held_h: "Ditahan",
      hp_held_p: "Nama karakter, identitas, tempat tertentu, dan plot cerita tidak dipublikasikan di sini. Ketiadaan itu disengaja, dan itulah yang membuat permukaan ini bisa terus berubah tanpa merusak apa pun.",
      hp_tools_h: "Alat",
      hp_tools_p: "Semua alat berjalan di browser kamu. Tidak ada unggahan, akun, atau pelacakan.",
      hp_footer: "VAH Official · catatan konsep publik · tahun 2056"
    },
    zh: {
      nav_db: "数据库",
      hp_eyebrow: "公开概念记录",
      hp_lead: "设定在 2056 年的世界，以及在其中工作的代理。此页只承载概念：工艺、方法与规则。故事仍留在幕后。",
      hp_meta: "2056 年设定 · 仅概念层级 · 不会上传",
      hp_roles_h: "三个公开角色",
      hp_roles_p: "每个角色都是工作角色，而非人设。公开的是方法与成果，永远不是背后的人。",
      hp_db_h: "VAH 数据库",
      hp_db_p: "支撑整个设定的概念。这里的每一行都写好了待日后修改，请当作工作草稿来读。",
      hp_review: "最后复核",
      hp_search_ph: "搜索概念",
      hp_all: "全部",
      hp_count: "显示 {n} / {m}",
      hp_empty: "没有匹配的条目。",
      hp_held_h: "保留",
      hp_held_p: "角色姓名、身份、具体地点与故事剧情均不在此公开。这份缺失是刻意的，也正因如此，这个界面才能持续修改而不损坏。",
      hp_tools_h: "工具",
      hp_tools_p: "所有工具都在你的浏览器中运行。不上传、不需账号、不做追踪。",
      hp_footer: "VAH Official · 公开概念记录 · 设定于 2056"
    },
    ja: {
      nav_db: "データベース",
      hp_eyebrow: "公開コンセプト記録",
      hp_lead: "2056 年を舞台にした世界と、その中で働くエージェントたち。この頁が持つのはコンセプトだけ。技術、手法、規則。物語は奥に留まる。",
      hp_meta: "2056 年を舞台 · コンセプトのみ · アップロードなし",
      hp_roles_h: "三つの公開役割",
      hp_roles_p: "役割は仕事上の役割であり、人物像ではない。公開されるのは手法と成果だけで、その奥の人物ではない。",
      hp_db_h: "VAH データベース",
      hp_db_p: "設定を支えるコンセプト。ここの一行一行は後で書き換えられるよう書かれており、作業用の下書きとして読んでほしい。",
      hp_review: "最終レビュー",
      hp_search_ph: "コンセプトを検索",
      hp_all: "すべて",
      hp_count: "{m} 件中 {n} 件を表示",
      hp_empty: "該当する項目はありません。",
      hp_held_h: "伏せているもの",
      hp_held_p: "キャラクター名、身元、特定の場所、物語の筋はここでは公開しない。その不在は意図的なもので、それがあるからこそこの表面は何も崩さず変更し続けられる。",
      hp_tools_h: "ツール",
      hp_tools_p: "すべての道具はブラウザ内で動く。アップロードもアカウントも追跡もない。",
      hp_footer: "VAH Official · 公開コンセプト記録 · 2056 年を舞台"
    },
    ko: {
      nav_db: "데이터베이스",
      hp_eyebrow: "공개 컨셉 기록",
      hp_lead: "2056년을 무대로 한 세계와, 그 안에서 일하는 에이전트들. 이 페이지는 컨셉만 담는다. 기법과 방법, 규칙. 이야기는 뒤에 남는다.",
      hp_meta: "2056년 무대 · 컨셉 수준만 · 업로드 없음",
      hp_roles_h: "공개 역할 세 가지",
      hp_roles_p: "역할은 인격이 아니라 일하는 역할이다. 공개되는 것은 방법과 결과이지, 그 뒤의 사람이 아니다.",
      hp_db_h: "VAH 데이터베이스",
      hp_db_p: "세팅을 지탱하는 컨셉들. 이 페이지의 모든 문장은 나중에 고칠 수 있게 쓰였으니 작업 초안으로 읽어라.",
      hp_review: "마지막 검토",
      hp_search_ph: "컨셉 검색",
      hp_all: "전체",
      hp_count: "{m}개 중 {n}개 표시",
      hp_empty: "맞는 항목이 없다.",
      hp_held_h: "남겨 둔 것",
      hp_held_p: "캐릭터 이름, 신원, 특정 장소, 이야기의 줄거리는 여기 공개하지 않는다. 그 부재는 의도적이며, 그래서 이 표면은 계속 바뀌어도 무너지지 않는다.",
      hp_tools_h: "도구",
      hp_tools_p: "모든 도구는 브라우저에서 돈다. 업로드도 계정도 추적도 없다.",
      hp_footer: "VAH Official · 공개 컨셉 기록 · 2056년"
    }
  }
};
