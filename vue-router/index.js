import install from './install'

class VueRouter {
    constructor(options) { //传入路由配置对象
        console.log(options);
    }
}

VueRouter.install = install
export default VueRouter