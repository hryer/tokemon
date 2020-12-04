const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "/dist/"),
    hot: true,
    port: process.env.PORT || 3000,
    compress: true,
    historyApiFallback: true,
  },
});
console.log('skuakksss')
console.log(path.resolve(__dirname, 'dist'))
console.log('skuakksss')

// console.log(merge(common, {
//   mode: 'development',
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: path.join(__dirname, "/dist/"),
//     hot: true,
//     port: process.env.PORT || 3000,
//     compress: true,
//     historyApiFallback: true,
//   },
// }))