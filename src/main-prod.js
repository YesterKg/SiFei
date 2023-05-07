// 发布阶段
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/AllCss/index.css'
// 导入elementui
import '@/element/index.js'
import 'element-ui/lib/theme-chalk/index.css'
// 引入css动画
import 'animate.css'
// 引入路由css
import '@/router/index.css'
import '@/assets/icon/iconfont.css'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
