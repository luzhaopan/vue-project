//入口文件
import Vue from 'vue'

//1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

//导入APP跟组件
import app from './App.vue'

//按需引入mint-ui，保证顶部的样式
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)//手动注册

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