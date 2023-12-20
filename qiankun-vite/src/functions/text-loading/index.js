import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import DotLoading from './components/DotLoading';
import './index.less';

export default function TextLoading() {

	return (
		<div>
			<Button>
				提交中<DotLoading />
			</Button>
		</div>
	);
}
