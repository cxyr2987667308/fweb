import React, { useRef, useState, useEffect } from 'react';
import './index.less';

const prefixCls = 'page-test-btn';

export default function TestCanvas() {

	const canvasRef = useRef(null);
	const [points, setPoints] = useState([]);

	const handleMouseDown = (event) => {
		const rect = canvasRef.current.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		setPoints([...points, { x, y }]);
	};

	useEffect(() => {
		const ctx = canvasRef.current.getContext('2d');
		if (points.length > 1) {
			ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
			for (let i = 0; i < points.length - 1; i++) {
				const start = points[i];
				const end = points[i + 1];
				ctx.beginPath();
				ctx.moveTo(start.x, start.y);
				ctx.lineTo(end.x, end.y);
				ctx.stroke();
			}
		}
	}, [points]);

	return (
		<canvas
			ref={canvasRef}
			width="400"
			height="400"
			style={{ border: '1px solid black' }}
			onMouseDown={handleMouseDown}
		/>
	);
}
