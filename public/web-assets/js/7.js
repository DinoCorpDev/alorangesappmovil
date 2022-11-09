(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Registro.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Registro'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Servicios.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Servicios",
  props: ['imagen', 'servicio', 'introduccion', 'descripcion']
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
/* harmony import */ var _components_templatelanding_Servicios_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/templatelanding/Servicios.vue */ "./resources/js/components/templatelanding/Servicios.vue");
/* harmony import */ var _components_templatelanding_Registro_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/templatelanding/Registro.vue */ "./resources/js/components/templatelanding/Registro.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Servicios: _components_templatelanding_Servicios_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Registro: _components_templatelanding_Registro_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  name: "TempLanding"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=template&id=105b4e90&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Registro.vue?vue&type=template&id=105b4e90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "contenedor-registro"
  }, [_c("div", {
    staticClass: "registro"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=template&id=2e1331d0&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Servicios.vue?vue&type=template&id=2e1331d0& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "contenedor-principal"
  }, [_c("div", {
    staticClass: "contenedor-servicio"
  }, [_c("img", {
    staticClass: "imagen-servicio",
    attrs: {
      src: _vm.imagen,
      alt: _vm.servicio
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "texto-servicio"
  }, [_c("p", {
    staticClass: "serv"
  }, [_vm._v(_vm._s(_vm.servicio))]), _vm._v(" "), _c("p", {
    staticClass: "intro"
  }, [_vm._v(_vm._s(_vm.introduccion))]), _vm._v(" "), _c("p", {
    staticClass: "desc"
  }, [_vm._v(_vm._s(_vm.descripcion))])])])]);
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
  return _c("div", {
    staticClass: "general"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("servicios", {
    attrs: {
      servicio: "Diseño de espacios",
      introduccion: "Buscamos que los espacios sean únicos y consistentes",
      imagen: "../../../public/assets/img/Diseño-de-espacios.gif",
      descripcion: "Simplificamos la manera en cómo las personas eligen, sienten y obtienen el espacio habitable que sueñan. implementando ingeniería más diseño para encontrar ese espacio ideal."
    }
  }), _vm._v(" "), _c("servicios", {
    attrs: {
      servicio: "Servicios",
      introduccion: "Contribuimos a crear un espacio habitable reconfortante",
      imagen: "../../../public/assets/img/Servicios.jpg",
      descripcion: "Conocemos lo frustrante que es el intentar conectar con un servicio al estar creando ese espacio ideal, es por eso que brindamos nuestro acompañamiento, soporte y talento humano para construir."
    }
  }), _vm._v(" "), _c("servicios", {
    attrs: {
      servicio: "Electrónica de consumo",
      introduccion: "Dar función a los espacios implica una conexión con ellos",
      imagen: "../../../public/assets/img/Electronica-de-consumos.gif",
      descripcion: "Sabemos lo difícil que puede ser elegir productos funcionales con plena confianza y visión objetiva. Analizamos todos aquéllos equipos que aporten una buenas experiencias con el usuario."
    }
  }), _vm._v(" "), _c("servicios", {
    staticClass: "sin-margin",
    attrs: {
      servicio: "Pacto ambiental",
      introduccion: "Impulsamos el uso de prácticas sostenibles con el ambiente ",
      imagen: "../../../public/assets/img/Pacto-Ambiental.jpg",
      descripcion: "Tenemos el compromiso ético y cívico de implementar en nuestros proyectos medidas y estándares que garanticen una ejecución con impacto ambiental mínimo."
    }
  }), _vm._v(" "), _vm._m(2)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "logo-idovela"
  }, [_c("img", {
    attrs: {
      src: __webpack_require__(/*! ../../../public/assets/img/Logo-idovela-Estructural.svg */ "./public/assets/img/Logo-idovela-Estructural.svg")
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bienvenida"
  }, [_c("p", {
    staticClass: "saludo"
  }, [_vm._v("¡Hola Colombia!")]), _vm._v(" "), _c("p", {
    staticClass: "primer-parrafo"
  }, [_vm._v("Idovela como estudio de diseño y desarrollo estamos creando una solución tecnológica efectiva \n          para el mercado Colombiano que conecte a clientes con espacios habitables.")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "contenedor-info"
  }, [_c("div", {
    staticClass: "info-adicional"
  }, [_c("a", {
    staticClass: "letra",
    attrs: {
      href: "https://www.instagram.com/idovelaco/",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  }, [_vm._v("@IDOVELA 2022")]), _vm._v(" "), _c("p", {
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
  }, [_vm._v("PRIVACIDAD Y COOKIES")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.contenedor-registro{\r\n  min-height: 760px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n.registro{\r\n  background-color: white;\r\n  width: 597.26px;\r\n  height: 588.6px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 7px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\np{\r\n  color: white;\n}\np.serv{\r\n  margin-left: 48px;\r\n  font-family: 'Overpass';\r\n  font-size: 32px;\r\n  font-weight: 400;\n}\np.intro{\r\n  margin-left: 48px;\r\n  font-family: 'Overpass';\r\n  font-size: 46px;\r\n  font-weight: 300;\n}\np.desc{\r\n  margin-left: 48px;\r\n  font-family: 'Roboto';\r\n  font-size: 24px;\n}\n.contenedor-principal{ \r\n  min-height: 100px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 112px;\n}\n.contenedor-servicio{\r\n  width: 1108px;\r\n  height: 396px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n.imagen-servicio{\r\n  width: 400px;\r\n  height: 382.27px;\r\n  border-radius: 20px;\n}\n@media (min-width: 1200px)\r\n{\n}\n@media (max-width: 1199px)\r\n{\np.serv{\r\n    margin-left: 37px;\r\n    font-family: 'Overpass';\r\n    font-size: 24px;\r\n    font-weight: 400;\n}\np.intro{\r\n    margin-left: 37px;\r\n    font-family: 'Overpass';\r\n    font-size: 36px;\r\n    font-weight: 300;\n}\np.desc{\r\n    margin-left: 37px;\r\n    margin-bottom: 0;\r\n    font-family: 'Roboto';\r\n    font-size: 16px;\n}\n.contenedor-principal{ \r\n   margin-bottom: 46.8px;\n}\n.contenedor-servicio{\r\n    width: 883.26px;\r\n    height: 300.1px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.imagen-servicio{\r\n    width: 307.91px;\r\n    height: 294.26px;\n}\n}\n@media (max-width: 991px)\r\n{\np.serv{\r\n    margin-left: 37px;\r\n    font-family: 'Overpass';\r\n    font-size: 20px;\r\n    font-weight: 400;\n}\np.intro{\r\n    margin-left: 37px;\r\n    font-family: 'Overpass';\r\n    font-size: 27px;\r\n    font-weight: 300;\n}\np.desc{\r\n    margin-left: 37px;\r\n    margin-bottom: 0;\r\n    font-family: 'Roboto';\r\n    font-size: 15px;\n}\n.contenedor-principal{ \r\n   margin-bottom: 46.8px;\n}\n.contenedor-servicio{\r\n    width: 883.26px;\r\n    height: 300.1px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.imagen-servicio{\r\n    width: 307.91px;\r\n    height: 294.26px;\n}\n}\n@media (max-width: 767px)\r\n{\np.serv{\r\n    margin-left: 0;\r\n    font-size: 16px;\n}\np.intro{\r\n    margin-left: 0;\r\n    font-family: 'Overpass';\r\n    font-size: 19px;\r\n    font-weight: 300;\n}\np.desc{\r\n    margin-left: 0;\r\n    font-family: 'Roboto';\r\n    font-size: 12px;\n}\n.contenedor-principal{ \r\n   margin-bottom: 46.8px;\n}\n.contenedor-servicio{\r\n    width: 276px;\r\n    height: 486.56px;\r\n    display: block;\n}\n.imagen-servicio{\r\n    width: 275.68px;\r\n    height: 263.46px;\r\n    margin-bottom: 27px;\n}\n}\r\n", ""]);

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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Overpass:wght@200;300;400;700&display=swap);", ""]);

// module
exports.push([module.i, "\na.letra{\r\n  color: white;\r\n  text-decoration: none;\n}\np.saludo {\r\n    font-size: 90px;\r\n    font-family: 'Overpass' ;\r\n    font-weight: 300;\n}\np.primer-parrafo{\r\n  font-size: 24px;\r\n  font-family: 'Roboto';\r\n  margin-bottom: 0;\n}\np.letra{\r\n  margin-bottom: 0;\n}\n.letra{\r\n  font-family: 'Overpass' ;\r\n  font-weight: 700;\r\n  font-size: 15px;\n}\n.letra.punto{\r\n  margin: 0 10px;\n}\n.general{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    padding-top: 5.3%;\r\n    padding-bottom: 14.8%;\n}\n.logo-idovela {\r\n   margin: auto auto 57.7px auto; \r\n   align-items: center;\r\n   display: flex;\r\n   justify-content: center; \r\n   width: 350px;\r\n   height: 350px;\n}\n.bienvenida{\r\n    text-align: center;\r\n    margin: 0 auto 13.8px auto;\r\n    color: white;\r\n    width: 1043px;\r\n    height: 308px;\n}\n.sin-margin\r\n{\r\n  margin-bottom: 0;\n}\n.contenedor-info{\r\n  min-height: 20px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 20px;\n}\n.info-adicional{\r\n  width: 504px;\r\n  height: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n@media (min-width: 1200px)\r\n{\n}\n@media (max-width: 1199px)\r\n{\n.general{\r\n    background-color: #242526;\r\n    padding-top: 50px;\r\n    padding-bottom: 106.5px;\r\n    padding-left: 60px;\r\n    padding-right: 60px;\n}\n.logo-idovela { \r\n   width: 250.07px;\r\n   height: 250.07px;\n}\n.bienvenida{\r\n    width: 679px;\r\n    height: 165.3px;\r\n    margin-bottom: 90.8px;\n}\np.saludo {\r\n    font-size: 48px;\n}\np.primer-parrafo{\r\n    font-size: 16px;\r\n    margin-bottom: 0;\n}\n.contenedor-info{\r\n    margin-top: 48px;\n}\n.info-adicional{\r\n    width: 308px;\r\n    height: 43px;\n}\n.letra{\r\n    font-family: 'Overpass' ;\r\n    font-weight: 700;\r\n    font-size: 8px;\n}\n}\n@media (max-width: 991px)\r\n{\n.general{\r\n    background-color: #242526;\r\n    padding-top: 50px;\r\n    padding-bottom: 106.5px;\r\n    padding-left: 60px;\r\n    padding-right: 60px;\n}\n.logo-idovela { \r\n   width: 250.07px;\r\n   height: 250.07px;\n}\n.bienvenida{\r\n    width: 679px;\r\n    height: 165.3px;\r\n    margin-bottom: 90.8px;\n}\np.saludo {\r\n    font-size: 48px;\n}\np.primer-parrafo{\r\n    font-size: 16px;\r\n    margin-bottom: 0;\n}\n.contenedor-info{\r\n    margin-top: 48px;\n}\n.info-adicional{\r\n    width: 308px;\r\n    height: 43px;\n}\n.letra{\r\n    font-family: 'Overpass' ;\r\n    font-weight: 700;\r\n    font-size: 8px;\n}\n}\n@media (max-width: 767px)\r\n{\n.general{\r\n    background-color: #242526;\r\n    padding-top: 46px;\r\n    padding-bottom: 24px;\n}\n.logo-idovela { \r\n   width: 241.4px;\r\n   height: 241.4px;\n}\n.bienvenida{\r\n    width: 276px;\r\n    height: 233.8px;\r\n    margin-bottom: 46.3px;\n}\np.saludo {\r\n    font-size: 24px;\n}\np.primer-parrafo{\r\n    font-size: 16px;\r\n    margin-bottom: 0;\n}\n.contenedor-info{\r\n    margin-top: 48px;\n}\n.info-adicional{\r\n    width: 308px;\r\n    height: 43px;\n}\n.letra{\r\n    font-family: 'Overpass' ;\r\n    font-weight: 700;\r\n    font-size: 7px;\n}\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css&");

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

/***/ "./public/assets/img/Logo-idovela-Estructural.svg":
/*!********************************************************!*\
  !*** ./public/assets/img/Logo-idovela-Estructural.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/public/images/Logo-idovela-Estructural.svg?5c636be1ea86ee6f42b180ec682c10a7";

/***/ }),

/***/ "./resources/js/components/templatelanding/Registro.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/templatelanding/Registro.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registro_vue_vue_type_template_id_105b4e90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registro.vue?vue&type=template&id=105b4e90& */ "./resources/js/components/templatelanding/Registro.vue?vue&type=template&id=105b4e90&");
/* harmony import */ var _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registro.vue?vue&type=script&lang=js& */ "./resources/js/components/templatelanding/Registro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registro_vue_vue_type_style_index_0_id_105b4e90_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css& */ "./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registro_vue_vue_type_template_id_105b4e90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registro_vue_vue_type_template_id_105b4e90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templatelanding/Registro.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/templatelanding/Registro.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/templatelanding/Registro.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_105b4e90_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=style&index=0&id=105b4e90&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_105b4e90_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_105b4e90_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_105b4e90_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_105b4e90_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/templatelanding/Registro.vue?vue&type=template&id=105b4e90&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/templatelanding/Registro.vue?vue&type=template&id=105b4e90& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_105b4e90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registro.vue?vue&type=template&id=105b4e90& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Registro.vue?vue&type=template&id=105b4e90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_105b4e90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_105b4e90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/templatelanding/Servicios.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/templatelanding/Servicios.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Servicios_vue_vue_type_template_id_2e1331d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Servicios.vue?vue&type=template&id=2e1331d0& */ "./resources/js/components/templatelanding/Servicios.vue?vue&type=template&id=2e1331d0&");
/* harmony import */ var _Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Servicios.vue?vue&type=script&lang=js& */ "./resources/js/components/templatelanding/Servicios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Servicios_vue_vue_type_style_index_0_id_2e1331d0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css& */ "./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Servicios_vue_vue_type_template_id_2e1331d0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Servicios_vue_vue_type_template_id_2e1331d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/templatelanding/Servicios.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/templatelanding/Servicios.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/templatelanding/Servicios.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_2e1331d0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=style&index=0&id=2e1331d0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_2e1331d0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_2e1331d0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_2e1331d0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_style_index_0_id_2e1331d0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/templatelanding/Servicios.vue?vue&type=template&id=2e1331d0&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/templatelanding/Servicios.vue?vue&type=template&id=2e1331d0& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_2e1331d0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Servicios.vue?vue&type=template&id=2e1331d0& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/templatelanding/Servicios.vue?vue&type=template&id=2e1331d0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_2e1331d0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Servicios_vue_vue_type_template_id_2e1331d0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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