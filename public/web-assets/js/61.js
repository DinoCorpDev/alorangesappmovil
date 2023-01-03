(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Products",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    reference: {
      type: String,
      "default": "Sin Asignar"
    },
    name: {
      type: String,
      "default": "Sin Asignar"
    },
    brand: {
      type: String,
      "default": "Sin Asignar"
    },
    price: {
      type: String,
      "default": "Sin Asignar"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home4.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/Bar.vue */ "./resources/js/components/global/Bar.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_Products_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/Products.vue */ "./resources/js/components/global/Products.vue");
/* harmony import */ var _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/LayoutNavbarAuth.vue */ "./resources/js/components/global/LayoutNavbarAuth.vue");
/* harmony import */ var _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/PresentationBanner.vue */ "./resources/js/components/global/PresentationBanner.vue");
/* harmony import */ var _components_global_ProductItem_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global/ProductItem.vue */ "./resources/js/components/global/ProductItem.vue");






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Bar: _components_global_Bar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Products: _components_global_Products_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LayoutNavbarAuth: _components_global_LayoutNavbarAuth_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    PresentationBanner: _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ProductItem: _components_global_ProductItem_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=template&id=672cf216&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Products.vue?vue&type=template&id=672cf216&scoped=true& ***!
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
  return _c("div", {
    staticClass: "div-card",
    style: _vm.style
  }, [_c("v-col", {
    staticClass: "col"
  }, [_c("div", {
    staticClass: "header"
  }, [_c("div", {
    staticClass: "figure"
  })]), _vm._v(" "), _c("div", {
    staticClass: "body"
  }, [_c("div", [_c("v-img", {
    attrs: {
      src: "/public/assets/img/carousel-item-placeholder.png",
      width: "200px"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "div-body2"
  }, [_c("div", {
    staticClass: "space"
  }, [_c("span", {
    staticClass: "black--text body3 text-uppercase"
  }, [_vm._v(_vm._s(_vm.reference))])]), _vm._v(" "), _c("div", {
    staticClass: "space"
  }, [_c("h6", {
    staticClass: "black--text"
  }, [_vm._v(_vm._s(_vm.name))])]), _vm._v(" "), _c("div", {
    staticClass: "space"
  }, [_c("span", {
    staticClass: "black--text body1"
  }, [_vm._v(_vm._s(_vm.brand))])]), _vm._v(" "), _c("div", {
    staticClass: "space"
  }, [_c("span", {
    staticClass: "black--text subtitle1"
  }, [_vm._v(_vm._s(_vm.price) + " COP")])]), _vm._v(" "), _c("custom-button", {
    attrs: {
      block: "",
      light: "",
      text: "Agregar a compras"
    }
  })], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=template&id=1db9ccfc&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home4.vue?vue&type=template&id=1db9ccfc&scoped=true& ***!
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
  }), _vm._v(" "), _c("v-row", {
    staticClass: "mr-6 ms-6 mb-5"
  }, [_c("v-col", {
    staticClass: "brand",
    attrs: {
      cols: "12",
      md: "5"
    }
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
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col2"
  }, [_c("h5", {
    staticClass: "black--text bold"
  }, [_vm._v("Marcas")]), _vm._v(" "), _c("span", {
    staticClass: "black--text body-2 text-uppercase"
  }, [_vm._v("# Marcas")])]), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "col3"
  }, [_c("p", {
    staticClass: "black--text"
  }, [_vm._v("Incluye Lorem Ipsum is simply dummy text of the printing • Lorem\n                        Ipsum has\n                        been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem\n                        Ipsum has\n                        been the industry's • Incluye Lorem Ipsum is simply dummy text.")])])]), _vm._v(" "), _c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("custom-button", {
    attrs: {
      block: "",
      light: "",
      text: "Ir a colección"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("custom-button", {
    attrs: {
      block: "",
      light: "",
      text: "Descargar catalogo"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      lg: "6"
    }
  }, [_c("custom-button", {
    attrs: {
      block: "",
      light: "",
      text: "Conocer historia de marca"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    staticClass: "banner",
    attrs: {
      cols: "10",
      md: "7",
      height: "100%"
    }
  }, [_c("v-img", {
    staticClass: "img-banner",
    attrs: {
      src: "../../public/assets/img/carousel-item-placeholder.png"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bar"
  }, [_c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("div", {
    staticClass: "cards"
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-around flex-wrap"
  }, [_c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products")], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("v-col", {
    attrs: {
      cols: "10",
      md: "6",
      lg: "5"
    }
  }, [_c("custom-button", {
    staticClass: "mb-5",
    attrs: {
      block: "",
      light: "",
      text: "Ver más"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bar2"
  }, [_c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "cards"
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-around flex-wrap"
  }, [_c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products")], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("v-col", {
    attrs: {
      cols: "10",
      md: "6",
      lg: "5"
    }
  }, [_c("custom-button", {
    staticClass: "mb-5",
    attrs: {
      block: "",
      light: "",
      text: "Ver más"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bar2"
  }, [_c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "cards"
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-around flex-wrap"
  }, [_c("v-col", [_c("product-item")], 1), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products")], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("v-col", {
    attrs: {
      cols: "10",
      md: "6",
      lg: "5"
    }
  }, [_c("custom-button", {
    staticClass: "mb-5",
    attrs: {
      block: "",
      light: "",
      text: "Ver más"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bar2"
  }, [_c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "cards"
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-around flex-wrap"
  }, [_c("v-col", [_c("product-item")], 1), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products")], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("v-col", {
    attrs: {
      cols: "10",
      md: "6",
      lg: "5"
    }
  }, [_c("custom-button", {
    staticClass: "mb-5",
    attrs: {
      block: "",
      light: "",
      text: "Ver más"
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "bar2"
  }, [_c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "mr-2 ms-2",
    attrs: {
      light: "",
      text: "Nuevo"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "cards"
  }, [_c("v-row", {
    staticClass: "d-flex justify-space-around flex-wrap"
  }, [_c("products", {
    staticStyle: {
      width: "298px"
    },
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    staticStyle: {
      width: "298px"
    },
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    staticStyle: {
      width: "298px"
    },
    attrs: {
      reference: "QWEEQE",
      name: "Lorem",
      brand: "BMW",
      price: "123.123123.12"
    }
  }), _vm._v(" "), _c("products", {
    staticStyle: {
      width: "298px"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "d-flex justify-center"
  }, [_c("v-col", {
    attrs: {
      cols: "10",
      md: "6",
      lg: "5"
    }
  }, [_c("custom-button", {
    staticClass: "mb-5",
    attrs: {
      block: "",
      light: "",
      text: "Ver más"
    }
  })], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-card[data-v-672cf216] {\n  margin: 20px;\n}\n.col[data-v-672cf216] {\n  background-color: #F5F5F5;\n  border-radius: 10px;\n  padding: 0;\n}\n.header[data-v-672cf216] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 10px 15px;\n}\n.figure[data-v-672cf216] {\n  -webkit-clip-path: polygon(100% 0, 100% 100%, 48% 55%, 0 100%, 0 49%, 0% 0%);\n          clip-path: polygon(100% 0, 100% 100%, 48% 55%, 0 100%, 0 49%, 0% 0%);\n  background-color: #7c7c7d;\n  width: 20px;\n  height: 20px;\n}\n.body[data-v-672cf216] {\n  height: 200px;\n  background-color: #dfdfdf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.div-body2[data-v-672cf216] {\n  padding: 15px;\n}\n.body3[data-v-672cf216] {\n  font-size: 10px;\n}\n.space[data-v-672cf216] {\n  margin-bottom: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img[data-v-1db9ccfc] {\n  background-color: #dfdfdf;\n  border-radius: 50%;\n  padding: 10px 0;\n}\n.img-banner[data-v-1db9ccfc] {\n  height: 100%;\n}\n.cards[data-v-1db9ccfc] {\n  margin: 10px;\n  padding: 10px 0;\n}\n.bar[data-v-1db9ccfc] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-start;\n  overflow: auto;\n}\n.bar2[data-v-1db9ccfc] {\n  margin: 20px;\n  display: flex;\n  justify-content: flex-end;\n  overflow: auto;\n}\n.brand[data-v-1db9ccfc] {\n  background-color: #F5F5F5;\n  padding: 10px;\n  border-end-start-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.div-container[data-v-1db9ccfc] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.col1[data-v-1db9ccfc],\n.col2[data-v-1db9ccfc] {\n  max-width: 300px;\n  padding: 5px 10px 5px 10px;\n}\n.col3[data-v-1db9ccfc] {\n  width: 100%;\n  padding: 5px 10px 5px 10px;\n}\n.divider[data-v-1db9ccfc] {\n  background-color: #DFDFDF;\n  width: 100%;\n  height: 2px;\n  margin: 10px 10px 10px 10px;\n}\n.banner[data-v-1db9ccfc] {\n  background-color: #E4E4E4;\n  border-end-end-radius: 10px;\n  border-top-right-radius: 10px;\n}\n@media (max-width: 959px) {\n.brand[data-v-1db9ccfc] {\n    order: 2;\n    border-end-start-radius: 0px;\n    border-top-left-radius: 0px;\n}\n.banner[data-v-1db9ccfc] {\n    order: 1;\n    border-end-end-radius: 0px;\n    border-top-right-radius: 0px;\n    height: 250px;\n    width: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/Products.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/global/Products.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_672cf216_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=672cf216&scoped=true& */ "./resources/js/components/global/Products.vue?vue&type=template&id=672cf216&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/components/global/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Products_vue_vue_type_style_index_0_id_672cf216_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true& */ "./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_672cf216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_672cf216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "672cf216",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/global/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_672cf216_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=style&index=0&id=672cf216&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_672cf216_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_672cf216_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_672cf216_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_style_index_0_id_672cf216_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/Products.vue?vue&type=template&id=672cf216&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/global/Products.vue?vue&type=template&id=672cf216&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_672cf216_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=672cf216&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Products.vue?vue&type=template&id=672cf216&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_672cf216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_672cf216_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Home4.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Home4.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home4_vue_vue_type_template_id_1db9ccfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home4.vue?vue&type=template&id=1db9ccfc&scoped=true& */ "./resources/js/pages/Home4.vue?vue&type=template&id=1db9ccfc&scoped=true&");
/* harmony import */ var _Home4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home4.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home4_vue_vue_type_style_index_0_id_1db9ccfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true& */ "./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home4_vue_vue_type_template_id_1db9ccfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home4_vue_vue_type_template_id_1db9ccfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1db9ccfc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home4.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Home4.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_style_index_0_id_1db9ccfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=style&index=0&id=1db9ccfc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_style_index_0_id_1db9ccfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_style_index_0_id_1db9ccfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_style_index_0_id_1db9ccfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_style_index_0_id_1db9ccfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Home4.vue?vue&type=template&id=1db9ccfc&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/Home4.vue?vue&type=template&id=1db9ccfc&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_template_id_1db9ccfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Home4.vue?vue&type=template&id=1db9ccfc&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home4.vue?vue&type=template&id=1db9ccfc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_template_id_1db9ccfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home4_vue_vue_type_template_id_1db9ccfc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);