/*
 * @Author: liF
 * @Date: 2022-09-19 15:04:17
 * @LastEditors: liF
 * @LastEditTime: 2022-12-02 17:24:43
 */
import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './App.less';

const App = () => {
  const apps = [{
    // 微应用名称，在微应用的打包配置文件种library的名称，微应用之间必须确保唯一
    name: 'react', 
    // 微应用地址，子应用必须支持跨域 fetch
    entry: '//localhost:8081',
    // 微应用挂载的容器节点
    container: '#react',
    // 微应用的激活规则，访问到react的时候跳转子应用
    activeRule: '#/react',
    // 主应用需要传递给微应用的数据
    props: { token: 'gaiery-token-xxx'}
  }]

  useEffect(() => {
    // 注册app
    registerMicroApps(apps);
    // 开启
    start();
  }, [])

  return (
  <ConfigProvider locale={zhCN}>
    <Router>
      <div>
        <div>4444455</div>
        <Switch>
          <Route path="/react" element={<div id="react6"></div>} />
        </Switch>

        <div id="react"></div>
      </div>
    </Router>
  </ConfigProvider>
  );
};

export default App;
