import path from 'path';

import webpack from 'webpack';

import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../types/types';

import { storybookBabelLoader, storybookSvgLoader } from './loaders/index';

export default ({ config }: { config: webpack.Configuration }) => {
  const configResolve = config.resolve;
  const rules = config.module.rules;

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '../../src'),
  };

  rules.push(
    buildCssLoader(true),
    storybookBabelLoader,
    storybookSvgLoader(rules)
  );

  configResolve.modules.push(paths.src);

  configResolve.extensions.push('.ts', '.tsx');

  configResolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../../src'),
  };

  config.plugins.push(
    new webpack.DefinePlugin({
      __IS_DEV__: true,
    })
  );

  return config;
};
