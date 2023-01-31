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
  // watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
    clean: true
  },
  devServer: {
    static: './public',
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
  resolve: {
    extensions: ['.vue', '.js', '.json', '.ts'], // 文件扩展名
    alias: { // 路径别名
      '@': path.resolve(__dirname, './src'),
      'js': path.resolve(__dirname, './src/js')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'vue app',
      template: './public/index.html'
    }),

    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: 'public',
    //       to: './',
    //       globOptions: {
    //         ignore: [
    //           '**/index.html'
    //         ]
    //       }
    //     }
    //   ]
    // }),

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
