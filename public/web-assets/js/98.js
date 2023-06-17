(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/FooterCustom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_icons_WorldGlobe_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icons/WorldGlobe.vue */ "./resources/js/components/icons/WorldGlobe.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "FooterCustom",
  components: {
    WorldGlobeIcon: _components_icons_WorldGlobe_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("app", ["authFooterLinks"]))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ServiceDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/product/ProductBox.vue */ "./resources/js/components/product/ProductBox.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_FooterCustom_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/FooterCustom.vue */ "./resources/js/components/global/FooterCustom.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");
/* harmony import */ var _components_product_AddToCart_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/product/AddToCart.vue */ "./resources/js/components/product/AddToCart.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





// import ChartView from "../components/global/ChartView.vue";

/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: function metaInfo() {
    return {
      title: this.metaTitle
    };
  },
  data: function data() {
    return {
      metaTitle: "",
      detailsLoading: true,
      serviceDetails: {},
      img: "/public/assets/img/item-placeholder.png",
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
      moreServices: [],
      footerServices: [],
      tab: null,
      relatedServices: [{}, {}, {}, {}, {}],
      actionLoading: false
    };
  },
  components: {
    ServiceBox: _components_product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    FooterCustom: _components_global_FooterCustom_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AddToCart: _components_product_AddToCart_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
    // ChartView
  },

  methods: {
    getDetails: function getDetails() {
      var _this = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var res, _this$serviceDetails, _this$serviceDetails2, _this$serviceDetails3;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.call_api("get", "service/details/".concat(_this.$route.params.slug));
              case 2:
                res = _context.sent;
                if (res.data.success) {
                  _this.serviceDetails = res.data.data;
                  _this.setVidaUtil(_this.serviceDetails.vida_util);
                  _this.setComposition(_this.serviceDetails);
                  _this.setImpacto((_this$serviceDetails = _this.serviceDetails) === null || _this$serviceDetails === void 0 ? void 0 : _this$serviceDetails.impacto_ambiental);
                  _this.getMoreServices((_this$serviceDetails2 = _this.serviceDetails) === null || _this$serviceDetails2 === void 0 ? void 0 : _this$serviceDetails2.id);
                  _this.getMoreServices2((_this$serviceDetails3 = _this.serviceDetails) === null || _this$serviceDetails3 === void 0 ? void 0 : _this$serviceDetails3.id);
                  _this.getRelatedServices(_this.serviceDetails.id);
                } else {
                  _this.snack({
                    message: res.data.message,
                    color: "red"
                  });
                  _this.$router.push({
                    name: "404"
                  });
                }
                _this.detailsLoading = false;
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getRelatedServices: function getRelatedServices(id) {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var res;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.call_api("get", "service/related/".concat(id));
              case 2:
                res = _context2.sent;
                if (res.data.success) {
                  _this2.relatedServices = res.data.data;
                  _this2.relatedLoading = false;
                }
              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getMoreServices: function getMoreServices(id) {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var res, _res$data, _res$data$data;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this3.call_api("get", "service/random/6/".concat(id));
              case 2:
                res = _context3.sent;
                if (res.data.success) {
                  (_res$data = res.data) === null || _res$data === void 0 ? void 0 : (_res$data$data = _res$data.data) === null || _res$data$data === void 0 ? void 0 : _res$data$data.map(function (service) {
                    _this3.moreServices.push({
                      id: service === null || service === void 0 ? void 0 : service.id,
                      name: service === null || service === void 0 ? void 0 : service.name,
                      val: (service === null || service === void 0 ? void 0 : service.base_price) + " " + (service === null || service === void 0 ? void 0 : service.currency),
                      img: service === null || service === void 0 ? void 0 : service.thumbnail_image,
                      description: service === null || service === void 0 ? void 0 : service.description,
                      brand: service === null || service === void 0 ? void 0 : service.brandName,
                      ref: service === null || service === void 0 ? void 0 : service.reference,
                      slug: service === null || service === void 0 ? void 0 : service.slug
                    });
                  });
                }
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getMoreServices2: function getMoreServices2(id) {
      var _this4 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var res, _res$data2, _res$data2$data;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _this4.call_api("get", "service/random/4/".concat(id));
              case 2:
                res = _context4.sent;
                if (res.data.success) {
                  (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : (_res$data2$data = _res$data2.data) === null || _res$data2$data === void 0 ? void 0 : _res$data2$data.map(function (service) {
                    _this4.footerServices.push({
                      id: service === null || service === void 0 ? void 0 : service.id,
                      name: service === null || service === void 0 ? void 0 : service.name,
                      val: (service === null || service === void 0 ? void 0 : service.base_price) + " " + (service === null || service === void 0 ? void 0 : service.currency),
                      img: service === null || service === void 0 ? void 0 : service.thumbnail_image,
                      description: service === null || service === void 0 ? void 0 : service.description,
                      brand: service === null || service === void 0 ? void 0 : service.brandName,
                      ref: service === null || service === void 0 ? void 0 : service.reference,
                      slug: service === null || service === void 0 ? void 0 : service.slug
                    });
                  });
                }
              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
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
  created: function created() {
    var _this5 = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this5.getDetails();
            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
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
    staticClass: "auth-footer"
  }, [_c("div", {
    staticClass: "auth-footer-copyright-wrap"
  }, [_c("span", {
    staticClass: "auth-footer-copyright"
  }, [_vm._v("© Idovela 2022")]), _vm._v(" "), _c("span", {
    staticClass: "auth-footer-location"
  }, [_c("WorldGlobeIcon", {
    staticClass: "mr-2"
  }), _vm._v(" "), _c("span", [_vm._v("Bogota, Colombia")])], 1)]), _vm._v(" "), _c("ul", {
    staticClass: "auth-footer-links"
  }, _vm._l(_vm.authFooterLinks, function (link) {
    return _c("li", {
      key: "link-".concat(link.label),
      staticClass: "auth-footer-link"
    }, [_c("router-link", {
      attrs: {
        to: link.link
      }
    }, [_vm._v(" " + _vm._s(link.label) + " ")])], 1);
  }), 0)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm$serviceDetails, _vm$serviceDetails2, _vm$serviceDetails3, _vm$serviceDetails4, _vm$serviceDetails5, _vm$serviceDetails6, _vm$serviceDetails7, _vm$serviceDetails8, _vm$serviceDetails9, _vm$serviceDetails10, _vm$serviceDetails11, _vm$serviceDetails12, _vm$serviceDetails13, _vm$serviceDetails14, _vm$serviceDetails15, _vm$serviceDetails16, _vm$serviceDetails17, _vm$serviceDetails18, _vm$serviceDetails19, _vm$serviceDetails20, _vm$serviceDetails21, _vm$serviceDetails22, _vm$serviceDetails23, _vm$serviceDetails24, _vm$serviceDetails25, _vm$serviceDetails26, _vm$serviceDetails27, _vm$serviceDetails28;
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("v-container", {
    staticClass: "service-details pa-4",
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-tabs", {
    attrs: {
      grow: "",
      height: "38px",
      "hide-slider": true
    },
    model: {
      value: _vm.tab,
      callback: function callback($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c("v-tab", {
    attrs: {
      ripple: false
    }
  }, [_vm._v("Especificación")]), _vm._v(" "), _c("v-tab", {
    attrs: {
      ripple: false
    }
  }, [_vm._v("Reseña")]), _vm._v(" "), _c("v-tab", {
    attrs: {
      ripple: false
    }
  }, [_vm._v("Sostenibilidad")])], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "my-4"
  }), _vm._v(" "), _c("v-tabs-items", {
    model: {
      value: _vm.tab,
      callback: function callback($$v) {
        _vm.tab = $$v;
      },
      expression: "tab"
    }
  }, [_c("v-tab-item", [_c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }],
    staticClass: "overflow-y-auto overflow-uw pa-2",
    attrs: {
      "max-height": "645"
    }
  }, [_c("div", {
    staticClass: "service-item-body pa-4 la-border"
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
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails = _vm.serviceDetails) === null || _vm$serviceDetails === void 0 ? void 0 : _vm$serviceDetails.intake) || "--") + "\n                                            ")])])], 1), _vm._v(" "), _c("v-divider", {
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
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails2 = _vm.serviceDetails) === null || _vm$serviceDetails2 === void 0 ? void 0 : _vm$serviceDetails2.material) || "--") + "\n                                            ")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "service-item-body pa-4 la-border mt-4"
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
  }, [_vm._v("Medida de Servicio")])]), _vm._v(" "), _c("v-row", {
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
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails3 = _vm.serviceDetails) === null || _vm$serviceDetails3 === void 0 ? void 0 : _vm$serviceDetails3.medida_servicio) || "--") + "\n                                            ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails4 = _vm.serviceDetails) === null || _vm$serviceDetails4 === void 0 ? void 0 : _vm$serviceDetails4.medidas_de_embalaje) || "--") + "\n                                            ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails5 = _vm.serviceDetails) === null || _vm$serviceDetails5 === void 0 ? void 0 : _vm$serviceDetails5.engaste) || "--") + "\n                                            ")])])], 1), _vm._v(" "), _c("v-col", {
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
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails6 = _vm.serviceDetails) === null || _vm$serviceDetails6 === void 0 ? void 0 : _vm$serviceDetails6.unit_metering) || "--") + "\n                                            ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails7 = _vm.serviceDetails) === null || _vm$serviceDetails7 === void 0 ? void 0 : _vm$serviceDetails7.unit_metering) || "--") + "\n                                            ")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_vm._v("\n                                                " + _vm._s(((_vm$serviceDetails8 = _vm.serviceDetails) === null || _vm$serviceDetails8 === void 0 ? void 0 : _vm$serviceDetails8.unit_metering) || "--") + "\n                                            ")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "service-item-body pa-4 la-border mt-4"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v(_vm._s(((_vm$serviceDetails9 = _vm.serviceDetails) === null || _vm$serviceDetails9 === void 0 ? void 0 : _vm$serviceDetails9.peso_de_servicio) || "--"))])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Peso de servicio")])])], 1), _vm._v(" "), _c("v-divider", {
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
  }, [_c("span", [_vm._v(_vm._s(((_vm$serviceDetails10 = _vm.serviceDetails) === null || _vm$serviceDetails10 === void 0 ? void 0 : _vm$serviceDetails10.peso_de_envio) || "--"))])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Peso de Envío")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "service-item-body pa-4 la-border mt-4"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v(_vm._s(((_vm$serviceDetails11 = _vm.serviceDetails) === null || _vm$serviceDetails11 === void 0 ? void 0 : _vm$serviceDetails11.tipo_de_coneccion) || "--"))])]), _vm._v(" "), _c("v-row", {
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
  }, [_c("span", [_vm._v(_vm._s(((_vm$serviceDetails12 = _vm.serviceDetails) === null || _vm$serviceDetails12 === void 0 ? void 0 : _vm$serviceDetails12.eficiencia) || "--") + " %")])]), _vm._v(" "), _c("v-row", {
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
  }, [_vm._v(_vm._s(((_vm$serviceDetails13 = _vm.serviceDetails) === null || _vm$serviceDetails13 === void 0 ? void 0 : _vm$serviceDetails13.caracteristica1) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails14 = _vm.serviceDetails) === null || _vm$serviceDetails14 === void 0 ? void 0 : _vm$serviceDetails14.caracteristica2) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails15 = _vm.serviceDetails) === null || _vm$serviceDetails15 === void 0 ? void 0 : _vm$serviceDetails15.caracteristica3) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails16 = _vm.serviceDetails) === null || _vm$serviceDetails16 === void 0 ? void 0 : _vm$serviceDetails16.caracteristica4) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails17 = _vm.serviceDetails) === null || _vm$serviceDetails17 === void 0 ? void 0 : _vm$serviceDetails17.caracteristica5) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails18 = _vm.serviceDetails) === null || _vm$serviceDetails18 === void 0 ? void 0 : _vm$serviceDetails18.caracteristica6) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails19 = _vm.serviceDetails) === null || _vm$serviceDetails19 === void 0 ? void 0 : _vm$serviceDetails19.caracteristica7) || "--"))])]), _vm._v(" "), _c("div", {
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
      href: (_vm$serviceDetails20 = _vm.serviceDetails) === null || _vm$serviceDetails20 === void 0 ? void 0 : _vm$serviceDetails20.manual_de_servicio,
      target: "_blank"
    }
  }, [_c("u", [_vm._v("Manual de servicio")])])]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-1",
    attrs: {
      dense: ""
    }
  }, [_c("a", {
    staticClass: "subtitle2 text-white",
    attrs: {
      href: (_vm$serviceDetails21 = _vm.serviceDetails) === null || _vm$serviceDetails21 === void 0 ? void 0 : _vm$serviceDetails21.ficha_tecnica_del_servicio,
      target: "_blank"
    }
  }, [_c("u", [_vm._v("Ficha técnica del servicio")])])])], 1), _vm._v(" "), _c("v-col", {
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
      href: (_vm$serviceDetails22 = _vm.serviceDetails) === null || _vm$serviceDetails22 === void 0 ? void 0 : _vm$serviceDetails22.manual_de_instalacion,
      target: "_blank"
    }
  }, [_c("u", [_vm._v("Guía de instalación")])])])], 1)], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5"
  }, [_vm._v("Beneficios")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2"
  }), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v(_vm._s(((_vm$serviceDetails23 = _vm.serviceDetails) === null || _vm$serviceDetails23 === void 0 ? void 0 : _vm$serviceDetails23.beneficio1) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails24 = _vm.serviceDetails) === null || _vm$serviceDetails24 === void 0 ? void 0 : _vm$serviceDetails24.beneficio2) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails25 = _vm.serviceDetails) === null || _vm$serviceDetails25 === void 0 ? void 0 : _vm$serviceDetails25.beneficio3) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails26 = _vm.serviceDetails) === null || _vm$serviceDetails26 === void 0 ? void 0 : _vm$serviceDetails26.beneficio4) || "--"))]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v(_vm._s(((_vm$serviceDetails27 = _vm.serviceDetails) === null || _vm$serviceDetails27 === void 0 ? void 0 : _vm$serviceDetails27.beneficio5) || "--"))])]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5"
  }, [_vm._v("Servicio Postventa")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2"
  }), _vm._v(" "), _c("p", {
    staticClass: "subtitle2"
  }, [_vm._v("\n                                " + _vm._s(((_vm$serviceDetails28 = _vm.serviceDetails) === null || _vm$serviceDetails28 === void 0 ? void 0 : _vm$serviceDetails28.postventa) || "--") + "\n                            ")])], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }],
    staticClass: "overflow-y-auto overflow-x-auto overflow-uw pa-2",
    attrs: {
      "max-height": "645"
    }
  }, [_c("div", {
    staticClass: "service-item-body pa-4 la-border"
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
  }, [_vm._v("¿Deseas calificar este servicio?")]), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-4 mt-2",
    attrs: {
      text: "Calificar",
      light: ""
    }
  })], 1)])], 1), _vm._v(" "), _c("v-tab-item", [_c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }],
    staticClass: "overflow-y-auto overflow-x-auto pa-2 overflow-uw",
    attrs: {
      "max-height": "645"
    }
  }, [_c("div", {
    staticClass: "service-item-body pa-4 la-border"
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
    staticClass: "service-item-body pa-4 la-border mt-4"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Composición de servicio")]), _vm._v(" "), _c("v-row", {
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
    }, [_vm._v("\n                                                    " + _vm._s(item.name) + "\n                                                ")]), _vm._v(" "), _c("td", {
      staticClass: "text-size-comp ml-2",
      staticStyle: {
        width: "50px"
      }
    }, [_vm._v("\n                                                    " + _vm._s(item.percent) + "\n                                                ")]), _vm._v(" "), _c("td", {
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
    staticClass: "service-item-body pa-4 la-border mt-4"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Consejos Ecológicos")]), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v("\n                                        Una vez el servicio cumpla su vida útil debes ser riguroso en reciclar sus\n                                        materiales de forma correcta.\n                                    ")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2 mt-2"
  }, [_vm._v("\n                                        Realizar el mantenimiento pertinente en las fechas adecuadas para extender\n                                        la vida útil del servicio.\n                                    ")])])]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("div", {
    staticClass: "service-item-body pa-2 la-border mt-4"
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
  }, [_vm._v("\n                                                Deseo reciclar un viejo servicio y recibir un bono adicional de\n                                                descuento a cambio.\n                                            ")])]), _vm._v(" "), _c("v-row", {
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
    staticClass: "service-item-body pa-2 la-border mt-4"
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
  }, [_vm._v("\n                                                Deseo programar un mantenimiento preventivo para mi servicio/s.\n                                            ")])]), _vm._v(" "), _c("v-row", {
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
  })], 1)], 1)])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("AddToCart", {
    staticClass: "mb-10",
    attrs: {
      "is-loading": _vm.detailsLoading,
      "product-details": _vm.serviceDetails
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6",
    attrs: {
      tag: "section"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-3"
  }, _vm._l(_vm.moreServices, function (service) {
    return _c("v-col", {
      key: "service-col-".concat(service.id),
      attrs: {
        cols: "2"
      }
    }, [_c("ServiceBox", {
      attrs: {
        productDetails: service
      }
    })], 1);
  }), 1), _vm._v(" "), _c("v-row", {
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
      text: "Ver más"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6",
    attrs: {
      tag: "section"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-3"
  }, _vm._l(_vm.footerServices, function (service) {
    return _c("v-col", {
      key: "service-col-".concat(service.id),
      attrs: {
        cols: "12",
        sm: "6",
        md: "3"
      }
    }, [_c("ServiceBox", {
      attrs: {
        boxStyle: "two",
        serviceDetails: service
      }
    })], 1);
  }), 1), _vm._v(" "), _c("v-row", {
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
      text: "Ver más"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("footer-custom")], 1);
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
exports.push([module.i, ".auth-footer[data-v-1993d9fd] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n}\n@media (max-width: 599px) {\n.auth-footer[data-v-1993d9fd] {\n    flex-direction: column;\n}\n}\n.auth-footer.theme--dark[data-v-1993d9fd] {\n  background-color: #18191a;\n}\n.auth-footer-copyright[data-v-1993d9fd], .auth-footer-location[data-v-1993d9fd], .auth-footer-link a[data-v-1993d9fd] {\n  font-size: var(--font-size-body1);\n  font-weight: 500;\n  letter-spacing: 0;\n  line-height: 1;\n  text-transform: uppercase;\n}\n@media (min-width: 960px) {\n.auth-footer-copyright[data-v-1993d9fd], .auth-footer-location[data-v-1993d9fd], .auth-footer-link a[data-v-1993d9fd] {\n    font-weight: 600;\n}\n}\n.auth-footer-location[data-v-1993d9fd] {\n  display: flex;\n  align-items: center;\n}\n.auth-footer-copyright-wrap[data-v-1993d9fd], .auth-footer-links[data-v-1993d9fd] {\n  gap: 1.5rem;\n}\n@media (max-width: 599px) {\n.auth-footer-copyright-wrap[data-v-1993d9fd], .auth-footer-links[data-v-1993d9fd] {\n    width: 100%;\n}\n}\n@media (min-width: 960px) {\n.auth-footer-copyright-wrap[data-v-1993d9fd], .auth-footer-links[data-v-1993d9fd] {\n    gap: 3rem;\n}\n}\n@media (min-width: 1264px) {\n.auth-footer-copyright-wrap[data-v-1993d9fd], .auth-footer-links[data-v-1993d9fd] {\n    gap: 5rem;\n}\n}\n.auth-footer-copyright-wrap[data-v-1993d9fd] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 599px) {\n.auth-footer-copyright-wrap[data-v-1993d9fd] {\n    justify-content: space-between;\n    margin-bottom: 1rem;\n}\n}\n.auth-footer-links[data-v-1993d9fd] {\n  display: flex;\n  padding: 0;\n  list-style: none;\n}\n@media (max-width: 599px) {\n.auth-footer-links[data-v-1993d9fd] {\n    justify-content: space-between;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".service-details[data-v-09d6a116] {\n  background-color: #fafcfc;\n}\n.service-details .v-tabs.assets-tabs[data-v-09d6a116] {\n  position: absolute;\n  z-index: 2;\n  width: 90%;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 1.5rem;\n}\n.service-details .v-tabs[data-v-09d6a116] .v-tabs-bar__content {\n  gap: 1.5rem;\n}\n.service-details .v-tabs-items[data-v-09d6a116] {\n  height: 100%;\n}\n.service-details .v-tabs-items .v-window-item[data-v-09d6a116] {\n  flex: 1;\n}\n.service-details .v-tabs .v-tab[data-v-09d6a116] {\n  background-color: #f5f5f5;\n  border-radius: 5px;\n  color: #000000 !important;\n  font-size: var(--font-size-btn);\n  font-weight: 600;\n  letter-spacing: 1.25px;\n  line-height: 17px;\n}\n.service-details .v-tabs .v-tab[data-v-09d6a116]:not(.v-tab--active):hover {\n  background-color: rgba(0, 0, 0, 0.5);\n  color: #ffffff !important;\n}\n.service-details .v-tabs .v-tab--active[data-v-09d6a116] {\n  background-color: #000000;\n  color: #ffffff !important;\n}\n.service-details-assets[data-v-09d6a116] {\n  position: relative;\n}\n.service-details-list-box[data-v-09d6a116] {\n  border-radius: 10px;\n  border: 1px solid #e4e4e4;\n}\n.service-details-list-box-item[data-v-09d6a116] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.service-details-list-box-item h5[data-v-09d6a116] {\n  font-weight: 600;\n  line-height: 1;\n}\n.service-details-list-box .v-btn-toggle[data-v-09d6a116] {\n  gap: 0.75rem;\n}\n.service-details-list-box .v-btn-toggle .v-btn[data-v-09d6a116] {\n  min-width: 28px;\n  height: 28px !important;\n  padding: 0;\n  border-radius: 2px;\n}\n.service-details-list-box .v-btn-toggle .v-btn--active[data-v-09d6a116], .service-details-list-box .v-btn-toggle .v-btn[data-v-09d6a116]:hover:not(.v-btn--active) {\n  box-shadow: 0px 0px 0px 5px #dfdfdf;\n}\n.service-details-list-box .v-btn-toggle > .v-btn[data-v-09d6a116]:first-child, .service-details-list-box .v-btn-toggle > .v-btn[data-v-09d6a116]:last-child {\n  border-radius: 2px;\n}\n.service-details-price[data-v-09d6a116] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: var(--font-size-h5);\n  line-height: 24px;\n}\n.service-details-price.discounted[data-v-09d6a116] {\n  background-color: #e8ff00;\n  margin-right: 0.5rem;\n}\n.service-details-price + .service-details-price[data-v-09d6a116] {\n  font-size: var(--font-size-body1);\n}\n.button-espe[data-v-09d6a116] {\n  font-size: 10px;\n}\n.markerLoc[data-v-09d6a116] {\n  top: -37%;\n  position: absolute;\n}\n.subtitles-gray[data-v-09d6a116] {\n  font-size: 12px;\n  color: gray;\n}\n.justify-end[data-v-09d6a116] {\n  text-align: end;\n}\n.piechart[data-v-09d6a116] {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  background-image: conic-gradient(from 180deg, #b1771d 0 320deg, #445056 0 336deg, #114b99 0);\n}\n.text-size-comp[data-v-09d6a116] {\n  font-size: 0.6rem;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true&");

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

/***/ "./resources/js/pages/ServiceDetails.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/ServiceDetails.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ServiceDetails_vue_vue_type_template_id_09d6a116_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true& */ "./resources/js/pages/ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true&");
/* harmony import */ var _ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceDetails.vue?vue&type=script&lang=js& */ "./resources/js/pages/ServiceDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ServiceDetails_vue_vue_type_style_index_0_id_09d6a116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true& */ "./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ServiceDetails_vue_vue_type_template_id_09d6a116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ServiceDetails_vue_vue_type_template_id_09d6a116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09d6a116",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/ServiceDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/ServiceDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/ServiceDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_style_index_0_id_09d6a116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=style&index=0&id=09d6a116&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_style_index_0_id_09d6a116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_style_index_0_id_09d6a116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_style_index_0_id_09d6a116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_style_index_0_id_09d6a116_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_template_id_09d6a116_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/ServiceDetails.vue?vue&type=template&id=09d6a116&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_template_id_09d6a116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ServiceDetails_vue_vue_type_template_id_09d6a116_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);