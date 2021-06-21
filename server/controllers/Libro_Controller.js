var libro = require('../Models/Libros');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    libro = req.body;

    console.log(libro);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarlibro(:ID_Estuiante, :Titulo_Libro, :Edicion_Libro, :Nombre_Articulo, :Web_Publicacion, :ISBN, :Fecha_Publicacion); 
        END;
      `,
      {
        ID_Estudiante: {
            dir: oracledb.BIND_IN,
            val: libro.ID_Estudiante,
            type: oracledb.NUMBER,
          },
          Titulo_Libro: {
            dir: oracledb.BIND_IN,
            val: libro.Titulo_Libro,
            type: oracledb.STRING,
          },
          Edicion_Libro: {
            dir: oracledb.BIND_IN,
            val: libro.Edicion_Libro,
            type: oracledb.STRING,
          },
          Nombre_Articulo: {
            dir: oracledb.BIND_IN,
            val: libro.Nombre_Articulo,
            type: oracledb.STRING,
          },
          Web_Publicacion: {
            dir: oracledb.BIND_IN,
            val: libro.Web_Publicacion,
            type: oracledb.STRING,
          },
          ISBN: {
            dir: oracledb.BIND_IN,
            val: libro.ISBN,
            type: oracledb.STRING,
          },
          Fecha_Publicacion: {
            dir: oracledb.BIND_IN,
            val: libro.Fecha_Publicacion,
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
