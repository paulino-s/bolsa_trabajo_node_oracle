const oracledb = require("oracledb");
const { query } = require("../db");

module.exports = {
  registrarEstudiante: async (req, res) => {
    let { name, email, password } = req.body;

    console.log(name, email, password);

    let result = await query(`BEGIN insertarEstudiante(:n, :e, :p); END;`, {
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
    });

    /*
    let result = await query(`insert into USUARIO values(:id, :email, :pass)`, {
      id: 1,
      email: email,
      pass: password,
    });*/

    console.log(result.outBinds);

    res.json(result.outBinds);
  },
};
