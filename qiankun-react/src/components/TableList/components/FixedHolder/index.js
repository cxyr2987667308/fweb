/*
 * @Author: lj.fang
 * @Date: 2021-07-02 11:54:10
 * @Last Modified by: lj.fang
 * @Last Modified time: 2023-10-31 15:31:47
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Thead from '../Thead';
import './index.less';

const prefixCls = 'component-table-list-fixed-holder';

export default function FixedHolder(props) {
	const { columns = [], curRef } = props;

	return (
		<div className={prefixCls} ref={curRef}
			onScroll={() => {
				bodyRef.current.scrollLeft = curRef.current.scrollLeft;
			}}>
			<table border="0" cellPadding="0" cellSpacing="0"
				style={{ tableLayout: 'fixed' }}
			>
				<colgroup>
					{columns.map((item, i) => {
						return <col key={i} style={{ width: '120px' }} />
					})}
				</colgroup>

				<Thead columns={columns} />
			</table>
		</div>
	);
}

FixedHolder.propTypes = {
	// 头部字段列表
	columns: PropTypes.array,
	// ref值
	headerRef: PropTypes.element,
};
