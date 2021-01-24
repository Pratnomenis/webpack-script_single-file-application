const path = require('path');

// https://github.com/jantimon/html-webpack-plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
// https: //github.com/icelam/html-inline-script-webpack-plugin
const HTMLInlineScriptPlugin = require('html-inline-script-webpack-plugin');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    }),
    new HTMLInlineScriptPlugin()
  ],
};
