const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const config = require('../build/webpack.dev');

const compiler = webpack(config);
compiler.apply(new FriendlyErrorsWebpackPlugin());

module.exports = (app) => {
  app.use(webpackDevMiddleware(compiler, {
    serverSideRender: true,
    quiet: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    },
    publicPath: '/dist/'
  }));
  app.use(webpackHotMiddleware(compiler.compilers.find(comp => comp.name === 'client')));
  app.use(webpackHotServerMiddleware(compiler));
};
