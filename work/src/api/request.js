
import Vue from 'vue';

export default {

    getAllList(params) {

        return Vue.http.get('Records/getRecordList', {
            params
        })
            .then(response => response);

    },
    addOrModify(params) {
        return Vue.http.get('Records/addOrModify', {
            params
        })
            .then(response => response);
    }
};
