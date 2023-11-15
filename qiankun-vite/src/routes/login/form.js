import React, { PureComponent, Component } from 'react';
import { fetchApi } from 'utils';
import { withRouter } from 'react-router-dom';
import { Form } from '@ant-design/compatible';
import { Button, Row, Input, Spin } from 'antd';
import sha256 from 'sha256';
const FormItem = Form.Item;

// 登录表单
class LoginForm extends (PureComponent || Component) {
	state = { loading: false, namespaceId: null }

	render () {
		const prefixCls = 'loginform';
		const { form, loading, loginLogoUrl } = this.props;
		return (
			<div className={`${prefixCls}`}>
				<Spin spinning={loading} >
					<div className={`${prefixCls}-logo`}>
						{/* eslint-disable */}
						<img alt="" ref={img => (this.logo = img)} src={loginLogoUrl} />
						{/* eslint-enable */}
					</div>
					<Form>
						<FormItem hasFeedback>
							{form.getFieldDecorator('username', {
								rules: [{ required: true, message: '请输入正确的用户名' }]
							})(<Input size="default" onPressEnter={this.handleOk} placeholder="用户名" />)}
						</FormItem>

						<FormItem hasFeedback>
							{form.getFieldDecorator('namespaceId', {
								rules: [{ required: true, message: '请输入域空间' }]
							})(<Input size="default" onPressEnter={this.handleOk} placeholder="域空间" />)}
						</FormItem>

						<FormItem hasFeedback>
							{form.getFieldDecorator('password', {
								rules: [{ required: true, message: '请输入密码' }
								]
							})(<Input size="default" type="password" onPressEnter={this.handleOk} placeholder="密码" />)}
						</FormItem>

						<Row>
							<Button type="primary" size="default" onClick={this.handleOk} loading={this.state.loading}>登录</Button>
						</Row>
					</Form>
				</Spin>
			</div>
		);
	}

	handleOk = () => {
		const { validateFieldsAndScroll } = this.props.form;
		validateFieldsAndScroll((errors, values) => {
			const { password, username, namespaceId } = values;
			if (errors) {
				return;
			}
			this.setState({ loading: true });
			this.login(username, password, namespaceId, this.handleError);
		});
	}

	handleError = (username, password, errorDescription, errorCode) => {
		if (errorCode === 30000) {
			this.props.form.setFields({
				username: {
					value: username,
					errors: [new Error(errorDescription)]
				}
			});
		}
		if (errorCode === 30002) {
			this.props.form.setFields({
				password: {
					value: password,
					errors: [new Error(errorDescription)]
				}
			});
		}
		this.setState({ loading: false });
	}

	getSha256 = (content) => {
		// const crypto = require('crypto');
		// var sha256 = crypto.createHash('sha256');
		// sha256.update(content + '');
		return sha256(content);
	}

	login = (username, password, namespaceId = '0', handleError) => {
		const { route } = this.props;
		// 登录
		fetchApi({
			prefix: 'evh',
			api: '/user/logon',
			ignoreMerchantId: true,
			data: {
				namespaceId: namespaceId,
				userIdentifier: username,
				password: this.getSha256(password),
				regionCode: 86,
				logonSceneType: 'op'
			},
			success: (response) => {
				this.props.history.replace(route);
			},
			error: ({ errorDescription, errorCode }) => {
				handleError(username, password, errorDescription, errorCode);
			}
		});
	}
}

export default withRouter(Form.create()(LoginForm));
