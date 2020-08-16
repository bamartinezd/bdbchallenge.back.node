const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SiliconValley123*',
  database: 'bdbchallenge',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(`Connected to ${mysqlConnection.config.user}@${mysqlConnection.config.host}:${mysqlConnection.config.port}`);
  }
});

module.exports = mysqlConnection;