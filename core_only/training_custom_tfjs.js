
import {registerKernel, registerGradient} from '@tensorflow/tfjs-core/dist/base';
export * from '@tensorflow/tfjs-core/dist/base';
  
export * from '@tensorflow/tfjs-converter';

//backend = cpu
export * from '@tensorflow/tfjs-backend-cpu/dist/base';
import {castConfig as Cast_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Cast';
registerKernel(Cast_cpu);
import {powConfig as Pow_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Pow';
registerKernel(Pow_cpu);
import {multiplyConfig as Multiply_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply';
registerKernel(Multiply_cpu);
import {squareConfig as Square_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Square';
registerKernel(Square_cpu);
import {addConfig as Add_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Add';
registerKernel(Add_cpu);
import {minConfig as Min_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Min';
registerKernel(Min_cpu);
import {maxConfig as Max_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Max';
registerKernel(Max_cpu);
import {subConfig as Sub_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Sub';
registerKernel(Sub_cpu);
import {divConfig as Div_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Div';
registerKernel(Div_cpu);
import {sumConfig as Sum_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Sum';
registerKernel(Sum_cpu);
import {reshapeConfig as Reshape_cpu} from '@tensorflow/tfjs-backend-cpu/dist/kernels/Reshape';
registerKernel(Reshape_cpu);

//backend = webgl
export * from '@tensorflow/tfjs-backend-webgl/dist/base';
import {castConfig as Cast_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Cast';
registerKernel(Cast_webgl);
import {powConfig as Pow_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Pow';
registerKernel(Pow_webgl);
import {multiplyConfig as Multiply_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply';
registerKernel(Multiply_webgl);
import {squareConfig as Square_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Square';
registerKernel(Square_webgl);
import {addConfig as Add_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Add';
registerKernel(Add_webgl);
import {minConfig as Min_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Min';
registerKernel(Min_webgl);
import {maxConfig as Max_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Max';
registerKernel(Max_webgl);
import {subConfig as Sub_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Sub';
registerKernel(Sub_webgl);
import {divConfig as Div_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Div';
registerKernel(Div_webgl);
import {sumConfig as Sum_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Sum';
registerKernel(Sum_webgl);
import {reshapeConfig as Reshape_webgl} from '@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape';
registerKernel(Reshape_webgl);

//Gradients
import {castGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Cast_grad';
registerGradient(castGradConfig);
import {powGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Pow_grad';
registerGradient(powGradConfig);
import {multiplyGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Multiply_grad';
registerGradient(multiplyGradConfig);
import {squareGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Square_grad';
registerGradient(squareGradConfig);
import {addGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Add_grad';
registerGradient(addGradConfig);
import {minGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Min_grad';
registerGradient(minGradConfig);
import {maxGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Max_grad';
registerGradient(maxGradConfig);
import {subGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Sub_grad';
registerGradient(subGradConfig);
import {divGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Div_grad';
registerGradient(divGradConfig);
import {sumGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Sum_grad';
registerGradient(sumGradConfig);
import {reshapeGradConfig} from '@tensorflow/tfjs-core/dist/gradients/Reshape_grad';
registerGradient(reshapeGradConfig);