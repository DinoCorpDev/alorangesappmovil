(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Carousel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Carousel",
  props: {
    showArrows: {
      type: Boolean,
      "default": true
    },
    hideDelimiters: {
      type: Boolean,
      "default": false
    },
    slides: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    type: {
      type: String,
      "default": "single"
    }
  },
  data: function data() {
    return {
      itemPlaceholderUrl: "/public/assets/img/carousel-item-placeholder.png"
    };
  },
  computed: {
    aspectRatio: function aspectRatio() {
      if (this.type === "single") {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "0.8";
          case "sm":
            return "1.6";
          case "md":
            return "1.4";
          case "lg":
            return "1.4";
          case "xl":
            return "1.4";
        }
      }
      if (this.type === "banner") {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return "1";
          case "sm":
            return "1.6";
          case "md":
            return "2.1";
          case "lg":
            return "2.1";
          case "xl":
            return "2.1";
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem6.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductItem6",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return {
          id: "0",
          ref: "Referencia",
          img: "/public/assets/img/item-placeholder.png",
          brand: "Marca",
          obj: "Objeto",
          val: "000.000.000 COP"
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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








/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      overlay: true,
      overlay1: false,
      overlay2: false,
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
      tags: ["1", "2", "3"]
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
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=template&id=152c8e1e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Carousel.vue?vue&type=template&id=152c8e1e&scoped=true& ***!
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
  return _c("v-carousel", {
    staticStyle: {
      height: "100%"
    },
    attrs: {
      "hide-delimiters": _vm.hideDelimiters,
      "show-arrows": _vm.showArrows,
      height: "auto"
    },
    scopedSlots: _vm._u([{
      key: "prev",
      fn: function fn(_ref) {
        var on = _ref.on,
          attrs = _ref.attrs;
        return [_c("v-btn", _vm._g(_vm._b({
          attrs: {
            small: "",
            color: "#000000"
          }
        }, "v-btn", attrs, false), on), [_c("i", {
          staticClass: "las la-angle-left"
        })])];
      }
    }, {
      key: "next",
      fn: function fn(_ref2) {
        var on = _ref2.on,
          attrs = _ref2.attrs;
        return [_c("v-btn", _vm._g(_vm._b({
          attrs: {
            small: "",
            color: "#000000"
          }
        }, "v-btn", attrs, false), on), [_c("i", {
          staticClass: "las la-angle-right"
        })])];
      }
    }])
  }, [_vm._v(" "), _vm._v(" "), _vm.slides.length > 0 ? _vm._l(_vm.slides, function (slide, i) {
    return _c("v-carousel-item", {
      key: i
    }, [slide.type === "image" ? _c("v-img", {
      attrs: {
        src: slide.src,
        "aspect-ratio": _vm.aspectRatio
      }
    }) : _vm._e(), _vm._v(" "), slide.type === "video" ? _c("v-responsive", {
      attrs: {
        "aspect-ratio": _vm.aspectRatio
      }
    }, [_c("video", {
      attrs: {
        autoplay: ""
      }
    }, [_c("source", {
      attrs: {
        src: slide.src,
        type: "video/mp4"
      }
    })])]) : _vm._e(), _vm._v(" "), slide.type === "iframe" ? _c("v-responsive", {
      attrs: {
        "aspect-ratio": _vm.aspectRatio
      }
    }, [_c("iframe", {
      attrs: {
        src: "".concat(slide.src, "?controls=0&autoplay=1&fs=0&modestbranding&rel=0&showinfo=0&disablekb=0"),
        frameborder: "0",
        allowfullscreen: ""
      }
    })]) : _vm._e()], 1);
  }) : _c("v-carousel-item", [_c("v-img", {
    attrs: {
      src: _vm.itemPlaceholderUrl,
      "aspect-ratio": _vm.aspectRatio,
      contain: ""
    }
  })], 1)], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true& ***!
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
  return _c("v-hover", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var hover = _ref.hover;
        return [_c("v-card", {
          "class": {
            "on-hover": hover
          }
        }, [_c("div", {
          staticClass: "product-item pa-10"
        }, [_c("v-row", {
          attrs: {
            align: "center"
          }
        }, [_c("v-col", {
          attrs: {
            cols: "3"
          }
        }, [_c("div", {
          staticClass: "product-item-image"
        }, [_c("v-img", {
          attrs: {
            src: _vm.data.img,
            "aspect-ratio": 1,
            height: "100%"
          }
        })], 1)]), _vm._v(" "), _c("v-col", {
          staticClass: "pl-6",
          attrs: {
            cols: "4"
          }
        }, [_c("div", {
          staticStyle: {
            "border-left": "1px"
          }
        }, [_c("h5", {
          staticClass: "subtitle2 text-uppercase mb-2"
        }, [_vm._v(_vm._s(_vm.data.ref))]), _vm._v(" "), _c("h5", {
          staticClass: "subtitle1 text-uppercase font-weight-bold mb-2"
        }, [_vm._v(_vm._s(_vm.data.obj))]), _vm._v(" "), _c("h5", {
          staticClass: "subtitle1 mb-2"
        }, [_vm._v(_vm._s(_vm.data.brand))])])]), _vm._v(" "), _c("v-col", {
          staticClass: "pl-6",
          staticStyle: {
            "border-left": "1px"
          },
          attrs: {
            cols: "5"
          }
        }, [_c("h5", {
          staticClass: "subtitle2 mb-2"
        }, [_vm._v(_vm._s(_vm.data.val))])])], 1)], 1)])];
      }
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "positionColbuttons",
    attrs: {
      cols: "8"
    }
  }, [_c("v-row", {
    attrs: {
      dense: "",
      justify: ""
    }
  }, [_c("v-col", [_c("v-img", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.overlay,
      expression: "overlay"
    }],
    attrs: {
      src: "https://picsum.photos/1920/1080?random=1",
      height: "700px",
      width: "100%"
    }
  }), _vm._v(" "), _c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.overlay1,
      expression: "overlay1"
    }],
    attrs: {
      slides: _vm.sliderSeeder,
      height: "700px",
      width: "100%"
    }
  }), _vm._v(" "), _c("carousel", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.overlay2,
      expression: "overlay2"
    }],
    attrs: {
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
        _vm.overlay = true;
        _vm.overlay1 = false;
        _vm.overlay2 = false;
      }
    }
  }, [_vm._v("Especificación\n                    ")])], 1), _vm._v(" "), _c("v-col", {
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
        _vm.overlay = false;
        _vm.overlay1 = true;
        _vm.overlay2 = false;
      }
    }
  }, [_vm._v("Imágenes\n                    ")])], 1), _vm._v(" "), _c("v-col", {
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
        _vm.overlay = false;
        _vm.overlay1 = false;
        _vm.overlay2 = true;
      }
    }
  }, [_vm._v("Videos\n                    ")])], 1)], 1)], 1), _vm._v(" "), _c("v-col", [_c("div", {
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
  }, [_vm._v("Consultar")])]), _vm._v(" "), _c("div", {
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
  }, [_vm._v("Se incluye con la compra")]), _vm._v(" "), _c("v-divider"), _vm._v(" "), _c("product-item-6")], 1)], 1), _vm._v(" "), _c("v-row", {
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
  })], 1)], 1)], 1), _vm._v(" "), _c("div", {
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
  })], 1)], 1), _vm._v(" "), _c("v-card", [_c("v-footer", {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-carousel .v-window-item[data-v-152c8e1e] {\n  display: flex;\n  align-items: center;\n}\n.v-carousel .v-window-item video[data-v-152c8e1e],\n.v-carousel .v-window-item iframe[data-v-152c8e1e] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n}\n.v-carousel[data-v-152c8e1e] {\n  border-radius: 10px;\n  background-color: #242526;\n}\n.v-carousel[data-v-152c8e1e] .v-window__next,\n.v-carousel[data-v-152c8e1e] .v-window__prev {\n  top: calc(100% - 52px);\n  z-index: 2;\n  background: transparent;\n  border-radius: 0;\n}\n.v-carousel[data-v-152c8e1e] .v-window__next .v-btn,\n.v-carousel[data-v-152c8e1e] .v-window__prev .v-btn {\n  font-size: 20px;\n  height: 38px;\n  min-width: 38px;\n  padding: 0px;\n  border-radius: 5px;\n  opacity: 0.5;\n}\n.v-carousel[data-v-152c8e1e] .v-window__container {\n  height: 100% !important;\n}\n.v-carousel[data-v-152c8e1e] .v-carousel__controls {\n  background: transparent;\n}\n.v-carousel[data-v-152c8e1e] .v-carousel__controls .v-item-group {\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n}\n.v-carousel[data-v-152c8e1e] .v-carousel__controls .v-carousel__controls__item {\n  height: 8px;\n  width: 8px;\n  color: #000000;\n}\n.v-carousel[data-v-152c8e1e] .v-carousel__controls .v-carousel__controls__item.v-item--active {\n  color: #18191a;\n}\n.v-carousel[data-v-152c8e1e] .v-carousel__controls .v-carousel__controls__item.v-item--active:before {\n  opacity: 1;\n}\n.v-carousel[data-v-152c8e1e] .v-carousel__controls .v-carousel__controls__item:before {\n  opacity: 0.1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-item[data-v-5e9ac0e5] {\n  border-radius: 10px;\n  background-color: #18191a;\n}\n.product-item-image[data-v-5e9ac0e5] {\n  background-color: #242526;\n}\n.v-card[data-v-5e9ac0e5] {\n  opacity: 0.4;\n  transition: opacity 0.2s ease-in-out;\n}\n.v-card[data-v-5e9ac0e5]:not(.on-hover) {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-btn[data-v-3aa701e7] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.25px;\n  border-radius: 5px;\n}\n@media (min-width: 960px) {\n.v-btn[data-v-3aa701e7] {\n    font-size: 14px;\n}\n}\n.v-btn i[data-v-3aa701e7] {\n  font-size: 20px;\n}\n.v-btn[data-v-3aa701e7]:hover:before, .v-btn[data-v-3aa701e7]:focus:before {\n  opacity: 1;\n}\n.v-btn.v-size--default[data-v-3aa701e7] {\n  height: 38px;\n}\n.theme--light.v-btn[data-v-3aa701e7] {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-3aa701e7] {\n  background-color: #dfdfdf;\n}\n.theme--light.v-btn.v-btn--has-bg[data-v-3aa701e7]:before {\n  background-color: #ffffff;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled[data-v-3aa701e7] {\n  color: #000000 !important;\n}\n.theme--light.v-btn.v-btn--has-bg.v-btn--disabled.v-btn--has-bg[data-v-3aa701e7] {\n  background-color: #fafcfc !important;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7] {\n  color: #ffffff;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:hover, .theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:focus {\n  color: #000000;\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:before {\n  background-color: rgba(255, 255, 255, 0.8);\n}\n.theme--light.v-btn.v-btn--outlined[data-v-3aa701e7]:focus:before {\n  background-color: #ffffff;\n}\n.buttonsAct[data-v-3aa701e7] {\n  top: 30px;\n  position: absolute;\n  width: 100%;\n}\n.positionColbuttons[data-v-3aa701e7] {\n  position: relative;\n}\n.la-border[data-v-3aa701e7] {\n  border-radius: 0.5em;\n}\n.v-btn-toggle[data-v-3aa701e7] {\n  border-radius: 0px;\n  height: 20px !important;\n}\n.toggle-btn[data-v-3aa701e7] {\n  height: 20px !important;\n  min-width: 20px !important;\n}\n.v-divider[data-v-3aa701e7] {\n  border-width: thin 0 0;\n  max-width: 94%;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/Carousel.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/global/Carousel.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_152c8e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=152c8e1e&scoped=true& */ "./resources/js/components/global/Carousel.vue?vue&type=template&id=152c8e1e&scoped=true&");
/* harmony import */ var _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Carousel.vue?vue&type=script&lang=js& */ "./resources/js/components/global/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Carousel_vue_vue_type_style_index_0_id_152c8e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true& */ "./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Carousel_vue_vue_type_template_id_152c8e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Carousel_vue_vue_type_template_id_152c8e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "152c8e1e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/Carousel.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/global/Carousel.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_152c8e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=style&index=0&id=152c8e1e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_152c8e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_152c8e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_152c8e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_id_152c8e1e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/Carousel.vue?vue&type=template&id=152c8e1e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/global/Carousel.vue?vue&type=template&id=152c8e1e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_152c8e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Carousel.vue?vue&type=template&id=152c8e1e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/Carousel.vue?vue&type=template&id=152c8e1e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_152c8e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_152c8e1e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/ProductItem6.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/ProductItem6.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductItem6_vue_vue_type_template_id_5e9ac0e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true& */ "./resources/js/components/global/ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true&");
/* harmony import */ var _ProductItem6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem6.vue?vue&type=script&lang=js& */ "./resources/js/components/global/ProductItem6.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductItem6_vue_vue_type_style_index_0_id_5e9ac0e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true& */ "./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductItem6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductItem6_vue_vue_type_template_id_5e9ac0e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductItem6_vue_vue_type_template_id_5e9ac0e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e9ac0e5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/ProductItem6.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/ProductItem6.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem6.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem6.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_style_index_0_id_5e9ac0e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=style&index=0&id=5e9ac0e5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_style_index_0_id_5e9ac0e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_style_index_0_id_5e9ac0e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_style_index_0_id_5e9ac0e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_style_index_0_id_5e9ac0e5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_template_id_5e9ac0e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem6.vue?vue&type=template&id=5e9ac0e5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_template_id_5e9ac0e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem6_vue_vue_type_template_id_5e9ac0e5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Collection.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/Collection.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collection.vue?vue&type=template&id=3aa701e7&scoped=true& */ "./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&");
/* harmony import */ var _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collection.vue?vue&type=script&lang=js& */ "./resources/js/pages/Collection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& */ "./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3aa701e7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Collection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Collection.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/Collection.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=style&index=0&id=3aa701e7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_3aa701e7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Collection.vue?vue&type=template&id=3aa701e7&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Collection.vue?vue&type=template&id=3aa701e7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Collection_vue_vue_type_template_id_3aa701e7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);