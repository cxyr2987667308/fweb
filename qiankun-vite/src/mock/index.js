import Mock from 'mockjs';

// 获取订单详情
Mock.mock('/api/ehreport/dataset/tree/list', 'post', require('./datasetTreeList'));
// 获取关联表
Mock.mock('/api/ehreport/get/join/table/list', 'post', require('./getJoinTableList'));