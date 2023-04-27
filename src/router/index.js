import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 导入首页
const Home = () => import('@/components/Home/index.vue')
// 导入关于
const About = () => import('@/components/About/index.vue')
// 导入介绍
const GameSet = () => import('@/components/GameSet/index.vue')
// 导入配置
const ConReq = () => import('@/components/ConReq/index.vue')
// 导入首页第一张
const OneWeb = () => import('@/components/Home/one.vue')
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
      { path: '/about', component: About }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
