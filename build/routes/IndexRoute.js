"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CategoryRoute = _interopRequireDefault(require("./CategoryRoute"));

var _ProductRoute = _interopRequireDefault(require("./ProductRoute"));

var _AuthRoute = _interopRequireDefault(require("./AuthRoute"));

var _CartRoute = _interopRequireDefault(require("./CartRoute"));

var _OrderRoute = _interopRequireDefault(require("./OrderRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  categoryRoute: _CategoryRoute.default,
  authRoute: _AuthRoute.default,
  productRoute: _ProductRoute.default,
  cartRoute: _CartRoute.default,
  orderRoute: _OrderRoute.default
};
exports.default = _default;
//# sourceMappingURL=IndexRoute.js.map