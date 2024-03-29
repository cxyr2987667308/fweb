import React from 'react';
import { Route, Routes } from 'react-router-dom';
import classnames from 'classnames';
import mockMenu from './mockMenu';
import { withRouter } from 'components';
import { convert, getUrlQuery } from './utils';
import { fetchApi } from 'utils';
import Layout from './components/Layout';
import * as exportModules from './../../functions'; // 组件源代码
import './index.less';

class Home extends React.Component {
	constructor(props) {
		super(props);

		const {
			namespaceId = 0,
			organizationId = 1040216,
			moduleId = 282900,
			appId = 882271,
			userId = 470548,
			datasetId,
		} = getUrlQuery(window.location.search);

		this.state = {
			// 域空间Id
			namespaceId,
			// 组织id
			organizationId,
			// 模块id
			moduleId,
			// 应用id
			appId,
			// 用户id
			userId,
			// 数据集id
			datasetId,
			// 是否展开
			isOpen: false
		};
	}

	componentWillMount() {
		window.$$context = getUrlQuery(window.location.search);
	}

	getModules = modules => {
		const routes = [];
		const loop = modules => {
			try {
				return modules.map(({ dataType, dtos = [] }) => {
					if (!dtos.length) {
						return routes.push({
							key: `${dataType}`,
							component: exportModules[`${convert(dataType)}`]
						});
					}
					return loop(dtos);
				});
			} catch (error) {
				console.warn(error);
			}
		};

		loop(modules);

		return routes;
	};

	render() {
		const prefixCls = 'home';
		const { location: { pathname } } = this.props;
		const routes = this.getModules(mockMenu);
		const { isDescription, datasetId, isOpen } = this.state;

		return (
			<Layout>
				<div className={classnames(
					`${prefixCls}-menu`,
					{ isOpen: isOpen }
				)}>
					<ul>
						{(mockMenu || []).map(({ name, dataType }) => {
							return (
								<li key={dataType} className={dataType === pathname.split('/')[1] ? 'isActive' : ''}>
									<a onClick={() => {
										this.setState({ isDescription: false });
										this.props.navigate(`/${dataType}`, { replace: true })
										// this.props.navigate.replace(`/${dataType}`);
									}}>{name}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<div className={`${prefixCls}-info ${isDescription ? 'isDescription' : ''}`}>
					<div className={`${prefixCls}-info-main`}>
						<Routes>
							{(routes || []).map(({ key, component: Component, }) => {
								console.log('key---', key);
								return (
									<Route key={key} path={`${key}`} element={<Component />} />
								);
							})}
						</Routes>
					</div>
				</div>
			</Layout>
		);
	}
}

export default withRouter(Home);
