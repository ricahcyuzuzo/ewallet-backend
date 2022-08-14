"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = void 0;

var createProduct = function createProduct(req) {
  var product = {
    name: req.body.name,
    price: req.body.price
  };
  return product;
};

exports.createProduct = createProduct;