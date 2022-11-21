/*
 * @Author: liF
 * @Date: 2022-09-19 15:04:17
 * @LastEditors: liF
 * @LastEditTime: 2022-11-21 18:48:14
 */
import React, { useEffect } from 'react';
import { registerMicroApps, start, initGlobalState } from 'qiankun';
import { Button } from 'antd';
import './App.less';

const App = () => {

  return (
    <div className="App">
      <Button type="primary">Button</Button>

      {/* qiankun微应用的容器，不可放入到Switch路由中，会在微应用卸载的时候，由于此元素已经不存在而报错 */}
      <div id="ehContainer" />
    </div>
  );
};

export default App;
