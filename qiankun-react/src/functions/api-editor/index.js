/*
 * @Author: 方丽娇
 * @Date: 2021-11-18 12:26:51
 * @LastEditTime: 2023-07-03 10:56:12
 * @LastEditors: liF
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, message, Space, Spin } from 'antd';
import stringify from 'json-stable-stringify';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import { api } from './config';
import { fetchApi } from 'utils';
import './index.less';

const prefixCls = 'data-app-api-service-apiEditor';

ApiEditor.propTypes = {
	// 是否只读
	readOnly: PropTypes.bool,
	// onChange 事件
	onChange: PropTypes.func,
};

ApiEditor.defaultProps = {
	readOnly: false,
	onChange: () => {}
};

export default function ApiEditor(props) {
	const { readOnly, value, sourceId, onChange } = props;
	const [visibleTableSearch, setVisibleTableSearch] = useState(false);
	const [testLoading, setTestLoading] = useState(false);
	const [resultJson, setResultJson] = useState('');

	// 去测试
	const toTest = () => {
		if (!sourceId) {
			return message.error('请选择数据源');
		}

		setTestLoading(true);
		fetchApi({
			api: api.dynamicTest,
			data: {
				customerSql: value,
				sourceId
			},
			success: (res) => {
				setResultJson(res.list || []);
			},
			complete: () => {
				setTestLoading(false);
			}
		});
	};

	return (
		<div className={prefixCls}>
			<div className={prefixCls + '-box'}>
				<div className="title">
					请求脚本
					<Space>
						{!readOnly && <Button size="small" onClick={() => setVisibleTableSearch(true)}>数据表查询</Button>}
						<Button size="small" loading={testLoading} onClick={toTest}>测试</Button>
					</Space>
				</div>

				<div className="content">
					<AceEditor
						mode="mysql"
						theme="tomorrow"
						name="docking-script"
						height="100%"
						width="100%"
						editorProps={{ $blockScrolling: true }}
						setOptions={{
							enableBasicAutocompletion: true,
							enableLiveAutocompletion: true,
							enableSnippets: true,
							showLineNumbers: true,
							tabSize: 2,
							wrap: true,
						}}
						readOnly={readOnly}
						value={value}
						onLoad={() => { }}
						onChange={(value) => onChange(value)}
					/>
				</div>
			</div>

			<div className={prefixCls + '-box'}>
				<div className="title">响应结果</div>
				<div className="content">
					<Spin spinning={testLoading}>
						<pre>{resultJson ? stringify(resultJson, { space: '  ' }) : ''}</pre>
					</Spin>
				</div>
			</div>
		</div>
	);
}
