import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

import webpack from 'webpack';
import { BuildOptions } from '../types/types';

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  const { paths, isDev } = options;

  const reactRefreshAndWebpackRefrashPlugin = isDev
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin(),
      ]
    : [];

  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthas:8].css',
      chunkFilename: 'css/[name].[contenthas:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    ...reactRefreshAndWebpackRefrashPlugin,
  ];
}
