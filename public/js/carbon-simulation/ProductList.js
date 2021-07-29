(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/ProductList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/carbon-simulation/searchBar */ "./resources/js/helpers/carbon-simulation/searchBar.js");
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


var draggable = function draggable() {
  return __webpack_require__.e(/*! import() | js/draggable */ "vendors~js/draggable").then(__webpack_require__.t.bind(null, /*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js", 7));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: draggable
  },
  mixins: [_helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    categories: Array,
    products: Array,
    recipes: Array,
    specialProducts: Array,
    selectedCategoryId: Number,
    selectedByCategory: Boolean,
    origins: Array,
    counters: Array,
    showRecipes: Boolean
  },
  data: function data() {
    return {
      search: '',
      cats: [],
      productListInternalCounter: 0
    };
  },
  computed: {
    filteredProducts: function filteredProducts() {
      var _this = this;

      if (this.search) {
        this.$emit('deselect-category');
        return this.searchWithSearchBar(this.products);
      }

      if (this.selectedByCategory && this.selectedCategoryId != null) {
        return this.products.concat(this.specialProducts).concat(this.recipes).filter(function (product) {
          return product.category_id == _this.selectedCategoryId;
        });
      }

      return this.products;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    events.$on('clear-search-bar', this.clearSearchBar);
    var _self = document.body;
    $(document).on('click', function (e) {
      if ($(e.target).closest('#dropDownList').length === 0) {
        _self.closable = true;
        document.getElementById('general-footer').click();
      }
    });
    $('#dropDownList').on('click', '.category', function () {
      _self.closable = false;
    }).on('click', '.add-product', function () {
      _self.closable = true;
    }).on('click', '.product', function () {
      _self.closable = true;
    }).on('hide.bs.dropdown', function () {
      return _self.closable;
    }).on('hidden.bs.dropdown', function () {
      _this2.hideProducts();
    }).on('show.bs.dropdown', function () {
      _this2.showProducts();
    });
  },
  methods: {
    getClasses: function getClasses(categoryId) {
      return ['dropdown-item', 'list-group-item', 'category', categoryId === this.selectedCategoryId ? 'active' : ''];
    },
    filterProdByCategory: function filterProdByCategory(categoryId) {
      this.$emit('filter-products-by-category', categoryId);
    },
    addProdToBasket: function addProdToBasket(product) {
      this.$emit('add-product-to-basket', product);
    },
    showProducts: function showProducts() {
      this.cats = JSON.parse(JSON.stringify(this.categories));

      if (this.showRecipes) {
        this.cats.push({
          name: 'Recettes de chef',
          id: 998
        });
        this.cats.push({
          name: '⭐ Spécial',
          id: 999
        });
        this.specialProducts.forEach(function (p) {
          p.category_id = 999;
        });
        this.recipes.forEach(function (r) {
          r.category_id = 998;
        });
      }
    },
    hideProducts: function hideProducts() {
      this.cats = [];
    },
    addProductByDrag: function addProductByDrag(product) {// events.$emit('get-internal-counters');
      // this.productListInternalCounter = this.getMaxCounter();
      // return {
      //     id: 'basket-product-' + (this.productListInternalCounter + 1),
      //     name: product.name,
      //     comment: product.comment,
      //     unit: product.unit,
      //     category: product.category,
      //     origin: this.origins[2], // France par défaut
      //     unit_id: product.unit_id,
      //     category_id: product.category_id,
      //     emissionFactor: product.emissionFactor,
      //     amount: 1,
      //     price: 1,
      // }
    },
    clearSearchBar: function clearSearchBar() {
      this.search = '';
    },
    getMaxCounter: function getMaxCounter() {
      if (this.counters.length > 0) {
        return Math.max.apply(Math, _toConsumableArray(this.counters));
      } else {
        return 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "dropdown",
      attrs: { "data-hover": "", "data-delay": "0", id: "dropDownList" }
    },
    [
      _c(
        "button",
        {
          staticClass: "btn dropdown-toggle search-menu",
          attrs: {
            type: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        },
        [_vm._v("\n        Ajouter un produit\n    ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "dropdown-menu", attrs: { id: "productList" } },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-3" },
              _vm._l(_vm.cats, function(category) {
                return _c(
                  "div",
                  {
                    key: category.id,
                    class: _vm.getClasses(category.id),
                    on: {
                      click: function($event) {
                        return _vm.filterProdByCategory(category.id)
                      }
                    }
                  },
                  [
                    category.id === 998
                      ? _c("i", { staticClass: "icon icon-hat-chef" }, [
                          _vm._v(" ")
                        ])
                      : _vm._e(),
                    _vm._v(
                      "\n                    " +
                        _vm._s(category.name) +
                        "\n                "
                    )
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-9" },
              [
                _c(
                  "draggable",
                  {
                    staticClass: "dragArea list-group grid-list",
                    attrs: {
                      group: {
                        name: "draggableProducts",
                        pull: "clone",
                        put: false
                      },
                      sort: false,
                      chosenClass: "moving",
                      clone: _vm.addProductByDrag
                    },
                    model: {
                      value: _vm.filteredProducts,
                      callback: function($$v) {
                        _vm.filteredProducts = $$v
                      },
                      expression: "filteredProducts"
                    }
                  },
                  _vm._l(_vm.filteredProducts, function(product) {
                    return _c(
                      "div",
                      {
                        key: product.id,
                        staticClass: "list-group-item product",
                        on: {
                          click: function($event) {
                            return _vm.addProdToBasket(product)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            " +
                            _vm._s(product.name) +
                            " "
                        ),
                        _c("small", [_vm._v(_vm._s(product.comment))]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn-ico add-product",
                            attrs: { "data-toggle": "modal" },
                            on: {
                              click: function($event) {
                                return _vm.addProdToBasket(product)
                              }
                            }
                          },
                          [_vm._v("")]
                        )
                      ]
                    )
                  }),
                  0
                )
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/ProductList.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/ProductList.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=6b6789aa& */ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/ProductList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=template&id=6b6789aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);