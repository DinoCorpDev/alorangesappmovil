(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FooterCustom"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/ProductItem3.vue */ "./resources/js/components/global/ProductItem3.vue");
/* harmony import */ var _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/ProductItem2.vue */ "./resources/js/components/global/ProductItem2.vue");
/* harmony import */ var _components_global_ProductItem6_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/ProductItem6.vue */ "./resources/js/components/global/ProductItem6.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_FooterCustom_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/FooterCustom.vue */ "./resources/js/components/global/FooterCustom.vue");
/* harmony import */ var _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global/LayoutNavbarSpaces.vue */ "./resources/js/components/global/LayoutNavbarSpaces.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








// import ChartView from "../components/global/ChartView.vue";

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      productDetails: {},
      showp: true,
      showp1: false,
      showp2: false,
      showd: true,
      showd1: false,
      showd2: false,
      id: "0",
      img: "/public/assets/img/item-placeholder.png",
      iva: "* Iva Incluido",
      varia: "Variación",
      model: 0,
      tags: ["1", "2", "3"],
      ratings: {
        rating5: 67,
        rating4: 22,
        rating3: 11,
        rating2: 0,
        rating1: 0,
        vidaUtil: 0
      },
      desserts: [],
      impacto: "28%",
      moreProducts: [],
      footerProducts: []
    };
  },
  components: {
    ProductItem3: _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductItem2: _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductItem6: _components_global_ProductItem6_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LayoutNavbarSpaces: _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    FooterCustom: _components_global_FooterCustom_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    // ChartView
  },

  methods: {
    getDetails: function getDetails() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, _this$productDetails, _this$productDetails2, _this$productDetails3;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.call_api("get", "product/details/".concat(_this.$route.params.slug));
            case 2:
              res = _context.sent;
              if (res.data.success) {
                _this.productDetails = res.data.data;
                _this.setVidaUtil(_this.productDetails.vida_util);
                _this.setComposition(_this.productDetails);
                _this.setImpacto((_this$productDetails = _this.productDetails) === null || _this$productDetails === void 0 ? void 0 : _this$productDetails.impacto_ambiental);
                _this.getMoreProducts((_this$productDetails2 = _this.productDetails) === null || _this$productDetails2 === void 0 ? void 0 : _this$productDetails2.id);
                _this.getMoreProducts2((_this$productDetails3 = _this.productDetails) === null || _this$productDetails3 === void 0 ? void 0 : _this$productDetails3.id);
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
        var res, _res$data, _res$data$data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this2.call_api("get", "product/random/6/".concat(id));
            case 2:
              res = _context2.sent;
              if (res.data.success) {
                (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.map(function (product) {
                  _this2.moreProducts.push({
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
        var res, _res$data2, _res$data2$data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3.call_api("get", "product/random/4/".concat(id));
            case 2:
              res = _context3.sent;
              if (res.data.success) {
                (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.map(function (product) {
                  _this3.footerProducts.push({
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
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }))();
    },
    setVidaUtil: function setVidaUtil(value) {
      if (value) {
        switch (value) {
          case "1-10 años":
            this.ratings.vidaUtil = 67;
            break;
          case "10-25 años":
            this.ratings.vidaUtil = 100;
            break;
          case "1-24 Meses":
            this.ratings.vidaUtil = 34;
            break;
          case "1-14 Semanas":
            this.ratings.vidaUtil = 0;
            break;
          default:
            this.ratings.vidaUtil = 0;
            break;
        }
      }
    },
    setComposition: function setComposition(data) {
      var _data$plastico, _data$peso_plastico, _data$carton, _data$peso_carton, _data$papel, _data$peso_papel, _data$metal, _data$peso_metal, _data$vidrio, _data$peso_vidrio, _data$madera, _data$peso_madera, _data$textil, _data$peso_textil, _data$bateria_electri, _data$peso_bateria_el;
      this.desserts = [{
        color: "background-color:#114B99",
        name: "Plástico",
        percent: (_data$plastico = data === null || data === void 0 ? void 0 : data.plastico) !== null && _data$plastico !== void 0 ? _data$plastico : "-",
        kg: (_data$peso_plastico = data === null || data === void 0 ? void 0 : data.peso_plastico) !== null && _data$peso_plastico !== void 0 ? _data$peso_plastico : "-" + "Kg"
      }, {
        color: "background-color:#FEA60F",
        name: "Cartón",
        percent: (_data$carton = data === null || data === void 0 ? void 0 : data.carton) !== null && _data$carton !== void 0 ? _data$carton : "-",
        kg: (_data$peso_carton = data === null || data === void 0 ? void 0 : data.peso_carton) !== null && _data$peso_carton !== void 0 ? _data$peso_carton : "-" + "Kg"
      }, {
        color: "background-color:#FFFFFF",
        name: "Papel",
        percent: (_data$papel = data === null || data === void 0 ? void 0 : data.papel) !== null && _data$papel !== void 0 ? _data$papel : "-",
        kg: (_data$peso_papel = data === null || data === void 0 ? void 0 : data.peso_papel) !== null && _data$peso_papel !== void 0 ? _data$peso_papel : "-" + "Kg"
      }, {
        color: "background-color:#445056",
        name: "Metal",
        percent: (_data$metal = data === null || data === void 0 ? void 0 : data.metal) !== null && _data$metal !== void 0 ? _data$metal : "-",
        kg: (_data$peso_metal = data === null || data === void 0 ? void 0 : data.peso_metal) !== null && _data$peso_metal !== void 0 ? _data$peso_metal : "-" + "Kg"
      }, {
        color: "background-color:#61A959",
        name: "Vidrio",
        percent: (_data$vidrio = data === null || data === void 0 ? void 0 : data.vidrio) !== null && _data$vidrio !== void 0 ? _data$vidrio : "-",
        kg: (_data$peso_vidrio = data === null || data === void 0 ? void 0 : data.peso_vidrio) !== null && _data$peso_vidrio !== void 0 ? _data$peso_vidrio : "-" + "Kg"
      }, {
        color: "background-color:#B1771D",
        name: "Madera",
        percent: (_data$madera = data === null || data === void 0 ? void 0 : data.madera) !== null && _data$madera !== void 0 ? _data$madera : "-",
        kg: (_data$peso_madera = data === null || data === void 0 ? void 0 : data.peso_madera) !== null && _data$peso_madera !== void 0 ? _data$peso_madera : "-" + "Kg"
      }, {
        color: "background-color:#ED847B",
        name: "Textil",
        percent: (_data$textil = data === null || data === void 0 ? void 0 : data.textil) !== null && _data$textil !== void 0 ? _data$textil : "-",
        kg: (_data$peso_textil = data === null || data === void 0 ? void 0 : data.peso_textil) !== null && _data$peso_textil !== void 0 ? _data$peso_textil : "-" + "Kg"
      }, {
        color: "background-color:#ED847B",
        name: "Baterías / Eléctrico",
        percent: (_data$bateria_electri = data === null || data === void 0 ? void 0 : data.bateria_electrico) !== null && _data$bateria_electri !== void 0 ? _data$bateria_electri : "-",
        kg: (_data$peso_bateria_el = data === null || data === void 0 ? void 0 : data.peso_bateria_electrico) !== null && _data$peso_bateria_el !== void 0 ? _data$peso_bateria_el : "-" + "Kg"
      }];
    },
    setImpacto: function setImpacto(value) {
      if (value) {
        switch (value) {
          case "Reversible":
            this.impacto = "35%";
            break;
          case "Sostenible":
            this.impacto = "11%";
            break;
          case "No Reversible":
            this.impacto = "75%";
            break;
          default:
            this.impacto = "11%";
            break;
        }
      }
    }
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  },
  created: function created() {
    var _this4 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _this4.getDetails();
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true& ***!
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
  return _c("v-footer", {
    staticClass: "px-5 py-5",
    attrs: {
      color: "#18191A"
    }
  }, [_c("v-row", {
    staticClass: "d-flex justify-center flex-wrap"
  }, [_c("v-col", {
    attrs: {
      cols: "6",
      sm: "3",
      md: "3"
    }
  }, [_c("span", [_vm._v("© Idovela 2022")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      sm: "3",
      md: "3"
    }
  }, [_c("span", [_c("i", {
    staticClass: "las la-globe"
  }), _vm._v(" Bogota, Colombia ")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6",
      md: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", [_vm._v("Información")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", [_vm._v("Solicitudes")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", [_vm._v("Contacto")])])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm$productDetails, _vm$productDetails2, _vm$productDetails3, _vm$productDetails4, _vm$productDetails5, _vm$productDetails6, _vm$productDetails7, _vm$productDetails8, _vm$productDetails9, _vm$productDetails10, _vm$productDetails11, _vm$productDetails12, _vm$productDetails13, _vm$productDetails14, _vm$productDetails15, _vm$productDetails16, _vm$productDetails17, _vm$productDetails18, _vm$productDetails19, _vm$productDetails20, _vm$productDetails21, _vm$productDetails22, _vm$productDetails23, _vm$productDetails24, _vm$productDetails25, _vm$productDetails26, _vm$productDetails27, _vm$productDetails28, _vm$productDetails29, _vm$productDetails30, _vm$productDetails31, _vm$productDetails32, _vm$productDetails$na, _vm$productDetails33, _vm$productDetails$br, _vm$productDetails34, _vm$productDetails34$, _vm$productDetails$lo, _vm$productDetails35, _vm$productDetails$cu, _vm$productDetails36, _vm$productDetails$hi, _vm$productDetails37, _vm$productDetails$cu2, _vm$productDetails38, _vm$productDetails$st, _vm$productDetails39, _vm$productDetails$wa, _vm$productDetails40, _vm$productDetails$sh, _vm$productDetails41;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("div", [_c("v-row", {
    staticClass: "px-2 pt-8"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      md: "4",
      order: "3",
      "order-md": "1",
      sm: "12",
      "order-sm": "3"
    }
  }, [_c("v-row", {
    staticClass: "px-4",
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    attrs: {
      light: ""
    },
    on: {
      click: function click($event) {
        _vm.showd = true;
        _vm.showd1 = false;
        _vm.showd2 = false;
      }
    }
  }, [_vm._v("\n                                Especificación\n                            ")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    attrs: {
      light: ""
    },
    on: {
      click: function click($event) {
        _vm.showd = false;
        _vm.showd1 = true;
        _vm.showd2 = false;
      }
    }
  }, [_vm._v("\n                                Reseña\n                            ")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    attrs: {
      light: ""
    },
    on: {
      click: function click($event) {
        _vm.showd = false;
        _vm.showd1 = false;
        _vm.showd2 = true;
      }
    }
  }, [_vm._v("\n                                Sostenibilidad\n                            ")])], 1)], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-6 mb-4"
  }), _vm._v(" "), _c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showd,
      expression: "showd"
    }],
    staticClass: "overflow-y-auto overflow-uw pa-2",
    attrs: {
      "max-height": "645"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v("Energía")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("\n                                        " + _vm._s((_vm$productDetails = _vm.productDetails) === null || _vm$productDetails === void 0 ? void 0 : _vm$productDetails.intake) + "\n                                    ")])])], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "mb-2",
    attrs: {
      inset: "",
      vertical: ""
    }
  }), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v("Material")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("\n                                        " + _vm._s((_vm$productDetails2 = _vm.productDetails) === null || _vm$productDetails2 === void 0 ? void 0 : _vm$productDetails2.material) + "\n                                    ")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mt-4"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "5"
    }
  }, [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("v-icon", {
    staticClass: "mr-2"
  }, [_vm._v("la-cube")]), _vm._v(" "), _c("v-icon", {
    staticClass: "mr-2"
  }, [_vm._v("la-cube")]), _vm._v(" "), _c("v-icon", [_vm._v("la-cube")])], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Medida de Producto")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Medida de Embalaje")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Medida de Engaste")])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "5"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitles-gray"
  }, [_vm._v("(Fuente x Profundidad x Altura)")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase mt-3"
  }, [_vm._v("\n                                        " + _vm._s((_vm$productDetails3 = _vm.productDetails) === null || _vm$productDetails3 === void 0 ? void 0 : _vm$productDetails3.medida_producto) + "\n                                    ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("\n                                        " + _vm._s((_vm$productDetails4 = _vm.productDetails) === null || _vm$productDetails4 === void 0 ? void 0 : _vm$productDetails4.medidas_de_embalaje) + "\n                                    ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v(_vm._s((_vm$productDetails5 = _vm.productDetails) === null || _vm$productDetails5 === void 0 ? void 0 : _vm$productDetails5.engaste))])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitles-gray"
  }, [_vm._v("(Unidades)")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 mt-3"
  }, [_vm._v("\n                                        " + _vm._s((_vm$productDetails6 = _vm.productDetails) === null || _vm$productDetails6 === void 0 ? void 0 : _vm$productDetails6.unit_metering) + "\n                                    ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_vm._v("\n                                        " + _vm._s((_vm$productDetails7 = _vm.productDetails) === null || _vm$productDetails7 === void 0 ? void 0 : _vm$productDetails7.unit_metering) + "\n                                    ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_vm._v("\n                                        " + _vm._s((_vm$productDetails8 = _vm.productDetails) === null || _vm$productDetails8 === void 0 ? void 0 : _vm$productDetails8.unit_metering) + "\n                                    ")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mt-4"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$productDetails9 = _vm.productDetails) === null || _vm$productDetails9 === void 0 ? void 0 : _vm$productDetails9.peso_de_producto))])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Peso de Producto")])])], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "mb-2",
    attrs: {
      inset: "",
      vertical: ""
    }
  }), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$productDetails10 = _vm.productDetails) === null || _vm$productDetails10 === void 0 ? void 0 : _vm$productDetails10.peso_de_envio))])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Peso de Envío")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mt-4"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$productDetails11 = _vm.productDetails) === null || _vm$productDetails11 === void 0 ? void 0 : _vm$productDetails11.tipo_de_coneccion))])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Voltaje")])])], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "mb-2",
    attrs: {
      inset: "",
      vertical: ""
    }
  }), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v(_vm._s((_vm$productDetails12 = _vm.productDetails) === null || _vm$productDetails12 === void 0 ? void 0 : _vm$productDetails12.eficiencia) + " %")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Eficiencia")])])], 1)], 1)], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5"
  }, [_vm._v("Características")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2"
  }), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v(_vm._s((_vm$productDetails13 = _vm.productDetails) === null || _vm$productDetails13 === void 0 ? void 0 : _vm$productDetails13.caracteristica1))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails14 = _vm.productDetails) === null || _vm$productDetails14 === void 0 ? void 0 : _vm$productDetails14.caracteristica2))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails15 = _vm.productDetails) === null || _vm$productDetails15 === void 0 ? void 0 : _vm$productDetails15.caracteristica3))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails16 = _vm.productDetails) === null || _vm$productDetails16 === void 0 ? void 0 : _vm$productDetails16.caracteristica4))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails17 = _vm.productDetails) === null || _vm$productDetails17 === void 0 ? void 0 : _vm$productDetails17.caracteristica5))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails18 = _vm.productDetails) === null || _vm$productDetails18 === void 0 ? void 0 : _vm$productDetails18.caracteristica6))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails19 = _vm.productDetails) === null || _vm$productDetails19 === void 0 ? void 0 : _vm$productDetails19.caracteristica7))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5"
  }, [_vm._v("Manuales y Guías")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitles-gray mt-5"
  }, [_vm._v("(Para descargar)")])]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2"
  }), _vm._v(" "), _c("v-row", {
    staticClass: "mt-1 ml-1"
  }, [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("a", {
    staticClass: "subtitle2 text-white",
    attrs: {
      href: (_vm$productDetails20 = _vm.productDetails) === null || _vm$productDetails20 === void 0 ? void 0 : _vm$productDetails20.manual_de_producto,
      target: "_blank"
    }
  }, [_c("u", [_vm._v("Manual de producto")])])]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-1",
    attrs: {
      dense: ""
    }
  }, [_c("a", {
    staticClass: "subtitle2 text-white",
    attrs: {
      href: (_vm$productDetails21 = _vm.productDetails) === null || _vm$productDetails21 === void 0 ? void 0 : _vm$productDetails21.ficha_tecnica_del_producto,
      target: "_blank"
    }
  }, [_c("u", [_vm._v("Ficha técnica del producto")])])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_c("u", [_vm._v("Hora de especificaciones")])])]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-1",
    attrs: {
      dense: ""
    }
  }, [_c("a", {
    staticClass: "subtitle2 text-white",
    attrs: {
      href: (_vm$productDetails22 = _vm.productDetails) === null || _vm$productDetails22 === void 0 ? void 0 : _vm$productDetails22.manual_de_instalacion,
      target: "_blank"
    }
  }, [_c("u", [_vm._v("Guía de instalación")])])])], 1)], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5"
  }, [_vm._v("Beneficios")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2"
  }), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v("\n                            " + _vm._s((_vm$productDetails23 = _vm.productDetails) === null || _vm$productDetails23 === void 0 ? void 0 : _vm$productDetails23.beneficio1) + "\n                        ")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails24 = _vm.productDetails) === null || _vm$productDetails24 === void 0 ? void 0 : _vm$productDetails24.beneficio2))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails25 = _vm.productDetails) === null || _vm$productDetails25 === void 0 ? void 0 : _vm$productDetails25.beneficio3))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails26 = _vm.productDetails) === null || _vm$productDetails26 === void 0 ? void 0 : _vm$productDetails26.beneficio4))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s((_vm$productDetails27 = _vm.productDetails) === null || _vm$productDetails27 === void 0 ? void 0 : _vm$productDetails27.beneficio5))])]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5"
  }, [_vm._v("Servicio Postventa")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2"
  }), _vm._v(" "), _c("p", {
    staticClass: "subtitle2"
  }, [_vm._v("\n                        " + _vm._s((_vm$productDetails28 = _vm.productDetails) === null || _vm$productDetails28 === void 0 ? void 0 : _vm$productDetails28.postventa) + "\n                    ")])], 1), _vm._v(" "), _c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showd1,
      expression: "showd1"
    }],
    staticClass: "overflow-y-auto overflow-x-auto overflow-uw pa-2",
    attrs: {
      "max-height": "645"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Calificación")]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-2"
  }, [_c("v-col", {
    staticClass: "justify-end",
    staticStyle: {
      "line-height": "2.4"
    },
    attrs: {
      cols: "4"
    }
  }, [_c("h5", {
    staticClass: "text-uppercase"
  }, [_vm._v("5.0")]), _vm._v(" "), _c("v-rating", {
    attrs: {
      "empty-icon": "las la-star",
      "full-icon": "las la-star active",
      "half-icon": "las la-star half half",
      "background-color": "",
      length: "5",
      size: "11"
    },
    model: {
      value: _vm.rating,
      callback: function callback($$v) {
        _vm.rating = $$v;
      },
      expression: "rating"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "caption"
  }, [_vm._v("Opiniones (22)")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("v-row", [_c("v-col", {
    staticStyle: {
      "line-height": "0.1"
    },
    attrs: {
      cols: "1"
    }
  }, [_c("span", {
    staticClass: "caption mr-2"
  }, [_vm._v("5")]), _vm._v(" "), _c("span", {
    staticClass: "caption mr-2"
  }, [_vm._v("4")]), _vm._v(" "), _c("span", {
    staticClass: "caption mr-2"
  }, [_vm._v("3")]), _vm._v(" "), _c("span", {
    staticClass: "caption mr-2"
  }, [_vm._v("2")]), _vm._v(" "), _c("span", {
    staticClass: "caption mr-2"
  }, [_vm._v("1")])]), _vm._v(" "), _c("v-col", {
    staticStyle: {
      "line-height": "2.1"
    },
    attrs: {
      cols: "9"
    }
  }, [_c("v-progress-linear", {
    staticClass: "mt-2",
    attrs: {
      color: "white"
    },
    model: {
      value: _vm.ratings.rating5,
      callback: function callback($$v) {
        _vm.$set(_vm.ratings, "rating5", $$v);
      },
      expression: "ratings.rating5"
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "mt-4",
    attrs: {
      color: "white"
    },
    model: {
      value: _vm.ratings.rating4,
      callback: function callback($$v) {
        _vm.$set(_vm.ratings, "rating4", $$v);
      },
      expression: "ratings.rating4"
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "mt-4",
    attrs: {
      color: "white"
    },
    model: {
      value: _vm.ratings.rating3,
      callback: function callback($$v) {
        _vm.$set(_vm.ratings, "rating3", $$v);
      },
      expression: "ratings.rating3"
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "mt-4",
    attrs: {
      color: "white"
    },
    model: {
      value: _vm.ratings.rating2,
      callback: function callback($$v) {
        _vm.$set(_vm.ratings, "rating2", $$v);
      },
      expression: "ratings.rating2"
    }
  }), _vm._v(" "), _c("v-progress-linear", {
    staticClass: "mt-4",
    attrs: {
      color: "white"
    },
    model: {
      value: _vm.ratings.rating1,
      callback: function callback($$v) {
        _vm.$set(_vm.ratings, "rating1", $$v);
      },
      expression: "ratings.rating1"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    staticStyle: {
      "line-height": "0.1"
    },
    attrs: {
      cols: "2"
    }
  }, [_c("span", {
    staticClass: "caption"
  }, [_vm._v("30")]), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "caption"
  }, [_vm._v("10")]), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "caption"
  }, [_vm._v("5")]), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "caption"
  }, [_vm._v("0")]), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "caption"
  }, [_vm._v("0")])])], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex pa-2"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-4"
  }, [_vm._v("¿Deseas calificar este producto?")]), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-4 mt-2",
    attrs: {
      text: "Calificar",
      light: ""
    }
  })], 1)]), _vm._v(" "), _c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showd2,
      expression: "showd2"
    }],
    staticClass: "overflow-y-auto overflow-x-auto pa-2 overflow-uw",
    attrs: {
      "max-height": "645"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Vida Útil")]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-2",
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("v-progress-linear", {
    staticClass: "mt-2",
    staticStyle: {
      width: "78%"
    },
    attrs: {
      color: "white"
    },
    model: {
      value: _vm.ratings.vidaUtil,
      callback: function callback($$v) {
        _vm.$set(_vm.ratings, "vidaUtil", $$v);
      },
      expression: "ratings.vidaUtil"
    }
  })], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", [_vm._v("1-14")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", {
    staticClass: "caption"
  }, [_vm._v("Semanas")])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", [_vm._v("1-24")]), _c("br")]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", {
    staticClass: "caption"
  }, [_vm._v("Meses")])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", [_vm._v("1-10")]), _c("br")]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", {
    staticClass: "caption"
  }, [_vm._v("Años")])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", [_vm._v("10-25")]), _c("br")]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", {
    staticClass: "caption"
  }, [_vm._v("Años")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mt-4"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Composición de producto")]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-4"
  }, [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("div", {
    staticClass: "piechart"
  })]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("tbody", _vm._l(_vm.desserts, function (item) {
    return _c("tr", {
      key: item.name
    }, [_c("td", {
      staticStyle: {
        width: "20px"
      }
    }, [_c("div", {
      staticClass: "pa-2 bg-secondary rounded-circle d-inline-block",
      style: item.color
    })]), _vm._v(" "), _c("td", {
      staticClass: "text-size-comp ml-1",
      staticStyle: {
        width: "120px"
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-size-comp ml-2",
      staticStyle: {
        width: "50px"
      }
    }, [_vm._v(_vm._s(item.percent))]), _vm._v(" "), _c("td", {
      staticClass: "text-size-comp ml-2"
    }, [_vm._v(_vm._s(item.kg))])]);
  }), 0)])], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-3 mb-4"
  }), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Impacto Ambiental")]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-4",
    attrs: {
      justify: "center"
    }
  }, [_c("div", {
    staticClass: "d-flex",
    staticStyle: {
      width: "78%",
      position: "relative"
    }
  }, [_c("v-icon", {
    staticClass: "markerLoc",
    style: {
      left: _vm.impacto
    },
    attrs: {
      large: ""
    }
  }, [_vm._v("la-map-pin")]), _vm._v(" "), _c("v-col", {
    staticStyle: {
      padding: "20px 0px"
    },
    attrs: {
      cols: "3"
    }
  }, [_c("v-progress-linear", {
    staticClass: "mt-2",
    attrs: {
      "background-color": "green"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    staticStyle: {
      padding: "15px 0px"
    },
    attrs: {
      cols: "3"
    }
  }, [_c("v-progress-linear", {
    staticClass: "mt-2",
    attrs: {
      "background-color": "yellow"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    staticStyle: {
      padding: "10px 0px"
    },
    attrs: {
      cols: "3"
    }
  }, [_c("v-progress-linear", {
    staticClass: "mt-2",
    attrs: {
      "background-color": "orange"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    staticStyle: {
      padding: "5px 0px"
    },
    attrs: {
      cols: "3"
    }
  }, [_c("v-progress-linear", {
    staticClass: "mt-2",
    attrs: {
      "background-color": "red"
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-0 mb-1"
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "start"
    }
  }, [_c("span", {
    staticClass: "caption ml-4"
  }, [_vm._v("Sostenible")])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("span", {
    staticClass: "caption"
  }, [_vm._v("Reversible")])])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "end"
    }
  }, [_c("span", {
    staticClass: "caption mr-4"
  }, [_vm._v("Irreversible")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mt-4"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Consejos Ecológicos")]), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v("\n                                Una vez el producto cumpla su vida útil debes ser riguroso en reciclar sus\n                                materiales de forma correcta.\n                            ")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2 mt-2"
  }, [_vm._v("\n                                Realizar el mantenimiento pertinente en las fechas adecuadas para extender la vida\n                                útil del producto.\n                            ")])])]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-2 la-border mt-4"
  }, [_c("v-row", {
    staticClass: "mt-3",
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("v-icon", {
    attrs: {
      "x-large": ""
    }
  }, [_vm._v("la-sync")])], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mt-5",
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("p", {
    staticClass: "subtitle2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                                        Deseo reciclar un viejo producto y recibir un bono adicional de descuento a\n                                        cambio.\n                                    ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("custom-button", {
    attrs: {
      plain: "",
      text: "Solicitar"
    }
  })], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mt-4 mb-2",
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("custom-button", {
    staticClass: "button-espe",
    attrs: {
      light: "",
      text: "RENOVACIÓN UPGRADE"
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-2 la-border mt-4"
  }, [_c("v-row", {
    staticClass: "mt-3",
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("v-icon", {
    attrs: {
      "x-large": ""
    }
  }, [_vm._v("la-tools")])], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mt-5",
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("p", {
    staticClass: "subtitle2",
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("\n                                        Deseo programar un mantenimiento preventivo para mi producto/s.\n                                    ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("custom-button", {
    attrs: {
      plain: "",
      text: "Solicitar"
    }
  })], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mt-4 mb-2",
    attrs: {
      dense: "",
      justify: "center"
    }
  }, [_c("custom-button", {
    staticClass: "button-espe",
    attrs: {
      light: "",
      text: "SOPORTE TÉCNICO"
    }
  })], 1)], 1)])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "positionColbuttons pt-0",
    attrs: {
      cols: "12",
      lg: "4",
      "order-lg": "2",
      md: "4",
      "order-md": "1",
      sm: "12",
      "order-sm": "1",
      order: "1"
    }
  }, [_c("v-row", {
    staticClass: "buttons-img",
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    staticClass: "btn-img",
    attrs: {
      light: ""
    },
    on: {
      click: function click($event) {
        _vm.showp = true;
        _vm.showp1 = false;
        _vm.showp2 = false;
      }
    }
  }, [_vm._v("\n                                Imágenes\n                            ")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    staticClass: "btn-img",
    attrs: {
      light: ""
    },
    on: {
      click: function click($event) {
        _vm.showp = false;
        _vm.showp1 = true;
        _vm.showp2 = false;
      }
    }
  }, [_vm._v("\n                                Videos\n                            ")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    staticClass: "btn-img",
    attrs: {
      light: ""
    },
    on: {
      click: function click($event) {
        _vm.showp = false;
        _vm.showp1 = false;
        _vm.showp2 = true;
      }
    }
  }, [_vm._v("\n                                Ficha Técnica\n                            ")])], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "pt-0",
    attrs: {
      dense: "",
      justify: ""
    }
  }, [_c("v-col", [_c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showp,
      expression: "showp"
    }],
    staticStyle: {
      height: "700px"
    },
    attrs: {
      slides: (_vm$productDetails29 = _vm.productDetails) === null || _vm$productDetails29 === void 0 ? void 0 : _vm$productDetails29.imagenes
    }
  }), _vm._v(" "), _c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showp1,
      expression: "showp1"
    }],
    staticStyle: {
      height: "700px"
    },
    attrs: {
      slides: (_vm$productDetails30 = _vm.productDetails) === null || _vm$productDetails30 === void 0 ? void 0 : _vm$productDetails30.videos
    }
  }), _vm._v(" "), _c("v-img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showp2,
      expression: "showp2"
    }],
    attrs: {
      src: (_vm$productDetails31 = _vm.productDetails) === null || _vm$productDetails31 === void 0 ? void 0 : _vm$productDetails31.ficha_tecnica_del_producto,
      height: "700px",
      width: "100%"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "py-0",
    attrs: {
      cols: "12",
      md: "4",
      "order-md": "3",
      sm: "12",
      "order-sm": "2",
      order: "2"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-2"
  }, [_vm._v("REFERENCIA: " + _vm._s((_vm$productDetails32 = _vm.productDetails) === null || _vm$productDetails32 === void 0 ? void 0 : _vm$productDetails32.reference))]), _vm._v(" "), _c("v-icon", {
    attrs: {
      right: ""
    }
  }, [_vm._v(" la-bookmark ")])], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 text-uppercase font-weight-bold mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$na = (_vm$productDetails33 = _vm.productDetails) === null || _vm$productDetails33 === void 0 ? void 0 : _vm$productDetails33.name) !== null && _vm$productDetails$na !== void 0 ? _vm$productDetails$na : ""))]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$br = (_vm$productDetails34 = _vm.productDetails) === null || _vm$productDetails34 === void 0 ? void 0 : (_vm$productDetails34$ = _vm$productDetails34.brand) === null || _vm$productDetails34$ === void 0 ? void 0 : _vm$productDetails34$.name) !== null && _vm$productDetails$br !== void 0 ? _vm$productDetails$br : ""))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("h5", {
    staticClass: "subtitle1 mb-2 mr-2"
  }, [_vm._v("\n                            " + _vm._s((_vm$productDetails$lo = (_vm$productDetails35 = _vm.productDetails) === null || _vm$productDetails35 === void 0 ? void 0 : _vm$productDetails35.lowest_price) !== null && _vm$productDetails$lo !== void 0 ? _vm$productDetails$lo : "000") + " " + _vm._s((_vm$productDetails$cu = (_vm$productDetails36 = _vm.productDetails) === null || _vm$productDetails36 === void 0 ? void 0 : _vm$productDetails36.currency) !== null && _vm$productDetails$cu !== void 0 ? _vm$productDetails$cu : "") + "\n                        ")]), _vm._v(" "), _c("h5", {
    staticClass: "caption mb-2"
  }, [_c("del", [_vm._v(_vm._s((_vm$productDetails$hi = (_vm$productDetails37 = _vm.productDetails) === null || _vm$productDetails37 === void 0 ? void 0 : _vm$productDetails37.highest_price) !== null && _vm$productDetails$hi !== void 0 ? _vm$productDetails$hi : "000") + "\n                                " + _vm._s((_vm$productDetails$cu2 = (_vm$productDetails38 = _vm.productDetails) === null || _vm$productDetails38 === void 0 ? void 0 : _vm$productDetails38.currency) !== null && _vm$productDetails$cu2 !== void 0 ? _vm$productDetails$cu2 : ""))])])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v(" la-minus ")])], 1), _vm._v("\n                            " + _vm._s(_vm.model) + "\n                            "), _c("v-btn", {
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
    staticClass: "product-item-body pa-4 la-border mt-3"
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
    staticClass: "product-item-body pa-4 la-border mt-3"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Disponibilidad")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$st = (_vm$productDetails39 = _vm.productDetails) === null || _vm$productDetails39 === void 0 ? void 0 : _vm$productDetails39.stock) !== null && _vm$productDetails$st !== void 0 ? _vm$productDetails$st : "000") + " en stock")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Garantía")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v(_vm._s((_vm$productDetails$wa = (_vm$productDetails40 = _vm.productDetails) === null || _vm$productDetails40 === void 0 ? void 0 : _vm$productDetails40.warranty_text) !== null && _vm$productDetails$wa !== void 0 ? _vm$productDetails$wa : "--"))])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v(_vm._s((_vm$productDetails$sh = (_vm$productDetails41 = _vm.productDetails) === null || _vm$productDetails41 === void 0 ? void 0 : _vm$productDetails41.shipping) !== null && _vm$productDetails$sh !== void 0 ? _vm$productDetails$sh : "--"))])])]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-3 mb-2"
  }, [_vm._v("Se incluye con la compra")]), _vm._v(" "), _c("div", {
    staticClass: "product-item-body mt-3"
  }, [_c("v-divider"), _vm._v(" "), _c("product-item-6")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "px-2 pt-12"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between mb-8"
  }, [_c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("H5")]), _vm._v(" "), _c("div", {
    staticClass: "d-none d-lg-block",
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "d-lg-none",
    staticStyle: {
      width: "40%",
      "text-align": "end"
    }
  }, [_c("custom-button", {
    staticStyle: {
      width: "40%"
    },
    attrs: {
      light: "",
      text: "Filtro"
    }
  })], 1)]), _vm._v(" "), _c("v-row", _vm._l(_vm.moreProducts, function (product, i) {
    return _c("v-col", {
      key: i,
      attrs: {
        cols: "6",
        md: "4",
        sm: "4",
        xs: "6",
        lg: "2",
        xl: "2"
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
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "px-2 py-12"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-space-between mb-8"
  }, [_c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("H5")]), _vm._v(" "), _c("div", {
    staticClass: "d-none d-lg-block",
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "d-lg-none",
    staticStyle: {
      width: "40%",
      "text-align": "end"
    }
  }, [_c("custom-button", {
    staticStyle: {
      width: "40%"
    },
    attrs: {
      light: "",
      text: "Filtro"
    }
  })], 1)]), _vm._v(" "), _c("v-row", _vm._l(_vm.footerProducts, function (product, i) {
    return _c("v-col", {
      key: i,
      attrs: {
        cols: "12",
        md: "6",
        sm: "6",
        xs: "12",
        lg: "3",
        xl: "3"
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
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("footer-custom")], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-footer[data-v-1993d9fd] {\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-btn[data-v-b8645414] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.25px;\n  border-radius: 5px;\n}\n@media (min-width: 960px) {\n.v-btn[data-v-b8645414] {\n    font-size: 14px;\n}\n}\n.v-btn i[data-v-b8645414] {\n  font-size: 20px;\n}\n.v-btn[data-v-b8645414]:hover:before, .v-btn[data-v-b8645414]:focus:before {\n  opacity: 1;\n}\n.v-btn.v-size--default[data-v-b8645414] {\n  height: 38px;\n}\n.theme--light.v-btn[data-v-b8645414] {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-b8645414] {\n  background-color: #dfdfdf;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-b8645414]:before {\n  background-color: #ffffff;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled[data-v-b8645414] {\n  color: #000000 !important;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled.v-btn--has-bg[data-v-b8645414] {\n  background-color: #fafcfc !important;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414] {\n  color: #ffffff;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414]:hover, .theme--light.v-btn.v-btn--outlined[data-v-b8645414]:focus {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414]:before {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414]:focus:before {\n  background-color: #ffffff;\n}\n.buttonsAct[data-v-b8645414] {\n  top: 20px;\n  position: absolute;\n  width: 96%;\n}\n.buttons-img[data-v-b8645414] {\n  position: absolute;\n  width: 95%;\n  z-index: 2;\n  top: 5%;\n  padding: 15px;\n}\n.button-espe[data-v-b8645414] {\n  font-size: 10px;\n}\n.markerLoc[data-v-b8645414] {\n  top: -37%;\n  position: absolute;\n}\n.btn-img[data-v-b8645414] {\n  width: 85% !important;\n}\n.positionColbuttons[data-v-b8645414] {\n  position: relative;\n}\n.la-border[data-v-b8645414] {\n  border-radius: 0.5em;\n}\n.v-btn-toggle[data-v-b8645414] {\n  border-radius: 0px;\n  height: 20px !important;\n}\n.toggle-btn[data-v-b8645414] {\n  height: 20px !important;\n  min-width: 20px !important;\n}\n.v-divider[data-v-b8645414] {\n  border-width: thin 0 0;\n}\n.v-divider--vertical[data-v-b8645414] {\n  border-width: 0 thin 0 0;\n}\n.subtitles-gray[data-v-b8645414] {\n  font-size: 12px;\n  color: gray;\n}\n.justify-end[data-v-b8645414] {\n  text-align: end;\n}\n.piechart[data-v-b8645414] {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  background-image: conic-gradient(from 180deg, #b1771d 0 320deg, #445056 0 336deg, #114b99 0);\n}\n.text-size-comp[data-v-b8645414] {\n  font-size: 0.6rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/FooterCustom.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/FooterCustom.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterCustom_vue_vue_type_template_id_1993d9fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true& */ "./resources/js/components/global/FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true&");
/* harmony import */ var _FooterCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FooterCustom.vue?vue&type=script&lang=js& */ "./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FooterCustom_vue_vue_type_style_index_0_id_1993d9fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true& */ "./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FooterCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterCustom_vue_vue_type_template_id_1993d9fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FooterCustom_vue_vue_type_template_id_1993d9fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1993d9fd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/FooterCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_style_index_0_id_1993d9fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=style&index=0&id=1993d9fd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_style_index_0_id_1993d9fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_style_index_0_id_1993d9fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_style_index_0_id_1993d9fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_style_index_0_id_1993d9fd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_template_id_1993d9fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=template&id=1993d9fd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_template_id_1993d9fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCustom_vue_vue_type_template_id_1993d9fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Product.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=b8645414&scoped=true& */ "./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/pages/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& */ "./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b8645414",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=b8645414&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);