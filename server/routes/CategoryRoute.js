import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();
router.get("/",IndexController.CategoryCtrl.findAllRows);
router.get("/:id",IndexController.CategoryCtrl.findRowById);
router.post("/",IndexController.CategoryCtrl.createRow);
export default router;