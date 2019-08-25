"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Contact = _interopRequireDefault(require("../model/Contact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getContacts = function getContacts(req, res) {
  _Contact["default"].find(function (err, contacts) {
    if (err) {
      res.status(500).json(err);
    }

    res.send(contacts);
  });
};

var saveContact = function saveContact(req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "Contact content can not be empty"
    });
  }

  var contact = new _Contact["default"]({
    firstName: req.body.name,
    lastName: req.body.lastName,
    office: req.body.office,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });
  contact.save().then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send(err);
  });
};

var _default = {
  findAll: getContacts,
  saveContact: saveContact
};
exports["default"] = _default;
//# sourceMappingURL=contactController.js.map