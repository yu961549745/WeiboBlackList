import requests

class WeiboSession(requests.Session):
    def __init__(self, username, password):
        super(WeiboSession, self).__init__()
        self.__username = username
        self.__password = password

    def __del__(self):
        self.close()

    def login(self):
        loginURL = "http://passport.weibo.cn/sso/login"
        data = {
            "username": self.__username,
            "password": self.__password,
            "savestate": "1",
            "r": "http://m.weibo.cn/",
            "ec": "0",
            "entry": "mweibo",
            "mainpageflag": "1",
        }
        self.headers.update({
            "Referer": "http://passport.weibo.cn/signin/login?entry=mweibo&res=wel&wm=3349&r=http%3A%2F%2Fm.weibo.cn%2F&sudaref=passport.weibo.cn&retcode=6102",
        })
        retJson = self.post(loginURL, data=data).json()
        if retJson["retcode"] == 20000000:
            for tmpURL in retJson["data"]["crossdomainlist"].values():
                self.get(tmpURL)
            myURL = "http://weibo.cn/"
            self.get(myURL)

if __name__ == "__main__":
    weibo = WeiboSession("", "")
