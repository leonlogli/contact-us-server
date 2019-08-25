"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  dbUrl: process.env.MONGODB_URI || "mongodb://localhost/contactsDB",
  serverPort: process.env.PORT || 8080
};
exports["default"] = _default;
//# sourceMappingURL=config.js.map