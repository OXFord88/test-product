/**
 * @file vue-resource 配置
 * @author lintianlong@baidu.com
 */

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueResourceMock from 'vue-resource-mock';

export default function http() {
    Vue.use(VueResource);

    Vue.http.options.root = 'http://hkg02-dx-pastalog03.hkg02.baidu.com:8081/ipl_panel/api';
    // Vue.http.options.emulateHTTP = true
    Vue.http.options.emulateJSON = true;

    if (process.env.NODE_ENV !== 'production') {
        Vue.use(VueResourceMock, require('./mockdata').default);
    }

    Vue.http.interceptors.push((request, next) => {
        // modify request
        // continue to next interceptor
        next(response => {
            if (!response.ok) {
                // toast message like error or warning, or do other things you like
                // console.log(Vue);
                Vue.prototype.$message({
                    showClose: true,
                    message: `请求 ${ response.url } 错误!`,
                    type: 'error'
                });
            }

            // modify response
            return {
                ...response.body,
                ok: response.ok
            };
        });
    });
}
// export default {}
