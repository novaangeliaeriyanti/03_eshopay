"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const createRow = async (req, res) => {
  const {
    cate_name
  } = req.body;
  const result = await req.context.models.category.create({
    cate_name: cate_name
  });
  return res.send(result);
};

const findAllRows = async (req, res, next) => {
  try {
    const result = await req.context.models.category.findAll();
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

const findRowById = async (req, res) => {
  const result = await req.context.models.category.findByPk(req.params.id);
  return res.send(result);
};

const update = async (req, res) => {
  try {
    const result = await req.context.models.category.update({
      cate_name: req.body.cate_name
    }, {
      returning: true,
      where: {
        cate_id: req.params.id
      }
    });
    return res.send(result);
  } catch (error) {
    return res.status(404).send("no data update");
  }
};

const deleteRow = async (req, res) => {
  try {
    const result = await req.context.models.category.destroy({
      where: {
        cate_id: req.params.id
      }
    });
    res.send("delete" + result + "rows");
  } catch (error) {
    return res.status(404).send("no data found");
  }
};

var _default = {
  createRow,
  findAllRows,
  findRowById,
  update,
  deleteRow
};
exports.default = _default;
//# sourceMappingURL=CategoryController.js.map