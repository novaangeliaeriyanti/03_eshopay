"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const isCartOpen = async (req, res, next) => {
  const {
    user_id,
    prod_id,
    price,
    qty
  } = req.body;

  try {
    const result = await req.context.models.cart.findOrCreate({
      where: {
        cart_user_id: parseInt(user_id),
        cart_status: "OPEN"
      },
      defaults: {
        cart_created_on: new Date(),
        cart_status: "OPEN",
        cart_user_id: user_id
      }
    });
    req.carts = {
      cart: result[0].dataValues,
      product: {
        prod_id,
        price,
        qty
      }
    };
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const saveLineItem = async (req, res) => {
  const {
    cart,
    product
  } = req.carts; // create product

  try {
    const result = await req.context.models.line_items.findOrCreate({
      where: {
        lite_cart_id: cart.cart_id,
        lite_prod_id: product.prod_id
      },
      defaults: {
        lite_cart_id: parseInt(cart.cart_id),
        lite_prod_id: parseInt(product.prod_id),
        lite_price: parseFloat(product.price),
        lite_qty: parseInt(product.qty),
        lite_subtotal: parseInt(product.qty) * parseFloat(product.price),
        lite_status: "OPEN",
        lite_order_name: null
      }
    }); //update product if data already exist

    if (result[1] === false) {
      try {
        await req.context.models.line_items.update({
          lite_price: parseFloat(product.price),
          lite_qty: parseInt(product.qty),
          lite_subtotal: parseInt(product.qty) * parseFloat(product.price)
        }, {
          returning: true,
          where: {
            lite_cart_id: cart.cart_id,
            lite_prod_id: product.prod_id
          }
        });
        res.send({
          message: "cart has been update"
        });
      } catch (error) {
        res.status(404).json({
          message: error.message
        });
      }
    } else {
      res.send({
        message: "cart has been add"
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const checkout = async (req, res, next) => {
  const {
    cart_id,
    prod_id,
    price,
    qty
  } = req.body;

  try {
    await req.context.models.line_items.update({
      lite_price: parseFloat(price),
      lite_qty: parseInt(qty),
      lite_subtotal: parseInt(qty) * parseFloat(price),
      lite_status: "CHECKOUT"
    }, {
      returning: true,
      where: {
        lite_cart_id: cart_id,
        lite_prod_id: prod_id
      }
    });
    req.status = "CHECKOUT";
    req.cartId = cart_id;
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const checkoutMultiple = async (req, res, next) => {
  const {
    cart_id,
    product
  } = req.body;

  try {
    //const result= product[1].qty;
    for (let j = 0; j < product.length; j++) {
      await req.context.models.line_items.update({
        lite_price: parseFloat(product[j].price),
        lite_qty: parseInt(product[j].qty),
        lite_subtotal: parseInt(product[j].qty) * parseFloat(product[j].price),
        lite_status: "CHECKOUT"
      }, {
        returning: true,
        where: {
          lite_cart_id: cart_id,
          lite_prod_id: parseInt(product[j].prod_id)
        }
      });
    }

    req.status = "CHECKOUT";
    req.cartId = cart_id;
    next();
  } catch (error) {
    return res.status(404).json({
      message: error.message
    });
  }
};

const updateItems = async (req, res, next) => {
  const {
    cart_id
  } = req.body;
  const order_name = req.order_name;
  const lite_status = req.status;

  try {
    await req.context.models.line_items.update({
      lite_order_name: order_name,
      lite_status: lite_status
    }, {
      returning: true,
      where: {
        lite_cart_id: parseInt(cart_id),
        lite_status: "CHECKOUT"
      }
    });
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const updateCart = async (req, res) => {
  const {
    cart_id
  } = req.body;
  const cart_status = req.status; //update cart status

  try {
    const result = await req.context.models.cart.findOne({
      where: {
        cart_id: cart_id
      }
    });

    if (result.dataValues.cart_status === "OPEN") {
      await req.context.models.cart.update({
        cart_status: cart_status
      }, {
        returning: true,
        where: {
          cart_id: parseInt(cart_id)
        }
      });
    } else {
      await req.context.models.cart.update({
        cart_status: "CLOSED"
      }, {
        returning: true,
        where: {
          cart_id: parseInt(cart_id)
        }
      });
    }

    res.send({
      message: "data has been update"
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const summaryCart = async (req, res, next) => {
  const {
    cart_id
  } = req.body;

  try {
    const result = await req.context.models.line_items.findAll({
      where: {
        lite_cart_id: cart_id
      }
    });
    const lineItems = result;
    const totalQty = lineItems.reduce((total, el) => total + el.lite_qty, 0);
    const subTotal = lineItems.reduce((total, el) => total + parseFloat(el.lite_subtotal), 0);
    req.summaryCart = {
      summary: {
        totalQty: totalQty,
        subTotal: subTotal
      }
    };
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
};

const findAllRows = async (req, res, next) => {
  try {
    const result = await req.context.models.cart.findAll();
    return res.send(result);
  } catch (error) {
    return res.send(error);
  }
};

var _default = {
  isCartOpen,
  saveLineItem,
  checkout,
  updateCart,
  summaryCart,
  checkoutMultiple,
  updateItems,
  findAllRows
};
exports.default = _default;
//# sourceMappingURL=CartController.js.map