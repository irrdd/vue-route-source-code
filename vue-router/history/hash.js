import { History } from './base'

function ensureSlash() {
    // location.hash 存在兼容性问题，可根据完整 URL 判断是否包含'/'
    if (window.location.hash) {
        return
    }
    window.location.hash = '/'
}

class HashHistory extends History {
    constructor(router) {
        super(router) // 调用父类构造方法，并将 router 实例传给父类
        this.router = router // 存储 router 实例，共内部使用
            // Hash 模式下，对URL路径进行处理，确保包含'/'
        ensureSlash()
    }
    getCurrentLocation() {
        //获取路径的 hash 值
        return getHash()
    }
    setupListeners() {
        // 当 hash 值变化时，获取新的 hash 值，并进行匹配跳转
        window.addEventListener('hashchange', () => {
            this.transitionTo(getHash())
        })
    }

}
export default HashHistory