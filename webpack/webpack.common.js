const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const HtmlWebPackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// const htmlWebpackPlugin = new HtmlWebPackPlugin({
//   inject: false,
//   template: './public/index.html',
//   filename: './index.html'
// })

module.exports = (_env, { mode }) => {
  const fileNameWithHash =
    mode === 'production' ? '[name].[Contenthash:8]' : '[name].[hash:8]'

  return {
    devtool: 'inline-source-map',
    entry: {
      bundle: path.resolve('./src/index.tsx')
    },
    output: {
      path: path.resolve('build'),
      filename: `static/js/${fileNameWithHash}.chunk.js`,
      libraryTarget: 'umd',
      publicPath: '/'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            plugins: [
              new TsconfigPathsPlugin({
                configFile: path.resolve('./tsconfig.json')
              })
            ]
          }
        }
      ]
    },
    resolve: {
      modules: [path.resolve('./src'), path.resolve('./node_modules')]
    }
  }
}
