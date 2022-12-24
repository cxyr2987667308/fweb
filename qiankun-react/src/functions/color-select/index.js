/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2022-12-24 11:14:08
 */
import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import { ColorPicker } from 'components';
import './index.less';

const prefixCls = 'fl-color-select';
export default function ColorSelect(props) {
	const [form] = Form.useForm();
	const [readOnly, setReadOnly] = useState(false);
	console.log(1111333333);

	return (
		<div className={prefixCls}>
			<Form form={form} className={prefixCls}>
				<Form.Item label='颜色' name='color'
					rules={[{ required: true, message: '请选择颜色' }]}
				>
					<ColorPicker disabled={readOnly} />
				</Form.Item>
			</Form>
		</div>
	);
}
