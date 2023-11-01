/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2023-07-03 12:02:51
 */
import React, { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import TableList from './../../components/TableList';
import { api } from './config';
import { fetchApi } from 'utils';
import './index.less';

const prefixCls = 'fl-test-table';
export default function TableJoin(props) {
	const [currentTable, setCurrentTable] = useState({});
	const [tableList, setTableList] = useState({});
	const columns = [
		{ title: 'title1', dataIndex: 'a', key: 'a', width: 100, fixed: 'left' },
		{ title: 'title2', dataIndex: 'b', key: 'b', width: 100, fixed: 'left', ellipsis: true },
		{ title: 'title3', dataIndex: 'c', key: 'c' },
		{ title: 'title4', dataIndex: 'b', key: 'd' },
		{ title: 'title5', dataIndex: 'b', key: 'e' },
		{ title: 'title6', dataIndex: 'b', key: 'f' },
		{
			title: (
				<div>
					title7
					<br />
					<br />
					<br />
					Hello world!
				</div>
			),
			dataIndex: 'b',
			key: 'g',
		},
		{ title: 'title8', dataIndex: 'b', key: 'h' },
		{ title: 'title9', dataIndex: 'b', key: 'i' },
		{ title: 'title10', dataIndex: 'b', key: 'j' },
		{ title: 'title11', dataIndex: 'b', key: 'k' },
		{ title: 'title12', dataIndex: 'b', key: 'l' },
		{ title: 'title13', dataIndex: 'b', key: 'o' },
		{ title: 'title14', dataIndex: 'b', key: 'p', width: 50, fixed: 'right' },
		{ title: 'title15', dataIndex: 'b', key: 'q', width: 100, fixed: 'right' },
	]

	const dataSource = [
		{
			a: '123',
			b: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
			d: 3,
			key: '1',
		},
		{ a: 'cdd', b: 'edd12221', d: 3, key: '2' },
		{ a: '133', c: 'edd12221', d: 2, key: '3' },
		{ a: '133', c: 'edd12221', d: 2, key: '4' },
		{ a: '133', c: 'edd12221', d: 2, key: '5' },
		{ a: '133', c: 'edd12221', d: 2, key: '6' },
		{ a: '133', c: 'edd12221', d: 2, key: '7' },
		{ a: '133', c: 'edd12221', d: 2, key: '8' },
		{ a: '133', c: 'edd12221', d: 2, key: '9' },
	]

	return (
		<div className={prefixCls}>
			<TableList style={{ flex: 1 }} columns={columns} dataSource={dataSource} />
		</div>
	);
}
