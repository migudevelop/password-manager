const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html'
})

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
        },
        {
          test: /\.(svg|gif|png|jpg|jpeg|ico)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'static/media/images',
            name: `${fileNameWithHash}.[ext]`
          }
        },
        {
          test: /\.(woff2?|ttf|eot)$/i,
          loader: 'file-loader',
          options: {
            outputPath: 'static/media/fonts',
            name: `${fileNameWithHash}.[ext]`
          }
        }
      ]
    },
    resolve: {
      modules: [path.resolve('./src'), path.resolve('./node_modules')]
    },
    plugins: [htmlWebpackPlugin]
  }
}
