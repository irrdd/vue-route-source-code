import install from './install'
import createMatcher from './create-match'
import HashHistory from './history/hash'
import BrowserHistory from './history/history'

class VueRouter {
    constructor(options) { //传入路由配置对象
            // 路由匹配器-处理路由配置：将树形结构的嵌套数组转化为扁平化结构的对象，便于后续的路由匹配
            // 路由匹配器返回两个核心方法：match、addRoutes
            this.matcher = createMatcher(options.routes || [])
                // 根据不同的路由模式，生成对应的处理实例
            options.mode = options.mode || 'hash' // 默认hash模式
            switch (options.mode) {
                case 'hash':
                    this.history = new HashHistory(this)
                    break
                case 'history':
                    this.history = new BrowserHistory(this)
                    break
            }

            console.log(options);
        }
        // 监听 hash 值变化,跳转到对应的路径中
    init(app) {
        // 当前的history实例：可能是HashHistory，也可能是BrowserHistory；
        const history = this.history
            // 设置监听器：内部调用的是不同子类中的实现
        const setupListener = () => {
                history.setupListener()
            }
            // 初始化时，获取当前hash值进行跳转, 并设置监听器
        history.transitionTo(
            history.getCurrentLocation(),
            setupListener
        )
    }
}
// 路由初始化方法，供 install 安装时调用

VueRouter.install = install
export default VueRouter