/*
 * @Author: liF
 * @Date: 2022-12-05 16:10:02
 * @LastEditors: liF
 * @LastEditTime: 2022-12-05 16:12:26
 */
import { fetchApi } from 'utils';
import { api } from '../../../../config';
import { isEmpty, isFunction } from 'lodash';
import { message } from 'antd';

const base64ToBlob = (code) => {
	const raw = window.atob(code);
	const rawLength = raw.length;
	const uInt8Array = new Uint8Array(rawLength);
	for (let i = 0; i < rawLength; i++) {
		uInt8Array[i] = raw.charCodeAt(i);
	}
	return new Blob([uInt8Array]);
};

export function exportFn(item, callback) {
	const { treeNodeId, nodeType } = item;
	if (nodeType !== 1) {
		return message.warning('只能导出文件夹！');
	}
	message.success({
		content: '数据集导出中...',
		key: 'exporting'
	});
	fetchApi({
		api: api.datasetExport,
		data: {
			treeNodeId
		},
		success: (res) => {
			const url = base64ToBlob(res.downloadFile);
			const a = document.createElement('a');
			const name = res.fileName + '.' + (res.suffix || 'zip');
			a.setAttribute('download', name);
			a.setAttribute('href', URL.createObjectURL(url));
			a.click();
			if (isFunction(callback)) {
				callback();
			}
			message.destroy('exporting');
			message.success('数据集导出成功！')
		}
	});
}
