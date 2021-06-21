var certificaciones = require('../Models/Certificaciones');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    certificaciones = req.body;

    console.log(certificaciones);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarcertificaciones(:ID_Estuiante, :Titulo_Certificado, :Institucion_Certificado, :Archivo_Certificado, :Fecha_Certificado); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: certificaciones.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Titulo_Certificado: {
            dir: oracledb.BIND_IN,
            val: certificaciones.Titulo_Certificado,
            type: oracledb.STRING,
          },
          Institucion_Certificado: {
            dir: oracledb.BIND_IN,
            val: certificaciones.Institucion_Certificado,
            type: oracledb.STRING,
          },
          Archivo_Certificado: {
            dir: oracledb.BIND_IN,
            val: certificaciones.Archivo_Certificado,
            type: oracledb.STRING,
          },
          Fecha_Certificado: {
            dir: oracledb.BIND_IN,
            val: certificaciones.Fecha_Certificado,
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
