"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _product = _interopRequireDefault(require("../controllers/product.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/add-product', _product["default"].addProduct);
routes.get('/products', _product["default"].getAllProductsBuUser);
var _default = routes;
exports["default"] = _default;