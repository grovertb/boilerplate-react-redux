var webpack           = require('webpack')
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool      : 'eval',
  cache        : true,
  context      : __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/only-dev-server',
    './src/index.jsx'
  ],
  output: {
    path      : __dirname + '/static/',
    publicPath: 'http://localhost:8888/static/',
    filename  : 'client.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        exclude: /(node_modules)/,
      }, {
        test   : /\.js$/,
        loaders: [ 'babel-loader'],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test   : /\.js$/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        include: path.join(__dirname, 'node_modules', 'redux-devtools', 'src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};
