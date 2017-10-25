

import Vue from 'vue';
import App from './page/App';
import router from './router';
// import store from './store';
import http from './http';
import elementui from './elementui';
// import {sync} from 'vuex-router-sync';
import './assets/styles/common.css';

// Reloading extracted css with hot module replacement
// https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/30#
/*
if (process.env.NODE_ENV !== 'production') {
    window.addEventListener('message', function (event) {
        if (typeof event.data === 'string' && event.data.indexOf('webpackHotUpdate') === 0) {
            console.log('Reloading css...');
            document.querySelectorAll('link[href][rel=stylesheet]').forEach(link => {
                const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
                link.href = nextStyleHref;
            });
        }

    }, false);
}
*/

// elementui
elementui();

// vue-resource
http();

// sync(store, router); // done.

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app');