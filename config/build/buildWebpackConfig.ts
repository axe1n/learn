import { BuildOptions } from '../types/types';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, port, isDev } = options;
  const { entry, build: path, html } = paths;

  return {
    mode,
    entry,
    output: {
      path,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(html),
    devtool: isDev ? 'inline-source-map' : false,
    devServer: isDev ? buildDevServer(port) : undefined,
  };
}
