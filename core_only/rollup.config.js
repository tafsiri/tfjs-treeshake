import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';


const outFile = 'dist/rollup-bundle.js';

export default {
  input: 'index.js',
  output: {
    file: outFile,
    format: 'umd',
    globals: {crypto: 'crypto'},
  },
  // treeshake: {
  //   moduleSideEffects:
  //       [
  //         '@tensorflow/tfjs-core/dist/flags',
  //         '@tensorflow/tfjs-backend-cpu/dist/backend-cpu',
  //       ]
  // },
  // external: ['crypto', 'stream'],
  plugins:
      [
        visualizer({sourcemap: false, filename: `${outFile}.html`}),
        resolve({dedupe: ['seedrandom']}), commonjs({
          ignore: ['fs', 'node-fetch', 'string_decoder'],
          include: 'node_modules/**',
        }),
        terser({
          // compress: false,
          // mangle: false,
          output: {
            comments: false,
          }
        })
      ],
}