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
    let usuario = req.body;
    try {

      let con = await getConnection();

      let result = await con.execute(  
        `SELECT *
        FROM USUARIO
        WHERE USER_NAME = :Nombre_Completo`,
     [usuario.emailaddress],  // bind value for :id
     { extendedMetaData: true })
        
        usuario.password = createHmac('sha256', usuario.password)
               .update('I love cupcakes')
               .digest('hex');
        if (usuario.password === result.rows[0][2]) {
          
          //console.log(result.rows[0]);
          con.release();
          res.json(result.rows[0]);
        }else{
          con.release();
          res.json({});
        }
        
     
    } catch (error) {
      console.log(error);
    }

  }
};
