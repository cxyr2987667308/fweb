/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2023-06-29 18:38:53
 */
import React, { useState, useEffect } from 'react';
import CardTree from './../../components/CardTree';
import { api } from './config';
import { fetchApi } from 'utils';
import './index.less';

const prefixCls = 'fl-table-join';
export default function TableJoin(props) {
	const [currentTable, setCurrentTable] = useState({});
	const [tableList, setTableList] = useState({});

	const toJoin = () => {
		fetchApi({
			api: api.getJoinTableList,
			data: {
				namespaceId: 11
			},
			success: (res) => {
				
			},
			complete: () => {
				
			}
		});
	}
	
	return (
		<div className={prefixCls}>
			<CardTree listData={cloneDeep(configDTO)}
				configDTO={configDTO}
				currentTable={currentTable}
				onClick={toJoin}
			/>
		</div>
	);
}
