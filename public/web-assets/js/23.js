(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomInput.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomInput",
  props: {
    placeholder: {
      type: String,
      "default": "--"
    },
    type: {
      type: String,
      "default": "text"
    },
    required: {
      type: Boolean,
      "default": false
    },
    value: {
      type: String,
      "default": ""
    },
    errorMessages: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SelectCustom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SelectCustom",
  props: {
    dark: {
      type: Boolean,
      "default": false
    },
    light: {
      type: Boolean,
      "default": false
    },
    label: {
      type: String
    },
    items: {
      type: Array
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Registration2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_CarouselDescription_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/CarouselDescription.vue */ "./resources/js/components/global/CarouselDescription.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global/CustomInput.vue */ "./resources/js/components/global/CustomInput.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");
/* harmony import */ var _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/global/SelectCustom.vue */ "./resources/js/components/global/SelectCustom.vue");





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CarouselDescription: _components_global_CarouselDescription_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomInput: _components_global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectCustom: _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      DocumentType: ["(C.C) Cedula de ciudadanía", "NIT"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=template&id=91eb5550&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomInput.vue?vue&type=template&id=91eb5550&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-text-field", {
    staticClass: "input",
    attrs: {
      placeholder: _vm.placeholder,
      type: _vm.type,
      required: _vm.required,
      "error-messages": _vm.errorMessages,
      value: _vm.value
    },
    on: {
      input: function input($event) {
        return _vm.$emit("input", $event);
      }
    }
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true& ***!
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
  return _c("div", [_c("v-select", {
    staticClass: "text-uppercase",
    attrs: {
      items: _vm.items,
      label: _vm.label,
      dark: _vm.dark,
      light: _vm.light,
      solo: "",
      "append-icon": "las la-angle-down"
    },
    scopedSlots: _vm._u([{
      key: "item",
      fn: function fn(_ref) {
        var item = _ref.item,
          attrs = _ref.attrs,
          on = _ref.on;
        return [_c("v-list-item", _vm._g(_vm._b({}, "v-list-item", attrs, false), on), [_c("v-list-item-title", {
          attrs: {
            id: attrs["aria-labelledby"]
          },
          domProps: {
            textContent: _vm._s(item)
          }
        })], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=template&id=128aa67b&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Registration2.vue?vue&type=template&id=128aa67b&scoped=true& ***!
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
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("v-container", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "wrap pa-5 form"
  }, [_c("div", {
    staticClass: "div-title"
  }, [_c("h6", {
    staticClass: "black--text title"
  }, [_vm._v("Registro")]), _vm._v(" "), _c("v-divider", {
    staticClass: "divider"
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "inputs"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Correo Electrónico")]), _vm._v(" "), _c("custom-input")], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Contraseña")]), _vm._v(" "), _c("custom-input")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Repetir Contraseña")]), _vm._v(" "), _c("custom-input")], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("label", {
    staticClass: "label"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "body-1 black--text text"
  }, [_vm._v("Registrar como persona natural")]), _vm._v(" "), _c("span", {
    staticClass: "checkmark"
  })])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("label", {
    staticClass: "label"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "body-1 black--text text"
  }, [_vm._v("Registrar como persona jurídica")]), _vm._v(" "), _c("span", {
    staticClass: "checkmark"
  })])])], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Primer Nombre")]), _vm._v(" "), _c("custom-input")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Segundo Nombre (Opcional)")]), _vm._v(" "), _c("custom-input")], 1)], 1), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Documento (Representante)")]), _vm._v(" "), _c("select-custom", {
    attrs: {
      light: "",
      label: "--",
      items: _vm.DocumentType
    }
  }), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Nombre De Direccion (Casa / Oficina)")]), _vm._v(" "), _c("custom-input")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Direccion (Calle / Carrera)")]), _vm._v(" "), _c("custom-input")], 1)], 1), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Codigo Postal")]), _vm._v(" "), _c("custom-input"), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Municipio")]), _vm._v(" "), _c("select-custom", {
    attrs: {
      light: "",
      label: "--",
      items: _vm.Municipio
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Pais")]), _vm._v(" "), _c("custom-input"), _vm._v(" "), _c("label", {
    staticClass: "label"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "body-1 black--text text"
  }, [_vm._v("\n                                        He podido leer y entiendo la política de privacidad y cookies\n                                    ")]), _vm._v(" "), _c("span", {
    staticClass: "checkmark"
  })]), _vm._v(" "), _c("label", {
    staticClass: "label"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "body-1 black--text text"
  }, [_vm._v("\n                                        Quiero recibir comunicaciones comerciales personalizadas de idovela a través\n                                        de email.\n                                    ")]), _vm._v(" "), _c("span", {
    staticClass: "checkmark"
  })])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Primer Apellido")]), _vm._v(" "), _c("custom-input")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Segundo Apellido")]), _vm._v(" "), _c("custom-input")], 1)], 1), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Numero de Documento")]), _vm._v(" "), _c("custom-input"), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("\n                                    Direccion Adicional (Piso / Apartamento / Oficina)\n                                ")]), _vm._v(" "), _c("custom-input"), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("select-custom", {
    attrs: {
      light: "",
      label: "--",
      items: _vm.DocumentType
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Barrio ( Opcional )")]), _vm._v(" "), _c("custom-input"), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("Teléfono / Movil")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "2",
      md: "4"
    }
  }, [_c("select-custom", {
    attrs: {
      light: "",
      label: "--",
      items: _vm.DocumentType
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "10",
      md: "8"
    }
  }, [_c("custom-input")], 1)], 1), _vm._v(" "), _c("custom-button", {
    staticClass: "mt-3",
    attrs: {
      block: "",
      color: "black",
      text: "Guardar",
      to: {
        name: "RegistrationSuccess"
      }
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "footer"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v("© Idovela 2022")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-between"
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v(" Información ")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v(" Solicitudes ")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("p", {
    staticClass: "subtitle1 bold text-uppercase black--text"
  }, [_vm._v("Contacto")])])], 1)], 1)], 1)], 1)])])], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input[data-v-91eb5550] {\n  background-color: #f5f5f5;\n  height: 38px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 0 10px;\n  width: 100%;\n  outline: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select[data-v-f2ed57c4] {\n  border-radius: 5px;\n}\n.v-select[data-v-f2ed57c4] .v-input__control {\n  min-height: 38px;\n}\n.v-select[data-v-f2ed57c4] .v-input__control .v-input__slot {\n  background: #18191a;\n  padding: 0 18px !important;\n}\n.v-select[data-v-f2ed57c4] .v-label {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  color: #ffffff;\n}\n.v-select[data-v-f2ed57c4] .v-icon {\n  font-size: 15px;\n}\n.v-select[data-v-f2ed57c4] .theme--dark.v-list {\n  background: #18191a;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-application.theme--light {\n  background: #dee0e0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrap[data-v-128aa67b] {\n  background-color: #fafcfc;\n  border-radius: 10px;\n}\n.title[data-v-128aa67b] {\n  margin-top: 5px;\n}\n@media (min-width: 960px) {\n.form[data-v-128aa67b] {\n    border: 1px solid #e4e4e4;\n    border-radius: 10px;\n    padding: 10px;\n}\n.footer[data-v-128aa67b] {\n    margin-top: 20px;\n}\n.all[data-v-128aa67b] {\n    margin: 0 12%;\n}\n}\n@media (max-width: 959px) {\n.all[data-v-128aa67b] {\n    margin: 0 20px;\n}\n.footer[data-v-128aa67b] {\n    margin-top: 30px;\n}\n}\n.divider[data-v-128aa67b] {\n  margin: 15px 0;\n}\n.label[data-v-128aa67b] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.label input[data-v-128aa67b] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark[data-v-128aa67b] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n}\n.label:hover input ~ .checkmark[data-v-128aa67b] {\n  background-color: #f5f5f5;\n}\n.label input:checked ~ .checkmark[data-v-128aa67b] {\n  background-color: #000000;\n  border-radius: 5px;\n}\n.checkmark[data-v-128aa67b]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.label input:checked ~ .checkmark[data-v-128aa67b]:after {\n  display: block;\n}\n.label .checkmark[data-v-128aa67b]:after {\n  left: 9px;\n  top: 5px;\n  width: 7px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/CustomInput.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/global/CustomInput.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomInput_vue_vue_type_template_id_91eb5550_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=template&id=91eb5550&scoped=true& */ "./resources/js/components/global/CustomInput.vue?vue&type=template&id=91eb5550&scoped=true&");
/* harmony import */ var _CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=script&lang=js& */ "./resources/js/components/global/CustomInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomInput_vue_vue_type_style_index_0_id_91eb5550_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true& */ "./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomInput_vue_vue_type_template_id_91eb5550_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomInput_vue_vue_type_template_id_91eb5550_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "91eb5550",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/CustomInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/CustomInput.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/global/CustomInput.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_id_91eb5550_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=style&index=0&id=91eb5550&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_id_91eb5550_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_id_91eb5550_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_id_91eb5550_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_style_index_0_id_91eb5550_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/CustomInput.vue?vue&type=template&id=91eb5550&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/global/CustomInput.vue?vue&type=template&id=91eb5550&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_template_id_91eb5550_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomInput.vue?vue&type=template&id=91eb5550&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomInput.vue?vue&type=template&id=91eb5550&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_template_id_91eb5550_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomInput_vue_vue_type_template_id_91eb5550_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/SelectCustom.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/SelectCustom.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SelectCustom_vue_vue_type_template_id_f2ed57c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true& */ "./resources/js/components/global/SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true&");
/* harmony import */ var _SelectCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectCustom.vue?vue&type=script&lang=js& */ "./resources/js/components/global/SelectCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SelectCustom_vue_vue_type_style_index_0_id_f2ed57c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true& */ "./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SelectCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SelectCustom_vue_vue_type_template_id_f2ed57c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SelectCustom_vue_vue_type_template_id_f2ed57c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2ed57c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/SelectCustom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/SelectCustom.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/SelectCustom.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectCustom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_style_index_0_id_f2ed57c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=style&index=0&id=f2ed57c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_style_index_0_id_f2ed57c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_style_index_0_id_f2ed57c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_style_index_0_id_f2ed57c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_style_index_0_id_f2ed57c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_template_id_f2ed57c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SelectCustom.vue?vue&type=template&id=f2ed57c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_template_id_f2ed57c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectCustom_vue_vue_type_template_id_f2ed57c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/auth/Registration2.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/auth/Registration2.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Registration2_vue_vue_type_template_id_128aa67b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registration2.vue?vue&type=template&id=128aa67b&scoped=true& */ "./resources/js/pages/auth/Registration2.vue?vue&type=template&id=128aa67b&scoped=true&");
/* harmony import */ var _Registration2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registration2.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Registration2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Registration2_vue_vue_type_style_index_0_id_128aa67b_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss& */ "./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss&");
/* harmony import */ var _Registration2_vue_vue_type_style_index_1_id_128aa67b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true& */ "./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Registration2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registration2_vue_vue_type_template_id_128aa67b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Registration2_vue_vue_type_template_id_128aa67b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "128aa67b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Registration2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Registration2.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/auth/Registration2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_0_id_128aa67b_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=0&id=128aa67b&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_0_id_128aa67b_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_0_id_128aa67b_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_0_id_128aa67b_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_0_id_128aa67b_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_1_id_128aa67b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=style&index=1&id=128aa67b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_1_id_128aa67b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_1_id_128aa67b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_1_id_128aa67b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_style_index_1_id_128aa67b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/auth/Registration2.vue?vue&type=template&id=128aa67b&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/auth/Registration2.vue?vue&type=template&id=128aa67b&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_template_id_128aa67b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Registration2.vue?vue&type=template&id=128aa67b&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Registration2.vue?vue&type=template&id=128aa67b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_template_id_128aa67b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Registration2_vue_vue_type_template_id_128aa67b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);