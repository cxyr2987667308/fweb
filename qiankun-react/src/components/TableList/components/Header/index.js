/*
 * @Author: lj.fang
 * @Date: 2021-07-02 11:54:10
 * @Last Modified by: lj.fang
 * @Last Modified time: 2023-10-31 17:39:55
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Thead from '../Thead';
import './index.less';

const prefixCls = 'component-table-list-header';

export default function Header(props) {
	const { columns = [], curRef, cellWidth, onScroll } = props;

	return (
		<div className={prefixCls} ref={curRef} onScroll={onScroll}>
			<table border="0" cellPadding="0" cellSpacing="0"
				style={{ tableLayout: 'fixed' }}
			>
				<colgroup>
					{columns.map((item, i) => {
						return <col key={i} style={{ width: cellWidth }} />
					})}
					<col style={{ width: 32 }} />
				</colgroup>

				<Thead columns={columns} />
			</table>
		</div>
	);
}

Header.propTypes = {
	// 头部字段列表
	columns: PropTypes.array,
	// ref值
	headerRef: PropTypes.element,
};
