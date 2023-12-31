/**
 * 通过路由记录，逐层进行路由匹配
 * @param {*} record    路由记录
 * @param {*} location  路径
 * @returns 逐层匹配后的全部匹配结果
 */
function createRoute(record, location) {
    let res = []
    if (record) {
        while (record) {
            res.unshift(record)
            record = record.parent
        }
    }
    return {
        ...location,
        matched: res,
    }
}
/**
 * 路由基类
 */
class History {

    constructor(router) {
        this.router = router; // 存储子类传入的 router 实例
        this.current = {}
        this.current.path = ''
    }

    // 根据路径进行路由匹配，并添加路径改变的监听器
    /**
     * 路由跳转方法：
     *  每次跳转时都需要知道 from 和 to
     *  响应式数据：当路径变化时，视图刷新
     * @param {*}} location 
     * @param {*} onComplete 
     */
    transitionTo(location, onComplete) {
        // 根据路径进行路由匹配；route :当前匹配结果
        let route = this.router.match(location)
        
        // 查重：如果前后两次路径相同，且路由匹配的结果也相同，那么本次无需进行任何操作
        if (location == this.current.path && route.matched.length == this.current.matched.length) { // 防止重复跳转
            return
        }

        this.current = route // 每次路由切换时，都会更改current属性
        // 使用当前路由route更新current，并执行其他回调
        this.updateRoute(route)
        onComplete && onComplete();
    }
    listen(cb) {
        // 存储路由变化时的更新回调函数,即 app._route = route;
        this.cb = cb
    }
    /**
     * 路由变化时的相关操作：
     *  1，更新 current;
     *  2，触发_route的响应式更新;
     * @param {*} route 当前匹配到的路由结果
     */
    updateRoute(route) {
        // 每次路由切换时，都会更改current属性
        this.current = route
        // 调用保存的更新回调，触发app._route的响应式更新
        this.cb && this.cb(route)
    }
}
export {
    History,
    createRoute
}