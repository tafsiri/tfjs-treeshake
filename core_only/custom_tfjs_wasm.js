
import {registerKernel, registerGradient} from '@tensorflow/tfjs-core/dist/base';
import '@tensorflow/tfjs-core/dist/base_side_effects';
export * from '@tensorflow/tfjs-core/dist/base';
  
export * from '@tensorflow/tfjs-converter';

//backend = wasm
export * from '@tensorflow/tfjs-backend-wasm/dist/base';
import {maxConfig as Max_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Max';
registerKernel(Max_wasm);