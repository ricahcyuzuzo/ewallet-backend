"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var accountSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  balance: Number,
  userId: String,
  createdAt: Date
});

var accountsModel = _mongoose["default"].model('accounts', accountSchema);

var _default = accountsModel;
exports["default"] = _default;