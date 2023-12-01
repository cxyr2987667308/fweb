import React from 'react'
import * as ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd'
import packageJson from './../package.json';
import App from './App.js';
import 'antd/dist/reset.css';
import './index.css';

const prefixCls = packageJson.antdConfig.prefixCls;

const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <React.StrictMode>
    <ConfigProvider prefixCls={prefixCls}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
