import { Router } from "express";
import IndexController from "../controller/IndexController";
const router = Router();

// method post
router.post(
  "/addToCart",
  IndexController.CartCtrl.isCartOpen,
  IndexController.CartCtrl.saveLineItem
);

router.post(
  "/checkout",
  IndexController.CartCtrl.checkout,
  IndexController.CartCtrl.updateCart
);

router.post(
  "/checkout/multiple",
  IndexController.CartCtrl.checkoutMultiple,
  IndexController.CartCtrl.updateCart
);

//method get
router.get("/", IndexController.CartCtrl.findAllRows);

export default router;
