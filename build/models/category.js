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

class category extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      cate_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cate_name: {
        type: DataTypes.STRING(25),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'category',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "cate_id_pk",
        unique: true,
        fields: [{
          name: "cate_id"
        }]
      }]
    });
  }

}

exports.default = category;
//# sourceMappingURL=category.js.map