const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [path.join(__dirname, '/example/index.js')],
    index: [path.join(__dirname, '/src')]
  },
  output: {
    path: path.join(__dirname, './lib'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, './example/index.html'),
      filename: 'index.html'
    })
  ]
}