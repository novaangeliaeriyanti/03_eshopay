"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _IndexController = _interopRequireDefault(require("../controller/IndexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/", _IndexController.default.CategoryCtrl.findAllRows);
router.get("/:id", _IndexController.default.CategoryCtrl.findRowById);
router.post("/", _IndexController.default.CategoryCtrl.createRow);
router.put("/:id", _IndexController.default.CategoryCtrl.update);
router.delete("/:id", _IndexController.default.CategoryCtrl.deleteRow);
var _default = router;
exports.default = _default;
//# sourceMappingURL=CategoryRoute.js.map