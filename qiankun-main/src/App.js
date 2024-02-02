/*
 * @Author: liF
 * @Date: 2022-09-19 15:04:17
 * @LastEditors: liF
 * @LastEditTime: 2022-12-02 18:15:33
 */
import React, { useEffect } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { registerMicroApps, start, initGlobalState, addGlobalUncaughtErrorHandler } from 'qiankun';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import './App.less';

const App = () => {
  const apps = [{
    // 微应用名称，在微应用的打包配置文件种library的名称，微应用之间必须确保唯一
    name: 'react',
    // 微应用地址，子应用必须支持跨域 fetch
    entry: '//localhost:8081/#/',
    // 微应用挂载的容器节点
    container: '#appContainer',
    // 微应用的激活规则，访问到react的时候跳转子应用
    activeRule: '#/react',
    // 主应用需要传递给微应用的数据
    props: { token: 'gaiery-token-xxx' }
  }, {
    // 微应用名称，在微应用的打包配置文件种library的名称，微应用之间必须确保唯一
    name: 'react-vite',
    // 微应用地址，子应用必须支持跨域 fetch
    entry: '//localhost:8082/#/',
    // 微应用挂载的容器节点
    container: '#appContainer',
    // 微应用的激活规则，访问到react的时候跳转子应用
    activeRule: '#/react-vite',
    // 主应用需要传递给微应用的数据
    props: { token: 'gaiery-token-xxx' }
  }]

  useEffect(() => {
    // 注册app
    registerMicroApps(apps, {
      // 微应用加载前的生命周期钩子，Promise
      beforeLoad: [
        app => {
          console.log(app);
          console.log('beforeLoad111');

        }
      ],
      // 微应用装载前的生命周期钩子，Promise
      beforeMount: [
        app => {
          console.log('beforeMount111');
        }
      ],
      // 微应用装载后的生命周期钩子，Promise
      afterMount: [
        app => {
          console.log('afterMount111');
        }
      ],
      // 微应用卸载前的生命周期钩子，Promise
      beforeUnmount: [
        app => {
          console.log('beforeUnmount11');
        }
      ],
      // 微应用卸载后的生命周期钩子，Promise
      afterUnmount: [
        app => {
          console.log('afterUnmount11');
        }
      ]
    });

    addGlobalUncaughtErrorHandler(err => {
      const { message } = err
      console.error('err ----', err);
      console.error('message ----', message);

      // 加载失败时提示
      if (message && message.includes('died in status LOADING_SOURCE_CODE')) {
        console.error('微应用加载失败，请检查应用是否可运行')
      }
    });

    // 开启
    start();
  }, [])

  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <div>
          <div className='app-menu'>
            <Link to='/react'>react</Link>
            <Link to='/react-vite'>react-vite</Link>
          </div>
          <div id="appContainer"></div>
        </div>
      </Router>
    </ConfigProvider>
  );
};

export default App;
