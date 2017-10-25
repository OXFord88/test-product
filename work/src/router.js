
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            component: resolve => require(['./page/Home.vue'], resolve)
        }, {
            path: '/count',
            component: resolve => require(['./page/count.vue'], resolve)
        }, {
            path: '/login',
            component: resolve => require(['./page/login.vue'], resolve)
        }
        /* {
            path: '/xx',
            component: resolve => require(['./page/xx.vue'], resolve),
            children: [{
              path: '/1',
              component: resolve => require(['./page/1.vue'], resolve)
            }, {
              path: '/2',
              component: resolve => require(['./page/2.vue'], resolve)
            }]
          }*/
    ]
});
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});
export default router;