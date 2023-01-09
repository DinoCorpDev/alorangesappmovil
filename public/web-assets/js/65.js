(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/Bar.vue */ "./resources/js/components/global/Bar.vue");
/* harmony import */ var _components_global_CarouselDescription_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/CarouselDescription.vue */ "./resources/js/components/global/CarouselDescription.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/CustomInput.vue */ "./resources/js/components/global/CustomInput.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Bar: _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CarouselDescription: _components_global_CarouselDescription_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CustomInput: _components_global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=template&id=15922d12&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login2.vue?vue&type=template&id=15922d12&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("bar"), _vm._v(" "), _c("div", {
    staticClass: "all"
  }, [_c("v-container", {
    staticClass: "mt-5 mb-5 container"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("carousel-description", {
    attrs: {
      title: "h4",
      description: "Lorem ipsum dolor atum adipisci, suscipit iusto molestiae voluptates!",
      description2: "# Instalaciones - # Mantenimiento - # Planes ",
      slides: _vm.sliderSeeder
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("div", {
    staticClass: "div-title"
  }, [_c("h6", {
    staticClass: "black--text title"
  }, [_vm._v("Inicio de Sesión")]), _vm._v(" "), _c("v-divider", {
    staticClass: "divider"
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "inputs"
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Correo Electronico")]), _vm._v(" "), _c("custom-input"), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("custom-input"), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase span"
  }, [_vm._v("¿Has olvidado tu contraseña?\n                            ")]), _vm._v(" "), _c("custom-button", {
    staticClass: "mt-3 mb-3",
    attrs: {
      block: "",
      color: "#888989",
      text: "Iniciar Sesión"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase span"
  }, [_vm._v("¿No tienes ninguna cuenta?")]), _vm._v(" "), _c("custom-button", {
    staticClass: "mt-3",
    attrs: {
      block: "",
      light: "",
      color: "#DFDFDF",
      text: "Registrarse"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "footer"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v("© Idovela 2022")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "8"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v("Información")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v("Solicitudes")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("p", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v("Contacto")])])], 1)], 1)], 1)], 1)])])], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title[data-v-15922d12] {\n  margin-top: 5px;\n}\n.container[data-v-15922d12] {\n  background-color: #fafcfc;\n  box-shadow: -1px 1px 26px -11px rgba(0, 0, 0, 0.75);\n  border-radius: 10px;\n}\n@media (min-width: 960px) {\n.form[data-v-15922d12] {\n    border: 1px solid #e4e4e4;\n    border-radius: 10px;\n    padding: 10px;\n}\n.footer[data-v-15922d12] {\n    margin-top: 150px;\n}\n.all[data-v-15922d12] {\n    margin: 0 12%;\n}\n}\n@media (max-width: 959px) {\n.all[data-v-15922d12] {\n    margin: 0 20px;\n}\n.footer[data-v-15922d12] {\n    margin-top: 30px;\n}\n}\n.divider[data-v-15922d12] {\n  margin: 15px 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true&");

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

/***/ "./resources/js/pages/auth/Login2.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/auth/Login2.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login2_vue_vue_type_template_id_15922d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login2.vue?vue&type=template&id=15922d12&scoped=true& */ "./resources/js/pages/auth/Login2.vue?vue&type=template&id=15922d12&scoped=true&");
/* harmony import */ var _Login2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login2.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Login2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login2_vue_vue_type_style_index_0_id_15922d12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true& */ "./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login2_vue_vue_type_template_id_15922d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login2_vue_vue_type_template_id_15922d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "15922d12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Login2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Login2.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/auth/Login2.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_style_index_0_id_15922d12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=style&index=0&id=15922d12&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_style_index_0_id_15922d12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_style_index_0_id_15922d12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_style_index_0_id_15922d12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_style_index_0_id_15922d12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/auth/Login2.vue?vue&type=template&id=15922d12&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/auth/Login2.vue?vue&type=template&id=15922d12&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_template_id_15922d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login2.vue?vue&type=template&id=15922d12&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login2.vue?vue&type=template&id=15922d12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_template_id_15922d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Login2_vue_vue_type_template_id_15922d12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);