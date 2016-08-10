var path = require('path');
var webpack = require('webpack');

const stylelint = require('stylelint');
const cssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');

module.exports = {
  entry:   {
      main: ['webpack-dev-server/client?http://localhost:8080', './src/index.tsx']
  },

  output: {
      path: './public',
      filename: 'bundle.js'/*,
       publicPath: '../../'*/
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  watch: true,

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]---[local]---[hash:base64:5]!postcss-loader'
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  devServer: {
      host: 'localhost',
      port: 8080,
      contentBase: './public',
      historyApiFallback: true // to support "pseudo-paths" instead of using hashes in browser's address-bar
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, '../src/client/sass')]
  },

  postcss: function () {
    return [
      stylelint(require('./stylelint.config.json')),
      cssnext,
      postcssReporter({clearMessages: true})
    ];
  }

};
