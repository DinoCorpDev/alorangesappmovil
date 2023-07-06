(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/PresentationBanner.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PresentationBanner",
  props: {
    icon: {
      type: String,
      "default": "/public/assets/img/idovela-logo.png"
    },
    preamble: {
      type: String,
      "default": "Preamble"
    },
    title: {
      type: String,
      "default": "Title"
    },
    orientation: {
      type: String,
      "default": "left"
    },
    slidesCarousel: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    image: {
      type: String
    },
    actions: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      presetationBannerLogoUrl: "/public/assets/img/presentation-banner-logo.png"
    };
  },
  components: {
    Carousel: _Carousel__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopServices.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/shop/ShopServices.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seeders_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../seeders/products */ "./resources/js/seeders/products.js");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/global/PresentationBanner.vue */ "./resources/js/components/global/PresentationBanner.vue");
/* harmony import */ var _components_product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/product/ProductBox.vue */ "./resources/js/components/product/ProductBox.vue");
/* harmony import */ var _components_shop_ShopActionCard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/shop/ShopActionCard.vue */ "./resources/js/components/shop/ShopActionCard.vue");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShopServices",
  data: function data() {
    return {
      sliderSeeder: _seeders_products__WEBPACK_IMPORTED_MODULE_0__["sliderSeeder"],
      productsSeeder: _seeders_products__WEBPACK_IMPORTED_MODULE_0__["productsSeeder"],
      sliderItems: [{
        src: "/public/assets/img/shop-spaces/banner-main.png",
        type: "image"
      }]
    };
  },
  components: {
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    PresentationBanner: _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProductBox: _components_product_ProductBox_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    ShopActionCard: _components_shop_ShopActionCard_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "presentation-banner rounded-section",
    "class": _vm.orientation === "left" ? "panel-left" : "panel-rigth",
    attrs: {
      "no-gutters": ""
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      md: "5"
    }
  }, [_c("div", {
    staticClass: "panel pa-4"
  }, [_c("div", [_c("v-img", {
    staticClass: "mt-md-6 mb-6",
    attrs: {
      src: _vm.icon,
      width: "48"
    }
  }), _vm._v(" "), _c("h5", {
    staticClass: "presentation-banner-preamble mb-2 mb-md-5"
  }, [_vm._v(_vm._s(_vm.preamble))]), _vm._v(" "), _c("h2", {
    staticClass: "presentation-banner-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("v-divider", {
    staticClass: "mb-5"
  }), _vm._v(" "), _c("p", {
    staticClass: "presentation-banner-description body1"
  }, [_vm._t("description", function () {
    return [_vm._v(" Description ")];
  })], 2)], 1), _vm._v(" "), _c("div", [_vm.actions ? _c("v-row", {
    staticClass: "presentation-banner-actions"
  }, [_c("v-col", {
    staticClass: "pb-md-0",
    attrs: {
      cols: "6",
      md: "12"
    }
  }, [_c("custom-button", {
    attrs: {
      block: "",
      color: "nero",
      text: "Conoce Más"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6",
      md: "12"
    }
  }, [_c("custom-button", {
    attrs: {
      block: "",
      color: "grey",
      text: "Compartir"
    }
  })], 1)], 1) : _vm._e()], 1)])]), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "7"
    }
  }, [_vm.slidesCarousel.length > 0 ? _c("carousel", {
    attrs: {
      type: "banner",
      slides: _vm.slidesCarousel
    }
  }) : _vm.image ? _c("img", {
    staticClass: "presentation-banner-image",
    attrs: {
      src: _vm.image
    }
  }) : _c("img", {
    staticClass: "presentation-banner-image placeholder",
    attrs: {
      src: "/public/assets/img/carousel-item-placeholder.png"
    }
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopServices.vue?vue&type=template&id=eca38118&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/shop/ShopServices.vue?vue&type=template&id=eca38118& ***!
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
  return _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", {
    staticClass: "main",
    attrs: {
      tag: "main"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("Carousel", {
    staticClass: "main-carousel",
    attrs: {
      slides: _vm.sliderItems,
      type: "description",
      title: "Diseño de espacios",
      description: "Desde el diseño hasta la instalación, nos encargamos de todo para que te sientas confortable en ese espacio habitable ideal."
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    attrs: {
      tag: "section"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("ShopActionCard", {
    attrs: {
      img: "/public/assets/img/shop-spaces/icon-msg.png",
      href: "#"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("ShopActionCard", {
    attrs: {
      img: "/public/assets/img/shop-spaces/icon-house.png",
      href: "#"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "4"
    }
  }, [_c("ShopActionCard", {
    attrs: {
      img: "/public/assets/img/shop-spaces/icon-house.png",
      href: "#"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6",
    attrs: {
      tag: "section"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-3"
  }, [_c("v-col", {
    attrs: {
      cols: "6",
      sm: "8",
      md: "4"
    }
  }, [_c("ShopActionCard", {
    attrs: {
      boxStyle: "vertical",
      href: "#"
    }
  })], 1), _vm._v(" "), _vm._l(_vm.productsSeeder.slice(0, 4), function (product) {
    return _c("v-col", {
      key: "product-col-".concat(product.id),
      attrs: {
        cols: "6",
        sm: "4",
        md: "2"
      }
    }, [_c("ProductBox", {
      attrs: {
        productDetails: product
      }
    })], 1);
  })], 2), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "8",
      md: "4"
    }
  }, [_c("CustomButton", {
    attrs: {
      block: "",
      color: "grey2",
      text: "Ver más"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6",
    attrs: {
      tag: "section"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-3"
  }, [_c("v-col", {
    attrs: {
      cols: "6",
      sm: "8",
      md: "4"
    }
  }, [_c("ShopActionCard", {
    attrs: {
      boxStyle: "vertical",
      href: "#"
    }
  })], 1), _vm._v(" "), _vm._l(_vm.productsSeeder.slice(0, 4), function (product) {
    return _c("v-col", {
      key: "product-col-".concat(product.id),
      attrs: {
        cols: "6",
        sm: "4",
        md: "2"
      }
    }, [_c("ProductBox", {
      attrs: {
        productDetails: product
      }
    })], 1);
  })], 2), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "8",
      md: "4"
    }
  }, [_c("CustomButton", {
    attrs: {
      block: "",
      color: "grey2",
      text: "Ver más"
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6",
    attrs: {
      tag: "section"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-3"
  }, _vm._l(_vm.productsSeeder.slice(0, 4), function (product) {
    return _c("v-col", {
      key: "product-col-".concat(product.id),
      attrs: {
        cols: "12",
        sm: "6",
        md: "3"
      }
    }, [_c("ProductBox", {
      attrs: {
        boxStyle: "two",
        productDetails: product
      }
    })], 1);
  }), 1), _vm._v(" "), _c("v-row", {
    attrs: {
      justify: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      sm: "8",
      md: "4"
    }
  }, [_c("CustomButton", {
    attrs: {
      block: "",
      color: "grey2",
      text: "Ver más"
    }
  })], 1)], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--dark .presentation-banner[data-v-1c243037] {\n  background-color: #18191a;\n}\n.presentation-banner[data-v-1c243037] {\n  overflow: hidden;\n  height: auto;\n  min-height: 60vh;\n}\n.presentation-banner-preamble[data-v-1c243037] {\n  font-size: calc(13px + 5 * var(--screen-size));\n  line-height: calc(24px + 2 * var(--screen-size));\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.presentation-banner-title[data-v-1c243037] {\n  font-size: calc(27px + 33 * var(--screen-size));\n  line-height: calc(39px + 37 * var(--screen-size));\n  letter-spacing: 0.25px;\n  font-weight: 300;\n}\n@media (min-width: 960px) {\n.presentation-banner-title[data-v-1c243037] {\n    letter-spacing: -0.5px;\n}\n}\n.presentation-banner-image[data-v-1c243037] {\n  background-color: #dfdfdf;\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n.panel[data-v-1c243037] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n@media (max-width: 960px) {\n.panel[data-v-1c243037] {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n}\n@media (max-width: 960px) {\n.v-carousel[data-v-1c243037] {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n}\n@media (min-width: 960px) {\n.v-carousel[data-v-1c243037] .v-window__next {\n    right: 25%;\n}\n}\n@media (min-width: 960px) {\n.v-carousel[data-v-1c243037] .v-window__prev {\n    left: 25%;\n}\n}\n@media (min-width: 960px) {\n.v-carousel[data-v-1c243037] .v-carousel__controls .v-item-group {\n    width: 35%;\n}\n}\n@media (min-width: 960px) {\n.panel-left .panel[data-v-1c243037] {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n}\n@media (min-width: 960px) {\n.panel-left .v-carousel[data-v-1c243037] {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n}\n@media (min-width: 960px) {\n.panel-rigth[data-v-1c243037] {\n    flex-direction: row-reverse;\n}\n.panel-rigth .panel[data-v-1c243037] {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n}\n.panel-rigth .v-carousel[data-v-1c243037] {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/PresentationBanner.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/global/PresentationBanner.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PresentationBanner_vue_vue_type_template_id_1c243037_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true& */ "./resources/js/components/global/PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true&");
/* harmony import */ var _PresentationBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PresentationBanner.vue?vue&type=script&lang=js& */ "./resources/js/components/global/PresentationBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PresentationBanner_vue_vue_type_style_index_0_id_1c243037_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true& */ "./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PresentationBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PresentationBanner_vue_vue_type_template_id_1c243037_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PresentationBanner_vue_vue_type_template_id_1c243037_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c243037",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/PresentationBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/PresentationBanner.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/global/PresentationBanner.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PresentationBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_style_index_0_id_1c243037_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=style&index=0&id=1c243037&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_style_index_0_id_1c243037_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_style_index_0_id_1c243037_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_style_index_0_id_1c243037_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_style_index_0_id_1c243037_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/global/PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_template_id_1c243037_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/PresentationBanner.vue?vue&type=template&id=1c243037&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_template_id_1c243037_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PresentationBanner_vue_vue_type_template_id_1c243037_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/shop/ShopServices.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/shop/ShopServices.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopServices_vue_vue_type_template_id_eca38118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopServices.vue?vue&type=template&id=eca38118& */ "./resources/js/pages/shop/ShopServices.vue?vue&type=template&id=eca38118&");
/* harmony import */ var _ShopServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopServices.vue?vue&type=script&lang=js& */ "./resources/js/pages/shop/ShopServices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopServices_vue_vue_type_template_id_eca38118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopServices_vue_vue_type_template_id_eca38118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/shop/ShopServices.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/shop/ShopServices.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/shop/ShopServices.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopServices.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopServices.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopServices_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/shop/ShopServices.vue?vue&type=template&id=eca38118&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/shop/ShopServices.vue?vue&type=template&id=eca38118& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopServices_vue_vue_type_template_id_eca38118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopServices.vue?vue&type=template&id=eca38118& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/shop/ShopServices.vue?vue&type=template&id=eca38118&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopServices_vue_vue_type_template_id_eca38118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopServices_vue_vue_type_template_id_eca38118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);