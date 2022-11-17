import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import path from 'path';

export default [
  {
    input: './src/index.js',
    external: [
      'react',
      'react-dom',
      'prop-types',
      'styled-components',
      'react-uuid',
      'react/jsx-runtime',
    ],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
      },
    ],
    plugins: [
      babel({
        presets: [
          [
            '@babel/preset-react',
            {
              runtime: 'automatic',
            },
          ],
        ],
        exclude: 'node_modules/**',
      }),
      alias({
        entries: [
          {
            find: '@animation',
            replacement: path.resolve(__dirname, 'src/animation'),
          },
          {
            find: '@helpers',
            replacement: path.resolve(__dirname, 'src/helpers'),
          },
          {
            find: '@containers',
            replacement: path.resolve(__dirname, 'src/containers'),
          },
          {
            find: '@constants',
            replacement: path.resolve(__dirname, 'src/constants'),
          },
          {
            find: '@components',
            replacement: path.resolve(__dirname, 'src/components'),
          },
          {
            find: '@utils',
            replacement: path.resolve(__dirname, 'src/utils'),
          },
          {
            find: '@hooks',
            replacement: path.resolve(__dirname, 'src/hooks'),
          },
        ],
      }),
      resolve(),
      external(),
    ],
  },
];
