import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cart extends Model {
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
    indexes: [
      {
        name: "cart_id_pk",
        unique: true,
        fields: [
          { name: "cart_id" },
        ]
      },
    ]
  });
  }
}
