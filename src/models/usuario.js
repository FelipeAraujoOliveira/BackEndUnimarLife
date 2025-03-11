module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
      cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false,
        defaultValue: ''
      },
      cursoId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: ''
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      ra: {
        type: DataTypes.STRING(7),
        allowNull: true
      },
      ensino_medio: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    }, {
      tableName: 'usuarios',
      timestamps: false
    });
    return Usuario;
  };
  