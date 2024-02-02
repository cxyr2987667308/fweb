import React from 'react';
import { createRoot } from 'react-dom/client';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import './public-path';
import App from './App';

let root;

// if (process.env.REACT_APP_MOCK === 'true') {
//   require('./mock');
// }

renderWithQiankun({
  mount(props) {
    console.log('mount----', props);
    render(props);
  },
  bootstrap(props) {
    console.log('bootstrap----');
  },
  unmount(props) {
    console.log('unmount----');
    root.unmount();
  }
})
// 将render方法用函数定义，供后续主应用与独立运行调用
function render(props) {
  const { container } = props; console.log('container---', container);
  const dom = container ? container.querySelector('#appViteRoot') : document.getElementById('appViteRoot');
  root = createRoot(dom);
  root.render(
    // <div>微服务</div>
    <App />
  )
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
