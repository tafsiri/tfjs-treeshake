
import {registerKernel, registerGradient} from '@tensorflow/tfjs-core/dist/base';
import '@tensorflow/tfjs-core/dist/base_side_effects';
export * from '@tensorflow/tfjs-core/dist/base';
  
export * from '@tensorflow/tfjs-converter';

//backend = webgl
export * from '@tensorflow/tfjs-backend-webgl/dist/base';
import {maxConfig as Max_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Max';
registerKernel(Max_webgl);