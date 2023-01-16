/*
 * @Description: 数据集 schema
 * @version:
 * @Author: 方丽娇
 * @Date: 2021-07-12 10:28:38
 * @LastEditors: liF
 * @LastEditTime: 2023-01-16 16:18:27
 */
import React, { useState, useEffect } from 'react';
import MYPromise from './../../utils/mypromise';
import './index.less';

const prefixCls = 'fl-promise-demo';

export default function PromiseDemo(props) {
	// 创建实例对象
	const create = () => {
		let promise = new MYPromise((resolve, reject)=>{
			console.log('create')
			reject('create')
		})
		let n = promise.then((res)=>{
			console.log('res')
			return 'then'
		}, (reson) => {
			console.log(reson, 'eoor');
		})

		setTimeout(()=>{
			console.log(n)
		}, 100)

		n.then((res)=>{
		  console.log(res+ '2')
		})

		console.log(1)

	}
	create();

	const tt = () => {
		
	}

	return (
		<div className={prefixCls}>
			呃呃呃
			<div></div>
			<ul>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
}
