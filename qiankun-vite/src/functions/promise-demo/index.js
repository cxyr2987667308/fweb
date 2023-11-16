import React, { useState, useEffect } from 'react';
import MYPromise from './../../utils/mypromise';
import ReactMarkdown from 'react-markdown';
import DocMarkdown from './doc.md';
import './index.less';

const prefixCls = 'fl-promise-demo';

export default function PromiseDemo(props) {
	// 创建实例对象
	const create = () => {
		let promise = new MYPromise((resolve, reject) => {
			console.log('create')
			reject('create')
		})
		let n = promise.then((res) => {
			console.log('res')
			return 'then'
		}, (reson) => {
			console.log(reson, 'eoor');
		})

		setTimeout(() => {
			console.log(n)
		}, 100)

		n.then((res) => {
			console.log(res + '2')
		})

		console.log(1)

	}
	create();


	return (
		<div className={prefixCls}>
			<DocMarkdown />
		</div>
	);
}
