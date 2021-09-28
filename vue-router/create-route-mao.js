/**
 * 路由配置扁平化处理
 *  支持初始化和追加两种情况
 * @param {*} routes     路由实例中的路由配置
 * @param {*} oldPathMap 路由规则映射表（扁平化结构）
 * @returns 新的路由规则映射表（扁平化结构）
 */

export default function createRouteMap(routes, oldPathMap) {

    // 拿到当前已有的映射关系
    let pathMap = oldPathMap || Object.create(null);
    // 将路由配置 routes 依次加入到 pathMap 路由规则的扁平化映射表
    routes.forEach(route => {
        addRouteRecord(route, pathMap)
    });

    return {
        pathMap
    }
}
/**
 * 添加一个路由记录（递归当前的树形路由配置）
 *  先序深度遍历：先把当前路由放进去，再处理他的子路由
 * @param {*} route   原始路由记录
 * @param {*} pathMap 路由规则的扁平化映射表
 * @param {*} parent  当前路由所属的父路由对象
 */
function addRouteRecord(route, pathMap, parent) {

}