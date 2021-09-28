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
    // 创建 match 方法：根据路径进行路由匹配
    // 创建 addRoutes 方法：动态添加路由匹配规则
}