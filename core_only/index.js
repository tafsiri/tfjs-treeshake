// import '@tensorflow/tfjs-backend-cpu';
// import '@tensorflow/tfjs-backend-webgl';
// import * as tf from '@tensorflow/tfjs-core';


import * as tf from './tiny_tfjs';

const res = tf.max([1, 2, 3, 4]);
console.log('Max result', res.dataSync());

const modelUrl =
    'https://storage.googleapis.com/tfjs-models/savedmodel/mobilenet_v2_1.0_224/model.json';
tf.loadGraphModel(modelUrl).then((model) => {
  const zeros = tf.zeros([1, 224, 224, 3]);
  model.predict(zeros).print();
});
