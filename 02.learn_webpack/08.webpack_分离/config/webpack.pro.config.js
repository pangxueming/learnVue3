const CopyWebpackPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.config');

module.exports = merge(commonConfig, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            ignore: [
              '**/index.html'
            ]
          }
        }
      ]
    }),
  ]
}) 