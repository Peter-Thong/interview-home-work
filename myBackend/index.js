const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("What's up world");
});

app.get("/posts", (req, res) => {
  res.send("What's up world, hhehe");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
