
import {registerKernel, registerGradient} from '@tensorflow/tfjs-core/dist/base';
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