import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/view/home/Home'
import Test from '@/view/Car'
import NewsList from '@/view/NewsList'
import NewsInfo from '@/view/NewsInfo'
import Search from '@/view/Search'
import Login from '@/view/Login'
import Test1 from '@/view/Test'


// props 传值
import PropsParent from '@/view/props/PropsParent'
// 上传显示缩略图
import Upload from '@/view/Upload'
// 上传显示缩略图
import Location from '@/view/location/ParentReceive'
//table切换
import Tabs from '@/components/Tabs'
import Timmer from '@/view/Timmer'
import Debounce from '@/view/Debounce'




Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/newslist', component: NewsList },
    { path: '/Search', component: Search },
    { path: '/Test', component: Test },
    { path: '/NewsInfo', component: NewsInfo },
    { path: '/propsparent', component: PropsParent },
    { path: '/location', component: Location },
    { path: '/tabs', component: Tabs },
    { path: '/timmer', component: Timmer },
    { path: '/debounce', component: Debounce },
    { path: '/demo', component: Test1 },
    { path: '/upload', component: Upload }

  ],
  linkActiveClass: 'mui-active'   //选中当前tab的当前样式
})


export default router;