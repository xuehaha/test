// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'

import Mint from 'mint-ui'
import VueResource from 'vue-resource'
import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:8081"
// axios.defaults.timeout = 5000
import { Field } from 'mint-ui';

Vue.component(Field.name, Field);

import 'mint-ui/lib/style.css'

import '../static/css/mui.css'
import '../static/css/icons-extra.css'


// 使用vuex     vuex模块
import store from './store'

// 声名使用插件   内部会给vm对象添加一个属性 : $http



//封装toast
import MyToast from './components/toast/index.js'
Vue.use(MyToast)



Vue.config.productionTip = false



Vue.use(VueResource)
Vue.use(router)


Vue.use(Mint)
//全局注册组件  用法就是如果想引用局部组件的数据 第一种方法是全局注册用vue.components（a，b）
//然后在入口文件内app.vue引入,记得上面要先引入文件第一个参数是自定义的名字，第二个参数是引入文件自定义名字
// Vue.component('lists',List)
/* eslint-disable no-new */

// const router = new VueRouter({
// 	mode:"history",
// routes:[
//   {path:'/',component:Add},
//   {path:'/show',component:Show}
// ] ,
// })



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})