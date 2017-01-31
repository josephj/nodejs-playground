const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.client.development');

new WebpackDevServer(webpack(config), {
  quiet: true, // don’t output anything to the console
  noInfo: true, // suppress boring information
  hot: true,
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true},
  historyApiFallback: true
}).listen(9989, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:9989');
});
