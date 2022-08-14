"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _transactions = _interopRequireDefault(require("../controllers/transactions.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/account', _transactions["default"].createAccount);
routes.patch('/recharge', _transactions["default"].recharge);
routes.post('/pay', _transactions["default"].pay);
routes.get('/transactions', _transactions["default"].getTransactions);
routes.post('/send', _transactions["default"].sendMoney);
var _default = routes;
exports["default"] = _default;