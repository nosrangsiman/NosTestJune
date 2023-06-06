const express = require("express");
const app = express();
const port = process.env.PORT || 8900;

app.get("/", (req, res) => {
  res.send("Hello! Node.js");
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});