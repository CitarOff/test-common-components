# Test project common components

This repository have one objectif, try to resolve a problem: no tree shaking with vue-cli-service when you build lib in vue2.

In my solution, i use rollup.js

## Command

Run the build for production, all file is in ./lib

```shell
npm run build
```

Run the bundle, this command run the build and packaging of this build

```shell
npm run build-bundle
```

## Use the library

In another project you can use this

```shell
npm i -D ../common-components-{version}.tgz
```
