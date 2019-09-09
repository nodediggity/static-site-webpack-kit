const glob = require('glob');
const path = require('path')
const { output, root } = require('./common-paths');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const htmlPlugins = glob.sync('./src/**/*.html').map(dir => new HTMLWebpackPlugin({ filename: path.basename(dir), template: dir }));

module.exports = {
  devtool: 'source-map',
  node: {
    fs: 'empty',
  },
  entry: ['./src/js/app.js', './src/scss/main.scss'],
  output: {
    path: output,
    filename: 'app.[hash:8].js',
    chunkFilename: '[id].[hash:8].js',
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/assets/',
        to: './assets/',
      },
    ]),
    ...htmlPlugins
  ]
}
