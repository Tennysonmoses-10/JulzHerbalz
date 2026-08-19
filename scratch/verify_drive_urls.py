import urllib.request

file_ids = [
    '1HOLsWYR6ZVthDlK-fffbQngz6Tw0k0wB', 
    '1eTaDYrMaxUNgq1kDWJQd5RQm_6512uwt', 
    '16vzTm2UDBwbWNhloX6U425Nz0iv9CCH0', 
    '1mYqMGbqIM6IgDXGmt_5V2g6xmJxxrH7s', 
    '1WTz7wZ2nvUs8CnaklGMC836mb7IpNYkY', 
    '1faA3VbUn4Bm_PxsqxVwom5VB4RNBtoji', 
    '13Pkwu__irDvpsQWRndYMObE9srwSO42H'
]

valid_urls = []
for fid in file_ids:
    url = f"https://lh3.googleusercontent.com/d/{fid}=w1000"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        if res.status == 200:
            print("VALID URL:", url)
            valid_urls.append(url)
    except Exception as e:
        print("ERROR for", fid, ":", e)

print("Valid count:", len(valid_urls))
