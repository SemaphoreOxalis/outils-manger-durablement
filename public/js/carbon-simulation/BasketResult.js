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


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_helpers_carbon_simulation_calculations_basketLogic__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    products: Array,
    categories: Array,
    basketId: String
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.basket-results {\n    width: available;\n    border: 1px solid black;\n}\na.nav-link.active {\n    background-color: var(--main-color);\n}\n.info-bubble:hover, .info-bubble:focus {\n    background: rgba(0,0,0,.4);\n    box-shadow: 0 1px 0 rgba(255,255,255,.4);\n}\n.info-bubble span {\n    position: absolute;\n    margin-top: 23px;\n    margin-left: -35px;\n    background-color: var(--main-color);\n    color: var(--dark-color);\n    padding: 15px;\n    border-radius: 3px;\n    box-shadow: 0 0 2px rgba(0,0,0,.5);\n    transform: scale(0) rotate(-12deg);\n    transition: all .25s;\n    opacity: 0;\n    z-index: 10;\n}\n.info-bubble:hover span, .info-bubble:focus span {\n    transform: scale(1) rotate(0);\n    opacity: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketResult.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css&");

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
  return _c("div", { staticClass: "basket-results" }, [
    _c("div", { staticClass: "nav justify-content-around" }, [
      _c(
        "a",
        {
          staticClass: "nav-link active button alter",
          attrs: {
            href: "#" + _vm.basketId + "-carbon-results",
            "data-toggle": "tab"
          }
        },
        [_vm._v("Bilan CO2")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "nav-link button alter",
          attrs: {
            href: "#" + _vm.basketId + "-money-results",
            "data-toggle": "tab"
          }
        },
        [_vm._v("Bilan €")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content" }, [
      _c(
        "div",
        {
          staticClass: "tab-pane active",
          attrs: { id: _vm.basketId + "-carbon-results" }
        },
        [
          _c("p", [_vm._v("catégorie - impact global")]),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c("p", [
              _vm._v(
                "\n                " +
                  _vm._s(category.name) +
                  " :\n\n                "
              ),
              _c("a", { staticClass: "info-bubble", attrs: { href: "#" } }, [
                _vm._v(
                  _vm._s(category.carbonFormattedImpact) +
                    " " +
                    _vm._s(category.carbonImpactUnit) +
                    "\n                    "
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
            ])
          }),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Total :")]),
            _vm._v(" "),
            _c("a", { staticClass: "info-bubble", attrs: { href: "#" } }, [
              _vm._v(
                _vm._s(_vm.globalCarbonImpact.impact) +
                  " " +
                  _vm._s(_vm.globalCarbonImpact.unit) +
                  "\n                    "
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
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane",
          attrs: { id: _vm.basketId + "-money-results" }
        },
        [
          _c("p", [_vm._v("catégorie - montant")]),
          _vm._v(" "),
          _vm._l(_vm.categories, function(category) {
            return _c("p", [
              _vm._v(
                "\n                " +
                  _vm._s(category.name) +
                  " :\n                "
              ),
              _c("a", { staticClass: "info-bubble", attrs: { href: "#" } }, [
                _vm._v(
                  _vm._s(category.moneySpent) + " €\n                    "
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
            ])
          }),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v("Total :")]),
            _vm._v(" "),
            _c("a", { staticClass: "info-bubble", attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.globalMoneySpend) + " €\n                    "),
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
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
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
/* empty/unused harmony star reexport *//* harmony import */ var _BasketResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BasketResult.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketResult.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
        return this.roundToThreeDecimal(amount / 1000000);
      }

      if (amount >= 1000) {
        return this.roundToThreeDecimal(amount / 1000);
      }

      return this.roundToOneDecimal(amount);
    },
    getUnit: function getUnit(amount) {
      if (amount >= 2000000) {
        return 'tonnes de CO²';
      }

      if (amount >= 1000000) {
        return 'tonne de CO²';
      }

      if (amount >= 1000) {
        return 'kgCO²';
      }

      return 'gCO²';
    }
  }
});

/***/ })

}]);