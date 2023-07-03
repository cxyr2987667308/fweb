/*
 * @Author: colin
 * @Date: 2022-04-01 16:43:08
 * @LastEditTime: 2023-07-03 11:26:47
 * @LastEditors: liF
 * @Description: 获取订单详情mock数据
 */
module.exports = {
	version: '1.0.0',
	errorCode: 200,
	response: {
    "tableName": "T_11_商品销售统计表长名字",
    "tableNameAlias": "T_0",
    "tableId": "5d90cc83-f0ea-40c3-99b9-fbdfbce4c813",
    "columnList": [
        {
            "name": "id",
            "dbType": "BIGINT",
            "type": "NUM",
            "typeCn": "数字",
            "comment": "",
            "columnCategory": 2,
            "columnId": "8619e9a3-c4fb-4018-a25f-94130a885df4"
        },
        {
            "name": "商品名称",
            "dbType": "TEXT",
            "type": "STR",
            "typeCn": "文本",
            "comment": "商品名称",
            "columnCategory": 1,
            "columnId": "e84cddd6-47d4-4bd6-b533-77c9db250a1c"
        },
        {
            "name": "商品类型",
            "dbType": "TEXT",
            "type": "STR",
            "typeCn": "文本",
            "comment": "商品类型",
            "columnCategory": 1,
            "columnId": "b4d5f812-a0f8-45b4-9fe2-06c9d172bd3e"
        },
        {
            "name": "渠道",
            "dbType": "TEXT",
            "type": "STR",
            "typeCn": "文本",
            "comment": "渠道",
            "columnCategory": 1,
            "columnId": "9c5dcd4f-19d2-406b-9f44-9ff5f589058b"
        },
        {
            "name": "进货价",
            "dbType": "DECIMAL",
            "type": "NUM",
            "typeCn": "数字",
            "comment": "进货价",
            "columnCategory": 2,
            "columnId": "57059110-d499-4007-a1dc-b242855089b8"
        },
        {
            "name": "零售价",
            "dbType": "DECIMAL",
            "type": "NUM",
            "typeCn": "数字",
            "comment": "零售价",
            "columnCategory": 2,
            "columnId": "ddf65b7a-f764-4085-abac-9dace0b92ae9"
        },
        {
            "name": "批发价",
            "dbType": "DECIMAL",
            "type": "NUM",
            "typeCn": "数字",
            "comment": "批发价",
            "columnCategory": 2,
            "columnId": "2cf9e6ba-55bb-4767-883f-0fc6ea5d629d"
        },
        {
            "name": "库存量",
            "dbType": "DECIMAL",
            "type": "NUM",
            "typeCn": "数字",
            "comment": "库存量",
            "columnCategory": 2,
            "columnId": "a20c30a0-5e26-4573-ae01-96fb2aa5cb94"
        },
        {
            "name": "最后进货时间",
            "dbType": "DATE",
            "type": "DATE",
            "typeCn": "日期",
            "comment": "最后进货时间",
            "columnCategory": 1,
            "columnId": "66e7afc1-d7e4-4c85-aec6-b8d82c37b83d"
        }
    ],
    "joinTableList": [
        {
            "tableName": "T_11_本地探索_NS11",
            "tableNameAlias": "T_0_0",
            "joinType": 1,
            "tableId": "f8c7f004-5ffc-4702-a732-e90da9e18820",
            "conditionDTOList": [
                {
                    "baseTableColumn": "id",
                    "joinTableColumn": "id"
                }
            ],
            "columnList": [
                {
                    "name": "id",
                    "dbType": "BIGINT",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "",
                    "columnCategory": 1,
                    "columnId": "5b4cd4bb-e309-4772-8b42-51891ecfe192"
                },
                {
                    "name": "sort",
                    "dbType": "BIGINT",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "",
                    "columnCategory": 1,
                    "columnId": "9b0ecf68-57f2-422d-a59c-bd1cb32ae1c1"
                },
                {
                    "name": "序号",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "序号",
                    "columnCategory": 1,
                    "columnId": "dbe8a993-1382-4ce3-843b-74a5651cc1ca"
                },
                {
                    "name": "企业名称",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "企业名称",
                    "columnCategory": 1,
                    "columnId": "2670cb31-4267-4f3b-b1c3-68a0848682a6"
                },
                {
                    "name": "年份",
                    "dbType": "DATE",
                    "type": "DATE",
                    "typeCn": "日期",
                    "comment": "年份",
                    "columnCategory": 1,
                    "columnId": "1b91f6d0-85c8-4fae-9ed7-770e2df576c5"
                },
                {
                    "name": "所属园区",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "所属园区",
                    "columnCategory": 1,
                    "columnId": "3032316e-ec70-4845-9dec-a1fe9df261b7"
                },
                {
                    "name": "组织机构代码",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "组织机构代码",
                    "columnCategory": 1,
                    "columnId": "94882e26-e0f0-4c26-a4e3-a6117b7e7281"
                },
                {
                    "name": "注册资本",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "注册资本",
                    "columnCategory": 1,
                    "columnId": "f626033d-c419-4dfe-b394-f58a87180160"
                },
                {
                    "name": "所属行业",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "所属行业",
                    "columnCategory": 1,
                    "columnId": "dee05480-4747-44ec-839a-117510c55e7a"
                },
                {
                    "name": "营业收入",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "营业收入",
                    "columnCategory": 1,
                    "columnId": "45b84dc2-fa09-4b49-8360-3ac003a248d9"
                },
                {
                    "name": "纳税总额",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "纳税总额",
                    "columnCategory": 1,
                    "columnId": "d0898d84-414b-409f-ba7c-105c26e3a399"
                },
                {
                    "name": "营业利润",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "营业利润",
                    "columnCategory": 1,
                    "columnId": "deefab0c-3f98-412e-978d-43f358651c53"
                },
                {
                    "name": "期末从业人员",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "期末从业人员",
                    "columnCategory": 1,
                    "columnId": "eb8d31c2-07b1-4934-b8f9-c7ea579bb542"
                },
                {
                    "name": "女性",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "女性",
                    "columnCategory": 1,
                    "columnId": "9efd22f5-5473-4dcd-80a5-d2a37c565d5f"
                },
                {
                    "name": "男性",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "男性",
                    "columnCategory": 1,
                    "columnId": "1d848a4b-d474-4898-ad29-9ebaaccb05d1"
                },
                {
                    "name": "博士研究生",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "博士研究生",
                    "columnCategory": 1,
                    "columnId": "8f9910d4-64a9-4416-acc0-c5af5636ad1e"
                },
                {
                    "name": "硕士研究生",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "硕士研究生",
                    "columnCategory": 1,
                    "columnId": "0c38c5f5-f431-4a10-b5ee-6816940abda3"
                },
                {
                    "name": "大学本科",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "大学本科",
                    "columnCategory": 1,
                    "columnId": "6b51fcc5-5bc4-4d0b-b900-d34aa30894cf"
                },
                {
                    "name": "大学专科",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "大学专科",
                    "columnCategory": 1,
                    "columnId": "198b8899-164e-467b-8167-158099164d11"
                },
                {
                    "name": "中专或高中及以下",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "中专或高中及以下",
                    "columnCategory": 1,
                    "columnId": "7accca2c-d615-4ceb-b2bc-3ff941965657"
                },
                {
                    "name": "党员",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "党员",
                    "columnCategory": 1,
                    "columnId": "f2751a6a-5bf6-42f2-a202-83cb85a4a640"
                },
                {
                    "name": "民主党派",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "民主党派",
                    "columnCategory": 1,
                    "columnId": "034927d0-ef5f-4a6c-a062-cc91d8bdcfc8"
                },
                {
                    "name": "群众",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "群众",
                    "columnCategory": 1,
                    "columnId": "8c0e1e17-e087-4064-a569-654313bc0292"
                },
                {
                    "name": "二十五岁及以下",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "二十五岁及以下",
                    "columnCategory": 1,
                    "columnId": "e5458fc0-8220-48aa-b098-602bf69d42bd"
                },
                {
                    "name": "二十六至三十五岁",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "二十六至三十五岁",
                    "columnCategory": 1,
                    "columnId": "adae1796-1f1f-4022-8602-cc9ed0bcade0"
                },
                {
                    "name": "三十六至四十五岁",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "三十六至四十五岁",
                    "columnCategory": 1,
                    "columnId": "6b505fca-e31c-48a6-9bd0-96e09c12d2a2"
                },
                {
                    "name": "四十六至五十五岁",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "四十六至五十五岁",
                    "columnCategory": 1,
                    "columnId": "876bc7d3-c707-4cb1-ac14-53b6395fa204"
                },
                {
                    "name": "五十六岁及以上",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "五十六岁及以上",
                    "columnCategory": 1,
                    "columnId": "7873be47-0310-43b8-81ea-c9cfee3f31b3"
                },
                {
                    "name": "正高级",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "正高级",
                    "columnCategory": 1,
                    "columnId": "163f7134-4e97-4203-b84d-9e882c6f1179"
                },
                {
                    "name": "副高级",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "副高级",
                    "columnCategory": 1,
                    "columnId": "f6bfd9a1-650a-4379-8646-9ccc7e1562ed"
                },
                {
                    "name": "中级",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "中级",
                    "columnCategory": 1,
                    "columnId": "8832e59c-10db-456f-b793-0e0da566cbb5"
                },
                {
                    "name": "初级",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "初级",
                    "columnCategory": 1,
                    "columnId": "7193a8cd-9493-44c2-a2a1-735de9afe104"
                },
                {
                    "name": "高级技师",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "高级技师",
                    "columnCategory": 1,
                    "columnId": "e5ce8127-85ab-4349-aede-7f8e334aea2d"
                },
                {
                    "name": "技师",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "技师",
                    "columnCategory": 1,
                    "columnId": "3b7bd6d3-0dd7-459e-8a15-b2daa785f96b"
                },
                {
                    "name": "高级工",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "高级工",
                    "columnCategory": 1,
                    "columnId": "6fd37046-69dc-4435-827f-a00992942643"
                },
                {
                    "name": "中级工",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "中级工",
                    "columnCategory": 1,
                    "columnId": "d725bad5-2199-4057-9df4-b6e98e8a0dbe"
                },
                {
                    "name": "初级工",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "初级工",
                    "columnCategory": 1,
                    "columnId": "61866d71-f9d8-4e02-801a-6c700d2b40a8"
                },
                {
                    "name": "孔雀团队",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "孔雀团队",
                    "columnCategory": 1,
                    "columnId": "ee1ceeac-9cc1-4541-8b2a-4a028e397578"
                },
                {
                    "name": "千人计划",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "千人计划",
                    "columnCategory": 1,
                    "columnId": "414b3f76-92f0-4e48-8a96-529a1cae25ab"
                },
                {
                    "name": "其他",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "其他",
                    "columnCategory": 1,
                    "columnId": "41412771-688a-4579-9686-509d1d11f475"
                },
                {
                    "name": "现有发明专利",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "现有发明专利",
                    "columnCategory": 1,
                    "columnId": "6a627adb-960c-4dea-acbe-2d3a5d9d7c97"
                },
                {
                    "name": "现有外观专利",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "现有外观专利",
                    "columnCategory": 1,
                    "columnId": "8bc6706d-e2bf-46c1-a34f-a38fe43fe4e0"
                },
                {
                    "name": "现有实用新型专利",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "现有实用新型专利",
                    "columnCategory": 1,
                    "columnId": "350fe3fb-40f3-40b6-95a3-3e11815b056b"
                },
                {
                    "name": "现有PCT国际专利",
                    "dbType": "DECIMAL",
                    "type": "NUM",
                    "typeCn": "数字",
                    "comment": "现有PCT国际专利",
                    "columnCategory": 1,
                    "columnId": "258d8f35-4122-43f8-9ca5-9f6d27ac7e9a"
                },
                {
                    "name": "省级以上科技进步奖",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "省级以上科技进步奖",
                    "columnCategory": 1,
                    "columnId": "7fd375a0-5715-47df-a9e2-29fef65dcfc8"
                },
                {
                    "name": "国际级以上科技进步奖",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "国际级以上科技进步奖",
                    "columnCategory": 1,
                    "columnId": "f641bfe5-bc38-4e09-bed8-034c79712493"
                },
                {
                    "name": "国家高新技术企业",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "国家高新技术企业",
                    "columnCategory": 1,
                    "columnId": "cccd9718-6bc2-4395-ba11-3c141165708b"
                },
                {
                    "name": "市级高新企业技术企业",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "市级高新企业技术企业",
                    "columnCategory": 1,
                    "columnId": "cda4880d-aacf-4eb9-a92d-638642e685c8"
                },
                {
                    "name": "双软",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "双软",
                    "columnCategory": 1,
                    "columnId": "aa2ca58d-dbe8-418f-95f3-d9e4ef9e4626"
                },
                {
                    "name": "承接863或973计划",
                    "dbType": "TEXT",
                    "type": "STR",
                    "typeCn": "文本",
                    "comment": "承接863或973计划",
                    "columnCategory": 1,
                    "columnId": "a06db154-ddb0-4d4d-b545-ae87852a07f6"
                }
            ]
        }
    ]
}
};
