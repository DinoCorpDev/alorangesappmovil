(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CardBrand.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _icons_Favorite_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/Favorite.vue */ "./resources/js/components/icons/Favorite.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CardBrand",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FavoriteIcon: _icons_Favorite_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    bgImg: {
      type: String,
      "default": "/public/assets/img/brand-item-bg-placeholder.png"
    },
    bodyImg: {
      type: String,
      "default": "public/assets/img/brand-item-img-placeholder.png"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brands.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_NabvarBottomBar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/NabvarBottomBar.vue */ "./resources/js/components/global/NabvarBottomBar.vue");
/* harmony import */ var _components_global_CardBrand_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/CardBrand.vue */ "./resources/js/components/global/CardBrand.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NabvarBottomBar: _components_global_NabvarBottomBar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CardBrand: _components_global_CardBrand_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    staticClass: "brand-item"
  }, [_c("div", {
    staticClass: "brand-item-header"
  }, [_c("button", {
    staticClass: "icon",
    attrs: {
      type: "button"
    }
  }, [_c("favorite-icon")], 1)]), _vm._v(" "), _c("div", {
    staticClass: "brand-item-body"
  }, [_c("v-img", {
    attrs: {
      src: _vm.bgImg,
      "aspect-ratio": "1"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "brand-item-body-image"
  }, [_c("v-img", {
    attrs: {
      src: _vm.bodyImg,
      "aspect-ratio": "1"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "brand-item-footer"
  }, [_c("custom-button", {
    attrs: {
      block: "",
      color: "nero",
      text: "Ver Detalles"
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/icons/Favorite.vue?vue&type=template&id=5eb8d79c&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/icons/Favorite.vue?vue&type=template&id=5eb8d79c& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("svg", {
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      width: "17.975",
      height: "17.983",
      viewBox: "0 0 17.975 17.983"
    }
  }, [_c("g", {
    attrs: {
      transform: "translate(0)"
    }
  }, [_c("path", {
    attrs: {
      d: "M95.967,5.986h0v0H77.993v1.8h0V23.96H79.72l0,.007.012-.007h.057v-.036l7.162-4.48.014-.009.014.009,7.187,4.5v.02H94.2l.012.007,0-.007h1.749Z",
      transform: "translate(-77.993 -5.984)"
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=template&id=209a9ad6&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brands.vue?vue&type=template&id=209a9ad6&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("v-container", {
    staticClass: "brands",
    attrs: {
      fluid: ""
    }
  }, [_c("div", {
    staticClass: "main-wrapper mb-10"
  }, [_c("v-row", {
    attrs: {
      align: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "4",
      md: "3",
      lg: "2"
    }
  }, [_c("div", {
    staticClass: "brands-info-header pb-5 pb-sm-0"
  }, [_c("v-img", {
    staticClass: "mr-4",
    attrs: {
      "aspect-ratio": "1",
      src: "/public/assets/img/bio-placeholder.png"
    }
  }), _vm._v(" "), _c("div", [_c("h1", {
    staticClass: "text-uppercase black--text mb-2"
  }, [_vm._v("Marcas")]), _vm._v(" "), _c("h3", {
    staticClass: "text-uppercase black--text"
  }, [_vm._v("# Marcas")])])], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "8",
      md: "6",
      lg: "4"
    }
  }, [_c("p", {
    staticClass: "brands-info-content black--text mb-0"
  }, [_vm._v("\n                        Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the\n                        industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been\n                        the industry's • Incluye Lorem Ipsum is simply dummy text.\n                    ")])])], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-7"
  }, _vm._l(12, function (i) {
    return _c("v-col", {
      key: i,
      attrs: {
        cols: "6",
        sm: "6",
        md: "4",
        lg: "2"
      }
    }, [_c("card-brand")], 1);
  }), 1)], 1)], 1);
};
var staticRenderFns = [];
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
exports.push([module.i, ".brand-item[data-v-79cb4396] {\n  border-radius: 10px;\n  background-color: #f5f5f5;\n  height: 100%;\n  transition: all 0.3s ease-in-out;\n}\n.brand-item[data-v-79cb4396]:hover {\n  background-color: transparent;\n}\n.brand-item-header[data-v-79cb4396] {\n  background-color: #f5f5f5;\n  display: flex;\n  justify-content: flex-end;\n  padding: 0.75rem 1rem;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.brand-item-header[data-v-79cb4396] .icon {\n  line-height: 0.5;\n}\n.brand-item-header[data-v-79cb4396] .icon path {\n  fill: #040405;\n  opacity: 0.5;\n}\n.brand-item-header[data-v-79cb4396] .icon:hover path {\n  opacity: 0.8;\n}\n.brand-item-header[data-v-79cb4396] .icon:active path {\n  opacity: 1;\n}\n.brand-item-body-image[data-v-79cb4396] {\n  width: 85%;\n  background-color: #ffffff;\n  margin: auto;\n  margin-top: -40%;\n  position: relative;\n  border-radius: 50%;\n  margin-bottom: 2rem;\n}\n.brand-item-footer[data-v-79cb4396] {\n  padding: 0.75rem 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-wrapper[data-v-209a9ad6] {\n  padding: 1rem;\n  background: #f5f5f5;\n  border-radius: 10px;\n}\n.brands-info-header[data-v-209a9ad6] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 599px) {\n.brands-info-header[data-v-209a9ad6] {\n    border-bottom: 1px solid #dfdfdf;\n}\n}\n@media (min-width: 600px) {\n.brands-info-header[data-v-209a9ad6] {\n    border-right: 1px solid #dfdfdf;\n}\n}\n.brands-info-header .v-image[data-v-209a9ad6] {\n  background-color: #dfdfdf;\n  border-radius: 50%;\n  max-width: 60px;\n}\n@media (min-width: 600px) {\n.brands-info-header .v-image[data-v-209a9ad6] {\n    max-width: 84px;\n}\n}\n.brands-info-header h1[data-v-209a9ad6] {\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: 0;\n}\n@media (min-width: 600px) {\n.brands-info-header h1[data-v-209a9ad6] {\n    font-size: 24px;\n}\n}\n.brands-info-header h3[data-v-209a9ad6] {\n  font-size: 12px;\n  font-weight: 500;\n}\n@media (min-width: 600px) {\n.brands-info-header h3[data-v-209a9ad6] {\n    letter-spacing: 1.5px;\n}\n}\n.brands-info-content[data-v-209a9ad6] {\n  font-family: \"Roboto\";\n  font-size: 12px;\n  letter-spacing: 0.5px;\n}\n@media (min-width: 600px) {\n.brands-info-content[data-v-209a9ad6] {\n    font-size: 15px;\n}\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/icons/Favorite.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/icons/Favorite.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Favorite_vue_vue_type_template_id_5eb8d79c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Favorite.vue?vue&type=template&id=5eb8d79c& */ "./resources/js/components/icons/Favorite.vue?vue&type=template&id=5eb8d79c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Favorite_vue_vue_type_template_id_5eb8d79c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Favorite_vue_vue_type_template_id_5eb8d79c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/icons/Favorite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/icons/Favorite.vue?vue&type=template&id=5eb8d79c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/icons/Favorite.vue?vue&type=template&id=5eb8d79c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_template_id_5eb8d79c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Favorite.vue?vue&type=template&id=5eb8d79c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/icons/Favorite.vue?vue&type=template&id=5eb8d79c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_template_id_5eb8d79c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Favorite_vue_vue_type_template_id_5eb8d79c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Brands.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Brands.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brands_vue_vue_type_template_id_209a9ad6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brands.vue?vue&type=template&id=209a9ad6&scoped=true& */ "./resources/js/pages/Brands.vue?vue&type=template&id=209a9ad6&scoped=true&");
/* harmony import */ var _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brands.vue?vue&type=script&lang=js& */ "./resources/js/pages/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Brands_vue_vue_type_style_index_0_id_209a9ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true& */ "./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brands_vue_vue_type_template_id_209a9ad6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Brands_vue_vue_type_template_id_209a9ad6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "209a9ad6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Brands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Brands.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Brands.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_style_index_0_id_209a9ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=style&index=0&id=209a9ad6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_style_index_0_id_209a9ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_style_index_0_id_209a9ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_style_index_0_id_209a9ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_style_index_0_id_209a9ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Brands.vue?vue&type=template&id=209a9ad6&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Brands.vue?vue&type=template&id=209a9ad6&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_209a9ad6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=template&id=209a9ad6&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Brands.vue?vue&type=template&id=209a9ad6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_209a9ad6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_209a9ad6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);