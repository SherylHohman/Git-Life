var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('../webpack.config');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHot = require('webpack-hot-middleware');

var compiler = webpack(webpackConfig);

var app = express();
//don't use in prod
app.use(webpackMiddleware(compiler, {
  quiet: true,
  noInfo: true,
  stats: {
    colors: true,
    reasons: true
  },
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHot(compiler));

require('./middleware.js')(app, express);

module.exports = app;
