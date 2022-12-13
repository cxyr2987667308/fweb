/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2022-12-13 11:48:54
 */
import React, { useState, useEffect } from 'react';
import stringify from 'json-stable-stringify';
import { pinyin } from 'pinyin-pro';
import { Button, Input, Select } from 'antd';
import './index.less';

const { TextArea } = Input;
const prefixCls = 'fl-pinyin';
export default function PinYin(props) {
	const [infoText, setInfoText] = useState('');
	const [convertText, setConvertText] = useState('');
	const [toneType, setToneType] = useState(null);
	const [type, setType] = useState(null);

	const toneTypeOptions = [{
		value: null,
		label: '带音调拼音',
	}, {
		value: 'none',
		label: '不带声调的拼音',
	}, {
		value: 'num',
		label: '声调转换为数字后缀的拼音',
	}]

	const typeOptions = [{
		value: null,
		label: '默认形式',
	}, {
		value: 'array',
		label: '数组形式',
	}]

	// 去翻译
	const toChange = () => {
		setConvertText(pinyin(infoText, { toneType, type }));
	}

	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-top'}>
				<Select
					value={toneType}
					style={{ width: 120 }}
					allowClear
					options={toneTypeOptions}
					onChange={(value) => setToneType(value)}
				/>
				<Select
					value={type}
					style={{ width: 120 }}
					allowClear
					options={typeOptions}
					onChange={(value) => setType(value)}
				/>

				<Button onClick={toChange} disabled={!infoText}>转换</Button>
			</div>
			<div className={prefixCls + '-main'}>
				<div className='main-left'>
					<div className='title'>需要转换的汉语</div>
					<TextArea className='info' placeholder='请输入需要转换的汉语' rows={8} onChange={(e) => setInfoText(e.target.value)} />
				</div>
				
				<div className='main-right'>
					<div className='title'>转换结果</div>
					<pre>{convertText ? stringify(convertText) : ''}</pre>
				</div>
			</div>
		</div>
	);
}
