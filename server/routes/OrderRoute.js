import { Router } from "express";
import IndexController from "../controller/IndexController";

const router = Router();

// method post
router.post("/createOrder",
    IndexController.CartCtrl.summaryCart,
    IndexController.OrderCtrl.getOrderNumber,
    IndexController.OrderCtrl.createOrder,
    IndexController.ProductCtrl.updateStock,
    IndexController.CartCtrl.updateItems,
    IndexController.CartCtrl.updateCart
    );
router.get("/",IndexController.OrderCtrl.findAllRows)
    
export default router;