const express = require("express");
const router = express.Router();

app.get("/users", (req, res) => {
  res.send("user list:");
});

app.get("/users/new", (req, res) => {
  res.send("user new form:");
});
