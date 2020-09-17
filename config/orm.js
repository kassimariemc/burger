const connection = require("./connection");

class ORM {
  constructor(connection) {
    this.connection = connection;
  }

  selectAll = () => {
    return this.connection.query("SELECT * FROM burgers");
  }

  insertOne = (burger_name) => {
    return this.connection.query("INSERT INTO burgers SET ?",
    {
      burger_name: burger_name,
      devoured: false
    });
  }

  updateOne = (devoured, id) => {
    return this.connection.query("UPDATE burgers SET ? WHERE ?",
    [
      {
        devoured: devoured
      },
      {
        id: id
      }
    ]
    );
  }
}

module.exports = new ORM(connection);