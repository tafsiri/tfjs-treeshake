This repository tracks the effecitveness of the tree-shaking changes in github.com/tensorflow/tfjs. 

The baseline_1.7.3 folder represents programs built against tfjs 1.7.3 (pre modularization).
The baseline folder represents programs built against tfjs 2.1.0.

Rows below that represent bundles built using the custom build tools and particular js bundlers like rollup.

## tfjs programs (no serialized models)

|File   |Size (minified)   |Size (min +gzip) |Desc   |
|---|---|---|---|
|[baselines_1.7.3/dist/union_package.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines_1.7.3/dist/union_package.js.html)|933KB   |217K  |Single op built against union + wasm (2.1.0)   |
|[baselines/dist/union_package.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines/dist/union_package.js.html)|745KB   |182K  |Single op built against union + wasm (2.1.0)   |
|[baselines/dist/core_wasm.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines/dist/core_wasm.js.html)|279KB   |71K  |Single op built against core + wasm (2.1.0)  |
|[baselines/dist/core_webgl.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines/dist/core_webgl.js.html)|448KB   |110K  |Single op built against core + webgl  (2.1.0) |
|[baselines/dist/core_webgl_converter.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines/dist/core_webgl_converter.js.html)|568K   |136K  |Single op built against core + converter + webgl  |
|[core_only/dist/forward_mode/rollup/forward_mode_wasm.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/core_only/dist/forward_mode/rollup/forward_mode_wasm.js.html)|104K   |32K  |Single op call. { "kernels": ["Max"], "backends":  ["wasm"], "forwardModeOnly": true}   |
|[core_only/dist/forward_mode/rollup/forward_mode_webgl.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/core_only/dist/forward_mode/rollup/forward_mode_webgl.js.html)|281K  |68K  |Single op call. { "kernels": ["Max"], "backends":  ["webgl"], "forwardModeOnly": true}   |
|   |   |   |


## tfjs-model based 

|File   |Size (minified)   |Size (min +gzip) |Desc   |
|---|---|---|---|
|[blazeface_baselines/v1.7.3/](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/blazeface_baselines/v1.7.3/dist/blazeface_demo.js.html)|809KB   |177K  |Working blazeface demo built against tfjs-core, tfjs-converter, tfjs-backend-wasm @1.7.3  |
|[blazeface_baselines/v2.1.0/](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/blazeface_baselines/v2.1.0/dist/blazeface_demo.js.html)|380KB   |90K  |Working blazeface demo built against tfjs-core, tfjs-converter, tfjs-backend-wasm @2.1.0   |
|[blazeface](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/blazeface/dist/blazeface_demo.js.html)|293KB   |72K  |Working blazeface demo built against custom build. Config file in folder `blazeface_demo.config.json`. |