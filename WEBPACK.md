1. npm init -y

2. npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-env style-loader css-loader sass-loader

3. 
create webpack.config.js

const path = require('path');

module.exports = {
  entry: {
    index: './myapp/static/js/index.js',
    product: './myapp/static/js/product.js',
    checkout: './myapp/static/js/checkout.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'myapp/static/dist'),
    publicPath: '/static/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  mode: 'development',  // Geliştirme modunda çalıştırıyoruz
  devtool: 'source-map', // Hata ayıklama için source-map kullanıyoruz
};

4. npx webpack 
or for development: npm run watch
