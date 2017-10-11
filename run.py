import json
import sys
from WeiboSession import WeiboSession

# 加载 HTTP 请求设置 (不需要重新设置头部)
# with open('http.txt') as f:
#     s = f.read()
#     s = s.strip().split('\n')
#     headers = {}
#     for k in range(2, len(s) - 2):
#         ss = s[k]
#         idx = ss.index(':')
#         headers[ss[0:idx].strip()] = ss[(idx + 1):].strip()

if len(sys.argv) != 3:
    print("使用方法：")
    print("python run.py username password")
    sys.exit(-1)

url = 'http://weibo.com/aj/filter/block?ajwvr=6'  # 微博屏蔽的接口

black_list = []  # 初始化黑名单id，按行导入
with open('list.txt', 'r') as reader:
    while True:
        black_id = reader.readline()
        if black_id:
            black_list.append(black_id.strip())
        else:
            break

# 使用自定义的session，直接登录
ws = WeiboSession(sys.argv[1], sys.argv[2])
ws.headers.update({"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"})
ws.login()

black_data = {
    "uid": '',
    "filter_type": '1',
    "status": '1',
    "interact": '1',
    "follow": '1'
}

# 逐个加入黑名单
for uid in black_list:
    black_data["uid"] = uid
    ws.headers["Referer"] = 'http://weibo.com/u/' + uid
    retText = ws.post(url, data=black_data).text
    retJson = json.loads(retText)
    print("屏蔽用户：%s 结果：%s" % (uid, retJson["msg"]))
