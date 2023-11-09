import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import packageJson from './../package.json';
import App from './App.tsx'
import './index.css'

const prefixCls = packageJson.antdConfig.prefixCls;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider prefixCls={prefixCls}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
