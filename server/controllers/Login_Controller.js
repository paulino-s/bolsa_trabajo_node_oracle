var login = require('../Models/Login');
const oracledb = require("oracledb");
import { createHmac } from 'crypto';
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
    const {
      scryptSync,
      createDecipheriv,
    } = require('crypto');
    
    const algorithm = 'sha256';
    const password = 'I love cupcakes';
    // Key length is dependent on the algorithm. In this case for aes192, it is
    // 24 bytes (192 bits).
    // Use the async `crypto.scrypt()` instead.
    const key = scryptSync(password, 'salt', 24);
    // The IV is usually passed along with the ciphertext.
    const iv = Buffer.alloc(16, 0); // Initialization vector.
    
    const decipher = createDecipheriv(algorithm, key, iv);
    let chunk;
    let decrypted = '';
    decipher.on('readable', () => {
      while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
      }
    });
    decipher.on('end', () => {
      console.log(decrypted);
      // Prints: some clear text data
    });
    

    try {
      login = req.body;

      let con = await getConnection();

      let result = await con.execute(  
        `SELECT *
        FROM Login
        WHERE Nombre_Completo = :Nombre_Completo`,
     [login.Username],  // bind value for :id
     { extendedMetaData: true })

     let passworddec = decipher.write(result.Password, 'hex');
     decipher.end();

     if (passworddec === login.Password) {
       return true;
     }
     
    } catch (error) {
      return false;
    }

  }
};
