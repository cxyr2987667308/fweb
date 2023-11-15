import React from 'react';
import Icon from '@ant-design/icons';

const joinLeftSvg = () => (
	<svg width="14px" height="20px" viewBox="0 0 14 20" fill="currentColor">
		<g id="关联条-左" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="链接" transform="translate(6.363961, 10.000000) rotate(45.000000) translate(-6.363961, -10.000000) translate(-2.136039, 1.500000)" fill="#07A6F0" fillRule="nonzero">
				<polygon id="路径备份-2" points="13.8904385 5.87305012 12.547904 7.21558466 13.5544672 8.2225079 7.51346888 14.264181 2.81428834 9.56493712 8.85617665 3.52385732 9.86273532 4.53077603 11.2055096 3.18800175 8.85574071 0.83835229 0.289028716 9.40506428 7.67337794 16.7894135 16.2401496 8.22264179" />
				<polygon id="路径备份" points="10.190387 8.23119783 14.6404053 3.78117954 13.2979942 2.43875033 8.84827255 6.88876862" />
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const joinLeftIcon = props => <Icon component={joinLeftSvg} {...props} />;

export default joinLeftIcon;
