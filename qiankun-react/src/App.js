/*
 * @Author: 方丽娇
 * @Date: 2021-11-09 09:19:33
 * @LastEditTime: 2022-12-09 12:03:20
 * @LastEditors: liF
 * @Description:
 */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import AntdPresetsConfigProvider from '@components/AntdPresetsConfigProvider';
import { reactLoadable } from 'utils';
import { ConfigProvider } from 'antd';
import 'antd/lib/style';
// import zhCN from 'antd/es/locale/zh_CN';
import './App.less';
import packageJson from './../package.json';
const prefixCls = packageJson.antdConfig.prefixCls;

// import Home from './routes/home';
const Home = reactLoadable(() => import('./routes/home'));
const Login = reactLoadable(() => import('./routes/login'));

const App = () => (
	<ConfigProvider prefixCls>
		<Router>
			<div>
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route path="/home" component={Home} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	</ConfigProvider>
);

export default App;
