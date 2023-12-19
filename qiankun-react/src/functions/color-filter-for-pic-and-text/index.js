import React, { useState, useEffect } from 'react';
import './index.less';
import YuanTu from './images/landscape-s.jpg';

import { mixBlendModeEnum, picAndTextList } from './enum';

const prefixCls = 'color-filter-for-pic-and-text';

export default function ColorFilterForPicAndText() {
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
						{picAndTextList?.map((item) => {
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
								{picAndTextList?.map((item) => {
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
