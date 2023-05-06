<template>
  <div class="Home">
    <el-container class="header">
      <!-- 头部 -->
      <el-header>
        <div class="LeftBox">
          <router-link to="/one" class="logo">DREADFUL HAZY_死|霏</router-link>
        </div>
        <!-- 右侧 -->
        <div class="RightBox">
          <i class="expand" v-if="VieWidth" @click="drawer = true"> 三 </i>
          <ul v-else class="TitleUl">
            <li>
              <router-link to="/one">首页</router-link>
            </li>
            <li>
              <router-link to="/gameset"> 游戏介绍 </router-link>
            </li>
            <li>
              <router-link to="/conreq">更新日志</router-link>
            </li>
            <li>
              <router-link to="/about">关于作者</router-link>
            </li>
          </ul>
        </div>
      </el-header>
    </el-container>
    <!-- 轮播图 -->
    <div class="lbtBigBox">
      <transition-group
        name="fade"
        mode="out-in"
        enter-active-class="animate__animated animate__pulse"
      >
        <div
          v-for="item in getImgList"
          :key="item.id"
          class="lbtBox"
          :style="{
            backgroundImage: 'url(' + item.idView + ')',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            height: BoxHeight + 'px',
          }"
          v-show="listIndex === item.id"
          name="fade"
        ></div>
      </transition-group>
    </div>
    <!-- 主题内容 -->
    <div>
      <!-- 路由切换动画 -->
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
      >
        <router-view></router-view>
      </transition>
    </div>
    <!-- 透明图层 -->
    <div class="toumin"></div>
    <!-- 测边框 -->
    <el-drawer :with-header="false" :visible.sync="drawer" direction="rtl">
      <ul class="DrawerTitleUl" @click="drawer = false">
        <li>
          <router-link to="/one">首页</router-link>
        </li>
        <li>
          <router-link to="/gameset"> 游戏介绍 </router-link>
        </li>
        <li>
          <router-link to="/conreq">更新日志</router-link>
        </li>
        <li>
          <router-link to="/about">关于作者</router-link>
        </li>
      </ul>
    </el-drawer>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { init } from '@/AllCss/rain.js'
import { mapGetters } from 'vuex'
export default {
  name: 'MyHome',
  data () {
    return {
      listIndex: 0, // 显示第几张图片
      imgTime: null, // 定时器
      VieWidth: false,
      BoxHeight: 0,
      // 控制弹出框与隐藏
      drawer: false,
      canvasStyle: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        left: '0',
        bottom: '0'
      },
      ctx: {}
    }
  },
  computed: {
    ...mapGetters(['getImgList'])
  },
  methods: {
    // 开启定时器
    setTimer () {
      this.timer = setInterval(() => {
        this.listIndex++
        if (this.listIndex === this.getImgList.length) {
          this.listIndex = 0
        }
      }, 3000)
    },
    // 获取页面宽度
    scrollWidth () {
      const scrollWith = document.body.clientWidth
      const scrollHeight = window.innerHeight
      this.BoxHeight = scrollHeight
      // console.log(this.BoxHeight)
      // console.log(scrollWith)
      if (scrollWith >= 600) {
        this.VieWidth = false
        this.drawer = false
      } else {
        this.VieWidth = true
      }
    },
    // 下雨效果
    initCanvas () {
      const canvas = document.querySelector('#canvas')
      this.ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init(this.ctx)
    }
  },
  mounted () {
    // 每当页面变化时都检测一次
    window.addEventListener('resize', this.scrollWidth)
    this.$nextTick(this.scrollWidth())
    this.initCanvas()
  },
  created () {
    // 在一进入页面就调用背景切换定时器
    this.setTimer()
  },

  beforeDestroy () {
    // 离开页面销毁定时器
    this.setTimer()
    // 清除检测
    window.removeEventListener('resize', this.scrollWidth)
  }
}
</script>

<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #111111;
  color: #fff;
  text-align: center;
  line-height: 60px;
  z-index: 999;
  .RightBox {
    .expand {
      position: relative;
      width: 300px;
      height: 40px;
      cursor: pointer;
    }
    .expand:hover {
      color: red;
    }
    .TitleUl {
      font-size: 22px;
      li {
        float: left;
        height: 60px;
        margin: 0 10px;
      }
      a:hover {
        color: red;
      }
    }
  }
  .LeftBox {
    .logo {
      position: relative;
      font-size: 1.5em;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
    }
  }
}
// 透明盒子，遮盖背景图防止拖拽下载
.toumin {
  position: absolute;
  top: 0;
  opacity: 0;
  width: 1920px;
  height: 1080px;
  z-index: -1;
}
// 背景轮播图盒子
.lbtBigBox {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: -999;
  overflow: hidden;
}

.DrawerTitleUl {
  color: #fff;
  padding: 10px;
  font-size: 22px;
  li {
    height: 44px;
    line-height: 44px;
    a {
      display: block;
      justify-content: center;
      align-items: center;
    }
  }
  li:hover {
    background-color: #111;
    cursor: pointer;
  }
}
#canvas {
  position: absolute;
  top: 0;
  z-index: -99;
  width: 100%;
  height: 100%;
}

.animate__animated,
.animate__pulse {
  --animate-duration: 3s;
}
/*屏幕宽度小于991px,改变布局和样式*/
@media screen and (max-width: 991px) {
  .el-header {
    padding: 15px 30px;
    .LeftBox {
      .logo {
        font-size: 1.2em;
        font-weight: 500;
      }
    }
    .RightBox {
      .TitleUl {
        font-size: 22px;
      }
    }
  }
}
/*屏幕宽度小于800px,改变布局和样式*/
@media screen and (max-width: 800px) {
  .el-header {
    .RightBox {
      .TitleUl {
        font-size: 18px;
        justify-content: center;
        li{
          margin: 0 8px;
        }
      }
    }
  }
}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .el-header {
    padding: 15px 15px;
    .LeftBox {
      .logo {
        font-size: 1em;
        font-weight: 400;
      }
    }
  }
}
</style>
