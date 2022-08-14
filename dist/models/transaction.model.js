"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var transactionSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  amount: String,
  createdAt: String,
  fromId: String,
  toId: String,
  toName: String,
  status: String,
  action: String
});

var transactionModel = _mongoose["default"].model('transactions', transactionSchema);

var _default = transactionModel;
exports["default"] = _default;