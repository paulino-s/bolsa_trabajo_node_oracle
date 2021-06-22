var { createHmac } = require('crypto');
var login = require('../Models/Login');
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    login = req.body;

    console.log(login);

    let con = await getConnection();
    login.Password = createHmac('sha256', login.Password)
               .update('I love cupcakes')
               .digest('hex');

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
  loggearse: async (req, res) =>  {
    login = res.body;
    console.log(res.body);



    try {
      login = req.body;

      let con = await getConnection();

      let result = await con.execute(  
        `SELECT *
        FROM Login
        WHERE Nombre_Completo = :Nombre_Completo`,
     [login.Username],  // bind value for :id
     { extendedMetaData: true })



        return result;
     
    } catch (error) {
   
    }

  }
};
