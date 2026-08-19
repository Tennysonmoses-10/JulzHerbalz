import urllib.request
import re

url = "https://drive.google.com/uc?id=14yg-44Der1FTzhgAHe8yDciC3kLQqgnP&export=download"

req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
})

with urllib.request.urlopen(req) as response:
    content = response.read()

# Check if confirmation page returned
if b'confirm=' in content or b'Google Drive - Virus scan warning' in content:
    match = re.search(r'confirm=([0-9a-zA-Z_]+)', content.decode('utf-8', errors='ignore'))
    if match:
        confirm_code = match.group(1)
        confirm_url = f"https://drive.google.com/uc?export=download&confirm={confirm_code}&id=14yg-44Der1FTzhgAHe8yDciC3kLQqgnP"
        req_confirm = urllib.request.Request(confirm_url, headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        with urllib.request.urlopen(req_confirm) as resp2:
            content = resp2.read()

with open("scratch/IMG_2729.CR2", "wb") as f:
    f.write(content)

print(f"Downloaded file size: {len(content)} bytes")
