/**
 * @file webpack-dev-server
 */

require('./check-versions')();

process.env.NODE_ENV = 'development';

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const open = require('open');
let config = require('./webpack.config.js');

// Hot Module Replacement
config.entry.app.unshift('webpack-dev-server/client?http://localhost:8090/', 'webpack/hot/dev-server');
config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin()
]);

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    hot: true,
    historyApiFallback: true,
    compress: true,
    // publicPath: "/dist/",
    stats: {
        colors: true,
        chunks: false
    },
    open: true,
    // clientLogLevel: "error",
    noInfo: false
});

server.listen(8090, 'localhost', function () {
    console.log('Starting server on http://localhost:8090');
    open('http://localhost:8090');
});
