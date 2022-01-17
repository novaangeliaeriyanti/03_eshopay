"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CategoryController = _interopRequireDefault(require("./CategoryController"));

var _ProductController = _interopRequireDefault(require("./ProductController"));

var _ProductImageController = _interopRequireDefault(require("./ProductImageController"));

var _UserController = _interopRequireDefault(require("./UserController"));

var _CartController = _interopRequireDefault(require("./CartController"));

var _OrderController = _interopRequireDefault(require("./OrderController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  CategoryCtrl: _CategoryController.default,
  ProductCtrl: _ProductController.default,
  ProductImageCtrl: _ProductImageController.default,
  UserCtrl: _UserController.default,
  CartCtrl: _CartController.default,
  OrderCtrl: _OrderController.default
};
exports.default = _default;
//# sourceMappingURL=IndexController.js.map