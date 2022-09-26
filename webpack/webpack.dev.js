const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
// const openBrowser = require('react-dev-utils/openBrowser')

const port = 3000

module.exports = (env, cofig) =>
  merge(common(env, cofig), {
    mode: 'development',
    devServer: {
      static: path.resolve(__dirname, 'public'),
      port,
      open: [`http://localhost:${port}/`],
      compress: true,
      historyApiFallback: true,
      hot: true
    }
  })
