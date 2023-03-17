(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CustomButton",
  props: {
    text: String,
    width: String,
    icon: {
      type: String
    },
    dark: {
      type: Boolean,
      "default": false
    },
    light: {
      type: Boolean,
      "default": false
    },
    color: {
      type: String
    },
    outlined: {
      type: Boolean,
      "default": false
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    block: {
      type: Boolean,
      "default": false
    },
    plain: {
      type: Boolean,
      "default": false
    },
    href: {
      type: [String, Object]
    },
    to: {
      type: [String, Object]
    },
    loading: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/NotificationCart2.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Notification2",
  components: {
    CustomButton: _CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    id: {
      type: String,
      "default": "Sin Asignar"
    },
    img: {
      type: String,
      "default": "/public/assets/img/carousel-item-placeholder.png"
    },
    title: {
      type: String,
      "default": "Sin Asignar"
    },
    date: {
      type: String,
      "default": "Sin Asignar"
    },
    remitent: {
      type: String,
      "default": "Sin Asignar"
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Notification2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_global_NotificationCart2_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/global/NotificationCart2.vue */ "./resources/js/components/global/NotificationCart2.vue");
/* harmony import */ var _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/global/Carousel.vue */ "./resources/js/components/global/Carousel.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NotificationCart2: _components_global_NotificationCart2_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Carousel: _components_global_Carousel_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true& ***!
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
  return _c("v-btn", {
    staticClass: "text-uppercase",
    attrs: {
      block: _vm.block,
      color: _vm.color,
      dark: _vm.dark,
      disabled: _vm.disabled,
      href: _vm.href,
      light: _vm.light,
      loading: _vm.loading,
      outlined: _vm.outlined,
      plain: _vm.plain,
      ripple: false,
      to: _vm.to,
      width: _vm.width,
      depressed: ""
    },
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("click");
      }
    }
  }, [_vm.icon ? _c("i", {
    staticClass: "mr-3",
    "class": "las ".concat(_vm.icon)
  }) : _vm._e(), _vm._v(" "), _vm.text ? [_vm._v(_vm._s(_vm.text))] : [_vm._t("default")]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "cart"
  }, [_c("div", {
    staticClass: "div-container"
  }, [_c("div", {
    staticClass: "div-img"
  }, [_c("div", [_c("v-img", {
    attrs: {
      "max-width": "100px",
      src: _vm.img
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "div-not1"
  }, [_c("h6", {
    staticClass: "black--text bold"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("div", {
    staticClass: "div-not1-1"
  }, [_c("div", [_c("span", {
    staticClass: "black--text body2"
  }, [_vm._v("Fecha")]), _vm._v(" "), _c("span", {
    staticClass: "black--text body2"
  }, [_vm._v(_vm._s(_vm.date))])]), _vm._v(" "), _c("div", [_c("span", {
    staticClass: "black--text bold body2"
  }, [_vm._v("Envíado")]), _vm._v(" "), _c("span", {
    staticClass: "black--text body2"
  }, [_vm._v(_vm._s(_vm.remitent))])])])]), _vm._v(" "), _c("div", {
    staticClass: "div-not2"
  }, [_c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "d-none d-sm-block"
  }, [_c("div", {
    staticClass: "div-not2-1"
  }, [_c("custom-button", {
    attrs: {
      icon: "la-trash"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "d-sm-none div-not2-1"
  }, [_c("custom-button", {
    attrs: {
      icon: "la-ellipsis-v"
    }
  })], 1)])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=template&id=37117e28&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Notification2.vue?vue&type=template&id=37117e28&scoped=true& ***!
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
  return _c("v-container", [_c("div", [_c("div", {
    staticClass: "data-notification"
  }, [_c("notification-cart2", {
    attrs: {
      id: "1",
      title: "Titulo de mensaje",
      date: "02 de Julio de 2022",
      remitent: "correo@idovela.com"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "divider"
  }), _vm._v(" "), _c("div", {
    staticClass: "data-container"
  }, [_c("h6", {
    staticClass: "notification-subtitle"
  }, [_vm._v("Subtitulo 2")]), _vm._v(" "), _c("p", {
    staticClass: "notification-data"
  }, [_vm._v("\n                Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •\n                Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's •\n                Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing •\n                Lorem Ipsum has been the industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem\n                Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem\n                Ipsum has been the industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply\n                dummy text of the printing • Lorem Ipsum has been the industry's • Lorem Ipsum has been the\n                industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the\n                industry's Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the\n                industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the\n                industry's • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the\n                printing • Lorem Ipsum has been the industry's\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "data-container"
  }, [_c("h6", {
    staticClass: "notification-subtitle"
  }, [_vm._v("Subtitulo 2")]), _vm._v(" "), _c("carousel")], 1)])]);
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-btn[data-v-20cea0d8] {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 1.25px;\n  transition: all 0.2s ease-in-out;\n  border-radius: 5px;\n}\n.v-btn[data-v-20cea0d8]:before {\n  content: unset;\n}\n@media (min-width: 960px) {\n.v-btn[data-v-20cea0d8] {\n    font-size: 12px;\n}\n}\n.v-btn i[data-v-20cea0d8] {\n  font-size: 20px;\n}\n.v-btn[data-v-20cea0d8]:hover:before, .v-btn[data-v-20cea0d8]:focus:before {\n  opacity: 1;\n}\n.v-btn.v-size--default[data-v-20cea0d8] {\n  height: 38px !important;\n}\n.v-btn[data-v-20cea0d8] .v-btn__content {\n  margin-top: 3px;\n}\n.v-btn.grey[data-v-20cea0d8] {\n  color: #000;\n  background-color: rgba(223, 223, 223, 0.5) !important;\n}\n.v-btn.grey[data-v-20cea0d8]:hover {\n  color: #fff;\n  background-color: rgba(67, 67, 67, 0.8) !important;\n}\n.v-btn.grey[data-v-20cea0d8]:focus {\n  color: #fff;\n  background-color: #161616 !important;\n}\n.v-btn.black[data-v-20cea0d8] {\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.v-btn.black[data-v-20cea0d8]:hover {\n  background-color: rgba(133, 133, 133, 0.8);\n}\n.v-btn.black[data-v-20cea0d8]:focus {\n  background-color: #161616;\n}\n.v-btn.nero[data-v-20cea0d8] {\n  color: #ffffff;\n  background-color: #858585;\n}\n.v-btn.nero[data-v-20cea0d8]:hover {\n  background-color: rgba(67, 67, 67, 0.8);\n}\n.v-btn.nero[data-v-20cea0d8]:focus {\n  background-color: #161616;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".div-container[data-v-f5a935b4] {\n  display: flex;\n  width: 100%;\n  align-content: center;\n}\n.div-not1[data-v-f5a935b4] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 0px 10px;\n  width: 100%;\n  flex-wrap: wrap;\n}\n.div-not1-1[data-v-f5a935b4] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n@media (max-width: 599px) {\n.div-not1-1[data-v-f5a935b4] {\n    display: flex;\n    flex-direction: column;\n}\n}\n.div-not2[data-v-f5a935b4] {\n  display: flex;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.div-not2-1[data-v-f5a935b4] {\n  display: flex;\n}\n.cart[data-v-f5a935b4] {\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  padding: 10px;\n}\n.div-img[data-v-f5a935b4] {\n  background-color: #dfdfdf;\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.divider[data-v-f5a935b4] {\n  background-color: #dfdfdf;\n  width: 2px;\n  height: 80px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".data-notification[data-v-37117e28] {\n  width: 100%;\n}\n.data-container[data-v-37117e28] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n}\n.divider[data-v-37117e28] {\n  background-color: #ffffff;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  width: 100%;\n  height: 2px;\n}\n.notification-data[data-v-37117e28] {\n  font: normal normal normal 15px/24px Roboto;\n}\n.notification-subtitle[data-v-37117e28] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.notification-img[data-v-37117e28] {\n  background-color: #f5f5f5;\n}", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/CustomButton.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/global/CustomButton.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomButton_vue_vue_type_template_id_20cea0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true& */ "./resources/js/components/global/CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true&");
/* harmony import */ var _CustomButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomButton.vue?vue&type=script&lang=js& */ "./resources/js/components/global/CustomButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CustomButton_vue_vue_type_style_index_0_id_20cea0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true& */ "./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CustomButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CustomButton_vue_vue_type_template_id_20cea0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CustomButton_vue_vue_type_template_id_20cea0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20cea0d8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/CustomButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/CustomButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/global/CustomButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_style_index_0_id_20cea0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=style&index=0&id=20cea0d8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_style_index_0_id_20cea0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_style_index_0_id_20cea0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_style_index_0_id_20cea0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_style_index_0_id_20cea0d8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/global/CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_template_id_20cea0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CustomButton.vue?vue&type=template&id=20cea0d8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_template_id_20cea0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomButton_vue_vue_type_template_id_20cea0d8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/global/NotificationCart2.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/global/NotificationCart2.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationCart2_vue_vue_type_template_id_f5a935b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true& */ "./resources/js/components/global/NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true&");
/* harmony import */ var _NotificationCart2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationCart2.vue?vue&type=script&lang=js& */ "./resources/js/components/global/NotificationCart2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NotificationCart2_vue_vue_type_style_index_0_id_f5a935b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true& */ "./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NotificationCart2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationCart2_vue_vue_type_template_id_f5a935b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationCart2_vue_vue_type_template_id_f5a935b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f5a935b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/NotificationCart2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/NotificationCart2.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/global/NotificationCart2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationCart2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_style_index_0_id_f5a935b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=style&index=0&id=f5a935b4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_style_index_0_id_f5a935b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_style_index_0_id_f5a935b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_style_index_0_id_f5a935b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_style_index_0_id_f5a935b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/global/NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_template_id_f5a935b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/NotificationCart2.vue?vue&type=template&id=f5a935b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_template_id_f5a935b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationCart2_vue_vue_type_template_id_f5a935b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/user/Notification2.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/user/Notification2.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification2_vue_vue_type_template_id_37117e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification2.vue?vue&type=template&id=37117e28&scoped=true& */ "./resources/js/pages/user/Notification2.vue?vue&type=template&id=37117e28&scoped=true&");
/* harmony import */ var _Notification2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification2.vue?vue&type=script&lang=js& */ "./resources/js/pages/user/Notification2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Notification2_vue_vue_type_style_index_0_id_37117e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true& */ "./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Notification2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification2_vue_vue_type_template_id_37117e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification2_vue_vue_type_template_id_37117e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "37117e28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/user/Notification2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/user/Notification2.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/user/Notification2.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_style_index_0_id_37117e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=style&index=0&id=37117e28&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_style_index_0_id_37117e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_style_index_0_id_37117e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_style_index_0_id_37117e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_style_index_0_id_37117e28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/user/Notification2.vue?vue&type=template&id=37117e28&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/pages/user/Notification2.vue?vue&type=template&id=37117e28&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_template_id_37117e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Notification2.vue?vue&type=template&id=37117e28&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/user/Notification2.vue?vue&type=template&id=37117e28&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_template_id_37117e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification2_vue_vue_type_template_id_37117e28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);