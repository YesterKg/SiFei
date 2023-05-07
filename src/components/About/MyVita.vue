<template>
  <div class="VitaBox">
    <!-- 左侧盒子 -->
    <div class="LeftBox">
      <!-- 卡片 -->
      <el-card class="box-card">
        <div class="FilesBox">
          <!-- 头像 -->
          <div>
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949"
              class="SwitchBtn"
            >
            </el-switch>
            <el-avatar
              icon="el-icon-user-solid"
              :size="avatar"
              :src="url"
            ></el-avatar>
          </div>
          <h2>Jay</h2>
          <p>南昌 | IBM | Java开发工程师</p>
          <!-- 联系方式 -->
          <div class="ContactBox">
            <el-tooltip
              class="item"
              effect="dark"
              content="S207789"
              placement="bottom-start"
            >
              <span
                class="iconfont tag-weChat"
                data-clipboard-text="我是可以复制的内容，请点击复制"
                style="color: #28c445"
                @click="weixin"
                >&#xe607;</span
              >
            </el-tooltip>
            <!--  -->
            <el-tooltip
              class="item"
              effect="dark"
              content="2051124587"
              placement="bottom-start"
            >
              <span
                class="iconfont tag-QQ"
                data-clipboard-text="我是可以复制的内容，请点击复制"
                style="color: #30a5dd"
                @click="QQ"
                >&#xe73e;</span
              >
            </el-tooltip>
            <!--  -->
            <el-tooltip
              class="item"
              effect="dark"
              content="1521648794"
              placement="bottom-start"
            >
              <span
                class="iconfont tag-Phone"
                data-clipboard-text="我是可以复制的内容，请点击复制"
                style="color: #ff9000"
                @click="Phone"
                >&#xe678;</span
              >
            </el-tooltip>
            <!--  -->
            <el-tooltip
              class="item"
              effect="dark"
              content="201254587@qq.com"
              placement="bottom-start"
            >
              <span
                class="iconfont tag-email"
                data-clipboard-text="我是可以复制的内容，请点击复制"
                style="color: #51a9ff"
                @click="email"
                >&#xe672;</span
              >
            </el-tooltip>
          </div>
        </div>
      </el-card>
    </div>
    <!-- 右侧详细介绍 -->
    <div class="RightBox">
      <div class="InFormationBox">
        <el-descriptions title="基本信息" :column="1">
          <el-descriptions-item label="性别">男</el-descriptions-item>
          <el-descriptions-item label="手机号"
            >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="居住地">南昌市</el-descriptions-item>
          <el-descriptions-item label="联系地址"
            >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
          >
          <el-descriptions-item label="毕业学校">
            江西交通职业技术学院
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <el-divider></el-divider>
      <!-- 职业技能 -->
      <div class="SkillBox">
        <h4>职业技能</h4>
        <div class="Skill">
          <div class="SkillOne">
            <p>HTML</p>
            <!-- percentage控制进度 -->
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="80"
              color="#67c23a"
              :show-text="false"
            ></el-progress>
            <p>CSS</p>
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="80"
              color="#1989fa"
              :show-text="false"
            ></el-progress>
            <p>Vuex</p>
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="80"
              color="#1989fa"
              :show-text="false"
            ></el-progress>
          </div>
          <div class="SkillTwo">
            <p>JS</p>
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="80"
              color="#5cb87a"
              :show-text="false"
            ></el-progress>
            <p>VUE</p>
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="80"
              color="#1989fa"
              :show-text="false"
            ></el-progress>
            <p>Element-UI</p>
            <el-progress
              :text-inside="true"
              :stroke-width="26"
              :percentage="80"
              color="#1989fa"
              :show-text="false"
            ></el-progress>
          </div>
        </div>
        <el-divider></el-divider>
        <!-- 项目经历 -->
        <div class="ProBox">
          <h3>项目经历</h3>
          <div class="title">
            <h4>商城后台管理系统</h4>
            <p>
              <strong>项目描述：</strong
              >该项目用于集中管理商城后台人员及商品管理，对用户进行权限的分配，对商品进行分类、增删标签、展示数据报表。
            </p>
            <p>
              <strong>项目技术栈：</strong>Vue2 + node + Element-UI + Axios +
              git + Echarts
            </p>
            <p>
              <strong>责任描述：</strong
              >主要负责项目页面搭建，使用Axios进行调用后台数据来渲染页面，使用Echarts来绘制图表的展示，使用vue-router配置路由，实现组件之间的页面切换。
            </p>
          </div>
        </div>
        <el-divider></el-divider>
        <!-- 自我评价 -->
        <div class="SelfBox" style="lineheight: 30px">
          <h3>自我评价</h3>
          <p>
            本人诚实守信、办事态度认真，热爱代码，有良好的沟通能力、团队合作能力、抗压能力。对IT行业充满热爱，期待有一个发展的机会。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  name: 'MydeVita',
  data () {
    return {
      url: require('@/img/avatar.jpg'),
      // 头像大小
      avatar: 150,
      Hig: 800,
      value: false
    }
  },
  methods: {
    weixin () {
      console.log('ok')
      const clipboard = new Clipboard('.tag-weChat')
      clipboard.on('success', (e) => {
        this.$message.success('微信号复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        // 不支持复制
        this.$message.error('该浏览器不支持复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    QQ () {
      const clipboard = new Clipboard('.tag-QQ')
      clipboard.on('success', (e) => {
        this.$message.success('QQ号复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        // 不支持复制
        this.$message.error('该浏览器不支持复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    Phone () {
      const clipboard = new Clipboard('.tag-Phone')
      clipboard.on('success', (e) => {
        this.$message.success('手机号复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        // 不支持复制
        this.$message.error('该浏览器不支持复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    email () {
      const clipboard = new Clipboard('.tag-email')
      clipboard.on('success', (e) => {
        this.$message.success('邮箱号复制成功')
        // 释放内存
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        // 不支持复制
        this.$message.error('该浏览器不支持复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    // 获取页面宽度
    scrollWidth () {
      const scrollWith = document.body.clientWidth
      if (scrollWith <= 600) {
        this.avatar = 50
      } else {
        this.avatar = 150
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
.VitaBox {
  width: 100%;
  display: flex;
  .LeftBox {
    .box-card {
      width: 250px;
      height: 350px;
      margin: 20px;
      .FilesBox {
        position: relative;
        padding-top: 10px;
        text-align: center;
        line-height: 35px;
        .SwitchBtn{
          position: absolute;
          top: 0;
          left: -5px;
        }
        .ContactBox {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
      }
    }
  }
  .RightBox {
    height: 800px;
    overflow: auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    .InFormationBox {
      padding: 0 20px;
      .el-descriptions {
        font-size: 22px;
      }
    }
    .SkillBox {
      padding: 0 20px;
      .Skill {
        display: flex;
        p {
          margin: 10px;
        }
        .SkillOne {
          flex: 1;
          margin-right: 10px;
        }
        .SkillTwo {
          flex: 1;
        }
      }
    }
    .ProBox {
      .title {
        line-height: 30px;
      }
    }
  }
}
.iconfont {
  font-family: 'iconfont' !important;
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
}
/*屏幕宽度小于991px,改变布局和样式*/
@media screen and (max-width: 991px) {
  .VitaBox {
    .LeftBox {
      .box-card {
        width: 200px;
        height: 350px;
        margin: 20px;
        .FilesBox {
          padding-top: 10px;
          text-align: center;
          line-height: 30px;
        }
      }
    }
    .RightBox {
      margin: 20px 20px 20px 0;
      height: 700px;
      .InFormationBox {
        .el-descriptions {
          font-size: 20px;
        }
      }
    }
  }
}
/*屏幕宽度小于800px,改变布局和样式*/
@media screen and (max-width: 800px) {
  .VitaBox {
    .RightBox {
      height: 600px;
    }
  }
}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .VitaBox {
    width: auto;
    display: block;
    margin: 10px;
    .LeftBox {
      .box-card {
        width: 100%;
        height: 200px;
        margin: 0;
        .FilesBox {
          padding-top: 10px;
          text-align: center;
          line-height: 30px;
        }
      }
    }
    .RightBox {
      margin: 0;
      margin-top: 10px;
      height: 500px;
      .InFormationBox {
        .el-descriptions {
          font-size: 18px;
        }
      }
      .SkillBox {
        padding: 15px;
      }
    }
  }
}
// 小于500
@media screen and (max-width: 500px) {
  .VitaBox {
    .RightBox {
      height: 400px;
    }
  }
}
/*屏幕宽度小于400px,改变布局和样式*/
@media screen and (max-width: 400px) {
  .VitaBox {
    .RightBox {
      height: 250px;
    }
  }
}
</style>
