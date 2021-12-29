import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class token_refresh extends Model {
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
    indexes: [
      {
        name: "tore_id_pk",
        unique: true,
        fields: [
          { name: "tore_id" },
        ]
      },
    ]
  });
  }
}
