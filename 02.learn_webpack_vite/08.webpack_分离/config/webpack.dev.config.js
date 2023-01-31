const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: '../public',
    hot: true,
    host: '127.0.0.1',
    port: 8080,
    open: true,
    // compress: true
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8535/emrapi/',
        pathRewrite: {
          '^/api': ''
        },
        secure: false,
        changeOrigin: true
      },
    }
  },
})