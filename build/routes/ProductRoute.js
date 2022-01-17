"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _IndexController = _interopRequireDefault(require("../controller/IndexController"));

var _UploadDonwloadHelper = _interopRequireDefault(require("../middleware/UploadDonwloadHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.get("/", _IndexController.default.ProductCtrl.findAllRows);
router.get("/images/:filename", _UploadDonwloadHelper.default.showProductImage);
router.post("/", _UploadDonwloadHelper.default.uploadSingleFile, _IndexController.default.ProductCtrl.createProduct); //upload multiple images

router.post("/multiple", _UploadDonwloadHelper.default.uploadMultipleFile, _IndexController.default.ProductImageCtrl.createProductImage);
router.put("/:id", _IndexController.default.ProductCtrl.updateProduct);
router.delete("/:id", _IndexController.default.ProductCtrl.deleteRow);
var _default = router;
exports.default = _default;
//# sourceMappingURL=ProductRoute.js.map