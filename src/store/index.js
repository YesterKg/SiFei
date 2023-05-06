import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: 'http://www.baidu.com', // 修改游戏下载链接
    // 游戏演示链接末尾添加  &autoplay=0  取消自动播放
    GameVideo: '//player.bilibili.com/player.html?aid=248557784&bvid=BV1tv411p7na&cid=352234234&page=1&autoplay=0',
    // 网页背景图片修改
    imgList: [
      { id: 0, idView: require('../img/1.jpg') },
      { id: 1, idView: require('../img/2.jpg') },
      { id: 2, idView: require('../img/3.jpg') },
      { id: 3, idView: require('../img/4.jpg') },
      { id: 4, idView: require('../img/5.jpg') },
      { id: 5, idView: require('../img/6.jpg') }
    ],
    // 游戏介绍文字修改
    gameTitle: [
      { id: 0, TextContent: '游戏介绍' },
      { id: 1, TextContent: '游戏由虚幻5纯蓝图开发,目前仅为开发测试版!!!' },
      { id: 2, TextContent: 'UE新手,第一个Demo,精力时间有限' },
      { id: 3, TextContent: '(场景,美术,音效,UI, 程序)部分素材来源于网络' },
      { id: 4, TextContent: '个人开发,流程较短' },
      {
        id: 5,
        TextContent: 'BUG超多!!!BUG超多!!!BUG超多!!!再次强调BUG超多!!!'
      }
    ],
    // 更新日志修改
    Updata: [
      // 1
      {
        id: 0,
        UpdataTime: '2023-1-2',
        UpdataText: [
          {
            index: 0,
            UpdateTitle: '1.优化动画资源衔接性,略微提升动画流畅度.'
          },
          {
            index: 1,
            UpdateTitle: '2.替换主武器两把.'
          },
          {
            index: 2,
            UpdateTitle: '3.新增全息瞄准镜及其功能.'
          },
          {
            index: 3,
            UpdateTitle: '4.优化Fire逻辑.修复旧版本的开火卡膛.'
          },
          {
            index: 4,
            UpdateTitle: '5.新增初步武器检视动画.'
          }
        ]
      },
      // 2
      {
        id: 1,
        UpdataTime: '2022.7.02',
        UpdataText: [
          {
            index: 0,
            UpdateTitle: '1.优化各UI的逻辑及美观.'
          },
          {
            index: 1,
            UpdateTitle: '2.优化场景明暗程度.'
          },
          {
            index: 2,
            UpdateTitle: '3.优化开火及弹药的判断.'
          }
        ]
      },
      // 3
      {
        id: 3,
        UpdataTime: '2023-1-2',
        UpdataText: [
          {
            index: 0,
            UpdateTitle: '1.优化环境可视性,环境氛围优化.'
          },
          {
            index: 1,
            UpdateTitle: '2.优化环境带来的性能开销,新增环境距离剔除'
          },
          {
            index: 2,
            UpdateTitle: '3.优化全息瞄准镜及其功能.'
          },
          {
            index: 3,
            UpdateTitle: '4.优化武器单发逻辑,修复单发动画错误.'
          },
          {
            index: 4,
            UpdateTitle: '5.新增相关武器对应动画以及音效.'
          },
          {
            index: 5,
            UpdateTitle: '6.修复拉闸时的动画错误.'
          },
          {
            index: 6,
            UpdateTitle: '7.新增拉闸动画略微提升界面UI美观.'
          },
          {
            index: 7,
            UpdateTitle: '8.主界面UI优化,提升UI信息交互体验.'
          }
        ]
      },
      // 4
      {
        id: 4,
        UpdataTime: '2023-1-2',
        UpdataText: [
          {
            index: 0,
            UpdateTitle: '1.优化动画资源衔接性,略微提升动画流畅度.'
          },
          {
            index: 1,
            UpdateTitle: '2.替换主武器两把.'
          },
          {
            index: 2,
            UpdateTitle: '3.新增全息瞄准镜及其功能.'
          },
          {
            index: 3,
            UpdateTitle: '4.优化Fire逻辑.修复旧版本的开火卡膛.'
          },
          {
            index: 4,
            UpdateTitle: '5.新增初步武器检视动画.'
          }
        ]
      },
      // 5
      {
        id: 5,
        UpdataTime: '2023.4.26',
        UpdataText: [
          {
            index: 0,
            UpdateTitle: '1.优化细节动画'
          },
          {
            index: 1,
            UpdateTitle: '2.修复音效丢失.'
          },
          {
            index: 2,
            UpdateTitle: '3.更改开场模式.'
          }
        ]
      }
    ],
    // 关于游戏文字修改区域
    aboutGame: [
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
  },
  getters: {
    // 抛出链接
    location: (state) => state.location,
    // 抛出游戏视频链接
    getVideo: (state) => state.GameVideo,
    // 抛出图片列表
    getImgList: (state) => {
      return state.imgList
    },
    // 抛出游戏介绍
    getTitle: (state) => {
      return state.gameTitle
    },
    // 抛出日志
    getUpdate: (state) => {
      return state.Updata
    },
    // 抛出关于游戏
    getAboutGame: (state) => {
      return state.aboutGame
    }
  },
  mutations: {},
  actions: {},
  modules: {},
  // 配置为 vuex 的插件
  plugins: [createPersistedState()]
})
