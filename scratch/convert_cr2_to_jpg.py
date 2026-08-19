import os
import io
from PIL import Image

download_dir = r"C:\Users\NidhiChaure\.gemini\antigravity\scratch\julz-herbals\scratch\drive_download"
output_dir = r"C:\Users\NidhiChaure\.gemini\antigravity\scratch\julz-herbals\public\images\products"

def extract_largest_jpeg_from_cr2(cr2_path, out_jpg_path):
    with open(cr2_path, "rb") as f:
        data = f.read()

    # Find all JPEG start markers
    matches = []
    idx = 0
    while True:
        pos = data.find(b"\xff\xd8\xff", idx)
        if pos == -1:
            break
        end_pos = data.find(b"\xff\xd9", pos)
        if end_pos != -1:
            jpg_bytes = data[pos : end_pos + 2]
            try:
                img = Image.open(io.BytesIO(jpg_bytes))
                matches.append((img.width * img.height, img, jpg_bytes))
            except:
                pass
        idx = pos + 3

    if matches:
        # Sort by total pixel count descending
        matches.sort(key=lambda x: x[0], reverse=True)
        best_size, best_img, best_bytes = matches[0]
        best_img.save(out_jpg_path, "JPEG", quality=95)
        print(f"Extracted MAX RES JPEG ({best_img.width}x{best_img.height}) -> {os.path.basename(out_jpg_path)}")
        return True
    return False

files = os.listdir(download_dir)
for f in files:
    if f.lower().endswith(".cr2"):
        src = os.path.join(download_dir, f)
        dst = os.path.join(output_dir, os.path.splitext(f)[0] + ".jpg")
        extract_largest_jpeg_from_cr2(src, dst)
