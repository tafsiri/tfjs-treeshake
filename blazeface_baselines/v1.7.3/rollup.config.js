import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import gzipPlugin from 'rollup-plugin-gzip'
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import * as path from 'path';


const sourcemap = true;

function getPlugins(options) {
  const plugins = [
    resolve({
      dedupe: ['seedrandom'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    terser({
      output: {
        comments: false,
      }
    }),
    gzipPlugin(),
    visualizer({
      sourcemap,
      filename: options.visPath
    })
  ];

  return plugins;
}

export default [
  {
    input: 'blazeface_demo.js',
    output: {
      file: 'dist/demo.js',
      sourcemap,
      format: 'umd',
    },
    plugins: [
      ...getPlugins({
        visPath: `dist/blazeface_demo.js.html`
      }),
    ],
  },
]