const orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(val, cb) {
    orm.insertOne(val, function(res) {
      cb(res);
    });
  },
  updateOne: function(val, cb) {
    orm.updateOne(val, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;