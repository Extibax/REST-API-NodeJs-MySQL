"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

var _util = require("util");

var _keys = _interopRequireDefault(require("./keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var connection = _mysql["default"].createPool(_keys["default"]);

connection.query = (0, _util.promisify)(connection.query);
var _default = connection;
exports["default"] = _default;