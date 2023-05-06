<template>
  <div class="OneBox" :style="{ marginTop: MTP + 'px' }">
    <!-- <div class="LogoBox">
      <img src="../../img/logo.png" alt="" />
    </div> -->
    <div class="textBox">
      <h2>分崩离析的世界</h2>
      <p>
        自从20年前爆发哈兰病毒后，人类被迫在寥寥无几的聚居点中苟延残喘。作为一个不受道德和规则约束的流浪漫游者，你独自找寻失踪多年的妹妹。前往旧维勒多——人类仅存的堡垒之一。进入据点,结识他人，重拾希望，并揭开萦绕着你的前尘往事。
      </p>
      <el-button type="info" @click="down">下载游戏</el-button>
    </div>
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
      this.MTP = scrollHeight / 3
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
  position: relative;
  // text-align: center;
  margin: 0px auto;
  img {
    width: 90%;
  }
  button:hover {
    color: #000;
    background-color: #fff;
    border-color: #fff;
  }
}
.textBox{
  position:absolute;
  margin-top: 160px;
  left: 10%;
  width: 500px;
  color: #fff;
  text-align: left;
  line-height: 30px;
  h2{
    color: red;
  }
  .el-button {
    font-size: 30px;
    background-color: #000;
    border-color: #000;
    border-radius: 15px;
    margin-top: 50px;
    text-align: left;
  }
  p{
    font-size: 18px;
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
  .textBox{
    position:initial;
    margin: 0 auto;
    text-align: center;
  }
}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .OneBox {
    .el-button {
      font-size: 22px;
    }
  }
  .textBox{
    font-size: 14px;
    p{
      margin: 0 15px;
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
  .textBox{
    width: 375px;
    font-size: 14px;
    p{
      font-size: 12px;
    }
  }
}
</style>
