(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TestComponents.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_BannerCategoryProduct_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/BannerCategoryProduct.vue */ "./resources/js/components/global/BannerCategoryProduct.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/PresentationBanner.vue */ "./resources/js/components/global/PresentationBanner.vue");
/* harmony import */ var _components_global_CarouselProducts_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/CarouselProducts.vue */ "./resources/js/components/global/CarouselProducts.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_ProductItem_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global/ProductItem.vue */ "./resources/js/components/global/ProductItem.vue");
/* harmony import */ var _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/global/SelectCustom.vue */ "./resources/js/components/global/SelectCustom.vue");







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BannerCategoryProduct: _components_global_BannerCategoryProduct_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PresentationBanner: _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CarouselProducts: _components_global_CarouselProducts_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProductItem: _components_global_ProductItem_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    SelectCustom: _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=template&id=3f464311&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TestComponents.vue?vue&type=template&id=3f464311& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "py-16"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Botones")]), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Ir a tienda",
      icon: "la-store-alt"
    }
  }), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Comunicarse con ventas",
      variant: "blue darken-4",
      outlined: "",
      "variant-text": "white--text"
    }
  }), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Comprar",
      variant: "blue darken-4",
      "variant-text": "white--text",
      disabled: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Carousel")]), _vm._v(" "), _c("carousel")], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Selector")]), _vm._v(" "), _c("select-custom")], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Producto con Carousel")]), _vm._v(" "), _c("presentation-banner", {
    attrs: {
      "no-dots": "",
      "no-arrows": "true",
      category: "Preambulo",
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1",
      orientation: "order-1"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Item Producto")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1",
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Banner Categoria")]), _vm._v(" "), _c("banner-category-product", {
    attrs: {
      title: "Titulo",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "100"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Carousel de Productos")]), _vm._v(" "), _c("carousel-products", {
    attrs: {
      "no-dots": "",
      "no-arrows": "true"
    }
  })], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-main {\r\n  background-color: #000000;\n}\nh2 {\r\n  color: #ffffff;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css&");

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

/***/ "./resources/js/pages/TestComponents.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/TestComponents.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestComponents_vue_vue_type_template_id_3f464311___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestComponents.vue?vue&type=template&id=3f464311& */ "./resources/js/pages/TestComponents.vue?vue&type=template&id=3f464311&");
/* harmony import */ var _TestComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TestComponents.vue?vue&type=script&lang=js& */ "./resources/js/pages/TestComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TestComponents_vue_vue_type_style_index_0_id_3f464311_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css& */ "./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TestComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TestComponents_vue_vue_type_template_id_3f464311___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TestComponents_vue_vue_type_template_id_3f464311___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/TestComponents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/TestComponents.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/TestComponents.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TestComponents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_style_index_0_id_3f464311_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=style&index=0&id=3f464311&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_style_index_0_id_3f464311_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_style_index_0_id_3f464311_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_style_index_0_id_3f464311_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_style_index_0_id_3f464311_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/TestComponents.vue?vue&type=template&id=3f464311&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/TestComponents.vue?vue&type=template&id=3f464311& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_template_id_3f464311___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./TestComponents.vue?vue&type=template&id=3f464311& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TestComponents.vue?vue&type=template&id=3f464311&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_template_id_3f464311___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TestComponents_vue_vue_type_template_id_3f464311___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);