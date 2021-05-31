
var Vue

class VueRouter {
  constructor (options) {
    this.$options = options
  }
}
VueRouter.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin ({
    beforeCreated () {
      console.log(this)
    }
  })
}
export default VueRouter
