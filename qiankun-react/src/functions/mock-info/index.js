/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2023-02-06 11:50:56
 */
import React, { useState, useEffect } from 'react';
import MYPromise from './../../utils/mypromise';
import ReactMarkdown from 'react-markdown';
import markdown from './doc.md';
import './index.less';

const prefixCls = 'fl-mock-info';

export default function MockInfo(props) {
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
