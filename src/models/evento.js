module.exports = (sequelize, DataTypes) => {
    const Evento = sequelize.define('Evento', {
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
      description: {
        type: DataTypes.TEXT,
        defaultValue: ''
      },
      areaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      date_start: {
        type: DataTypes.DATE,
        allowNull: false
      },
      date_end: {
        type: DataTypes.DATE,
        allowNull: false
      }
    }, {
      tableName: 'eventos',
      timestamps: false
    });
    return Evento;
  };
  