const webpack           = require('webpack')
const WebpackDevServer  = require('webpack-dev-server')
const webpackConfig     = require('./webpack.config')
const compiler          = webpack(webpackConfig);
const Dashboard         = require('webpack-dashboard')
const DashboardPlugin   = require('webpack-dashboard/plugin')

const mDashboard = new Dashboard()

compiler.apply(new DashboardPlugin(mDashboard.setData))

new WebpackDevServer(compiler, {
    publicPath        : webpackConfig.output.publicPath,
    hot               : true,
    quiet             : true,
    stats             : {
      colors: true
    },
    historyApiFallback: true
    // devServer         : true,
  })
  .listen(8888, 'localhost', err => {
    if (err)
      console.log("err", err)
  	console.log("Starting server on http://localhost:8888");
  })
