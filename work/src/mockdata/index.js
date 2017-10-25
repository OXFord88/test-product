/**
 * @file 模拟数据配置
 */
export default {
    ['GET Records/getRecordList'](/*pathMatch, query, request*/) {
        let body = {
            data: [{
                grossWeight: 100,
                tareWeight: 10,
                netweight: 30,
                price: 10,
                totalprice: 100,
                sundry: 100,
                time: '2018-01-01',
                id: 13
            }, {
                grossWeight: 100,
                tareWeight: 10,
                netweight: 30,
                price: 10,
                totalprice: 100,
                sundry: 100,
                time: '2018-01-03',
                id: 13
            }, {
                grossWeight: 100,
                tareWeight: 10,
                netweight: 30,
                price: 10,
                totalprice: 100,
                sundry: 100,
                time: '2018-01-03',
                id: 13
            }, {
                grossWeight: 100,
                tareWeight: 10,
                netweight: 30,
                price: 10,
                totalprice: 100,
                sundry: 100,
                time: '2018-01-03',
                id: 13
            }, {
                grossWeight: 100,
                tareWeight: 10,
                netweight: 30,
                price: 10,
                totalprice: 100,
                sundry: 100,
                time: '2018-01-03',
                id: 13
            }]
        };
        return {
            body: body,
            status: 200,
            statusText: 'OK',
            headers: {},
            deylay: 500
        };
    },
    ['GET Records/addOrModify']: {
        name: '该数据的名称',
        eventDay: '该数据对应的逻辑时间',
        uri: '该数据的uri'
    }
    // ['GET Records/getRecordList']: {
    //     grossWeight: 100,
    //     tareWeight: 10,
    //     netweight: 30,
    //     price: 10,
    //     totalprice: 100,
    //     sundry: 100,
    //     time: '2018-01-01',
    //     id: 13
    // }
};