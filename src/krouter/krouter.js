
var Vue

class VueRouter {
  constructor (options) {
    this.$options = options
  }
}
VueRouter.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      console.log(this)
    }
  })
  // Vue.mixin({
  //   beforeCreate () {
  //     console.log(this)
  //     // 此处this指的是组件实例
  //     if (this.$options.router) {
  //       Vue.prototype.$router = this.$options.router;
  //     }
  //   },
  // });
}
export default VueRouter
