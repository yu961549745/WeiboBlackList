from urllib import request, parse
import re
import gzip

# 加载 HTTP 请求设置
with open('http.txt') as f:
    s = f.read()
    s = s.strip().split('\n')
    url = re.findall(r'http\S+', s[0])[0]
    headers = dict()
    for k in range(2, len(s) - 2):
        ss = s[k]
        idx = ss.index(':')
        headers[ss[0:idx].strip()] = ss[(idx + 1):].strip()

# 读取黑名单列表
with open('../list.txt') as f:
    lst = f.read().strip().split('\n')

# 逐个加入黑名单
for uid in lst:
    print(uid)
    req = request.Request(url, headers=headers)
    data = {'uid': uid, 'f': '1'}
    f = request.urlopen(req, data=parse.urlencode(data).encode('utf8'))
    print('Status:', f.status, f.reason)
    doc = f.read()
    try:
        doc = gzip.decompress(doc)
    except:
        pass
    print(doc)
    f.close()
