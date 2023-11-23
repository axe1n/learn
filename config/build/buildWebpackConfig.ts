import path from 'path';
import { BuildOptions } from '../types/types';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildPlugins } from './buildPlugins';

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  const { entry, build: path, html } = paths;

  return {
    mode,
    entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    devtool: 'inline-source-map',
    output: {
      path,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    plugins: buildPlugins(html),
  };
}
