const packageJson = require('./package.json');
const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const CracoLessPlugin = require('craco-less');
const { loaderByName } = require('@craco/craco');
// const { ESLINT_MODES } = require('@craco/craco');
const targetPath = require('./src/.start.json')?.proxy;
const packageName = require('./package.json').name

module.exports = {
	typescript: {
		enableTypeChecking: false
	},
	eslint: {
		// enable: true,
		// mode: ESLINT_MODES.file,
		// configure: (eslintConfig, { env, paths }) => { return eslintConfig; }
		enable: false,
		// mode: "file",
	},
	webpack: {
		alias: {
			utils: resolve('src/utils'),
			components: resolve('src/components'),
		},
		configure: (webpackConfig, { env, path }) => {
			webpackConfig.output = {
				...webpackConfig.output,
				library: `${packageName}-[name]`,
				libraryTarget: 'umd',
				chunkLoadingGlobal: `webpackJsonp_${packageName}`
			}
			return webpackConfig;
		}
	},
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {
							'@primary-color': '#07A6F0',
							'font-size-base': '14px',
							'ant-prefix': packageJson.antdConfig.prefixCls
						},
						javascriptEnabled: true,
					},
				},

				modifyLessRule(lessRule, context) {
					// You have to exclude these file suffixes first,
					// if you want to modify the less module's suffix
					lessRule.exclude = /\.module\.less$/;
					return lessRule;
				},
				modifyLessModuleRule(lessModuleRule, context) {
					// Configure the file suffix
					lessModuleRule.test = /\.module\.less$/;

					// Configure the generated local ident name.
					const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'));
					cssLoader.options.modules = {
						localIdentName: '[local]_[hash:base64:5]',
						exportLocalsConvention: 'camelCaseOnly',
					};

					return lessModuleRule;
				},
			},
		},
	],
	babel: {
		plugins: [
			['@babel/plugin-proposal-decorators', { legacy: true }],
			[
				'import',
				{
					libraryName: 'antd',
					// libraryDirectory: 'es',
					style: true
				}
			]
		]
	},
	module: {
		rules: [{
			test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
			loader: 'url-loader',
			// options: {
			// 	limit: 10000,
			// },
		}, {
			test: /\.(eot||ttf|woff|svg)$/i,
			loader: 'file-loader',
			// options: {
			// 	limit: 10000,
			// },
		}, {
			test: /\.md$/,
			use: [{
				loader: 'html-loader',
			}, {
				loader: 'markdown-loader',
				options: {}
			}]
		}]
	},
	devServer: {
		port: 8081,
		proxy: [{
			context: ['/evh', '/api'],
			target: targetPath,
			changeOrigin: true
		}],
	},
};
