import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-core/dist/public/chained_ops/to_float';
import '@tensorflow/tfjs-core/dist/public/chained_ops/expand_dims';
import '@tensorflow/tfjs-core/dist/public/chained_ops/resize_bilinear';
import '@tensorflow/tfjs-core/dist/public/chained_ops/squeeze';
import '@tensorflow/tfjs-core/dist/public/chained_ops/reshape';
import '@tensorflow/tfjs-core/dist/public/chained_ops/div';
import * as blazeface from '@tensorflow-models/blazeface';
import {setWasmPath} from '@tensorflow/tfjs-backend-wasm';

setWasmPath('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-wasm@latest/dist/tfjs-backend-wasm.wasm');

let model, ctx, videoWidth, videoHeight, video, canvas;
video = document.getElementById('input_image');

async function main(profileMode) {
  // Load the model.
  const model = await blazeface.load();

  // Pass in an image or video to the model. The model returns an array of
  // bounding boxes, probabilities, and landmarks, one for each detected face.

  const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
  if(profileMode) {
    
  }
  const predictions = await model.estimateFaces(document.querySelector("img"), returnTensors);

  if (predictions.length > 0) {
    /*
    `predictions` is an array of objects describing each detected face, for example:

    [
      {
        topLeft: [232.28, 145.26],
        bottomRight: [449.75, 308.36],
        probability: [0.998],
        landmarks: [
          [295.13, 177.64], // right eye
          [382.32, 175.56], // left eye
          [341.18, 205.03], // nose
          [345.12, 250.61], // mouth
          [252.76, 211.37], // right ear
          [431.20, 204.93] // left ear
        ]
      }
    ]
    */

    for (let i = 0; i < predictions.length; i++) {
      const start = predictions[i].topLeft;
      const end = predictions[i].bottomRight;
      const size = [end[0] - start[0], end[1] - start[1]];

      // Render a rectangle over each detected face.
      ctx.fillRect(start[0], start[1], size[0], size[1]);
    }
  }
}

const setupPage = async () => {
  await tf.setBackend('wasm');
  videoWidth = video.width;
  videoHeight = video.height;
  

  canvas = document.getElementById('output');
  canvas.width = videoWidth;
  canvas.height = videoHeight;
  ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgba(255, 0, 0, 0.5)";

  model = await blazeface.load();
};


if(window.PROFILE_MODE) {
  console.log('profile mode')
  tf.enableDebugMode();
  tf.profile(async () => {
    await setupPage();
    await main();
  }).then((profile) => {
    const kernelNames = profile.kernels.map(k => k.name)
    const kernelNameList = Array.from(new Set(kernelNames));
    console.log(kernelNameList);
  });
  
} else {
  console.log('go')
  setupPage();
  main();
}
