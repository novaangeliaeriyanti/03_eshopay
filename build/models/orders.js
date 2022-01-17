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

class orders extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      order_name: {
        type: DataTypes.STRING(25),
        allowNull: false,
        primaryKey: true
      },
      order_created_on: {
        type: DataTypes.DATE,
        allowNull: true
      },
      order_total_qty: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      order_subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      order_discount: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      order_tax: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      order_total_due: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      order_payt_trx_number: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      order_city: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      order_address: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      order_status: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      order_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_id'
        }
      }
    }, {
      sequelize,
      tableName: 'orders',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "order_name_pk",
        unique: true,
        fields: [{
          name: "order_name"
        }]
      }]
    });
  }

}

exports.default = orders;
//# sourceMappingURL=orders.js.map