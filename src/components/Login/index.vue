<template>
  <div class="registerBox">
    <div class="LoginBox">
      <!-- 表单区域 -->
    <el-form ref="loginRef" :model="loginForm" :rules="loginRules">
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="loginInfo"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api/index.js'
import { mapMutations } from 'vuex'
export default {
  name: 'MyLogin',
  data () {
    return {
      loginForm: {
        username: 'lkx123',
        password: '123456'
      },
      // 注册表单的校验规则
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z0-9]{1,10}$/,
            message: '用户名必须是1-10的大小写字母数字',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^\S{6,15}$/,
            message: '密码必须是6-15的非空字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 更新token
    ...mapMutations(['updateToken']),
    // 登录按钮->点击事件
    async loginInfo () {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return
        // 1. 发起登录的请求
        const { data: res } = await loginAPI(this.loginForm)
        // 2. 登录失败
        if (res.code !== 0) return this.$message.error(res.message)
        // 3. 登录成功
        this.$message.success(res.message)
        // 存入vuex
        this.updateToken(res.token)
        // 登录成功之后，跳转到后台主页
        this.$router.push('/loginHtml')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.registerBox {
  background:black ;
  height: 100%;
  background-size: cover;
  .LoginBox{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    width: 400px;
    height: 270px;
    background-color: #fff;
  }
}
</style>
