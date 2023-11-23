import { BuildOptions } from '../types/types';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(port: number): DevServerConfiguration {
  return {
    port,
    open: true,
  };
}
