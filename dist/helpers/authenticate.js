"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hashPassword = exports.generateToken = exports.comparePassword = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateToken = function generateToken(user) {
  return _jsonwebtoken["default"].sign({
    user: user
  }, 'DallApp98000', {
    expiresIn: '30d'
  });
};

exports.generateToken = generateToken;

var hashPassword = function hashPassword(password) {
  return _bcrypt["default"].hashSync(password, 10);
};

exports.hashPassword = hashPassword;

var comparePassword = function comparePassword(password, hashedPassword) {
  return _bcrypt["default"].compareSync(password, hashedPassword);
};

exports.comparePassword = comparePassword;