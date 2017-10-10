# WeiboBlackList
微博批量拉黑

## 环境配置 
+ Python 3.x
+ 抓包软件，推荐使用 Fiddler

## 运行
1. 登录网页版微博，找到一个用户，准备拉黑。
2. 打开 Fiddler 
3. 拉黑刚刚准备的测试用户
4. 如下图所示，在 Fiddler 中选中对应请求，选择 Raw 格式进行查看，并将结果复制到 http.txt 中
6. 在当前文件夹打开命令行，执行 `python run.py` ， 就能拉黑 list.csv 中的所有用户。

![exp1](1.png)


## 说明
list.csv 中是 微博监督员 关注列表前 100 个用户的 UID。 现在微博只能查看前 5 页关注列表，所以不能获取全部 400 多个微博监督员的 UID。 

## 问题
其实我对 Python 不是很熟悉，感觉 `request.urlopen` 慢的不可思议。
