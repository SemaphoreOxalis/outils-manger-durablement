(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/SimulationItem"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_waste_simulation_component_specific_SimulationHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/waste-simulation/component-specific/SimulationHelper */ "./resources/js/helpers/waste-simulation/component-specific/SimulationHelper.js");
/* harmony import */ var _helpers_waste_simulation_calculations_SimulationLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/waste-simulation/calculations/SimulationLogic */ "./resources/js/helpers/waste-simulation/calculations/SimulationLogic.js");
/* harmony import */ var _helpers_waste_simulation_validation_SimulationValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/waste-simulation/validation/SimulationValidation */ "./resources/js/helpers/waste-simulation/validation/SimulationValidation.js");
/* harmony import */ var _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/NumberFormatter */ "./resources/js/helpers/NumberFormatter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// traite les simulations (add, remove, style...)
 // La logique principale de composant (calculs)

 // Validation

 // utile pour arrondir les nombres


/* harmony default export */ __webpack_exports__["default"] = ({
  // déclaration de dépendance vis-à-vis de ces fichiers
  mixins: [_helpers_waste_simulation_component_specific_SimulationHelper__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_waste_simulation_calculations_SimulationLogic__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_waste_simulation_validation_SimulationValidation__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_3__["default"]],
  // données récupérées du composant parent (AuditSimulationList.vue)
  props: {
    simulation: Object,
    index: Number,
    auditData: Object,
    previousSimulation: Object,
    compareToPreviousSim: Boolean
  },
  data: function data() {
    return {
      ratio: null
    };
  },
  // Propriétés calculées du composant
  computed: {
    // récupère les données de la simulation précédente (qui se trouve être l'audit si elle est en première position)
    previousSim: function previousSim() {
      if (!this.compareToPreviousSim) {
        return this.auditData;
      }

      return this.isFirst ? this.auditData : this.previousSimulation;
    },
    // Booléen qui permet à une simulation de savoir si elle est placée juste en dessous de l'audit
    isFirst: function isFirst() {
      return this.index === 0;
    },
    // Vérifie que les données saisies sont valides
    isInvalid: function isInvalid() {
      if (this.simulation.dishesNumber < 1 || this.simulation.dishCost < 0.01 || this.simulation.dishWeight < 1 || this.simulation.wasteTreatmentCost < 0.01 || this.simulation.foodWasteVolume < 0.001) {
        return true;
      }

      return false;
    }
  },
  // propriétés à "surveiller", elles invoquent la fonction 'updateSimulationsComponent' dès qu'elles changent
  watch: {
    foodWasteCost: function foodWasteCost() {
      this.updateSimulationsComponent();
    },
    wasteCostPerDish: function wasteCostPerDish() {
      this.updateSimulationsComponent();
    },
    amountOfDishesWasted: function amountOfDishesWasted() {
      this.updateSimulationsComponent();
    },
    ratio: function ratio() {
      this.updateSimulationsComponent();
    }
  },
  // A l'initialisation du composant
  mounted: function mounted() {
    // Listeners
    events.$on('get-full-simulations-info-for-export', this.sendSimulationFullInfo);
    events.$on('validate-simulations', this.validate);
    this.setRatio();
  },
  // Fonctions inhérentes à ce composant
  methods: {
    // Demande au composant parent (Simulations) de mettre à jour sa liste de simulations
    updateSimulationsComponent: function updateSimulationsComponent() {
      this.$emit('update-simulations-component', this);
    },
    // Envoie au composant parent (Simulations) TOUTES les données (y compris deltas et pourcentages) pour préparer l'export
    sendSimulationFullInfo: function sendSimulationFullInfo() {
      this.$emit('update-simulations-component-will-full-info-for-export', this);
    },
    modifyWasteVolume: function modifyWasteVolume() {
      this.simulation.foodWasteVolume = this.roundToThreeDecimal(this.simulation.dishesNumber * this.ratio / 1000 / 1000);
      this.saveChanges();
    },
    setRatio: function setRatio() {
      this.ratio = this.roundToTwoDecimal(this.simulation.foodWasteVolume / this.simulation.dishesNumber * 1000 * 1000);
      this.saveChanges();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=template&id=e8de7e18&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=template&id=e8de7e18& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "handle table-row" }, [
    _c("div", { staticClass: "table-div bigger d-flex" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.simulation.name,
            expression: "simulation.name"
          }
        ],
        staticClass:
          "ignore-draggable custom-input browser-default align-self-end",
        attrs: { type: "text", required: "" },
        domProps: { value: _vm.simulation.name },
        on: {
          change: _vm.saveChanges,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.simulation, "name", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [_c("small", [_vm._v(_vm._s(_vm.dishesNumberDelta))])]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getStyle(_vm.dishesNumberDeltaPercentage, true)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.simulation.dishesNumber,
            expression: "simulation.dishesNumber"
          }
        ],
        staticClass:
          "ignore-draggable custom-input browser-default strong number-field",
        attrs: { type: "number", required: "", min: "1", step: "1" },
        domProps: { value: _vm.simulation.dishesNumber },
        on: {
          change: function($event) {
            return _vm.modifyWasteVolume()
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.simulation, "dishesNumber", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div shorter" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [_c("small", [_vm._v(_vm._s(_vm.dishCostDelta))])]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.getStyle(_vm.dishCostDeltaPercentage, false))
          }
        })
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.simulation.dishCost,
            expression: "simulation.dishCost"
          }
        ],
        staticClass:
          "ignore-draggable custom-input browser-default strong number-field",
        attrs: { type: "number", required: "", min: "0.01", step: "0.01" },
        domProps: { value: _vm.simulation.dishCost },
        on: {
          change: _vm.saveChanges,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.simulation, "dishCost", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div shorter" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [_c("small", [_vm._v(_vm._s(_vm.dishWeightDelta))])]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getStyle(_vm.dishWeightDeltaPercentage, false)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.simulation.dishWeight,
            expression: "simulation.dishWeight"
          }
        ],
        staticClass:
          "ignore-draggable custom-input browser-default strong number-field",
        attrs: { type: "number", required: "", min: "1", step: "1" },
        domProps: { value: _vm.simulation.dishWeight },
        on: {
          change: _vm.saveChanges,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.simulation, "dishWeight", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div shorter" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [_c("small", [_vm._v(_vm._s(_vm.wasteTreatmentCostDelta))])]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getStyle(_vm.wasteTreatmentCostDeltaPercentage, false)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.simulation.wasteTreatmentCost,
            expression: "simulation.wasteTreatmentCost"
          }
        ],
        staticClass:
          "ignore-draggable custom-input browser-default strong number-field",
        attrs: { type: "number", required: "", min: "0.01", step: "0.01" },
        domProps: { value: _vm.simulation.wasteTreatmentCost },
        on: {
          change: _vm.saveChanges,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.simulation, "wasteTreatmentCost", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div shorter" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [_c("small", [_vm._v(_vm._s(_vm.foodWasteVolumeDelta))])]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getStyle(_vm.foodWasteVolumeDeltaPercentage, false)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.simulation.foodWasteVolume,
            expression: "simulation.foodWasteVolume"
          }
        ],
        staticClass:
          "ignore-draggable custom-input browser-default strong number-field",
        attrs: { type: "number", required: "", min: "0.001", step: "0.001" },
        domProps: { value: _vm.simulation.foodWasteVolume },
        on: {
          change: _vm.setRatio,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.simulation, "foodWasteVolume", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [_c("small", [_vm._v(_vm._s(_vm.ratioDelta))])]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(_vm.getStyle(_vm.ratioDeltaPercentage, false))
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "strong align-with-inputs" }, [
        _vm._v(_vm._s(this.ratio))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [_c("small", [_vm._v(_vm._s(_vm.foodWasteCostDelta))])]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getStyle(_vm.foodWasteCostDeltaPercentage, false)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "strong align-with-inputs" }, [
        _vm._v(_vm._s(this.separateThousands(_vm.foodWasteCost)))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-div" }, [
      _c("div", { staticClass: "d-flex justify-content-around text-shrink" }, [
        _c("div", [
          _c("small", [_vm._v(_vm._s(_vm.amountOfDishesWastedDelta))])
        ]),
        _vm._v(" "),
        _c("div", {
          domProps: {
            innerHTML: _vm._s(
              _vm.getStyle(_vm.amountOfDishesWastedDeltaPercentage, false)
            )
          }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "strong align-with-inputs" }, [
        _vm._v(_vm._s(this.separateThousands(_vm.amountOfDishesWasted)))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "trash-icon" }, [
      _c(
        "a",
        {
          staticClass: "info-bubble",
          attrs: { title: "Effacer cette simulation" },
          on: {
            click: function($event) {
              return _vm.removeSimulation(_vm.index)
            }
          }
        },
        [_c("i", { staticClass: "icon" }, [_vm._v("")])]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/waste-simulation/SimulationItem.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/waste-simulation/SimulationItem.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SimulationItem_vue_vue_type_template_id_e8de7e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SimulationItem.vue?vue&type=template&id=e8de7e18& */ "./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=template&id=e8de7e18&");
/* harmony import */ var _SimulationItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SimulationItem.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SimulationItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SimulationItem_vue_vue_type_template_id_e8de7e18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SimulationItem_vue_vue_type_template_id_e8de7e18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/SimulationItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimulationItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=template&id=e8de7e18&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=template&id=e8de7e18& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationItem_vue_vue_type_template_id_e8de7e18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SimulationItem.vue?vue&type=template&id=e8de7e18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/SimulationItem.vue?vue&type=template&id=e8de7e18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationItem_vue_vue_type_template_id_e8de7e18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SimulationItem_vue_vue_type_template_id_e8de7e18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/waste-simulation/calculations/SimulationLogic.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/calculations/SimulationLogic.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Logique du composant SimulationItem.vue
/* harmony default export */ __webpack_exports__["default"] = ({
  // propriétés recalculées dès qu'elles changent
  computed: {
    // Différences en valeur absolue et en pourcentage (previousSim se trouve être l'audit si la simulation est en première place)
    dishesNumberDelta: function dishesNumberDelta() {
      return this.getDelta(this.simulation.dishesNumber, this.previousSim.dishesNumber);
    },
    dishesNumberDeltaPercentage: function dishesNumberDeltaPercentage() {
      return this.getDeltaPercentage(this.simulation.dishesNumber, this.previousSim.dishesNumber);
    },
    dishCostDelta: function dishCostDelta() {
      return this.getDelta(this.simulation.dishCost, this.previousSim.dishCost);
    },
    dishCostDeltaPercentage: function dishCostDeltaPercentage() {
      return this.getDeltaPercentage(this.simulation.dishCost, this.previousSim.dishCost);
    },
    dishWeightDelta: function dishWeightDelta() {
      return this.getDelta(this.simulation.dishWeight, this.previousSim.dishWeight);
    },
    dishWeightDeltaPercentage: function dishWeightDeltaPercentage() {
      return this.getDeltaPercentage(this.simulation.dishWeight, this.previousSim.dishWeight);
    },
    wasteTreatmentCostDelta: function wasteTreatmentCostDelta() {
      return this.getDelta(this.simulation.wasteTreatmentCost, this.previousSim.wasteTreatmentCost);
    },
    wasteTreatmentCostDeltaPercentage: function wasteTreatmentCostDeltaPercentage() {
      return this.getDeltaPercentage(this.simulation.wasteTreatmentCost, this.previousSim.wasteTreatmentCost);
    },
    foodWasteVolumeDelta: function foodWasteVolumeDelta() {
      return this.getDelta(this.simulation.foodWasteVolume, this.previousSim.foodWasteVolume);
    },
    foodWasteVolumeDeltaPercentage: function foodWasteVolumeDeltaPercentage() {
      return this.getDeltaPercentage(this.simulation.foodWasteVolume, this.previousSim.foodWasteVolume);
    },
    wasteCostPerDishDelta: function wasteCostPerDishDelta() {
      return this.getDelta(this.wasteCostPerDish, this.previousSim.wasteCostPerDish);
    },
    wasteCostPerDishDeltaPercentage: function wasteCostPerDishDeltaPercentage() {
      return this.getDeltaPercentage(this.wasteCostPerDish, this.previousSim.wasteCostPerDish);
    },
    ratioDelta: function ratioDelta() {
      return this.getDelta(this.ratio, this.previousSim.ratio);
    },
    ratioDeltaPercentage: function ratioDeltaPercentage() {
      return this.getDeltaPercentage(this.ratio, this.previousSim.ratio);
    },
    foodWasteCostDelta: function foodWasteCostDelta() {
      return this.getDelta(this.foodWasteCost, this.previousSim.foodWasteCost);
    },
    foodWasteCostDeltaPercentage: function foodWasteCostDeltaPercentage() {
      return this.getDeltaPercentage(this.foodWasteCost, this.previousSim.foodWasteCost);
    },
    amountOfDishesWastedDelta: function amountOfDishesWastedDelta() {
      return this.getDelta(this.amountOfDishesWasted, this.previousSim.amountOfDishesWasted);
    },
    amountOfDishesWastedDeltaPercentage: function amountOfDishesWastedDeltaPercentage() {
      return this.getDeltaPercentage(this.amountOfDishesWasted, this.previousSim.amountOfDishesWasted);
    },
    // coût du gaspillage alimentaire global = volume de gaspillage alimentaire X prix de traitement d'une T de déchets
    foodWasteCost: function foodWasteCost() {
      var foodWasteVolumeInKg = this.simulation.foodWasteVolume * 1000;
      var dishWeightInKg = this.simulation.dishWeight / 1000;
      return this.roundToTwoDecimal(this.simulation.foodWasteVolume * this.simulation.wasteTreatmentCost + foodWasteVolumeInKg / dishWeightInKg * this.simulation.dishCost);
    },
    // coût du gaspillage par repas = coût du gaspillage alimentaire global / nombre de repas produits
    wasteCostPerDish: function wasteCostPerDish() {
      return this.roundToThreeDecimal(this.foodWasteCost / this.simulation.dishesNumber);
    },
    // équivalence en nombre de repas = coût du gaspillage alimentaire global / prix de revient d'un repas
    amountOfDishesWasted: function amountOfDishesWasted() {
      return this.roundToOneDecimal(this.foodWasteCost / this.simulation.dishCost);
    }
  },
  // Fonctions inhérentes au composant
  methods: {
    // Renvoie la différence en valeur absolue entre la simulation précédente et celle-ci
    getDelta: function getDelta(simData, sourceData) {
      var result = this.roundToThreeDecimal(simData - sourceData); // si le résultat et supérieur à 0, on lui ajoute le symbole '+'

      return result >= 0 ? "+" + result : result;
    },
    // Renvoie la différence en pourcentage entre la simulation précédente et celle-ci
    getDeltaPercentage: function getDeltaPercentage(simData, sourceData) {
      var result = this.roundToOneDecimal( // - 100 pour ne pas avoir +150% si on passe de 100 à 150, mais seulement +50%
      simData * 100 / sourceData - 100); // si le résultat est positif, on lui ajoute le symbole '+'

      return result > 0 ? "+" + result + "%" : result + "%";
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/waste-simulation/component-specific/SimulationHelper.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/component-specific/SimulationHelper.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// helper pour le composant SimulationItem.vue
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // Effacer une simulation
    removeSimulation: function removeSimulation(index) {
      // Envoie la demande au composant parent (AuditSimulationList.vue) qui s'en occupe
      this.$emit('delete-simulation', index);
    },
    // Sauvegarder les modifications faites à la simulation
    saveChanges: function saveChanges() {
      this.validate(); // Envoie la demande au composant parent (AuditSimulationList.vue) qui s'en occupe

      this.$emit('save-changes');
    },
    // Style appliqué aux pourcentages (flèches et couleurs)
    // la propriété upIsGood nous permet de savoir si une modification est bénéfique et de lui appliquer la bonne couleur
    // ( + de repas produits = bien, mais + de gaspillage = mauvais)
    getStyle: function getStyle(value, upIsGood) {
      if (value.startsWith('+')) {
        var cssClass = upIsGood === true ? 'good' : 'bad';
        return '<small class="' + cssClass + '"><i class="icon icon-long-arrow-right up"></i> ' + value + ' </small>';
      } else if (value.startsWith('-')) {
        var _cssClass = upIsGood === true ? 'bad' : 'good';

        return '<small class="' + _cssClass + '"><i class="icon icon-long-arrow-right down"></i> ' + value + ' </small>';
      }

      return '<small>' + value + '</small>';
    }
  }
});

/***/ })

}]);