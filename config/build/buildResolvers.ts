import { BuildOptions } from 'config/types/types';
import webpack from 'webpack';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  const src = options.paths.src;

  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    alias: { '@': src },
    mainFiles: ['index'],
  };
}
