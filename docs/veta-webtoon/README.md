# Veta · Webtoon — sub-site

Papan panel untuk menyiapkan **setting** panel webtoon: rasio, jarak, ukuran,
kolom, nomor, dan urutan. Papan **dimulai kosong**.

Halaman ini sengaja tidak memuat naskah, draft chapter, dialog, karakter, atau
lore. Isinya alat untuk menyiapkan panel, bukan cerita.

## Isi folder

| File | Isi |
|---|---|
| `index.html` | Papan panel + panel setting + lembar setting. 100% browser. |

## Yang bisa

- **Panel kosong** — tambah, hapus, pindah urutan (↑ ↓).
- **Setting** — rasio (9:16 / 3:4 / 1:1 / 4:5 / 16:9), tinggi maksimum slot,
  jarak antar panel, jumlah kolom.
- **Pelapan** — tampilkan / sembunyikan kolom catatan, tampilkan / sembunyikan
  nomor panel, tampilkan rasio pada slot.
- **Lampiran foto** — dibaca lokal lewat object URL, **tidak pernah diunggah**.
  Tidak dipulihkan setelah reload (object URL tidak bisa dipulihkan).
- **Lembar setting panel** — daftar nomor, rasio, dan setting aktif, bisa di-copy
  atau di-download. Tidak berisi isi cerita.
- **Save lokal** — setting dan catatan disimpan di `localStorage` browser.

## Yang tidak ada di sini

Naskah · draft chapter · dialog · karakter · lore · contoh gambar · data canon.
Papan webtoon untuk isi cerita bukan milik halaman ini.

## Privasi

Semua berjalan di browser. Tidak ada unggahan file, tidak ada panggilan jaringan
dari tool ini. Setting dan catatan hanya tersimpan di `localStorage` browser
di perangkat ini.

## Catatan

Rebuild dari alat internal Veta dengan fokus ke panel setting. Versi lama tetap
ada di `../tools/webtoon-dummy/` dan tidak diubah.
