const oracledb = require("oracledb");

var db = {
  user: "bolsa",
  password: "bolsa",
  connectString: "localhost:1521/XEPDB1",
};

/*FUNCION PARA LLAMAR DB*/
async function getConnection() {
  try {
    let con = await oracledb.getConnection(db);
    /*let result = await con.execute(sql, binds, { autoCommit: true });
    con.release();*/
    return con;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getConnection,
};
