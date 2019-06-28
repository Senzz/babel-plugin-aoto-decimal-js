"use strict";

var _decimal = _interopRequireDefault(require("decimal.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getNum = function getNum() {
  return 10;
};

var test0 = (0, _decimal.default)(0.57).mul(100);
var test1 = (0, _decimal.default)(0.57).mul(100);
var test2 = (0, _decimal.default)(10).mul(20).mul(30).mul('50').mul(getNum());
var test3 = (0, _decimal.default)(10).mul(20).mul(30).sub((0, _decimal.default)('50').mul(getNum()));
var test4 = (0, _decimal.default)(10).sub((0, _decimal.default)(10).mul(30));
var test5 = (0, _decimal.default)(10).sub((0, _decimal.default)(10).mul(30)).mul(30).mul((0, _decimal.default)(20).sub(10)).toFixed(3, 1);
var test6 = (0, _decimal.default)(10).div(2).mul(3).sub((0, _decimal.default)(5).mul(20).div(3.3));
var test7 = (0, _decimal.default)(20).mod(3).mul(11);
var test8 = (0, _decimal.default)(30).mul((0, _decimal.default)(2).pow(2));