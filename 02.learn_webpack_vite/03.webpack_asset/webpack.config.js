const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
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
      }
    ]
  }
}