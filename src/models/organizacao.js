module.exports = (sequelize, DataTypes) => {
    const Organizacao = sequelize.define('Organizacao', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: ''
      }
    }, {
      tableName: 'organizacoes',
      timestamps: false
    });
    return Organizacao;
  };
  