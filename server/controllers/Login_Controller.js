var { createHmac } = require("crypto");
var login = require("../Models/Login");
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    login = req.body;

    console.log(login);

    let con = await getConnection();
    login.Password = createHmac("sha256", login.Password)
      .update("I love cupcakes")
      .digest("hex");

    let result = await con.execute(
      `
        BEGIN
          insertarlogin(:Username, :Password); 
        END;
      `,
      {
        Username: {
          dir: oracledb.BIND_IN,
          val: login.Username,
          type: oracledb.STRING,
        },
        Nombre: {
          dir: oracledb.BIND_IN,
          val: login.Password,
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
  loggearse: async (req, res) => {
    console.log("BODY");
    console.log(req.body);

    let { emailaddress, password } = req.body;
    try {
      let con = await getConnection();

      let result = await con.execute(
        `
          BEGIN
            verificarUsuario(:cursor , :user);
          END;
        `,
        {
          cursor: {
            type: oracledb.DB_TYPE_CURSOR,
            dir: oracledb.BIND_OUT,
          },
          user: {
            type: oracledb.DB_TYPE_VARCHAR,
            dir: oracledb.BIND_IN,
            val: emailaddress,
          },
        }, // bind value for :id
        { resultSet: true }
      );

      let resultset = result.outBinds.cursor;

      let row = await resultset.getRow();

      console.log("ROW");
      console.log(row);

      let password_hash = createHmac("sha256", password)
        .update("I love cupcakes")
        .digest("hex");

      console.log(password_hash);

      if (password_hash === row[2]) {
        con.release();
        res.json(row);
      } else {
        con.release();
        res.json({
          found: false,
        });
      }
    } catch (error) {
      res.json({
        found: false,
      });
    }
  },
};
