"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _authenticate = require("../helpers/authenticate");

var _userValidations = require("../helpers/validations/userValidations");

var _users = require("../models/users.body");

var _users2 = _interopRequireDefault(require("../models/users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Authentication = /*#__PURE__*/function () {
  function Authentication() {
    _classCallCheck(this, Authentication);
  }

  _createClass(Authentication, null, [{
    key: "signup",
    value: function signup(req, res) {
      var _req$body = req.body,
          names = _req$body.names,
          phone = _req$body.phone,
          password = _req$body.password,
          type = _req$body.type;

      var _validateUserSignup = (0, _userValidations.validateUserSignup)((0, _users.createUser)(req)),
          error = _validateUserSignup.error;

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message.replace(/"/g, '')
        });
      }

      _users2["default"].find({
        phone: phone
      }, function (error, result) {
        if (result.length) {
          return res.status(409).json({
            message: 'Email is already used, please try another',
            status: 409
          });
        }

        var hashedPassword = (0, _authenticate.hashPassword)(password);
        var user = new _users2["default"]({
          _id: new _mongoose["default"].Types.ObjectId(),
          names: names,
          phone: phone,
          password: hashedPassword,
          type: type
        });
        user.save().then(function () {
          res.status(201).json({
            message: 'Wohooo, You have created an account',
            status: 201
          });
        })["catch"](function (err) {
          res.status(500).json({
            message: 'Oh no, there is something wrong, check your internet or call the support.',
            status: 500
          });
        });
      });
    }
  }, {
    key: "signin",
    value: function signin(req, res) {
      var _req$body2 = req.body,
          phone = _req$body2.phone,
          password = _req$body2.password;

      var _validateUserSignin = (0, _userValidations.validateUserSignin)((0, _users.loginUser)(req)),
          error = _validateUserSignin.error;

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message.replace(/"/g, '')
        });
      }

      _users2["default"].findOne({
        phone: phone
      }).exec().then(function (doc) {
        var compare = (0, _authenticate.comparePassword)(password, doc.password);

        if (compare) {
          if (doc) {
            res.status(201).json({
              status: 201,
              message: 'Logged in successful',
              token: (0, _authenticate.generateToken)(doc),
              names: doc.names,
              id: doc._id
            });
          } else {
            res.status(401).json({
              status: 401,
              message: 'Wrong Phone number or password'
            });
          }
        } else {
          res.status(401).json({
            status: 401,
            message: 'Wrong Phone number or password'
          });
        }
      })["catch"](function () {
        res.status(401).json({
          status: 401,
          message: 'Wrong Phone number or password'
        });
      });
    } // static forgotPassword (req, res) {
    //   const { phone, password } = req.body;
    //   User.findOne({ phone })
    //   .exec()
    //   .then((doc) => {
    //     if(doc) {
    //     }
    //   })
    // }

  }]);

  return Authentication;
}();

var _default = Authentication;
exports["default"] = _default;