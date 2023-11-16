import React, { useState, useEffect } from 'react';
import DocMarkdown from './doc.md';
import './index.less';

const prefixCls = 'fl-mock-info';

export default function MockInfo(props) {
	return (
		<div className={prefixCls}>
			<DocMarkdown />
		</div>
	);
}
