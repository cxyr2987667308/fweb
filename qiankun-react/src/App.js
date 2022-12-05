/*
 * @Author: liF
 * @Date: 2022-09-19 15:04:17
 * @LastEditors: liF
 * @LastEditTime: 2022-12-05 18:42:15
 */
import React, { useEffect } from 'react';
import { Button } from 'antd';
import ListTree from './functions/listTree';
import './App.less';

const App = () => {

  return (
    <div className="app">
      <Button type="primary">Button33333</Button>
      <ListTree />
    </div>
  );
};

export default App;
