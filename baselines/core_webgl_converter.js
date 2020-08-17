import '@tensorflow/tfjs-backend-webgl';
import * as tfConv from '@tensorflow/tfjs-converter/dist/tf-converter.es2017';
import * as tf from '@tensorflow/tfjs-core';

console.log(tfConv.version_converter)
const res = tf.max([1, 2, 3, 4]);
console.log(res.dataSync());