const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-next');

const { NODE_ENV = 'production' } = process.env;
module.exports = {
  entry: './server.ts',
  mode: NODE_ENV,
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  externals: [nodeExternals()],
  devServer: {
    hot: true,
    inline: true,
    watchOptions: {
      poll: true,
    },
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: ['npm run run:dev'],
        blocking: false,
        parallel: true,
      },
    }),
  ],
  watch: NODE_ENV === 'development',
};
