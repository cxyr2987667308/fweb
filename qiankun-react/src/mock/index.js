/*
 * @Author: colin
 * @Date: 2022-04-01 15:55:28
 * @LastEditTime: 2023-07-03 11:00:33
 * @LastEditors: liF
 * @Description: mock
 */
import Mock from 'mockjs';

// 获取订单详情
Mock.mock('/api/ehreport/dataset/tree/list', 'post', require('./datasetTreeList'));
// 获取关联表
Mock.mock('/api/ehreport/get/join/table/list', 'post', require('./getJoinTableList'));