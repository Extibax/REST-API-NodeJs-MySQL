"use strict";

require("@babel/polyfill");

require("colors");

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = _server["default"].get('port');

function main() {
  _server["default"].listen(port, function () {
    console.log('Server Port:'.rainbow, port);
  });
}

main();