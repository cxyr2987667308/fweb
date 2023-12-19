import React, { useState, useEffect } from 'react';
import './index.less';
import pic1 from './images/landscape-s.jpg';
import pic2 from './images/shandian_2.png';
import video1 from './images/rains-s.mp4';

const prefixCls = 'color-filter-test';

export default function ColorFilterTest() {
	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-list'}>
				<div className='list-item'>
					<dl>
						<dt>文字和图片混合结果</dt>
						<dd className='effect'>
							<img src={pic1} />
							<h1>文字效果</h1>
						</dd>
					</dl>
				</div>

				<div className='list-item'>
					<dl>
						<dt>背景图</dt>
						<dd><img src={pic1} /></dd>
					</dl>
					<dl>
						<dt>前景图</dt>
						<dd><img src={pic2} /></dd>
					</dl>
					<dl>
						<dt>背景图和前景图混合后的效果图</dt>
						<dd className='effect'>
							<img src={pic1} />
							<img src={pic2} />
						</dd>
					</dl>
				</div>

				<div className='list-item'>
					<dl>
						<dt>背景图</dt>
						<dd><img src={pic1} /></dd>
					</dl>
					<dl>
						<dt>前景图</dt>
						<dd><video autoPlay loop muted src={video1} /></dd>
					</dl>
					<dl>
						<dt>背景图和前景图混合后的效果图</dt>
						<dd className='effect'>
							<img src={pic1} />
							<video autoPlay loop muted src={video1} />
						</dd>
					</dl>
				</div>
			</div>
		</div >
	);
}
