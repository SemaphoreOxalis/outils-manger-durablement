(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    origins: Array,
    productToAdd: Object
  },
  watch: {
    productToAdd: function productToAdd(newProduct) {
      if (this.basket.isSelected) {
        this.addProduct(newProduct);
      }
    }
  },
  computed: {
    productCounter: function productCounter() {
      if (this.basket.products.length > 0) {
        return Math.max.apply(Math, _toConsumableArray(this.basket.products.map(function (product) {
          return product.id;
        })));
      } else {
        return 0;
      }
    }
  },
  created: function created() {
    events.$on('get-internal-counters', this.sendInternalCounter);
  },
  methods: {
    addProduct: function addProduct(product) {
      var tempProd = _objectSpread({}, product);

      tempProd.id = this.productCounter + 1;
      this.basket.products.push(tempProd);
      this.sendInternalCounter();
    },
    removeProduct: function removeProduct(productIndex) {
      this.basket.products.splice(productIndex, 1);
    },
    deleteBasket: function deleteBasket() {
      this.$emit('delete-basket', this.index);
    },
    copyBasket: function copyBasket() {
      this.$emit('copy-basket', this.basket);
    },
    sendInternalCounter: function sendInternalCounter() {
      events.$emit('internal-counters', this.basket.id, this.productCounter);
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
  return _c("div", { staticClass: "flex-grow-1" }, [
    _c("div", [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.basket.isSelected,
            expression: "basket.isSelected"
          }
        ],
        attrs: { type: "checkbox" },
        domProps: {
          checked: Array.isArray(_vm.basket.isSelected)
            ? _vm._i(_vm.basket.isSelected, null) > -1
            : _vm.basket.isSelected
        },
        on: {
          change: function($event) {
            var $$a = _vm.basket.isSelected,
              $$el = $event.target,
              $$c = $$el.checked ? true : false
            if (Array.isArray($$a)) {
              var $$v = null,
                $$i = _vm._i($$a, $$v)
              if ($$el.checked) {
                $$i < 0 && _vm.$set(_vm.basket, "isSelected", $$a.concat([$$v]))
              } else {
                $$i > -1 &&
                  _vm.$set(
                    _vm.basket,
                    "isSelected",
                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                  )
              }
            } else {
              _vm.$set(_vm.basket, "isSelected", $$c)
            }
          }
        }
      }),
      _vm._v(" Ajouter dans ce panier\n    ")
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex" }, [
      _c("h5", { staticClass: "text-center" }, [
        _vm._v(_vm._s(_vm.basket.name))
      ]),
      _vm._v(" "),
      _c("button", { on: { click: _vm.copyBasket } }, [_vm._v("copy")])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "flex" }, [
      _c("button", { on: { click: _vm.deleteBasket } }, [_vm._v("X")])
    ]),
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
              value: _vm.basket.products,
              callback: function($$v) {
                _vm.$set(_vm.basket, "products", $$v)
              },
              expression: "basket.products"
            }
          },
          _vm._l(_vm.basket.products, function(product, i) {
            return _c("basket-product", {
              key: product.id,
              attrs: { product: product, index: i, origins: _vm.origins },
              on: { "remove-product": _vm.removeProduct }
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