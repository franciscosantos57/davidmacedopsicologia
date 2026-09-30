"""Regenerate committed WebP assets: python3 scripts/optimize-images.py.

Requires cwebp (brew install webp). Originals remain unchanged; deployment
uses the committed outputs and does not need an image encoder.
"""
from pathlib import Path
import shutil
import subprocess

root = Path(__file__).resolve().parents[1]
source = root / "src/assets"
output = source / "optimized"
output.mkdir(exist_ok=True)
encoder = shutil.which("cwebp")
if not encoder:
    raise SystemExit("Install cwebp first (macOS: brew install webp).")

images = {
    "profilepicture": [420, 840],
    "profilepicture-mobile": [480, 960],
    "profilepicture-horizontal": [768, 1536],
    "onlineconsultation-mobile": [480, 940],
    "onlineconsultation-palette": [640, 1200],
    "hmfisio": [640, 1200],
    "david-macedo-brand-emblem-transparent": [128, 640],
}

for name, widths in images.items():
    for width in widths:
        target = output / f"{name}-{width}.webp"
        subprocess.run([
            encoder, "-quiet", "-q", "82", "-m", "6", "-sharp_yuv",
            "-resize", str(width), "0", str(source / f"{name}.png"),
            "-o", str(target),
        ], check=True)
        print(f"{target.name}: {target.stat().st_size:,} bytes")
