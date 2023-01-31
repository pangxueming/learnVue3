const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader/dist/index');

module.exports = {
  // 设置模式
  // development 开发阶段，会设置development
  // production 准备上线的时候，设置production
  mode: 'development',
  // 设置source-map，建立js映射文件，方便调试代码和错误
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
    clean: true
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'clean management',
      template: './public/index.html'
    }),

    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: './',
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
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
      // {
      //   test: /\.(ttf|eot|wotf2?)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: 'font/[name]_[hash:6].[ext]'
      //     }
      //   }
      // }

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
