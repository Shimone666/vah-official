# Ashrael · Panel QC — sub-site

Salinan **persis** dari alat Panel QC yang sudah publik di
`../tools/panel-qc/index.html`. Isi `index.html` di sini identik byte-per-byte
dengan versi publik — tidak ada perubahan kode.

## Isi folder

| File | Isi |
|---|---|
| `index.html` | Checker panel JSON. 100% browser, tanpa panggilan jaringan. |

## Yang dicek

- Field wajib per panel (`persona_id`).
- `persona_id` sebagai nilai maupun dict — dict kosong jadi warning.
- Dialogue / text kosong — warning atau blocking sesuai setting.
- `page_type` di luar daftar known (`story`, `panel`, `cover`, `splash`, `end`).
- Ringkasan jumlah panel, personae, halaman ter-cover, dan daftar issue.

## Cara pakai

Paste JSON panel ke kolom input (atau drop file `.json`), lalu tekan **Check**.
Bisa juga **Load sample** untuk mencoba, dan **Copy report** untuk menyalin hasil.

## Privasi

Tidak ada panggilan jaringan. File yang di-drop tidak disimpan dan tidak diunggah.
Yang disimpan hanya tema dan setelan modalitas di `localStorage` browser.

## Catatan

Navigasi di halaman ini menunjuk `../../ashrael-panel-qc.html` dan
`../../index.html` — keduanya tetap valid dari lokasi folder ini.
