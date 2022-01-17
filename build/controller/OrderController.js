"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _initModels = require("../models/init-models");

const getOrderNumber = async (req, res, next) => {
  try {
    const result = await _initModels.sequelize.query("select 'ORD-'||to_char(now(),'DDMMYYY')||lpad(nextval('order_name_seq')||'',4,'0') as ordername", {
      type: _initModels.sequelize.QueryTypes.SELECT
    });
    req.orderName = result[0].ordername;
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const createOrder = async (req, res, next) => {
  const {
    summary
  } = req.summaryCart;
  const {
    order_discount,
    order_tax,
    order_city,
    order_address,
    order_status,
    order_user_id
  } = req.body;

  try {
    const result = await req.context.models.orders.create({
      order_name: req.orderName,
      order_created_on: new Date(),
      order_total_qty: summary.totalQty,
      order_subtotal: summary.subTotal,
      order_discount: order_discount,
      order_tax: order_tax,
      order_city: order_city,
      order_address: order_address,
      order_status: order_status,
      order_total_due: summary.subTotal,
      order_user_id: parseInt(order_user_id)
    }); //res.send(result)

    req.order_name = result.dataValues.order_name;
    req.status = "ORDERED";
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const findAllRows = async (req, res, next) => {
  try {
    const result = await req.context.models.orders.findAll();
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

var _default = {
  getOrderNumber,
  createOrder,
  findAllRows
};
exports.default = _default;
//# sourceMappingURL=OrderController.js.map