const mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  const connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;