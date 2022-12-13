/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2022-12-13 10:45:04
 */
import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { pinyin } from 'pinyin-pro';
import { Button, Input } from 'antd';
import './index.less';

const { TextArea } = Input;
const prefixCls = 'fl-pinyin';
export default function PinYin(props) {
	const [infoText, setInfoText] = useState('');
	const [convertText, setConvertText] = useState('');

	console.log('汉语拼音', pinyin('龘', { toneType: 'none' }));

	// 去翻译
	const toChange = () => {
		setConvertText(pinyin(infoText, { toneType: 'none' }));
	}

	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-top'}>
				<Button onClick={toChange} disabled={!infoText}>转换</Button>
				
			</div>
			<div className={prefixCls + '-main'}>
				<TextArea className='info' placeholder='请输入需要转换的汉语' rows={8} onChange={(e) => setInfoText(e.target.value)} />
				<TextArea className='conver' placeholder='暂无转换' value={convertText} rows={8} readOnly />
			</div>
		</div>
	);
}
