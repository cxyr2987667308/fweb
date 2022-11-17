/*
 * @Author: liF
 * @Date: 2022-09-19 15:04:17
 * @LastEditors: liF
 * @LastEditTime: 2022-11-17 20:23:47
 */
import React, { useEffect } from 'react';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
import { Button } from 'antd';
import './App.less';

const App = () => {
  const apps = [{
    // 微应用名称，在微应用的打包配置文件种library的名称，微应用之间必须确保唯一
    name: 'vueApp', 
    // 微应用地址，子应用必须支持跨域 fetch
    entry: 'http://localhost:8081',
    // 微应用挂载的容器节点
    container: '#react',
    // 微应用的激活规则，访问到vue的时候跳转子应用
    activeRule: '/react',
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
    <div className="App">
      <Button type="primary">Button</Button>

      {/* qiankun微应用的容器，不可放入到Switch路由中，会在微应用卸载的时候，由于此元素已经不存在而报错 */}
      <div id="ehContainer" />
    </div>
  );
};

export default App;
