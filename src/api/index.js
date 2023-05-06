import request from '@/utils/request.js'
import store from '@/store'
// 登录接口
export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}
// 获取用户信息接口
export const getUserInfoAPI = () => {
  return request({
    url: '/my/userinfo',
    headers: {
      Authorization: store.state.token
    }
  })
}
//  获取文章分类数据
export const getArtCateListAPI = () => {
  return request({
    url: '/my/cate/list'
  })
}
// 添加文章分类
// export const addArtCateAPI = ({ cate_name, cate_alias }) => {
//   return request({
//     url: '/my/cate/add',
//     method: 'POST',
//     data: {
//       cate_name,
//       cate_alias
//     }
//   })
// }
