var login = require('../Models/Login');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    login = req.body;

    console.log(login);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarlogin(:Username, :Password); 
        END;
      `,
      {
        Username: {
            dir: oracledb.BIND_IN,
            val: login.Username,
            type: oracledb.STRING,
          },
          Nombre: {
            dir: oracledb.BIND_IN,
            val: login.Password,
            type: oracledb.STRING,
          }
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
