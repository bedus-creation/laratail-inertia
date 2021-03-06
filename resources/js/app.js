require('./bootstrap');

import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue';
require("@/Utils/Flash");

Vue.use(plugin)

// Components
Vue.component('FileInput', () => import('@/Components/FileInput'));

const el = document.getElementById('app')

new Vue({
    render: h => h(App, {
        props: {
            initialPage: JSON.parse(el.dataset.page),
            resolveComponent: name => require(`./Pages/${name}`).default,
        },
    }),
}).$mount(el)
