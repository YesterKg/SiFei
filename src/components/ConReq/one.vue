<template>
  <div class="UpdataLogBox">
    <!-- 左侧更新日志大盒子 -->
    <div class="LeftBox">
      <p>更新日志</p>
      <div class="block">
        <el-timeline :reverse="true">
          <el-timeline-item
            v-for="item in getUpdate"
            :key="item.id"
            :timestamp="item.UpdataTime"
            placement="top"
            size="large"
            icon="el-icon-more"
          >
            <el-card>
              <h4 v-for="itemss in item.UpdataText" :key="itemss.index">
                {{ itemss.UpdateTitle }}
              </h4>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
    <!-- 中间logo -->
    <div class="logoBox">
      <img src="../../img/logo.png" alt="" />
    </div>
    <!-- 右侧意见表单大盒子 -->
    <div class="RightBox">
      <p>写下你的想法</p>
      <el-form ref="addNewRef" :model="addNewForm" :rules="addNewRules">
        <el-form-item prop="email">
          <el-input
            v-model="addNewForm.email"
            placeholder="邮箱地址"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="textarea"
            v-model="addNewForm.textBody"
            placeholder="建议箱"
            :rows="minTextRows"
          ></el-input>
        </el-form-item>
        <el-form-item class="btnBox">
          <el-button type="primary" @click="onSubmit">提交意见</el-button>
          <el-button @click="onEmpty">清空建议箱</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UpdataLog',
  data () {
    return {
      // 表单内容
      addNewForm: {
        email: '',
        textBody: ''
      },
      // 建议框默认行数
      minTextRows: 15,
      // 表单验证规则
      addNewRules: {
        email: [
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: ['blur', 'change']
          },
          {
            type: 'email',
            message: '请输入格式正确的邮箱地址'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['getUpdate'])
  },
  methods: {
    // 点击提交按钮事件
    onSubmit () {
      this.$refs.addNewRef.validate((valid) => {
        if (valid) {
          // 数据有效发起提交，还未写发送代码
          this.addNewForm = {}
          this.$message.success('提交成功，感谢您的建议！')
        } else {
          this.$message.error('请按正确格式输入！')
        }
      })
    },
    // 清空建议箱内容
    onEmpty (done) {
      if (this.addNewForm.textBody) {
        this.$confirm('确认清空所以辛苦写的意见吗?')
          .then((_) => {
            done(
              (this.addNewForm.textBody = ''),
              this.$message('已清空，请继续编写!')
            )
          })
          .catch((_) => {})
      } else {
        this.$message.warning('您还没有写任何建议哦！')
      }
    },
    // 获取页面宽度
    scrollWidth () {
      const scrollWith = document.body.clientWidth
      if (scrollWith < 800) {
        this.minTextRows = 5
      } else {
        this.minTextRows = 15
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
.UpdataLogBox {
  display: flex;
  justify-content: space-between;
  padding: 50px;
  margin-top: 50px;
  color: #fff;
  .LeftBox {
    flex: 1;
    p {
      text-align: center;
      font-size: 24px;
    }
    .block {
      height: 600px;
      overflow: auto;
    }
  }
  .logoBox {
    flex: 1;
    margin: 0 10px;
    img {
      width: 100%;
      margin-top: 200px;
    }
  }
  .RightBox {
    flex: 1;
    p {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
}
/*屏幕宽度小于991px,改变布局和样式*/
@media screen and (max-width: 991px) {
  .UpdataLogBox {
    padding: 40px;
    margin-top: 40px;
    .LeftBox {
      p {
        font-size: 22px;
      }
    }
    .RightBox {
      p {
        font-size: 22px;
      }
    }
  }
}
/*屏幕宽度小于800px,改变布局和样式*/
@media screen and (max-width: 800px) {
  .UpdataLogBox {
    padding: 30px;
    margin-top: 20px;
    .LeftBox {
      margin-right: 30px;
      p {
        font-size: 20px;
      }
    }
    .RightBox {
      margin-left: 30px;
      p {
        font-size: 20px;
      }
    }
    .logoBox {
      display: none;
    }
  }
}
/*屏幕宽度小于600px,改变布局和样式*/
@media screen and (max-width: 600px) {
  .UpdataLogBox {
    padding: 10px;
    margin-top: 0px;
    .LeftBox {
      margin-right: 10px;
      p {
        font-size: 16px;
      }
      .el-timeline-item {
        height: 200px;
      }
    }
    .RightBox {
      display: none;
    }
    .logoBox {
      display: none;
    }
  }
}
</style>
