import os

cr2_file = "scratch/IMG_2729.CR2"
out_jpg = "public/images/owner.jpg"

with open(cr2_file, "rb") as f:
    data = f.read()

# Locate JPEG SOI (0xFF 0xD8 0xFF) and EOI (0xFF 0xD9)
start = 0
jpeg_slices = []

while True:
    soi = data.find(b'\xff\xd8\xff', start)
    if soi == -1:
        break
    eoi = data.find(b'\xff\xd9', soi)
    if eoi == -1:
        break
    slice_data = data[soi:eoi+2]
    jpeg_slices.append(slice_data)
    start = eoi + 2

print(f"Found {len(jpeg_slices)} embedded JPEG slices.")

if jpeg_slices:
    # Get largest JPEG slice (full resolution camera photo)
    best_jpeg = max(jpeg_slices, key=len)
    with open(out_jpg, "wb") as out:
        out.write(best_jpeg)
    print(f"Extracted high-res owner photo ({len(best_jpeg)} bytes) saved to {out_jpg}")
else:
    print("No JPEG slices found.")
