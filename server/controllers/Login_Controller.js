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

    console.log({ emailaddress, password });

    try {
      let con = await getConnection();

      let result = await con.execute(
        `
          BEGIN
            verificarUsuario(:user, :cursor_empresa ,:cursor_estudiante);
          END;
        `,
        {
          user: {
            type: oracledb.DB_TYPE_VARCHAR,
            dir: oracledb.BIND_IN,
            val: emailaddress,
          },
          cursor_empresa: {
            type: oracledb.DB_TYPE_CURSOR,
            dir: oracledb.BIND_OUT,
          },
          cursor_estudiante: {
            type: oracledb.DB_TYPE_CURSOR,
            dir: oracledb.BIND_OUT,
          },
        }, // bind value for :id
        { resultSet: true }
      );

      let rs_emp = result.outBinds.cursor_empresa;
      let rs_est = result.outBinds.cursor_estudiante;

      let tipo;
      let row;

      let row_emp = await rs_emp.getRow();
      let row_est = await rs_est.getRow();

      if (row_emp) {
        tipo = "empresa";
        row = row_emp;
      }

      if (row_est) {
        tipo = "estudiante";
        row = row_est;
      }

      console.log("ROW");
      console.log(row);

      let password_hash = createHmac("sha256", password)
        .update("I love cupcakes")
        .digest("hex");

      console.log(password_hash);

      if (password_hash === row[2]) {
        con.release();
        req.session.isAuthenticated = true;
        req.session.user_id = row[3];

        console.log(req.session);

        res.json([...row, tipo]);
      } else {
        con.release();
        res.json({
          found: false,
        });
      }
    } catch (error) {
      console.error(error);
      res.json({
        error: error.message,
      });
    }
  },
  logout: (req, res) => {
    console.log(JSON.stringify(req.session));
    if (req.session.isAuthenticated) {
      req.session.destroy();
      res.json({
        message: "SESION TERMINADA!!",
      });
    } else {
      res.json({
        message: "NO HAY SESiON!",
      });
    }
  },
};
