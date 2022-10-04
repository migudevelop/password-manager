const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = (env, cofig) =>
  merge(common(env, cofig), {
    mode: 'production',
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  })
