import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { buildPlugins } from './config/build/buildPlugins';

const config: webpack.Configuration = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'index.ts'),

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },

  plugins: buildPlugins(),
};

export default config;
