(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketSimulator"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/carbon-simulation/searchBar */ "./resources/js/helpers/carbon-simulation/searchBar.js");
/* harmony import */ var _helpers_carbon_simulation_database_ProductsDataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/ProductsDataBase */ "./resources/js/helpers/carbon-simulation/database/ProductsDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/CategoriesDataBase */ "./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_UnitsDataBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/UnitsDataBase */ "./resources/js/helpers/carbon-simulation/database/UnitsDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_OriginsDataBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/OriginsDataBase */ "./resources/js/helpers/carbon-simulation/database/OriginsDataBase.js");
/* harmony import */ var _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../texts/carbonSimulator/BasketSimulatorText */ "./resources/texts/carbonSimulator/BasketSimulatorText.js");
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







var SearchBar = function SearchBar() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/SearchBar */ "js/carbon-simulation/SearchBar").then(__webpack_require__.bind(null, /*! ./SearchBar */ "./resources/js/components/carbon-simulation/SearchBar.vue"));
};

var ProductList = function ProductList() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/ProductList */ "js/carbon-simulation/ProductList").then(__webpack_require__.bind(null, /*! ./ProductList */ "./resources/js/components/carbon-simulation/ProductList.vue"));
};

var AddProductPopUp = function AddProductPopUp() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/AddProductPopUp */ "js/carbon-simulation/AddProductPopUp").then(__webpack_require__.bind(null, /*! ./AddProductPopUp */ "./resources/js/components/carbon-simulation/AddProductPopUp.vue"));
};

