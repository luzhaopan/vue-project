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
#1.1 导入路由的包
#1.2 安装路由
#1.3 导入自己的router.js模块
#1.4 挂在路由对象到vm实例上

##三、改造 tabbar 为 router-link

# 设置路由高亮
# 点击 tabbar 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
#1. 获取数据， 如何获取呢， 使用 vue-resource
#2. 使用 vue-resource 的 this.$http.get 获取数据
#3. 获取到的数据，要保存到 data 身上
#4. 使用 v-for 循环渲染 每个 item 项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由链接

## 新闻资讯 页面 制作
#1. 绘制界面， 使用 MUI 中的 media-list.html
#2. 使用 vue-resource 获取数据
#3. 渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
#1. 把列表中的每一项改造为 router-link,同时，在跳转的时候应该提供唯一的Id标识符
#2. 创建新闻详情的组件页面  NewsInfo.vue
#3. 在 路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来

## 实现 新闻详情 的 页面布局 和数据渲染

## 单独封装一个 comment.vue 评论子组件
#1. 先创建一个 单独的 comment.vue 组件模板
#2. 在需要使用 comment 组件的 页面中，先手动 导入 comment 组件
 + `import comment from './comment.vue'`
#3. 在父组件中，使用 `components` 属性，将刚才导入 comment 组件，注册为自己的 子组件
#4. 将注册子组件时候的，注册名称，以 标签形式，在页面中 引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多评论的功能
#1. 为加载更多按钮，绑定点击事件，在事件中，请求 下一页数据
#2. 点击加载更多，让 pageIndex++ , 然后重新调用 this.getComments() 方法重新获取最新一页的数据
#3. 为了防止 新数据 覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让 老数据 调用 数组的 concat 方法，拼接上新数组

## 发表评论
#1. 把文本框做双向数据绑定
#2. 为发表按钮绑定一个事件
#3. 校验评论内容是否为空，如果为空，则Toast提示用户 评论内容不能为空
#4. 通过 vue-resource 发送一个请求，把评论内容提交给 服务器
#5. 当发表评论OK后，重新刷新列表，以查看最新的评论
 + 如果调用 getComments 方法重新刷新评论列表的话，可能只能得到 最后一页的评论，前几页的评论获取不到
 + 换一种思路： 当评论成功后，在客户端，手动拼接出一个 最新的评论对象，然后 调用 数组的 unshift 方法， 把最新的评论，追加到  data 中 comments 的开头；这样，就能 完美实现刷新评论列表的需求；

## 改造图片分析 按钮为 路由的链接并显示对应的组件页面

## 绘制 图片列表 组件页面结构并美化样式
#1. 制作 顶部的滑动条
#2. 制作 底部的图片列表
### 制作顶部滑动条的坑们：
#1. 需要借助于 MUI 中的 tab-top-webview-main.html
#2. 需要把 slider 区域的 mui-fullscreen 类去掉
#3. 滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下：
  + 导入 mui.js
  + 调用官方提供的 方式 去初始化：
  ```
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```
 #4. 我们在初始化 滑动条 的时候，导入的 mui.js ，但是，控制台报错： `Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode`
  + 经过我们合理的推测，觉得，可能是 mui.js 中用到了 'caller', 'callee', and 'arguments' 东西，但是， webpack 打包好的 bundle.js 中，默认是启用严格模式的，所以，这两者冲突了；
  + 解决方案： 1. 把 mui.js 中的 非严格 模式的代码改掉；但是不现实； 2. 把 webpack 打包时候的严格模式禁用掉；
  + 最终，我们选择了 plan B  移除严格模式： 使用这个插件 babel-plugin-transform-remove-strict-mode
# 5. 刚进入 图片分享页面的时候， 滑动条无法正常工作， 经过我们认真的分析，发现， 如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化 滑动条 的代码，搬到了 mounted 生命周期函数中；
# 6. 当 滑动条 调试OK后，发现， tabbar 无法正常工作了，这时候，我们需要把 每个 tabbar 按钮的 样式中  `mui-tab-item` 重新改一下名字；
# 7. 获取所有分类，并渲染 分类列表；