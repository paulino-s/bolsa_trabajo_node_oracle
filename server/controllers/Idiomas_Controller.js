var idioma = require('../Models/Idiomas');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    idioma = req.body;

    console.log(idioma);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertaridioma(:ID_Estuiante, :Categoria, :Nivel, :Experiencia_idioma); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: idioma.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Categoria: {
            dir: oracledb.BIND_IN,
            val: idioma.Categoria,
            type: oracledb.STRING,
          },
          Nivel: {
            dir: oracledb.BIND_IN,
            val: idioma.Nivel,
            type: oracledb.STRING,
          },
          Experiencia_idioma: {
            dir: oracledb.BIND_IN,
            val: idioma.Experiencia_idioma,
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
