import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getFixStyle } from './../../utils';
import './index.less';

const prefixCls = 'component-table-list-header';

export default function Header(props) {
	const { columns = [], curRef, onScroll } = props;

	return (
		<div className={prefixCls} ref={curRef} onScroll={onScroll}>
			<table border="0" cellPadding="0" cellSpacing="0"
				style={{ tableLayout: 'fixed' }}
			>
				<colgroup>
					{columns.map((item, i) => {
						const { width, colWidth } = item;
						return <col key={i} style={{ width: width || colWidth }} />
					})}
					<col style={{ width: 32, padding: 0 }} />
				</colgroup>

				<thead className={prefixCls}>
					<tr>
						{columns.map((columnsItem, index) => {
							const { title, isLast, fixed } = columnsItem || {};
							const isLeftLast = !!isLast && fixed === 'left';
							const isRightFirst = !!isLast && fixed === 'right';
							const classnames = classNames({ isLeftLast: isLeftLast, isRightFirst: isRightFirst });

							return (
								<th key={index} scope="col" className={classnames} style={getFixStyle(columnsItem, true)}>
									{title}
								</th>
							)
						})}
						<th />
					</tr>
				</thead>
			</table>
		</div>
	);
}

Header.propTypes = {
	// 头部字段列表
	columns: PropTypes.array,
	// ref值
	headerRef: PropTypes.element,
};
