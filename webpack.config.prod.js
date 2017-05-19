var webpack = require('webpack'),
    path    = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
  entry: './src/App.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        exclude: /(node_modules)/
      },
      {
        test   : /\.js$/,
        loaders: ['babel-loader'],
        exclude: /(node_modules)/
      },
      {
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '__[hash:base64:10]'
              }
            },
            'stylus-loader'
          ]
        }),
      }
    ]
  },
  resolve : {
    // modulesDirectories: [
    //   'src',
    //   'node_modules'
    // ],
    extensions : ['.json', '.js', '.jsx' ]
  },
  plugins :[
    new webpack.DefinePlugin({
      __CLIENT__     : true,
      __SERVER__     : false,
      __DEVELOPMENT__: false,
      __DEVTOOLS__   : false,
      __DEV__        : false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')   // Useful to reduce the size of client-side libraries, e.g. react
      }
    }),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
        }
    }),
  ]
};

// ,
// options: {
//   presets: ['es2016', 'es2017', 'react'],
//   plugins: ['transform-es2015-modules-commonjs'],
//   env: {
//     production: {
//       plugins: ['transform-regenerator', 'transform-runtime'],
//       presets: ['es2015']
//     },
//     development: {
//       plugins: ['transform-es2015-modules-commonjs']
//     }
//   }
// },
