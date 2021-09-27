import VueRouter from '../../../vue-router/index'

import Vue from 'vue'
// import VueRouter from 'vue-router'

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'hash',
    routes: [{
        path: '/mine', // 路径
        name: '', // 名字
        component: () =>
            import ('@/components/HelloWorld.vue') // 路径显示的组件
    }]
})