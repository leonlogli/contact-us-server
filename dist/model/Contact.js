"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].set('useCreateIndex', true);

var contactSchema = _mongoose["default"].Schema({
  office: String,
  firstName: String,
  lastName: String,
  email: {
    type: String,
    trim: true,
    unique: "The specified email already exists",
    required: "Email address is required",
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"]
  },
  phone: String,
  message: {
    type: String,
    required: "Message is mandatory"
  }
});

var Contact = _mongoose["default"].model("Contact", contactSchema);

var _default = Contact;
exports["default"] = _default;
//# sourceMappingURL=Contact.js.map