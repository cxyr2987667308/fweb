import React, { useState, useEffect } from 'react';
import './index.less';

const prefixCls = 'component-btn-confetti';
export default function BtnConfetti(props) {
	const { style } = props;

	return (
		<>
			<svg width="0" height="0">
				<filter id="filter">
					<feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="6" />
					<feDisplacementMap in="SourceGraphic" scale="100" />
				</filter>
			</svg>

			<div className={prefixCls + '-btn'}>
				<span>hover</span><div className="back"></div>
			</div>
		</>
	);
}
