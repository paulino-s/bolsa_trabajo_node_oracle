var { createHmac } = require('crypto');
var empresa = require("../Models/Empresas");
const oracledb = require("oracledb");
const { getConnection } = require("../db");

module.exports = {
  registrarEmpresa: async (req, res) => {
    try {
      let { nombre, empresa, emailaddress, telefono, password } = req.body;

      console.log(nombre, empresa, emailaddress, telefono, password);

      let enpassword = createHmac('sha256', password)
               .update('I love cupcakes')
               .digest('hex');
      console.log(enpassword);
      let con = await getConnection();

      let result = await con.execute(
        `
            BEGIN
              insertarEmpresa(:nombre, :empresa, :emailaddress, :telefono, :enpassword); 
            END;
          `,
        {
          nombre,
          empresa,
          emailaddress,
          telefono,
          enpassword,
        },
        {
          autoCommit: true,
        }
      );

      console.log(result.outBinds);

      con.release();

      res.json({ data: "successfully registered user" });
    } catch (error) {
      res.json({
        error: error.message,
      });
    }
  },
};
