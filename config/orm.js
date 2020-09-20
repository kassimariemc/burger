const connection = require("../config/connection.js");

const orm = {
  selectAll: function(cb) {
    const queryString = "SELECT * FROM burgers";
    connection.query(queryString, 
      function(err, result) {
        if (err) throw err;
        
        cb(result);
    });
  },
  insertOne: function(val, cb) {
    const queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
    console.log(queryString);
    connection.query(queryString, [val], 
      function(err, result) {
        if (err) throw err;
        
        cb(result);
    });
  },
  updateOne: function(val, id, cb) {
    const queryString = "UPDATE burgers SET devoured = ? WHERE id = ?";
    connection.query(
      queryString,[val, id],
      function(err, result) {
        if (err) throw err;
        
        cb(result);
      }
    );
  }
};

module.exports = orm;