var recomt = require('../Models/Recomendacion_Trabajo');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    recomt = req.body;

    console.log(recomt);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarRecomendacion_Trabajo(:ID_Estudiante, :Nombre_Empresa, :Sitio_Web, :Telefono_Empresa, :Email_Empresa); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: recomt.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Nombre_Empresa: {
            dir: oracledb.BIND_IN,
            val: recomt.Nombre_Empresa,
            type: oracledb.STRING,
          },
          Sitio_Web: {
            dir: oracledb.BIND_IN,
            val: recomt.Sitio_Web,
            type: oracledb.STRING,
          },
          Telefono_Empresa: {
            dir: oracledb.BIND_IN,
            val: recomt.Telefono_Empresa,
            type: oracledb.STRING,
          },
          Email_Empresa: {
            dir: oracledb.BIND_IN,
            val: recomt.Email_Empresa,
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
