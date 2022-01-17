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

class products extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      prod_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      prod_name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      prod_desc: {
        type: DataTypes.STRING(3000),
        allowNull: true
      },
      prod_price: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      prod_stock: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prod_expire: {
        type: DataTypes.DATE,
        allowNull: true
      },
      prod_weight: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prod_cate_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'category',
          key: 'cate_id'
        }
      },
      prod_brand: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      prod_condition: {
        type: DataTypes.STRING(15),
        allowNull: true
      },
      prod_total_sold: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prod_rating: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prod_views: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      prod_user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      prod_url_image: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'products',
      schema: 'public',
      timestamps: false,
      indexes: [{
        name: "prod_id_pk",
        unique: true,
        fields: [{
          name: "prod_id"
        }]
      }]
    });
  }

}

exports.default = products;
//# sourceMappingURL=products.js.map