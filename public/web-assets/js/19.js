(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselSpaces.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpaceItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpaceItem.vue */ "./resources/js/components/global/SpaceItem.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CarouselSpaces",
  components: {
    SpaceItem: _SpaceItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    img: {
      type: String,
      "default": "/public/assets/img/placeholder-rect.jpg"
    },
    title: {
      type: String,
      "default": "H5"
    },
    spaces: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      swiperOptions: {
        slidesPerView: 2,
        spaceBetween: 12,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          960: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselTabs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CarouselTabs",
  props: {
    title: {
      type: String,
      "default": "H4"
    },
    description: {
      type: String,
      "default": "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has"
    },
    tags: {
      type: String,
      "default": "# INSTALACIONES • # MANTENIMIENTO • # PLANES"
    },
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
    },
    namebutton: {
      type: String,
      "default": "IR A PLANES"
    },
    showbutton: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      presetationBannerLogoUrl: "/public/assets/img/presentation-banner-logo.png",
      itemPlaceholderUrl: "/public/assets/img/carousel-item-placeholder.png"
    };
  },
  components: {
    Carousel: _Carousel__WEBPACK_IMPORTED_MODULE_0__["default"],
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem1.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductItem1",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return {
          id: "0",
          name: "Titulo",
          img: "/public/assets/img/item-placeholder.png",
          description: "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has"
        };
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem4.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      icons: ["mdi-rewind", "mdi-play", "mdi-fast-forward"],
      transparent: "rgba(255, 255, 255, 0)"
    };
  },
  name: "ProductItem4",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    headerPr: {
      type: Boolean
    },
    data: {
      type: Object,
      "default": function _default() {
        return {
          id: "0",
          name: "Objeto",
          ref: "REFERENCIA",
          brand: "Marca",
          val: "000.000.000 COP",
          img: "/public/assets/img/item-placeholder.png",
          transparent: "rgba(255, 255, 255, 0)"
        };
      }
    }
  },
  computed: {
    aspectRatio: function aspectRatio() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1.2";
        case "sm":
          return "1.9";
        case "md":
          return "2.2";
        case "lg":
          return "2.2";
        case "xl":
          return "2.2";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SpaceItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductItem",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return {
          id: "0",
          name: "ESPACIO",
          img: "/public/assets/img/item-placeholder.png",
          img1: "/public/assets/img/play_store.png",
          description: "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
          transparent: "green"
        };
      }
    }
  },
  computed: {
    aspectRatio: function aspectRatio() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "1.2";
        case "sm":
          return "1.9";
        case "md":
          return "2.2";
        case "lg":
          return "2.2";
        case "xl":
          return "0.8";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Spaces.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_BannerCategoryProduct_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/global/BannerCategoryProduct.vue */ "./resources/js/components/global/BannerCategoryProduct.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");
/* harmony import */ var _components_global_CarouselTabs_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/global/CarouselTabs.vue */ "./resources/js/components/global/CarouselTabs.vue");
/* harmony import */ var _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");
/* harmony import */ var _components_global_ProductItem_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/global/ProductItem.vue */ "./resources/js/components/global/ProductItem.vue");
/* harmony import */ var _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global/SelectCustom.vue */ "./resources/js/components/global/SelectCustom.vue");
/* harmony import */ var _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/global/PresentationBanner.vue */ "./resources/js/components/global/PresentationBanner.vue");
/* harmony import */ var _components_global_CarouselProducts_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/global/CarouselProducts.vue */ "./resources/js/components/global/CarouselProducts.vue");
/* harmony import */ var _components_global_CarouselSpaces_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/global/CarouselSpaces.vue */ "./resources/js/components/global/CarouselSpaces.vue");
/* harmony import */ var _components_global_ProductItem1_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/global/ProductItem1.vue */ "./resources/js/components/global/ProductItem1.vue");
/* harmony import */ var _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/global/ProductItem2.vue */ "./resources/js/components/global/ProductItem2.vue");
/* harmony import */ var _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/global/ProductItem3.vue */ "./resources/js/components/global/ProductItem3.vue");
/* harmony import */ var _components_global_ProductItem4_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/global/ProductItem4.vue */ "./resources/js/components/global/ProductItem4.vue");
/* harmony import */ var _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/global/LayoutNavbarSpaces.vue */ "./resources/js/components/global/LayoutNavbarSpaces.vue");
/* harmony import */ var _seeders_spaces__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../seeders/spaces */ "./resources/js/seeders/spaces.js");
/* harmony import */ var _seeders_products__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../seeders/products */ "./resources/js/seeders/products.js");
















