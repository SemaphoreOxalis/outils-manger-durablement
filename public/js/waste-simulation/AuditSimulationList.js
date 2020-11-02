(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/AuditSimulationList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_waste_simulation_component_specific_SimulationsHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/waste-simulation/component-specific/SimulationsHelper */ "./resources/js/helpers/waste-simulation/component-specific/SimulationsHelper.js");
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
/* harmony import */ var _helpers_ExportHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/ExportHelper */ "./resources/js/helpers/ExportHelper.js");
/* harmony import */ var _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/DateFormatter */ "./resources/js/helpers/DateFormatter.js");
/* harmony import */ var _texts_wasteSimulator_ResultsPageText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../texts/wasteSimulator/ResultsPageText */ "./resources/texts/wasteSimulator/ResultsPageText.js");
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
// import des dépendances
// bibliothèque de fonctions chargée de traiter la liste des simulations
 // intéraction avec le localStorage

 // responsable de l'export Excel

 // pratique pour formatter les dates


 // composant enfant

var SimulationItem = function SimulationItem() {
  return __webpack_require__.e(/*! import() | js/waste-simulation/SimulationItem */ "js/waste-simulation/SimulationItem").then(__webpack_require__.bind(null, /*! ./SimulationItem.vue */ "./resources/js/components/waste-simulation/SimulationItem.vue"));
}; // Vue-draggable (https://github.com/SortableJS/Vue.Draggable) pour le drag'n'drop


