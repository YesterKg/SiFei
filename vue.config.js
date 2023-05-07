const { defineConfig } = require('@vue/cli-service')
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const BASE_URL =
// process.env.NODE_ENV === 'production' ? '/game_web/' : '/'
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  chainWebpack: (config) => {
    // 发布模式

    config.when(process.env.NODE_ENV === 'production', (config) => {
      config.entry('app').clear().add('./src/main-prod.js')
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        'vue-quill-editor': 'VueQuillEditor'
      })

      config.plugin('html').tap((args) => {
        args[0].isProd = true
        return args
      })
      // config.plugin('CompressionPlugin').use(
      //   new CompressionWebpackPlugin({
      //     test: /\.(js|css)$/,
      //     threshold: 10240, // 超过10kb的文件就压缩
      //     deleteOriginalAssets: true, // 不删除源文件
      //     minRatio: 0.8
      //   })
      // )
    })

    // 开发模式
    config.when(process.env.NODE_ENV === 'development', (config) => {
      config.entry('app').clear().add('./src/main-dev.js')

      config.plugin('html').tap((args) => {
        args[0].isProd = false
        return args
      })
    })
  }
})
