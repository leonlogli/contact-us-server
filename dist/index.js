"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.use("/", _routes["default"]); //Enable CORS for all HTTP methods

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); // Connect to Mongoose and set connection variable

_mongoose["default"].connect(_config["default"].dbUrl, {
  useNewUrlParser: true
}, function (error) {
  if (error) {
    console.log(error);
    process.exit();
  } else console.log("Database connected successfully");
});

app.listen(_config["default"].serverPort, function () {
  console.log("Running server on port " + _config["default"].serverPort);
});
//# sourceMappingURL=index.js.map