var perfil = require('../Models/Perfil');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    perfil = req.body;

    console.log(perfil);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarPerfil(:ID_Estudiante, :Titulo_Info, :Perfil_Academico, :Habilidades_Perfil, :Experiencia_Laboral, :Rango_Salarial, :Direccion_Trabajo); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: perfil.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Titulo_Info: {
            dir: oracledb.BIND_IN,
            val: perfil.Titulo_Info,
            type: oracledb.STRING,
          },
          Perfil_Academico: {
            dir: oracledb.BIND_IN,
            val: perfil.Perfil_Academico,
            type: oracledb.STRING,
          },
          Habilidades_Perfil: {
            dir: oracledb.BIND_IN,
            val: perfil.Habilidades_Perfil,
            type: oracledb.STRING,
          },
          Experiencia_Laboral: {
            dir: oracledb.BIND_IN,
            val: perfil.Experiencia_Laboral,
            type: oracledb.STRING,
          },
          Rango_Salarial: {
            dir: oracledb.BIND_IN,
            val: perfil.Rango_Salarial,
            type: oracledb.STRING,
          },
          Direccion_Trabajo: {
            dir: oracledb.BIND_IN,
            val: perfil.Direccion_Trabajo,
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
