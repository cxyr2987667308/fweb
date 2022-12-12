/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2022-12-12 16:06:42
 */
import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { pinyin } from 'pinyin-pro';
import { Button } from 'antd';
import './index.less';

const prefixCls = 'fl-html2canvas';
export default function Html2canvas(props) {
	const [capture, setCapture] = useState('');

	// 生成快照
	const convertToImage = (container, options = {}) => {
		// 设置放大倍数
		const scale = window.devicePixelRatio;

		// 传入节点原始宽高
		const _width = container.offsetWidth;
		const _height = container.offsetHeight;

		let { width, height } = options;
		width = width || _width;
		height = height || _height;

		// html2canvas配置项
		const ops = {
			scale,
			// width,
			// height,
			useCORS: true,
			allowTaint: false,
			...options
		};
		
		return html2canvas(container, ops).then(canvas => {
			console.log('----', canvas.toDataURL("image/png"));
			// 返回图片的二进制数据
			return canvas.toDataURL("image/png");
		});
	}

	// 截图
	const getPic = () => {
		convertToImage(document.getElementById('pic'), {}).then((pic) => {
			setCapture(pic);
		})

		// convertToImage(document.getElementById('pic'), {});
		
		// html2canvas(document.getElementById('pic'), {}).then((canvas) => {
		// 	const url = canvas.toDataURL();
		// 	console.log('url', url);
		// });

		// document.body.appendChild(convertToImage(document.getElementById('pic'), {}))
	};

	return (
		<div className={prefixCls}>
			<h3>HTML 页面</h3>
			<div className={prefixCls + '-info'} id="pic">
				<h1>html2canvas js快照</h1>
				<Button type="primary" onClick={getPic}>生成快照</Button>
				<div className='other'>
					<a href='https://html2canvas.hertzen.com/'>文档</a>
				</div>
			</div>

			<h3>快照展示</h3>
			<div className={prefixCls + '-pic'}>
				{capture ? <img src={capture} /> : '暂无快照'}
			</div>
		</div>
	);
}
