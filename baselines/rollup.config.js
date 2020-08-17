import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import gzipPlugin from 'rollup-plugin-gzip'
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

const format = 'umd';
const sourcemap = true;
const plugins = [
  resolve({dedupe: ['seedrandom']}),
  commonjs({
    include: 'node_modules/**',
  }),
  terser({
    output: {
      comments: false,
    }
  }),
  gzipPlugin(),
];

export default [
  {
    input: 'union_package.js',
    output: {
      sourcemap,
      file: 'dist/union_package.js',
      format,
    },
    plugins: [
      ...plugins,
      visualizer({sourcemap, filename: `dist/union_package.js.html`}),
    ],
  },
  {
    input: 'core_wasm.js',
    output: {
      sourcemap: true,
      file: 'dist/core_wasm.js',
      format,
    },
    plugins: [

      ...plugins,
      visualizer({sourcemap, filename: `dist/core_wasm.js.html`}),
    ],
  },
  {
    input: 'core_webgl.js',
    output: {
      sourcemap: true,
      file: 'dist/core_webgl.js',
      format,
    },
    plugins: [

      ...plugins,
      visualizer({sourcemap, filename: `dist/core_webgl.js.html`}),
    ],
  },
]