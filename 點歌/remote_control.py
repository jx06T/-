import json
import requests
import pprint
import time
url = "https://script.google.com/macros/s/AKfycbwgrFPmi7kzaXDQlZ0IIkjsW1LFMLpBydb_bvOVhXfgKT1nLl28bO0fznAIqjpKw6RE1Q/exec"


def POST():
    payload = {
        "name":"今天天氣晴",
        "AllTime":"05:22",
        "NowTime":"02:13" ,
        "return": "T",
        "menu":[["1abc","2bcd","3qwe",4,5,6,7,8,9,10]]}
    response = requests.post(url, data=json.dumps(payload))
    pprint.pprint(response.json())

while 1==1:
    time.sleep(1)
    POST()