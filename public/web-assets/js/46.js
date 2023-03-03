(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/ProductItem3.vue */ "./resources/js/components/global/ProductItem3.vue");
/* harmony import */ var _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/ProductItem2.vue */ "./resources/js/components/global/ProductItem2.vue");
/* harmony import */ var _components_global_ProductItem6_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/ProductItem6.vue */ "./resources/js/components/global/ProductItem6.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/LayoutNavbarSpaces.vue */ "./resources/js/components/global/LayoutNavbarSpaces.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");
/* harmony import */ var _seeders_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../seeders/products */ "./resources/js/seeders/products.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      productDetails: {},
      overlay: false,
      overlay1: true,
      overlay2: false,
      sliderSeeder: _seeders_products__WEBPACK_IMPORTED_MODULE_7__["sliderSeeder"],
      id: "0",
      name: "Colección",
      ref: "REFERENCIA",
      brand: "Marcas",
      val: "000.000.000 COP",
      img: "/public/assets/img/item-placeholder.png",
      iva: "* Iva Incluido",
      varia: "Variación",
      model: 0,
      tags: ["1", "2", "3"],
      moreProducts: [],
      footerProducts: []
    };
  },
  components: {
    ProductItem3: _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductItem2: _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductItem6: _components_global_ProductItem6_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LayoutNavbarSpaces: _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  methods: {
    getDetails: function getDetails() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, _this$productDetails, _this$productDetails2;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "product/details/".concat(_this.$route.params.slug));
            case 2:
              res = _context.sent;
              if (res.data.success) {
                _this.productDetails = res.data.data;
                _this.getMoreProducts((_this$productDetails = _this.productDetails) === null || _this$productDetails === void 0 ? void 0 : _this$productDetails.id);
                _this.getMoreProducts2((_this$productDetails2 = _this.productDetails) === null || _this$productDetails2 === void 0 ? void 0 : _this$productDetails2.id);
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    getMoreProducts: function getMoreProducts(id) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res, _res$data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.call_api("get", "product/random/6/".concat(id));
            case 2:
              res = _context2.sent;
              if (res.data.success) {
                _this2.setMoreProducts("moreProducts", (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data);
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    },
    getMoreProducts2: function getMoreProducts2(id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var res, _res$data2;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.call_api("get", "product/random/4/".concat(id));
            case 2:
              res = _context3.sent;
              if (res.data.success) {
                _this3.setMoreProducts("footerProducts", (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data);
              }
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    setMoreProducts: function setMoreProducts(value, data) {
      var _this4 = this;
      data === null || data === void 0 ? void 0 : data.map(function (product) {
        _this4[value].push({
          name: product === null || product === void 0 ? void 0 : product.name,
          val: (product === null || product === void 0 ? void 0 : product.base_price) + " " + (product === null || product === void 0 ? void 0 : product.currency),
          img: product === null || product === void 0 ? void 0 : product.thumbnail_image,
          description: product === null || product === void 0 ? void 0 : product.description,
          brand: product === null || product === void 0 ? void 0 : product.brandName,
          ref: product === null || product === void 0 ? void 0 : product.reference,
          slug: product === null || product === void 0 ? void 0 : product.slug
        });
      });
    }
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  },
  created: function created() {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this5.getDetails();
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm$productDetails, _vm$productDetails2, _vm$productDetails3, _vm$productDetails4, _vm$productDetails$na, _vm$productDetails5, _vm$productDetails$br, _vm$productDetails6, _vm$productDetails6$b, _vm$productDetails$lo, _vm$productDetails7, _vm$productDetails$cu, _vm$productDetails8, _vm$productDetails$hi, _vm$productDetails9, _vm$productDetails$cu2, _vm$productDetails10, _vm$productDetails$st, _vm$productDetails11, _vm$productDetails$wa, _vm$productDetails12, _vm$productDetails$sh, _vm$productDetails13;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("v-row", [_c("v-col", {
    staticClass: "positionColbuttons",
    attrs: {
      cols: "8"
    }
  }, [_c("v-row", {
    attrs: {
      dense: "",
      justify: ""
    }
  }, [_c("v-col", [_c("v-img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.overlay,
      expression: "overlay"
    }],
    attrs: {
      src: (_vm$productDetails = _vm.productDetails) === null || _vm$productDetails === void 0 ? void 0 : _vm$productDetails.ficha_tecnica_del_producto,
      height: "700px",
      width: "100%"
    }
  }), _vm._v(" "), _c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.overlay1,
      expression: "overlay1"
    }],
    attrs: {
      slides: (_vm$productDetails2 = _vm.productDetails) === null || _vm$productDetails2 === void 0 ? void 0 : _vm$productDetails2.imagenes,
      height: "700px",
      width: "100%"
    }
  }), _vm._v(" "), _c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.overlay2,
      expression: "overlay2"
    }],
    attrs: {
      slides: (_vm$productDetails3 = _vm.productDetails) === null || _vm$productDetails3 === void 0 ? void 0 : _vm$productDetails3.videos,
      height: "700px",
      width: "100%"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "buttonsAct px-4"
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.overlay = true;
        _vm.overlay1 = false;
        _vm.overlay2 = false;
      }
    }
  }, [_vm._v("Especificación\n                    ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.overlay = false;
        _vm.overlay1 = true;
        _vm.overlay2 = false;
      }
    }
  }, [_vm._v("Imágenes\n                    ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.overlay = false;
        _vm.overlay1 = false;
        _vm.overlay2 = true;
      }
    }
  }, [_vm._v("Videos\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c("v-col", [_c("div", {
    staticClass: "product-item-body pa-4 la-border mr-5"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-2"
  }, [_vm._v("REFERENCIA: " + _vm._s((_vm$productDetails4 = _vm.productDetails) === null || _vm$productDetails4 === void 0 ? void 0 : _vm$productDetails4.reference))]), _vm._v(" "), _c("v-icon", {
    attrs: {
      right: ""
    }
  }, [_vm._v(" la-bookmark ")])], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 text-uppercase font-weight-bold mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$na = (_vm$productDetails5 = _vm.productDetails) === null || _vm$productDetails5 === void 0 ? void 0 : _vm$productDetails5.name) !== null && _vm$productDetails$na !== void 0 ? _vm$productDetails$na : ""))]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$br = (_vm$productDetails6 = _vm.productDetails) === null || _vm$productDetails6 === void 0 ? void 0 : (_vm$productDetails6$b = _vm$productDetails6.brand) === null || _vm$productDetails6$b === void 0 ? void 0 : _vm$productDetails6$b.name) !== null && _vm$productDetails$br !== void 0 ? _vm$productDetails$br : ""))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("h5", {
    staticClass: "subtitle1 mb-2 mr-2"
  }, [_vm._v(_vm._s((_vm$productDetails$lo = (_vm$productDetails7 = _vm.productDetails) === null || _vm$productDetails7 === void 0 ? void 0 : _vm$productDetails7.lowest_price) !== null && _vm$productDetails$lo !== void 0 ? _vm$productDetails$lo : "000") + " " + _vm._s((_vm$productDetails$cu = (_vm$productDetails8 = _vm.productDetails) === null || _vm$productDetails8 === void 0 ? void 0 : _vm$productDetails8.currency) !== null && _vm$productDetails$cu !== void 0 ? _vm$productDetails$cu : ""))]), _vm._v(" "), _c("h5", {
    staticClass: "caption mb-2"
  }, [_c("del", [_vm._v(_vm._s((_vm$productDetails$hi = (_vm$productDetails9 = _vm.productDetails) === null || _vm$productDetails9 === void 0 ? void 0 : _vm$productDetails9.highest_price) !== null && _vm$productDetails$hi !== void 0 ? _vm$productDetails$hi : "000") + " " + _vm._s((_vm$productDetails$cu2 = (_vm$productDetails10 = _vm.productDetails) === null || _vm$productDetails10 === void 0 ? void 0 : _vm$productDetails10.currency) !== null && _vm$productDetails$cu2 !== void 0 ? _vm$productDetails$cu2 : ""))])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "caption mb-3"
  }, [_vm._v(_vm._s(_vm.iva))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-around align-center"
  }, [_c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        _vm.model = Math.max(_vm.model - 1, 0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      small: ""
    }
  }, [_vm._v(" la-minus ")])], 1), _vm._v("\n                        " + _vm._s(_vm.model) + "\n                        "), _c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        _vm.model = Math.min(_vm.model + 1, 8);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      small: ""
    }
  }, [_vm._v(" la-plus ")])], 1)], 1)]), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Agregar a Compras",
      block: ""
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mt-3",
    attrs: {
      light: "",
      text: "Consultar a un Asesor",
      block: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mr-5 mt-3"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v(_vm._s(_vm.varia))]), _vm._v(" "), _c("v-btn-toggle", [_c("v-btn", {
    staticClass: "blue toggle-btn"
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-2 white toggle-btn"
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-2 black toggle-btn"
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-2 red toggle-btn"
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mr-5 mt-3"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Disponibilidad")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$st = (_vm$productDetails11 = _vm.productDetails) === null || _vm$productDetails11 === void 0 ? void 0 : _vm$productDetails11.stock) !== null && _vm$productDetails$st !== void 0 ? _vm$productDetails$st : "000") + " en stock")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Garantía")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$wa = (_vm$productDetails12 = _vm.productDetails) === null || _vm$productDetails12 === void 0 ? void 0 : _vm$productDetails12.warranty_text) !== null && _vm$productDetails$wa !== void 0 ? _vm$productDetails$wa : "--"))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Pago")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v("--")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Envío")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1"
  }, [_vm._v(_vm._s((_vm$productDetails$sh = (_vm$productDetails13 = _vm.productDetails) === null || _vm$productDetails13 === void 0 ? void 0 : _vm$productDetails13.shipping) !== null && _vm$productDetails$sh !== void 0 ? _vm$productDetails$sh : "--"))])])]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-3 mb-2"
  }, [_vm._v("Se incluye con la compra")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("product-item-6")], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-space-between mb-8"
  }, [_c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("H5")]), _vm._v(" "), _c("div", {
    staticStyle: {
      width: "38%"
    }
  }, [_c("custom-button", {
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1)]), _vm._v(" "), _c("v-row", _vm._l(_vm.footerProducts, function (product, i) {
    return _c("v-col", {
      key: i,
      attrs: {
        cols: "3"
      }
    }, [_c("product-item-3", {
      attrs: {
        data: product
      }
    })], 1);
  }), 1), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("custom-button", {
    staticClass: "mt-6",
    staticStyle: {
      width: "40%"
    },
    attrs: {
      light: "",
      text: "Ver más"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between mb-8"
  }, [_c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("H5")]), _vm._v(" "), _c("div", {
    staticStyle: {
      width: "38%"
    }
  }, [_c("custom-button", {
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1)]), _vm._v(" "), _c("v-row", _vm._l(_vm.moreProducts, function (product, i) {
    return _c("v-col", {
      key: i,
      attrs: {
        cols: "2"
      }
    }, [_c("product-item-2", {
      attrs: {
        headerPr: "true",
        data: product
      }
    })], 1);
  }), 1), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("custom-button", {
    staticClass: "mt-6 mb-6",
    staticStyle: {
      width: "40%"
    },
    attrs: {
      light: "",
      text: "Ver más"
    }
  })], 1)], 1), _vm._v(" "), _c("v-card", [_c("v-footer", {
    staticClass: "px-5 py-5",
    attrs: {
      color: "#18191A"
    }
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-between flex-wrap"
  }, [_c("v-col", {
    attrs: {
      cols: "2",
      sm: "3"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("© Idovela 2022")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4",
      sm: "3"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_c("i", {
    staticClass: "las la-globe"
  }), _vm._v(" Bogota, Colombia")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      sm: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("Información")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("Solicitudes")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("Contacto")])])], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-btn[data-v-3aa701e7] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.25px;\n  border-radius: 5px;\n}\n@media (min-width: 960px) {\n.v-btn[data-v-3aa701e7] {\n    font-size: 14px;\n}\n}\n.v-btn i[data-v-3aa701e7] {\n  font-size: 20px;\n}\n.v-btn[data-v-3aa701e7]:hover:before, .v-btn[data-v-3aa701e7]:focus:before {\n  opacity: 1;\n}\n.v-btn.v-size--default[data-v-3aa701e7] {\n  height: 38px;\n}\n.theme--light.v-btn[data-v-3aa701e7] {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-3aa701e7] {\n  background-color: #dfdfdf;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-3aa701e7]:before {\n  background-color: #ffffff;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled[data-v-3aa701e7] {\n  color: #000000 !important;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled.v-btn--has-bg[data-v-3aa701e7] {\n  background-color: #fafcfc !important;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7] {\n  color: #ffffff;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:hover, .theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:focus {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:before {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:focus:before {\n  background-color: #ffffff;\n}\n.buttonsAct[data-v-3aa701e7] {\n  top: 30px;\n  position: absolute;\n  width: 100%;\n}\n.positionColbuttons[data-v-3aa701e7] {\n  position: relative;\n}\n.la-border[data-v-3aa701e7] {\n  border-radius: 0.5em;\n}\n.v-btn-toggle[data-v-3aa701e7] {\n  border-radius: 0px;\n  height: 20px !important;\n}\n.toggle-btn[data-v-3aa701e7] {\n  height: 20px !important;\n  min-width: 20px !important;\n}\n.v-divider[data-v-3aa701e7] {\n  border-width: thin 0 0;\n  max-width: 94%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&");

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

/***/ "./resources/js/pages/Collection.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Collection.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection.vue?vue&type=template&id=3aa701e7&scoped=true& */ "./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&");
/* harmony import */ var _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.vue?vue&type=script&lang=js& */ "./resources/js/pages/Collection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& */ "./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3aa701e7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Collection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Collection.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Collection.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=template&id=3aa701e7&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/seeders/products.js":
/*!******************************************!*\
  !*** ./resources/js/seeders/products.js ***!
  \******************************************/
/*! exports provided: sliderSeeder, productsSeeder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderSeeder", function() { return sliderSeeder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsSeeder", function() { return productsSeeder; });
var sliderSeeder = [{
  src: "https://picsum.photos/1920/1080?random=1",
  type: "image"
}, {
  src: "https://picsum.photos/1920/1080?random=2",
  type: "image"
}, {
  src: "https://picsum.photos/1920/1080?random=3",
  type: "image"
}, {
  src: "/public/assets/video/product-example.mp4",
  type: "video"
}, {
  src: "https://www.youtube.com/embed/UWtzv9-b6yI",
  type: "iframe"
}];
var productsSeeder = [{
  id: "1",
  name: "Titulo",
  img: "https://picsum.photos/500/300?random=1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum."
}, {
  id: "2",
  name: "Titulo 2",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=2"
}, {
  id: "3",
  name: "Titulo 3",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=3"
}, {
  id: "4",
  name: "Titulo 4",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=4"
}, {
  id: "5",
  name: "Titulo 5",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=5"
}, {
  id: "6",
  name: "Titulo 6",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=6"
}, {
  id: "7",
  name: "Titulo 7",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=7"
}, {
  id: "8",
  name: "Titulo 8",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=8"
}, {
  id: "9",
  name: "Titulo 9",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=9"
}];


/***/ })

}]);