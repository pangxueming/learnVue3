const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, // babel-loader不会忽略node_modules文件的解析
  // devServer: {
  //   historyApiFallback: false
  // }
})
