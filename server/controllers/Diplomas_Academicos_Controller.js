var diploma = require('../Models/Diplomas_Academicos');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    diploma = req.body;

    console.log(diploma);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertardiploma(:ID_Estuiante, :Titulo, :Nombre_InsDiploma, :Archivo_Diploma, :Fecha); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: diploma.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Titulo: {
            dir: oracledb.BIND_IN,
            val: diploma.Titulo,
            type: oracledb.STRING,
          },
          Nombre_InsDiploma: {
            dir: oracledb.BIND_IN,
            val: diploma.Nombre_InsDiploma,
            type: oracledb.STRING,
          },
          Archivo_Diploma: {
            dir: oracledb.BIND_IN,
            val: diploma.Archivo_Diploma,
            type: oracledb.STRING,
          },
          Fecha: {
            dir: oracledb.BIND_IN,
            val: diploma.Fecha,
            type: oracledb.DATE,
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
