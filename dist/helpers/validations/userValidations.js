"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUserSignup = exports.validateUserSignin = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var validateUserSignup = function validateUserSignup(user) {
  var schema = _joi["default"].object().keys({
    names: _joi["default"].string().min(2).required(),
    phone: _joi["default"].string().min(10).max(15).required(),
    password: _joi["default"].string().required(),
    type: _joi["default"].string().required()
  });

  return schema.validate(user);
};

exports.validateUserSignup = validateUserSignup;

var validateUserSignin = function validateUserSignin(user) {
  var schema = _joi["default"].object().keys({
    phone: _joi["default"].string().min(10).max(15).required(),
    password: _joi["default"].string().required()
  });

  return schema.validate(user);
};

exports.validateUserSignin = validateUserSignin;