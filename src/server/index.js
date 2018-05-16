const express = require("express");
const os = require("os");
const app = express();

app.use(express.static("dist"));
app.get("/api/products", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(5001, () => console.log("Listening on port 5001!"));