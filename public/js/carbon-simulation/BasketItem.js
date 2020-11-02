(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/carbon-simulation/searchBar */ "./resources/js/helpers/carbon-simulation/searchBar.js");
/* harmony import */ var _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/carbonSimulator/BasketSimulatorText */ "./resources/texts/carbonSimulator/BasketSimulatorText.js");
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

var BasketResult = function BasketResult() {
  return Promise.all(/*! import() | js/carbon-simulation/BasketResult */[__webpack_require__.e("vendors~js/carbon-simulation/BasketResult"), __webpack_require__.e("js/carbon-simulation/BasketResult")]).then(__webpack_require__.bind(null, /*! ./BasketResult */ "./resources/js/components/carbon-simulation/BasketResult.vue"));
};

var draggable = function draggable() {
  return __webpack_require__.e(/*! import() | js/draggable */ "vendors~js/draggable").then(__webpack_require__.t.bind(null, /*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js", 7));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BasketProduct: BasketProduct,
    BasketResult: BasketResult,
    draggable: draggable
  },
  mixins: [_helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__["default"], _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: {
    basket: Object,
    index: Number,
    origins: Array,
    categories: Array,
    productToAdd: Object,
    previousBasket: Object,
    firstBasket: Object,
    compareToPreviousBasket: Boolean
  },
  data: function data() {
    return {
      search: ''
    };
  },
  watch: {
    productToAdd: function productToAdd(newProduct) {
      if (this.basket.isSelected) {
        this.addProduct(newProduct);
      }
    }
  },
  computed: {
    filteredProducts: function filteredProducts() {
      if (this.search) {
        return this.searchWithSearchBar(this.basket.products);
      }

      return this.basket.products;
    },
    productCounter: function productCounter() {
      if (this.basket.products.length > 0) {
        return Math.max.apply(Math, _toConsumableArray(this.basket.products.map(function (product) {
          return product.id.substring(15); // "basket_product_" id prefix is 15 characters long
        })));
      } else {
        return 0;
      }
    },
    containsProducts: function containsProducts() {
      return this.basket.products.length > 0;
    },
    isFirst: function isFirst() {
      return this.index === 0;
    }
  },
  created: function created() {
    events.$on('get-internal-counters', this.sendInternalCounter);
  },
  mounted: function mounted() {
    this.sendInternalCounter();
  },
  methods: {
    addProduct: function addProduct(product) {
      var tempProd = _objectSpread({}, product);

      tempProd.id = 'basket-product-' + (this.productCounter + 1);
      this.basket.products.unshift(tempProd);
      this.sendInternalCounter();
      this.saveBasket();
    },
    removeProduct: function removeProduct(productIndex) {
      this.basket.products.splice(productIndex, 1);
      this.saveBasket();
    },
    copyBasket: function copyBasket() {
      this.$emit('copy-basket', this.basket, this.index);
    },
    deleteBasket: function deleteBasket() {
      this.$emit('delete-basket', this.basket, this.index, 'delete');
    },
    clearBasket: function clearBasket() {
      this.$emit('clear-basket', this.basket, this.index, 'clear');
    },
    saveBasket: function saveBasket() {
      this.$emit('save-baskets');
    },
    doStuff: function doStuff() {
      this.$emit('do-stuff', this.index);
    },
    searchInBasket: function searchInBasket() {
      this.$emit('search-in-basket', this.search, this.index);
    },
    sendInternalCounter: function sendInternalCounter() {
      events.$emit('internal-counters', this.index, this.productCounter);
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
  return _c(
    "div",
    { staticClass: "basket" },
    [
      _c("div", { staticClass: "basket-header" }, [
        _c(
          "div",
          { staticClass: "basket-select custom-control custom-checkbox" },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.basket.isSelected,
                  expression: "basket.isSelected"
                }
              ],
              staticClass: "custom-control-input",
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
                      $$i < 0 &&
                        _vm.$set(_vm.basket, "isSelected", $$a.concat([$$v]))
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
            _vm._v(" "),
            _c("label", { staticClass: "custom-control-label" }, [
              _vm._v(_vm._s(_vm.add_to_this_basket))
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "basket-name" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.basket.name,
                expression: "basket.name"
              }
            ],
            staticClass: "input custom-input browser-default",
            attrs: { type: "text", required: "" },
            domProps: { value: _vm.basket.name },
            on: {
              change: _vm.saveBasket,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.basket, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("a", { staticClass: "btn-ico", on: { click: _vm.copyBasket } }, [
            _vm._v("")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "basket-toolbox" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search"
              }
            ],
            staticClass: "input tool custom-input browser-default",
            attrs: {
              type: "search",
              maxlength: "256",
              name: "query",
              placeholder: "chercher dans le panier"
            },
            domProps: { value: _vm.search },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.search = $event.target.value
                },
                _vm.searchInBasket
              ]
            }
          }),
          _vm._v(" "),
          _vm.containsProducts
            ? _c(
                "a",
                { staticClass: "btn-ico alt tool", on: { click: _vm.doStuff } },
                [_vm._v("")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.containsProducts
            ? _c(
                "a",
                {
                  staticClass: "btn-ico alt tool",
                  on: { click: _vm.clearBasket }
                },
                [_vm._v("")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn-ico alt tool",
              on: { click: _vm.deleteBasket }
            },
            [_vm._v("")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "draggable",
        {
          staticClass:
            "dragArea basket--products-container my-custom-scrollbar my-custom-scrollbar-primary",
          attrs: {
            group: { name: "draggableProducts", pull: false },
            filter: ".ignore-draggable",
            preventOnFilter: false,
            animation: 150
          },
          on: { change: _vm.saveBasket },
          model: {
            value: _vm.basket.products,
            callback: function($$v) {
              _vm.$set(_vm.basket, "products", $$v)
            },
            expression: "basket.products"
          }
        },
        _vm._l(_vm.filteredProducts, function(product, i) {
          return _c("basket-product", {
            key: product.id,
            attrs: {
              product: product,
              "basket-id": _vm.basket.id,
              index: i,
              origins: _vm.origins
            },
            on: {
              "save-changes": _vm.saveBasket,
              "remove-product": _vm.removeProduct
            }
          })
        }),
        1
      ),
      _vm._v(" "),
      _vm.containsProducts
        ? _c("basket-result", {
            attrs: {
              index: _vm.index,
              basket: _vm.basket,
              "is-first": _vm.isFirst,
              "previous-basket": _vm.previousBasket,
              "first-basket": _vm.firstBasket,
              "compare-to-previous-basket": _vm.compareToPreviousBasket,
              products: _vm.basket.products,
              categories: _vm.categories,
              "basket-id": _vm.basket.id
            }
          })
        : _vm._e()
    ],
    1
  )
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