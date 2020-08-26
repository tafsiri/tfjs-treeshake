import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import gzipPlugin from 'rollup-plugin-gzip'
import {terser} from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';
import alias from '@rollup/plugin-alias';
import * as path from 'path';


const sourcemap = true;

function getPlugins(options) {
  const plugins = [
    alias({
      entries: [
        { 
          find: /@tensorflow\/tfjs$/, 
          replacement: path.resolve(__dirname, options.customTfjsPath), 
        },
        // replace top level imports to tfjs-core with custom import. after v3 is out
        // we still need to do this in converter.
        { 
          find: /@tensorflow\/tfjs-core$/, 
          replacement: path.resolve(__dirname, options.customTfjsCorePath), 
        },
        { 
          find: "@tensorflow/tfjs-core/dist/ops/ops_for_converter", 
          replacement: path.resolve(__dirname, options.customOpsPath), 
        },
      ],
    }),
    resolve({
      // browser: true,
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
        customTfjsPath: './blazeface_tfjs/custom_tfjs.js',
        customTfjsCorePath: './blazeface_tfjs/custom_tfjs_core.js',
        customOpsPath: './blazeface_tfjs/custom_ops_for_converter.js',
        visPath: `dist/blazeface_demo.js.html`
      }),
    ],
  },
]