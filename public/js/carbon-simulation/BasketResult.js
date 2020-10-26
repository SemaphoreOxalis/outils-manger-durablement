(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketResult"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/NumberFormatter */ "./resources/js/helpers/NumberFormatter.js");
/* harmony import */ var _helpers_carbon_simulation_calculations_basketLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/carbon-simulation/calculations/basketLogic */ "./resources/js/helpers/carbon-simulation/calculations/basketLogic.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_helpers_carbon_simulation_calculations_basketLogic__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    products: Array,
    categories: Array,
    basketId: String,
    isFirst: Boolean
  },
  computed: {},
  watch: {
    products: {
      handler: function handler() {
        this.updateResults();
      },
      deep: true
    }
  },
  data: function data() {
    return {
      globalProductImpact: {},
      globalTransportationImpact: {},
      globalCarbonImpact: {},
      globalMoneySpend: Number,
      globalCO2PerEuro: Number,
      globalCO2PerEuroFormatted: Number,
      globalCO2PerEuroUnit: String
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.updateResults();
    }, 1500);
  },
  methods: {
    updateResults: function updateResults() {
      this.getCarbonImpactByCategory();
      this.getGlobalCarbonImpact();
      this.getMoneyImpactByCategory();
      this.getGlobalMoneyImpact();
      this.$forceUpdate();
    },
    getCarbonImpactByCategory: function getCarbonImpactByCategory() {
      var _this2 = this;

      this.categories.forEach(function (category) {
        _this2.getCarbonImpactFor(category);
      });
    },
    getMoneyImpactByCategory: function getMoneyImpactByCategory() {
      var _this3 = this;

      this.categories.forEach(function (category) {
        _this3.getMoneyImpactFor(category);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "results-container" }, [
    _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active button btn-2",
              attrs: {
                id: "basket1-carbon-tab",
                "data-toggle": "tab",
                href: "#" + _vm.basketId + "-carbon",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("Bilan carbone")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link button btn-2",
              attrs: {
                id: "basket1-finance-tab",
                "data-toggle": "tab",
                href: "#" + _vm.basketId + "-finance",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Bilan financier")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link button btn-2 nav-ico",
              attrs: {
                id: "#basket1-graph-tab",
                "data-toggle": "tab",
                href: "#" + _vm.basketId + "-graph",
                role: "tab",
                "aria-controls": "contact",
                "aria-selected": "false"
              }
            },
            [_vm._v("")]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content" }, [
      _c(
        "div",
        {
          staticClass: "tab-pane fade show active",
          attrs: { id: _vm.basketId + "-carbon", role: "tabpanel" }
        },
        [
          _vm._l(_vm.categories, function(category) {
            return _c("div", { staticClass: "results-row flex-horizontal" }, [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v(_vm._s(category.name))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(category.carbonFormattedImpact) +
                      " " +
                      _vm._s(category.carbonImpactUnit) +
                      "\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        Impact produit : " +
                        _vm._s(category.productFormattedImpact) +
                        " " +
                        _vm._s(category.productImpactUnit)
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        Impact transport : " +
                        _vm._s(category.transportationFormattedImpact) +
                        " " +
                        _vm._s(category.transportationImpactUnit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ])
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "results-row flex-horizontal final-results" },
            [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v("Total")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(_vm.globalCarbonImpact.impact) +
                      " " +
                      _vm._s(_vm.globalCarbonImpact.unit) +
                      "\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        Impact produit : " +
                        _vm._s(_vm.globalProductImpact.impact) +
                        " " +
                        _vm._s(_vm.globalProductImpact.unit)
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        Impact transport : " +
                        _vm._s(_vm.globalTransportationImpact.impact) +
                        " " +
                        _vm._s(_vm.globalTransportationImpact.unit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm._m(0)
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade",
          attrs: { id: _vm.basketId + "-finance", role: "tabpanel" }
        },
        [
          _vm._l(_vm.categories, function(category) {
            return _c("div", { staticClass: "results-row flex-horizontal" }, [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v(_vm._s(category.name))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(category.moneySpent) + " €\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(category.co2PerEuroFormatted) +
                        " " +
                        _vm._s(category.co2PerEuroUnit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ])
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "results-row flex-horizontal final-results" },
            [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v("Total")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(_vm.globalMoneySpend) +
                      " €\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.globalCO2PerEuroFormatted) +
                        " " +
                        _vm._s(_vm.globalCO2PerEuroUnit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade",
          attrs: {
            id: _vm.basketId + "-graph",
            role: "tabpanel",
            "aria-labelledby": "contact-tab"
          }
        },
        [
          _c("canvas", {
            attrs: {
              id: _vm.basketId + "-chart",
              width: "370px",
              height: "400px"
            }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "results-comment" }, [
      _c("div", [
        _vm._v(
          "Votre bilan carbone équivaut à un aller-retour Paris/New-York en avion"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "results-comment" }, [
      _c("div", [
        _vm._v(
          "Votre bilan carbone équivaut à un aller-retour Paris/New-York en avion"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketResult.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketResult.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasketResult.vue?vue&type=template&id=be8f5854& */ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&");
/* harmony import */ var _BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketResult.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/BasketResult.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketResult.vue?vue&type=template&id=be8f5854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/NumberFormatter.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/NumberFormatter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Permet des arrondis qui restent précis
// From https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    roundToOneDecimal: function roundToOneDecimal(number) {
      return Math.round((number + Number.EPSILON) * 10) / 10;
    },
    roundToTwoDecimal: function roundToTwoDecimal(number) {
      return Math.round((number + Number.EPSILON) * 100) / 100;
    },
    roundToThreeDecimal: function roundToThreeDecimal(number) {
      return Math.round((number + Number.EPSILON) * 1000) / 1000;
    },
    // from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    separateThousands: function separateThousands(number) {
      try {
        return number.toLocaleString();
      } catch (e) {//
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/calculations/basketLogic.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/calculations/basketLogic.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getCarbonImpactFor: function getCarbonImpactFor(category) {
      var categoryProductImpact = 0;
      var categoryTransportationImpact = 0;
      var categoryCarbonImpact = 0;
      var categoryProducts = this.products.filter(function (product) {
        return product.category.id === category.id;
      });
      categoryProducts.forEach(function (product) {
        var productImpact = 0;
        var transportationImpact = 0;
        var carbonImpact = 0;
        productImpact = product.amount * product.emissionFactor;
        transportationImpact = product.amount * product.origin.carbonImpactPerKg;
        carbonImpact = productImpact + transportationImpact;
        categoryProductImpact += productImpact;
        categoryTransportationImpact += transportationImpact;
        categoryCarbonImpact += carbonImpact;
      });
      category.productImpact = this.roundToThreeDecimal(categoryProductImpact);
      category.transportationImpact = this.roundToThreeDecimal(categoryTransportationImpact);
      category.carbonImpact = this.roundToThreeDecimal(categoryCarbonImpact);
      category.productFormattedImpact = this.divideIfNecessary(categoryProductImpact);
      category.transportationFormattedImpact = this.divideIfNecessary(categoryTransportationImpact);
      category.carbonFormattedImpact = this.divideIfNecessary(categoryCarbonImpact);
      category.productImpactUnit = this.getUnit(categoryProductImpact);
      category.transportationImpactUnit = this.getUnit(categoryTransportationImpact);
      category.carbonImpactUnit = this.getUnit(categoryCarbonImpact);
    },
    getGlobalCarbonImpact: function getGlobalCarbonImpact() {
      var _this = this;

      this.categories.forEach(function (category) {
        _this.globalProductImpact.impact = 0;
        _this.globalTransportationImpact.impact = 0;
        _this.globalCarbonImpact.impact = 0;

        _this.categories.forEach(function (category) {
          _this.globalProductImpact.impact += category.productImpact;
          _this.globalTransportationImpact.impact += category.transportationImpact;
          _this.globalCarbonImpact.impact += category.carbonImpact;
        });

        _this.globalProductImpact.unit = _this.getUnit(_this.globalProductImpact.impact);
        _this.globalTransportationImpact.unit = _this.getUnit(_this.globalTransportationImpact.impact);
        _this.globalCarbonImpact.unit = _this.getUnit(_this.globalCarbonImpact.impact);
        _this.globalProductImpact.impact = _this.divideIfNecessary(_this.globalProductImpact.impact);
        _this.globalTransportationImpact.impact = _this.divideIfNecessary(_this.globalTransportationImpact.impact);
        _this.globalCarbonImpact.impact = _this.divideIfNecessary(_this.globalCarbonImpact.impact);
      });
    },
    getMoneyImpactFor: function getMoneyImpactFor(category) {
      var categoryMoneySpent = 0;
      var categoryProducts = this.products.filter(function (product) {
        return product.category.id === category.id;
      });
      categoryProducts.forEach(function (product) {
        var productPrice = parseFloat(product.price);
        categoryMoneySpent += productPrice;
      });
      category.moneySpent = categoryMoneySpent;
      category.co2PerEuro = category.carbonImpact / categoryMoneySpent;
      category.co2PerEuroFormatted = this.divideIfNecessary(category.co2PerEuro);
      category.co2PerEuroUnit = this.getUnit(category.co2PerEuro) + '/€';
    },
    getGlobalMoneyImpact: function getGlobalMoneyImpact() {
      var _this2 = this;

      this.categories.forEach(function (category) {
        _this2.globalMoneySpend = 0;
        _this2.globalCO2PerEuro = 0;
        var totalCo2 = 0;

        _this2.categories.forEach(function (category) {
          _this2.globalMoneySpend += category.moneySpent;
          totalCo2 += category.carbonImpact;
        });

        _this2.globalCO2PerEuro = totalCo2 / _this2.globalMoneySpend;
        _this2.globalCO2PerEuroFormatted = _this2.divideIfNecessary(_this2.globalCO2PerEuro);
        _this2.globalCO2PerEuroUnit = _this2.getUnit(_this2.globalCO2PerEuro) + '/€';
      });
    },
    divideIfNecessary: function divideIfNecessary(amount) {
      if (amount >= 1000000) {
        return this.roundToTwoDecimal(amount / 1000000);
      }

      if (amount >= 1000) {
        return this.roundToTwoDecimal(amount / 1000);
      }

      return this.roundToOneDecimal(amount);
    },
    getUnit: function getUnit(amount) {
      if (amount >= 2000000) {
        return 'tonnes de CO2';
      }

      if (amount >= 1000000) {
        return 'tonne de CO2';
      }

      if (amount >= 1000) {
        return 'kgCO2';
      }

      return 'gCO2';
    }
  }
});

/***/ })

}]);