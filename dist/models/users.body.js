"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUser = exports.createUser = void 0;

var createUser = function createUser(req) {
  var user = {
    names: req.body.names,
    phone: req.body.phone,
    password: req.body.password,
    type: req.body.type
  };
  return user;
};

exports.createUser = createUser;

var loginUser = function loginUser(req) {
  var user = {
    phone: req.body.phone,
    password: req.body.password
  };
  return user;
};

exports.loginUser = loginUser;