const Sequelize = require("sequelize");
const modeloPresupuestos = require("../models/presupuestos.models");
const modeloUsuarios = require("../models/users.model")
// databasename, username, password
// const sequelize = new Sequelize("pPwS1XiZt6", "pPwS1XiZt6", "18Jdf6zLGV", {
//   host: "remotemysql.com",
//   dialect: "mysql",
// });

const sequelize = new Sequelize("PresupuestosTecla", "SA", "Root233425?", {
    host: "localhost",
    dialect: "mssql",
  });

const Presupuesto = modeloPresupuestos(sequelize, Sequelize);
const Usuario = modeloUsuarios(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("Tablas sincronizadas");
});
module.exports = {
  Usuario,
  Presupuesto
};
