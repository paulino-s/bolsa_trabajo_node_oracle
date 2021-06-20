const oracledb = require("oracledb");

db = {
  user: "paulino",
  password: "123",
  connectString: "localhost:1521/xe",
};

/*FUNCION PARA LLAMAR DB*/
async function query(sql, binds, autoCommit) {
  try {
    let con = await oracledb.getConnection(db);
    let result = await con.execute(sql, binds, { autoCommit: true });
    con.release();
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  query,
};
