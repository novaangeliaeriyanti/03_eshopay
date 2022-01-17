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

class products_images extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      prim_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      prim_filename: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      prim_filesize: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      prim_filetype: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      prim_primary: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      prim_prod_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'products',
          key: 'prod_id'
        }
      }
    }, {
      sequelize,
      tableName: 'products_images',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "prim_id_pk",
        unique: true,
        fields: [{
          name: "prim_id"
        }]
      }]
    });
  }

}

exports.default = products_images;
//# sourceMappingURL=products_images.js.map