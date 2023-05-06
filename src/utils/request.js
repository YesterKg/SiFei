import axios from 'axios'
// 导入vuex
import store from '@/store/index.js'

// 创建自定的axios方法
// 请求url 为 baseURL+url后台完整地址
export const baseURL = 'http://big-event-vue-api-t.itheima.net'
const myAxios = axios.create({
  baseURL
})
// 设置拦截器
const whiteAPIList = ['/one', '/gameset', '/conreq', '/about']
myAxios.interceptors.request.use(
  function (config) {
    if (!whiteAPIList.includes(config.url)) {
      config.headers.Authorization = store.state.token
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 定义token过期拦截器
myAxios.interceptors.response.use(
  function (response) {
    return response
  }, function (error) {
    if (error.response.status === 401) {
      store.commit('undataToken', '')
    }
    return Promise.reject(error)
  }
)

export default myAxios
