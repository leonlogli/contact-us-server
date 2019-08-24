const express = require("express");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 8080;

app.use("/", routes);

app.listen(port, function() {
  console.log("Running server on port " + port);
});
