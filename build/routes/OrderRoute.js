"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _IndexController = _interopRequireDefault(require("../controller/IndexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // method post

router.post("/createOrder", _IndexController.default.CartCtrl.summaryCart, _IndexController.default.OrderCtrl.getOrderNumber, _IndexController.default.OrderCtrl.createOrder, _IndexController.default.ProductCtrl.updateStock, _IndexController.default.CartCtrl.updateItems, _IndexController.default.CartCtrl.updateCart);
router.get("/", _IndexController.default.OrderCtrl.findAllRows);
var _default = router;
exports.default = _default;
//# sourceMappingURL=OrderRoute.js.map