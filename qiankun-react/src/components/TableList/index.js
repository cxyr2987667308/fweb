/*
 * @Author: lj.fang
 * @Date: 2021-07-02 11:54:10
 * @Last Modified by: lj.fang
 * @Last Modified time: 2023-10-31 12:22:07
 */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.less';

const prefixCls = 'component-table-list';

export default function TableList(props) {
	const headerRef = useRef(null);
	const bodyRef = useRef(null);

	const { columns, theme, dataSource, style, className = '' } = props;

	return (
		<div className={classnames(prefixCls, className)} style={style}>
			<div className='thead' ref={headerRef}
				onScroll={() => {
					bodyRef.current.scrollLeft = headerRef.current.scrollLeft;
				}}>
				<table border="0" cellPadding="0" cellSpacing="0"
					style={{ tableLayout: 'fixed' }}
				>
					<colgroup>
						{columns.map((item, i) => {
							return <col key={i} style={{ width: '120px' }} />
						})}
					</colgroup>

					<thead>
						<tr className={theme?.commonTableClass}>
							{columns.map((columnsItem, index) => {
								return <th key={index} scope="col">{columnsItem.title}</th>
							})}
						</tr>
					</thead>
				</table>
			</div>

			<div className='tbody' ref={bodyRef}
				onScroll={() => {
					headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
				}}>
				<table border="0" cellPadding="0" cellSpacing="0"
					style={{ width: 1618, minWidth: '100%', tableLayout: 'fixed' }} // 'max-content'
				>
					<colgroup>
						{columns.map((item, i) => {
							return <col key={i} />
						})}
					</colgroup>

					<tbody>
						<tr className={theme?.commonTableClass} style={{ height: 0, fontSize: 0 }}>
							{columns.map((columnsItem, index) => {
								return <td key={index} style={{ padding: 0, border: 0, height: 0 }}>&nbsp;</td>
							})}
						</tr>

						{dataSource.map((item, index) => {
							return (
								<tr key={index}>
									{columns.map(columnsItem => {
										return (
											<td>
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
		</div>
	);
}

TableList.propTypes = {
	// 是否显示
	visible: PropTypes.bool,
	// onClose 事件
	onClose: PropTypes.func,
};
