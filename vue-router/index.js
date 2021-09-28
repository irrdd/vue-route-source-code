import install from './install'
import createMatcher from './create-match'

class VueRouter {
    constructor(options) { //传入路由配置对象
            // 路由匹配器-处理路由配置：将树形结构的嵌套数组转化为扁平化结构的对象，便于后续的路由匹配
            // 路由匹配器返回两个核心方法：match、addRoutes
            this.match = createMatcher(options.routes || [])
        }
        // 路由初始化方法，供 install 安装时调用
    init(app) {

    }
}

VueRouter.install = install
export default VueRouter