"use strict";

var _decimal = _interopRequireDefault(require("decimal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noChange1 = new _decimal.default(2).mul(10);
var noChange2 = new _decimal.default(10).div(3).toFixed(10);