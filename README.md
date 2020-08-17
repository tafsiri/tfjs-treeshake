Repo to assess bundle size impact of tfjs and test tree shaking

|File   |Size (minified)   |Size (min +gzip) |Desc   |
|---|---|---|---|
|[baselines/dist/union_package.js](./baselines/dist/union_package.js)|745KB   |182K  |Single op built against union + wasm (2.1.0)   |
|[baselines/dist/core_wasm.js](./baselines/dist/core_wasm.js)|279KB   |71K  |Single op built against core + wasm (2.1.0)  |
|[baselines/dist/core_webgl.js](./baselines/dist/core_webgl.js)|448KB   |110K  |Single op built against core + webgl  (2.1.0) |
|[baselines/dist/core_webgl_converter.js](baselines/dist/core_webgl_converter.js)|568K   |136K  |Single op built against core + converter + webgl  |
|[core_only/dist/forward_mode_rollup/forward_mode_wasm.js](core_only/dist/forward_mode_rollup/forward_mode_wasm.js)|104K   |32K  |Single op call. { "kernels": ["Max"], "backends":  ["wasm"], "forwardModeOnly": true}   |
|[core_only/dist/forward_mode_rollup/forward_mode_webgl.js](core_only/dist/forward_mode_rollup/forward_mode_webgl.js)|281K  |68K  |Single op call. { "kernels": ["Max"], "backends":  ["webgl"], "forwardModeOnly": true}   |
|   |   |   |
