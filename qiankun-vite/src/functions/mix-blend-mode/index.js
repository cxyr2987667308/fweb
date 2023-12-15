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
const mixBlendModeEnum = new Map([
	['normal', '正常'],
	['multiply', '正片叠底'],
	['screen', '滤色'],
	['overlay', '叠加'],
	['darken', '变暗'],
	['lighten', '变亮'],
	['color-dodge', '颜色减淡'],
	['color-burn', '颜色加深'],
	['hard-light', '强光'],
	['soft-light', '柔光'],
	['difference', '差值'],
	['exclusion', '排除'],
	['hue', '色相'],
	['saturation', '饱和度'],
	['color', '颜色'],
	['luminosity', '亮度'],
	['initial', '初始'],
	['inherit', '继承'],
	['unset', '复原'],
]);
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
		text: '文字特效',
	}]

	const getComp = ({ type, url, text, mixBlendMode }) => {
		const myStyle = { mixBlendMode };
		if (type === 'text') {
			return (
				<div className='text'>
					<h1 style={myStyle}>{text}</h1>
				</div>
			)
		}

		if (type === 'video') {
			return (
				<div>
					<video style={myStyle}
						autoPlay
						loop
						muted
						// controls
						src={url}
					/>
				</div>
			)
		}

		return <div><img src={url} style={myStyle} /></div>
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
				{[...mixBlendModeEnum]?.map(itemMode => {
					return (
						<dl>
							<dt>mix-blend-mode: {itemMode?.[0]} {itemMode?.[1]}</dt>
							<dd>
								{arr?.map((item) => {
									return getComp({ ...item, mixBlendMode: itemMode?.[0] });
								})}
							</dd>
						</dl>
					)
				})}
			</div>
		</div >
	);
}
