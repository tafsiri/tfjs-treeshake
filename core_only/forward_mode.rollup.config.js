import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import gzipPlugin from 'rollup-plugin-gzip'
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';


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
    input: 'forward_mode_wasm.js',
    output: {
      file: 'dist/forward_mode/rollup/forward_mode_wasm.js',
      sourcemap,
      format: 'umd',
    },
    plugins: [
      ...plugins,
      visualizer({
        sourcemap,
        filename: `dist/forward_mode/rollup/forward_mode_wasm.js.html`
      }),
    ],
  },
  {
    input: 'forward_mode_webgl.js',
    output: {
      file: 'dist/forward_mode/rollup/forward_mode_webgl.js',
      sourcemap,
      format: 'umd',
    },
    plugins: [
      ...plugins,
      visualizer({
        sourcemap,
        filename: `dist/forward_mode/rollup/forward_mode_webgl.js.html`
      }),
    ],
  },
]