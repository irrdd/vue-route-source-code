import createRouteMap from "./create-route-map";
import {
    createRoute
} from './history/base'
/**
 * 路由匹配器函数
 *  对路由配置进行扁平化处理
 *  addRoutes：动态添加路由匹配规则
 *  match：根据路径进行路由匹配
 * @param {*} routes 
 * @returns 返回路由匹配器的两个核心方法 addRoutes、match
 */

export default function createMatcher(routes) {
    // 将嵌套数组的路由配置，处理为便于匹配的扁平结构
    let {
        pathMap
    } = createRouteMap(routes) //函数私有变量，不暴露出去，只提供给match使用，
    console.log("pathMap", pathMap);
    // 创建 match 方法：根据路径进行路由匹配
    //闭包，match在函数内修改pathMap，所以createMatcher没有返回match
    function match(location) {
        let record = pathMap[location]
        // 匹配成功
        if (record) {
            return createRoute(record, {
                path: location,
            })
        }
        // 未匹配到
        return createRoute(null, {
            path: location,
        })
    }
    /**
     * 动态添加路由匹配规则
     *  将追加的路由规则进行扁平化处理
     */
    function addRoutes(routes) {
        createRouteMap(routes, pathMap)
    }
    return {
        addRoutes, // 添加路由
        match // 用于匹配路径
    }
    // 创建 addRoutes 方法：动态添加路由匹配规则
}