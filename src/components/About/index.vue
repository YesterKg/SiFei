<template>
  <div class="AboutBox">
    <!-- 渲染文字介绍 -->
    <div class="text" v-for="item in getAboutGame" :key="item.id">
      {{ item.TextContent }}
    </div>
    <!-- 隐藏登录按钮 -->
    <i class="lg" @click="lgBtn">@</i>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MyAbout',
  data () {
    return {
      num: 0
    }
  },
  computed: {
    ...mapGetters(['getAboutGame'])
  },
  methods: {
    lgBtn () {
      this.num++
      if (this.num >= 3) {
        this.$router.push('/login')
        this.num = 0
      }
    }
  }
}
</script>

<style lang="less" scoped>
.AboutBox {
  width: 100%;
  height: 100%;
  color: #fff;
  margin-top: 10px;
  font-size: 24px;
  .text {
    text-align: center;
    padding: 10px 0;
    font-weight: 600;
  }
  .text:nth-child(1),
  .text:nth-child(7) {
    width: 200px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    font-weight: 900;
  }
  .lg {
    color: transparent;
    cursor: default;
  }
}
/*屏幕宽度小于991px,改变布局和样式*/
@media screen and (max-width: 991px) {
  .AboutBox {
    font-size: 22px;
    .text {
      text-align: center;
      padding: 10px 0;
    }
  }
}
/*屏幕宽度小于800px,改变布局和样式*/
@media screen and (max-width: 800px) {
  .AboutBox {
    font-size: 20px;
    .text {
      text-align: center;
      padding: 10px 0;
    }
  }
}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .AboutBox {
    font-size: 18px;
    .text {
      text-align: center;
      padding: 10px 0;
    }
  }
}
/*屏幕宽度小于400px,改变布局和样式*/
@media screen and (max-width: 400px) {
  .AboutBox {
    font-size: 16px;
    padding: 0 2px;
    .text {
      text-align: center;
      padding: 5px 0;
    }
  }
}
</style>
