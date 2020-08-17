Repo to assess bundle size impact of tfjs and test tree shaking

|File   |Size (minified)   |Size (min +gzip) |Desc   |
|---|---|---|---|
|[baselines/dist/union_package.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines/dist/union_package.js.html)|745KB   |182K  |Single op built against union + wasm   |
|[baselines/dist/core_wasm.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines/dist/core_wasm.js.html)|279KB   |71K  |Single op built against core + wasm   |
|[baselines/dist/core_webgl.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/baselines/dist/core_webgl.js.html)|448KB   |110K  |Single op built against core + webgl   |
|[core_only/dist/forward_mode_rollup/forward_mode_wasm.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/core_only/dist/forward_mode/forward_mode_wasm.js.html)|104KB   |32K  |Single op call. { "kernels": ["Max"], "backends":  ["wasm"], "forwardModeOnly": true}   |
|[core_only/dist/forward_mode_rollup/forward_mode_webgl.js](https://ghcdn.rawgit.org/tafsiri/tfjs-treeshake/master/core_only/dist/forward_mode/forward_mode_webgl.js.html)|281KB   |68K  |Single op call. { "kernels": ["Max"], "backends":  ["webgl"], "forwardModeOnly": true}   |
|   |   |   |
