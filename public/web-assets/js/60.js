(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CardBrand",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brand.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/Bar.vue */ "./resources/js/components/global/Bar.vue");
/* harmony import */ var _components_global_CardBrand_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/CardBrand.vue */ "./resources/js/components/global/CardBrand.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Bar: _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardBrand: _components_global_CardBrand_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=template&id=79cb4396&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CardBrand.vue?vue&type=template&id=79cb4396&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "div-card"
  }, [_c("v-col", {
    staticClass: "text-center col",
    attrs: {
      cols: "6",
      md: "3",
      sm: "6"
    }
  }, [_c("div", {
    staticClass: "header"
  }, [_c("div", {
    staticClass: "figure"
  })]), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_c("div", [_c("v-img", {
    attrs: {
      src: "/public/assets/img/presentation-banner-logo.png",
      width: "100px"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "div-btn"
  }, [_c("custom-button", {
    attrs: {
      light: "",
      text: "Ver Detalles"
    }
  })], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=template&id=72f7f84e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brand.vue?vue&type=template&id=72f7f84e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("bar", {
    attrs: {
      text2: "Compartir",
      icon2: "la-share-alt-square"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "brand"
  }, [_c("div", {
    staticClass: "div-container"
  }, [_c("div", {
    staticClass: "col1"
  }, [_c("v-img", {
    staticClass: "img",
    attrs: {
      "max-width": "90px",
      src: "../../public/assets/img/carousel-item-placeholder.png"
    }
  })], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _vm._m(1)])]), _vm._v(" "), _c("div", {
    staticClass: "cards"
  }, [_c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand"), _vm._v(" "), _c("card-brand")], 1)], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col2"
  }, [_c("h5", {
    staticClass: "black--text bold"
  }, [_vm._v("Marcas")]), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("# Marcas")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "col3"
  }, [_c("p", {
    staticClass: "black--text"
  }, [_vm._v("Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has\n                    been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has\n                    been the industry's • Incluye Lorem Ipsum is simply dummy text.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-card[data-v-79cb4396] {\n  margin: 20px;\n}\n.col[data-v-79cb4396] {\n  background-color: #F5F5F5;\n  border-radius: 10px;\n  max-width: 200px;\n  width: 100%;\n  padding: 0;\n}\n.header[data-v-79cb4396] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px 15px;\n}\n.figure[data-v-79cb4396] {\n  -webkit-clip-path: polygon(100% 0, 100% 100%, 48% 55%, 0 100%, 0 49%, 0% 0%);\n          clip-path: polygon(100% 0, 100% 100%, 48% 55%, 0 100%, 0 49%, 0% 0%);\n  background-color: #7c7c7d;\n  width: 20px;\n  height: 20px;\n}\n.body[data-v-79cb4396] {\n  height: 200px;\n  background-color: #000000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.div-btn[data-v-79cb4396] {\n  height: 150px;\n  padding: 100px 15px 20px 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".brand[data-v-72f7f84e] {\n  margin: 20px;\n  background-color: #F5F5F5;\n  padding: 10px;\n  border-radius: 10px;\n}\n.div-container[data-v-72f7f84e] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.col1[data-v-72f7f84e],\n.col2[data-v-72f7f84e] {\n  max-width: 100%;\n  padding: 5px 20px 5px 20px;\n}\n.col3[data-v-72f7f84e] {\n  width: 500px;\n  padding: 5px 20px 5px 20px;\n}\n.img[data-v-72f7f84e] {\n  background-color: #dfdfdf;\n  border-radius: 50%;\n  padding: 10px 0;\n}\n.cards[data-v-72f7f84e] {\n  margin: 10px;\n  padding: 10px 0;\n}\n.divider[data-v-72f7f84e] {\n  background-color: #DFDFDF;\n  width: 2px;\n  height: 120px;\n  margin: 5px 25px 5px 25px;\n}\n@media (max-width: 960px) {\n.div-container[data-v-72f7f84e] {\n    display: flex;\n    flex-wrap: wrap;\n}\n.col1[data-v-72f7f84e],\n  .col2[data-v-72f7f84e] {\n    max-width: 300px;\n    padding: 5px 10px 5px 10px;\n}\n.col3[data-v-72f7f84e] {\n    width: 100%;\n    padding: 5px 10px 5px 10px;\n}\n.divider[data-v-72f7f84e] {\n    background-color: #DFDFDF;\n    width: 100%;\n    height: 2px;\n    margin: 10px 10px 10px 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/CardBrand.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/global/CardBrand.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardBrand_vue_vue_type_template_id_79cb4396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardBrand.vue?vue&type=template&id=79cb4396&scoped=true& */ "./resources/js/components/global/CardBrand.vue?vue&type=template&id=79cb4396&scoped=true&");
/* harmony import */ var _CardBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardBrand.vue?vue&type=script&lang=js& */ "./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardBrand_vue_vue_type_style_index_0_id_79cb4396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true& */ "./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardBrand_vue_vue_type_template_id_79cb4396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardBrand_vue_vue_type_template_id_79cb4396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "79cb4396",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/CardBrand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBrand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_style_index_0_id_79cb4396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=style&index=0&id=79cb4396&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_style_index_0_id_79cb4396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_style_index_0_id_79cb4396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_style_index_0_id_79cb4396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_style_index_0_id_79cb4396_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/CardBrand.vue?vue&type=template&id=79cb4396&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/global/CardBrand.vue?vue&type=template&id=79cb4396&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_template_id_79cb4396_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CardBrand.vue?vue&type=template&id=79cb4396&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=template&id=79cb4396&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_template_id_79cb4396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBrand_vue_vue_type_template_id_79cb4396_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Brand.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Brand.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brand_vue_vue_type_template_id_72f7f84e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand.vue?vue&type=template&id=72f7f84e&scoped=true& */ "./resources/js/pages/Brand.vue?vue&type=template&id=72f7f84e&scoped=true&");
/* harmony import */ var _Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brand.vue?vue&type=script&lang=js& */ "./resources/js/pages/Brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Brand_vue_vue_type_style_index_0_id_72f7f84e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true& */ "./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brand_vue_vue_type_template_id_72f7f84e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Brand_vue_vue_type_template_id_72f7f84e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "72f7f84e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Brand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Brand.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Brand.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_72f7f84e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=style&index=0&id=72f7f84e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_72f7f84e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_72f7f84e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_72f7f84e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_style_index_0_id_72f7f84e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Brand.vue?vue&type=template&id=72f7f84e&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Brand.vue?vue&type=template&id=72f7f84e&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_72f7f84e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=template&id=72f7f84e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brand.vue?vue&type=template&id=72f7f84e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_72f7f84e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_72f7f84e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);