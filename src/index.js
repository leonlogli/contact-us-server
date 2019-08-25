import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);
//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Connect to Mongoose and set connection variable
mongoose.connect(config.dbUrl, { useNewUrlParser: true }, error => {
  if (error) {
    console.log(error);
    process.exit();
  } else console.log("Database connected successfully");
});

app.listen(config.serverPort, function() {
  console.log("Running server on port " + config.serverPort);
});
