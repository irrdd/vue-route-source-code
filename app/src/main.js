import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router'
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router: VueRouter, //将路由实例注册到Vue实例中
    render: h => h(App),
}).$mount('#app')