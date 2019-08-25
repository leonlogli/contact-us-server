"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _contactController = _interopRequireDefault(require("./controller/contactController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = require("express").Router(); // Home page route


router.get("/", function (req, res) {
  return res.send("Contact Message Handler - Server Side");
}); // Contact routes

router.route('/contacts').get(_contactController["default"].findAll).post(_contactController["default"].saveContact);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map