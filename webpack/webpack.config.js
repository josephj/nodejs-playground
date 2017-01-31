import path from 'path';

export default {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './client.js'
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/public/client/',
    filename: '[name].bundle.js',
    chunkFilename: 'chunk.[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style', 'css'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style',
          'css?camelCase&modules&localIdentName=[hash:base64:8]--[local]',
          'sass'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        use: 'url?limit=25000'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        use: 'url?limit=100000'
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, '..', 'modules'),
      path.resolve('node_modules')
    ]
  },
  plugins: []
};
