const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarVacante: async (req, res) => {
    try {
      let {
        vacante,
        tipoVacante,
        rubro,
        direccion_empresa,
        ciudad,
        salarioMin,
        salarioMax,
        habilidades,
        descripcion,
      } = req.body;

      console.log(req.body);

      console.log(
        vacante,
        tipoVacante,
        rubro,
        direccion_empresa,
        ciudad,
        salarioMin,
        salarioMax,
        habilidades,
        descripcion
      );

      let con = await getConnection();

      let result = await con.execute(
        ` BEGIN
              insertarPerfil(:id, :vacante, :tipoVacante, :rubro, :direccion_empresa, :ciudad, :salarioMin, :salarioMax, :habilidades, :descripcion); 
          END;`,
        {
          id: {
            dir: oracledb.BIND_IN,
            val: 23,
            type: oracledb.NUMBER,
          },
          vacante: {
            dir: oracledb.BIND_IN,
            val: vacante,
            type: oracledb.STRING,
          },
          tipoVacante: {
            dir: oracledb.BIND_IN,
            val: tipoVacante,
            type: oracledb.STRING,
          },
          rubro: {
            dir: oracledb.BIND_IN,
            val: rubro,
            type: oracledb.STRING,
          },
          direccion_empresa: {
            dir: oracledb.BIND_IN,
            val: direccion_empresa,
            type: oracledb.STRING,
          },
          ciudad: {
            dir: oracledb.BIND_IN,
            val: ciudad,
            type: oracledb.DB_TYPE_VARCHAR,
          },
          salarioMin: {
            dir: oracledb.BIND_IN,
            val: Number(salarioMin),
            type: oracledb.DB_TYPE_NUMBER,
          },
          salarioMax: {
            dir: oracledb.BIND_IN,
            val: Number(salarioMax),
            type: oracledb.DB_TYPE_NUMBER,
          },
          habilidades: {
            dir: oracledb.BIND_IN,
            val: habilidades,
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

      res.json({
        data: "VACANTE REGISTRADA!!!",
      });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  listarVacantes: async (req, res) => {
    try {
      let con = await getConnection();

      let result = await con.execute(
        `
      BEGIN
        vacantes(:cursor);
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
      let rows = [];

      while ((row = await rs.getRow())) {
        rows.push({
          id: row[0],
          vacante: row[1],
          tipoVacante: row[2],
          categoria: row[3],
          ubicacion: row[4],
          ciudad: row[5],
          sueldoMin: row[6],
          sueldoMax: row[7],
          empresa: row[8],
          contacto: row[9],
          descripcion: row[10],
          habilidades: row[11],
        });
      }

      console.log(rows);

      rs.close();
      con.release();

      res.json(rows);
    } catch (error) {
      console.log(error);
    }
  },
};
