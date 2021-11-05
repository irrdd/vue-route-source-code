import {
    History
} from './base'

function ensureSlash() {
    // location.hash 存在兼容性问题，可根据完整 URL 判断是否包含'/'
    if (window.location.hash) {
        return
    }
    window.location.hash = '/'
}
function  getHash(){

    return window.location.hash.replace('#','')
}

class HashHistory extends History {
    constructor(router) {
        super(router) // 调用父类构造方法，并将 router 实例传给父类
        this.router = router // 存储 router 实例，共内部使用
        // Hash 模式下，对URL路径进行处理，确保包含'/'
        ensureSlash()
    }
    // transitionTo(location, onComplete) {
    //     // 根据路径进行路由匹配；route :当前匹配结果
    //     let route = this.router.match(location);
    //     // 查重：如果前后两次路径相同，且路由匹配的结果也相同，那么本次无需进行任何操作
    //     if (location == this.current.path && route.matched.length == this.current.matched.length) { // 防止重复跳转
    //       return
    //     }
    //     // 使用当前路由route更新current，并执行其他回调
    //     this.updateRoute(route);
    //     onComplete && onComplete();
    //   }
    getCurrentLocation() {
        //获取路径的 hash 值
        return getHash()
    }
    setupListener() {
        // 当 hash 值变化时，获取新的 hash 值，并进行匹配跳转
        window.addEventListener('hashchange', () => {
            this.transitionTo(getHash())
        })
    }
    push(location) {
        // 跳转路径，并在跳转完成后更新 hash 值；
        // transitionTo内部会查重：hash 值变化虽会再次跳转，但不会更新current属性;
        this.transitionTo(location, () => {
            window.location.hash = location // 更新hash值
        })
    }
   

}
export default HashHistory