(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/ProductItem3.vue */ "./resources/js/components/global/ProductItem3.vue");
/* harmony import */ var _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/ProductItem2.vue */ "./resources/js/components/global/ProductItem2.vue");
/* harmony import */ var _components_global_ProductItem6_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/ProductItem6.vue */ "./resources/js/components/global/ProductItem6.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/LayoutNavbarSpaces.vue */ "./resources/js/components/global/LayoutNavbarSpaces.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");
/* harmony import */ var _seeders_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../seeders/products */ "./resources/js/seeders/products.js");







// import ChartView from "../components/global/ChartView.vue";


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      showp: true,
      showp1: false,
      showp2: false,
      showd: true,
      showd1: false,
      showd2: false,
      sliderSeeder: _seeders_products__WEBPACK_IMPORTED_MODULE_7__["sliderSeeder"],
      id: "0",
      name: "Colección",
      ref: "REFERENCIA",
      brand: "Marcas",
      val: "000.000.000 COP",
      img: "/public/assets/img/item-placeholder.png",
      iva: "* Iva Incluido",
      varia: "Variación",
      model: 0,
      tags: ["1", "2", "3"],
      ratings: {
        rating5: 67,
        rating4: 22,
        rating3: 11,
        rating2: 0,
        rating1: 0
      },
      desserts: [{
        color: "background-color:#114B99",
        name: "Plástico",
        percent: "5%",
        kg: "1Kg"
      }, {
        color: "background-color:#FEA60F",
        name: "Cartón",
        percent: "0%",
        kg: "0Kg"
      }, {
        color: "background-color:#FFFFFF",
        name: "Papel",
        percent: "3%",
        kg: "0.2Kg"
      }, {
        color: "background-color:#445056",
        name: "Metal",
        percent: "0%",
        kg: "0Kg"
      }, {
        color: "background-color:#61A959",
        name: "Vidrio",
        percent: "0%",
        kg: "0Kg"
      }, {
        color: "background-color:#B1771D",
        name: "Madera",
        percent: "91%",
        kg: "5Kg"
      }, {
        color: "background-color:#ED847B",
        name: "Textil",
        percent: "0%",
        kg: "0Kg"
      }, {
        color: "background-color:#ED847B",
        name: "Baterías / Eléctrico",
        percent: "0%",
        kg: "0Kg"
      }]
    };
  },
  components: {
    ProductItem3: _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProductItem2: _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ProductItem6: _components_global_ProductItem6_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    LayoutNavbarSpaces: _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
    // ChartView
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true& ***!
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
  return _c("div", [_c("layout-navbar-auth"), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12",
      md: "4",
      "order-md": "1",
      sm: "12",
      "order-sm": "3",
      xs: "12",
      "order-xs": "3"
    }
  }, [_c("v-row", {
    staticClass: "mt-2 ml-3",
    attrs: {
      dense: ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      width: "150px"
    },
    on: {
      click: function click($event) {
        _vm.showd = true;
        _vm.showd1 = false;
        _vm.showd2 = false;
      }
    }
  }, [_vm._v("\n                            Especificación\n                        ")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    attrs: {
      width: "150px",
      light: ""
    },
    on: {
      click: function click($event) {
        _vm.showd = false;
        _vm.showd1 = true;
        _vm.showd2 = false;
      }
    }
  }, [_vm._v("\n                            Reseña\n                        ")])], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      width: "150px"
    },
    on: {
      click: function click($event) {
        _vm.showd = false;
        _vm.showd1 = false;
        _vm.showd2 = true;
      }
    }
  }, [_vm._v("\n                            Sostenibilidad\n                        ")])], 1)], 1)], 1), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-8 ml-3"
  }), _vm._v(" "), _c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showd,
      expression: "showd"
    }],
    staticClass: "overflow-y-auto mt-3",
    attrs: {
      "max-height": "628"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border ml-3"
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
  }, [_vm._v("Consumo")])])], 1), _vm._v(" "), _c("v-divider", {
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
  }, [_vm._v("Cuerpo")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border ml-3 mt-4"
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
  }, [_vm._v("Medida de Producto")])]), _vm._v(" "), _c("v-row", {
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
  }, [_vm._v("000 x 000 x 000")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("000 x 000 x 000")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("000 x 000 x 000")])])], 1), _vm._v(" "), _c("v-col", {
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
  }, [_vm._v("cm")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_vm._v("cm")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_vm._v("cm")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border ml-3 mt-4"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v("00.0")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Peso de Producto")])])], 1), _vm._v(" "), _c("v-divider", {
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
  }, [_c("span", [_vm._v("00.0")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Peso de Envío")])])], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border ml-3 mt-4"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("span", [_vm._v("0.0 V / 0.0 Hz / 0.0 A")])]), _vm._v(" "), _c("v-row", {
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
  }, [_c("span", [_vm._v("0.0 %")])]), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center",
      dense: ""
    }
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-1"
  }, [_vm._v("Eficiencia")])])], 1)], 1)], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5 ml-3"
  }, [_vm._v("Características")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2 ml-3"
  }), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v("\n                        Característica 1 incluye Lorem Ipsum is simply dummy text of printing\n                    ")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 2 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 3 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 4 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 5 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 6 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 7 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 8 incluye Lorem Ipsum is simply dummy text of printing")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5 ml-3"
  }, [_vm._v("Manuales y Guías")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitles-gray mt-5"
  }, [_vm._v("(Para descargar)")])]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2 ml-3"
  }), _vm._v(" "), _c("v-row", {
    staticClass: "mt-1 ml-3"
  }, [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("v-row", {
    attrs: {
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_c("u", [_vm._v("Manual de producto")])])]), _vm._v(" "), _c("v-row", {
    staticClass: "mt-1",
    attrs: {
      dense: ""
    }
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_c("u", [_vm._v("Ficha técnica del producto")])])])], 1), _vm._v(" "), _c("v-col", {
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
  }, [_c("span", {
    staticClass: "subtitle2"
  }, [_c("u", [_vm._v("Guía de instalación")])])])], 1)], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5 ml-3"
  }, [_vm._v("Beneficios")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2 ml-3"
  }), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v("\n                        Característica 1 incluye Lorem Ipsum is simply dummy text of printing\n                    ")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 2 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 3 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 4 incluye Lorem Ipsum is simply dummy text of printing")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2"
  }, [_vm._v("Característica 5 incluye Lorem Ipsum is simply dummy text of printing")])]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-5 ml-3"
  }, [_vm._v("Servicio Postventa")]), _vm._v(" "), _c("v-divider", {
    staticClass: "mt-2 ml-3"
  }), _vm._v(" "), _c("p", {
    staticClass: "subtitle2 ml-3"
  }, [_vm._v("\n                    Característica 1 incluye Lorem Ipsum is simply dummy text of printing Característica 1 incluye\n                    Lorem Ipsum is simply dummy text of printing Característica 1 incluye Lorem Ipsum is simply\n                    dummy text of printing Característica 1 incluye Lorem Ipsum is simply dummy text of printing\n                    Característica 1 incluye Lorem Ipsum is simply dummy text of printing\n                ")])], 1), _vm._v(" "), _c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showd1,
      expression: "showd1"
    }],
    staticClass: "overflow-y-auto mt-3",
    attrs: {
      "max-height": "628"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border ml-3 mt-4"
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
    staticClass: "d-flex pa-4 ml-3"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mt-4"
  }, [_vm._v("¿Deseas calificar este producto?")]), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-4 mt-2",
    attrs: {
      text: "Calificar",
      light: ""
    }
  })], 1)]), _vm._v(" "), _c("v-card", {
    directives: [{
      name: "scroll",
      rawName: "v-scroll.self",
      value: _vm.onScroll,
      expression: "onScroll",
      modifiers: {
        self: true
      }
    }, {
      name: "show",
      rawName: "v-show",
      value: _vm.showd2,
      expression: "showd2"
    }],
    staticClass: "overflow-y-auto mt-3",
    attrs: {
      "max-height": "628"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border ml-3 mt-4"
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
      value: _vm.ratings.rating5,
      callback: function callback($$v) {
        _vm.$set(_vm.ratings, "rating5", $$v);
      },
      expression: "ratings.rating5"
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
    staticClass: "product-item-body pa-4 la-border ml-3 mt-4"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Composición de producto")]), _vm._v(" "), _c("v-row", {
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
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c("td", {
      staticClass: "text-size-comp ml-2",
      staticStyle: {
        width: "50px"
      }
    }, [_vm._v(_vm._s(item.percent))]), _vm._v(" "), _c("td", {
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
      width: "78%"
    }
  }, [_c("v-icon", {
    staticClass: "markerLoc",
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
    staticClass: "product-item-body pa-4 la-border ml-3 mt-4"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Consejos Ecológicos")]), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "subtitle2 mt-1"
  }, [_vm._v("\n                            Una vez el producto cumpla su vida útil debes ser riguroso en reciclar sus materiales de\n                            forma correcta.\n                        ")]), _vm._v(" "), _c("li", {
    staticClass: "subtitle2 mt-2"
  }, [_vm._v("\n                            Realizar el mantenimiento pertinente en las fechas adecuadas para extender la vida útil\n                            del producto.\n                        ")])])]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-1 la-border ml-3 mt-4"
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
  }, [_vm._v("\n                                    Deseo reciclar un viejo producto y recibir un bono adicional de descuento a\n                                    cambio.\n                                ")])]), _vm._v(" "), _c("v-row", {
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
    attrs: {
      light: "",
      text: "RENOVACIÓN UPGRADE",
      width: 190
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-1 la-border mt-4"
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
  }, [_vm._v("\n                                    Deseo programar un mantenimiento preventivo para mi producto/s.\n                                ")])]), _vm._v(" "), _c("v-row", {
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
    attrs: {
      light: "",
      text: "SOPORTE TÉCNICO",
      width: 190
    }
  })], 1)], 1)])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "positionColbuttons",
    attrs: {
      cols: "12",
      md: "4",
      "order-md": "2",
      sm: "12",
      "order-sm": "1",
      xs: "12",
      "order-xs": "1"
    }
  }, [_c("v-row", {
    attrs: {
      dense: "",
      justify: ""
    }
  }, [_c("v-col", [_c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showp,
      expression: "showp"
    }],
    staticStyle: {
      height: "700px"
    }
  }), _vm._v(" "), _c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showp1,
      expression: "showp1"
    }],
    staticStyle: {
      height: "700px"
    },
    attrs: {
      slides: _vm.sliderSeeder
    }
  }), _vm._v(" "), _c("v-img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showp2,
      expression: "showp2"
    }],
    attrs: {
      src: "https://picsum.photos/1920/1080?random=1",
      height: "700px",
      width: "100%"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "buttonsAct px-4"
  }, [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.showp = true;
        _vm.showp1 = false;
        _vm.showp2 = false;
      }
    }
  }, [_vm._v("\n                        Imágenes\n                    ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.showp = false;
        _vm.showp1 = true;
        _vm.showp2 = false;
      }
    }
  }, [_vm._v("\n                        Videos\n                    ")])], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("v-btn", {
    attrs: {
      light: "",
      block: ""
    },
    on: {
      click: function click($event) {
        _vm.showp = false;
        _vm.showp1 = false;
        _vm.showp2 = true;
      }
    }
  }, [_vm._v("\n                        Ficha Técnica\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4",
      "order-md": "3",
      sm: "12",
      "order-sm": "2",
      xs: "12",
      "order-xs": "2"
    }
  }, [_c("div", {
    staticClass: "product-item-body pa-4 la-border mr-5"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-2"
  }, [_vm._v(_vm._s(_vm.ref))]), _vm._v(" "), _c("v-icon", {
    attrs: {
      right: ""
    }
  }, [_vm._v(" la-bookmark ")])], 1), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 text-uppercase font-weight-bold mb-2"
  }, [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v(_vm._s(_vm.brand))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("h5", {
    staticClass: "subtitle1 mb-2 mr-2"
  }, [_vm._v(_vm._s(_vm.val))]), _vm._v(" "), _c("h5", {
    staticClass: "caption mb-2"
  }, [_c("del", [_vm._v(_vm._s(_vm.val))])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "caption mb-3"
  }, [_vm._v(_vm._s(_vm.iva))]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-around align-center"
  }, [_c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        _vm.model = Math.max(_vm.model - 1, 0);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      small: ""
    }
  }, [_vm._v(" la-minus ")])], 1), _vm._v("\n                        " + _vm._s(_vm.model) + "\n                        "), _c("v-btn", {
    attrs: {
      icon: ""
    },
    on: {
      click: function click($event) {
        _vm.model = Math.min(_vm.model + 1, 8);
      }
    }
  }, [_c("v-icon", {
    attrs: {
      small: ""
    }
  }, [_vm._v(" la-plus ")])], 1)], 1)]), _vm._v(" "), _c("custom-button", {
    attrs: {
      text: "Agregar a Compras",
      block: ""
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mt-3",
    attrs: {
      light: "",
      text: "Consultar a un Asesor",
      block: ""
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mr-5 mt-3"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v(_vm._s(_vm.varia))]), _vm._v(" "), _c("v-btn-toggle", [_c("v-btn", {
    staticClass: "blue toggle-btn"
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-2 white toggle-btn"
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-2 black toggle-btn"
  }), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-2 red toggle-btn"
  })], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "product-item-body pa-4 la-border mr-5 mt-3"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Disponibilidad")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v("Stock")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Garantía")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v("12 Meses")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase mb-1"
  }, [_vm._v("Pago")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1 mb-2"
  }, [_vm._v("Payu Visa PSE MC")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-space-between"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase"
  }, [_vm._v("Envío")]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle1"
  }, [_vm._v("A domicilio")])])]), _vm._v(" "), _c("h5", {
    staticClass: "subtitle2 text-uppercase mt-3 mb-2"
  }, [_vm._v("Se incluye con la compra")]), _vm._v(" "), _c("div", {
    staticClass: "product-item-body mr-5 mt-3"
  }, [_c("v-divider"), _vm._v(" "), _c("product-item-6")], 1)])], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("div", {
    staticClass: "d-flex justify-space-between mb-8"
  }, [_c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("H5")]), _vm._v(" "), _c("div", {
    staticStyle: {
      width: "38%"
    }
  }, [_c("custom-button", {
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1)]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      headerPr: "true"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      headerPr: "true"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      headerPr: "true",
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      headerPr: "true",
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      headerPr: "true"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      headerPr: "true",
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("custom-button", {
    staticClass: "mt-6 mb-6",
    staticStyle: {
      width: "40%"
    },
    attrs: {
      light: "",
      text: "Ver más"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-space-between mb-8"
  }, [_c("h5", {
    staticClass: "mt-1"
  }, [_vm._v("H5")]), _vm._v(" "), _c("div", {
    staticStyle: {
      width: "38%"
    }
  }, [_c("custom-button", {
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "ml-2",
    staticStyle: {
      width: "23%"
    },
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1)]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("product-item-3")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("product-item-3", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("product-item-3", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1",
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "3"
    }
  }, [_c("product-item-3", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1",
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("custom-button", {
    staticClass: "mt-6",
    staticStyle: {
      width: "40%"
    },
    attrs: {
      light: "",
      text: "Ver más"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-card", [_c("v-footer", {
    staticClass: "px-5 py-5",
    attrs: {
      color: "#18191A"
    }
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-between flex-wrap"
  }, [_c("v-col", {
    attrs: {
      cols: "2",
      sm: "3"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("© Idovela 2022")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4",
      sm: "3"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_c("i", {
    staticClass: "las la-globe"
  }), _vm._v(" Bogota, Colombia")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      sm: "6"
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("Información")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("Solicitudes")])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("span", {
    staticClass: "subtitle1 bold text-uppercase"
  }, [_vm._v("Contacto")])])], 1)], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-btn[data-v-b8645414] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.25px;\n  border-radius: 5px;\n}\n@media (min-width: 960px) {\n.v-btn[data-v-b8645414] {\n    font-size: 14px;\n}\n}\n.v-btn i[data-v-b8645414] {\n  font-size: 20px;\n}\n.v-btn[data-v-b8645414]:hover:before, .v-btn[data-v-b8645414]:focus:before {\n  opacity: 1;\n}\n.v-btn.v-size--default[data-v-b8645414] {\n  height: 38px;\n}\n.theme--light.v-btn[data-v-b8645414] {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-b8645414] {\n  background-color: #dfdfdf;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-b8645414]:before {\n  background-color: #ffffff;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled[data-v-b8645414] {\n  color: #000000 !important;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled.v-btn--has-bg[data-v-b8645414] {\n  background-color: #fafcfc !important;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414] {\n  color: #ffffff;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414]:hover, .theme--light.v-btn.v-btn--outlined[data-v-b8645414]:focus {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414]:before {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.theme--light.v-btn.v-btn--outlined[data-v-b8645414]:focus:before {\n  background-color: #ffffff;\n}\n.buttonsAct[data-v-b8645414] {\n  top: 20px;\n  position: absolute;\n  width: 96%;\n}\n.markerLoc[data-v-b8645414] {\n  top: 73%;\n  position: absolute;\n  left: 29%;\n}\n.positionColbuttons[data-v-b8645414] {\n  position: relative;\n}\n.la-border[data-v-b8645414] {\n  border-radius: 0.5em;\n}\n.v-btn-toggle[data-v-b8645414] {\n  border-radius: 0px;\n  height: 20px !important;\n}\n.toggle-btn[data-v-b8645414] {\n  height: 20px !important;\n  min-width: 20px !important;\n}\n.v-divider[data-v-b8645414] {\n  border-width: thin 0 0;\n}\n.v-divider--vertical[data-v-b8645414] {\n  border-width: 0 thin 0 0;\n}\n.subtitles-gray[data-v-b8645414] {\n  font-size: 12px;\n  color: gray;\n}\n.justify-end[data-v-b8645414] {\n  text-align: end;\n}\n.piechart[data-v-b8645414] {\n  width: 170px;\n  height: 170px;\n  border-radius: 50%;\n  background-image: conic-gradient(from 180deg, #b1771d 0 320deg, #445056 0 336deg, #114b99 0);\n}\n.text-size-comp[data-v-b8645414] {\n  font-size: 0.6rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&");

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

/***/ "./resources/js/pages/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/Product.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=b8645414&scoped=true& */ "./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/pages/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& */ "./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b8645414",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=style&index=0&id=b8645414&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_style_index_0_id_b8645414_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=b8645414&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Product.vue?vue&type=template&id=b8645414&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_b8645414_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);