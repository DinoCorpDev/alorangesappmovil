(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselMultipleItems.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselMultipleItems.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemProduct_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemProduct.vue */ "./resources/js/components/global/ItemProduct.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    columns: function columns() {
      /*if (this.$vuetify.breakpoint.xl) {
        return 4;
      }
        if (this.$vuetify.breakpoint.lg) {
        return 3;
      }
        if (this.$vuetify.breakpoint.md) {
        return 2;
      }*/

      return 3;
    }
  },
  props: {
    slides: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_BannerCategoryProduct_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/BannerCategoryProduct.vue */ "./resources/js/components/global/BannerCategoryProduct.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/ItemProduct.vue */ "./resources/js/components/global/ItemProduct.vue");
/* harmony import */ var _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/SelectCustom.vue */ "./resources/js/components/global/SelectCustom.vue");
/* harmony import */ var _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global/PresentationBanner.vue */ "./resources/js/components/global/PresentationBanner.vue");
/* harmony import */ var _components_global_CarouselProducts_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/global/CarouselProducts.vue */ "./resources/js/components/global/CarouselProducts.vue");
/* harmony import */ var _components_global_CarouselMultipleItems_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/global/CarouselMultipleItems.vue */ "./resources/js/components/global/CarouselMultipleItems.vue");








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BannerCategoryProduct: _components_global_BannerCategoryProduct_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    ItemProduct: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SelectCustom: _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    PresentationBanner: _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CarouselProducts: _components_global_CarouselProducts_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CarouselMultipleItems: _components_global_CarouselMultipleItems_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      slides: [{
        name: "test1",
        src: "/public/assets/img/placeholder.jpg"
      }, {
        name: "test2",
        src: "/public/assets/img/play_store.png"
      }, {
        name: "test3",
        src: "/public/assets/img/verified.png"
      }],
      slides2: [{
        name: "test1",
        src: "/public/assets/img/placeholder.jpg"
      }, {
        name: "test2",
        src: "/public/assets/img/play_store.png"
      }, {
        name: "test3",
        src: "/public/assets/img/verified.png"
      }],
      slidesMultiple: [{
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=1',
        idItem: "1"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 2',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=2',
        idItem: "2"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 3',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=3',
        idItem: "3"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 4',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=4',
        idItem: "4"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 5',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=5',
        idItem: "5"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 6',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=6',
        idItem: "6"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 7',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=7',
        idItem: "7"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 8',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=8',
        idItem: "8"
      }, {
        component: _components_global_ItemProduct_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
        title: 'Titulo 9',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.',
        img: 'https://picsum.photos/500/300?random=9',
        idItem: "9"
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselMultipleItems.vue?vue&type=template&id=39ec184f&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselMultipleItems.vue?vue&type=template&id=39ec184f& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      "hide-delimiters": ""
    }
  }, [_vm._l(_vm.slides, function (item, index) {
    return [(index + 1) % _vm.columns === 1 || _vm.columns === 1 ? _c("v-carousel-item", {
      key: index
    }, [_c("v-row", {
      staticClass: "flex-nowrap",
      staticStyle: {
        height: "100%"
      }
    }, [_vm._l(_vm.columns, function (n, i) {
      return [+index + i < _vm.slides.length ? [_c("v-col", {
        key: i
      }, [+index + i < _vm.slides.length ? _c("v-sheet", {
        attrs: {
          height: "100%"
        }
      }, [_c(_vm.slides[+index + i].component, _vm._b({
        tag: "component"
      }, "component", _vm.slides[+index + i], false))], 1) : _vm._e()], 1)] : _vm._e()];
    })], 2)], 1) : _vm._e()];
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=template&id=1d9d9dfa&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home2.vue?vue&type=template&id=1d9d9dfa& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("v-card", {
    staticClass: "black"
  }, [_c("v-toolbar", {
    staticClass: "black mt-2",
    staticStyle: {
      "border-radius": "0",
      height: "82px"
    },
    attrs: {
      elevation: "0",
      outlined: ""
    }
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("v-img", {
    attrs: {
      src: "../../public/assets/img/Logo-idovela-sin-fondo.png",
      "max-width": "90px",
      height: "auto"
    }
  })], 1), _vm._v(" "), _c("v-spacer"), _vm._v(" "), _c("custom-button", {
    staticClass: "black--text tamaño-boton-desktop",
    attrs: {
      text: "Ir a tienda",
      variant: "#E2E6EA",
      icon: "la-store-alt",
      small: "small"
    }
  }), _vm._v(" "), _c("custom-button", {
    staticClass: "black--text ml-4 tamaño-boton-desktop",
    attrs: {
      text: "Iniciar Sesión",
      variant: "#E2E6EA",
      small: "small"
    }
  })], 1)], 1), _vm._v(" "), _c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", {
    attrs: {
      align: "center"
    }
  }, [_c("v-col", {
    attrs: {
      cols: "12",
      md: "5"
    }
  }, [_c("h1", {
    staticClass: "mb-8"
  }, [_vm._v("\n          iDOVELA "), _c("br"), _vm._v("\n          Para un mundo más habitable\n        ")]), _vm._v(" "), _c("h5", {
    staticClass: "mb-8"
  }, [_vm._v("\n          Mejores espacios conducen a modelos más eficaces de vida. "), _c("br"), _vm._v("\n          Las habitats eficientes conducen a una implementación más rápida.\n          Genere valor en su vida con mejores espacios habitables.\n        ")]), _vm._v(" "), _c("custom-button", {
    staticStyle: {
      width: "422px"
    },
    attrs: {
      text: "Comunicarse con ventas",
      variant: "white",
      outlined: ""
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "12",
      md: "7"
    }
  }, [_c("carousel")], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("presentation-banner", {
    attrs: {
      slidesCarousel: _vm.slides2
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("banner-category-product", {
    attrs: {
      title: "Titulo",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "100"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("presentation-banner", {
    attrs: {
      slidesCarousel: _vm.slides
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-products", {
    attrs: {
      "no-dots": "",
      "no-arrows": "true"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("presentation-banner")], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("presentation-banner")], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-multiple-items", {
    attrs: {
      slides: _vm.slidesMultiple
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("banner-category-product", {
    attrs: {
      title: "Titulo",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "100"
    }
  })], 1)], 1)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-main {\r\n  background-color: #000000;\n}\n@media (min-width: 1264px) {\n.tamaño-boton-desktop {\r\n    width: 221px;\r\n    height: 38px;\n}\n.v-toolbar__content,\r\n  .v-toolbar__extension {\r\n    padding: 4px 24px;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css&");

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

/***/ "./resources/js/components/global/CarouselMultipleItems.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/global/CarouselMultipleItems.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselMultipleItems_vue_vue_type_template_id_39ec184f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselMultipleItems.vue?vue&type=template&id=39ec184f& */ "./resources/js/components/global/CarouselMultipleItems.vue?vue&type=template&id=39ec184f&");
/* harmony import */ var _CarouselMultipleItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselMultipleItems.vue?vue&type=script&lang=js& */ "./resources/js/components/global/CarouselMultipleItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarouselMultipleItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselMultipleItems_vue_vue_type_template_id_39ec184f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselMultipleItems_vue_vue_type_template_id_39ec184f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/CarouselMultipleItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/CarouselMultipleItems.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselMultipleItems.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselMultipleItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselMultipleItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselMultipleItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselMultipleItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/CarouselMultipleItems.vue?vue&type=template&id=39ec184f&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselMultipleItems.vue?vue&type=template&id=39ec184f& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselMultipleItems_vue_vue_type_template_id_39ec184f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselMultipleItems.vue?vue&type=template&id=39ec184f& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselMultipleItems.vue?vue&type=template&id=39ec184f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselMultipleItems_vue_vue_type_template_id_39ec184f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselMultipleItems_vue_vue_type_template_id_39ec184f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Home2.vue":
/*!**************************************!*\
  !*** ./resources/js/pages/Home2.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home2_vue_vue_type_template_id_1d9d9dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home2.vue?vue&type=template&id=1d9d9dfa& */ "./resources/js/pages/Home2.vue?vue&type=template&id=1d9d9dfa&");
/* harmony import */ var _Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home2.vue?vue&type=script&lang=js& */ "./resources/js/pages/Home2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home2_vue_vue_type_style_index_0_id_1d9d9dfa_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css& */ "./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home2_vue_vue_type_template_id_1d9d9dfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home2_vue_vue_type_template_id_1d9d9dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Home2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Home2.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/pages/Home2.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_id_1d9d9dfa_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=style&index=0&id=1d9d9dfa&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_id_1d9d9dfa_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_id_1d9d9dfa_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_id_1d9d9dfa_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_style_index_0_id_1d9d9dfa_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Home2.vue?vue&type=template&id=1d9d9dfa&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Home2.vue?vue&type=template&id=1d9d9dfa& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_template_id_1d9d9dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Home2.vue?vue&type=template&id=1d9d9dfa& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Home2.vue?vue&type=template&id=1d9d9dfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_template_id_1d9d9dfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Home2_vue_vue_type_template_id_1d9d9dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);