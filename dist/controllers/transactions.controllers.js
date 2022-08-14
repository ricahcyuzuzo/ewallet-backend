"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _account = _interopRequireDefault(require("../models/account.model"));

var _products = _interopRequireDefault(require("../models/products.model"));

var _transaction = _interopRequireDefault(require("../models/transaction.model"));

var _users = _interopRequireDefault(require("../models/users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TransactionsController = /*#__PURE__*/function () {
  function TransactionsController() {
    _classCallCheck(this, TransactionsController);
  }

  _createClass(TransactionsController, null, [{
    key: "createAccount",
    value: function createAccount(req, res) {
      var data = (0, _jwtDecode["default"])(req.headers.authorization);
      var userId = data.user._id;
      var newAccount = new _account["default"]({
        _id: new _mongoose["default"].Types.ObjectId(),
        balance: 0,
        userId: userId,
        createdAt: new Date().toDateString()
      });
      newAccount.save().then(function (doc) {
        res.status(201).json({
          status: 201,
          message: 'Account created successfull',
          accountDetails: doc
        });
      })["catch"](function (err) {
        res.status(500).json({
          status: 201,
          message: 'Something went wrong',
          error: err
        });
      });
    }
  }, {
    key: "recharge",
    value: function () {
      var _recharge = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var amount, data, userId, account, balance;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                amount = req.body.amount;
                data = (0, _jwtDecode["default"])(req.headers.authorization);
                userId = data.user._id;
                _context.next = 5;
                return _account["default"].findOne({
                  userId: userId
                }).exec();

              case 5:
                account = _context.sent;
                balance = parseInt(amount) + parseInt(account.balance);

                _account["default"].findOneAndUpdate({
                  userId: userId,
                  balance: balance
                }).exec().then(function () {
                  var transaction = new _transaction["default"]({
                    _id: new _mongoose["default"].Types.ObjectId(),
                    amount: amount,
                    createdAt: new Date().toDateString(),
                    fromId: userId,
                    toId: userId,
                    status: 'Incoming',
                    action: 'Recharging your account.'
                  });
                  transaction.save().then(function () {
                    res.status(201).json({
                      message: 'You have received ' + amount + ' RWF, your new balance is ' + balance + ' RWF',
                      status: 201
                    });
                  })["catch"](function (err) {
                    res.status(500).json({
                      message: 'Something went wrong!',
                      status: 500,
                      error: err
                    });
                  });
                })["catch"](function (err) {
                  res.status(500).json({
                    message: 'Something went wrong!',
                    status: 500,
                    error: err
                  });
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function recharge(_x, _x2) {
        return _recharge.apply(this, arguments);
      }

      return recharge;
    }()
  }, {
    key: "pay",
    value: function () {
      var _pay = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var code, data, userId, product, account, payeeId, payeeAccount, amountToPay, amountToDeduct;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                code = req.body.code;
                data = (0, _jwtDecode["default"])(req.headers.authorization);
                userId = data.user._id;
                _context2.next = 5;
                return _products["default"].findOne({
                  code: code
                }).exec();

              case 5:
                product = _context2.sent;
                _context2.next = 8;
                return _account["default"].findOne({
                  userId: userId
                }).exec();

              case 8:
                account = _context2.sent;
                payeeId = product.userId;
                _context2.next = 12;
                return _account["default"].findOne({
                  userId: payeeId
                }).exec();

              case 12:
                payeeAccount = _context2.sent;

                if (!(parseInt(account.balance) < parseInt(product.price))) {
                  _context2.next = 15;
                  break;
                }

                return _context2.abrupt("return", res.status(400).json({
                  status: 400,
                  message: 'Oops, You have unsufficient funds on your account'
                }));

              case 15:
                amountToPay = parseInt(payeeAccount.balance) + parseInt(product.price);
                amountToDeduct = parseInt(account.balance) - parseInt(product.price);

                _account["default"].findOneAndUpdate({
                  userId: payeeId
                }, {
                  balance: amountToPay
                }).exec().then(function () {
                  _account["default"].findOneAndUpdate({
                    userId: userId
                  }, {
                    balance: amountToDeduct
                  }).exec().then(function () {
                    var transaction = new _transaction["default"]({
                      _id: new _mongoose["default"].Types.ObjectId(),
                      amount: product.price,
                      createdAt: new Date().toDateString(),
                      fromId: userId,
                      toId: payeeId,
                      status: 'Outgoing',
                      action: "Paying ".concat(product.name, " at ").concat(product.price)
                    });
                    transaction.save().then(function (res) {
                      console.log(res, 'Hihihih');
                      res.status(201).json({
                        message: 'You have paid successful the ' + product.name + ' at ' + product.price + ' RWF, Your remaining balance is ' + amountToDeduct + ' RWF',
                        status: 201
                      });
                    })["catch"](function (err) {
                      res.status(500).json({
                        message: 'Something went wrong',
                        status: 500,
                        error: err
                      });
                    });
                  })["catch"](function (err) {
                    res.status(500).json({
                      message: 'Something went wrong',
                      status: 500,
                      error: err
                    });
                  });
                })["catch"](function () {
                  res.status(500).json({
                    message: 'Something went wrong',
                    status: 500,
                    error: err
                  });
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function pay(_x3, _x4) {
        return _pay.apply(this, arguments);
      }

      return pay;
    }()
  }, {
    key: "getTransactions",
    value: function () {
      var _getTransactions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
        var data, userId, account, transactions;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = (0, _jwtDecode["default"])(req.headers.authorization);
                userId = data.user._id;
                _context3.next = 4;
                return _account["default"].findOne({
                  userId: userId
                }).exec();

              case 4:
                account = _context3.sent;
                _context3.next = 7;
                return _transaction["default"].find({}).exec();

              case 7:
                transactions = _context3.sent;
                res.status(200).json({
                  transactions: transactions,
                  status: 200,
                  account: account
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getTransactions(_x5, _x6) {
        return _getTransactions.apply(this, arguments);
      }

      return getTransactions;
    }()
  }, {
    key: "sendMoney",
    value: function () {
      var _sendMoney = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var data, userId, receiver_id, amountToSend, account, receiverAccount, amountReceived, amountToDeduce;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = (0, _jwtDecode["default"])(req.headers.authorization);
                userId = data.user._id;
                receiver_id = req.query.receiver_id;
                amountToSend = req.body.amountToSend;
                _context5.next = 6;
                return _account["default"].findOne({
                  userId: userId
                }).exec();

              case 6:
                account = _context5.sent;
                _context5.next = 9;
                return _account["default"].findOne({
                  userId: receiver_id
                }).exec();

              case 9:
                receiverAccount = _context5.sent;

                if (!(parseInt(account.balance) < parseInt(amountToSend))) {
                  _context5.next = 12;
                  break;
                }

                return _context5.abrupt("return", res.status(400).json({
                  status: 400,
                  message: 'Oops, You have unsufficient funds on your account'
                }));

              case 12:
                amountReceived = parseInt(receiverAccount.balance) + parseInt(amountToSend);
                amountToDeduce = parseInt(account.balance) - parseInt(amountToSend);

                _account["default"].findOneAndUpdate({
                  userId: receiver_id
                }, {
                  balance: amountReceived
                }).exec().then(function () {
                  _account["default"].findOneAndUpdate({
                    userId: userId
                  }, {
                    balance: amountToDeduce
                  }).exec().then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                    var user, transaction;
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return _users["default"].findOne({
                              _id: receiver_id
                            }).exec();

                          case 2:
                            user = _context4.sent;
                            transaction = new _transaction["default"]({
                              _id: new _mongoose["default"].Types.ObjectId(),
                              amount: amountToSend,
                              createdAt: new Date().toDateString(),
                              fromId: userId,
                              toId: receiver_id,
                              toName: user.names,
                              status: 'Outgoing',
                              action: "Sending ".concat(amountToSend, " RWF to ").concat(user.names)
                            });
                            transaction.save().then(function () {
                              res.status(201).json({
                                message: 'You have sent money successful',
                                status: 201
                              });
                            })["catch"](function (err) {
                              res.status(500).json({
                                message: 'Something went wrong',
                                status: 500,
                                error: err
                              });
                            });

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  })))["catch"](function (err) {
                    res.status(500).json({
                      message: 'Something went wrong',
                      status: 500,
                      error: err
                    });
                  });
                })["catch"](function (err) {
                  res.status(500).json({
                    message: 'Something went wrong',
                    status: 500,
                    error: err
                  });
                });

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function sendMoney(_x7, _x8) {
        return _sendMoney.apply(this, arguments);
      }

      return sendMoney;
    }()
  }]);

  return TransactionsController;
}();

var _default = TransactionsController;
exports["default"] = _default;