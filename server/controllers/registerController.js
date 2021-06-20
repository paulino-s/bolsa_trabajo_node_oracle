const { CURSOR } = require("oracledb");
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    let { nombre, nombre_empresa, email, telefono, password } = req.body;

    console.log(nombre, nombre_empresa, email, telefono, password);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarEmpresa(:nombre, :empresa, :email, :telefono, :password); 
        END;
      `,
      {
        nombre,
        empresa: nombre_empresa,
        email,
        telefono,
        password,
      },
      {
        autoCommit: true,
      }
    );

    console.log(result.outBinds);

    con.release();

    res.json(result.outBinds);
  },
};
