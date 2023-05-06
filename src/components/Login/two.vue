<template>
  <div class="BigBox">
    <div>用户名：{{username}}</div>
    <!-- 游戏链接修改 -->
    <div class="LocationBox">
      <el-form ref="LocationForm" :model="addForm" label-width="80px">
        <el-form-item>
          <p>当前游戏链接为：{{addForm}}</p>
        </el-form-item>
        <el-form-item label="修改链接">
          <el-input v-model="addForm.cate_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">修改</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 游戏介绍修改 -->
    <!-- 更新日志修改 -->
    <!-- 关于修改 -->
  </div>
</template>

<script>
import { getArtCateListAPI } from '@/api'
import { mapGetters } from 'vuex'
export default {
  name: 'MyLoginHtml',
  data () {
    return {
      addForm: []
    }
  },
  created () {
    // 一进页面就获取分类
    this.getCateList()
  },
  computed: {
    ...mapGetters(['nickname', 'username', 'user_pic'])
  },
  methods: {
    // 获取分类
    async getCateList () {
      const { data: res } = await getArtCateListAPI()
      console.log(res)
      this.addForm = res.data
    },
    onSubmit () {
      console.log('okk')
    }
  }
}
</script>

<style lang="less" scoped>
.LocationBox {
  margin: 30px;
}
</style>
