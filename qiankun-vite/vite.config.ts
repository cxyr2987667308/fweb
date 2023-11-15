import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import packageJson from './package.json'

const resolve = dir => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx'],
    }
  })],
  resolve: {
    alias: {
      utils: resolve('src/utils'),
      components: resolve('src/components'),
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js?$/,
    exclude: []
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
})
