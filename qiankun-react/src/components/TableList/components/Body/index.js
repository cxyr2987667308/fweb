/*
 * @Author: lj.fang
 * @Date: 2021-07-02 11:54:10
 * @Last Modified by: lj.fang
 * @Last Modified time: 2023-11-02 14:33:52
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { getFixStyle } from './../../utils';
import './index.less';

const prefixCls = 'component-table-list-tbody';

export default function Body(props) {
	const { columns = [], dataSource = [], curRef, onScroll } = props;

	return (
		<div className={prefixCls} ref={curRef} onScroll={onScroll}>
			<table border="0" cellPadding="0" cellSpacing="0"
				style={{ minWidth: '100%', tableLayout: 'fixed' }}
			>
				<colgroup>
					{columns.map((item, i) => {
						return <col key={i} style={{ width: item.width || item.colWidth }} />
					})}
				</colgroup>

				<tbody>
					<tr style={{ height: 0, fontSize: 0 }}>
						{columns.map((columnsItem, index) => {
							return <td key={index} style={{ padding: 0, border: 0, height: 0 }}>&nbsp;</td>
						})}
					</tr>

					{dataSource.map((item, index) => {
						return (
							<tr key={index}>
								{columns.map((columnsItem, columnsIndex) => {
									return (
										<td key={columnsIndex} style={getFixStyle(columnsItem)}>
											{item[columnsItem?.dataIndex || '']}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	);
}

Body.propTypes = {
	// 头部字段列表
	columns: PropTypes.array,
	// 列表
	dataSource: PropTypes.array,
	// 宽度
	boxWidth: PropTypes.number,
};
