/*
 * @Author: 方丽娇
 * @Date: 2021-09-23 16:58:04
 * @LastEditTime: 2022-12-09 12:06:42
 * @LastEditors: liF
 * @Description:
 */
import React, { Component, PureComponent } from 'react';
import Animate from 'rc-animate';
import LoginForm from './form';
import { fetchApi } from 'utils';
import './index.less';

import loginLogoUrl from './images/logo.png';

class Login extends (PureComponent || Component) {
	state = {
		visible: true,
		domains: [],
		title: '左邻',
		namespaceId: null,
		loading: false,
		value: null,
		logoData: {}
	}

	componentWillMount () {
		this.getLogo();
	}

	// 获取logo
	getLogo = () => {
		const bgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523349989114&di=c729364eaca66df2425dab18ebf36ed1&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201507%2F25%2F20150725104340_cjHYf.jpeg';
		fetchApi({
			prefix: 'evh',
			api: '/domain/getDomainInfoByNamespace',
			ignoreMerchantId: true,
			data: { },
			success: (data = {}) => {
				this.setState({
					logoData: {
						loginLogoUrl: data.loginLogoUrl || loginLogoUrl,
						loginBgUrl: data.loginBgUrl || bgUrl
					}
				});
			},
			error: () => {
				this.setState({
					logoData: {
						loginLogoUrl: loginLogoUrl,
						loginBgUrl: bgUrl
					}
				});
			}
		});
	}

	render () {
		const prefixCls = 'login';
		const { logoData, loading } = this.state;
		return (
			<React.Fragment>
				<div className={`${prefixCls}`} style={{ background: `url(${logoData.loginBgUrl})`, backgroundSize: '100% 100%' }}>
					<Animate
						transitionName="fade"
						transitionAppear
					>
						<LoginForm
							loginLogoUrl={logoData.loginLogoUrl}
							loading={loading}
							route={'/dashboard-view'}
						/>
					</Animate>
				</div>
			</React.Fragment>
		);
	}
}
export default Login;
