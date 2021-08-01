(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketSimulator"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/carbon-simulation/searchBar */ "./resources/js/helpers/carbon-simulation/searchBar.js");
/* harmony import */ var _helpers_carbon_simulation_database_ProductsDataBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/ProductsDataBase */ "./resources/js/helpers/carbon-simulation/database/ProductsDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/CategoriesDataBase */ "./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_UnitsDataBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/UnitsDataBase */ "./resources/js/helpers/carbon-simulation/database/UnitsDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_OriginsDataBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/OriginsDataBase */ "./resources/js/helpers/carbon-simulation/database/OriginsDataBase.js");
/* harmony import */ var _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../texts/carbonSimulator/BasketSimulatorText */ "./resources/texts/carbonSimulator/BasketSimulatorText.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_RecipesDataBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/carbon-simulation/database/RecipesDataBase */ "./resources/js/helpers/carbon-simulation/database/RecipesDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_recipesHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/carbon-simulation/recipesHelper */ "./resources/js/helpers/carbon-simulation/recipesHelper.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  mixins: [_helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_carbon_simulation_database_ProductsDataBase__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_carbon_simulation_database_RecipesDataBase__WEBPACK_IMPORTED_MODULE_8__["default"], _helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_carbon_simulation_database_UnitsDataBase__WEBPACK_IMPORTED_MODULE_4__["default"], _helpers_carbon_simulation_database_OriginsDataBase__WEBPACK_IMPORTED_MODULE_5__["default"], _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_6__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_7__["default"], _helpers_carbon_simulation_recipesHelper__WEBPACK_IMPORTED_MODULE_9__["default"]],
  data: function data() {
    return {
      products: [],
      specialProducts: [],
      recipes: [],
      recipesAsProducts: [],
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
      focusOnSearchBar: false,
      howTo: "<div class=\"loader-spinner\"></div>"
    };
  },
  created: function created() {
    events.$on('internal-counters', this.setInternalCounters);
    this.fetchProducts();
    this.fetchRecipes();
    this.fetchSpecialProducts();
    this.fetchCategories();
    this.fetchUnits();
    this.fetchOrigins();
    this.getInternalCounters();
    $(document).ready(function () {
      $('.modal').modal();
    });
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.fetchContent('Carbone - Mode d\'emploi');

            case 2:
              _this.howTo = _context.sent;

              _this.setProductIds();

              _this.turnRecipesIntoProducts();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    showAddingProductModal: function showAddingProductModal(product) {
      this.getSelectedBaskets();

      if (!this.selectedBaskets.length) {
        alert('Aucune liste sélectionnée');
        return;
      }

      if (product.type === 'special') {
        events.$emit('insert-block');
        return;
      }

      if (product.type === 'recipe') {
        events.$emit('insert-recipe', product);
        return;
      }

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
    setProductIds: function setProductIds() {
      this.products.forEach(function (p) {
        p.productId = p.id;
      });
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
              recipes: this.recipesAsProducts,
              specialProducts: this.specialProducts,
              "selected-category-id": this.selectedCategoryId,
              "selected-by-category": this.selectedByCategory,
              counters: this.internalCounters,
              "show-recipes": true
            },
            on: {
              "filter-products-by-category": _vm.filterProductsByCategory,
              "deselect-category": _vm.deselectCategories,
              "add-product-to-basket": _vm.showAddingProductModal
            }
          }),
          _vm._v(" "),
          _c("search-bar", {
            attrs: {
              products: this.products,
              recipes: this.recipesAsProducts,
              specialProducts: this.specialProducts,
              focus: this.focusOnSearchBar
            },
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
              staticClass: "btn info modal-trigger info-bubble",
              attrs: { "data-target": "mode_emploi", title: "Mode d'emploi" }
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
                _c("div", { domProps: { innerHTML: _vm._s(_vm.howTo) } })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "a",
                  {
                    staticClass: "modal-close waves-effect waves-green button",
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
      _c(
        "router-link",
        { attrs: { to: { name: "recipes-index" }, tag: "span" } },
        [_c("button", { staticClass: "button" }, [_vm._v("Recettes de Chef")])]
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
    fetchSpecialProducts: function fetchSpecialProducts() {
      var _this2 = this;

      getSpecialProducts().then(function (response) {
        _this2.specialProducts = response.data;
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
      var _this3 = this;

      postProduct(this.newProduct).then(function (response) {
        _this3.products.push(response.data);

        _this3.newProduct = {};
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    deleteProduct: function deleteProduct(productId) {
      var _this4 = this;

      destroyProduct(productId).then(function (response) {
        flash(response.data);

        _this4.refreshProducts();
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
});

function getProducts() {
  return axios.get('/api/products');
}

function getSpecialProducts() {
  return axios.get('/api/special-products');
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

/***/ "./resources/js/helpers/carbon-simulation/recipesHelper.js":
/*!*****************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/recipesHelper.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    turnRecipesIntoProducts: function turnRecipesIntoProducts() {
      var _this = this;

      this.recipes.forEach(function (recipe) {
        var prod = _objectSpread({}, recipe);

        prod.type = "recipe";
        prod.comment = recipe.description;
        recipe.products.forEach(function (product) {
          product.origin = _this.getOriginObject(product.pivot.origin);
          product.amount = product.pivot.amount;
          product.price = product.pivot.price;
        });

        _this.recipesAsProducts.push(prod);
      });
    },
    getOriginObject: function getOriginObject(from) {
      return this.origins.filter(function (origin) {
        return origin.from === from;
      })[0];
    },
    isEmpty: function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    },
    unit: function unit(product) {
      if (product.unit.shortUnit !== 'kg' && product.pivot.amount >= 2) {
        return product.unit.shortUnit + 's';
      }

      return product.unit.shortUnit;
    },
    removeProduct: function removeProduct(index) {
      this.recipe.products.splice(index, 1);
    },
    addProductToRecipe: function addProductToRecipe(product) {
      this.showAddingModal = false;
      this.focusOnSearchBar = true;

      if (!product.price) {
        product.price = 0;
      }

      this.recipe.products.push(_objectSpread(_objectSpread({}, product), {}, {
        productId: product.productId,
        id: 'prod-' + (this.counter + 1),
        pivot: {
          amount: product.amount,
          price: product.price
        },
        origin: product.origin
      }));
    },
    showAddingProductModal: function showAddingProductModal(product) {
      this.loseFocusOnSearchBar();
      this.productAdded = product;
      this.showAddingModal = true;
    }
  }
});

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

        if (product.type === 'recipe') {
          return _this.searchByProduct(productName, _this.search) || _this.searchByComment(product.comment, _this.search) || _this.searchByComment(product.author, _this.search) || _this.searchRecipe(product, _this.search);
        } else if (product.comment) {
          var productComment = _this.areWeLookingForBeefAndEggs(product.comment);

          return _this.searchByProduct(productName, _this.search) || _this.searchByComment(productComment, _this.search);
        } else return _this.searchByProduct(productName, _this.search);
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
      return productComment ? productComment.toLowerCase().includes(search.toLowerCase()) || this.searchByUnaccentedComment(productComment, search) : false;
    },
    searchByUnaccentedComment: function searchByUnaccentedComment(productComment, search) {
      var unaccentedComment = productComment.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      return unaccentedComment.toLowerCase().includes(search.toLowerCase());
    },
    areWeLookingForBeefAndEggs: function areWeLookingForBeefAndEggs(string) {
      // remplace œ par oe
      return string.toLowerCase().replace(/[\u0153]/, "oe");
    },
    searchRecipe: function searchRecipe(recipe, search) {
      var _this2 = this;

      return recipe.products.some(function (p) {
        return _this2.searchByProduct(p.name, search);
      });
    },
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
    loseFocusOnSearchBar: function loseFocusOnSearchBar() {
      events.$emit('clear-search-bar');
      this.focusOnSearchBar = false;
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
        title: 'Comment utiliser ce simulateur de listes de courses',
        use: 'Mode d\'emploi',
        add_prod_to_basket: 'Commencez par ajouter de produits à votre liste de courses via le menu ou en faisant une recherche',
        how_many_and_from_where: 'Vous êtes alors invités à en préciser le nombre et l\'origine',
        behold_your_carbon_impact: 'Vous pouvez alors constater en temps réel votre bilan carbone résumé sous votre liste',
        copy_basket: 'Vous pouvez aussi dupliquer une liste existante',
        add_mock_baskets: 'Vous avez alors la possibilité d\'ajouter des listes de "simulation" et de les renommer',
        go_wild_and_edit_things: 'N\'hésitez pas à faire varier les produits, leur quantité et leur provenance avant de constater l\'impact de vos changements',
        delete_a_basket: 'Vous pouvez effacer les listes unes par unes',
        clear_a_basket: 'ou les vider',
        destroy_them_all: 'ou toutes les supprimer d\'un seul clic',
        do_stuff: 'permet d\'effectuer des opérations sur l\'ensemble d\'une liste',
        export_baskets: 'Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur',
        close_btn: 'Fermer'
      },
      hover: {
        // sur les + à côté des produits sur la liste de gauche
        add_product_to_marked_baskets: 'Ajouter ce produit aux listes sélectionnées',
        // Sur les checkboxes au dessus des listes
        mark_as_fillable: 'marquer cette liste afin que les produits saisis y soient déposés',
        // Icônes du liste
        delete_basket: 'supprimer cette liste',
        edit_basket: 'modifier cette liste',
        add_basket: 'dupliquer la liste',
        clear_basket: 'vider la liste'
      },
      baskets: 'Listes',
      add_new_basket: 'Nouvelle liste vide',
      add_to_this_basket: 'Ajouter dans cette liste',
      placeholders: {
        type_in_your_product: 'Tapez le nom de votre produit puis sélectionnez-le avec la souris ou les touches de votre clavier',
        search_prod: 'Rechercher un produit'
      },
      impact: {
        title: {
          carbon: 'Bilan Carbone',
          money: 'Bilan Financier'
        },
        product_impact: "Impact\xA0Produit",
        transportation_impact: "Impact\xA0Transport",
        carbon: 'Equivalent carbone',
        equals_to: 'équivaut à',
        money: 'Votre bilan financier',
        co2_per_euro: 'Bilan carbone par euro dépensé'
      },
      part: {
        prod: 'Part produit',
        trans: 'Part transport'
      },
      ventilation: {
        carbon: 'Ventilation de l\'empreinte carbone en Kg de CO2',
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
        export_btn: 'Exporter les listes au format tableur'
      },
      add_popup: {
        help: 'Utilisez les touches tabulation et entrée pour passer d\'un champ à l\'autre et valider votre produit',
        you_are_adding: 'Vous ajoutez le produit',
        by_this_amount: 'en quantité de',
        for_that_much_$: 'pour un montant TOTAL de',
        from: 'originaire de',
        in_baskets: 'dans les listes nommées',
        cancel: 'annuler',
        ok: 'OK'
      },
      edit: {
        i_am_editing_to: 'Je modifie cette liste pour',
        set_origin_to_france: 'Je modifie tous les produits qui le peuvent en origine France'
      },
      switch_labels: {
        compare_to_first: 'Comparer avec la première liste',
        compare_to_previous: 'Comparer avec la liste précédente'
      }
    };
  }
});

/***/ })

}]);