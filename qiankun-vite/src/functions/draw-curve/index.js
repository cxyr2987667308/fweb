import React, { useState, useEffect } from 'react';
import './index.less';

const prefixCls = 'fl-draw-curve';
export default function DrawCurve(props) {

	useEffect(() => {

	}, [])

	return (
		<div className={prefixCls}>
			<canvas id='canvas' width={2000} height={1200} />
		</div>
	);
}
