/*
 * @Author: colin
 * @Date: 2022-04-01 15:55:28
 * @LastEditTime: 2022-12-09 11:31:42
 * @LastEditors: liF
 * @Description: mock
 */
import Mock from 'mockjs';

// 获取订单详情
Mock.mock('/api/ehreport/dataset/tree/list', 'post', require('./datasetTreeList'));
