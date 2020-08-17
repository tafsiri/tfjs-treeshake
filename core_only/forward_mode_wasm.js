import * as tf from './custom_tfjs_wasm.js';

const res = tf.max([1, 2, 3, 4]);
console.log('Max result', res.dataSync());