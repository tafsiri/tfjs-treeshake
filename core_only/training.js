// Commented out after profiling
// import '@tensorflow/tfjs-backend-cpu';

import '@tensorflow/tfjs-core/dist/public/chained_ops/pow';
import '@tensorflow/tfjs-core/dist/public/chained_ops/add';
import '@tensorflow/tfjs-core/dist/public/chained_ops/mul';
import '@tensorflow/tfjs-core/dist/public/chained_ops/sub';
import '@tensorflow/tfjs-core/dist/public/chained_ops/min';
import '@tensorflow/tfjs-core/dist/public/chained_ops/max';
import '@tensorflow/tfjs-core/dist/public/chained_ops/cast';
import '@tensorflow/tfjs-core/dist/public/chained_ops/square';
import '@tensorflow/tfjs-core/dist/public/chained_ops/div';
import '@tensorflow/tfjs-core/dist/public/chained_ops/mean';

// Commented out after profiling
// import '@tensorflow/tfjs-core/dist/register_all_gradients';

// Temporary. these are used internally
import '@tensorflow/tfjs-core/dist/public/chained_ops/to_float';
import '@tensorflow/tfjs-core/dist/public/chained_ops/reshape';
import '@tensorflow/tfjs-core/dist/public/chained_ops/sum';

// import * as tf from '@tensorflow/tfjs';
import * as tf from './training_custom_tfjs';

function generateData(numPoints, coeff, sigma = 0.04) {
  return tf.tidy(() => {
    const [a, b, c, d] = [
      tf.scalar(coeff.a), tf.scalar(coeff.b), tf.scalar(coeff.c),
      tf.scalar(coeff.d)
    ];

    const xs = tf.randomUniform([numPoints], -1, 1);

    // Generate polynomial data
    const three = tf.scalar(3, 'int32');
    const ys = a.mul(xs.pow(three))
                   .add(b.mul(xs.square()))
                   .add(c.mul(xs))
                   .add(d)
                   // Add random noise to the generated data
                   // to make the problem a bit more interesting
                   .add(tf.randomNormal([numPoints], 0, sigma));

    // Normalize the y values to the range 0 to 1.
    const ymin = ys.min();
    const ymax = ys.max();
    const yrange = ymax.sub(ymin);
    const ysNormalized = ys.sub(ymin).div(yrange);

    return {xs, ys: ysNormalized};
  })
}

/**
 * We want to learn the coefficients that give correct solutions to the
 * following cubic equation:
 *      y = a * x^3 + b * x^2 + c * x + d
 */
const a = tf.variable(tf.scalar(Math.random()));
const b = tf.variable(tf.scalar(Math.random()));
const c = tf.variable(tf.scalar(Math.random()));
const d = tf.variable(tf.scalar(Math.random()));

const numIterations = 75;
const learningRate = 0.5;
const optimizer = tf.train.sgd(learningRate);

function predict(x) {
  // y = a * x ^ 3 + b * x ^ 2 + c * x + d
  return tf.tidy(() => {
    return a.mul(x.pow(tf.scalar(3, 'int32')))
        .add(b.mul(x.square()))
        .add(c.mul(x))
        .add(d);
  });
}

function loss(prediction, labels) {
  const error = prediction.sub(labels).square().mean();
  return error;
}

async function train(xs, ys, numIterations) {
  for (let iter = 0; iter < numIterations; iter++) {
    optimizer.minimize(() => {
      const pred = predict(xs);
      return loss(pred, ys);
    });

    await tf.nextFrame();
  }
}

async function learnCoefficients() {
  const trueCoefficients = {a: -.8, b: -.2, c: .9, d: .5};
  const trainingData = generateData(100, trueCoefficients);

  const predictionsBefore = predict(trainingData.xs);

  console.log('Predictions before', predictionsBefore.dataSync());
  // Train the model!
  await train(trainingData.xs, trainingData.ys, numIterations);
  const predictionsAfter = predict(trainingData.xs);

  console.log('Predictions after', predictionsAfter.dataSync());

  predictionsBefore.dispose();
  predictionsAfter.dispose();
}



tf.profile(async () => {
    await learnCoefficients();
  }).then((profile) => {
  const kernels = new Set(profile.kernels.map(p => p.name));
  console.log(Array.from(kernels));
  // console.log(profile);

  // TODO investigate how to filter 'mean' (a custom op) from this list
  // 'kernels': [
  //   'Cast', 'Pow', 'Multiply', 'Square', 'Add', 'Min', 'Max', 'Sub', 'Div',
  //   'Sum', 'mean', 'Reshape'
  // ],
});