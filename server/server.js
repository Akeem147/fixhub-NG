const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, welcome to fixhub NG");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
