import React, { useState, useEffect } from 'react';
import './index.less';

export default function TestUnity(props) {

	return (
		<div style={{ height: '100%', padding: 24, overflowY: 'auto' }} id="pic">
			<iframe
				frameBorder="no" border="0"
				width='100%' height='100%'
				src='/test3d/index.html'
			/>
		</div>
	);
}
