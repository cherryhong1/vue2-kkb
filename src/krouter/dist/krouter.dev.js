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
    beforeCreated: function beforeCreated() {
      console.log(this);
    }
  });
};

var _default = VueRouter;
exports["default"] = _default;