import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import { cloneDeep } from 'lodash';
import TableItem from './components/TableItem';
import './index.less';

import MainEmptyIcon from './images/main_empty.svg';
import SecondaryEmptyIcon from './images/secondary_empty.svg';

const prefixCls = 'data-app-schema-join-table-cardTree';

export default function CardTree(props) {
	const { onClick, listData, configDTO, currentTable } = props;
	const [state, setState] = useState({
		listArr: []
	});

	const { listArr } = state;

	// 更新state
	const updateState = (values) => {
		setState(prevState => ({
			...prevState,
			...values
		}));
	};

	const getArrList = (arr, floor = 1) => {
		return arr.map((v) => {
			if (v.joinTableList?.length && floor < 5) {
				v.joinTableList = [...v.joinTableList, {}];
				getArrList(v.joinTableList, floor + 1);
			} else {
				if (v.tableName && floor < 5) {
					v.joinTableList = [{}];
				}
			}
			return v;
		});
	};

	useEffect(() => {
		updateState({
			listArr: getArrList([cloneDeep(listData)])
		});
	}, [listData]);

	// 换成原数据
	const getItemTable = (itemTable = {}) => {
		let item = {};
		const func = (arr) => {
			arr.forEach((v) => {
				if (v.tableId === itemTable.tableId) {
					item = cloneDeep(v);
				}

				if (v.joinTableList?.length) {
					func(v.joinTableList);
				}
			});
		};

		func([configDTO]);

		return {
			...item,
			tableNameAlias: item.tableNameAlias || itemTable.tableNameAlias
		};
	};

	// 点击事件
	const handleClick = ({ currentTable, parentTable, ...res }) => {
		onClick({
			...res,
			currentTable: getItemTable(currentTable),
			parentTable: getItemTable(parentTable),
		});
	};

	// 前一项
	let preItem = {};

	// 有主表是把对应的鹅关联关系显示出来
	const getJoinTableList = (arr, floor = 1, parentTable) => {
		return arr.map((item, index) => {
			const beforeBrother = arr[(index - 1 || 0)];
			const beforeBrotherJoin = beforeBrother?.joinTableList || [];

			item.offsetLeft = 330 * (floor - 1);
			item.verticalHeight = (beforeBrotherJoin.length || 0) * 92 || 92;

			if (index === 0) {
				item.offsetTop = preItem.offsetTop;
			} else {
				item.offsetTop = 92 + (preItem.offsetTop || 0);
				item.verticalHeight = item.offsetTop - (beforeBrother.offsetTop || 0);
			}

			// 把当前项同步给preItem
			preItem = item;

			// 是否是主表
			const isMainTable = floor === 1 && index === 0;
			const isActive = currentTable?.tableId && currentTable?.tableId === item?.tableId;
			const isNull = !item.tableName;
			const isJoin = !!item?.conditionDTOList?.length;

			// 判断主表和关联表是否为空
			const isMainEmpty = floor === 1 && index === 0 && isNull;
			const isSecondaryEmpty = floor === 2 && index === 0 && isNull;

			// 设置表别名也就是序号
			const parentAlias = parentTable?.tableNameAlias || 'T_0';
			item.tableNameAlias = `${parentAlias.split('_').filter((v, i) => i !== floor).join('_')}_${index}`;

			return (
				<>
					<TableItem key={item.tableNameAlias}
						isActive={isActive}
						isNull={isNull}
						isJoin={isJoin}
						title={item.tableName}
						style={{ top: item.offsetTop, left: item.offsetLeft }}
						isNotFirst={index > 0}
						verticalHeight={item.verticalHeight}
						handleClick={() => handleClick({
							isAdd: isNull,
							isMainTable,
							currentTable: item,
							parentTable
						})}
						toDelete={() => handleClick({
							isDelete: true,
							isMainTable,
							currentTable: item,
							parentTable
						})}
					/>

					{item.joinTableList?.length ? (
						getJoinTableList(item.joinTableList, floor + 1, item)
					) : (
						''
					)}

					{(isMainEmpty || isSecondaryEmpty) && <div className={prefixCls + '-empty'}>
						{isMainEmpty && <Empty
							image={MainEmptyIcon}
							imageStyle={{ height: 50 }}
							description={<span style={{ color: 'rgba(0,0,0,0.45)' }}>请点击选中数据表开始数据创建</span>}
						/>}

						{isSecondaryEmpty && <Empty
							image={SecondaryEmptyIcon}
							imageStyle={{ height: 50 }}
							description={<span style={{ color: 'rgba(0,0,0,0.45)' }}>添加数据表进行表关联</span>}
						/>}
					</div>}
				</>
			);
		});
	};

	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-content'}>
				{getJoinTableList(listArr)}

			</div>
		</div>
	);
}

CardTree.propTypes = {
	// onChange 事件
	onChange: PropTypes.func,
	// 数组
	listData: PropTypes.object,
	// 当前选中的表
	currentTable: PropTypes.object,
	// 源数据
	configDTO: PropTypes.object
};
