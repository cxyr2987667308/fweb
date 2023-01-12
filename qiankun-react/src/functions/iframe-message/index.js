/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2023-01-12 16:07:42
 */
import React, { useState, useEffect } from 'react';
import './index.less';

const prefixCls = 'fl-iframe-message';
export default function IframeMessage(props) {
	const [infoText, setInfoText] = useState('');

	return (
		<div className={prefixCls}>
			<pre>
				{}
			</pre>
		</div>
	);
}
