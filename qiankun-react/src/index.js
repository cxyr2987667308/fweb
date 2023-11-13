import './public-path';
import { createRoot } from 'react-dom/client';
import App from './App';

let root;

if (process.env.REACT_APP_MOCK === 'true') {
  require('./mock');
}

// 将render方法用函数定义，供后续主应用与独立运行调用
function render(props) {
  const { container } = props; console.log('container---', container);
  const dom = container ? container.querySelector('#appRoot') : document.getElementById('appRoot');
  root = createRoot(dom);
  root.render(
    <App />
  )
}

// 判断是否在qiankun环境下，非qiankun环境下独立运行
if (!(window).__POWERED_BY_QIANKUN__) {
  render({});
}

// 各个生命周期
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
export async function bootstrap() {
  console.log('react app bootstraped');
}

// 应用每次进入都会调 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log('mount----');
  render(props);
}

// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
export async function unmount(props) {
  console.log('unmount----');
  root.unmount();
}