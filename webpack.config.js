const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: `${path.resolve(__dirname, 'src')}/index.js`,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 5432
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Vanilla Land',
      template: `${path.resolve(__dirname)}/index.html`,
      filename: `${path.resolve(__dirname, 'dist')}/index.html`
    })
  ]
};
