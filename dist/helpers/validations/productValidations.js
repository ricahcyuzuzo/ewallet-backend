"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCreateProduct = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateCreateProduct = function validateCreateProduct(user) {
  var schema = _joi["default"].object().keys({
    name: _joi["default"].string().required(),
    price: _joi["default"].number().required()
  });

  return schema.validate(user);
};

exports.validateCreateProduct = validateCreateProduct;