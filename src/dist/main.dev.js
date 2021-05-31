"use strict";

var _create = _interopRequireDefault(require("./utils/create"));

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _krouter = _interopRequireDefault(require("./krouter"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].prototype.$bus = new _vue["default"]();
_vue["default"].config.productionTip = false;
_vue["default"].prototype.$create = _create["default"];
new _vue["default"]({
  router: _krouter["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');