# WeiboBlackList
微博批量拉黑

list.txt 中是 微博监督员 的 UID 列表，目前已补充至 410 个。

欢迎大家补充 微博监督员 的 UID 到 list.txt。网页版微博打开主页，第一串数字就是 UID。 
![uid](/imgs/uid.png)

# JS 脚本
来自于 https://github.com/overtrue/weibo-dogs-killer

使用方法：
1. 使用浏览器打开 https://weibo.com 并登陆
    + Windows Chrome `F12`
    + Mac Chrome `Option+Command+I`
2. 打开命令行，粘贴 [weibo-dogs-killer.js](weibo-dogs-killer.js) 的代码并运行
![js](/imgs/js.jpg)


# Python 脚本
## 安装
### 1. 下载
![download](/imgs/download.png)

### 2. 安装 Python
[Python 3.6.3](https://www.python.org/downloads/release/python-363/)
选择对应版本安装

### 3. 安装 Fiddler
[官网](http://www.telerik.com/fiddler)

也可以 360软件管家 直接搜索安装

## 运行
1. 打开 Fiddler

2. 打开 [微博监督员关注列表](http://weibo.com/p/1006066264005608/follow?page=1)， 选择一个没有拉黑的用户，按照如下方法拉黑:
+ 鼠标停留在 ID 上方
+ 在弹出的小窗口中拉黑

![blcak](/imgs/black.png)

3. 如下图所示，在 Fiddler 中选中对应请求，选择 Raw 格式进行查看，并将结果复制到 http.txt 中。

![fiddler](/imgs/fiddler.png)

4. 在当前文件夹打开命令行，执行 `python run.py`, 或者直接双击 `run.bat` ， 就能拉黑 list.txt 中的所有用户。



## 问题
其实我是 Python 小白，感觉 `request.urlopen` 慢的不可思议。

最开始我是拿 Matlab + java.swing.Robot + Fiddler 模拟输入干的。


# 致谢
+ 感谢 iwaiwai， 目前补充到 180 个。
+ 感谢 cqlicheng，目前补充到 200 个。
+ 感谢 sinchang， 目前补充到 426 个。
+ 感谢微博用户 tsh90 指出错误名单，目前删减到 410 个。
+ 感谢 CirQ 的模拟登陆脚本。
+ 感谢 overtrue 的 js 脚本让操作更方便。
