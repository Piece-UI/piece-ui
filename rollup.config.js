import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/lib/index.js', // Your library entry point
  output: [
    {
      file: 'dist/index.js', // CommonJS build
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js', // ES module build
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.js', // Browser-compatible build
      format: 'iife',
      name: 'App', // Global variable name for UMD/IIFE
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['react', 'react-dom'], // Prevent bundling React
  plugins: [
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    postcss({
      extract: 'bundle.css', // Extract CSS into a separate file
      minimize: true,
    }),
  ],
};
