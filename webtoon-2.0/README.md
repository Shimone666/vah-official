# Webtoon 2.0 — build 2.03

Structure record for the VAH vertical webtoon. This folder holds what the pipeline needs to
stay in order; the pages themselves live in the private reader, not here.

- Reader (private, owner + invited only): https://vah-workshop-vah-official.static.hf.space/
- Concept record: https://vah-official.uk/
- Source set: `pribadi/veta/v2.02` (master, ch-01 script, panelling) — private workspace

## What 2.03 changed

1. Reader got the real chapter pages instead of test panels: ch-01 `p01`–`p08`.
2. One asset path: `assets/panels/ch01/pNN.jpg`, no loose test files.
3. One version label in three places: reader, reader README, this folder.
4. Empty staging folders dropped. `ch02/` stays, frozen, as a single note.

## Structure

```
webtoon-2.0/
├── README.md          this file
├── VERSION            2.03
├── ch01/
│   ├── README.md      chapter 1 state
│   ├── pages.json     page manifest for the reader (p01-p08)
│   └── ch01.meta.json chapter metadata
├── ch02/README.md     frozen; no draft promoted
└── docs/notes.md      working notes
```

## Rules that stay

- No panel images and no script text in this public repo. Pages go to the reader; the script
  stays in the private workspace.
- A page enters the reader only after review; the reader is the reading source, not a preview.
- Insert panels (e.g. 05A, 05B) are mapped inside their page's beat, never dropped silently
  and never published as separate reader pages.
