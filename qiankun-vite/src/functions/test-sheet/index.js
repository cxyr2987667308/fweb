import React, { useState, useEffect } from 'react';
import './index.less';

const prefixCls = 'fl-test-sheet';
export default function TestUnity(props) {
	useEffect(() => {
		const options = {
			container: 'luckysheet' //luckysheet is the container id
		}
		window.luckysheet.create(options)
		console.log('window.luckysheet', window.luckysheet);
	}, []);


	return (
		<div className={prefixCls}>
			<div id="luckysheet" className={prefixCls + '-sheet'}></div>
		</div>
	);
}
