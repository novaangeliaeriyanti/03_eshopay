"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UploadDonwloadHelper = _interopRequireDefault(require("../middleware/UploadDonwloadHelper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const findAllRows = async (req, res) => {
  try {
    const result = await req.context.models.products.findAll();
    return res.send(result);
  } catch (error) {
    return res.sendStatus(404).send("no data found");
  }
};

const createProduct = async (req, res) => {
  const {
    files,
    fields
  } = req.fileAttrb;

  try {
    const result = await req.context.models.products.create({
      prod_name: fields[0].value,
      prod_price: parseInt(fields[1].value),
      prod_stock: parseInt(fields[2].value),
      prod_desc: fields[3].value,
      prod_cate_id: parseInt(fields[4].value),
      prod_rating: parseInt(fields[5].value),
      prod_views: parseInt(fields[6].value),
      prod_user_id: parseInt(fields[7].value),
      prod_url_image: files[0].file.newFilename
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).json({
      message: error.message
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const singlePart = await _UploadDonwloadHelper.default.uploadSingleFile(req);
    const {
      attrb: {
        file,
        fields,
        filename
      },
      status: {
        status
      }
    } = singlePart;

    if (status === 'succeed') {
      try {
        const result = await req.context.models.products.update({
          prod_name: fields.prod_name,
          prod_price: fields.prod_price,
          prod_stock: parseInt(fields.prod_stock),
          prod_desc: fields.prod_desc,
          prod_cate_id: parseInt(fields.prod_cate_id),
          prod_rating: parseInt(fields.prod_rating),
          prod_view_count: parseInt(fields.prod_view_count),
          prod_user_id: parseInt(fields.prod_user_id),
          prod_urlimage: filename
        }, {
          returning: true,
          where: {
            prod_id: parseInt(req.params.id)
          }
        });
        return res.send(result);
      } catch (error) {
        return res.send(404).send(error);
      }
    }

    return res.send(status);
  } catch (error) {
    return res.send(error);
  }
};

const updateStock = async (req, res, next) => {
  const {
    cart_id
  } = req.body;

  try {
    const result = await req.context.models.line_items.findAll({
      where: {
        lite_cart_id: cart_id
      }
    });

    for (let i = 0; i < result.length; i++) {
      const result1 = await req.context.models.products.findOne({
        where: {
          prod_id: result[i].dataValues.lite_prod_id
        }
      });
      await req.context.models.products.update({
        prod_stock: parseInt(result1.dataValues.prod_stock) - parseInt(result[i].dataValues.lite_qty)
      }, {
        returning: true,
        where: {
          prod_id: parseInt(result[i].dataValues.lite_prod_id)
        }
      });
    }

    next();
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteRow = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await req.context.models.products.destroy({
      where: {
        prod_id: parseInt(id)
      }
    });
    return res.send("delete " + result + " rows.");
  } catch (error) {
    return res.sendStatus(404).send("Data not found.");
  }
};

var _default = {
  findAllRows,
  createProduct,
  updateProduct,
  deleteRow,
  updateStock
};
exports.default = _default;
//# sourceMappingURL=ProductController.js.map