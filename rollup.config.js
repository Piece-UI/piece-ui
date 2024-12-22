import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/lib/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'MyLibrary',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',  // Exclude node_modules from transpiling
      presets: ['@babel/preset-env', '@babel/preset-react'],  // Enable React preset for JSX
    }),
  ],
};
