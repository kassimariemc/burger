const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

// ROUTES
// --------------------
// Get route
router.get("/", function(req, res) {

});

// Post route -> Create a new burger using the data posted from the front-end.
router.post("/api/burgers", function(req, res) {
  
  res.json({ id: result.insertId });
  console.log({ id: result.insertId });

});

// Update a burger devoured
router.put("/api/burgers/:id", function(req, res) {

});

module.exports = router;