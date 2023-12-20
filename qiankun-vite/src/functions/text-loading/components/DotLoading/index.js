import React, { useState, useEffect } from 'react';
import './index.less';

const prefixCls = 'component-dot-loading';
export default function DotLoading() {

	return (
		// <dot className={prefixCls}>...</dot>
		<dot className={prefixCls}>/</dot>
	);
}
