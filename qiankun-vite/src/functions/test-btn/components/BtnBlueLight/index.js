import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const prefixCls = 'component-btn-blue-light';
export default function BtnBlueLight(props) {
	return (
		<div className={prefixCls}>
			<div class="bluelight">
				<a href="#">HOVER</a>
			</div>
			<p class="caption">BLUE LIGHT BUTTON</p>
		</div>
	);
}

BtnBlueLight.defaultProps = {
	// btn宽
	width: 300,
	// btn高
	height: 70,
	// btn文字
	btnText: 'Hover',
	// btn样式
	style: {},
	// 过渡效果样式
	backStyle: {}
};

BtnBlueLight.propTypes = {
	// btn宽
	width: PropTypes.number,
	// btn高
	height: PropTypes.number,
	// btn文字
	btnText: PropTypes.string,
	// btn样式
	style: PropTypes.object,
	// 过渡效果样式
	backStyle: PropTypes.object,
};
