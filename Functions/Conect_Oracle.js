const dbConfig = import('./dbconfig.js.js')
const oracledb = require('oracledb');
const dbconfig = require('../dbconfig.js');

async function run() {

  let connection;

  try {

    connection = await oracledb.getConnection({ user: dbConfig.user, password: dbConfig.password, connectionString: dbconfig.connectString });

    console.log("Successfully connected to Oracle Database");

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();