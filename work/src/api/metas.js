
import Vue from 'vue';

export default {

    getMetas(params) {

        return Vue.http.get('data_src_metas', {
            params
        })
            .then(response => response.respData);

    },
    addMeta(params) {
        return Vue.http.post(`data_src_meta/${ params.packageName}`, {
            params
        })
            .then(response => response.respData);
    },

    consumeMeta(params) {
        return Vue.http.post(`data_src_meta/${params.id}/consume`)
            .then(response => response.respData);
    },
    getPackageNames(params) {
        return Vue.http.get('products', {params})
            .then(response => response.respData);
    }

    // other methods
};
