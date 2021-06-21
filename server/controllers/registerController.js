const { CURSOR } = require("oracledb");
const oracledb = require("oracledb");
const { getConnection } = require("../db");
const { registrarEstudiante } = require("./Estudiantes_Controller");
const { registrarEmpresa } = require("./Empresa_Controller");

module.exports = {
  registrar: (req, res) => {
    let { tipo } = req.body;
    console.log(`tipo ${tipo}`);

    if (tipo === "empresa") {
      registrarEmpresa(req, res);
    } else {
      registrarEstudiante(req, res);
    }
  },
};
