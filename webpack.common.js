const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
    vendors: ['react', 'react-dom', 'react-router-dom', 'styled-components'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new Dotenv({
      path: './.env',
    }),
    new HtmlWebpackPlugin({
      title: 'Tokemon',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      // filename: path.resolve(__dirname, "dist", "index.html"),
      // template: path.resolve(__dirname, "dist", "index.html"),
      showErrors: true,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash].bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },
};

