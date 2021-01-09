import pkg from './package.json';
import typescript from '@wessberg/rollup-plugin-ts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const common = {
  sourcemap: true,
  banner: `
// ${pkg.name}: ${pkg.version}
// Copyright © 2021 Jason Rowland

`,
};

export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        ...common,
        dir: 'lib',
        format: 'esm',
      },
      {
        ...common,
        file: 'lib/cjs/index.js',
        format: 'cjs',
      },
    ],
    plugins: [typescript({ tsconfig: 'tsconfig.json' })],
  },

  {
    input: ['src/browser.ts'],
    output: [
      {
        ...common,
        file: 'lib/filesystem.js',
        format: 'esm',
      },
      {
        ...common,
        file: 'lib/filesystem.umd.js',
        format: 'umd',
        name: 'FILESYSTEM',
        esModule: false,
      },
      {
        ...common,
        file: 'lib/filesystem.umd.min.js',
        format: 'umd',
        name: 'FILESYSTEM',
        esModule: false,
        plugins: [terser()],
      },
    ],
    plugins: [typescript({ tsconfig: 'tsconfig.json' }), nodeResolve()],
  },
];
