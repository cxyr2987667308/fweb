import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Dropdown, Menu, Tooltip } from 'antd';
import { FolderIcon, FolderExpandIcon, DataSetIcon, MyDateSetIcon } from './CustomIcon';
import { MoreOutlined, CaretRightOutlined, CaretDownOutlined, PlusOutlined } from '@ant-design/icons';
import './index.less';
// import { exportFn } from './commonEvent';

const prefixCls = 'component-tree';

export default function Tree(props) {
	const { searchValue, activeItem, treeData, onExpand, expandedKeys = [], onChange, more, style, className } = props;

	// 点击事件
	const handleClick = (item = {}, e) => {
		// Byte	1 分组; 2 数据集
		const isGroup = (item.nodeType).toString() === '1';

		// 是分组，去展开或收起, 不是分组则进数据集详情
		if (isGroup) {
			return;
		}

		onChange(item);
	};

	// 展开
	const toExpand = ({ treeNodeId }) => {
		const arr = [...expandedKeys];
		const inIndex = arr.findIndex(v => v === treeNodeId);
		if (inIndex !== -1) {
			arr.splice(inIndex, 1);
		} else {
			arr.push(treeNodeId);
		}

		onExpand(arr);
	};

	const loop = (data = [], floor = 1, father = '') => data.map((item) => {
		const { nodeName, nodeType, treeNodeId, childList = [] } = item;
		const isExpand = expandedKeys.findIndex(v => v === treeNodeId) !== -1;
		const isGroup = nodeType.toString() === '1';
		const isActive = item.treeNodeId === activeItem.treeNodeId;
		const index = (item.nodeName || '').indexOf(searchValue);
		const beforeStr = (item.nodeName || '').substr(0, index);
		const afterStr = (item.nodeName || '').substr(index + searchValue.length);

		item.breadcrumb = (father.breadcrumb || '') + (floor > 1 ? ' > ' : '') + item.nodeName;

		return (
			<li key={treeNodeId}>
				<div className={classname('info', { isActive: isActive })}
					onClick={() => handleClick(item)}
					style={{ paddingLeft: 8 + (floor - 1) * 28 }}
				>
					<div className="info-left" onClick={() => toExpand(item)}>
						{isGroup && (isExpand ? <CaretDownOutlined /> : <CaretRightOutlined />)}
					</div>

					<div className="name">
						<span onClick={() => toExpand(item)}>
							{treeNodeId === -1 ? <MyDateSetIcon /> : isGroup ? (isExpand ? <FolderExpandIcon /> : <FolderIcon />) : <DataSetIcon />}
						</span>
						<Tooltip placement="topLeft" title={item.nodeName}>
							<div className='text'>
								{index > -1 ? (
									<>
										{beforeStr}
										<span style={{ color: '#f50' }}>{searchValue}</span>
										{afterStr}
									</>
								) : nodeName}
							</div>
						</Tooltip>

					</div>

					{
						treeNodeId === -1 ? <div className="info-right-add">
							{more && <Dropdown
								overlay={() => {
									const { addFolder, addSchema } = more;
									return (
										<Menu>
											<Menu.Item onClick={() => addFolder()}>新建文件夹</Menu.Item>
											<Menu.Item onClick={() => addSchema()}>新增数据集</Menu.Item>
										</Menu>
									);
								}}
								placement="bottomRight"
							>
								<PlusOutlined />
							</Dropdown>
							}
						</div> : <div className="info-right">
							{more && !(item.createType === 2 && item.rootFlag === 2) && <Dropdown
								overlay={() => {
									const { toRename, toMove, toDelete } = more;
									/* 一级文件夹：重命名、删除 ; 其他文件夹&数据集 不支持任何操作 */
									if (item.createType === 2) {
										if (item.rootFlag === 1) {
											return (
												<Menu>
													<Menu.Item onClick={() => toRename(item)}>重命名</Menu.Item>
													<Menu.Item onClick={() => toDelete(item)}>删除</Menu.Item>
												</Menu>
											);
										}
									}
									return (
										<Menu>
											<Menu.Item onClick={() => toRename(item)}>重命名</Menu.Item>
											<Menu.Item onClick={() => toMove(item)}>移动</Menu.Item>
											<Menu.Item onClick={() => toDelete(item)}>删除</Menu.Item>
											{
												// item.nodeType === 1 && <Menu.Item onClick={() => exportFn(item)}>数据导出</Menu.Item>
											}
										</Menu>
									);
								}}
								placement="bottomRight"
							>
								<MoreOutlined />
							</Dropdown>
							}
						</div>
					}
				</div>

				{isGroup && isExpand ? <ul>{loop(childList, floor + 1, item)}</ul> : ''}
			</li>
		);
	});

	return (
		<div className={classname(prefixCls, className)} style={style}>
			<ul>
				{loop(treeData)}
			</ul>
		</div>
	);
}

Tree.propTypes = {
	// 数据
	treeData: PropTypes.array,
	// 展开默认项
	expandedKeys: PropTypes.array,
	// 展开函数
	onExpand: PropTypes.func,
	// 更多
	more: PropTypes.oneOfType([
		PropTypes.element,
		null
	]),
	// onChange 事件
	onChange: PropTypes.func,
	// 选中项
	activeItem: PropTypes.object,
	// 搜索关键字
	searchValue: PropTypes.string
};
