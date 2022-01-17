import _sequelize from "sequelize";
import Sequelize from 'sequelize';
const DataTypes = _sequelize.DataTypes;
import _cart from  "./cart.js";
import _category from  "./category.js";
import _line_items from  "./line_items.js";
import _orders from  "./orders.js";
import _products from  "./products.js";
import _products_images from  "./products_images.js";
import _token_refresh from  "./token_refresh.js";
import _users from  "./users.js";
import config from '../config/config'
import configHeroku from "../config/config-heroku.js";

// const sequelize = new Sequelize(
//   config.db_name,
//   config.db_username,
//   config.db_password,
//   {
//     dialect : "postgres",
//     pool : {
//       max : 5,
//       min : 0,
//       acquire :30000,
//       idle : 10000
//     }
//   }
// )

const sequelize = new Sequelize(configHeroku.database, configHeroku.username, configHeroku.password, {
  host: configHeroku.host,
  dialect: configHeroku.dialect,
  operatorsAliases: false,
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false 
    }
  },
  pool: {
    max: configHeroku.pool.max,
    min: configHeroku.pool.min,
    acquire: configHeroku.pool.acquire,
    idle: configHeroku.pool.idle
  }
});

const initModels=(sequelize)=> {
  const cart = _cart.init(sequelize, DataTypes);
  const category = _category.init(sequelize, DataTypes);
  const line_items = _line_items.init(sequelize, DataTypes);
  const orders = _orders.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);
  const products_images = _products_images.init(sequelize, DataTypes);
  const token_refresh = _token_refresh.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  line_items.belongsTo(cart, { as: "lite_cart", foreignKey: "lite_cart_id"});
  cart.hasMany(line_items, { as: "line_items", foreignKey: "lite_cart_id"});
  products.belongsTo(category, { as: "prod_cate", foreignKey: "prod_cate_id"});
  category.hasMany(products, { as: "products", foreignKey: "prod_cate_id"});
  products_images.belongsTo(products, { as: "prim_prod", foreignKey: "prim_prod_id"});
  products.hasMany(products_images, { as: "products_images", foreignKey: "prim_prod_id"});
  cart.belongsTo(users, { as: "cart_user", foreignKey: "cart_user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "cart_user_id"});
  orders.belongsTo(users, { as: "order_user", foreignKey: "order_user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "order_user_id"});
  products.belongsTo(users, { as: "prod_user", foreignKey: "prod_user_id"});
  users.hasMany(products, { as: "products", foreignKey: "prod_user_id"});

  return {
    cart,
    category,
    line_items,
    orders,
    products,
    products_images,
    token_refresh,
    users,
  };
}

const models = initModels(sequelize);

export default models; 
export {sequelize};
