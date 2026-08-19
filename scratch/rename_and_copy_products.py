import os
import shutil

prod_dir = r"C:\Users\NidhiChaure\.gemini\antigravity\scratch\julz-herbals\public\images\products"

mapping = {
    "harmoni-hair-oil.jpg": "IMG_3104.jpg",
    "natural-aura-bath-powder.jpg": "IMG_3105.jpg",
    "moringa-bath-powder.jpg": "IMG_3106.jpg",
    "tan-care-pack.jpg": "IMG_3107.jpg",
    "baby-bath-powder.jpg": "IMG_3108.jpg",
    "baby-hair-oil.jpg": "IMG_3109.jpg",
    "herbal-shampoo.jpg": "IMG_3110.jpg",
}

for prod_name, src_name in mapping.items():
    src_path = os.path.join(prod_dir, src_name)
    dst_path = os.path.join(prod_dir, prod_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dst_path)
        print(f"Copied {src_name} -> {prod_name}")
    else:
        print(f"Warning: {src_name} not found!")

print("All product images mapped into public/images/products/!")
