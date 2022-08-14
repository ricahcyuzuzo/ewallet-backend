"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = _mongoose["default"].Schema({
  _id: _mongoose["default"].Schema.Types.ObjectId,
  name: String,
  price: Number,
  code: String,
  userId: String
});

var productModel = _mongoose["default"].model('products', productSchema);

var _default = productModel;
exports["default"] = _default;