import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildMode, BuildPaths } from './config/types/types';
import path from 'path';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode: BuildMode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths: {
    entry: paths.entry,
    build: paths.build,
    html: paths.html,
  },
  isDev,
});

export default config;
