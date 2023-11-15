import baseFetchApi from 'ehome-utils/lib/fetchApi';
import { message } from 'antd';

function fetchApi({
	service = '/api',
	error,
	defaultError = true,
	data: commandObject = {},
	ignoreNamespaceId = false,
	...resetConfig
} = {}) {
	function interceptorError(resData = {}) {
		const errorCode = Number(resData.errorCode);

		// 未登录时统一跳转到登录页
		if (errorCode === 401) {
			message.error('请登录后重试');
		} else {
			if (defaultError) {
				message.error(resData.errorDescription || '系统异常，请稍候再试');
			}

			if (error) {
				error(resData);
			}
		}
	}

	return baseFetchApi({
		...resetConfig,
		service,
		data: commandObject,
		error: interceptorError,
	});
}

export default fetchApi;
