import * as tf from './forward_mode_tfjs.js';

const res = tf.max([1, 2, 3, 4]);
console.log('Max result', res.dataSync());