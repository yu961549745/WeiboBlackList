# WeiboBlackList
微博批量拉黑

[list.txt](list.txt) 中是 微博监督员 的 UID 列表，目前已补充至 407 个。

欢迎大家补充 微博监督员 的 UID 到 list.txt。网页版微博打开主页，第一串数字就是 UID。 
![uid](/imgs/uid.png)

可以使用这个脚本自动采集： https://github.com/LyZane/weibo-supervisor-jsCrawler

# JS 脚本
来自于 https://github.com/overtrue/weibo-dogs-killer

使用方法：
1. 使用浏览器打开 https://weibo.com 并登陆，强调一下 **直接点击这个链接登录**， 一旦报错出现 `CORS policy`， 说明是 js 跨域的问题， 简单的说就是网址前缀不一样， 常见的问题是：
    + 要么不是 https
    + 要么加了 www
2. 打开命令行
    + Windows Chrome `F12`
    + Mac Chrome `Option+Command+I`
3. 粘贴 [weibo-dogs-killer.js](weibo-dogs-killer.js) 的代码并运行
![js](/imgs/js.jpg)


# Python 脚本 V1 
初始版本，需要自行抓包。

[README](/py_v1/README.md)

# Python 脚本 V2
不需要抓包，能够模拟登陆，不过要保证关闭登陆保护。

感谢 CirQ 的 PR。

[README](/py_v2/README.md)

# 致谢
+ 感谢 [iwaiwai](https://github.com/iwaiwai) ， 目前补充到 180 个。
+ 感谢 [cqlicheng](https://github.com/cqlicheng) ，目前补充到 200 个。
+ 感谢 [sinchang](https://github.com/sinchang) ， 目前补充到 426 个。
+ 感谢微博用户 [tsh90](http://weibo.com/tsh90) 指出错误名单，目前删减到 410 个。
+ 感谢 [sinchang](https://github.com/sinchang) 的新名单， 目前删减到 408 个。
+ 感谢 [CirQ](https://github.com/CirQ) 的模拟登陆脚本。
+ 感谢 [overtrue](https://github.com/overtrue) 的 js 脚本让操作更方便。
