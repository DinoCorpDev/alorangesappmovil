(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/InvoicesDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/CustomInput.vue */ "./resources/js/components/global/CustomInput.vue");
/* harmony import */ var _components_global_Order_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global/Order.vue */ "./resources/js/components/global/Order.vue");
/* harmony import */ var _components_global_ProductCart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/ProductCart.vue */ "./resources/js/components/global/ProductCart.vue");
/* harmony import */ var _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/global/SelectCustom.vue */ "./resources/js/components/global/SelectCustom.vue");
/* harmony import */ var _components_global_TypePayment_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/global/TypePayment.vue */ "./resources/js/components/global/TypePayment.vue");






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomInput: _components_global_CustomInput_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductCart: _components_global_ProductCart_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectCustom: _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Order: _components_global_Order_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TypePayment: _components_global_TypePayment_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      langSelectItems: ["COLOMBIA", "DEUTSCHLAND", "ENGLAND"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("v-container", [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("order", {
    staticStyle: {
      "background-color": "#f5f5f5"
    },
    attrs: {
      order: "ID1222",
      day: "07",
      month: "Julio",
      year: "2020",
      colorStatus: "red",
      descriptionStatus: "Por aprobar pedido",
      icon1: "la-download",
      icon2: "la-eye",
      icon3: "la-print"
    }
  })], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "mb-3"
  }), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v("Facturar a")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("select-custom", {
    attrs: {
      dark: "",
      label: "Usuario Principal",
      items: _vm.langSelectItems
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Correo electronico")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("user@gmail.com")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Tipo de Persona")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Natural")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Nombre")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Alejando Ramirez")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-3"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Documento")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("C.C. 1010101011")])]), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-3",
    attrs: {
      text: "Editar"
    }
  }), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Añadir"
    }
  })], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "details",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v("Dirección de envio")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("select-custom", {
    attrs: {
      dark: "",
      label: "Usuario Principal",
      items: _vm.langSelectItems
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Nombre de Dirección")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Casa 1")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Dirección")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Avenida siempre viva 123")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v(" Descripción de Dirección ")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Casa de tejado con color café y patio verde")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Codigo Postal")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("110611")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Cundinamarca")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Municipio")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Bogota d.c")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Barrio")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v(" -- ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("\n                                        Nombre de quien lo va a recibir\n                                    ")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Alejandro Ramirez")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Telefono / Movil")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("+57 300 544 3300")])]), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-3",
    attrs: {
      text: "Editar"
    }
  }), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Añadir"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v("Dirección de servicio")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("label", {
    staticClass: "label"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "body-1 black--text text"
  }, [_vm._v("\n                                Usar la misma Dirección de envió para que Idovela preste los servicio de\n                                instalación, mantenimiento y más.\n                            ")]), _vm._v(" "), _c("span", {
    staticClass: "checkmark"
  })]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("custom-button", {
    attrs: {
      block: "",
      text: "Añadir Dirección"
    }
  })], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v("Dirección de facturacion")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("label", {
    staticClass: "label"
  }, [_c("input", {
    attrs: {
      type: "checkbox"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "body-1 black--text text"
  }, [_vm._v("\n                                Usar la misma Dirección de envió para que Idovela entreguela factura física.\n                            ")]), _vm._v(" "), _c("span", {
    staticClass: "checkmark"
  })]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("custom-button", {
    attrs: {
      block: "",
      text: "Añadir Dirección"
    }
  })], 1)])], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "details2",
    attrs: {
      cols: "12",
      md: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v("Dirección de envio")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("select-custom", {
    attrs: {
      dark: "",
      label: "Usuario Principal",
      items: _vm.langSelectItems
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Nombre de Dirección")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Casa 1")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Dirección")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Avenida siempre viva 123")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v(" Descripción de Dirección ")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Casa de tejado con color café y patio verde")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Codigo Postal")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("110611")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Departamento")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Cundinamarca")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Municipio")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Bogota d.c")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Barrio")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v(" -- ")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v(" Nombre de quien lo va a recibir ")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("Alejandro Ramirez")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between mb-2"
  }, [_c("span", {
    staticClass: "subtitle1 text-uppercase bold"
  }, [_vm._v("Telefono / Movil")]), _vm._v(" "), _c("span", {
    staticClass: "body1"
  }, [_vm._v("+57 300 544 3300")])]), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-3",
    attrs: {
      text: "Editar"
    }
  }), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Añadir"
    }
  })], 1)])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "my-5"
  }, [_c("h6", [_vm._v("Lista de Pedido")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("product-cart", {
    attrs: {
      price: "000.000.000 COP",
      quantity: "3",
      icon1: "/public/assets/img/icons/back.svg",
      icon3: "/public/assets/img/icons/marker.svg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("product-cart", {
    attrs: {
      price: "000.000.000 COP",
      quantity: "3",
      icon1: "/public/assets/img/icons/back.svg",
      icon3: "/public/assets/img/icons/marker.svg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("product-cart", {
    attrs: {
      price: "000.000.000 COP",
      quantity: "3",
      icon1: "/public/assets/img/icons/back.svg",
      icon3: "/public/assets/img/icons/marker.svg"
    }
  })], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "div-total"
  }, [_c("div", [_c("p", {
    staticClass: "subtitle-2 text-uppercase font-weight-bold"
  }, [_vm._v("Sub-total")]), _vm._v(" "), _c("p", {
    staticClass: "body-2"
  }, [_vm._v("000.000.000 COP")])]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "subtitle-2 text-uppercase font-weight-bold"
  }, [_vm._v("Iva")]), _vm._v(" "), _c("p", {
    staticClass: "body-2"
  }, [_vm._v("000.000.000 COP")])]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "subtitle-2 text-uppercase font-weight-bold"
  }, [_vm._v("Flete")]), _vm._v(" "), _c("p", {
    staticClass: "body-2"
  }, [_vm._v("000.000.000 COP")])]), _vm._v(" "), _c("div", [_c("p", {
    staticClass: "subtitle-1 text-uppercase font-weight-bold"
  }, [_vm._v("Total")]), _vm._v(" "), _c("p", {
    staticClass: "body-1"
  }, [_vm._v("000.000.000 COP")])])]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  })], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v("Seguimiento de envió")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("v-timeline", {
    attrs: {
      dense: ""
    }
  }, [_c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v(" En verificación ")])]), _vm._v(" "), _c("v-col", [_c("span", {
    staticClass: "body2 font-weight-bold"
  }, [_vm._v("jueves 07, abril")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v("Facturación")])]), _vm._v(" "), _c("v-col", [_c("span", {
    staticClass: "body2 font-weight-bold"
  }, [_vm._v("sabado 09, abril")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v("Alistamiento")])]), _vm._v(" "), _c("v-col", [_c("span", {
    staticClass: "body2 font-weight-bold"
  }, [_vm._v("lunes 05, julio")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v("\n                                    Recogido por transportadora\n                                ")])]), _vm._v(" "), _c("v-col", [_c("span", {
    staticClass: "body2 font-weight-bold"
  }, [_vm._v("miércoles 07, julio")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v(" Entregado a cliente ")])]), _vm._v(" "), _c("v-col", [_c("span", {
    staticClass: "body2 font-weight-bold"
  }, [_vm._v("viernes 09, julio")])])], 1)], 1)], 1), _vm._v(" "), _c("a", {
    staticClass: "black--text text-decoration-underline font-weight-bold",
    attrs: {
      href: "#"
    }
  }, [_vm._v("\n                    Conocer la logistica de envió\n                ")])], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      sm: "6"
    }
  }, [_c("div", {
    staticClass: "form"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v("Seguimiento de servicio")]), _vm._v(" "), _c("v-divider", {
    staticClass: "my-3"
  }), _vm._v(" "), _c("v-timeline", {
    attrs: {
      dense: ""
    }
  }, [_c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v("Comprado")])]), _vm._v(" "), _c("v-col", [_c("span", {
    staticClass: "body2 font-weight-bold"
  }, [_vm._v("jueves 07, abril")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v("Agendamiento")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v(" En preparación ")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v("\n                                    Verificación de adecuación\n                                ")])])], 1)], 1), _vm._v(" "), _c("v-timeline-item", {
    attrs: {
      color: "black",
      small: "",
      "fill-dot": ""
    }
  }, [_c("v-row", [_c("v-col", [_c("span", {
    staticClass: "body2 text-uppercase font-weight-bold"
  }, [_vm._v(" Instalación concluida ")])])], 1)], 1)], 1), _vm._v(" "), _c("a", {
    staticClass: "black--text text-decoration-underline font-weight-bold",
    attrs: {
      href: "#"
    }
  }, [_vm._v("\n                    Conocer la logistica de envió\n                ")])], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-cd80c9fe] .v-stepper__header {\n  box-shadow: none;\n}\n[data-v-cd80c9fe] .v-stepper__content {\n  padding: 24px 0px;\n}\n[data-v-cd80c9fe] .v-stepper__step--editable {\n  background-color: #dfdfdf;\n  height: 50%;\n  box-shadow: none;\n  border-radius: 10px;\n}\n[data-v-cd80c9fe] .v-stepper__step .v-stepper__label {\n  color: #000000 !important;\n}\n[data-v-cd80c9fe] .v-stepper__step .v-stepper__label:hover {\n  color: #ffffff !important;\n}\n[data-v-cd80c9fe] .theme--light.v-stepper .v-stepper__step--editable:hover {\n  background-color: #000000;\n}\n[data-v-cd80c9fe] .v-timeline {\n  padding-top: 0px;\n  left: 0px;\n}\n[data-v-cd80c9fe] .v-timeline::before {\n  background-color: #000000;\n}\n[data-v-cd80c9fe] .v-application--is-ltr,[data-v-cd80c9fe] .v-timeline--dense:not(.v-timeline--reverse)::before {\n  left: 11px;\n}\n[data-v-cd80c9fe] .v-timeline-item__divider {\n  display: flex;\n  justify-content: flex-start;\n}\n.container[data-v-cd80c9fe] {\n  background-color: #ffffff;\n}\n.form[data-v-cd80c9fe] {\n  border: 1px solid #e4e4e4;\n  border-radius: 10px;\n  padding: 10px;\n}\n.label[data-v-cd80c9fe] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n.label input[data-v-cd80c9fe] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.checkmark[data-v-cd80c9fe] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: #eee;\n}\n.label:hover input ~ .checkmark[data-v-cd80c9fe] {\n  background-color: #f5f5f5;\n}\n.label input:checked ~ .checkmark[data-v-cd80c9fe] {\n  background-color: #000000;\n  border-radius: 5px;\n}\n.checkmark[data-v-cd80c9fe]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.label input:checked ~ .checkmark[data-v-cd80c9fe]:after {\n  display: block;\n}\n.label .checkmark[data-v-cd80c9fe]:after {\n  left: 9px;\n  top: 5px;\n  width: 7px;\n  height: 12px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n.div-total[data-v-cd80c9fe] {\n  display: flex;\n  flex-direction: column;\n}\n.div-total div[data-v-cd80c9fe] {\n  display: flex;\n  justify-content: flex-end;\n}\n.div-total p[data-v-cd80c9fe] {\n  padding-left: 5px;\n}\n.div-alert[data-v-cd80c9fe] {\n  background-color: #dfdfdf;\n  border-radius: 10px;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.details[data-v-cd80c9fe] {\n  display: none;\n}\n.details2[data-v-cd80c9fe] {\n  display: flex;\n}\n.information[data-v-cd80c9fe] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n@media (max-width: 600px) {\n.div-alert[data-v-cd80c9fe] {\n    display: flex;\n    flex-wrap: wrap;\n}\n}\n@media (max-width: 1020px) {\n.details[data-v-cd80c9fe] {\n    display: flex;\n    flex-wrap: wrap;\n}\n.details2[data-v-cd80c9fe] {\n    display: none;\n}\n}\n.success[data-v-cd80c9fe] {\n  background-color: #06c167;\n  color: #ffffff;\n  border-radius: 50%;\n  padding: 5px 5px 0px 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true&");

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

/***/ "./resources/js/pages/user/InvoicesDetails.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/user/InvoicesDetails.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoicesDetails_vue_vue_type_template_id_cd80c9fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true& */ "./resources/js/pages/user/InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true&");
/* harmony import */ var _InvoicesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoicesDetails.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/InvoicesDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvoicesDetails_vue_vue_type_style_index_0_id_cd80c9fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true& */ "./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InvoicesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoicesDetails_vue_vue_type_template_id_cd80c9fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoicesDetails_vue_vue_type_template_id_cd80c9fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cd80c9fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/InvoicesDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/InvoicesDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/user/InvoicesDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_style_index_0_id_cd80c9fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=style&index=0&id=cd80c9fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_style_index_0_id_cd80c9fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_style_index_0_id_cd80c9fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_style_index_0_id_cd80c9fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_style_index_0_id_cd80c9fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/user/InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/user/InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_template_id_cd80c9fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/InvoicesDetails.vue?vue&type=template&id=cd80c9fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_template_id_cd80c9fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicesDetails_vue_vue_type_template_id_cd80c9fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);