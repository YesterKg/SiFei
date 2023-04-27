<template>
  <div class="GameSetBox" :style="{ marginTop: MTP + 'px' }">
    <el-card class="box-card" shadow="none">
      <div v-for="o in gameTitle" :key="o.id" class="text item">
        {{ o.TextContent }}
      </div>
    </el-card>
    <el-card shadow="none" class="VideoBox">
      <div class="VideoText">
        <span>示例视频</span>
      </div>
      <div class="VideoMini">
        <video src="" width="80%" ref="VideoRef"></video>
        <i class="el-icon-video-play activeBut" @click="loopVideo" v-if="VideoPlay=true"></i>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'MyGame',
  data () {
    return {
      WebWidth: 0,
      WebHeight: 0,
      gameTitle: [
        { id: 0, TextContent: '关于游戏' },
        { id: 1, TextContent: '游戏由虚幻5纯蓝图开发,目前仅为开发测试版!!!' },
        { id: 2, TextContent: 'UE新手,第一个Demo,精力时间有限' },
        { id: 3, TextContent: '(场景,美术,音效,UI, 程序)部分素材来源于网络' },
        { id: 4, TextContent: '个人开发,流程较短' },
        {
          id: 5,
          TextContent: 'BUG超多!!!BUG超多!!!BUG超多!!!再次强调BUG超多!!!'
        }
      ],
      MTP: 0,
      // 控制视频播放与暂停
      VideoPlay: false
    }
  },
  methods: {
    // 获取页面宽度
    scrollWidth () {
      const scrollHeight = document.body.clientHeight
      // console.log(scrollHeight)
      if (document.body.clientWidth < 800) {
        this.MTP = 0
      } else {
        this.MTP = scrollHeight / 4 - 40
      }
    },
    // 点击播放视频
    loopVideo () {
      // 播放视频
      // this.$refs.VideoRef.play()
      this.$message.error('无法播放！')
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
  video {
    border-radius: 5px;
  }
}
.box-card {
  margin-left: 60px;
}
// 右盒子
.VideoBox {
  font-size: 24px;
  text-align: center;
  .VideoText {
    padding: 18px 0;
  }
  .VideoMini {
    position: relative;
    background-color: #000;
    .activeBut {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 60px;
      cursor: pointer;
    }
    .activeBut:hover{
      color: red;
    }
  }
}
// 低于1500px
@media screen and (max-width: 1500px) {
  .box-card {
    margin-left: 30px;
  }
}
/*屏幕宽度小于991px,改变布局和样式*/
@media screen and (max-width: 991px) {
  .box-card,
  .VideoBox {
    .text {
      font-size: 22px;
      font-weight: 500;
    }
  }
  .box-card {
    margin-left: 20px;
  }
  .VideoBox {
    font-size: 22px;
  }
}
/*屏幕宽度小于800px,改变布局和样式*/
@media screen and (max-width: 800px) {
  .GameSetBox {
    display: inline-block;
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
}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .GameSetBox {
    display: inline-block;
    color: #fff;
    margin: 0 auto;
  }
  .box-card {
    text-align: center;
    margin-left: 0;
  }
  .box-card,
  .VideoBox {
    .text {
      font-size: 18px;
    }
    .item {
      padding: 10px 0;
    }
  }
  .VideoBox {
    font-size: 18px;
    margin-top: -20px;
    .VideoText {
      padding: 0px 0 12px 0;
    }
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
}
</style>
