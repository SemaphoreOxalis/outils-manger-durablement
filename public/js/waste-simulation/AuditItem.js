(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/AuditItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditItem.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/AuditItem.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_wasteSimulator_ResultsPageText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../texts/wasteSimulator/ResultsPageText */ "./resources/texts/wasteSimulator/ResultsPageText.js");
/* harmony import */ var _helpers_waste_simulation_calculations_AuditLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/waste-simulation/calculations/AuditLogic */ "./resources/js/helpers/waste-simulation/calculations/AuditLogic.js");
/* harmony import */ var _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/NumberFormatter */ "./resources/js/helpers/NumberFormatter.js");
/* harmony import */ var _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/DateFormatter */ "./resources/js/helpers/DateFormatter.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Imports des dépendances
 // logique du composant

 // utiles pour arrondir les nombres et formatter les dates


 // Composant enfant

var AuditSimulationList = function AuditSimulationList() {
  return __webpack_require__.e(/*! import() | js/waste-simulation/AuditSimulationList */ "js/waste-simulation/AuditSimulationList").then(__webpack_require__.bind(null, /*! ./AuditSimulationList.vue */ "./resources/js/components/waste-simulation/AuditSimulationList.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  // Déclaration des composants enfants
  components: {
    AuditSimulationList: AuditSimulationList
  },
  // déclaration de la dépendance à ces mixins (bibliothèques de fonctions)
  mixins: [_texts_wasteSimulator_ResultsPageText__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_waste_simulation_calculations_AuditLogic__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__["default"]],
  // données récupérées du composant parent (ResultsPage.vue)
  props: {
    auditRawData: Object
  },
  // données utilisées par ce composant
  data: function data() {
    return {
      input: {},
      computedValues: {},
      auditData: {}
    };
  },
  // A l'initialisation du composant
  mounted: function mounted() {
    // on récupère les données du parent (ResultsPage.vue)
    this.input = this.auditRawData; // et on initialise un objet qui va servir pour les composants enfants (AuditSimulationList.vue)

    this.computedValues = {
      globalFoodWasteVolume: this.globalFoodWasteVolume,
      foodWasteVolume: this.foodWasteVolume,
      foodWasteCost: this.foodWasteCost,
      wasteCostPerDish: this.wasteCostPerDish,
      amountOfDishesWasted: this.amountOfDishesWasted,
      ratio: this.ratio
    }; // Par souci de practicité, on stocke tout dans un unique objet

    this.auditData = _objectSpread(_objectSpread({}, this.input), this.computedValues);
    this.auditData.name = "Référence du " + this.formatToFrench(this.input.startDate) + " au " + this.formatToFrench(this.input.endDate);
    events.$on('get-audit-results', this.sendAuditResults);
    this.sendAuditResults();
  },
  methods: {
    sendAuditResults: function sendAuditResults() {
      this.$emit('sent-audit-results', this);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditItem.vue?vue&type=template&id=35baa244&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/AuditItem.vue?vue&type=template&id=35baa244& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "table-row table-header" }, [
        _c("div", { staticClass: "table-div bigger" }, [
          _c("div", [_vm._v(_vm._s(_vm.labels.name))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div" }, [
          _c("div", [_vm._v(_vm._s(_vm.labels.dishes_number))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(_vm.labels.dish_cost))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(_vm.labels.dish_weight))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(_vm.labels.waste_cost))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(_vm.labels.waste_volume))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex results text-center" }, [
          _c("div", { staticClass: "estimate pt-2" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.labels.waste_estimation.estimate) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "table-div highlighted-label-1 result" }, [
            _c("div", [
              _vm._v(_vm._s(_vm.labels.waste_estimation.in_g_per_dish))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "table-div highlighted-label-2 result" }, [
            _c("div", [_vm._v(_vm._s(_vm.labels.waste_estimation.in_euros))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "table-div highlighted-label-1 result" }, [
            _c("div", [
              _vm._v(_vm._s(_vm.labels.waste_estimation.in_dishes_number))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table-row ref" }, [
        _c("div", { staticClass: "table-div bigger" }, [
          _c("div", [_vm._v(_vm._s(this.auditData.name))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div" }, [
          _c("div", [
            _vm._v(_vm._s(this.separateThousands(this.input.dishesNumber)))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(this.input.dishCost))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(this.input.dishWeight))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(this.input.wasteTreatmentCost))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div shorter" }, [
          _c("div", [_vm._v(_vm._s(this.foodWasteVolume))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div" }, [
          _c("div", [_vm._v(_vm._s(this.ratio))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div" }, [
          _c("div", [
            _vm._v(_vm._s(this.separateThousands(this.foodWasteCost)))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-div" }, [
          _c("div", [
            _vm._v(_vm._s(this.separateThousands(this.amountOfDishesWasted)))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("audit-simulation-list", { attrs: { "audit-data": this.auditData } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/waste-simulation/AuditItem.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/waste-simulation/AuditItem.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuditItem_vue_vue_type_template_id_35baa244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuditItem.vue?vue&type=template&id=35baa244& */ "./resources/js/components/waste-simulation/AuditItem.vue?vue&type=template&id=35baa244&");
/* harmony import */ var _AuditItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuditItem.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/AuditItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuditItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuditItem_vue_vue_type_template_id_35baa244___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuditItem_vue_vue_type_template_id_35baa244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/AuditItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/AuditItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/AuditItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/AuditItem.vue?vue&type=template&id=35baa244&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/AuditItem.vue?vue&type=template&id=35baa244& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditItem_vue_vue_type_template_id_35baa244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditItem.vue?vue&type=template&id=35baa244& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditItem.vue?vue&type=template&id=35baa244&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditItem_vue_vue_type_template_id_35baa244___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditItem_vue_vue_type_template_id_35baa244___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/DateFormatter.js":
/*!***********************************************!*\
  !*** ./resources/js/helpers/DateFormatter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Petit helper pour formatter les dates en français
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    formatToFrench: function formatToFrench(date) {
      var formattedDate = new Date(date);
      return formattedDate.toLocaleDateString();
    }
  }
});

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

/***/ "./resources/js/helpers/waste-simulation/calculations/AuditLogic.js":
/*!**************************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/calculations/AuditLogic.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // données calculées
  computed: {
    // calcul de la part fermentescible globale ( environ 25 % du volume global de déchets - ou taux personnalisé)
    globalFoodWasteVolume: function globalFoodWasteVolume() {
      return this.roundToThreeDecimal(this.auditRawData.foodLeftoversVolumeInGlobalWaste / 100 * this.auditRawData.globalWasteVolume);
    },
    // calcul du volume de gaspillage alimentaire ( environ 75 % de la part fermentescible globale - ou taux personnalisé)
    foodWasteVolume: function foodWasteVolume() {
      return this.roundToThreeDecimal(this.auditRawData.actualFoodLeftoversInFoodWaste / 100 * this.globalFoodWasteVolume);
    },
    // coût du gaspillage alimentaire global = volume de gaspillage alimentaire X prix de traitement d'une T de déchets
    foodWasteCost: function foodWasteCost() {
      var foodWasteVolumeInKg = this.foodWasteVolume * 1000;
      var dishWeightInKg = this.auditRawData.dishWeight / 1000;
      return this.roundToTwoDecimal(this.foodWasteVolume * this.auditRawData.wasteTreatmentCost + foodWasteVolumeInKg / dishWeightInKg * this.auditRawData.dishCost);
    },
    // coût du gaspillage par repas = coût du gaspillage alimentaire global / nombre de repas produits
    wasteCostPerDish: function wasteCostPerDish() {
      return this.roundToThreeDecimal(this.foodWasteCost / this.auditRawData.dishesNumber);
    },
    // équivalence en nombre de repas = coût du gaspillage alimentaire global / prix de revient d'un repas
    amountOfDishesWasted: function amountOfDishesWasted() {
      return this.roundToOneDecimal(this.foodWasteCost / this.auditRawData.dishCost);
    },
    ratio: function ratio() {
      return this.roundToOneDecimal(this.foodWasteVolume / this.input.dishesNumber * 1000 * 1000);
    }
  }
});

/***/ })

}]);