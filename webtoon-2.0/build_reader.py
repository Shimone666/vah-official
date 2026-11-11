#!/usr/bin/env python3
"""Build the VAH reader (index.html) from a chapter's pages.json.

The reader is generated, not hand-edited. Adding a page = add one entry to
pages.json, then run this. No manual index.html edits.

Usage:
  python3 build_reader.py --chapter 1 --out /workspace/vah-hf
  python3 build_reader.py --chapter 1 --assets /workspace/vah-hf --check

Pages must be listed in reading order. Only entries with status "reviewed"
are published; pages still in draft are skipped (and reported).
"""
import argparse
import html
import json
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = os.path.join(HERE, "template", "index.html.tmpl")

ORDINALS = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six",
            7: "seven", 8: "eight", 9: "nine", 10: "ten"}
PUBLISH_STATUS = ("reviewed", "published", "canon")


def load(chapter):
    path = os.path.join(HERE, "ch%02d" % chapter, "pages.json")
    with open(path, encoding="utf-8") as f:
        return path, json.load(f)


def render_pages(pages):
    out = []
    for i, p in enumerate(pages):
        alt = "VAH chapter %s, page %d of %d" % (
            "one", int(str(p["page"]).lstrip("p") or i + 1), len(pages))
        loading = "eager" if i == 0 else "lazy"
        label = ' data-label="%s"' % html.escape(p["label"]) if p.get("label") else ""
        out.append(
            '    <div class="page" data-page="%s" data-title="%s"%s>'
            '<img src="%s" alt="%s" loading="%s"></div>'
            % (html.escape(p["page"]), html.escape((p.get("title") or "").replace('"',"")),
               label, html.escape(p["file"]), alt.replace("{CH}", "one"), loading))
    return "\n".join(out)


def build(meta, pages, template_text, version):
    first = pages[0]["page"]
    last = pages[-1]["page"]
    fills = {
        "{{PAGES}}": render_pages(pages),
        "{{VERSION}}": version,
        "{{CHAPTER_WORD}}": ORDINALS.get(meta.get("chapter", 1), str(meta.get("chapter"))),
        "{{CHAPTER_TITLE}}": html.escape(meta.get("title", ""), quote=False),
        "{{CHAPTER_TAG}}": html.escape(meta.get("tag", ""), quote=False),
        "{{END_LABEL}}": "end of chapter %02d &middot; pages %s-%s" % (
            meta.get("chapter", 1), first[1:], last[1:]),
        "{{END_TITLE}}": html.escape(meta.get("end_title", ""), quote=False),
        "{{END_BODY}}": html.escape(meta.get("end_body", ""), quote=False),
        "{{CHAPTER_OPTIONS}}": (
            '<option value="%d" selected>ch.%02d &middot; %s</option>'
            % (int(meta.get("chapter", 1)), int(meta.get("chapter", 1)),
               html.escape(meta.get("title", ""), quote=False))),
    }
    text = template_text
    for k, v in fills.items():
        text = text.replace(k, v)
    left = [k for k in fills if k in text]
    if left:
        raise SystemExit("template placeholders left unfilled: %s" % left)
    return text


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--chapter", type=int, default=1)
    ap.add_argument("--out", help="directory to write index.html into")
    ap.add_argument("--assets", help="directory holding assets/panels/chNN/*.jpg")
    ap.add_argument("--check", action="store_true", help="verify only, write nothing")
    args = ap.parse_args()

    json_path, meta = load(args.chapter)
    version = meta.get("build", "0.00")
    pages = [p for p in meta.get("pages", []) if p.get("status") in PUBLISH_STATUS]
    skipped = [p["page"] for p in meta.get("pages", [])
               if p.get("status") not in PUBLISH_STATUS]
    if not pages:
        raise SystemExit("no publishable pages in %s" % json_path)

    # duplicate / order sanity
    names = [p["page"] for p in pages]
    if len(set(names)) != len(names):
        raise SystemExit("duplicate page ids in %s: %s" % (json_path, names))

    missing = []
    if args.assets:
        for p in pages:
            if not os.path.exists(os.path.join(args.assets, p["file"])):
                missing.append(p["file"])

    with open(TEMPLATE, encoding="utf-8") as f:
        template_text = f.read()
    out_html = build(meta, pages, template_text, version)

    print("build %s  chapter %02d  pages %d (%s..%s)  skipped %s"
          % (version, args.chapter, len(pages), names[0], names[-1], skipped or "none"))
    if missing:
        print("MISSING page files: %s" % missing)
    if args.check:
        if missing:
            return 1
        print("check ok: reader renders from pages.json only")
        return 0

    out = args.out or "."
    os.makedirs(out, exist_ok=True)
    target = os.path.join(out, "index.html")
    with open(target, "w", encoding="utf-8") as f:
        f.write(out_html)
    print("wrote %s (%d bytes)" % (target, len(out_html)))
    if missing:
        print("WARNING: page files missing on disk, reader will show broken frames")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())