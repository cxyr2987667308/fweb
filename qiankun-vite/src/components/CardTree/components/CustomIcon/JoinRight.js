import React from 'react';
import Icon from '@ant-design/icons';

const joinRightSvg = () => (
	<svg width="14px" height="20px" viewBox="0 0 14 20" fill="currentColor">
		<g id="关联条-右" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="链接" transform="translate(7.778175, 10.000000) rotate(45.000000) translate(-7.778175, -10.000000) translate(-0.721825, 1.500000)" fill="#07A6F0" fillRule="nonzero">
				<polygon id="路径备份-2" transform="translate(8.655360, 8.423082) rotate(180.000000) translate(-8.655360, -8.423082) " points="14.2812393 5.48224939 12.9387047 6.82478394 13.9452679 7.83170718 7.90426961 13.8733803 3.20508907 9.17413639 9.24697738 3.13305659 10.253536 4.1399753 11.5963103 2.79720102 9.24654144 0.447551562 0.679829444 9.01426355 8.06417866 16.3986128 16.6309504 7.83184106" />
				<polygon id="路径备份" points="3.71079241 14.7107924 8.1608107 10.2607741 6.81839959 8.91834491 2.36867797 13.3683632" />
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const joinRightIcon = props => <Icon component={joinRightSvg} {...props} />;

export default joinRightIcon;
