const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
    vendors: ['react', 'react-dom', 'react-router-dom', "@emotion/react", "@emotion/styled" ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
                modifyVars: {
                  '@primary-color': '#FEC8D8',
                  '@link-color': '#FEC8D8',
                  '@border-radius-base': '2px',
                },
                javascriptEnabled: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
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
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new Dotenv({
      path: './.env',
    }),
    new HtmlWebpackPlugin({
      title: 'Tokemon',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
      favicon: 'src/public/favicon.ico',
      // filename: "index.html",
      // template: path.resolve(__dirname, "dist", "index.html"),
      showErrors: true,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
  },
};

