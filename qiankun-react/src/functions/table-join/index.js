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
import CardTree from './../../components/CardTree';
import { api } from './config';
import { fetchApi } from 'utils';
import './index.less';

const prefixCls = 'fl-table-join';
export default function TableJoin(props) {
	const [currentTable, setCurrentTable] = useState({});
	const [tableList, setTableList] = useState({});

	useEffect(() => {
		fetchApi({
			api: api.getJoinTableList,
			data: {
				namespaceId: 11
			},
			success: (res) => {
				setTableList(res);
			},
			complete: () => {
				
			}
		});
	}, [])

	const toJoin = () => {
		console.log('去添加关联表');
	}
	
	return (
		<div className={prefixCls}>
			<CardTree listData={cloneDeep(tableList)}
				configDTO={tableList}
				currentTable={currentTable}
				onClick={toJoin}
			/>
		</div>
	);
}
