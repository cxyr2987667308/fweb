import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const packageJson = require('./package.json');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
  }
})
