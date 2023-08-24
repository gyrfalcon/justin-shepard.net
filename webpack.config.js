const path = require('node:path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: './src/index.js',
  devServer: {
    port: 8181,
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.[contenthash].js',
  },
  plugins: [HtmlWebpackPluginConfig],
}
