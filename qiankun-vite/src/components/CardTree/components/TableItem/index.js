import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { PlusCircleOutlined } from '@ant-design/icons';
import { JoinLeftIcon, JoinRightIcon, UnJoinLeftIcon, UnJoinRightIcon, TableIcon, CloseIcon } from './../CustomIcon';
import './index.less';

const prefixCls = 'data-app-schema-join-table-cardTree-tableItem';

export default function TableItem(props) {
	const { isNotFirst, isActive, isNull, isJoin, style, title, verticalHeight, handleClick, toDelete } = props;

	return (
		<div className={classname(prefixCls, {
			isNotFirst,
			isActive,
			isUnJoin: !isJoin,
			isNull
		})} style={style} onClick={handleClick}>
			<div className="link">
				<div className="link-horizontal" />

				{isJoin ? (
					<div className="link-icon">
						<JoinLeftIcon className="icon-left" />
						<JoinRightIcon className="icon-right" />
					</div>
				) : (
					<div className="link-icon">
						<UnJoinLeftIcon className="icon-left" />
						<UnJoinRightIcon className="icon-right" />
					</div>
				)}

				<div className="link-vertical" style={{ height: verticalHeight, top: -verticalHeight }} />
			</div>

			<div className="info">
				<div>
					<div className="info-icon">
						{isNull ? <PlusCircleOutlined /> : <TableIcon />}
					</div>

					<div className="info-title">
						{title || '添加关联表'}
					</div>

				</div>

				<span className="info-close" onClick={(e) => {
					e.stopPropagation();
					toDelete();
				}}>
					<CloseIcon />
				</span>
			</div>
		</div>
	);
}

TableItem.propTypes = {
	// 是否不为第一个节点
	isNotFirst: PropTypes.bool,
	// 是否为选中状态
	isActive: PropTypes.bool,
	// 是否为空
	isNull: PropTypes.bool,
	// 是否已关联
	isJoin: PropTypes.bool,
	// 样式
	style: PropTypes.object,
	// 标题
	title: PropTypes.string,
	// 高度
	verticalHeight: PropTypes.number,
	// 点击事件
	handleClick: PropTypes.func,
	// 删除
	toDelete: PropTypes.func
};
