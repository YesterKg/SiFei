<template>
  <div class="OneBox" :style="{ marginTop: MTP + 'px' }">
    <!-- <div class="LogoBox">
      <img src="../../img/logo.png" alt="" />
    </div> -->
    <el-button type="info" @click="down">立刻游玩</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MyOneBox',
  data () {
    return {
      MTP: 0
    }
  },
  methods: {
    // 获取页面高度
    scrollHeght () {
      const scrollHeight = window.innerHeight
      this.MTP = scrollHeight / 4
      // console.log(this.BoxHeight)
      // console.log(scrollWith)
    },
    down () {
      window.location.href = this.location
      console.log(this.location)
      this.$message.success('感谢支持！')
    }
  },
  computed: {
    ...mapGetters(['location'])
  },
  mounted () {
    // 每当页面变化时都检测一次
    window.addEventListener('resize', this.scrollHeght)
    this.$nextTick(this.scrollHeght())
  },
  beforeDestroy () {
    // 清除检测
    window.removeEventListener('resize', this.scrollHeght)
  }
}
</script>

<style lang="less" scoped>
.OneBox {
  text-align: center;
  margin: 0px auto;
  img {
    width: 90%;
  }
  .el-button {
    font-size: 30px;
    background-color: #000;
    border-color: #000;
    border-radius: 15px;
    margin-top: 150px;
  }
  button:hover {
    color: #000;
    background-color: #fff;
    border-color: #fff;
  }
}
/*屏幕宽度小于1500px,改变布局和样式*/
@media screen and (max-width: 1500px) {
  .OneBox {
    .el-button {
      font-size: 28px;
    }
  }
}
/*屏幕宽度小于991px,改变布局和样式*/
@media screen and (max-width: 991px) {
  .OneBox {
    .el-button {
      font-size: 26px;
    }
  }
}
/*屏幕宽度小于800px,改变布局和样式*/
@media screen and (max-width: 800px) {
  .OneBox {
    .el-button {
      font-size: 24px;
    }
  }
}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .OneBox {
    .el-button {
      font-size: 22px;
    }
  }
}
// 小于400px
@media screen and (max-width: 400px) {
  .OneBox {
    .el-button {
      font-size: 20px;
    }
  }
}
</style>
