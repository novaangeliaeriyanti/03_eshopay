"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize2 = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Model,
  Sequelize
} = _sequelize2.default;

class line_items extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      lite_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      lite_qty: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      lite_price: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      lite_subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      lite_status: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      lite_prod_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: "lite_cart_prod_uq"
      },
      lite_cart_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'cart',
          key: 'cart_id'
        },
        unique: "lite_cart_prod_uq"
      },
      lite_order_name: {
        type: DataTypes.STRING(25),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'line_items',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "lite_cart_prod_uq",
        unique: true,
        fields: [{
          name: "lite_cart_id"
        }, {
          name: "lite_prod_id"
        }]
      }, {
        name: "lite_id_pk",
        unique: true,
        fields: [{
          name: "lite_id"
        }]
      }]
    });
  }

}

exports.default = line_items;
//# sourceMappingURL=line_items.js.map