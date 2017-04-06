var webpack           = require('webpack')
var path              = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
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
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
          env: {
            production: {
              plugins: ['transform-regenerator', 'transform-runtime'],
              presets: ['es2015']
            },
            development: {
              plugins: ['transform-es2015-modules-commonjs']
            }
          }
        },
      }, {
        test   : /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      }, {
        test   : /\.js$/,
        loaders: [ 'react-hot', 'babel-loader' ],
        include: path.join(__dirname, 'node_modules', 'redux-devtools', 'src')
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin()
  ],
};
