"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../controllers/auth.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = (0, _express["default"])();
routes.post('/user', _auth["default"].signup);
routes.post('/login', _auth["default"].signin);
var _default = routes;
exports["default"] = _default;