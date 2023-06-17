(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[90],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shop/ShopActionCard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global/CustomButton.vue */ "./resources/js/components/global/CustomButton.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ShopActionCard",
  props: {
    title: {
      type: String,
      "default": "Titulo"
    },
    img: String,
    description: {
      type: String,
      "default": "Incluye Lorem Ipsum is simply dummy text of the printing"
    },
    href: {
      type: String,
      "default": "#"
    },
    to: {
      type: [String, Object]
    },
    boxStyle: {
      type: String,
      "default": "horizontal"
    }
  },
  components: {
    CustomButton: _global_CustomButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shop/ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true& ***!
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
    staticClass: "shop-action-card",
    "class": _vm.boxStyle == "vertical" ? "vertical" : "pa-3 pa-sm-6",
    on: {
      click: function click($event) {
        $event.stopPropagation();
        return _vm.$emit("click");
      }
    }
  }, [_vm.img ? _c("img", {
    staticClass: "shop-action-card-image",
    "class": _vm.boxStyle != "vertical" ? "mr-5" : "",
    attrs: {
      src: _vm.img
    }
  }) : _c("img", {
    staticClass: "shop-action-card-image placeholder",
    "class": _vm.boxStyle != "vertical" ? "mr-5" : "",
    attrs: {
      src: "/public/assets/img/item-placeholder.png"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "shop-action-card-body",
    "class": _vm.boxStyle == "vertical" ? "pa-3 pa-sm-6" : ""
  }, [_c("h6", {
    staticClass: "shop-action-card-title mb-3"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("p", {
    staticClass: "shop-action-card-description body1 mb-4"
  }, [_vm._v(_vm._s(_vm.description))]), _vm._v(" "), _c("CustomButton", {
    staticClass: "shop-action-card-btn",
    attrs: {
      text: "Acción",
      plain: "",
      href: _vm.href,
      to: _vm.to
    }
  })], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--dark.v-application .shop-action-card[data-v-e3dfcc4c] {\n  background-color: #18191a;\n}\n.shop-action-card[data-v-e3dfcc4c] {\n  display: flex;\n  align-items: center;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.shop-action-card[data-v-e3dfcc4c]:not(.vertical) {\n  cursor: pointer;\n}\n.shop-action-card[data-v-e3dfcc4c]:not(.vertical):hover {\n  background-color: #dfdfdf;\n}\n.shop-action-card.vertical[data-v-e3dfcc4c] {\n  height: 100%;\n  flex-direction: column;\n}\n.shop-action-card.vertical .shop-action-card-image[data-v-e3dfcc4c] {\n  width: 100%;\n  height: 30vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.shop-action-card.vertical .shop-action-card-image.placeholder[data-v-e3dfcc4c] {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.shop-action-card-image[data-v-e3dfcc4c] {\n  height: 100px;\n  width: 100px;\n}\n.shop-action-card-title[data-v-e3dfcc4c] {\n  font-size: 15px;\n  line-height: calc(18px + 6 * var(--screen-size));\n  font-weight: 700;\n  letter-spacing: 0;\n  text-transform: uppercase;\n}\n.shop-action-card-btn[data-v-e3dfcc4c] {\n  font-size: var(--font-size-caption);\n  letter-spacing: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true&");

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

/***/ "./resources/js/components/shop/ShopActionCard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/shop/ShopActionCard.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopActionCard_vue_vue_type_template_id_e3dfcc4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true& */ "./resources/js/components/shop/ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true&");
/* harmony import */ var _ShopActionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopActionCard.vue?vue&type=script&lang=js& */ "./resources/js/components/shop/ShopActionCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShopActionCard_vue_vue_type_style_index_0_id_e3dfcc4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true& */ "./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShopActionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopActionCard_vue_vue_type_template_id_e3dfcc4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopActionCard_vue_vue_type_template_id_e3dfcc4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e3dfcc4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/shop/ShopActionCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/shop/ShopActionCard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/shop/ShopActionCard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopActionCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_style_index_0_id_e3dfcc4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=style&index=0&id=e3dfcc4c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_style_index_0_id_e3dfcc4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_style_index_0_id_e3dfcc4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_style_index_0_id_e3dfcc4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_style_index_0_id_e3dfcc4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/shop/ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/shop/ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_template_id_e3dfcc4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/shop/ShopActionCard.vue?vue&type=template&id=e3dfcc4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_template_id_e3dfcc4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopActionCard_vue_vue_type_template_id_e3dfcc4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
  base_price: 100,
  name: "Titulo",
  thumbnail_image: "https://picsum.photos/500/300?random=1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum."
}, {
  id: "2",
  base_price: 100,
  name: "Titulo 2",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=2"
}, {
  id: "3",
  base_price: 100,
  name: "Titulo 3",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=3"
}, {
  id: "4",
  base_price: 100,
  name: "Titulo 4",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=4"
}, {
  id: "5",
  base_price: 100,
  name: "Titulo 5",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=5"
}, {
  id: "6",
  base_price: 100,
  name: "Titulo 6",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=6"
}, {
  id: "7",
  base_price: 100,
  name: "Titulo 7",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=7"
}, {
  id: "8",
  base_price: 100,
  name: "Titulo 8",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=8"
}, {
  id: "9",
  base_price: 100,
  name: "Titulo 9",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nesciunt fuga minima tenetur. Dicta quos voluptates alias aliquam, dignissimos culpa ratione illum atque accusantium ipsum nobis itaque nihil sunt? Harum.",
  thumbnail_image: "https://picsum.photos/500/300?random=9"
}];


/***/ })

}]);