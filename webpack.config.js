const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        loader: 'html-loader',
        test: /\.html$/,
      },
      {
        loader: 'url-loader',
        test: /\.mp4$/,
        options: {
          limit: 1000,
          name: '/Videos/[name].[ext]'
        },
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '/Media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },]
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;