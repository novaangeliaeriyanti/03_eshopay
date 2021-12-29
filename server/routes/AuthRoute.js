import { Router } from "express";
import authJWT from "../middleware/authJWT";
import IndexController from "../controller/IndexController";

const router = Router();

router.post("/signin",authJWT.authenticate,authJWT.login);
router.post("/signup",IndexController.UserCtrl.signup);
//router.post("/signin",IndexController.UserCtrl.signin);

router.put("/:id", IndexController.UserCtrl.update);
router.get("/:id",IndexController.UserCtrl.findOne);
router.get("/",IndexController.UserCtrl.findAll);
router.delete("/:id",IndexController.UserCtrl.deleteRow);

export default router;