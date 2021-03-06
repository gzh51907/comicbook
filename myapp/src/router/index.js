import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//令vue对象使用vue-router
Vue.use(VueRouter);
//引入页面组件

import shouye from '../components/shouye.vue';
import genxin from '../components/genxin.vue';
import shujia from '../components/shujia.vue';
import wode from '../components/wode.vue';
import login from '../components/login.vue';
import loging from '../components/loging.vue';
import nologin from '../components/nologin.vue';
import reg from '../components/reg.vue';


let router = new VueRouter({
    routes: [
        //首页
        {
            name: 'shouye',
            path: '/shouye',
            component: shouye
        },
        {
            name: 'genxin',
            path: '/genxin',
            component: genxin
        },
        {
            name: 'shujia',
            path: '/shujia',
            component: shujia
        },
        {
            name: 'wode',
            path: '/wode',
            component: wode
        }, {
            path: '/',
            redirect: '/shouye'
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/loging',
            component: loging
        },
        {
            path: '/nologin',
            component: nologin
        },
        {
            path: '/reg',
            component: reg
        },

    ]
});
export default router;