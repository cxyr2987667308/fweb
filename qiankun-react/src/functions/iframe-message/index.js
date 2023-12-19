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
			<ReactMarkdown children={mdContent} />
		</div>
	);
}
