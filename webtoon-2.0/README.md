# Webtoon 2.0 — build 2.04

Structure record for the VAH vertical webtoon. This folder holds what the pipeline needs to
stay in order; the pages themselves live in the private reader, not here.

- Reader (private, owner + invited only): https://vah-workshop-vah-official.static.hf.space/
- Concept record: https://vah-official.uk/
- Source set: `pribadi/veta/v2.02` (master, ch-01 script, panelling) — private workspace

## What 2.04 changed

1. The reader is generated. `build_reader.py` reads `ch01/pages.json` and writes `index.html`
   from `template/index.html.tmpl`. Adding a page is one entry in `pages.json` plus one
   command; nobody edits the reader HTML by hand any more.
2. No canon change: 8 pages stay 8 pages, and the generated file matches the live reader
   except the version chip.

## What 2.03 changed

1. Reader got the real chapter pages instead of test panels: ch-01 `p01`–`p08`.
2. One asset path: `assets/panels/ch01/pNN.jpg`, no loose test files.
3. One version label in three places: reader, reader README, this folder.
4. Empty staging folders dropped. `ch02/` stays, frozen, as a single note.

## Structure

```
webtoon-2.0/
├── README.md          this file
├── VERSION            2.04
├── build_reader.py    pages.json -> index.html
├── template/
│   └── index.html.tmpl
├── ch01/
│   ├── README.md      chapter 1 state
│   ├── pages.json     page manifest for the reader (p01-p08)
│   └── ch01.meta.json chapter metadata
├── ch02/README.md     frozen; no draft promoted
└── docs/notes.md      working notes
```

## Adding a page

1. Page JPG goes to the reader's `assets/panels/ch01/pNN.jpg` (never this repo).
2. Add one entry to `ch01/pages.json` with `"status": "reviewed"`.
3. Build:

```
python3 webtoon-2.0/build_reader.py --chapter 1 --out <reader dir> --assets <reader dir>
```

Only entries with `reviewed` / `published` / `canon` are rendered. The script fails loudly on
duplicate page ids or a missing JPG. Preview without writing: add `--check`.

## Rules that stay

- No panel images and no script text in this public repo. Pages go to the reader; the script
  stays in the private workspace.
- A page enters the reader only after review; the reader is the reading source, not a preview.
- Insert panels (e.g. 05A, 05B) are mapped inside their page's beat, never dropped silently
  and never published as separate reader pages.
