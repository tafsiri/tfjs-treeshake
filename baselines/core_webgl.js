import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs-core';

const res = tf.max([1, 2, 3, 4]);
console.log(res.dataSync());