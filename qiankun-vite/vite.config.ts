import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MarkedPreview from 'vite-plugin-doc-preview';
import path from 'path';
// import packageJson from './package.json';
// import { proxy as targetPath } from './.start.json';

const packageJson = require('./package.json');
const startJson = require('./.start.json');
const targetPath = startJson.proxy;

const resolve = dir => path.resolve(__dirname, dir);
console.log('targetPath', targetPath);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react({
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
    MarkedPreview({ mode: 'react' })
  ],
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    brotliSize: false,
    minify: 'esbuild',
    // chunkSizeWE
  },
  resolve: {
    alias: {
      utils: resolve('src/utils'),
      components: resolve('src/components'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        modifyVars: {
          'ant-prefix': packageJson.antdConfig.prefixCls
        },
        globalVars: {
          '@primary-color': '#07A6F0',
          'font-size-base': '14px',
        },
        // 支持内联 Javascript
        javascriptEnabled: true,
      },
      module: true
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js?$/,
    exclude: []
  },
  server: {
    // host: 'localhost',
    host: true,
    port: 8082,
    open: true,
    strictPort: false,
    https: false,
    // cors: true,
    proxy: {
      '/evh': {
        target: targetPath,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/evh/, '')
      },
      '/api': {
        target: targetPath,
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
