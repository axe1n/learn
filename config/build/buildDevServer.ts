import { BuildOptions } from '../types/types';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const { port } = options;

  return {
    port,
    historyApiFallback: true,
  };
}
