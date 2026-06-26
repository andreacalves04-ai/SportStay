import urllib.request
import json
import re

url = "https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=Kiteboarding"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        pages = data['query']['pages']
        for page_id in pages:
            if 'original' in pages[page_id]:
                print(pages[page_id]['original']['source'])
except Exception as e:
    print(e)
