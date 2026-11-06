# Nika Composer — sub-site

Grid beat dengan timestamp terkunci `00:00.00`, dibangun untuk prompt musik Suno
dan timeline video. Rebuild penuh dari app internal Nika, plus **format prompt
musik standar**.

## Isi folder

| File | Isi |
|---|---|
| `index.html` | UI. Sidebar setting + grid baris + 6 kotak export. |
| `composer.js` | Logika. 100% browser, tanpa backend, tanpa panggilan jaringan. |

## Yang bisa

- **Baris** — tambah di atas / bawah (`+↑` `+↓`), pindah urutan (`↑` `↓`), hapus (`×`).
- **Sub judul** — baris nama sendiri (verse, chorus, bridge). Muncul sekali di atas
  grup, bukan di tiap baris. Hanya nama yang bisa diedit.
- **Instrumental** — baris penuh: durasi, role, chord, ruang lirik kosong, prompt musik.
  Tombol `Isi jeda instrumental` menaruh baris di **awal**, **sebelum tiap sub judul
  baru**, dan **akhir**. Bisa diedit manual setelahnya.
- **Paste** — isi paste tidak hilang saat export, dan ikut tersimpan di Save lokal.
- **Export** — Lirik bersih · Blok standar · Suno Lyrics · Style musik · Timeline CSV · SRT.
- **Save / Load lokal** — memakai `localStorage` browser.

## Format prompt musik standar

Format blok yang dipakai untuk prompt musik:

```text
[00:00–00:06]
[PIANO][SOFT][MELANCHOLIC]
Lyric line...

[00:06–00:14]
[TEMPO=82][KEY=Am][PIANO+STRINGS][AIRY][INTIMATE]
Lyric line...

[00:14–00:20]
[INSTRUMENTAL][TRANSITION]
Instrumental break.
```

Aturan:

- Satu tag per kurung siku, urutan bebas: instrumen → tekstur → mood → dinamika.
- Tag bernilai memakai `KEY=` dan `TEMPO=`.
- Chord ditulis sebagai tag terpisah bila perlu (kolom Chord di grid).
- Kalau seluruh isi prompt adalah tag standar, export menuliskannya sebagai grup
  kurung terpisah. Kalau ada teks bebas, prompt tetap ditulis sebagai satu grup
  supaya tidak merusak tulisan user.

Paste menerima dua bentuk:

```text
[00:00–00:06]
[PIANO][SOFT][MELANCHOLIC]
line one
```

```text
[00:00.00-00:04.00][Am][soft] line one
```

Sub judul memakai `[Nama]`. Tag bebas (tanda kurung) tetap dibaca sebagai cue prompt.

## Vocabular tag standar

| Kelompok | Tag |
|---|---|
| Instrumen | PIANO · STRINGS · GUITAR · BASS · DRUMS · SYNTH · PAD · ORGAN · FLUTE · VIBRAPHONE |
| Tekstur | SOFT · AIRY · CLEAN · WIDE · DRY · LOFI |
| Mood | MELANCHOLIC · BRIGHT · NOSTALGIC · CALM · TENSE · HOPEFUL · DARK · DRIVING |
| Dinamika | INTIMATE · BUILD · LIFT · DROP · HOLD · BREATH |
| Bernilai | `KEY=Am` · `TEMPO=82` |

## Privasi

Semua berjalan di browser. Tidak ada unggahan file, tidak ada panggilan jaringan
dari tool ini. Isi proyek hanya tersimpan bila kamu menekan **Save lokal**
(`localStorage` browser, di perangkat ini saja).

## Batas

- Tidak ada backend AI. Prompt ditulis manusia, engine generate di luar.
- Baris hanya dijaga urutannya; regenerasi lagu tidak memaksa map detik-yang-sama.
- Halaman ini berisi alat kerja. Naskah dan isi cerita tidak ada di sini.
