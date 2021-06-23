"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vue;

var VueRouter = function VueRouter(options) {
  _classCallCheck(this, VueRouter);

  this.$options = options;
};

VueRouter.install = function (_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate: function beforeCreate() {
      console.log(this);
    }
  }); // Vue.mixin({
  //   beforeCreate () {
  //     console.log(this)
  //     // 此处this指的是组件实例
  //     if (this.$options.router) {
  //       Vue.prototype.$router = this.$options.router;
  //     }
  //   },
  // });
};

var _default = VueRouter;
exports["default"] = _default;