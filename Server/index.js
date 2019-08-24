const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use("/", routes);
// Configure bodyparser to handle post requests
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect(
  "mongodb://localhost/contactsDB",
  { useNewUrlParser: true },
  error => {
    if (error) {
      console.log(error);
    } else console.log("Database connected successfully");
  }
);

const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Running server on port " + port);
});
