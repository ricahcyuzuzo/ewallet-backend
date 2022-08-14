"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _productValidations = require("../helpers/validations/productValidations");

var _products = require("../models/products.body");

var _products2 = _interopRequireDefault(require("../models/products.model"));

var _uuid = require("uuid");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ProductController = /*#__PURE__*/function () {
  function ProductController() {
    _classCallCheck(this, ProductController);
  }

  _createClass(ProductController, null, [{
    key: "addProduct",
    value: function addProduct(req, res) {
      var _req$body = req.body,
          name = _req$body.name,
          price = _req$body.price;

      var _validateCreateProduc = (0, _productValidations.validateCreateProduct)((0, _products.createProduct)(req)),
          error = _validateCreateProduc.error;

      if (error) {
        return res.status(400).json({
          status: 400,
          message: error.details[0].message.replace(/"/g, '')
        });
      }

      var id = (0, _uuid.v4)();
      var data = (0, _jwtDecode["default"])(req.headers.authorization);
      var product = new _products2["default"]({
        _id: new _mongoose["default"].Types.ObjectId(),
        name: name,
        price: price,
        code: id,
        userId: data.user._id
      });
      product.save().then(function (doc) {
        res.status(201).json({
          status: 201,
          message: 'Product created successful',
          product: doc
        });
      })["catch"](function (error) {
        res.status(500).json({
          message: 'Something is wrong, try again later',
          status: 500,
          error: error
        });
      });
    }
  }, {
    key: "getAllProductsBuUser",
    value: function getAllProductsBuUser(req, res) {
      var data = (0, _jwtDecode["default"])(req.headers.authorization);
      var userId = data.user._id;

      _products2["default"].find({
        userId: userId
      }).exec().then(function (doc) {
        res.status(200).json({
          status: 200,
          results: doc
        });
      })["catch"](function (err) {
        res.status(500).json({
          status: 500,
          error: err
        });
      });
    }
  }]);

  return ProductController;
}();

var _default = ProductController;
exports["default"] = _default;