const express = require("express");
const os = require("os");
const app = express();

var products = require ("./data/products.json");

app.use(express.static("dist"));

app.get("/api/products", (req, res) => {   
  res.send(products)
  }
);
app.listen(5001, () => console.log("Listening on port 5001!"));