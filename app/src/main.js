import Vue from 'vue'
import App from './App.vue'
import router from '/router'
Vue.config.productionTip = false

new Vue({
  router, //将路由实例注册到Vue实例中
  render: h => h(App),
}).$mount('#app')
