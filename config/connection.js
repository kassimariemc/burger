const mysql = require("mysql");

const JAWSDB_URL = "mysql://d7sdfog0gkvwy71v:epmlc7y5y6t5pdvy@d1kb8x1fu8rhcnej.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/f4sjtl7nrjapwt10";

const connection 
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
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