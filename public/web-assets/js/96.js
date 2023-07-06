(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductsGrid.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product/ProductBox.vue */ "./resources/js/components/product/ProductBox.vue");
/* harmony import */ var _components_shop_ShopActionCard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/shop/ShopActionCard.vue */ "./resources/js/components/shop/ShopActionCard.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    productStyle: {
      type: String,
      "default": "one"
    },
    fitrable: {
      type: Boolean,
      "default": false
    },
    shopCard: {
      type: Boolean,
      "default": false
    },
    shopCardLink: {
      type: String,
      "default": "#"
    },
    shopCardTo: {
      type: [String, Object]
    },
    products: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    title: {
      type: String
    },
    cols: {
      type: String
    },
    sm: {
      type: String
    },
    md: {
      type: String
    },
    lg: {
      type: String
    },
    xl: {
      type: String
    },
    href: {
      type: String,
      "default": "#"
    },
    to: {
      type: [String, Object]
    }
  },
  components: {
    CustomButton: _global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductBox: _product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ShopActionCard: _components_shop_ShopActionCard_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BrandDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seeders_products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../seeders/products.js */ "./resources/js/seeders/products.js");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/product/ProductBox.vue */ "./resources/js/components/product/ProductBox.vue");
/* harmony import */ var _components_shop_ShopActionCard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shop/ShopActionCard.vue */ "./resources/js/components/shop/ShopActionCard.vue");
/* harmony import */ var _components_global_ProductsGrid_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/ProductsGrid.vue */ "./resources/js/components/global/ProductsGrid.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BrandDetails",
  components: {
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductBox: _components_product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProductsGrid: _components_global_ProductsGrid_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ShopActionCard: _components_shop_ShopActionCard_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      productsSeeder: _seeders_products_js__WEBPACK_IMPORTED_MODULE_0__["productsSeeder"],
      brand: {},
      products: [],
      panel1: [],
      panel2: [],
      panel3: [],
      panel4: [],
      panel5: [],
      panel6: [],
      panel7: [],
      queryParam: {
        page: 1,
        categorySlug: null,
        brandIds: [],
        attributeValues: [],
        keyword: null,
        sortBy: "popular",
        minPrice: null,
        maxPrice: null
      },
      brandDetails: {},
      detailsLoading: false
    };
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  },
  created: function created() {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getDetails();
              // this.queryParam.brandIds = [this.$route.params.brandId];
              // this.getList({
              //     page: this.queryParam.page,
              //     categorySlug: this.queryParam.categorySlug,
              //     brandIds: this.queryParam.brandIds,
              //     attributeValues: this.queryParam.attributeValues,
              //     keyword: this.queryParam.keyword,
              //     sortBy: this.queryParam.sortBy,
              //     minPrice: this.queryParam.minPrice,
              //     maxPrice: this.queryParam.maxPrice
              // });
            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getDetails: function getDetails() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.call_api("get", "brand/details/".concat(_this2.$route.params.slug));
              case 2:
                res = _context2.sent;
                if (res.data.success) {
                  _this2.brandDetails = res.data.data;
                } else {
                  _this2.snack({
                    message: res.data.message,
                    color: "red"
                  });
                  _this2.$router.push({
                    name: "404"
                  });
                }
                _this2.detailsLoading = false;
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getList: function getList(obj) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var params, url, res, _res$data$products, _res$data$allBrands, _res$data$allBrands$d;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = _objectSpread(_objectSpread({}, _this3.queryParam), obj);
                url = "product/search?";
                url += "&page=".concat(_this3.queryParam.page);
                url += params.categorySlug ? "&category_slug=".concat(params.categorySlug) : "";
                url += params.brandIds ? "&brand_ids=".concat(params.brandIds) : "";
                url += params.attributeValues ? "&attribute_values=".concat(params.attributeValues) : "";
                url += params.keyword ? "&keyword=".concat(params.keyword) : "";
                url += params.sortBy ? "&sort_by=".concat(params.sortBy) : "";
                url += params.minPrice ? "&min_price=".concat(params.minPrice) : "";
                url += params.maxPrice ? "&max_price=".concat(params.maxPrice) : "";
                _context3.next = 12;
                return _this3.call_api("get", url);
              case 12:
                res = _context3.sent;
                if (res.data.success) {
                  _this3.products = (_res$data$products = res.data.products) === null || _res$data$products === void 0 ? void 0 : _res$data$products.data;
                  _this3.panel1 = _this3.getMultipleRandom(6);
                  _this3.panel2 = _this3.getMultipleRandom(6);
                  _this3.panel3 = _this3.getMultipleRandom(1);
                  _this3.panel4 = _this3.getMultipleRandom(4);
                  _this3.panel5 = _this3.getMultipleRandom(1);
                  _this3.panel6 = _this3.getMultipleRandom(4);
                  _this3.panel7 = _this3.getMultipleRandom(4);
                  _this3.brand = (_res$data$allBrands = res.data.allBrands) === null || _res$data$allBrands === void 0 ? void 0 : (_res$data$allBrands$d = _res$data$allBrands.data) === null || _res$data$allBrands$d === void 0 ? void 0 : _res$data$allBrands$d.find(function (a) {
                    return (a === null || a === void 0 ? void 0 : a.id) == parseInt(_this3.$route.params.brandId);
                  });
                }
              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getMultipleRandom: function getMultipleRandom(num) {
      var _this$products;
      var shuffled = (_this$products = this.products) === null || _this$products === void 0 ? void 0 : _this$products.sort(function () {
        return 0.5 - Math.random();
      });
      return shuffled === null || shuffled === void 0 ? void 0 : shuffled.slice(0, num);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-row", {
    staticClass: "products-grid",
    attrs: {
      tag: "section"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "products-grid-bar mb-5"
  }, [_c("h5", [_vm._v(_vm._s(_vm.title || "H5"))]), _vm._v(" "), _c("div", {
    staticClass: "d-none d-md-flex products-grid-bar-actions"
  }, [_c("CustomButton", {
    attrs: {
      color: "grey2",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    attrs: {
      color: "grey2",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    attrs: {
      color: "grey2",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    attrs: {
      color: "grey2",
      text: "Nuevo"
    }
  })], 1)]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-3",
    attrs: {
      dense: ""
    }
  }, [_vm.shopCard ? _c("v-col", {
    attrs: {
      cols: "6",
      sm: "8",
      md: "4"
    }
  }, [_c("ShopActionCard", {
    attrs: {
      boxStyle: "vertical",
      href: _vm.shopCardLink,
      to: _vm.shopCardTo
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._l(_vm.products, function (product) {
    return _c("v-col", {
      key: "product-col-".concat(product.slug),
      attrs: {
        cols: _vm.cols,
        sm: _vm.sm,
        md: _vm.md,
        lg: _vm.lg,
        xl: _vm.xl
      }
    }, [_c("ProductBox", {
      attrs: {
        productDetails: product,
        boxStyle: _vm.productStyle
      }
    })], 1);
  })], 2), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "8",
      md: "4"
    }
  }, [_c("CustomButton", {
    attrs: {
      block: "",
      color: "grey",
      text: "Ver más",
      href: _vm.href,
      to: _vm.to
    }
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", {
    staticClass: "mr-1 ms-1 mb-5 border-div"
  }, [_c("v-col", {
    staticClass: "brand",
    attrs: {
      cols: "12",
      md: "5"
    }
  }, [_c("div", {
    staticClass: "div-container"
  }, [_c("div", {
    staticClass: "col1"
  }, [_c("div", {
    staticClass: "div-img"
  }, [_c("div", [_c("v-img", {
    attrs: {
      "max-width": "100px",
      src: "../../public/assets/img/carousel-item-placeholder.png"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col2"
  }, [_c("h5", {
    staticClass: "black--text bold"
  }, [_vm._v(_vm._s(_vm.brandDetails.name))]), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("# Marcas")])]), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "col3"
  }, [_c("p", {
    staticClass: "black--text"
  }, [_vm._v("\n                        " + _vm._s(_vm.brandDetails.resumen) + "\n                    ")])])]), _vm._v(" "), _c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6",
      lg: "6",
      xl: "6"
    }
  }, [_c("CustomButton", {
    attrs: {
      block: "",
      color: "nero",
      text: "Ir a colección"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6",
      lg: "6",
      xl: "6"
    }
  }, [_c("CustomButton", {
    attrs: {
      block: "",
      color: "grey2",
      text: "Descargar catalogo"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("CustomButton", {
    attrs: {
      block: "",
      color: "white",
      text: "Conocer historia de marca",
      to: {
        name: "AboutBrand",
        params: {
          slug: _vm.brandDetails.slug
        }
      }
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "banner",
    attrs: {
      cols: "12",
      md: "7"
    }
  }, [_c("v-img", {
    staticClass: "img-banner",
    attrs: {
      src: "../../public/assets/img/carousel-item-placeholder.png"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bar"
  }, [_c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("CustomButton", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("ProductsGrid", {
    staticClass: "mb-6",
    attrs: {
      products: _vm.productsSeeder.slice(0, 6),
      filtrable: "",
      cols: "6",
      sm: "4",
      md: "2"
    }
  }), _vm._v(" "), _c("ProductsGrid", {
    staticClass: "mb-6",
    attrs: {
      products: _vm.productsSeeder.slice(0, 6),
      filtrable: "",
      cols: "6",
      sm: "4",
      md: "2"
    }
  }), _vm._v(" "), _c("ProductsGrid", {
    staticClass: "mb-6",
    attrs: {
      products: _vm.productsSeeder.slice(0, 4),
      filtrable: "",
      shopCard: "",
      cols: "6",
      sm: "4",
      md: "2"
    }
  }), _vm._v(" "), _c("ProductsGrid", {
    staticClass: "mb-6",
    attrs: {
      products: _vm.productsSeeder.slice(0, 4),
      filtrable: "",
      shopCard: "",
      cols: "6",
      sm: "4",
      md: "2"
    }
  }), _vm._v(" "), _c("ProductsGrid", {
    staticClass: "mb-6",
    attrs: {
      products: _vm.productsSeeder.slice(0, 4),
      filtrable: "",
      cols: "12",
      sm: "6",
      md: "3"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products-grid-bar[data-v-1aa5ecdb] {\n  display: flex;\n  justify-content: space-between;\n}\n.products-grid-bar-actions[data-v-1aa5ecdb] {\n  display: flex;\n  gap: 1rem;\n}\n@media (min-width: 600px) {\n.products-grid-bar-actions .v-btn[data-v-1aa5ecdb] {\n    min-width: 164px;\n}\n}\n.products-grid .row--dense > .col[data-v-1aa5ecdb],\n.products-grid .row--dense > [class*=col-][data-v-1aa5ecdb] {\n  padding: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-application.theme--light {\n  background: #fafcfc;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-img[data-v-335f5d44] {\n  background-color: #dfdfdf;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-banner[data-v-335f5d44] {\n  height: 100%;\n}\n.cards[data-v-335f5d44] {\n  margin: 20px 0px;\n  padding: 10px 0;\n}\n.bar2[data-v-335f5d44] {\n  margin: 20px 0px;\n  display: flex;\n  justify-content: flex-end;\n  overflow: auto;\n}\n.bar3[data-v-335f5d44] {\n  margin: 20px 0px;\n  display: flex;\n  justify-content: flex-start;\n  overflow: auto;\n}\n.brand[data-v-335f5d44] {\n  background-color: #fff;\n  border-end-start-radius: 10px;\n  border-top-left-radius: 10px;\n  height: 413px;\n}\n.border-div[data-v-335f5d44] {\n  border: 1px solid #e4e4e4;\n  border-radius: 10px;\n  height: 413px;\n}\n@media (max-width: 768px) {\n.border-div[data-v-335f5d44] {\n    border: 1px solid #e4e4e4;\n    border-radius: 10px;\n    height: 664px;\n}\n}\n.div-container[data-v-335f5d44] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.col1[data-v-335f5d44],\n.col2[data-v-335f5d44] {\n  max-width: 300px;\n  padding: 5px 10px 5px 10px;\n}\n.col3[data-v-335f5d44] {\n  width: 100%;\n  padding: 5px 10px 5px 10px;\n}\n.divider[data-v-335f5d44] {\n  background-color: #dfdfdf;\n  width: 100%;\n  height: 2px;\n  margin: 10px 10px 10px 10px;\n}\n.banner[data-v-335f5d44] {\n  background-color: #e4e4e4;\n  border-end-end-radius: 10px;\n  border-top-right-radius: 10px;\n  height: 413px;\n}\n@media (max-width: 959px) {\n.brand[data-v-335f5d44] {\n    order: 2;\n    border-end-start-radius: 10px;\n    border-start-start-radius: 0px;\n    border-end-end-radius: 10px;\n}\n.banner[data-v-335f5d44] {\n    order: 1;\n    border-end-end-radius: 0px;\n    border-start-start-radius: 10px;\n    border-start-end-radius: 10px;\n    height: 250px;\n    width: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/global/ProductsGrid.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/ProductsGrid.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsGrid_vue_vue_type_template_id_1aa5ecdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true& */ "./resources/js/components/global/ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true&");
/* harmony import */ var _ProductsGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsGrid.vue?vue&type=script&lang=js& */ "./resources/js/components/global/ProductsGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductsGrid_vue_vue_type_style_index_0_id_1aa5ecdb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true& */ "./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductsGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsGrid_vue_vue_type_template_id_1aa5ecdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsGrid_vue_vue_type_template_id_1aa5ecdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1aa5ecdb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/ProductsGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/ProductsGrid.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/ProductsGrid.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_style_index_0_id_1aa5ecdb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=style&index=0&id=1aa5ecdb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_style_index_0_id_1aa5ecdb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_style_index_0_id_1aa5ecdb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_style_index_0_id_1aa5ecdb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_style_index_0_id_1aa5ecdb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_template_id_1aa5ecdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductsGrid.vue?vue&type=template&id=1aa5ecdb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_template_id_1aa5ecdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsGrid_vue_vue_type_template_id_1aa5ecdb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/BrandDetails.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/BrandDetails.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BrandDetails_vue_vue_type_template_id_335f5d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true& */ "./resources/js/pages/BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true&");
/* harmony import */ var _BrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandDetails.vue?vue&type=script&lang=js& */ "./resources/js/pages/BrandDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BrandDetails_vue_vue_type_style_index_0_id_335f5d44_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss& */ "./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss&");
/* harmony import */ var _BrandDetails_vue_vue_type_style_index_1_id_335f5d44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true& */ "./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _BrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BrandDetails_vue_vue_type_template_id_335f5d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BrandDetails_vue_vue_type_template_id_335f5d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "335f5d44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/BrandDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/BrandDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/BrandDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BrandDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_0_id_335f5d44_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=0&id=335f5d44&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_0_id_335f5d44_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_0_id_335f5d44_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_0_id_335f5d44_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_0_id_335f5d44_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_1_id_335f5d44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=style&index=1&id=335f5d44&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_1_id_335f5d44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_1_id_335f5d44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_1_id_335f5d44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_style_index_1_id_335f5d44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_template_id_335f5d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/BrandDetails.vue?vue&type=template&id=335f5d44&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_template_id_335f5d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_BrandDetails_vue_vue_type_template_id_335f5d44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);