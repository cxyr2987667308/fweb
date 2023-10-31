/*
 * @Author: lj.fang
 * @Date: 2021-07-02 11:54:10
 * @Last Modified by: lj.fang
 * @Last Modified time: 2023-10-31 17:40:41
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const prefixCls = 'component-table-list-thead';

export default function Thead(props) {
	const { columns = [] } = props;

	return (
		<thead className={prefixCls}>
			<tr>
				{columns.map((columnsItem, index) => {
					return <th key={index} scope="col">{columnsItem.title}</th>
				})}
				<th />
			</tr>
		</thead>
	);
}

Thead.propTypes = {
	// 头部字段列表
	columns: PropTypes.array,
};
