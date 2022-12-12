/*
 * @Author: liF
 * @Date: 2022-09-19 15:04:17
 * @LastEditors: liF
 * @LastEditTime: 2022-12-09 11:45:12
 */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { Tree } from 'components';
import { api } from './config';
import { fetchApi } from 'utils';
import './index.less';

let datasetData = [];
let listAllData = [];
const ListTree = () => {
    const [state, setState] = useState({
		searchValue: '',
		loading: false,
		treeLoading: false,
		activeItem: {},
		expandedKeys: [1, 2],
		autoExpandParent: true,
		treeData: [],
		searchOptions: [],
		isEmpty: false
	});

	const {
		searchValue, autoExpandParent, loading, visibleAddSchema,
		visibleAddFolder, visibleRename, visibleMove, targetItem, activeItem, expandedKeys,
		treeData, isEmpty, visibleImportDataset
	} = state;

	// 更新state
	const updateState = (values) => {
		setState(prevState => ({
			...prevState,
			...values
		}));
	};

	// 默认选中项
	const getDefault = (arr) => {
		const expandedKeyArr = [];
		let activeNode = {};
		const func = (arr = []) => {
			if (!arr.length) { return; }

			arr.forEach(item => {
				if (item.childList?.length) {
					if (item.defaultFold === 1) {
						expandedKeyArr.push(item.treeNodeId);
					}

					func(item.childList);
				}

				if (item.treeNodeId === state.activeItem?.treeNodeId) {
					activeNode = item;
				}
			});
		};

		func(arr);

		return { expandedKeyArr, activeNode };
	};

	// 获取数据集列表 扁平化
	const getDatasetData = (arr) => {
		const arrData = [];
		const func = (arr) => {
			arr.forEach(item => {
				// 1 分组; 2 数据集
				if (item.nodeType === 2) {
					arrData.push(item);
				}

				if (item?.childList?.length) {
					func(item.childList);
				}
			});
		};

		func(arr);

		return arrData;
	};

	// 获取数据集树形列表
	const getDataList = (isInit = false) => {
		updateState({
			loading: true
		});

		fetchApi({
			api: api.datasetTreeList,
			data: {
				namespaceId: 11
			},
			success: ({customerTreeList = [], standardTreeList=[]}) => {
				const myArr = [
					{
						childList: customerTreeList,
						nodeName: "我的数据集",
						nodeType: 1,
						operatorUid: 1,
						rootFlag: 1,
						treeNodeId: -1,
						defaultFold: 1
					},
					...standardTreeList
				]
				const { activeNode, expandedKeyArr } = getDefault(myArr);
				// 把原数据存起来，搜索时需要用到
				listAllData = myArr;

				datasetData = getDatasetData(myArr);

				updateState(Object.assign({
					loading: false,
					treeData: myArr,
					isEmpty: !myArr?.length
				}, isInit ? ({
					activeItem: activeNode,
					expandedKeys: expandedKeyArr
				}) : {}));

				onChange(activeNode);
			},
			complete: () => {
				updateState({
					loading: false,
					isEmpty: false
				});
			}
		});
	};

	useEffect(() => {
		getDataList(true);
	}, []);

	// 展开
	const onExpand = (expandedKeys) => {
		setState({
			...state,
			expandedKeys,
			autoExpandParent: false
		});
	};

	// 数据集选择每一项
	const handleClick = (activeItem) => {
		updateState({
			activeItem
		});

		onChange(activeItem);
	};

	return (
		<div className='fl-list-tree'>
			<Tree 
				autoExpandParent={autoExpandParent}
				searchValue={searchValue}
				expandedKeys={expandedKeys}
				onExpand={onExpand}
				onChange={handleClick}
				treeData={treeData}
				activeItem={activeItem}
				more={{
					toRename: () => {},
					toMove: targetItem => updateState({ visibleMove: true, targetItem }),
					toDelete: targetItem => toDelete(targetItem),
					addFolder: () => updateState({ visibleAddFolder: true }),
					addSchema: () => updateState({ visibleAddSchema: true }),
				}}
			/>
		</div>
	);
};

export default ListTree;
