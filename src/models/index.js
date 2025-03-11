const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
);

const Usuario = require('./usuario')(sequelize, Sequelize);
const Curso = require('./curso')(sequelize, Sequelize);
const Area = require('./area')(sequelize, Sequelize);
const Evento = require('./evento')(sequelize, Sequelize);
const Organizacao = require('./organizacao')(sequelize, Sequelize);

Curso.belongsTo(Area, { foreignKey: 'areaId', as: 'area' });
Usuario.belongsTo(Curso, { foreignKey: 'cursoId', as: 'curso' });
Evento.belongsTo(Area, { foreignKey: 'areaId', as: 'area' });

Evento.belongsToMany(Organizacao, {
  through: 'EventoOrganizacoes',
  as: 'organizacoes',
  foreignKey: 'eventoId'
});
Organizacao.belongsToMany(Evento, {
  through: 'EventoOrganizacoes',
  as: 'eventos',
  foreignKey: 'organizacaoId'
});

sequelize.sync()
  .then(() => console.log("Banco sincronizado"))
  .catch(err => console.error(err));

module.exports = {
  sequelize,
  Usuario,
  Curso,
  Area,
  Evento,
  Organizacao
};
