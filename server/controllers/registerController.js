const { CURSOR } = require("oracledb");
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEstudiante: async (req, res) => {
    let { name, email, password } = req.body;

    console.log(name, email, password);

    let con = await getConnection();

    let result = await con.execute(
      `BEGIN insertarEstudiante(:n, :e, :p); END;`,
      {
        n: { dir: oracledb.BIND_IN, val: name, type: oracledb.STRING },
        e: {
          dir: oracledb.BIND_IN,
          val: email,
          type: oracledb.STRING,
        },
        p: {
          dir: oracledb.BIND_IN,
          val: password,
          type: oracledb.STRING,
        },
      },
      {
        autoCommit: true,
      }
    );

    console.log(result.outBinds);

    con.release();

    res.json(result.outBinds);
  },
  registrarEmpresa: async (req, res) => {
    let { nombre, nombre_empresa, email, telefono, password } = req.body;

    console.log(nombre, nombre_empresa, email, telefono, password);

    let con = await getConnection();

    let result = await con.execute(
      `
        BEGIN
          insertarEmpresa(:nombre, :empresa, :email, :telefono, :password); 
        END;
      `,
      {
        nombre,
        empresa: nombre_empresa,
        email,
        telefono,
        password,
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
