(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/carbon-simulation/ProductsAdminPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_database_ProductsDataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/carbon-simulation/database/ProductsDataBase */ "./resources/js/helpers/carbon-simulation/database/ProductsDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/carbon-simulation/database/CategoriesDataBase */ "./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_database_UnitsDataBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/carbon-simulation/database/UnitsDataBase */ "./resources/js/helpers/carbon-simulation/database/UnitsDataBase.js");
/* harmony import */ var _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/carbon-simulation/searchBar */ "./resources/js/helpers/carbon-simulation/searchBar.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_helpers_carbon_simulation_database_ProductsDataBase__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_carbon_simulation_database_UnitsDataBase__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_3__["default"]],
  data: function data() {
    return {
      products: [],
      categories: [],
      units: [],
      newProduct: {
        name: '',
        unit_id: 0,
        category_id: 0,
        comment: '',
        emissionFactor: 0
      },
      search: ''
    };
  },
  computed: {
    filteredProducts: function filteredProducts() {
      return this.searchWithSearchBar(this.products);
    }
  },
  created: function created() {
    this.fetchProducts();
    this.fetchCategories();
    this.fetchUnits();
  },
  methods: {
    refreshProducts: function refreshProducts() {
      this.fetchProducts();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.trash-icon {\n    cursor: pointer;\n}\n.form-group.admin select {\n    display: inline-block;\n    max-width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsAdminPage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=template&id=8d6f8792&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=template&id=8d6f8792& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mt-4" },
    [
      _c("h4", [_vm._v("Produits")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "ici, vous pouvez renommer, modifier, ajouter ou supprimer des produits"
        )
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.search,
            expression: "search"
          }
        ],
        staticStyle: { "max-width": "350px" },
        attrs: { type: "text", placeholder: "Rechercher un produit.." },
        domProps: { value: _vm.search },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.search = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticStyle: { display: "inline-block" },
          on: {
            click: function($event) {
              _vm.search = ""
            }
          }
        },
        [_vm._v("X")]
      ),
      _vm._v(" "),
      _vm._l(_vm.filteredProducts, function(product) {
        return _c("div", { key: product.id }, [
          _c("div", { staticClass: "form-group admin" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: product.name,
                  expression: "product.name"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              staticStyle: { "max-width": "150px" },
              attrs: { type: "text", required: "" },
              domProps: { value: product.name },
              on: {
                change: function($event) {
                  return _vm.updateProduct(product)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(product, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: product.comment,
                  expression: "product.comment"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              staticStyle: { "max-width": "350px" },
              attrs: { type: "text" },
              domProps: { value: product.comment },
              on: {
                change: function($event) {
                  return _vm.updateProduct(product)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(product, "comment", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: product.unit_id,
                    expression: "product.unit_id"
                  }
                ],
                on: {
                  change: [
                    function($event) {
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
                        "unit_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                    function($event) {
                      return _vm.updateProduct(product)
                    }
                  ]
                }
              },
              _vm._l(_vm.units, function(unit) {
                return _c("option", { domProps: { value: unit.id } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(unit.unit) +
                      "\n                "
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: product.category_id,
                    expression: "product.category_id"
                  }
                ],
                on: {
                  change: [
                    function($event) {
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
                        "category_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    },
                    function($event) {
                      return _vm.updateProduct(product)
                    }
                  ]
                }
              },
              _vm._l(_vm.categories, function(category) {
                return _c("option", { domProps: { value: category.id } }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(category.name) +
                      "\n                "
                  )
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: product.emissionFactor,
                  expression: "product.emissionFactor"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              staticStyle: { "max-width": "75px" },
              attrs: { type: "number", required: "", min: "0", step: "0.01" },
              domProps: { value: product.emissionFactor },
              on: {
                change: function($event) {
                  return _vm.updateProduct(product)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(product, "emissionFactor", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "trash-icon",
                on: {
                  click: function($event) {
                    return _vm.deleteProduct(product.id)
                  }
                }
              },
              [_c("i", { staticClass: "icon" }, [_vm._v("")])]
            )
          ])
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "form-group admin" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newProduct.name,
              expression: "newProduct.name"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: {
            type: "text",
            required: "",
            placeholder: "ajouter un produit"
          },
          domProps: { value: _vm.newProduct.name },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newProduct, "name", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newProduct.comment,
              expression: "newProduct.comment"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: { type: "text" },
          domProps: { value: _vm.newProduct.comment },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newProduct, "comment", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newProduct.unit_id,
                expression: "newProduct.unit_id"
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
                  _vm.newProduct,
                  "unit_id",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.units, function(unit) {
            return _c("option", { domProps: { value: unit.id } }, [
              _vm._v(
                "\n                " + _vm._s(unit.unit) + "\n            "
              )
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.newProduct.category_id,
                expression: "newProduct.category_id"
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
                  _vm.newProduct,
                  "category_id",
                  $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                )
              }
            }
          },
          _vm._l(_vm.categories, function(category) {
            return _c("option", { domProps: { value: category.id } }, [
              _vm._v(
                "\n                " + _vm._s(category.name) + "\n            "
              )
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newProduct.emissionFactor,
              expression: "newProduct.emissionFactor"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: { type: "number", required: "", min: "0", step: "0.01" },
          domProps: { value: _vm.newProduct.emissionFactor },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newProduct, "emissionFactor", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "button alter", on: { click: _vm.addProduct } },
          [_vm._v("OK")]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsAdminPage_vue_vue_type_template_id_8d6f8792___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsAdminPage.vue?vue&type=template&id=8d6f8792& */ "./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=template&id=8d6f8792&");
/* harmony import */ var _ProductsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsAdminPage.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductsAdminPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsAdminPage.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsAdminPage_vue_vue_type_template_id_8d6f8792___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsAdminPage_vue_vue_type_template_id_8d6f8792___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsAdminPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsAdminPage.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=template&id=8d6f8792&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=template&id=8d6f8792& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_template_id_8d6f8792___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsAdminPage.vue?vue&type=template&id=8d6f8792& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/ProductsAdminPage.vue?vue&type=template&id=8d6f8792&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_template_id_8d6f8792___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsAdminPage_vue_vue_type_template_id_8d6f8792___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);