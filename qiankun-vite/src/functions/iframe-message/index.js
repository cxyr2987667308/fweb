import React, { useState, useEffect } from 'react';
import DocMarkdown from './doc.md';
import './index.less';

const prefixCls = 'fl-iframe-message';
export default function IframeMessage(props) {
	return (
		<div className={prefixCls}>
			<DocMarkdown />
		</div>
	);
}
