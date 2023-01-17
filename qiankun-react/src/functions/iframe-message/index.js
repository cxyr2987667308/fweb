/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2023-01-17 17:06:00
 */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import markdown from './doc.md';
import './index.less';

const prefixCls = 'fl-iframe-message';
export default function IframeMessage(props) {
	const [mdContent, setMdContent] = useState('');
	 
	useEffect(() => {
		fetch(markdown).then(res => res.text()).then(text => setMdContent(text));
	}, [])

	return (
		<div className={prefixCls}>
			<ReactMarkdown children={mdContent}/>
		</div>
	);
}
