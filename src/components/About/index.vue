<template>
  <div class="AboutBox">
    <div class="text" v-for="item in gameTitle" :key="item.id">
      {{ item.TextContent }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyAbout',
  data () {
    return {
      gameTitle: [
        { id: 0, TextContent: '关于游戏' },
        { id: 1, TextContent: '游戏由虚幻5纯蓝图开发,目前仅为开发测试版!!!' },
        { id: 2, TextContent: 'UE新手,第一个Demo,精力时间有限' },
        { id: 3, TextContent: '(场景,美术,音效,UI, 程序)部分素材来源于网络' },
        { id: 4, TextContent: '个人开发,流程较短' },
        {
          id: 5,
          TextContent: 'BUG超多!!!BUG超多!!!BUG超多!!!再次强调BUG超多!!!'
        },
        { id: 6, TextContent: '游戏配置要求' },
        { id: 7, TextContent: '操作系统：64-BIT WINDOWS 10 OR WINDOWS 11' },
        {
          id: 8,
          TextContent: 'CPU：CORE I7 4770K @ 3.5GHZ OR AMD RYZEN 5 2600'
        },
        { id: 9, TextContent: '内存：8GB RAM' },
        {
          id: 10,
          TextContent:
            '显卡：NVIDIA GTX 1060 OR AMD RX 5500 XT (VRAM 6 GB OR HIGHER)(High60FPS)'
        },
        { id: 11, TextContent: '存储空间：需要 4GB 可用空间' }
      ]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
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
  .text:nth-child(7){
    width: 200px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    font-weight: 900;
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
