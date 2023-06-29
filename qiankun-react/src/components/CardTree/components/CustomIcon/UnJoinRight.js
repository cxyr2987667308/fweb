/*
 * @Author: 方丽娇
 * @Date: 2021-08-30 18:16:29
 * @LastEditTime: 2021-08-31 15:19:34
 * @LastEditors: 方丽娇
 * @Description:
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from 'react';
import Icon from '@ant-design/icons';

const unJoinRightSvg = () => (
	<svg width="15px" height="20px" viewBox="0 0 15 20" fill="currentColor">
		<g id="关联失败条-右" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="关联条-未选中备份-3" transform="translate(-9.000000, -5.000000)">
				<line x1="23" y1="15" x2="11" y2="15" id="直线-2备份-4" stroke="#FF5E5E" />
				<g id="链接备份" transform="translate(14.656854, 15.000000) rotate(45.000000) translate(-14.656854, -15.000000) translate(4.656854, 5.000000)" fill="#FF5E5E" fillRule="nonzero">
					<polygon id="路径备份-2" transform="translate(11.735894, 8.343744) rotate(180.000000) translate(-11.735894, -8.343744) " points="17.4417099 5.32297439 16.0991754 6.66550893 17.1057386 7.67243217 11.0647403 13.7141053 6.36555974 9.01486139 12.4074481 2.97378159 13.4140067 3.9807003 14.756781 2.63792602 12.4070121 0.288276561 3.68042728 9.01486139 11.0647765 16.3992106 19.791421 7.67256606" />
				</g>
				<polygon id="矩形" stroke="#FFFFFF" fill="#FF5E5E" transform="translate(9.129529, 14.998230) rotate(-35.000000) translate(-9.129529, -14.998230) " points="7.87500567 7.79354942 10.8750057 7.79354942 10.3840524 22.2029105 7.38405244 22.2029105" />
			</g>
		</g>
	</svg>
);

/**
 * 基础信息 icon
 */
const unJoinRightIcon = props => <Icon component={unJoinRightSvg} {...props} />;

export default unJoinRightIcon;
