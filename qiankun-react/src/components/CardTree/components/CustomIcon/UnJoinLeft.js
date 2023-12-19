import React from 'react';
import Icon from '@ant-design/icons';

const unJoinLeftSvg = () => (
	<svg width="15px" height="20px" viewBox="0 0 15 20" fill="currentColor">
		<g id="关联失败条-左" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="关联条-未选中备份-4" transform="translate(-5.000000, -5.000000)">
				<line x1="18.6772461" y1="15" x2="6.67724609" y2="15" id="直线-2备份-5" stroke="#FF5E5E" />
				<g id="链接备份" transform="translate(14.343146, 15.000000) rotate(45.000000) translate(-14.343146, -15.000000) translate(4.343146, 5.000000)" fill="#FF5E5E" fillRule="nonzero">
					<polygon id="路径" points="14.3577932 8.40689111 13.0152587 9.74942565 14.0218219 10.7563489 7.98082356 16.798022 3.28164303 12.0987781 9.32353134 6.0576983 10.33009 7.06461701 11.6728643 5.72184273 9.32309539 3.37219328 0.596510564 12.0987781 7.98085979 19.4831273 16.7075043 10.7564828" />
				</g>
				<polygon id="矩形" stroke="#FFFFFF" fill="#FF5E5E" transform="translate(20.129529, 14.998230) rotate(-35.000000) translate(-20.129529, -14.998230) " points="18.8750057 7.79354942 21.8750057 7.79354942 21.3840524 22.2029105 18.3840524 22.2029105" />
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const unJoinLeftIcon = props => <Icon component={unJoinLeftSvg} {...props} />;

export default unJoinLeftIcon;
