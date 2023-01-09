(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/LayoutNavbar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    toggleTheme: function toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/About.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/Bar.vue */ "./resources/js/components/global/Bar.vue");
/* harmony import */ var _components_global_LayoutNavbar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/LayoutNavbar.vue */ "./resources/js/components/global/LayoutNavbar.vue");
/* harmony import */ var _components_global_CarouselDescription_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/CarouselDescription.vue */ "./resources/js/components/global/CarouselDescription.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Bar: _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CarouselDescription: _components_global_CarouselDescription_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LayoutNavbar: _components_global_LayoutNavbar_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true& ***!
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
  return _c("v-app-bar", {
    attrs: {
      color: _vm.$vuetify.theme.dark ? "#000000" : "#FAFCFC",
      height: "auto"
    }
  }, [_c("v-container", {
    staticClass: "pa-0 fill-height justify-space-between",
    attrs: {
      fluid: ""
    }
  }, [_c("router-link", {
    staticClass: "navbar-brand",
    attrs: {
      to: {
        name: "TempLanding"
      }
    }
  }, [_c("v-img", {
    attrs: {
      src: "/public/assets/img/carousel-item-placeholder.png",
      "max-width": "117"
    }
  })], 1), _vm._v(" "), _c("div", [_c("custom-button", {
    staticClass: "mr-4",
    attrs: {
      light: "",
      icon: "la-store-alt",
      text: "Ir a tienda"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-4",
    attrs: {
      light: "",
      text: "Iniciar Sesión"
    }
  }), _vm._v(" "), _c("v-btn", {
    on: {
      click: function click($event) {
        return _vm.toggleTheme();
      }
    }
  }, [_vm._v("🌛")])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=template&id=520b5d54&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/About.vue?vue&type=template&id=520b5d54&scoped=true& ***!
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
  return _c("div", [_c("layout-navbar"), _vm._v(" "), _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("bar", {
    attrs: {
      text2: "Compartir",
      icon2: "la-share-alt-square"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "div-about"
  }, [_c("v-row", {
    attrs: {
      "no-gutters": ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("div", {
    staticClass: "information"
  }, [_c("div", {
    staticClass: "title"
  }, [_c("div", [_c("v-img", {
    staticClass: "img",
    attrs: {
      "max-width": "90px",
      src: "../../public/assets/img/carousel-item-placeholder.png"
    }
  })], 1), _vm._v(" "), _c("div", [_c("h6", {
    staticClass: "text-uppercase black--text"
  }, [_vm._v("Información")])])]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("div", {
    staticClass: "text"
  }, [_c("span", {
    staticClass: "body1 black--text"
  }, [_vm._v("Incluye Lorem Ipsum is simply dummy text of the printing\n                                •\n                                Lorem Ipsum has been the\n                                industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum\n                                has\n                                been\n                                the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply\n                                dummy\n                                text of the printing • Lorem Ipsum has been the industry's Incluye Lorem Ipsum is\n                                simply\n                                dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem\n                                Ipsum\n                                is\n                                simply dummy text of the printing • Lorem Ipsum has been the industry's • Lorem\n                                Ipsum\n                                has\n                                been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •\n                                Lorem\n                                Ipsum\n                                has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum\n                                is\n                                simply dummy text of the printing • Lorem Ipsum has been the industry's Incluye\n                                Lorem\n                                Ipsum\n                                is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye\n                                Lorem\n                                Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •\n                                Lorem\n                                Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the\n                                printing\n                                •\n                                Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of\n                                the\n                                printing • Lorem Ipsum has been the industry's • Lorem Ipsum has been the industry's\n                                •\n                                Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the\n                                industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum\n                                has\n                                been\n                                the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem\n                                Ipsum\n                                has\n                                been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is\n                                simply\n                                dummy text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has\n                                been\n                                the\n                                industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum\n                                has\n                                been\n                                the industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem\n                                Ipsum\n                                has\n                                been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •\n                                Lorem\n                                Ipsum\n                                has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum\n                                is\n                                simply dummy text of the printing • Lorem Ipsum has been the industry's")])]), _vm._v(" "), _c("v-divider")], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "8"
    }
  }, [_c("div", {
    staticClass: "div-carousel"
  }, [_c("carousel-description")], 1)])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-brand .v-image[data-v-ccba3c2a] {\n  width: 60px;\n}\n@media (min-width: 600px) {\n.navbar-brand .v-image[data-v-ccba3c2a] {\n    width: 90px;\n}\n}\n@media (min-width: 960px) {\n.navbar-brand .v-image[data-v-ccba3c2a] {\n    width: 117px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-carousel[data-v-520b5d54] {\n  background-color: #F5F5F5;\n  padding: 10px;\n  height: 100%;\n}\n@media (max-width: 599px) {\n.div-carousel[data-v-520b5d54] {\n    background-color: #F5F5F5;\n    padding: 0px;\n    height: 100%;\n    border-end-end-radius: 10px;\n    border-end-start-radius: 10px;\n}\n}\n.title[data-v-520b5d54] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  gap: 10px;\n}\n.information[data-v-520b5d54] {\n  background-color: #F5F5F5;\n  padding: 20px;\n  height: 100%;\n}\n.img[data-v-520b5d54] {\n  background-color: #dfdfdf;\n  border-radius: 50%;\n  padding: 10px 0;\n}\n.text[data-v-520b5d54] {\n  margin: 20px 0;\n}\n@media (max-width: 959px) {\n.text[data-v-520b5d54] {\n    overflow: auto;\n    height: 230px;\n}\n.information[data-v-520b5d54] {\n    border-start-start-radius: 10px;\n    border-start-end-radius: 10px;\n}\n.div-carousel[data-v-520b5d54] {\n    border-end-start-radius: 10px;\n    border-end-end-radius: 10px;\n}\n}\n@media (min-width: 960px) {\n.text[data-v-520b5d54] {\n    overflow: auto;\n    height: 600px;\n}\n.information[data-v-520b5d54] {\n    border-start-start-radius: 10px;\n    border-end-start-radius: 10px;\n}\n.div-carousel[data-v-520b5d54] {\n    border-end-end-radius: 10px;\n    border-start-end-radius: 10px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/LayoutNavbar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/LayoutNavbar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutNavbar_vue_vue_type_template_id_ccba3c2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true& */ "./resources/js/components/global/LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true&");
/* harmony import */ var _LayoutNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutNavbar.vue?vue&type=script&lang=js& */ "./resources/js/components/global/LayoutNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LayoutNavbar_vue_vue_type_style_index_0_id_ccba3c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true& */ "./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LayoutNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutNavbar_vue_vue_type_template_id_ccba3c2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutNavbar_vue_vue_type_template_id_ccba3c2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ccba3c2a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/LayoutNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/LayoutNavbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/LayoutNavbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_style_index_0_id_ccba3c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=style&index=0&id=ccba3c2a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_style_index_0_id_ccba3c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_style_index_0_id_ccba3c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_style_index_0_id_ccba3c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_style_index_0_id_ccba3c2a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_template_id_ccba3c2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/LayoutNavbar.vue?vue&type=template&id=ccba3c2a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_template_id_ccba3c2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutNavbar_vue_vue_type_template_id_ccba3c2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/About.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/About.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About_vue_vue_type_template_id_520b5d54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=520b5d54&scoped=true& */ "./resources/js/pages/About.vue?vue&type=template&id=520b5d54&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _About_vue_vue_type_style_index_0_id_520b5d54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true& */ "./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_520b5d54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _About_vue_vue_type_template_id_520b5d54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "520b5d54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/About.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/About.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/About.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_520b5d54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=style&index=0&id=520b5d54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_520b5d54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_520b5d54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_520b5d54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_520b5d54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/About.vue?vue&type=template&id=520b5d54&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/About.vue?vue&type=template&id=520b5d54&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_520b5d54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./About.vue?vue&type=template&id=520b5d54&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/About.vue?vue&type=template&id=520b5d54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_520b5d54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_520b5d54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);