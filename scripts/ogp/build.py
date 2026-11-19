#!/usr/bin/env python3
"""OGP画像（1200x630）を ogp.html から書き出す。

2倍の大きさで描いてから縮めるので、文字のふちがなめらかになる。

使い方:
    uv run --with playwright --with pillow python3 scripts/ogp/build.py
    （初回のみ）uv run --with playwright python3 -m playwright install chromium
"""
from io import BytesIO
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
SRC = HERE / "ogp.html"
DEST = ROOT / "public" / "images" / "ogp.webp"
W, H = 1200, 630


def main():
    with sync_playwright() as p:
        b = p.chromium.launch()
        page = b.new_page(viewport={"width": W, "height": H}, device_scale_factor=2)
        page.goto(SRC.as_uri())
        page.wait_for_load_state("networkidle")
        page.wait_for_timeout(1200)   # Webフォントが当たるのを待つ
        shot = page.locator("#card").screenshot(type="png")
        b.close()

    im = Image.open(BytesIO(shot)).convert("RGB")
    im = im.resize((W, H), Image.LANCZOS)
    DEST.parent.mkdir(parents=True, exist_ok=True)
    im.save(DEST, "WEBP", quality=92, method=6)
    print(f"{DEST}  {im.width}x{im.height}  {DEST.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
