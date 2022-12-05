import React from 'react';
import Icon from '@ant-design/icons';

const MyDateSetSvg = () => (
	<svg width="16px" height="16px" viewBox="0 0 16 16">
		<title>数据集管理</title>
		<g id="数据集" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="4-初始未选中" transform="translate(-597.000000, -548.000000)" fill="#000000" fillRule="nonzero">
				<g id="数据集管理" transform="translate(597.000000, 548.000000)">
					<rect id="矩形" opacity="0" x="0" y="0" width="16" height="16"></rect>
					<path d="M4.09804687,6.50703125 L1.11210937,4.84042969 L8,1 L14.8865234,4.84042969 L11.9019531,6.50703125 L14.8810547,8.20234375 L12.3503906,9.64199219 L14.8810547,11.0830078 L8,15 L1.1203125,11.0830078 L3.65097656,9.64335938 L1.1203125,8.20234375 L4.09804687,6.50703125 Z M10.9148437,7.05664062 L8,8.68222656 L5.08515625,7.05664062 L3.07265625,8.20097656 L8,11.0064453 L12.9273437,8.20097656 C12.9273437,8.20234375 10.9148437,7.05664062 10.9148437,7.05664062 Z M4.62714844,10.1984375 L3.07265625,11.0830078 L8,13.8884766 L12.9273437,11.0830078 L11.3728516,10.1984375 L8,12.1193359 L4.62714844,10.1984375 Z" id="形状"></path>
				</g>
			</g>
		</g>
	</svg>
);

/**
 * 我的数据集 icon
 */
const MyDateSetIcon = props => <Icon component={MyDateSetSvg} {...props} />;

export default MyDateSetIcon;
