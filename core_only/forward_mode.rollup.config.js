import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

const outFile = 'dist/forward_mode/forward_mode_rollup_bundle.js';

export default {
  input: 'forward_mode.js',
  output: {
    file: outFile,
    format: 'umd',
  },
  plugins:
      [
        visualizer({sourcemap: false, filename: `${outFile}.html`}),
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