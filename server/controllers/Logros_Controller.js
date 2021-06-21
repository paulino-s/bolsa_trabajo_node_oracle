var logro = require('../Models/Logros');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    logro = req.body;

    console.log(logro);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarLogros(:ID_Estudiante, :Titulo_Logro, :Fecha_Logro, :Comentarios_Logro); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: logro.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Titulo_Logro: {
            dir: oracledb.BIND_IN,
            val: logro.Titulo_Logro,
            type: oracledb.STRING,
          },
          Fecha_Logro: {
            dir: oracledb.BIND_IN,
            val: logro.Fecha_Logro,
            type: oracledb.STRING,
          },
          Comentarios_Logro: {
            dir: oracledb.BIND_IN,
            val: logro.Comentarios_Logro,
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
