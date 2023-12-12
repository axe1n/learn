import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

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

    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),

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
