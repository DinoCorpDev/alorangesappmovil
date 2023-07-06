(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselDescription.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CarouselDescription",
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
    },
    title: {
      type: String,
      "default": "H4"
    },
    description: {
      type: String,
      "default": "Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has been the industry's • Incluye Lorem Ipsum is simply dummy text of the printing • Lorem Ipsum has"
    },
    hashtags: {
      type: Array,
      "default": function _default() {
        return ["Instalaciones", "Mantenimiento", "Planes"];
      }
    }
  },
  data: function data() {
    return {
      itemPlaceholderUrl: "/public/assets/img/carousel-item-placeholder.png"
    };
  },
  computed: {
    carouselHeight: function carouselHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "570";
        case "sm":
          return "440";
        case "md":
          return "440";
        case "lg":
          return "850";
        case "xl":
          return "850";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
      "hide-delimiters": _vm.hideDelimiters,
      "show-arrows": _vm.showArrows,
      height: _vm.carouselHeight
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
    }, [_c("img", {
      staticClass: "carousel-item-img",
      attrs: {
        src: slide.src
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "carousel-body white--text"
    }, [_c("h4", {
      staticClass: "carousel-title text-uppercase mb-3"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("p", {
      staticClass: "carousel-description mb-5"
    }, [_vm._v(_vm._s(_vm.description))]), _vm._v(" "), _c("div", {
      staticClass: "carousel-hashtags"
    }, _vm._l(_vm.hashtags, function (hashtag, i) {
      return _c("span", {
        key: i,
        staticClass: "hashtag"
      }, [_vm._v("\n                        # " + _vm._s(hashtag) + "\n                        "), i < _vm.hashtags.length - 1 ? _c("span", [_vm._v("•")]) : _vm._e()]);
    }), 0)])]);
  }) : _c("v-carousel-item", [_c("img", {
    staticClass: "carousel-item-img placeholder",
    attrs: {
      src: _vm.itemPlaceholderUrl
    }
  })])], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-carousel[data-v-5eb4487b] {\n  border-radius: 10px;\n  background: #dfdfdf;\n}\n.v-carousel[data-v-5eb4487b] .v-window__next,\n.v-carousel[data-v-5eb4487b] .v-window__prev {\n  top: calc(100% - 52px);\n  z-index: 2;\n  background: transparent;\n  border-radius: 0;\n}\n.v-carousel[data-v-5eb4487b] .v-window__next .v-btn,\n.v-carousel[data-v-5eb4487b] .v-window__prev .v-btn {\n  font-size: 20px;\n  height: 38px;\n  min-width: 38px;\n  padding: 0px;\n  border-radius: 5px;\n  opacity: 0.5;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__item::before {\n  content: \"\";\n  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 0) 100%);\n  height: 100%;\n  width: 100%;\n  opacity: 50%;\n  position: absolute;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__item img {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center;\n     object-position: center;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__item img.placeholder {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__controls {\n  background: transparent;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__controls .v-item-group {\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__controls .v-carousel__controls__item {\n  height: 8px;\n  width: 8px;\n  color: #000000;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__controls .v-carousel__controls__item.v-item--active {\n  color: #18191a;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__controls .v-carousel__controls__item.v-item--active:before {\n  opacity: 1;\n}\n.v-carousel[data-v-5eb4487b] .v-carousel__controls .v-carousel__controls__item:before {\n  opacity: 0.1;\n}\n.carousel-body[data-v-5eb4487b] {\n  position: absolute;\n  bottom: 5rem;\n  padding: 1rem 1.5rem;\n}\n.carousel-title[data-v-5eb4487b] {\n  font-size: 24px;\n  line-height: 30px;\n  font-weight: 400;\n  letter-spacing: 0.25px;\n  text-transform: uppercase;\n}\n@media (min-width: 600px) {\n.carousel-title[data-v-5eb4487b] {\n    font-size: 34px;\n    line-height: 43px;\n}\n}\n.carousel-description[data-v-5eb4487b] {\n  font-size: 12px;\n  line-height: 18px;\n  font-weight: 400;\n  font-family: \"Roboto\";\n  letter-spacing: 0.5px;\n}\n@media (min-width: 600px) {\n.carousel-description[data-v-5eb4487b] {\n    font-size: 15px;\n}\n}\n.carousel-hashtags[data-v-5eb4487b] {\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 600;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/global/CarouselDescription.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/global/CarouselDescription.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarouselDescription_vue_vue_type_template_id_5eb4487b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true& */ "./resources/js/components/global/CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true&");
/* harmony import */ var _CarouselDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarouselDescription.vue?vue&type=script&lang=js& */ "./resources/js/components/global/CarouselDescription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CarouselDescription_vue_vue_type_style_index_0_id_5eb4487b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true& */ "./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CarouselDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarouselDescription_vue_vue_type_template_id_5eb4487b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarouselDescription_vue_vue_type_template_id_5eb4487b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5eb4487b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/global/CarouselDescription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/global/CarouselDescription.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselDescription.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselDescription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_style_index_0_id_5eb4487b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=style&index=0&id=5eb4487b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_style_index_0_id_5eb4487b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_style_index_0_id_5eb4487b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_style_index_0_id_5eb4487b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_style_index_0_id_5eb4487b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/global/CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/global/CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_template_id_5eb4487b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/global/CarouselDescription.vue?vue&type=template&id=5eb4487b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_template_id_5eb4487b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_CarouselDescription_vue_vue_type_template_id_5eb4487b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);