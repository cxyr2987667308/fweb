import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import packageJson from './package.json'

const resolve = dir => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      utils: resolve('src/utils'),
      components: resolve('src/components'),
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'ant-prefix': packageJson.antdConfig.prefixCls
        },
        // 支持内联 Javascript
        javascriptEnabled: true,
      },
      module: true
    }
  },
})