var BasketsList = function BasketsList() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/BasketsList */ "js/carbon-simulation/BasketsList").then(__webpack_require__.bind(null, /*! ./BasketsList */ "./resources/js/components/carbon-simulation/BasketsList.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SearchBar: SearchBar,
    ProductList: ProductList,
    AddProductPopUp: AddProductPopUp,
    BasketsList: BasketsList
  },
  mixins: [_helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_carbon_simulation_database_ProductsDataBase__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_carbon_simulation_database_UnitsDataBase__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_carbon_simulation_database_OriginsDataBase__WEBPACK_IMPORTED_MODULE_4__["default"], _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_5__["default"]],
  data: function data() {
    return {
      products: [],
      categories: [],
      units: [],
      origins: [],
      selectedCategoryId: null,
      selectedByCategory: false,
      selectedBySearchBar: false,
      search: '',
      selectedBaskets: [],
      internalCounters: [],
      showAddingModal: false,
      productAdded: {},
      productToAddWithDetails: {},
      focusOnSearchBar: false
    };
  },
  created: function created() {
    events.$on('internal-counters', this.setInternalCounters);
    this.fetchProducts();
    this.fetchCategories();
    this.fetchUnits();
    this.fetchOrigins();
    this.getInternalCounters();
    $(document).ready(function () {
      $('.modal').modal();
    });
  },
  methods: {
    filterProductsByCategory: function filterProductsByCategory(categoryId) {
      this.selectedCategoryId = categoryId;
      this.selectedBySearchBar = false;
      this.selectedByCategory = true;
    },
    filterProductsBySearch: function filterProductsBySearch() {
      this.deselectCategories();
      this.selectedBySearchBar = true;
    },
    deselectCategories: function deselectCategories() {
      this.selectedCategoryId = null;
      this.selectedByCategory = false;
    },
    showAddingProductModal: function showAddingProductModal(product) {
      this.getSelectedBaskets();
      this.loseFocusOnSearchBar();
      this.productAdded = product;
      this.showAddingModal = true;
    },
    addProductToBasket: function addProductToBasket(product) {
      this.showAddingModal = false;
      this.addProductToSelectedBaskets(product);
      this.focusOnSearchBar = true;
    },
    addProductToSelectedBaskets: function addProductToSelectedBaskets(product) {
      this.productToAddWithDetails = product;
    },
    getSelectedBaskets: function getSelectedBaskets() {
      events.$emit('send-selected-baskets');
    },
    setSelectedBaskets: function setSelectedBaskets(baskets) {
      this.selectedBaskets = baskets;
    },
    getInternalCounters: function getInternalCounters() {
      events.$emit('get-internal-counters');
    },
    setInternalCounters: function setInternalCounters(basketI, counter) {
      this.internalCounters[basketI] = counter;
    },
    loseFocusOnSearchBar: function loseFocusOnSearchBar() {
      events.$emit('clear-search-bar');
      this.focusOnSearchBar = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=template&id=6f5bf55b&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=template&id=6f5bf55b& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    [
      _vm.showAddingModal
        ? _c("add-product-pop-up", {
            ref: "searchBar",
            attrs: {
              product: this.productAdded,
              origins: this.origins,
              "selected-baskets": this.selectedBaskets
            },
            on: {
              add: _vm.addProductToBasket,
              "exit-without-adding": function($event) {
                _vm.showAddingModal = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "search-bar main-search" },
        [
          _c("product-list", {
            attrs: {
              categories: this.categories,
              origins: this.origins,
              products: this.products,
              "selected-category-id": this.selectedCategoryId,
              "selected-by-category": this.selectedByCategory,
              counters: this.internalCounters
            },
            on: {
              "filter-products-by-category": _vm.filterProductsByCategory,
              "deselect-category": _vm.deselectCategories,
              "add-product-to-basket": _vm.showAddingProductModal
            }
          }),
          _vm._v(" "),
          _c("search-bar", {
            attrs: { products: this.products, focus: this.focusOnSearchBar },
            on: {
              "search-complete": _vm.filterProductsBySearch,
              "product-chosen": _vm.showAddingProductModal,
              "lose-focus": _vm.loseFocusOnSearchBar
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn info modal-trigger",
              attrs: { "data-target": "mode_emploi" }
            },
            [_vm._v("?")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "modal modal-fixed-footer",
              attrs: { id: "mode_emploi" }
            },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("h4", [_vm._v(_vm._s(_vm.how_to.use))]),
                _vm._v(" "),
                _c("ul", [
                  _c("li", [
                    _c("span", { staticClass: "icon" }, [_vm._v("")]),
                    _vm._v(" " + _vm._s(_vm.how_to.add_prod_to_basket))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(_vm._s(_vm.how_to.how_many_and_from_where))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(_vm._s(_vm.how_to.behold_your_carbon_impact))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("span", { staticClass: "icon" }, [_vm._v("")]),
                    _vm._v(" " + _vm._s(_vm.how_to.add_mock_baskets))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("span", { staticClass: "icon" }, [_vm._v("")]),
                    _vm._v(" " + _vm._s(_vm.how_to.copy_basket))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _vm._v(_vm._s(_vm.how_to.go_wild_and_edit_things))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("span", { staticClass: "icon" }, [_vm._v("")]),
                    _vm._v(" " + _vm._s(_vm.how_to.delete_a_basket))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("span", { staticClass: "icon" }, [_vm._v("")]),
                    _vm._v(" " + _vm._s(_vm.how_to.clear_a_basket))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("span", { staticClass: "icon" }, [_vm._v("")]),
                    _vm._v(" " + _vm._s(_vm.how_to.do_stuff))
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("span", { staticClass: "icon" }, [_vm._v("")]),
                    _vm._v(" " + _vm._s(_vm.how_to.export_baskets))
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "modal-close waves-effect waves-green btn-flat",
                    attrs: { href: "#!" }
                  },
                  [_vm._v(_vm._s(_vm.how_to.close_btn))]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("baskets-list", {
        attrs: {
          origins: this.origins,
          categories: this.categories,
          "product-to-add": this.productToAddWithDetails
        },
        on: { "selected-baskets": _vm.setSelectedBaskets }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketSimulator.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketSimulator.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasketSimulator_vue_vue_type_template_id_6f5bf55b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasketSimulator.vue?vue&type=template&id=6f5bf55b& */ "./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=template&id=6f5bf55b&");
/* harmony import */ var _BasketSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketSimulator.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasketSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasketSimulator_vue_vue_type_template_id_6f5bf55b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasketSimulator_vue_vue_type_template_id_6f5bf55b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/BasketSimulator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketSimulator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=template&id=6f5bf55b&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=template&id=6f5bf55b& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_template_id_6f5bf55b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketSimulator.vue?vue&type=template&id=6f5bf55b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=template&id=6f5bf55b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_template_id_6f5bf55b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_template_id_6f5bf55b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    fetchCategories: function fetchCategories() {
      var _this = this;

      getCategories().then(function (response) {
        _this.categories = response.data;
      });
    },
    updateCategory: function updateCategory(category) {
      patchCategory(category).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    addCategory: function addCategory() {
      var _this2 = this;

      postCategory(this.newCategory).then(function (response) {
        _this2.categories.push(response.data);

        _this2.newCategory = '';
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    deleteCategory: function deleteCategory(catId) {
      var _this3 = this;

      destroyCategory(catId).then(function (response) {
        flash(response.data);

        _this3.refreshCategories();
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
});

function getCategories() {
  return axios.get('/api/categories');
}

function patchCategory(category) {
  return axios.patch('/api/categories/' + category.id, {
    name: category.name
  });
}

function postCategory(newCatName) {
  return axios.post('/api/categories', {
    name: newCatName
  });
}

function destroyCategory(catId) {
  return axios["delete"]('/api/categories/' + catId);
}

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/database/OriginsDataBase.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/database/OriginsDataBase.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    fetchOrigins: function fetchOrigins() {
      var _this = this;

      getOrigins().then(function (response) {
        _this.origins = response.data;
      });
    },
    updateOrigin: function updateOrigin(origin) {
      patchOrigin(origin).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    addOrigin: function addOrigin() {
      var _this2 = this;

      postOrigin(this.newOrigin).then(function (response) {
        _this2.origins.push(response.data);

        _this2.newOrigin = {};
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    deleteOrigin: function deleteOrigin(originId) {
      var _this3 = this;

      destroyOrigin(originId).then(function (response) {
        flash(response.data);

        _this3.refreshOrigins();
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
});

function getOrigins() {
  return axios.get('/api/origins');
}

function patchOrigin(origin) {
  return axios.patch('/api/origins/' + origin.id, {
    from: origin.from,
    distance: origin.distance,
    carbonImpact: origin.carbonImpact,
    carbonImpactPerKg: origin.carbonImpactPerKg
  });
}

function postOrigin(newOrigin) {
  return axios.post('/api/origins', {
    from: newOrigin.from,
    distance: newOrigin.distance,
    carbonImpact: newOrigin.carbonImpact,
    carbonImpactPerKg: newOrigin.carbonImpactPerKg
  });
}

function destroyOrigin(originId) {
  return axios["delete"]('/api/origins/' + originId);
}

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/database/ProductsDataBase.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/database/ProductsDataBase.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    fetchProducts: function fetchProducts() {
      var _this = this;

      getProducts().then(function (response) {
        _this.products = response.data;
      });
    },
    updateProduct: function updateProduct(product) {
      patchProduct(product).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    addProduct: function addProduct() {
      var _this2 = this;

      postProduct(this.newProduct).then(function (response) {
        _this2.products.push(response.data);

        _this2.newProduct = {};
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    deleteProduct: function deleteProduct(productId) {
      var _this3 = this;

      destroyProduct(productId).then(function (response) {
        flash(response.data);

        _this3.refreshProducts();
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
});

function getProducts() {
  return axios.get('/api/products');
}

function patchProduct(product) {
  return axios.patch('/api/products/' + product.id, {
    name: product.name,
    unit_id: product.unit_id,
    category_id: product.category_id,
    comment: product.comment,
    emissionFactor: product.emissionFactor
  });
}

function postProduct(newProduct) {
  return axios.post('/api/products', {
    name: newProduct.name,
    unit_id: newProduct.unit_id,
    category_id: newProduct.category_id,
    comment: newProduct.comment,
    emissionFactor: newProduct.emissionFactor
  });
}

function destroyProduct(productId) {
  return axios["delete"]('/api/products/' + productId);
}

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/database/UnitsDataBase.js":
/*!**************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/database/UnitsDataBase.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    fetchUnits: function fetchUnits() {
      var _this = this;

      getUnits().then(function (response) {
        _this.units = response.data;
      });
    },
    updateUnit: function updateUnit(unit) {
      patchUnit(unit).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    addUnit: function addUnit() {
      var _this2 = this;

      postUnit(this.newUnit).then(function (response) {
        _this2.units.push(response.data);

        _this2.newUnit = '';
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    deleteUnit: function deleteUnit(unitId) {
      var _this3 = this;

      destroyUnit(unitId).then(function (response) {
        flash(response.data);

        _this3.refreshUnits();
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
});

function getUnits() {
  return axios.get('/api/units');
}

function patchUnit(unit) {
  return axios.patch('/api/units/' + unit.id, {
    unit: unit.unit,
    shortUnit: unit.shortUnit
  });
}

function postUnit(newUnit) {
  return axios.post('/api/units', {
    unit: newUnit.unit,
    shortUnit: newUnit.shortUnit
  });
}

function destroyUnit(unitId) {
  return axios["delete"]('/api/units/' + unitId);
}

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/searchBar.js":
/*!*************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/searchBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    searchWithSearchBar: function searchWithSearchBar(products) {
      var _this = this;

      return products.filter(function (product) {
        var productName = _this.areWeLookingForBeefAndEggs(product.name);

        if (product.comment) {
          var productComment = _this.areWeLookingForBeefAndEggs(product.comment);

          return _this.searchByProduct(productName, _this.search) || _this.searchByComment(productComment, _this.search);
        }

        return _this.searchByProduct(productName, _this.search);
      });
    },
    // TODO : See if it works with IE
    searchByProduct: function searchByProduct(productName, search) {
      return productName.toLowerCase().includes(search.toLowerCase()) || this.searchByUnaccentedProducts(productName, search);
    },
    searchByUnaccentedProducts: function searchByUnaccentedProducts(productName, search) {
      // from https://stackoverflow.com/questions/5700636/using-javascript-to-perform-text-matches-with-without-accented-characters
      var unaccentedProd = productName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      return unaccentedProd.toLowerCase().includes(search.toLowerCase());
    },
    searchByComment: function searchByComment(productComment, search) {
      return productComment.toLowerCase().includes(search.toLowerCase()) || this.searchByUnaccentedComment(productComment, search);
    },
    searchByUnaccentedComment: function searchByUnaccentedComment(productComment, search) {
      var unaccentedComment = productComment.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      return unaccentedComment.toLowerCase().includes(search.toLowerCase());
    },
    areWeLookingForBeefAndEggs: function areWeLookingForBeefAndEggs(string) {
      // remplace œ par oe
      return string.toLowerCase().replace(/[\u0153]/, "oe");
    }
  }
});

/***/ }),

/***/ "./resources/texts/carbonSimulator/BasketSimulatorText.js":
/*!****************************************************************!*\
  !*** ./resources/texts/carbonSimulator/BasketSimulatorText.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      how_to: {
        title: 'Comment utiliser ce simulateur de panier de commande',
        use: 'Mode d\'emploi',
        add_prod_to_basket: 'Commencez par ajouter de produits à votre liste de courses via le menu ou en faisant une recherche',
        how_many_and_from_where: 'Vous êtes alors invités à en préciser le nombre et l\'origine',
        behold_your_carbon_impact: 'Vous pouvez alors constater en temps réel votre bilan carbone résumé sous votre panier',
        copy_basket: 'Vous pouvez aussi dupliquer un panier existant',
        add_mock_baskets: 'Vous avez alors la possibilité d\'ajouter des paniers de "simulation" et de les renommer',
        go_wild_and_edit_things: 'N\'hésitez pas à faire varier les produits, leur quantité et leur provenance avant de constater l\'impact de vos changements',
        delete_a_basket: 'Vous pouvez effacer les paniers un par un',
        clear_a_basket: 'ou les vider',
        destroy_them_all: 'ou tous les supprimer d\'un seul clic',
        do_stuff: 'permet d\'effectuer des opérations sur l\'ensemble du panier',
        export_baskets: 'Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur',
        close_btn: 'Fermer'
      },
      hover: {
        // sur les + à côté des produits sur la liste de gauche
        add_product_to_marked_baskets: 'Ajouter ce produit aux paniers sélectionnés',
        // Sur les checkboxes au dessus des paniers
        mark_as_fillable: 'marquer ce panier afin que les produits saisis y soient déposés',
        // Icônes du panier
        delete_basket: 'supprimer ce panier',
        edit_basket: 'modifier ce panier',
        add_basket: 'dupliquer le panier',
        clear_basket: 'vider le panier'
      },
      baskets: 'Paniers',
      add_new_basket: 'Nouveau panier vide',
      add_to_this_basket: 'Ajouter dans ce panier',
      placeholders: {
        type_in_your_product: 'Tapez le nom de votre produit puis sélectionnez-le avec la souris ou les touches de votre clavier',
        search_prod: 'Rechercher un produit'
      },
      impact: {
        title: {
          carbon: 'Bilan Carbone',
          money: 'Bilan Financier'
        },
        product_impact: 'Impact Produit',
        transportation_impact: 'Impact Transport',
        carbon: 'Votre bilan carbone',
        equals_to: 'équivaut à',
        money: 'Votre bilan financier',
        co2_per_euro: 'Bilan carbone par euro dépensé'
      },
      part: {
        prod: 'Part produit',
        trans: 'Part transport'
      },
      ventilation: {
        carbon: 'Ventilation de l\'empreinte carbone en grammes de CO2',
        money: 'Ventilation des dépenses (en €)'
      },
      origin: {
        label: 'Origine',
        dep: 'Département',
        reg: 'Région',
        fr: 'France',
        world: 'Reste du Monde'
      },
      sum: 'Total',
      btn: {
        export_btn: 'Exporter les paniers au format tableur'
      },
      add_popup: {
        help: 'Utilisez les touches tabulation et entrée pour passer d\'un champ à l\'autre et valider votre produit',
        you_are_adding: 'Vous ajoutez le produit',
        by_this_amount: 'en quantité de',
        for_that_much_$: 'pour un montant de',
        from: 'originaire de',
        in_baskets: 'dans les paniers nommés',
        cancel: 'annuler',
        ok: 'OK'
      },
      edit: {
        i_am_editing_to: 'Je modifie ce panier',
        set_origin_to_france: 'afin que tous ses produits soient d\'origine France (si possible)'
      },
      switch_labels: {
        compare_to_first: 'Comparer avec le premier panier',
        compare_to_previous: 'Comparer avec le panier précédent'
      }
    };
  }
});

/***/ })

}]);