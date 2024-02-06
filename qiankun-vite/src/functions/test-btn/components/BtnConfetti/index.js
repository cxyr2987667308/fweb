import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const prefixCls = 'component-btn-confetti';
export default function BtnConfetti(props) {
	const { style = {}, backStyle = {}, btnText, width, height } = props;
	const backWidth = width * (5 / 2);
	const backHeight = height * (20 / 7);

	return (
		<>
			<svg width="0" height="0">
				<filter id="filter">
					<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="6" />
					<feDisplacementMap in="SourceGraphic" scale="100" />
				</filter>
			</svg>

			<div className={prefixCls + '-btn'} style={{ ...style, width, height }}>
				<div className="back" style={{ ...backStyle, width: backWidth, height: backHeight }} />
				<span>{btnText}</span>
			</div>
		</>
	);
}

BtnConfetti.defaultProps = {
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

BtnConfetti.propTypes = {
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
