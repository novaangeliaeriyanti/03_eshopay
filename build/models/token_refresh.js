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

class token_refresh extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      tore_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      tore_expire_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'token_refresh',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "tore_id_pk",
        unique: true,
        fields: [{
          name: "tore_id"
        }]
      }]
    });
  }

}

exports.default = token_refresh;
//# sourceMappingURL=token_refresh.js.map