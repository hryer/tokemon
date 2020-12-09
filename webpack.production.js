const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const zlib = require("zlib");

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
  optimization: {
    runtimeChunk: true,
    minimize: true,
    splitChunks: {
      chunks: 'async',
      maxInitialRequests: Infinity,
      minSize: 1000,
      minChunks:1,
      maxAsyncRequests: 4,
      maxInitialRequests: 2,
      name: true,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `pkg.${packageName.replace('@', '')}`;
          },
          chunks: 'all'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
