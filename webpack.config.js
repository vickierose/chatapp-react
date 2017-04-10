const webpack = require('webpack');
const path = require('path');

module.exports  = {
    entry: {
        app: './app.js'
    },
    devtool: 'source-map',
    context: `${__dirname}/src`,
    
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
    rules: [
      { test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.json?$/, use: ['json-loader'], exclude: /node_modules/ },
      { test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  }, 
    output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/assets'
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 4200
  }
}