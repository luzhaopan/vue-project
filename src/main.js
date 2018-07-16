//入口文件
import Vue from 'vue'

//导入APP跟组件
import app from './App.vue'

//按需引入mint-ui，保证顶部的样式
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)//手动注册

//导入MUI的样式,保证底部的样式
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})