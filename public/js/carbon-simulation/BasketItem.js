(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var BasketProduct = function BasketProduct() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/BasketProduct */ "js/carbon-simulation/BasketProduct").then(__webpack_require__.bind(null, /*! ./BasketProduct */ "./resources/js/components/carbon-simulation/BasketProduct.vue"));
};

var draggable = function draggable() {
  return __webpack_require__.e(/*! import() | js/draggable */ "vendors~js/draggable").then(__webpack_require__.t.bind(null, /*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js", 7));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BasketProduct: BasketProduct,
    draggable: draggable
  },
  props: {
    basket: Object,
    index: Number,
    origins: Array
  },
  data: function data() {
    return {
      products: [],
      counter: 0
    };
  },
  created: function created() {
    this.refreshCounter();
    events.$on('refresh-counters', this.refreshCounter);
    events.$on('increment-counters', this.incrementCounter);
    events.$on('add-products-to-selected-baskets', this.addProduct);
  },
  methods: {
    refreshCounter: function refreshCounter() {
      if (this.products.length > 0) {
        this.counter = Math.max.apply(Math, _toConsumableArray(this.products.map(function (product) {
          return product.id;
        })));
      } else {
        this.counter = 0;
      }
    },
    incrementCounter: function incrementCounter() {
      this.counter++;
    },
    addProduct: function addProduct(product) {
      if (this.basket.selected) {
        this.products.push(product);
      }
    },
    remove: function remove(productIndex) {
      this.products.splice(productIndex, 1);
      this.refreshCounter();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=template&id=76d1dfe8&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=template&id=76d1dfe8& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h3", [_vm._v(_vm._s(_vm.basket.name))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "right col-12" },
      [
        _c(
          "draggable",
          {
            staticClass: "dragArea list-group h-100",
            attrs: { group: "draggableProducts", animation: 150 },
            model: {
              value: _vm.products,
              callback: function($$v) {
                _vm.products = $$v
              },
              expression: "products"
            }
          },
          _vm._l(_vm.products, function(product, index) {
            return _c("basket-product", {
              key: product.id,
              attrs: { product: product, index: index, origins: _vm.origins },
              on: { "remove-product": _vm.remove }
            })
          }),
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketItem.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketItem.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasketItem_vue_vue_type_template_id_76d1dfe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasketItem.vue?vue&type=template&id=76d1dfe8& */ "./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=template&id=76d1dfe8&");
/* harmony import */ var _BasketItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketItem.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasketItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasketItem_vue_vue_type_template_id_76d1dfe8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasketItem_vue_vue_type_template_id_76d1dfe8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/BasketItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=template&id=76d1dfe8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=template&id=76d1dfe8& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketItem_vue_vue_type_template_id_76d1dfe8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketItem.vue?vue&type=template&id=76d1dfe8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=template&id=76d1dfe8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketItem_vue_vue_type_template_id_76d1dfe8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketItem_vue_vue_type_template_id_76d1dfe8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);