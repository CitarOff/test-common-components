import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import vue from "rollup-plugin-vue";

import pkg from "./package.json" assert { type: "json" };

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: "src/index.js",
    output: {
      format: "esm",
      file: pkg.module,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      scss({ fileName: "bundle.css" }),
      vue(),
    ],
  },
  // SSR build.
  {
    input: "src/index.js",
    output: {
      format: "cjs",
      file: pkg.main,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      scss({ fileName: "bundle.css" }),
      vue({ template: { optimizeSSR: true } }),
    ],
  },
  // Browser build.
  {
    input: "src/wrapper.js",
    output: {
      format: "iife",
      file: pkg.browser,
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      scss({ fileName: "bundle.css" }),
      vue(),
    ],
  },
];
