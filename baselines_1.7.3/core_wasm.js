import '@tensorflow/tfjs-backend-wasm';
import * as tf from '@tensorflow/tfjs-core';

const res = tf.max([1, 2, 3, 4]);
console.log(res.dataSync());