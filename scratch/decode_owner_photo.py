import base64
import json
import re

log_path = r"C:\Users\NidhiChaure\.gemini\antigravity\brain\c1933494-f390-4d7d-84fc-3d16a640993a\.system_generated\steps\788\output.txt"

with open(log_path, "r", encoding="utf-8") as f:
    text = f.read()

match = re.search(r'data:image/([a-zA-Z]+);base64,([A-Za-z0-9+/=]+)', text)
if match:
    fmt = match.group(1)
    b64_data = match.group(2)
    raw = base64.b64decode(b64_data)
    out_file = f"public/images/owner.{fmt}"
    with open(out_file, "wb") as out:
        out.write(raw)
    print(f"Saved {len(raw)} bytes of owner photo to {out_file}")
else:
    print("Could not find base64 image payload.")
