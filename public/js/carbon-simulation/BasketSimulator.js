(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketSimulator"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      products: [],
      origins: [],
      categories: [],
      shoppingList: [],
      selectedCategoryId: null
    };
  },
  computed: {
    filteredProducts: function filteredProducts() {
      var _this = this;

      if (this.selectedCategoryId === null) {
        return this.products;
      } else {
        return this.products.filter(function (product) {
          return product.category.id === _this.selectedCategoryId;
        });
      }
    }
  },
  created: function created() {
    this.fetchCategoriesData();
    this.fetchProductsData();
    this.fetchOriginsData();
  },
  methods: {
    fetchProductsData: function fetchProductsData() {
      var _this2 = this;

      axios.get('/api/products').then(function (response) {
        _this2.products = response.data;
      });
    },
    fetchOriginsData: function fetchOriginsData() {
      var _this3 = this;

      axios.get('/api/origins').then(function (response) {
        _this3.origins = response.data;
      });
    },
    fetchCategoriesData: function fetchCategoriesData() {
      var _this4 = this;

      axios.get('/api/categories').then(function (response) {
        _this4.categories = response.data;
      });
    },
    addProduct: function addProduct(_ref) {
      var id = _ref.id,
          name = _ref.name,
          unit = _ref.unit,
          category = _ref.category;
      return {
        oldId: id,
        name: name,
        unit: unit,
        category: category,
        origin: this.origins[2] // France par défaut

      };
    },
    filterProducts: function filterProducts(categoryId) {
      this.selectedCategoryId = categoryId;
    },
    getClasses: function getClasses(categoryId) {
      return ['list-group-item', 'category', categoryId === this.selectedCategoryId ? 'selected' : ''];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.left {\n    border: 1px black solid;\n}\n.middle {\n    border: 1px black solid;\n}\n.right {\n    border: 1px black solid;\n    min-height: 100px;\n}\n.product {\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n.moving {\n    background-color: #1f6fb2;\n}\n.category {\n    cursor: pointer;\n}\n.selected {\n    background-color: lime;\n}\ninput {\n    width: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketSimulator.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css&");

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
  return _c("div", { staticClass: "container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "left col-2" },
        [
          _c("h3", [_vm._v("Catégories")]),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c(
              "div",
              {
                key: category.id,
                class: _vm.getClasses(category.id),
                on: {
                  click: function($event) {
                    return _vm.filterProducts(category.id)
                  }
                }
              },
              [
                _vm._v(
                  "\n\n                " +
                    _vm._s(category.name) +
                    "\n\n            "
                )
              ]
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "middle col-4" },
        [
          _c("h3", [_vm._v("Produits")]),
          _vm._v(" "),
          _c(
            "draggable",
            {
              staticClass: "dragArea list-group",
              attrs: {
                group: { name: "draggableProducts", pull: "clone", put: false },
                sort: false,
                chosenClass: "moving",
                clone: _vm.addProduct
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
                { key: product.id, staticClass: "list-group-item product" },
                [
                  _vm._v(
                    "\n\n                    " +
                      _vm._s(product.id) +
                      " : " +
                      _vm._s(product.name) +
                      "\n\n                "
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "right col-6" },
        [
          _c("h3", [_vm._v("Liste de courses")]),
          _vm._v(" "),
          _c(
            "draggable",
            {
              staticClass: "dragArea list-group h-100",
              attrs: { group: "draggableProducts", animation: 150 },
              model: {
                value: _vm.shoppingList,
                callback: function($$v) {
                  _vm.shoppingList = $$v
                },
                expression: "shoppingList"
              }
            },
            _vm._l(_vm.shoppingList, function(product) {
              return _c(
                "div",
                { key: product.id, staticClass: "list-group-item product" },
                [
                  _c("p", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(product.id) +
                        " : " +
                        _vm._s(product.name) +
                        " -\n                        "
                    ),
                    _c("input", {
                      attrs: {
                        type: "number",
                        id: "shopping-item-" + product.id,
                        placeholder: "1"
                      }
                    }),
                    _vm._v(
                      " " + _vm._s(product.unit.unit) + "\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n                        Origine :\n                        "
                    ),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: product.origin,
                            expression: "product.origin"
                          }
                        ],
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              product,
                              "origin",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.origins, function(origin) {
                        return _c("option", { domProps: { value: origin } }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(origin.from) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ]
              )
            }),
            0
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search mb-4" }, [
      _c("input", { attrs: { type: "text", placeholder: "search" } })
    ])
  }
]
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
/* empty/unused harmony star reexport *//* harmony import */ var _BasketSimulator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasketSimulator.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketSimulator.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketSimulator.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketSimulator_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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



/***/ })

}]);