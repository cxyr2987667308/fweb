/*
 * @Author: lj.fang
 * @Date: 2021-07-02 11:54:10
 * @Last Modified by: lj.fang
 * @Last Modified time: 2023-10-31 17:23:25
 */
import React, { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from './components/Header';
import Body from './components/Body';
import { getCellWidth } from './utils';
import './index.less';

const prefixCls = 'component-table-list';

export default function TableList(props) {
	const boxRef = useRef(null);
	const headerRef = useRef(null);
	const bodyRef = useRef(null);
	const { columns, dataSource, style, className = '', minCellWidth = 120 } = props;
	const [boxWidth, setBoxWidth] = useState(0);
	const [cellWidth, setCellWidth] = useState(0);
	const [bodyWidth, setBodyWidth] = useState(0);

	useEffect(() => {
		const ro = new ResizeObserver((entries, observer) => {
			for (const entry of entries) {
				const { height, width } = entry.contentRect;
				const cellW = getCellWidth(width, minCellWidth, columns?.length);
				setBoxWidth(width);
				setCellWidth(cellW);
				setBodyWidth(cellW * columns?.length);
			}
		});
		ro.observe(boxRef.current);
		return () => {
			boxRef.current && ro.unobserve(boxRef.current);
		};
	}, []);

	console.log('headerRef---', headerRef);
	console.log('bodyRef---', bodyRef);

	return (
		<div className={classnames(prefixCls, className)} style={style} ref={boxRef}>
			{cellWidth > 0 && (
				<>
					<Header curRef={headerRef}
						boxWidth={boxWidth}
						cellWidth={cellWidth}
						columns={columns}
						onScroll={() => {
							bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
						}}
					/>

					<Body curRef={bodyRef}
						width={bodyWidth}
						columns={columns}
						dataSource={dataSource}
						onScroll={() => {
							headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
						}}
					/>
				</>
			)}
		</div>
	);
}

TableList.propTypes = {
	// 头部字段列表
	columns: PropTypes.array,
	// 列表数据
	dataSource: PropTypes.array,
	// 样式
	style: PropTypes.object,
	// 样式类名
	className: PropTypes.string,
};
