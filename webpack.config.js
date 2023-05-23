const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: './src/assets/js/index.js', // app - название и путь к компилируемых файлов
  },
  output: {
    clean: true, // каждый раз очищать папку
    filename: '[name].bundle.js', // название нашего файла, name - app
    path: path.resolve(__dirname, 'dist'), // путь к исходной папке
  },
  mode: 'development',
  devServer: {
    static: './src',
    compress: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i, // регулярное выражение которое проверяет, либо это должно быть css, scss
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'God of War',
      template: 'src/index.html',
    }),
  ],
};
