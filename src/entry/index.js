import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUi from 'element-ui';
// import axios from 'axios';

// import '../style/common.scss';

const App = require('../pages/App.vue').default;
import Index from '../pages/Index.vue';
import List from '../pages/List.vue';

import 'element-ui/lib/theme-chalk/index.css';

// 将VueRouter注册到Vue上
Vue.use(VueRouter);
// Vue.use(ElementUi);
// 将axios挂载到Vue原型链上，方便使用
// Vue.prototype.$ajax = axios;

const router = new VueRouter({
    routes: [{
            path: '/',
            component: Index
        },
        {
            path: '/list',
            component: List
        }
    ]
});

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
