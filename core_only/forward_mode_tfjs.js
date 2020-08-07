
import {registerKernel, registerGradient} from '@tensorflow/tfjs-core/dist/base';
import '@tensorflow/tfjs-core/dist/base_side_effects';
export * from '@tensorflow/tfjs-core/dist/base';
  
export * from '@tensorflow/tfjs-converter';

//backend = cpu
export * from '@tensorflow/tfjs-backend-cpu/dist/base';
import {maxConfig as Max_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Max';
registerKernel(Max_cpu);

//backend = webgl
export * from '@tensorflow/tfjs-backend-webgl/dist/base';
import {maxConfig as Max_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Max';
registerKernel(Max_webgl);

//backend = wasm
export * from '@tensorflow/tfjs-backend-wasm/dist/base';
import {maxConfig as Max_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Max';
registerKernel(Max_wasm);