/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      spacesSeeder: _seeders_spaces__WEBPACK_IMPORTED_MODULE_14__["spacesSeeder"],
      productsSeeder: _seeders_products__WEBPACK_IMPORTED_MODULE_15__["productsSeeder"],
      sliderSeeder: _seeders_products__WEBPACK_IMPORTED_MODULE_15__["sliderSeeder"],
      tabs: [{
        icon: "la-chair",
        text: "Diseño de espacios"
      }, {
        icon: "la-tools",
        text: "Servicios"
      }, {
        icon: "la-tv",
        text: "Electrodomésticos"
      }, {
        icon: "la-building",
        text: "Portal de empresas"
      }]
    };
  },
  components: {
    BannerCategoryProduct: _components_global_BannerCategoryProduct_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CustomButton: _components_global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProductItem: _components_global_ProductItem_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    SelectCustom: _components_global_SelectCustom_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    PresentationBanner: _components_global_PresentationBanner_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CarouselProducts: _components_global_CarouselProducts_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    CarouselSpaces: _components_global_CarouselSpaces_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    ProductItem1: _components_global_ProductItem1_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    ProductItem3: _components_global_ProductItem3_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    LayoutNavbarSpaces: _components_global_LayoutNavbarSpaces_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    ProductItem2: _components_global_ProductItem2_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    ProductItem4: _components_global_ProductItem4_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    CarouselTabs: _components_global_CarouselTabs_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mounted: function mounted() {
    this.$vuetify.theme.dark = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h5", {
    staticClass: "mb-3"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("swiper", {
    attrs: {
      options: _vm.swiperOptions
    }
  }, [_vm._l(_vm.spaces, function (space) {
    return _c("swiper-slide", {
      key: "slide-space-".concat(space.id)
    }, [_c("space-item", {
      attrs: {
        data: space
      }
    })], 1);
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-pagination",
    attrs: {
      slot: "pagination"
    },
    slot: "pagination"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-prev",
    attrs: {
      slot: "button-prev"
    },
    slot: "button-prev"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-next",
    attrs: {
      slot: "button-next"
    },
    slot: "button-next"
  })], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true& ***!
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
  return _c("v-row", {
    staticClass: "primary rounded-section",
    attrs: {
      "no-gutters": ""
    }
  }, [_c("v-col", [_c("v-carousel", {
    staticStyle: {
      height: "100%"
    },
    attrs: {
      "hide-delimiters": _vm.hideDelimiters,
      "show-arrows": _vm.showArrows,
      height: "600px"
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
        "aspect-ratio": _vm.aspectRatio,
        height: "600px"
      }
    }, [_c("v-col", {
      staticStyle: {
        "padding-top": "320px"
      },
      attrs: {
        cols: "12",
        md: "5"
      }
    }, [_c("div", {
      staticClass: "pa-4"
    }, [_c("div", [_c("h2", {
      staticClass: "text-uppercase"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("p", {
      staticClass: "body1"
    }, [_vm._v(_vm._s(_vm.description))]), _vm._v(" "), _c("h7", {
      staticClass: "text-uppercase"
    }, [_vm._v(_vm._s(_vm.tags))])], 1), _vm._v(" "), _c("div", {
      staticClass: "mt-4"
    }, [_c("custom-button", {
      attrs: {
        text: _vm.namebutton
      }
    }), _vm._v(" "), _vm.showbutton ? _c("custom-button", {
      staticClass: "ml-5",
      attrs: {
        light: "",
        text: "VER MÁS"
      }
    }) : _vm._e()], 1)])])], 1) : _vm._e(), _vm._v(" "), slide.type === "video" ? _c("v-responsive", {
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
  })], 1)], 2)], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true& ***!
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
            cols: "9"
          }
        }, [_c("h5", {
          staticClass: "subtitle1 text-uppercase font-weight-bold mb-3"
        }, [_vm._v(_vm._s(_vm.data.name))]), _vm._v(" "), _c("p", {
          staticClass: "mb-4"
        }, [_vm._v(_vm._s(_vm.data.description))]), _vm._v(" "), _c("custom-button", {
          staticClass: "px-0",
          attrs: {
            text: "Acción",
            plain: ""
          }
        })], 1)], 1)], 1)])];
      }
    }])
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true& ***!
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
  return _c("div", {
    staticClass: "product-item"
  }, [_c("div", {
    staticClass: "text-right pa-1 mb-2"
  }, [_c("v-icon", {
    attrs: {
      right: ""
    }
  }, [_vm._v(" la-bookmark ")])], 1), _vm._v(" "), _c("v-row", [[_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-hover", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var hover = _ref.hover;
        return [_c("v-card", {
          "class": {
            "on-hover": hover
          },
          attrs: {
            elevation: hover ? 12 : 2
          }
        }, [_c("v-card", {
          staticStyle: {
            background: "gray"
          },
          attrs: {
            height: "250px"
          }
        }, [_c("v-row", [_c("v-img", {
          staticClass: "mt-16",
          attrs: {
            src: _vm.data.img,
            height: "120px"
          }
        })], 1)], 1), _vm._v(" "), _c("v-row", {
          attrs: {
            justify: "center"
          }
        }, [_c("v-card", {
          staticClass: "rounded-circle",
          staticStyle: {
            background: "white",
            "margin-top": "-30%"
          },
          attrs: {
            height: "70%",
            width: "70%"
          }
        }, [_c("v-img", {
          attrs: {
            src: _vm.data.img,
            height: "150px",
            justify: "center"
          }
        })], 1)], 1), _vm._v(" "), _c("div", {
          staticClass: "product-item-body pa-4 mt-8"
        }, [_c("custom-button", {
          "class": {
            "show-btns": hover
          },
          attrs: {
            text: "Ver Detalles",
            block: "",
            color: "transparent"
          }
        })], 1)], 1)];
      }
    }])
  })], 1)]], 2)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true& ***!
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
  return _c("div", {
    staticClass: "space-item"
  }, [_c("div", {
    staticClass: "space-item-heading text-center pa-3"
  }, [_c("h5", {
    staticClass: "subtitle2 text-uppercase font-weight-bold"
  }, [_vm._v("\n      " + _vm._s(_vm.data.name) + "\n    ")])]), _vm._v(" "), _c("v-hover", {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var hover = _ref.hover;
        return [_c("div", {
          staticClass: "space-item-image"
        }, [_c("v-img", {
          attrs: {
            src: _vm.data.img,
            "aspect-ratio": _vm.aspectRatio,
            height: "100%"
          }
        }, [_c("v-card", {
          "class": {
            "on-hover": hover
          },
          attrs: {
            elevation: hover ? 16 : 2
          }
        }, [_c("v-row", {
          staticClass: "fill-height flex-column",
          attrs: {
            justify: "space-between"
          }
        }, [_c("div", {
          staticClass: "space-item-body pa-13",
          "class": {
            "show-btns": hover
          },
          attrs: {
            color: "transparent"
          }
        }, [_c("v-img", {
          staticClass: "mb-5",
          "class": {
            "show-btns": hover
          },
          attrs: {
            src: _vm.data.img,
            "aspect-ratio": _vm.aspectRatio,
            height: "100%",
            color: "transparent"
          }
        }), _vm._v(" "), _c("p", {
          staticClass: "mb-11",
          "class": {
            "show-btns": hover
          },
          attrs: {
            color: "transparent"
          }
        }, [_vm._v(_vm._s(_vm.data.description))]), _vm._v(" "), _c("custom-button", {
          "class": {
            "show-btns": hover
          },
          attrs: {
            text: "Ver Detalles",
            block: "",
            color: "transparent"
          }
        })], 1)])], 1)], 1)], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=template&id=884ab714&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Spaces.vue?vue&type=template&id=884ab714&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("layout-navbar-spaces"), _vm._v(" "), _c("v-tabs", {
    attrs: {
      "background-color": _vm.$vuetify.theme.dark ? "#000000" : "#FAFCFC",
      centered: "",
      "fixed-tabs": "",
      "slider-color": "white"
    }
  }, [_vm._l(_vm.tabs, function (tab) {
    return _c("v-tab", {
      key: "tab-".concat(tab.text),
      staticClass: "text-none"
    }, [_c("v-icon", {
      attrs: {
        left: ""
      }
    }, [_vm._v(" " + _vm._s(tab.icon) + " ")]), _vm._v("\n            " + _vm._s(tab.text) + "\n        ")], 1);
  }), _vm._v(" "), _c("v-tab-item", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", {
    staticClass: "mb-2"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-tabs", {
    attrs: {
      slides: _vm.sliderSeeder
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("product-item-1")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("product-item-1")], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-spaces", {
    attrs: {
      spaces: _vm.spacesSeeder
    }
  }), _vm._v(" "), _c("v-row", {
    staticClass: "my-10",
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    staticClass: "mr-16",
    attrs: {
      small: "",
      color: "#000000"
    }
  }, [_c("i", {
    staticClass: "las la-angle-left"
  })]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-16",
    attrs: {
      small: "",
      color: "#000000"
    }
  }, [_c("i", {
    staticClass: "las la-angle-right"
  })])], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
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
  })], 1)], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-products", {
    attrs: {
      products: _vm.productsSeeder
    }
  })], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-tabs", {
    attrs: {
      slides: _vm.sliderSeeder
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item-1")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item-1")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item-1")], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1"
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
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1"
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
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6 mt-16"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
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
  })], 1)], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("h5", [_vm._v("Producto con Carousel")]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("presentation-banner", {
    attrs: {
      orientation: "right",
      slidesCarousel: _vm.sliderSeeder
    }
  })], 1)], 1)], 1)])], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-tabs", {
    attrs: {
      slides: _vm.sliderSeeder,
      showbutton: false
    }
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-2"
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("product-item-1")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "6"
    }
  }, [_c("product-item-1")], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-4")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-4")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-4", {
    attrs: {
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-4", {
    attrs: {
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
  })], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2")], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      cols: "2"
    }
  }, [_c("product-item-2", {
    attrs: {
      img: "/public/assets/img/landing/Pacto-Ambiental.jpg"
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "my-10",
    attrs: {
      justify: "center"
    }
  }, [_c("v-btn", {
    staticClass: "mr-16",
    attrs: {
      small: "",
      color: "#000000"
    }
  }, [_c("i", {
    staticClass: "las la-angle-left"
  })]), _vm._v(" "), _c("v-btn", {
    staticClass: "ml-16",
    attrs: {
      small: "",
      color: "#000000"
    }
  }, [_c("i", {
    staticClass: "las la-angle-right"
  })])], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "mb-4 mt-16"
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "4"
    }
  }, [_c("product-item", {
    attrs: {
      title: "Producto 1",
      descripcion: "Ad nulla magna labore dolore cupidatat sit. Officia in commodo excepteur dolore consequat tempor consequat adipisicing id qui ullamco eu tempor. Quis enim velit non mollit deserunt. Et non esse do occaecat cupidatat. Non adipisicing ullamco est sit velit laborum fugiat et occaecat ipsum ut et. Amet aliqua laboris cillum adipisicing dolor velit ad sint nisi aute culpa.",
      idItem: "1"
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
  })], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6 mt-16"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("h5", [_vm._v("H5")]), _vm._v(" "), _c("v-row", [_c("v-col", {
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
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("v-tab-item", [_c("v-container", {
    attrs: {
      fluid: ""
    }
  }, [_c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-tabs", {
    attrs: {
      slides: _vm.sliderSeeder,
      showbutton: false
    }
  })], 1)], 1), _vm._v(" "), _c("v-row", [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("v-card", {
    attrs: {
      flat: ""
    }
  }, [_c("div", {
    staticClass: "mb-4"
  }, [_c("h5", [_vm._v("Producto con Carousel")]), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("presentation-banner", {
    attrs: {
      orientation: "right",
      slidesCarousel: _vm.sliderSeeder
    }
  })], 1)], 1)], 1)])], 1)], 1), _vm._v(" "), _c("v-row", {
    staticClass: "mb-6"
  }, [_c("v-col", {
    attrs: {
      cols: "12"
    }
  }, [_c("carousel-products", {
    attrs: {
      products: _vm.productsSeeder
    }
  })], 1)], 1)], 1)], 1)], 2), _vm._v(" "), _c("v-card", [_c("v-footer", {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 960px) {\n.swiper-container[data-v-6b3e0004] {\n    padding-bottom: 5rem;\n}\n}\n.swiper-container .swiper-button-prev[data-v-6b3e0004],\n.swiper-container .swiper-button-next[data-v-6b3e0004] {\n  top: calc(100% - 25px);\n}\n.swiper-container .swiper-button-prev[data-v-6b3e0004]::after,\n.swiper-container .swiper-button-next[data-v-6b3e0004]::after {\n  font-size: 16px;\n}\n@media (min-width: 600px) {\n.swiper-container .swiper-button-prev[data-v-6b3e0004] {\n    left: 20%;\n}\n.swiper-container .swiper-button-next[data-v-6b3e0004] {\n    right: 20%;\n}\n}\n.swiper-container[data-v-6b3e0004] .swiper-pagination-bullet {\n  background: #18191a;\n  opacity: 0.6;\n}\n.swiper-container[data-v-6b3e0004] .swiper-pagination-bullet-active {\n  opacity: 1;\n}\n.swiper-container .swiper-pagination-bullets[data-v-6b3e0004] {\n  width: 75%;\n  left: 12.5%;\n  display: flex;\n  justify-content: space-around;\n  bottom: 4%;\n}\n@media (min-width: 600px) {\n.swiper-container .swiper-pagination-bullets[data-v-6b3e0004] {\n    width: 40%;\n    left: 30%;\n}\n}\n@media (min-width: 960px) {\n.swiper-container .swiper-pagination[data-v-6b3e0004],\n  .swiper-container .swiper-button-prev[data-v-6b3e0004],\n  .swiper-container .swiper-button-next[data-v-6b3e0004] {\n    display: none;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (max-width: 960px) {\n.v-carousel[data-v-3c0b8d0f] {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n}\n.v-carousel[data-v-3c0b8d0f] .v-window__next,\n.v-carousel[data-v-3c0b8d0f] .v-window__prev {\n  top: calc(100% - 52px);\n  z-index: 2;\n  background: transparent;\n  border-radius: 0;\n}\n.v-carousel[data-v-3c0b8d0f] .v-window__next .v-btn,\n.v-carousel[data-v-3c0b8d0f] .v-window__prev .v-btn {\n  font-size: 20px;\n  height: 38px;\n  min-width: 38px;\n  padding: 0px;\n  border-radius: 5px;\n  opacity: 0.5;\n}\n.v-carousel[data-v-3c0b8d0f] .v-window__prev {\n  left: 60%;\n}\n.v-carousel[data-v-3c0b8d0f] .v-window__container {\n  height: 100% !important;\n}\n.v-carousel[data-v-3c0b8d0f] .v-carousel__controls {\n  background: transparent;\n  padding-right: 6%;\n  justify-content: end;\n  padding-bottom: 1%;\n}\n.v-carousel[data-v-3c0b8d0f] .v-carousel__controls .v-item-group {\n  width: 30%;\n  display: flex;\n  justify-content: space-around;\n}\n.v-carousel[data-v-3c0b8d0f] .v-carousel__controls .v-carousel__controls__item {\n  height: 8px;\n  width: 8px;\n  color: #000000;\n}\n.v-carousel[data-v-3c0b8d0f] .v-carousel__controls .v-carousel__controls__item.v-item--active {\n  color: #18191a;\n}\n.v-carousel[data-v-3c0b8d0f] .v-carousel__controls .v-carousel__controls__item.v-item--active:before {\n  opacity: 1;\n}\n.v-carousel[data-v-3c0b8d0f] .v-carousel__controls .v-carousel__controls__item:before {\n  opacity: 0.1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-item[data-v-5e544b60] {\n  border-radius: 10px;\n  background-color: #18191a;\n}\n.product-item-image[data-v-5e544b60] {\n  background-color: #242526;\n}\n.v-card[data-v-5e544b60] {\n  opacity: 0.4;\n  transition: opacity 0.2s ease-in-out;\n}\n.v-card[data-v-5e544b60]:not(.on-hover) {\n  opacity: 1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-item[data-v-5e7e91e3] {\n  border-radius: 10px;\n  background-color: #18191a;\n}\n.v-card[data-v-5e7e91e3] {\n  opacity: 0.3;\n  transition: opacity 0.4s ease-in-out;\n}\n.v-card[data-v-5e7e91e3]:not(.on-hover) {\n  opacity: 1;\n}\n.show-btns[data-v-5e7e91e3] {\n  color: rgb(255, 255, 255) !important;\n}\n.subtitle2[data-v-5e7e91e3] {\n  font-size: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".space-item[data-v-7e6fa578] {\n  border-radius: 10px;\n  background-color: #18191a;\n}\n.space-item-heading[data-v-7e6fa578] {\n  background-color: #18191a;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n}\n.space-item-image[data-v-7e6fa578] {\n  background-color: #242526;\n}\n.space-item-image[data-v-7e6fa578], .space-item-image > .v-image[data-v-7e6fa578] {\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n.v-card[data-v-7e6fa578] {\n  transition: opacity 0.4s ease-in-out;\n}\n.v-card[data-v-7e6fa578]:not(.on-hover) {\n  opacity: 0%;\n}\n.show-btns[data-v-7e6fa578] {\n  color: rgb(255, 255, 255) !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[data-v-884ab714] .theme--dark.v-tabs-items {\n  background-color: #000000;\n}\n@media (min-width: 1264px) {\n.v-toolbar__content[data-v-884ab714],\n  .v-toolbar__extension[data-v-884ab714] {\n    padding: 4px 24px;\n}\n}\n.v-tab--active[data-v-884ab714] {\n  color: white;\n}\n.v-input__slot[data-v-884ab714],\n.v-text-field__slot[data-v-884ab714] {\n  min-height: 38px;\n}\n.layout-navbar-spaces[data-v-884ab714] {\n  position: sticky;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/CarouselSpaces.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/global/CarouselSpaces.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselSpaces_vue_vue_type_template_id_6b3e0004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true& */ "./resources/js/components/global/CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true&");
/* harmony import */ var _CarouselSpaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselSpaces.vue?vue&type=script&lang=js& */ "./resources/js/components/global/CarouselSpaces.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarouselSpaces_vue_vue_type_style_index_0_id_6b3e0004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true& */ "./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarouselSpaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselSpaces_vue_vue_type_template_id_6b3e0004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselSpaces_vue_vue_type_template_id_6b3e0004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b3e0004",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/CarouselSpaces.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/CarouselSpaces.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselSpaces.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselSpaces.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_style_index_0_id_6b3e0004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=style&index=0&id=6b3e0004&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_style_index_0_id_6b3e0004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_style_index_0_id_6b3e0004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_style_index_0_id_6b3e0004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_style_index_0_id_6b3e0004_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_template_id_6b3e0004_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselSpaces.vue?vue&type=template&id=6b3e0004&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_template_id_6b3e0004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselSpaces_vue_vue_type_template_id_6b3e0004_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/CarouselTabs.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/CarouselTabs.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselTabs_vue_vue_type_template_id_3c0b8d0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true& */ "./resources/js/components/global/CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true&");
/* harmony import */ var _CarouselTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselTabs.vue?vue&type=script&lang=js& */ "./resources/js/components/global/CarouselTabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarouselTabs_vue_vue_type_style_index_0_id_3c0b8d0f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true& */ "./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarouselTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselTabs_vue_vue_type_template_id_3c0b8d0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselTabs_vue_vue_type_template_id_3c0b8d0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c0b8d0f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/CarouselTabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/CarouselTabs.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/CarouselTabs.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselTabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_style_index_0_id_3c0b8d0f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=style&index=0&id=3c0b8d0f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_style_index_0_id_3c0b8d0f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_style_index_0_id_3c0b8d0f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_style_index_0_id_3c0b8d0f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_style_index_0_id_3c0b8d0f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_template_id_3c0b8d0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselTabs.vue?vue&type=template&id=3c0b8d0f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_template_id_3c0b8d0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselTabs_vue_vue_type_template_id_3c0b8d0f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/ProductItem1.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/ProductItem1.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductItem1_vue_vue_type_template_id_5e544b60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true& */ "./resources/js/components/global/ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true&");
/* harmony import */ var _ProductItem1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem1.vue?vue&type=script&lang=js& */ "./resources/js/components/global/ProductItem1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductItem1_vue_vue_type_style_index_0_id_5e544b60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true& */ "./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductItem1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductItem1_vue_vue_type_template_id_5e544b60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductItem1_vue_vue_type_template_id_5e544b60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e544b60",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/ProductItem1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/ProductItem1.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem1.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_style_index_0_id_5e544b60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=style&index=0&id=5e544b60&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_style_index_0_id_5e544b60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_style_index_0_id_5e544b60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_style_index_0_id_5e544b60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_style_index_0_id_5e544b60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_template_id_5e544b60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem1.vue?vue&type=template&id=5e544b60&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_template_id_5e544b60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem1_vue_vue_type_template_id_5e544b60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/ProductItem4.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/ProductItem4.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductItem4_vue_vue_type_template_id_5e7e91e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true& */ "./resources/js/components/global/ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true&");
/* harmony import */ var _ProductItem4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem4.vue?vue&type=script&lang=js& */ "./resources/js/components/global/ProductItem4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductItem4_vue_vue_type_style_index_0_id_5e7e91e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true& */ "./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductItem4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductItem4_vue_vue_type_template_id_5e7e91e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductItem4_vue_vue_type_template_id_5e7e91e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e7e91e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/ProductItem4.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/ProductItem4.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem4.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem4.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_style_index_0_id_5e7e91e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=style&index=0&id=5e7e91e3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_style_index_0_id_5e7e91e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_style_index_0_id_5e7e91e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_style_index_0_id_5e7e91e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_style_index_0_id_5e7e91e3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_template_id_5e7e91e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/ProductItem4.vue?vue&type=template&id=5e7e91e3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_template_id_5e7e91e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem4_vue_vue_type_template_id_5e7e91e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/SpaceItem.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/global/SpaceItem.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpaceItem_vue_vue_type_template_id_7e6fa578_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true& */ "./resources/js/components/global/SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true&");
/* harmony import */ var _SpaceItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpaceItem.vue?vue&type=script&lang=js& */ "./resources/js/components/global/SpaceItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SpaceItem_vue_vue_type_style_index_0_id_7e6fa578_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true& */ "./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SpaceItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpaceItem_vue_vue_type_template_id_7e6fa578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SpaceItem_vue_vue_type_template_id_7e6fa578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7e6fa578",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/SpaceItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/SpaceItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/global/SpaceItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_style_index_0_id_7e6fa578_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=style&index=0&id=7e6fa578&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_style_index_0_id_7e6fa578_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_style_index_0_id_7e6fa578_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_style_index_0_id_7e6fa578_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_style_index_0_id_7e6fa578_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/global/SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_template_id_7e6fa578_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/SpaceItem.vue?vue&type=template&id=7e6fa578&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_template_id_7e6fa578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SpaceItem_vue_vue_type_template_id_7e6fa578_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/Spaces.vue":
/*!***************************************!*\
  !*** ./resources/js/pages/Spaces.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Spaces_vue_vue_type_template_id_884ab714_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Spaces.vue?vue&type=template&id=884ab714&scoped=true& */ "./resources/js/pages/Spaces.vue?vue&type=template&id=884ab714&scoped=true&");
/* harmony import */ var _Spaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spaces.vue?vue&type=script&lang=js& */ "./resources/js/pages/Spaces.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Spaces_vue_vue_type_style_index_0_id_884ab714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true& */ "./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Spaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Spaces_vue_vue_type_template_id_884ab714_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Spaces_vue_vue_type_template_id_884ab714_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "884ab714",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Spaces.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Spaces.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/pages/Spaces.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Spaces.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_style_index_0_id_884ab714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=style&index=0&id=884ab714&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_style_index_0_id_884ab714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_style_index_0_id_884ab714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_style_index_0_id_884ab714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_style_index_0_id_884ab714_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/Spaces.vue?vue&type=template&id=884ab714&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Spaces.vue?vue&type=template&id=884ab714&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_template_id_884ab714_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Spaces.vue?vue&type=template&id=884ab714&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Spaces.vue?vue&type=template&id=884ab714&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_template_id_884ab714_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Spaces_vue_vue_type_template_id_884ab714_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/seeders/products.js":
/*!******************************************!*\
  !*** ./resources/js/seeders/products.js ***!
  \******************************************/
/*! exports provided: sliderSeeder, productsSeeder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderSeeder", function() { return sliderSeeder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsSeeder", function() { return productsSeeder; });
var sliderSeeder = [{
  src: "https://picsum.photos/1920/1080?random=1",
  type: "image"
}, {
  src: "https://picsum.photos/1920/1080?random=2",
  type: "image"
}, {
  src: "https://picsum.photos/1920/1080?random=3",
  type: "image"
}, {
  src: "/public/assets/video/product-example.mp4",
  type: "video"
}, {
  src: "https://www.youtube.com/embed/UWtzv9-b6yI",
  type: "iframe"
}];
var productsSeeder = [{
  id: "1",
  name: "Titulo",
  img: "https://picsum.photos/500/300?random=1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum."
}, {
  id: "2",
  name: "Titulo 2",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=2"
}, {
  id: "3",
  name: "Titulo 3",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=3"
}, {
  id: "4",
  name: "Titulo 4",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=4"
}, {
  id: "5",
  name: "Titulo 5",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=5"
}, {
  id: "6",
  name: "Titulo 6",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=6"
}, {
  id: "7",
  name: "Titulo 7",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=7"
}, {
  id: "8",
  name: "Titulo 8",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=8"
}, {
  id: "9",
  name: "Titulo 9",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  img: "https://picsum.photos/500/300?random=9"
}];


/***/ }),

/***/ "./resources/js/seeders/spaces.js":
/*!****************************************!*\
  !*** ./resources/js/seeders/spaces.js ***!
  \****************************************/
/*! exports provided: spacesSeeder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacesSeeder", function() { return spacesSeeder; });
var spacesSeeder = [{
  id: "1",
  name: "Espacio",
  description: "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
  img: "https://picsum.photos/610/720?random=1"
}, {
  id: "2",
  name: "Espacio 2",
  description: "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
  img: "https://picsum.photos/610/720?random=2"
}, {
  id: "3",
  name: "Espacio 3",
  description: "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
  img: "https://picsum.photos/610/720?random=3"
}, {
  id: "4",
  name: "Espacio 4",
  description: "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
  img: "https://picsum.photos/610/720?random=4"
}, {
  id: "5",
  name: "Espacio 5",
  description: "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text.",
  img: "https://picsum.photos/610/720?random=5"
}];


/***/ })

}]);