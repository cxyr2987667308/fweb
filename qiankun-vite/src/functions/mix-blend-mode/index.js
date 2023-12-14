import React, { useState, useEffect } from 'react';
import './index.less';
import YuanTu from './images/landscape-s.jpg';
import img1 from './images/bright.jpg';
import img2 from './images/diffuse.jpg';
import img3 from './images/rains.jpg';
import img4 from './images/snow.jpg';
import video1 from './images/fire.mp4';
import video2 from './images/rains-s.mp4';

const prefixCls = 'mix-blend-mode';
export default function MixBlendMode(props) {
	const arr = [{
		type: 'img',
		url: img1
	}, {
		type: 'img',
		url: img2
	}, {
		type: 'img',
		url: img3
	}, {
		type: 'img',
		url: img4
	}, {
		type: 'video',
		url: video1
	}, {
		type: 'video',
		url: video2
	}, {
		type: 'text',
		text: '文字特效'
	}]

	const getComp = ({ type, url, text }) => {
		if (type === 'text') {
			return (
				<div className='text'>
					<h1>{text}</h1>
				</div>
			)
		}

		if (type === 'video') {
			return (
				<div>
					<video
						autoPlay
						loop
						muted
						// controls
						src={url} />
				</div>
			)
		}

		return <div><img src={url} /></div>
	}

	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-img'}>
				<dl>
					<dt>原图</dt>
					<dd>
						<img src={YuanTu} />
					</dd>
				</dl>
			</div>

			<div className={prefixCls + '-effect'}>
				<dl>
					<dt>特效前景图</dt>
					<dd>
						{arr?.map((item) => {
							return getComp(item);
						})}
					</dd>
				</dl>
			</div>

			<div className={prefixCls + '-result'}>
				<dl>
					<dt>加了效果前景图后的效果</dt>
					<dd>
						{arr?.map((item) => {
							return getComp(item);
						})}
					</dd>
				</dl>
			</div>
		</div >
	);
}
