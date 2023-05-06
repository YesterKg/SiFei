<template>
  <div class="GameSetBox" :style="{ marginTop: MTP + 'px' }">
    <el-card class="box-card" shadow="none" body-style='padding:0'>
      <div v-for="o in getTitle" :key="o.id" class="text item">
        {{ o.TextContent }}
      </div>
    </el-card>
    <el-card shadow="none" class="VideoBox" body-style='padding:0'>
      <div class="VideoText">
        <span class="shili">示例视频</span>
      </div>
      <div class="VideoMini">
        <iframe
          :src="getVideo"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          class="videoBili"
          v-if="Video===true"
        >
        </iframe>
        <el-empty description="视频下架了哦" v-else></el-empty>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MyGame',
  data () {
    return {
      MTP: 0,
      // 显示视频
      Video: true
    }
  },
  computed: {
    // 文字数组
    ...mapGetters(['getTitle', 'getVideo'])
  },
  methods: {
    // 获取页面宽度
    scrollWidth () {
      const scrollHeight = document.body.clientHeight
      // console.log(scrollHeight)
      if (document.body.clientWidth < 800) {
        this.MTP = 0
      } else {
        this.MTP = scrollHeight / 4 - 140
      }
    }
  },
  mounted () {
    // 每当页面变化时都检测一次
    window.addEventListener('resize', this.scrollWidth)
    this.$nextTick(this.scrollWidth())
  },
  beforeDestroy () {
    // 清除检测
    window.removeEventListener('resize', this.scrollWidth)
  }
}
</script>

<style lang="less" scoped>
// 大盒子
.GameSetBox {
  display: flex;
  color: #fff;
  margin: 0 30px;
}
// 左右盒子
.box-card,
.VideoBox {
  width: 100%;
  color: #fff;
  border: 0;
  background-color: transparent !important;
  // 左盒子文字
  .text {
    font-size: 24px;
  }
  // 左盒子字间距
  .item {
    padding: 18px 0;
  }
}
.text:nth-child(1) {
  font-size: 32px;
  font-weight: 600;
  color: red;
}
// 右盒子
.VideoBox {
  font-size: 24px;
  text-align: center;
  .VideoText {
    padding: 18px 0;
  }
  .VideoMini {
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    .videoBili {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
    }
  }
}
.shili{
    font-size: 32px;
    font-weight: 600;
    color: red;
  }

/*屏幕宽度小于991px,改变布局和样式*/
@media screen and (max-width: 991px) {
  .box-card,
  .VideoBox {
    .text {
      font-size: 22px;
      font-weight: 500;
      padding: 14px 0;
    }
  }
  .VideoBox {
    font-size: 22px;
  }
  .text:nth-child(1){
    font-size: 32px;
    font-weight: 600;
  }
}
/*屏幕宽度小于800px,改变布局和样式*/
@media screen and (max-width: 800px) {
  .GameSetBox {
    display: grid;
    color: #fff;
  }
  .box-card {
    text-align: center;
  }
  .box-card,
  .VideoBox {
    .text {
      font-size: 20px;
      font-weight: 500;
    }
    .item {
      padding: 12px 0;
    }
  }
  .VideoBox {
    font-size: 20px;
    .VideoText {
      padding: 0px 0 16px 0;
    }
  }
  .text:nth-child(1){
    font-size: 28px;
    font-weight: 600;
  }
  .shili{
    font-size: 28px;
    font-weight: 600;
  }

}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .GameSetBox {
    display: grid;
    color: #fff;
    margin: 0 auto;
  }
  .box-card {
    text-align: center;
    margin-bottom: 22px;
  }
  .box-card,
  .VideoBox {
    .text {
      font-size: 18px;
    }
    .item {
      padding: 3px 0;
    }
  }
  .VideoBox {
    .VideoText {
      padding: 0px 0 12px 0;
    }
  }
  .text:nth-child(1){
    font-size: 26px;
    font-weight: 600;
  }
  .shili{
    font-size: 26px;
    font-weight: 600;
  }
}
// 小于400px
@media screen and (max-width: 400px) {
  .box-card,
  .VideoBox {
    .text {
      font-size: 18px;
    }
    .item {
      padding: 1px 0;
    }
  }
  .box-card {
    text-align: center;
    margin-bottom: 0px;
  }
  .text:nth-child(1){
    font-size: 24px;
    font-weight: 500;
  }
  .shili{
    font-size: 24px;
    font-weight: 500;

  }
}
</style>
