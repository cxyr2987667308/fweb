import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import BtnConfetti from './components/BtnConfetti';
import BtnPrism from './components/BtnPrism';
import './index.less';

const prefixCls = 'page-test-btn';

export default function TestBtn() {

	return (
		<div className={prefixCls}>
			<BtnConfetti />
			<BtnConfetti style={{ backgroundColor: 'red' }} backStyle={{ backgroundColor: 'blue' }} />
			<BtnPrism />
		</div>
	);
}
