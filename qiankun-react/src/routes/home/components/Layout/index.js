/*
 * 用于详情页的字段展示
 *
 * @Author: fan.li@zuolin.com
 * @Date: 2019-08-27 16:49:03
 * @Last Modified by: lj.fang
 * @Last Modified time: 2023-11-13 10:52:56
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { APILoader, Weather } from '@uiw/react-amap';
import axios from 'axios';
import './index.less';

const prefixCls = 'app-layout';

// class Layout extends React.Component {
export default function Layout(props) {
	const { children, style, className } = props;
	const wrapCls = classnames(prefixCls, className);
	const [data, setData] = useState({});
	const city = '深圳市';
	const type = 'forecast';
	const { forecasts } = data || {};
	const dateStr = { 0: '今', 1: '明' };

	return (
		<div className={wrapCls} style={style}>
			<div className={`${prefixCls}-header`}>
				<div className="title">组件</div>
				<APILoader akey="a7a90e05a37d3f6bf76d4a9032fc9129">
					<Weather
						city={city}
						type={type}
						onComplete={(data) => {
							console.log('返回数据：', data);
							setData(data);
						}}
					/>
					<div className='weather'>
						{data?.city || ''}
						{forecasts?.map((item, index) => {
							if (index > 1) {
								return null;
							}
							return (
								<dl key={index}>
									<dt>{item?.dayTemp} - {item?.nightTemp}℃</dt>
									<dd>{dateStr[index]} {item?.nightWeather}</dd>
								</dl>
							)
						})}
					</div>
				</APILoader>
			</div>

			<div className={`${prefixCls}-main`}>
				{children}
			</div>
		</div>
	);
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
