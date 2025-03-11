module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define('Area', {
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
      tableName: 'areas',
      timestamps: false
    });
    return Area;
  };
  