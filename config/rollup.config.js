import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import { uglify } from 'rollup-plugin-uglify';

const isProd = process.env.NODE_ENV === 'production';

// 通用的插件
const basePlugins = [
  babel({
    exclude: 'node_modules/**',
  }),
  eslint({
    throwOnError: true,
    throwOnWarning: true,
    include: ['src/**'],
    exclude: ['node_modules/**']
  })
];
// 开发环境需要使用的插件
const devPlugins = [];
// 生产环境需要使用的插件
const prodPlugins = [uglify()];

const plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins);
const destFilePath = isProd ? './dist/dist.min.js' : './dist/dist.js';

export default {
  entry: 'index.js',
  format: 'cjs',
  dest: destFilePath,
  sourceMap: isProd,
  plugins,
};