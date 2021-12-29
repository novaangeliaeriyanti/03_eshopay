import { Router } from "express";
import IndexController from "../controller/IndexController";
import UpDonwloadHelper from "../middleware/UploadDonwloadHelper";

const router = Router();

router.get("/", IndexController.ProductCtrl.findAllRows);
router.get("/images/:filename", UpDonwloadHelper.showProductImage);

router.post(
  "/",
  UpDonwloadHelper.uploadSingleFile,
  IndexController.ProductCtrl.createProduct
);

//upload multiple images
router.post(
  "/multiple",
  UpDonwloadHelper.uploadMultipleFile,
  IndexController.ProductImageCtrl.createProductImage
);

router.put("/:id", IndexController.ProductCtrl.updateProduct);
router.delete("/:id", IndexController.ProductCtrl.deleteRow);

export default router;
