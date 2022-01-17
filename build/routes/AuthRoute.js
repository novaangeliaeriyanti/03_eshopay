"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _authJWT = _interopRequireDefault(require("../middleware/authJWT"));

var _IndexController = _interopRequireDefault(require("../controller/IndexController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post("/signin", _authJWT.default.authenticate, _authJWT.default.login);
router.post("/signup", _IndexController.default.UserCtrl.signup); //router.post("/signin",IndexController.UserCtrl.signin);

router.put("/:id", _IndexController.default.UserCtrl.update);
router.get("/:id", _IndexController.default.UserCtrl.findOne);
router.get("/", _IndexController.default.UserCtrl.findAll);
router.delete("/:id", _IndexController.default.UserCtrl.deleteRow);
var _default = router;
exports.default = _default;
//# sourceMappingURL=AuthRoute.js.map