"""
Background removal for TITAN product images.
Uses rembg (U2-Net) for clean AI-based cutouts.
Outputs transparent PNGs to public/assets/products/
"""

import os
import sys
import io
from pathlib import Path

# Force UTF-8 output on Windows
if sys.stdout.encoding != 'utf-8':
    import io as _io
    sys.stdout = _io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

from rembg import remove, new_session
from PIL import Image

# Paths
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
ASSETS_IN  = PROJECT_ROOT / "public" / "assets"
ASSETS_OUT = PROJECT_ROOT / "public" / "assets" / "products"

# Input -> output filename mapping
IMAGES = {
    "foundation_creatine.png": "foundation_creatine.png",
    "prime_sakura_edge.png":   "prime_sakura.png",
    "prime_tropic_surge.png":  "prime_tropic.png",
    "perform_blue_razz.png":   "perform_blue_razz.png",
    "fortify_chocolate.png":   "fortify_chocolate.png",
}

def process(session, src, dst):
    print("  Processing: %s -> %s" % (src.name, dst.name))
    with open(src, "rb") as f:
        input_data = f.read()

    output_data = remove(
        input_data,
        session=session,
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=10,
        alpha_matting_erode_size=10,
    )

    img = Image.open(io.BytesIO(output_data)).convert("RGBA")

    dst.parent.mkdir(parents=True, exist_ok=True)
    img.save(dst, "PNG", optimize=False)

    size_kb = dst.stat().st_size // 1024
    w, h = img.size
    print("  Saved: %dx%dpx, %dKB" % (w, h, size_kb))

def main():
    print("")
    print("=== TITAN Background Removal ===")
    print("")
    print("Loading model...")

    session = new_session("isnet-general-use")
    print("Model ready.")
    print("")

    errors = []
    for src_name, dst_name in IMAGES.items():
        src = ASSETS_IN / src_name
        dst = ASSETS_OUT / dst_name

        if not src.exists():
            print("  [SKIP] Not found: %s" % src)
            errors.append(src_name)
            continue

        try:
            process(session, src, dst)
        except Exception as e:
            print("  [ERROR] %s: %s" % (src_name, e))
            errors.append(src_name)

    print("")
    print("=== Done ===")
    print("Output: %s" % ASSETS_OUT)
    if errors:
        print("Errors: %s" % errors)
        sys.exit(1)
    else:
        print("All images processed successfully.")

if __name__ == "__main__":
    main()
