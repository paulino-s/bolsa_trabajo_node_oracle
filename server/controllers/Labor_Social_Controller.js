var labor = require('../Models/Labor_Social');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    labor = req.body;

    console.log(labor);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarlabor(:ID_Estuiante, :Labor, :Descripcion_Labor); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: labor.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Labor: {
            dir: oracledb.BIND_IN,
            val: labor.Labor,
            type: oracledb.STRING,
          },
          Descripcion_Labor: {
            dir: oracledb.BIND_IN,
            val: labor.Descripcion_Labor,
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
