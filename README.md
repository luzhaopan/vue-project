##开源协议的异同点（https://www.zhihu.com/question/19568896）
##用命令行的方式把修改后的代码上传到git
#1、git status  （查看修改的文件状态)
#2、git add .
#3、git commit -m "提交信息"
#4、git push

##一、制作首页App组件
#1、完成Header区域 ，使用Mint-UI中的Header组件
#2. 制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
     + 在制作 购物车 小图标的时候，操作会相对多一些：
     + 先把 扩展图标的 css 样式icons-extra.css，拷贝到 项目中的mui文件夹中
     + 拷贝 扩展字体库 ttf 文件mui-icons-extra.ttf，到项目中
     + 为 购物车 小图标 ，添加 如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`

##二、在main.js中导入路由
1.1 导入路由的包
1.2 安装路由
1.3 导入自己的router.js模块
1.4 挂在路由对象到vm实例上

##三、## 改造 tabbar 为 router-link

    ## 设置路由高亮

    ## 点击 tabbar 中的路由链接，展示对应的路由组件