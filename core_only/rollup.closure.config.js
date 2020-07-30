import compiler from '@ampproject/rollup-plugin-closure-compiler';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: {
    file: 'dist/rollup-bundle.js',
    format: 'umd',
    globals: {crypto: 'crypto'},
  },
  // external: ['crypto', 'stream'],
  plugins:
      [
        resolve({dedupe: ['seedrandom']}), commonjs({
          ignore: ['fs', 'node-fetch', 'string_decoder'],
          include: 'node_modules/**',
        }),
        compiler({
          formatting: 'PRETTY_PRINT',
          compilation_level: 'ADVANCED',
          module_resolution: 'NODE',
          process_common_js_modules: true,
          externs: [
            'externs/seedrandom.ext.js',
            'externs/externs.js',
            'externs/events.js',
            'externs/stream.js',
            'externs/crypto.js',
          ]
        }),
        // terser({output: {comments: false}})
      ],
}