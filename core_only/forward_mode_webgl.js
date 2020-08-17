import * as tf from './custom_tfjs_webgl.js';

const res = tf.max([1, 2, 3, 4]);
console.log('Max result', res.dataSync());