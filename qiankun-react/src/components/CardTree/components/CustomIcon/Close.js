import React from 'react';
import Icon from '@ant-design/icons';

const closeSvg = () => (
	<svg width="6px" height="6px" viewBox="0 0 6 6" fill="currentColor">
		<g id="数据集" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="8-添加关联表" transform="translate(-604.000000, -151.000000)" fill="#FFFFFF" fillRule="nonzero">
				<g id="hover" transform="translate(366.000000, 148.000000)">
					<g id="btn_删除" transform="translate(228.000000, 0.000000)">
						<path d="M15.29375,8.25625 L14.2625,8.2515625 L12.709375,6.4 L11.1578125,8.25 L10.125,8.2546875 C10.05625,8.2546875 10,8.2 10,8.1296875 C10,8.1 10.0109375,8.071875 10.0296875,8.0484375 L12.0625,5.6265625 L10.0296875,3.20625 C10.0109375,3.1828125 10,3.1546875 10,3.125 C10,3.05625 10.05625,3 10.125,3 L11.1578125,3.0046875 L12.709375,4.85625 L14.2609375,3.00625 L15.2921875,3.0015625 C15.3609375,3.0015625 15.4171875,3.05625 15.4171875,3.1265625 C15.4171875,3.15625 15.40625,3.184375 15.3875,3.2078125 L13.3578125,5.628125 L15.3890625,8.05 C15.4078125,8.0734375 15.41875,8.1015625 15.41875,8.13125 C15.41875,8.2 15.3625,8.25625 15.29375,8.25625 Z" id="Path" />
					</g>
				</g>
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const closeIcon = props => <Icon component={closeSvg} {...props} />;

export default closeIcon;
