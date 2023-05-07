import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

// 导入首页
const Home = () => import('@/components/Home/index.vue')
// 导入关于
const About = () => import('@/components/About/vita.vue')
// 导入我的简历
const MyVita = () => import('@/components/About/MyVita.vue')
// 导入介绍
const GameSet = () => import('@/components/GameSet/index.vue')
// 导入配置
const ConReq = () => import('@/components/ConReq/index.vue')
// 导入首页第一张
const OneWeb = () => import('@/components/Home/one.vue')
// 导入后台
const Login = () => import('@/components/Login/index.vue')
const LoginHtml = () => import('@/components/Login/two.vue')
const routes = [
  {
    path: '/',
    redirect: '/one'
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '/one', component: OneWeb },
      { path: '/gameset', component: GameSet },
      { path: '/conreq', component: ConReq },
      { path: '/about', component: About },
      { path: '/myvait', component: MyVita }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/loginHtml',
    component: LoginHtml
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (token && !store.state.userInfo.username) {
    // 有token但是没有用户信息, 才去请求用户信息保存到vuex里
    // 调用actions里方法请求数据
    store.dispatch('initUserInfo')
    // 下次切换页面vuex里有用户信息数据就不会重复请求用户信息
  }
  next()
})
export default router
