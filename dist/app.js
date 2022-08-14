"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongodb = _interopRequireDefault(require("./config/mongodb.config"));

var _user = _interopRequireDefault(require("./routers/user.routes"));

var _product = _interopRequireDefault(require("./routers/product.routes"));

var _transaction = _interopRequireDefault(require("./routers/transaction.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json({
  type: '*/*'
}));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  return next();
});
app.use('/api', _user["default"]);
app.use('/api', _product["default"]);
app.use('/api', _transaction["default"]);
app.get('/', function (req, res) {
  res.status(200).json({
    status: 200,
    message: 'Welcome on dall'
  });
});
app.use(function (req, res) {
  res.type('json').status(404).json({
    message: '404 Endpoint not found',
    status: 404
  });
});
app.listen(3000, function () {
  return console.log('App is listening on port 3000');
});
(0, _mongodb["default"])();
var _default = app;
exports["default"] = _default;