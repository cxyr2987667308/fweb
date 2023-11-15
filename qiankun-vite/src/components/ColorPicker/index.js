import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SketchPicker } from 'react-color';
import './index.less';

const prefixCls = 'component-color-picker';
export default function ColorPicker(props) {
	const { onChange, value, disabled, placement = 'bottom' } = props;
	const [state, setState] = useState({
		visible: false,
		color: {},
	});
	const { color, visible } = state;

	// 更新state
	const updateState = (values) => {
		setState(prevState => ({
			...prevState,
			...values
		}));
	};

	// 选取颜色
	const handleChangeComplete = (color) => {
		if (disabled) {
			return;
		}
		const { rgb } = color || {};
		updateState({ color: rgb });
		onChange(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`);
	};

	// 显示拾色器
	const openPicker = (e) => {
		if (disabled) {
			return;
		}

		e.stopPropagation();
		updateState({
			visible: true
		});
	};

	// 关闭拾色器
	const closePicker = (e) => {
		e.stopPropagation();
		updateState({
			visible: false
		});
	};

	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-color'} onClick={openPicker}>
				<div style={{ background: value }} />
			</div>

			{visible && (
				<div className={classNames(prefixCls + '-picker', placement)}>
					<div className='cover' onClick={closePicker} />

					<SketchPicker color={color}
						onChangeComplete={handleChangeComplete}
					/>
				</div>
			)}
		</div>
	);
}

ColorPicker.propTypes = {
	// 事件
	onChange: PropTypes.func,
	// 颜色框位置
	placement: PropTypes.string,
	// 值
	value: PropTypes.string,
	// 是否 disabled
	disabled: PropTypes.bool,
};