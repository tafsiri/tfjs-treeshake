import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

const outFile = 'dist/training/training_rollup_bundle.js';

export default {
  input: 'training.js',
  output: {
    file: outFile,
    format: 'umd',
    sourcemap: true,
  },
  plugins:
      [
        visualizer({sourcemap: true, filename: `${outFile}.html`}),
        resolve({dedupe: ['seedrandom']}),
        commonjs({
          include: 'node_modules/**',
        }),
        terser({
          output: {
            comments: false,
          }
        }),
      ]
}