import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import MarkedPreview from 'vite-plugin-doc-preview';
import qiankun from 'vite-plugin-qiankun';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import pkg from './package.json';
import { proxy as targetPath } from './.start.json';

const resolve = dir => path.resolve(__dirname, dir);
const useDevMode = true;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const __DEV__ = mode === 'development';

  return {
    base: __DEV__ ? './' : '//localhost:8082',
    plugins: [
      // react({
      //   babel: {
      //     plugins: ['@babel/plugin-transform-react-jsx'],
      //   },
      // }),
      MarkedPreview({ mode: 'react' }),
      ...(useDevMode ? [] : [reactRefresh()]),
      qiankun(pkg.name, {
        useDevMode: true
      }),
    ],
    build: {
      target: 'modules',
      outDir: 'dist',
      minify: 'esbuild',
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
            'ant-prefix': pkg.antdConfig.prefixCls
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
      origin: '//localhost:8082',
      port: 8082,
      open: true,
      strictPort: false,
      https: false,
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
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
  }
})
