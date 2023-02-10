## 安装
### npm install mockjs --save-dev

## 引入使用
### 新建mock文件夹，用于存mock数据

## 入口文件引入mock
```
if(process.env.REACT_APP_MOCK === 'true'){
	require('./mock');
}
```

## package.json 加mock脚本
```
"mock": "cross-env REACT_APP_MOCK=true craco start",
```