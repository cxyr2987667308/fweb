import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import BtnConfetti from './components/BtnConfetti';
import './index.less';

export default function TestBtn() {

	return (
		<div>
			<BtnConfetti />
			<BtnConfetti style={{ backgroundColor: 'red' }} backStyle={{ backgroundColor: 'blue' }} />
		</div>
	);
}
