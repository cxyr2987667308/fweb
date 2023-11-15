import React from 'react';
import Icon from '@ant-design/icons';

const tableSvg = () => (
	<svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor">
		<g id="切图" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="表icon" fill="#000000" fillRule="nonzero">
				<g id="表格">
					<rect id="矩形" opacity="0" x="0" y="0" width="16" height="16" />
					<path d="M0.9,2.07 L0.9,14.35 L15.1,14.35 L15.1,2.07 L0.9,2.07 Z M14.09,3.07 L14.09,6.25 L1.9,6.25 L1.9,3.07 L14.09,3.07 Z M6.21,9.8 L6.21,7.25 L9.65,7.25 L9.65,9.8 L6.21,9.8 Z M9.66,10.8 L9.66,13.35 L6.21,13.35 L6.21,10.8 L9.66,10.8 Z M1.9,7.25 L5.2,7.25 L5.2,9.8 L1.9,9.8 L1.9,7.25 Z M10.65,7.25 L14.1,7.25 L14.1,9.8 L10.65,9.8 L10.65,7.25 Z M1.9,10.8 L5.2,10.8 L5.2,13.35 L1.9,13.35 L1.9,10.8 Z M10.65,13.35 L10.65,10.8 L14.1,10.8 L14.1,13.35 L10.65,13.35 Z" id="形状" fillOpacity="0.85" />
				</g>
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const tableIcon = props => <Icon component={tableSvg} {...props} />;

export default tableIcon;
