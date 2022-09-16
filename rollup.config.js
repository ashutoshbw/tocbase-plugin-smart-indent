import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const input = ["src/index.js"];

const terserConfig = {
  ecma: 2022,
  mangle: { toplevel: true },
  compress: {
    module: true,
    toplevel: true,
    unsafe_arrows: true,
    drop_console: true,
    drop_debugger: true,
  },
  output: { quote_style: 1 }
};

export default [
  // UMD
  {
    input,
    watch: {
      include: './src/**',
      clearScreen: false
    },
    output: {
      file: `./dist/cdn.umd.min.js`,
      format: 'umd',
      name: "smartIndent",
      exports: "default",
      plugins: [terser(terserConfig)],
    },
    plugins: [nodeResolve()],
  },
  // CJS and ESM
  {
    input,
    output: [
      {
        file: `./dist/index.js`,
        format: "es",
        exports: "default",
      },
      {
        file: `./dist/index.cjs`,
        format: "cjs",
        exports: "default",
      },
    ],
    plugins: [nodeResolve()],
  }
]
