const convert = words => {
	const fistLetterUpper = str => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	return words
		.split(/-|\//)
		.reduce((accumulator, currentValue) => fistLetterUpper(accumulator) + fistLetterUpper(currentValue));
};

/**
 * getUrlQuery
 *  解析url的search，返回一个键值对的对象query
 *  @param {string} search （eg. ?id=1&name=lestat）
 *  @return {object} return the query （eg. {id: 1, name: lestat}）
 **/
const getUrlQuery = (search) => {
	let searchArray;
	const query = {};
	if (typeof search !== 'string') {
		console.error('The type of getUrlQuery\'s param should be string!');
		return {};
	}
	if (search.indexOf('?') === 0) {
		search = search.substring(1);
	}

	searchArray = search.split('&');
	searchArray.forEach(item => {
		const arr = item.split('=');
		query[arr[0]] = decodeURIComponent(arr[1]);
	});

	return query;
};

export {
	convert,
	getUrlQuery
};
