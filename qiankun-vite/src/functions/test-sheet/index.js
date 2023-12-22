import React, { useState, useEffect } from 'react';
import './index.less';

const prefixCls = 'fl-test-sheet';
export default function TestUnity() {
	useEffect(() => {
		window.luckysheet.create({
			container: 'luckysheet',
			lang: 'zh',
			title: '哈哈哈哈哈哈哈哈',
			plugins: [],
			showtoolbarConfig: {
				undoRedo: false, //撤销重做，注意撤消重做是两个按钮，由这一个配置决定显示还是隐藏
				paintFormat: false, //格式刷  17
				currencyFormat: true, //货币格式
				percentageFormat: true, //百分比格式
				numberDecrease: true, // '减少小数位数'
				numberIncrease: true, // '增加小数位数
				moreFormats: true, // '更多格式'
				font: false, // '字体'
				fontSize: true, // '字号大小' 1
				bold: true, // '粗体 (Ctrl+B)' 2
				italic: true, // '斜体 (Ctrl+I)' 3
				strikethrough: false, // '删除线 (Alt+Shift+5)'
				underline: true, // '下划线 (Alt+Shift+6)' 4
				textColor: true, // '文本颜色' 5
				fillColor: true, // '单元格颜色' 6
				border: true, // '边框' 11
				mergeCell: true, // '合并单元格' 13，14
				horizontalAlignMode: true, // '水平对齐方式' 7，8，9
				verticalAlignMode: true, // '垂直对齐方式' 10
				textWrapMode: true, // '换行方式' 12
				textRotateMode: false, // '文本旋转方式'
				image: false, // '插入图片'
				link: false, // '插入链接'
				chart: false, // '图表'（图标隐藏，但是如果配置了chart插件，右击仍然可以新建图表）
				postil: false, //'批注'
				pivotTable: false,  //'数据透视表'
				function: true, // '公式' 16
				frozenMode: false, // '冻结方式'
				sortAndFilter: false, // '排序和筛选'
				conditionalFormat: true, // '条件格式' 15
				dataVerification: false, // '数据验证'
				splitColumn: false, // '分列'
				screenshot: false, // '截图'
				findAndReplace: false, // '查找替换'
				protection: false, // '工作表保护'
				print: false, // '打印'
				exportXlsx: false, // '导出'
			},
			// 是否显示顶部信息栏
			showinfobar: false,
			cellRightClickConfig: {
				copy: true, // 复制
				copyAs: true, // 复制为
				paste: true, // 粘贴
				insertRow: true, // 插入行
				insertColumn: true, // 插入列
				deleteRow: true, // 删除选中行
				deleteColumn: true, // 删除选中列
				deleteCell: false, // 删除单元格
				hideRow: false, // 隐藏选中行和显示选中行
				hideColumn: false, // 隐藏选中列和显示选中列
				rowHeight: true, // 行高
				columnWidth: true, // 列宽
				clear: false, // 清除内容
				matrix: false, // 矩阵操作选区
				sort: false, // 排序选区
				filter: false, // 筛选选区
				chart: false, // 图表生成
				image: false, // 插入图片
				link: false, // 插入链接
				data: false, // 数据验证
				cellFormat: false // 设置单元格格式
			},
			loading: {
				image: () => {
					return `<svg viewBox="25 25 50 50" class="circular">
					<circle cx="50" cy="50" r="20" fill="none"></circle>
					</svg>`
				},
				imageClass: 'loadingAnimationLuckysheet',
			},
		});
	}, []);


	return (
		<div className={prefixCls}>
			<div id="luckysheet" className={prefixCls + '-sheet'}></div>
		</div>
	);
}
