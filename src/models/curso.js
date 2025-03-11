module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: ''
      },
      areaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      duration: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    }, {
      tableName: 'cursos',
      timestamps: false
    });
    return Curso;
  };
  