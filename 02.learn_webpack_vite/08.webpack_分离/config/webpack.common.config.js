const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  target: 'web',
  // 设置模式
  // development 开发阶段，会设置development
  // production 准备上线的时候，设置production
  // 设置source-map，建立js映射文件，方便调试代码和错误
  // watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.js',
    clean: true
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.ts'], // 文件扩展名
    alias: { // 路径别名
      '@': path.resolve(__dirname, '../src'),
      'js': path.resolve(__dirname, '../src/js')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'vue app',
      template: '../public/index.html'
    }),

    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),

    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/, //正则表达式
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(ttf|eot|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  }
}
