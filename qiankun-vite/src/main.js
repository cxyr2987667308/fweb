import React from 'react';
import ReactDOM from "react-dom";
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import './public-path';
import App from './App';

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
    // root.unmount();
    const { container } = props;
    const mountRoot = container?.querySelector("#root");
    ReactDOM.unmountComponentAtNode(
      mountRoot || document.querySelector("#root")
    );
  },
  update(props) {
    console.log("viteapp update");
    console.log(props)
  },
})
// 将render方法用函数定义，供后续主应用与独立运行调用
function render(props) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
