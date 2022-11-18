(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/temp-landing/Servicios.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Servicios",
  props: ["imagen", "servicio", "introduccion", "descripcion"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TempLanding.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_temp_landing_Servicios_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/temp-landing/Servicios.vue */ "./resources/js/components/temp-landing/Servicios.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TempLanding",
  components: {
    Servicios: _components_temp_landing_Servicios_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=template&id=6f685497&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/temp-landing/Servicios.vue?vue&type=template&id=6f685497& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "service-item mb-4 mb-md-16"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "4"
    }
  }, [_c("v-img", {
    staticClass: "imagen-servicio mx-auto mb-4 mb-sm-0",
    attrs: {
      src: _vm.imagen,
      alt: _vm.servicio,
      "max-width": "400",
      "aspect-ratio": "1.05"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "8"
    }
  }, [_c("div", {
    staticClass: "texto-servicio ms-sm-2 ms-md-4"
  }, [_c("p", {
    staticClass: "serv"
  }, [_vm._v(_vm._s(_vm.servicio))]), _vm._v(" "), _c("p", {
    staticClass: "intro"
  }, [_vm._v(_vm._s(_vm.introduccion))]), _vm._v(" "), _c("p", {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.descripcion))])])])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=template&id=1e1f572a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TempLanding.vue?vue&type=template&id=1e1f572a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("v-row", {
    staticClass: "mb-4 mb-sm-10 mb-md-16",
    attrs: {
      justify: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "8",
      sm: "9",
      md: "10"
    }
  }, [_c("v-img", {
    staticClass: "logo-idovela mx-auto mb-6 mb-sm-10",
    attrs: {
      src: "/public/assets/img/landing/Logo-idovela-Estructural.svg",
      "max-width": "350"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-center"
  }, [_c("p", {
    staticClass: "saludo mb-4"
  }, [_vm._v("¡Hola Colombia!")]), _vm._v(" "), _c("p", {
    staticClass: "primer-parrafo"
  }, [_vm._v("\n          Idovela como estudio de diseño y desarrollo estamos creando una\n          solución tecnológica efectiva para el mercado Colombiano que conecte\n          a clientes con espacios habitables.\n        ")])])], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-4 mb-md-16",
    attrs: {
      justify: "center"
    }
  }, [_c("v-col", {
    staticClass: "service-list",
    attrs: {
      cols: "10"
    }
  }, [_c("servicios", {
    attrs: {
      servicio: "Diseño de espacios",
      introduccion: "Buscamos que los espacios sean únicos y consistentes",
      imagen: "/public/assets/img/landing/Diseño-de-espacios.gif",
      descripcion: "Simplificamos la manera en cómo las personas eligen, sienten y obtienen el espacio habitable que sueñan. implementando ingeniería más diseño para encontrar ese espacio ideal."
    }
  }), _vm._v(" "), _c("servicios", {
    attrs: {
      servicio: "Servicios",
      introduccion: "Contribuimos a crear un espacio habitable reconfortante",
      imagen: "/public/assets/img/landing/Servicios.jpg",
      descripcion: "Conocemos lo frustrante que es el intentar conectar con un servicio al estar creando ese espacio ideal, es por eso que brindamos nuestro acompañamiento, soporte y talento humano para construir."
    }
  }), _vm._v(" "), _c("servicios", {
    attrs: {
      servicio: "Electrónica de consumo",
      introduccion: "Dar función a los espacios implica una conexión con ellos",
      imagen: "/public/assets/img/landing/Electronica-de-consumos.gif",
      descripcion: "Sabemos lo difícil que puede ser elegir productos funcionales con plena confianza y visión objetiva. Analizamos todos aquéllos equipos que aporten una buenas experiencias con el usuario."
    }
  }), _vm._v(" "), _c("servicios", {
    attrs: {
      servicio: "Pacto ambiental",
      introduccion: "Impulsamos el uso de prácticas sostenibles con el ambiente ",
      imagen: "/public/assets/img/landing/Pacto-Ambiental.jpg",
      descripcion: "Tenemos el compromiso ético y cívico de implementar en nuestros proyectos medidas y estándares que garanticen una ejecución con impacto ambiental mínimo."
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      tag: "footer",
      justify: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "10"
    }
  }, [_c("div", {
    staticClass: "info-adicional"
  }, [_c("p", {
    staticClass: "letra"
  }, [_vm._v("© IDOVELA 2022")]), _vm._v(" "), _c("p", {
    staticClass: "letra punto"
  }, [_vm._v("•")]), _vm._v(" "), _c("p", {
    staticClass: "letra"
  }, [_vm._v("BOGOTÁ - COLOMBIA")]), _vm._v(" "), _c("p", {
    staticClass: "letra punto"
  }, [_vm._v("•")]), _vm._v(" "), _c("a", {
    staticClass: "letra",
    attrs: {
      href: "#"
    }
  }, [_vm._v("PRIVACIDAD Y COOKIES")])])])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imagen-servicio {\r\n  border-radius: 20px;\n}\n@media (min-width: 600px) {\n.texto-servicio {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    height: 100%;\n}\n}\n@media (min-width: 960px) {\n.texto-servicio {\r\n    justify-content: space-between;\n}\n}\np {\r\n  font-family: \"Overpass\", sans-serif;\r\n  color: #ffffff;\n}\np.serv {\r\n  font-size: 16px;\r\n  line-height: 1;\n}\np.intro {\r\n  font-size: 20px;\r\n  line-height: 1.15;\r\n  font-weight: 300;\n}\np.desc {\r\n  font-family: \"Roboto\";\r\n  font-size: 12px;\r\n  margin-bottom: 0;\r\n  line-height: 1.3;\n}\n@media (min-width: 768px) {\np.intro {\r\n    font-size: 24px;\n}\n}\n@media (min-width: 960px) {\np.serv {\r\n    font-size: 24px;\n}\np.intro {\r\n    font-size: 36px;\n}\np.desc {\r\n    font-size: 16px;\n}\n}\n@media (min-width: 1264px) {\np.serv {\r\n    font-size: 28px;\n}\np.intro {\r\n    font-size: 42px;\n}\np.desc {\r\n    font-size: 24px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-main {\r\n  background-color: #242526;\n}\n@media (min-width: 1264px) {\n.v-main {\r\n    background-color: #000000;\n}\n}\n.logo-idovela {\r\n  width: 250px;\n}\np.saludo {\r\n  font-family: \"Overpass\", sans-serif;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  font-weight: 300;\n}\np.primer-parrafo {\r\n  font-family: \"Roboto\";\r\n  font-size: 16px;\r\n  line-height: 1.3;\r\n  margin-bottom: 0;\n}\n@media (min-width: 600px) {\np.saludo {\r\n    font-size: 48px;\n}\n}\n@media (min-width: 960px) {\n.logo-idovela {\r\n    width: 350px;\n}\np.saludo {\r\n    font-size: 90px;\n}\np.primer-parrafo {\r\n    font-size: 24px;\n}\n}\na.letra {\r\n  color: #ffffff;\r\n  text-decoration: none;\n}\n.letra {\r\n  font-family: \"Overpass\";\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  margin-bottom: 0 !important;\n}\n@media (min-width: 768px) {\n.letra {\r\n    font-size: 15px;\n}\n}\n.letra.punto {\r\n  margin: 0 10px;\n}\n.info-adicional {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\n}\n.service-list .service-item:last-child {\r\n  margin-bottom: 0 !important;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css&");

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

/***/ "./resources/js/components/temp-landing/Servicios.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/temp-landing/Servicios.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Servicios_vue_vue_type_template_id_6f685497___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicios.vue?vue&type=template&id=6f685497& */ "./resources/js/components/temp-landing/Servicios.vue?vue&type=template&id=6f685497&");
/* harmony import */ var _Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Servicios.vue?vue&type=script&lang=js& */ "./resources/js/components/temp-landing/Servicios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Servicios_vue_vue_type_style_index_0_id_6f685497_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css& */ "./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Servicios_vue_vue_type_template_id_6f685497___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Servicios_vue_vue_type_template_id_6f685497___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/temp-landing/Servicios.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/temp-landing/Servicios.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/temp-landing/Servicios.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_6f685497_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=style&index=0&id=6f685497&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_6f685497_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_6f685497_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_6f685497_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_6f685497_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/temp-landing/Servicios.vue?vue&type=template&id=6f685497&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/temp-landing/Servicios.vue?vue&type=template&id=6f685497& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_6f685497___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=template&id=6f685497& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/temp-landing/Servicios.vue?vue&type=template&id=6f685497&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_6f685497___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_6f685497___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/TempLanding.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/TempLanding.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TempLanding_vue_vue_type_template_id_1e1f572a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TempLanding.vue?vue&type=template&id=1e1f572a& */ "./resources/js/pages/TempLanding.vue?vue&type=template&id=1e1f572a&");
/* harmony import */ var _TempLanding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TempLanding.vue?vue&type=script&lang=js& */ "./resources/js/pages/TempLanding.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TempLanding_vue_vue_type_style_index_0_id_1e1f572a_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css& */ "./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TempLanding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TempLanding_vue_vue_type_template_id_1e1f572a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TempLanding_vue_vue_type_template_id_1e1f572a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/TempLanding.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/TempLanding.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/TempLanding.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TempLanding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_style_index_0_id_1e1f572a_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=style&index=0&id=1e1f572a&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_style_index_0_id_1e1f572a_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_style_index_0_id_1e1f572a_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_style_index_0_id_1e1f572a_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_style_index_0_id_1e1f572a_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/TempLanding.vue?vue&type=template&id=1e1f572a&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/TempLanding.vue?vue&type=template&id=1e1f572a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_template_id_1e1f572a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./TempLanding.vue?vue&type=template&id=1e1f572a& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/TempLanding.vue?vue&type=template&id=1e1f572a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_template_id_1e1f572a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_TempLanding_vue_vue_type_template_id_1e1f572a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);