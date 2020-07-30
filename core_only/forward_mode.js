import * as tf from './tiny_tfjs';

const res = tf.max([1, 2, 3, 4]);
console.log('Max result', res.dataSync());