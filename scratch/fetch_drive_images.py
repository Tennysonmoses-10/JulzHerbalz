import re
import urllib.request

url = "https://drive.google.com/drive/folders/1qvDCk20oxRsJX3gL7Zu4KSOKyuEeKYg7"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    # Find all 33-character Google Drive file IDs
    file_ids = list(set(re.findall(r'\"([a-zA-Z0-9_-]{33})\"', html)))
    print("Found Google Drive File IDs:", file_ids[:15])
except Exception as e:
    print("Error:", e)
