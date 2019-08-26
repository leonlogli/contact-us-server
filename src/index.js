import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);

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
