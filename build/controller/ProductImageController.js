"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createProductImage = async (req, res, next) => {
  const {
    files,
    fields
  } = req.fileAttrb;
  const prodId = parseInt(fields[0].value);
  let prodImage = {
    prim_filename: undefined,
    prim_filesize: undefined,
    prim_filetype: undefined,
    prim_primary: false,
    prim_prod_id: undefined
  };
  const listImages = [];
  files.forEach(el => {
    prodImage = {
      prim_filename: el.file.newFilename,
      prim_filesize: el.file.size,
      prim_filetype: el.file.mimetype,
      prim_primary: false,
      prim_prod_id: prodId
    };
    listImages.push(prodImage);
  }); //insert into product_images

  try {
    const result = await req.context.models.products_images.bulkCreate(listImages);
    res.send(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message
    });
  }
};

const findProdImagesById = async (req, res) => {
  const prodId = req.prodId;

  try {
    const result = await req.context.models.products_images.findAll({
      where: {
        prim_prod_id: parseInt(prodId)
      }
    });
    return res.send(result);
  } catch (error) {
    return res.send(404).send(error);
  }
};

var _default = {
  findProdImagesById,
  createProductImage
};
exports.default = _default;
//# sourceMappingURL=ProductImageController.js.map