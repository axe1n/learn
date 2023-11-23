import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

export function buildPlugins(
  htmlPath: string
): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: htmlPath,
    }),
  ];
}
