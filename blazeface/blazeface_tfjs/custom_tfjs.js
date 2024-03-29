
import {registerKernel, registerGradient} from '@tensorflow/tfjs-core/dist/base';
import '@tensorflow/tfjs-core/dist/base_side_effects';
export * from '@tensorflow/tfjs-core/dist/base';
  
export * from '@tensorflow/tfjs-converter';

//backend = wasm
export * from '@tensorflow/tfjs-backend-wasm/dist/base';
import {castConfig as Cast_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Cast';
registerKernel(Cast_wasm);
import {reshapeConfig as Reshape_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Reshape';
registerKernel(Reshape_wasm);
import {resizeBilinearConfig as ResizeBilinear_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/ResizeBilinear';
registerKernel(ResizeBilinear_wasm);
import {divConfig as Div_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Div';
registerKernel(Div_wasm);
import {subConfig as Sub_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Sub';
registerKernel(Sub_wasm);
import {multiplyConfig as Multiply_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Multiply';
registerKernel(Multiply_wasm);
import {fusedConv2DConfig as FusedConv2D_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/FusedConv2D';
registerKernel(FusedConv2D_wasm);
import {depthwiseConv2DNativeConfig as DepthwiseConv2dNative_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/DepthwiseConv2dNative';
registerKernel(DepthwiseConv2dNative_wasm);
import {addConfig as Add_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Add';
registerKernel(Add_wasm);
import {reluConfig as Relu_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Relu';
registerKernel(Relu_wasm);
import {padV2Config as PadV2_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/PadV2';
registerKernel(PadV2_wasm);
import {maxPoolConfig as MaxPool_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/MaxPool';
registerKernel(MaxPool_wasm);
import {sliceConfig as Slice_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Slice';
registerKernel(Slice_wasm);
// import {stridedSliceConfig as StridedSlice_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/StridedSlice';
// registerKernel(StridedSlice_wasm);
import {concatConfig as Concat_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Concat';
registerKernel(Concat_wasm);
import {identityConfig as Identity_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Identity';
registerKernel(Identity_wasm);
import {sigmoidConfig as Sigmoid_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/Sigmoid';
registerKernel(Sigmoid_wasm);
import {nonMaxSuppressionV3Config as NonMaxSuppressionV3_wasm} from '@tensorflow/tfjs-backend-wasm/dist/kernels/NonMaxSuppressionV3';
registerKernel(NonMaxSuppressionV3_wasm);