var draggable = function draggable() {
  return __webpack_require__.e(/*! import() | js/draggable */ "vendors~js/draggable").then(__webpack_require__.t.bind(null, /*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js", 7));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  // Composants enfants
  components: {
    SimulationItem: SimulationItem,
    draggable: draggable
  },
  // déclaration de dépendance à ces fichiers
  mixins: [_helpers_waste_simulation_component_specific_SimulationsHelper__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_ExportHelper__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__["default"], _texts_wasteSimulator_ResultsPageText__WEBPACK_IMPORTED_MODULE_4__["default"]],
  // Données reçues du composant parent (AuditItem.vue)
  props: {
    auditData: Object
  },
  // Initialisation des données utilisées par le composant
  data: function data() {
    return {
      simulations: [],
      counter: 0,
      dataSource: null,
      "export": {},
      compareToPreviousSim: false
    };
  },
  // A l'initialisation du composant
  mounted: function mounted() {
    // On vérifie qu'il existe ou non des simulations enregistrées en localStorage
    if (localStorage.hasOwnProperty('simulations')) {
      this.simulations = this.getSimulationsFromLocalStorage();
      this.refreshCounter();
    } // Fait le lien entre le composant grand-parent (ResultsPage.vue) où se trouve le bouton et ce composant


    events.$on('reset-simulations', this.resetSimulations); // listeners

    events.$on('export-simulations', this.exportSimulations);
    events.$on('add-simulation', this.addSimulationToSimList); // nécessaire pour savoir sur quoi se baser en cas de clic sur "nouvelle simulation"

    this.getDataSourceForNewSimulation();
  },
  // Fonction inhérentes au composant
  methods: {
    // Met à jour le compteur qui sert à incrémenter les id des simulations
    refreshCounter: function refreshCounter() {
      if (this.simulations.length > 0) {
        // inspiré de www.danvega.dev/blog/2019/03/14/find-max-array-objects-javascript
        // Plus efficace qu'un loop basique
        this.counter = Math.max.apply(Math, _toConsumableArray(this.simulations.map(function (simulation) {
          return simulation.id;
        })));
      } else {
        this.counter = 0;
      }
    },
    // Utile pour le composant enfant SimulationItem.vue, permet de lui communiquer les données de son prédécesseur
    previousSimulation: function previousSimulation(index) {
      // si la simulation est en première position, sa "previousSimulation" se trouve être l'audit
      return index > 0 ? this.simulations[index - 1] : this.auditData;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=template&id=de02bb94&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=template&id=de02bb94& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "simulations" },
    [
      _c(
        "draggable",
        {
          staticClass: "dragArea",
          attrs: {
            animation: 150,
            handle: ".handle",
            chosenClass: "handling",
            filter: ".ignore-draggable",
            preventOnFilter: false
          },
          on: { change: _vm.saveChangesToLocalStorage },
          model: {
            value: _vm.simulations,
            callback: function($$v) {
              _vm.simulations = $$v
            },
            expression: "simulations"
          }
        },
        _vm._l(_vm.simulations, function(simulation, index) {
          return _c("simulation-item", {
            key: simulation.id,
            attrs: {
              simulation: simulation,
              index: index,
              "audit-data": _vm.auditData,
              "compare-to-previous-sim": _vm.compareToPreviousSim,
              "previous-simulation": _vm.previousSimulation(index)
            },
            on: {
              "delete-simulation": _vm.deleteSimulation,
              "save-changes": _vm.saveChangesToLocalStorage,
              "update-simulations-component": _vm.updateSimulationsList,
              "update-simulations-component-will-full-info-for-export":
                _vm.updateSimulationsListWithFullInfo
            }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "custom-control switch center" }, [
        _c("label", [
          _vm._v("\n            " + _vm._s(_vm.compare_to.audit) + " "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.compareToPreviousSim,
                expression: "compareToPreviousSim"
              }
            ],
            staticClass: "custom-control-input",
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.compareToPreviousSim)
                ? _vm._i(_vm.compareToPreviousSim, null) > -1
                : _vm.compareToPreviousSim
            },
            on: {
              change: function($event) {
                var $$a = _vm.compareToPreviousSim,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.compareToPreviousSim = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.compareToPreviousSim = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.compareToPreviousSim = $$c
                }
              }
            }
          }),
          _c("span", { staticClass: "lever" }),
          _vm._v(_vm._s(_vm.compare_to.previous_sim) + "\n        ")
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/waste-simulation/AuditSimulationList.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/AuditSimulationList.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuditSimulationList_vue_vue_type_template_id_de02bb94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuditSimulationList.vue?vue&type=template&id=de02bb94& */ "./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=template&id=de02bb94&");
/* harmony import */ var _AuditSimulationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuditSimulationList.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuditSimulationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuditSimulationList_vue_vue_type_template_id_de02bb94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuditSimulationList_vue_vue_type_template_id_de02bb94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/AuditSimulationList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditSimulationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditSimulationList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditSimulationList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=template&id=de02bb94&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=template&id=de02bb94& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditSimulationList_vue_vue_type_template_id_de02bb94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditSimulationList.vue?vue&type=template&id=de02bb94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/AuditSimulationList.vue?vue&type=template&id=de02bb94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditSimulationList_vue_vue_type_template_id_de02bb94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditSimulationList_vue_vue_type_template_id_de02bb94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/ExportHelper.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/ExportHelper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Helper pour l'export Excel
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    exportSimulations: function exportSimulations() {
      // Demande aux composants concernés de lui envoyer leurs données complètes
      events.$emit('get-full-simulations-info-for-export'); // Création de l'objet à envoyer au back-end

      this["export"].mode = this.compareToPreviousSim ? 'simulations comparées entre elles' : 'simulations comparées à l\'audit';
      this["export"].audit = this.auditData;
      this["export"].audit.auditDate = this.getAuditDateFromLocalStorage();
      this["export"].simulations = this.simulations; // appel AJAX vers le côté Laravel (ExportController.php)

      makeSimsExportAjaxCall(this["export"]).then(function (response) {
        //TODO: make it compatible with IE11
        var headers = response.headers;
        var blob = new Blob([response.data], {
          type: headers['Content-type']
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "Rapport-gaspillage_" + Date.now() + ".xlsx";
        link.click();
      })["catch"](function (e) {
        console.log(e);
      });
    },
    exportBaskets: function exportBaskets() {
      // Demande aux composants concernés de lui envoyer leurs données complètes
      events.$emit('get-full-simulations-info-for-export'); // Création de l'objet à envoyer au back-end

      this["export"].mode = this.compareToPreviousBasket ? 'Chaque panier est comparé au précédent' : 'Les paniers sont comparés au premier panier';
      this["export"].baskets = this.baskets;
      this["export"].date = this.getBasketsDateFromLocalStorage(); // appel AJAX vers le côté Laravel (ExportController.php)

      makeBasketsExportAjaxCall(this["export"]).then(function (response) {
        var headers = response.headers;
        var blob = new Blob([response.data], {
          type: headers['Content-type']
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = "Rapport-carbone_" + Date.now() + ".xlsx";
        link.click();
      })["catch"](function (e) {
        console.log(e);
      });
    }
  }
});

function makeSimsExportAjaxCall(exportData) {
  return axios.post('/export-sims', exportData, {
    responseType: 'arraybuffer'
  });
}

function makeBasketsExportAjaxCall(exportData) {
  return axios.post('/export-baskets', exportData, {
    responseType: 'arraybuffer'
  });
}

/***/ }),

/***/ "./resources/js/helpers/waste-simulation/component-specific/SimulationsHelper.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/component-specific/SimulationsHelper.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// helper pour le composant AuditSimulationList.vue
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // Met à jour la liste des simulations avec les données strictement nécessaires au fonctionnement de l'application
    updateSimulationsList: function updateSimulationsList(simulation) {
      this.simulations[simulation.index].wasteCostPerDish = simulation.wasteCostPerDish;
      this.simulations[simulation.index].foodWasteCost = simulation.foodWasteCost;
      this.simulations[simulation.index].amountOfDishesWasted = simulation.amountOfDishesWasted;
      this.simulations[simulation.index].ratio = simulation.ratio;
      this.saveChangesToLocalStorage();
    },
    // Met à jour la liste des simulations avec les données complètes (différences et pourcentages) pour préparer un export
    updateSimulationsListWithFullInfo: function updateSimulationsListWithFullInfo(simulation) {
      this.updateSimulationsList(simulation);
      this.simulations[simulation.index].deltas = {};
      this.simulations[simulation.index].deltas.dishesNumber = simulation.dishesNumberDelta;
      this.simulations[simulation.index].deltas.dishCost = simulation.dishCostDelta;
      this.simulations[simulation.index].deltas.dishWeight = simulation.dishWeightDelta;
      this.simulations[simulation.index].deltas.wasteTreatmentCost = simulation.wasteTreatmentCostDelta;
      this.simulations[simulation.index].deltas.foodWasteVolume = simulation.foodWasteVolumeDelta;
      this.simulations[simulation.index].deltas.wasteCostPerDish = simulation.wasteCostPerDishDelta;
      this.simulations[simulation.index].deltas.foodWasteCost = simulation.foodWasteCostDelta;
      this.simulations[simulation.index].deltas.amountOfDishesWasted = simulation.amountOfDishesWastedDelta;
      this.simulations[simulation.index].deltas.ratio = simulation.ratioDelta;
      this.simulations[simulation.index].percentages = {};
      this.simulations[simulation.index].percentages.dishesNumber = simulation.dishesNumberDeltaPercentage;
      this.simulations[simulation.index].percentages.dishCost = simulation.dishCostDeltaPercentage;
      this.simulations[simulation.index].percentages.dishWeight = simulation.dishWeightDeltaPercentage;
      this.simulations[simulation.index].percentages.wasteTreatmentCost = simulation.wasteTreatmentCostDeltaPercentage;
      this.simulations[simulation.index].percentages.foodWasteVolume = simulation.foodWasteVolumeDeltaPercentage;
      this.simulations[simulation.index].percentages.wasteCostPerDish = simulation.wasteCostPerDishDeltaPercentage;
      this.simulations[simulation.index].percentages.foodWasteCost = simulation.foodWasteCostDeltaPercentage;
      this.simulations[simulation.index].percentages.amountOfDishesWasted = simulation.amountOfDishesWastedDeltaPercentage;
      this.simulations[simulation.index].percentages.ratio = simulation.ratioDeltaPercentage;
      this.saveChangesToLocalStorage();
    },
    // Efface une simulation
    deleteSimulation: function deleteSimulation(index) {
      this.simulations.splice(index, 1);
      this.refreshCounter();
      this.saveChangesToLocalStorage();
    },
    // Nécessaire pour savoir sur quoi doit se baser une 'nouvelle simulation'
    getDataSourceForNewSimulation: function getDataSourceForNewSimulation() {
      this.dataSource = this.simulations.length === 0 ? this.auditData : this.simulations[this.simulations.length - 1];
    },
    // Ajoute une simulation
    addSimulationToSimList: function addSimulationToSimList() {
      this.getDataSourceForNewSimulation();
      this.counter++;
      this.simulations.push({
        id: this.counter,
        name: 'simulation ' + this.counter,
        dishesNumber: this.dataSource.dishesNumber,
        dishCost: this.dataSource.dishCost,
        dishWeight: this.dataSource.dishWeight,
        wasteTreatmentCost: this.dataSource.wasteTreatmentCost,
        foodWasteVolume: this.dataSource.foodWasteVolume,
        wasteCostPerDish: this.dataSource.wasteCostPerDish,
        foodWasteCost: this.dataSource.foodWasteCost,
        amountOfDishesWasted: this.dataSource.amountOfDishesWasted,
        ratio: this.dataSource.ratio
      });
      this.saveChangesToLocalStorage();
      this.$nextTick(function () {
        events.$emit('validate-simulations');
      });
    },
    // Sauvegarde les changements des simulations en localStorage
    saveChangesToLocalStorage: function saveChangesToLocalStorage() {
      var sims = JSON.stringify(this.simulations);
      this.saveSimulationsToLocalStorage(sims);
    },
    // Remet à zéro les simulations (pas l'audit)
    resetSimulations: function resetSimulations() {
      this.deleteSimulationsFromLocalStorage();
      this.simulations = [];
      this.counter = 0;
    }
  }
});

/***/ })

}]);