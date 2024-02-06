import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const prefixCls = 'component-btn-prism';
export default function BtnPrism(props) {
	return (
		<figure className={prefixCls}>
			<div>
				<span>Hover Me</span>
				<span>Button</span>
			</div>
		</figure>
	);
}

BtnPrism.defaultProps = {
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

BtnPrism.propTypes = {
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
