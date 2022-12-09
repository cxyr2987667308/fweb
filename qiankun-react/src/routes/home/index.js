/*
 * @Author: 方丽娇
 * @Date: 2021-09-23 16:58:04
 * @LastEditTime: 2022-12-09 11:59:04
 * @LastEditors: liF
 * @Description:
 */
/*** examples/src/app.js ***/
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import classnames from 'classnames';
import mockMenu from './mockMenu';
import { convert, getUrlQuery } from './utils';
import { fetchApi } from 'utils';
import Layout from './components/Layout';
import * as exportModules from './../../functions'; // 组件源代码
import './index.less';

class Home extends React.Component {
	constructor (props) {
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

	componentWillMount () {
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

  render () {
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
  									if (dataType === 'schema-home') {
  										this.props.history.replace('/');
  									} else {
  										this.props.history.replace(`/${dataType}`);
  									}
    								}}>{name}</a>
    							</li>
    						);
    					})}
    				</ul>
    			</div>
    			<div className={`${prefixCls}-info ${isDescription ? 'isDescription' : ''}`}>
    				<div className={`${prefixCls}-info-main`}>
    					<Switch>
    						{(routes || []).map(({ key, component: Component, }) => {
    							return (
    								<Route key={key} path={`/${key}`} component={Component} />
    							);
    						})}

  						<Route path='/'>
  							<Switch>
  								{!!datasetId && <Route path='/' component={exportModules[convert('schema-home')]} />}
  								<Route path='/view' component={exportModules[convert('dashboard-view')]} />
  								<Route exact path='/' component={exportModules[convert('dashboard-edit')]} />
  							</Switch>
  						</Route>
    					</Switch>
    				</div>
    			</div>
    		</Layout>
    	);
  }
}

export default Home;
