const express = require("express");
const limiter = require("./rateLimiter");

const app = express();
const port = 3000;

app.get("/", limiter, (req, res) => {
  console.log("Route called");
  res.json({ success: true, message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
