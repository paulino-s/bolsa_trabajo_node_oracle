const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarVacante: async (req, res) => {
    let {
      titulo,
      tipo,
      categoria,
      direccion,
      ciudad,
      sueldo_min,
      sueldo_max,
      contacto,
      descripcion,
    } = req.body;

    console.log(req.body);

    console.log(
      titulo,
      tipo,
      categoria,
      direccion,
      ciudad,
      sueldo_min,
      sueldo_max,
      contacto,
      descripcion
    );

    let con = await getConnection();

    let result = await con.execute(
      ` BEGIN
            insertarPerfil(:id, :titulo, :tipo, :categoria, :direccion, :ciudad, :sueldo_min, :sueldo_max, :contacto, :descripcion); 
        END;`,
      {
        id: {
          dir: oracledb.BIND_IN,
          val: 1,
          type: oracledb.NUMBER,
        },
        titulo: {
          dir: oracledb.BIND_IN,
          val: titulo,
          type: oracledb.STRING,
        },
        tipo: {
          dir: oracledb.BIND_IN,
          val: tipo,
          type: oracledb.STRING,
        },
        categoria: {
          dir: oracledb.BIND_IN,
          val: categoria,
          type: oracledb.STRING,
        },
        direccion: {
          dir: oracledb.BIND_IN,
          val: direccion,
          type: oracledb.STRING,
        },
        ciudad: {
          dir: oracledb.BIND_IN,
          val: ciudad,
          type: oracledb.DB_TYPE_VARCHAR,
        },
        sueldo_min: {
          dir: oracledb.BIND_IN,
          val: Number(sueldo_min),
          type: oracledb.DB_TYPE_NUMBER,
        },
        sueldo_max: {
          dir: oracledb.BIND_IN,
          val: Number(sueldo_max),
          type: oracledb.DB_TYPE_NUMBER,
        },
        contacto: {
          dir: oracledb.BIND_IN,
          val: contacto,
          type: oracledb.STRING,
        },
        descripcion: {
          dir: oracledb.BIND_IN,
          val: descripcion,
          type: oracledb.STRING,
        },
      },
      {
        autoCommit: true,
      }
    );

    con.release();

    console.log(result.outBinds);

    res.json(result.outBinds);
  },
  listarVacantes: async (req, res) => {
    try {
      let con = await getConnection();

      let result = await con.execute(
        `
      BEGIN
        listarVacantes(:cursor);
      END;
    `,
        {
          cursor: {
            dir: oracledb.BIND_OUT,
            type: oracledb.DB_TYPE_CURSOR,
          },
        },
        {
          resultSet: true,
        }
      );

      console.log(JSON.stringify(result, 2, null));

      let rs = result.outBinds.cursor;
      let rows = await rs.getRows();

      console.log(rows);

      rs.close();
      con.release();

      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
};
