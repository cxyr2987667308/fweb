import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import { ConfigProvider } from 'antd';
import pkg from './../package.json';
import './App.less';
const Home = lazy(() => import('./routes/home'));
const Login = lazy(() => import('./routes/login'));

const prefixCls = pkg.antdConfig.prefixCls;

function App() {
  return (
    <ConfigProvider prefixCls={prefixCls}>
      <Router basename={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/' + pkg.name : '/'}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </ConfigProvider>
  )
}

export default App
