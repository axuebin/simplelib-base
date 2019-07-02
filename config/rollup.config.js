import commonjs from 'rollup-plugin-commonjs';
import path from 'path';
import nodeResolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import buble from 'rollup-plugin-buble';
import { uglify } from 'rollup-plugin-uglify';

const isProd = process.env.NODE_ENV === 'production';

const resolve = function(filePath) {
  return path.join(__dirname, '..', filePath)
}

// 通用的插件
const basePlugins = [
  nodeResolve({
    mainFields: ['jsnext', 'module', 'main']
  }),
  commonjs({
    include: 'node_modules/**',
  }),
  typescript({
    exclude: 'node_modules/**',
    typescript: require('typescript'),
  }),
  buble()
];
// 开发环境需要使用的插件
const devPlugins = [];
// 生产环境需要使用的插件
const prodPlugins = [uglify()];
const plugins = [...basePlugins].concat(isProd ? prodPlugins : devPlugins);

export default {
  input: resolve('index.ts'),
  output: [{
    file: resolve('dist/index.umd.js'),
    format: 'umd',
    name: 'simpleLib'
  }],
  plugins
};