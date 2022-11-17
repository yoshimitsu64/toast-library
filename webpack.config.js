const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@animation': path.resolve(__dirname, 'src/animation'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
