import React, { useState, useEffect } from 'react';
import './index.less';
import YuanTu from './images/landscape-s.jpg';

import { colorList } from './enum';

const prefixCls = 'color-filter';

export default function ColorFilter() {
	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-main'}>
				{colorList?.map(({ foreColor, bgColor, value, label }) => {

					return (
						<dl>
							<dd>
								<div className='bgColor' style={{ background: bgColor }} />
								<div className='foreColor' style={{ background: foreColor, mixBlendMode: value }} />
							</dd>
							<dt>{label} {value}</dt>
						</dl>
					);
				})}
			</div>
		</div >
	);
}
