import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.config.client';

const config = baseConfig({
  development: true,
  css_bundle: true
});

config.devtool = '#eval-source-map';

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    'process.env.BABEL_ENV': JSON.stringify('es6'),
    __CLIENT__: true,
    __SERVER__: false,
    __PRODUCTION__: false,
    __DEVELOPMENT__: true,
    __DEVTOOLS__: true
  })
);

config.entry.main = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:9899`,
    'webpack/hot/only-dev-server',
    config.entry.main
];

config.module.rules[0] = {
    test: /\.jsx?$/,
    exclude: [/node_modules/,],
    use: ['react-hot', 'babel']
};

config.output = {
    filename: '[name].js',
    path: __dirname,
    publicPath: 'https://localhost:9899/assets/'
};

export default config;
