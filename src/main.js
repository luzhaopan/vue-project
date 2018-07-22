//入口文件
import Vue from 'vue'

//1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

//2.1 导入vue-resource
import VueResource from 'vue-resource'
//2.2 安装vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io';

//导入APP跟组件
import app from './App.vue'

//按需引入mint-ui，保证顶部的样式
import { Header,Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)//手动注册
//轮播图需要注册的组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//导入MUI的样式,保证底部的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//1.3 导入自己的router.js模块
import router from './router'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router  //1.4 挂在路由对象到vm实例上
})