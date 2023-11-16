import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';
import { Button } from 'antd';
import './index.less';

const prefixCls = 'fl-test-snapshot';
export default function TestSnapshot(props) {
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
			return canvas;
		});
	}

	// 截图
	const getPic = () => {
		convertToImage(document.getElementById('pic'), {}).then((canvas) => {
			setCapture(canvas.toDataURL("image/png"));
		});
	};

	// 快照转为pdf
	const getPicToPDF = () => {
		convertToImage(document.getElementById('pic'), {}).then((canvas) => {
			const url = canvas.toDataURL();
			console.log('url', url);

			const dataURL = canvas.toDataURL('image/png');
			console.log('dataURL', dataURL);

			const contentWidth = canvas.width;
			const contentHeight = canvas.height;

			// 一页pdf显示html页面生成的canvas高度
			let pageHeight = (contentWidth / 592.28) * 841.89;
			// 未生成pdf的html页面高度
			let leftHeight = contentHeight;
			// 页面偏移
			let position = 0;
			// a4纸的尺寸[595.28, 841.89], html页面生成canvas在pdf中图片的宽高
			const imgWidth = 595.28;
			const imgHeight = (595.28 / contentWidth) * contentHeight;
			const pageData = canvas.toDataURL('image/jpeg', 1.0);
			const pdf = new JsPDF('', 'pt', 'a4');

			// 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度（841.89）
			// 当内容未超过pdf一页显示的范围，无需分页
			if (leftHeight < pageHeight) {
				// 在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示
				pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
				// pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);
			} else {
				// 分页
				while (leftHeight > 0) {
					pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
					leftHeight -= pageHeight;
					position -= 841.89;
					// 避免添加空白页
					if (leftHeight > 0) {
						pdf.addPage()
					}
				}
			}
			pdf.save('订单列表');
		});
	}

	return (
		<div className={prefixCls}>
			<h3>HTML 页面</h3>
			<div className={prefixCls + '-info'} id="pic">
				<h1>html2canvas js快照</h1>
				<Button onClick={getPic}>生成快照</Button>
				<Button type="primary" onClick={getPicToPDF} className={prefixCls + '-btn'}>快照转pdf</Button>
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
