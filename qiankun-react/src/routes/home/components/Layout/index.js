/*
 * 用于详情页的字段展示
 *
 * @Author: fan.li@zuolin.com
 * @Date: 2019-08-27 16:49:03
 * @Last Modified by: lj.fang@zuolin.com
 * @Last Modified time: 2020-08-25 10:12:17
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.less';

const prefixCls = 'app-layout';

class Layout extends React.Component {
	state = {
		isLoading: false
	}

	render () {
		const { children, style, className } = this.props;
		const wrapCls = classnames(prefixCls, className);

		return (
			<div className={wrapCls} style={style}>
				<div className={`${prefixCls}-header`}>
					<div className="title">组件</div>
				</div>

				<div className={`${prefixCls}-main`}>
					{children}
				</div>
			</div>
		);
	}
}

Layout.defaultProps = {
	className: '',
	style: {}
};

Layout.propTypes = {
	// 设置商户信息
	setMerchantInfo: PropTypes.func,
	// 新增商户
	addMerchant: PropTypes.func,
	// 样式
	style: PropTypes.object,
	// classname
	className: PropTypes.string,
	// 子节点
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.element,
		PropTypes.array,
	])
};

export default Layout;
