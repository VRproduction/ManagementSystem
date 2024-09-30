const path = require('path');

module.exports = {
  entry: {
    default: './static/js/default/index.js',
    index: './static/js/pages/home/index.js',
    // product: './static/js/product.js',
    // checkout: './static/js/checkout.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './static/dist'),
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
  // mode: 'production',  // "development" modundan "production" moduna geçiş yapıldı
  // devtool: false,
  // optimization: {
  //   minimize: true, // Dosyalar küçültülecek (minification)
  // },
};
