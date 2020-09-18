const connection = require("../config/connection.js");

const orm = {
  selectAll: function() {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, 
      function(err, result) {
        if (err) throw err;
        console.log(result);
    });
  },
  insertOne: function(val) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [val], 
      function(err, result) {
        if (err) throw err;
        console.log(result);
    });
  },
  updateOne: function(val, id) {
    var queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";

    connection.query(
      queryString,[val, id],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;