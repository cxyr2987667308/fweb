/*
 * @Author: colin
 * @Date: 2022-04-01 15:55:28
 * @LastEditTime: 2022-12-05 18:36:06
 * @LastEditors: liF
 * @Description: mock
 */
import Mock from 'mockjs';

// 获取订单详情
Mock.mock('/api/get/tree/list', 'post', require('./getTreeList'));
