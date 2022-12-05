import React from 'react';
import Icon from '@ant-design/icons';

const folderSvg = () => (
	<svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor">
		<g id="切图" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="画板" transform="translate(-8.000000, -14.000000)" fillRule="nonzero">
				<g id="folder_icon" transform="translate(8.000000, 14.000000)">
					<rect id="矩形" fill="#000000" opacity="0" x="0" y="0" width="16" height="16" />
					<path d="M12.8462414,14 L2,14 L2.06871979,3 L8.90198556,3 L11.071012,5.15092308 L14,5.15092308 L14,14 L12.8462414,14 Z M3,13 L13,13 L13,6 L3,6 L3,13 Z M9.3637085,5 L8.35528564,4 L3,4 L3,5 L9.3637085,5 Z" id="形状" fill="#333333" />
				</g>
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const folderIcon = props => <Icon component={folderSvg} {...props} />;

export default folderIcon;
