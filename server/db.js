const oracledb = require("oracledb");

db = {
  user: "paulino",
  password: "123",
  connectString: "localhost:1521/xe",
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
