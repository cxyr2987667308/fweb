import React, { lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// import packageJson from './../package.json';
import './App.less';
const packageJson = require('./../package.json');
const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));

const prefixCls = packageJson.antdConfig.prefixCls;

function App() {
  return (
    <ConfigProvider prefixCls={prefixCls}>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react-vite' : '/'}>
        <div>
          <Routes>
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  )
}

export default App
