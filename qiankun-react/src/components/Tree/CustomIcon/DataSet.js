import React from 'react';
import Icon from '@ant-design/icons';

const dataSetSvg = () => (
	<svg width="16px" height="16px" viewBox="0 0 16 16" fill="currentColor">
		<title>data set_icon</title>
		<g id="切图" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="画板" transform="translate(-32.000000, -14.000000)" fillRule="nonzero">
				<g id="data-set_icon" transform="translate(32.000000, 14.000000)">
					<rect id="矩形" fill="#000000" opacity="0" x="0" y="0" width="16" height="16" />
					<path d="M8,1 L14,4.5 L14,11.5 L8,15 L2,11.5 L2,4.5 L8,1 Z M3,5 L3,11 L8,14 L13,11 L13,5 L8,2 L3,5 Z" id="形状" fill="#333333" />
					<polygon id="路径" fill="#333333" points="8.27356321 8.44444444 7.85977012 8.44444444 2.06666667 5.51111111 2.48045977 4.71111111 8.10804598 7.55555556 13.7356322 4.71111111 14 5.51111111" />
					<polygon id="路径" fill="#333333" points="7.66817898 8.05907119 8.55706787 8.05907119 8.55706787 14.1035156 7.66817898 14.1035156" />
				</g>
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const dataSetIcon = props => <Icon component={dataSetSvg} {...props} />;

export default dataSetIcon;
