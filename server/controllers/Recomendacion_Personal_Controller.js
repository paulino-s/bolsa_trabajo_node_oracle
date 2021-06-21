var recom = require('../Models/Recomendacion_Personal');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    recom = req.body;

    console.log(recom);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarRecomendacion_Personal(:ID_Estudiante, :Nombre, :Apellido, :Email); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: recom.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Nombre: {
            dir: oracledb.BIND_IN,
            val: recom.Nombre,
            type: oracledb.STRING,
          },
          Apellido: {
            dir: oracledb.BIND_IN,
            val: recom.Apellido,
            type: oracledb.STRING,
          },
          Email: {
            dir: oracledb.BIND_IN,
            val: recom.Email,
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
