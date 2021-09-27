


export let _Vue

export default function install(Vue,options){
    _Vue = Vue
    Vue.component('router-link',{
        render:h=>h('a',{},'')
    })
    Vue.component('router-view',{
        render:h=>h('dev',{},'')
    })
    Vue.prototype.$route={}
    Vue.prototype.$router={}
}