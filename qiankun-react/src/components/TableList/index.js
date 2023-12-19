import React, { useEffect, useRef, useState, useMemo } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from './components/Header';
import Body from './components/Body';
import { getColumnsForFixed } from './utils';
import './index.less';

const prefixCls = 'component-table-list';

export default function TableList(props) {
	const boxRef = useRef(null);
	const headerRef = useRef(null);
	const bodyRef = useRef(null);
	const { columns, dataSource, style, className = '', minCellWidth = 120 } = props;
	const [fixedColumns, setFixedColumns] = useState([]);

	useEffect(() => {
		const ro = new ResizeObserver((entries, observer) => {
			for (const entry of entries) {
				const { height, width } = entry.contentRect;
				const columnsClone = getColumnsForFixed(width, minCellWidth, columns)
				setFixedColumns(columnsClone);
			}
		});
		ro.observe(boxRef.current);
		return () => {
			boxRef.current && ro.unobserve(boxRef.current);
		};
	}, []);

	return (
		<div className={classnames(prefixCls, className)} style={style} ref={boxRef}>
			<Header curRef={headerRef}
				columns={fixedColumns}
				onScroll={() => {
					bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
				}}
			/>

			<Body curRef={bodyRef}
				columns={fixedColumns}
				dataSource={dataSource}
				onScroll={() => {
					headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
				}}
			/>
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
