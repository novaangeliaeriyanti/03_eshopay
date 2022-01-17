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

class cart extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      cart_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cart_created_on: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      cart_status: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      cart_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_id'
        }
      }
    }, {
      sequelize,
      tableName: 'cart',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "cart_id_pk",
        unique: true,
        fields: [{
          name: "cart_id"
        }]
      }]
    });
  }

}

exports.default = cart;
//# sourceMappingURL=cart.js.map