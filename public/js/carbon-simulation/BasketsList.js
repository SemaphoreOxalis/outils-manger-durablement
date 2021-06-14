(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketsList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
/* harmony import */ var _helpers_carbon_simulation_groupedActionFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/carbon-simulation/groupedActionFilters */ "./resources/js/helpers/carbon-simulation/groupedActionFilters.js");
/* harmony import */ var _helpers_carbon_simulation_component_specific_basketsListHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/carbon-simulation/component-specific/basketsListHelper */ "./resources/js/helpers/carbon-simulation/component-specific/basketsListHelper.js");
/* harmony import */ var _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../texts/carbonSimulator/BasketSimulatorText */ "./resources/texts/carbonSimulator/BasketSimulatorText.js");
/* harmony import */ var _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/DateFormatter */ "./resources/js/helpers/DateFormatter.js");
/* harmony import */ var _helpers_ExportHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/ExportHelper */ "./resources/js/helpers/ExportHelper.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var BasketItem = function BasketItem() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/BasketItem */ "js/carbon-simulation/BasketItem").then(__webpack_require__.bind(null, /*! ./BasketItem */ "./resources/js/components/carbon-simulation/BasketItem.vue"));
};

var ActionConfirmation = function ActionConfirmation() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/ActionConfirmation */ "js/carbon-simulation/ActionConfirmation").then(__webpack_require__.bind(null, /*! ./ActionConfirmation */ "./resources/js/components/carbon-simulation/ActionConfirmation.vue"));
};

var GroupedActionPopUp = function GroupedActionPopUp() {
  return __webpack_require__.e(/*! import() | js/carbon-simulation/GroupedActionPopUp */ "js/carbon-simulation/GroupedActionPopUp").then(__webpack_require__.bind(null, /*! ./GroupedActionPopUp */ "./resources/js/components/carbon-simulation/GroupedActionPopUp.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BasketItem: BasketItem,
    ActionConfirmation: ActionConfirmation,
    GroupedActionPopUp: GroupedActionPopUp
  },
  mixins: [_helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_carbon_simulation_groupedActionFilters__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_carbon_simulation_component_specific_basketsListHelper__WEBPACK_IMPORTED_MODULE_2__["default"], _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_4__["default"], _helpers_ExportHelper__WEBPACK_IMPORTED_MODULE_5__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: {
    origins: Array,
    categories: Array,
    productToAdd: Object
  },
  data: function data() {
    return {
      baskets: [],
      showConfirmationModal: false,
      action: '',
      affectedBasket: {},
      affectedBasketIndex: -1,
      showGroupedActionModal: false,
      compareToPreviousBasket: false,
      "export": {}
    };
  },
  computed: {
    selectedBaskets: function selectedBaskets() {
      return this.baskets.filter(function (basket) {
        return basket.isSelected === true;
      });
    },
    basketsCounter: function basketsCounter() {
      if (this.baskets.length > 0) {
        return Math.max.apply(Math, _toConsumableArray(this.baskets.map(function (basket) {
          return basket.id.substring(7); // "basket_" id prefix is 7 characters long
        })));
      } else {
        return 0;
      }
    },
    firstBasket: function firstBasket() {
      return this.baskets[0];
    }
  },
  created: function created() {
    if (localStorage.hasOwnProperty('baskets')) {
      this.baskets = JSON.parse(localStorage.getItem('baskets'));
    } else {
      this.addBasket('votre liste');
    }

    events.$on('send-selected-baskets', this.sendSelectedBaskets);
    events.$on('save-baskets-results', this.saveBasketsResults);
  },
  mounted: function mounted() {
    events.$emit('get-internal-counters');
  },
  methods: {
    sendSelectedBaskets: function sendSelectedBaskets() {
      this.$emit('selected-baskets', this.selectedBaskets);
    },
    showConfirmationPopUp: function showConfirmationPopUp(basket, index, action) {
      this.action = action;
      this.affectedBasket = basket;
      this.affectedBasketIndex = index;
      this.showConfirmationModal = true;
    },
    showGroupedActionPopUp: function showGroupedActionPopUp(index) {
      this.affectedBasketIndex = index;
      this.showGroupedActionModal = true;
    },
    previousBasket: function previousBasket(index) {
      return index > 0 ? this.baskets[index - 1] : null;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=template&id=703443b0&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=template&id=703443b0& ***!
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "baskets-list" },
      [
        _vm.showConfirmationModal
          ? _c("action-confirmation", {
              attrs: {
                action: this.action,
                "affected-basket": this.affectedBasket,
                "affected-basket-index": this.affectedBasketIndex
              },
              on: {
                "exit-without-action": function($event) {
                  _vm.showConfirmationModal = false
                },
                delete: _vm.deleteBasket,
                clear: _vm.clearBasket
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.showGroupedActionModal
          ? _c("grouped-action-pop-up", {
              attrs: { "affected-basket-index": this.affectedBasketIndex },
              on: {
                "francify-basket": _vm.francifyBasket,
                "exit-without-grouped-action": function($event) {
                  _vm.showGroupedActionModal = false
                }
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._l(this.baskets, function(basket, i) {
          return _c("basket-item", {
            key: basket.id,
            attrs: {
              basket: basket,
              index: i,
              origins: _vm.origins,
              categories: _vm.categories,
              "product-to-add": _vm.productToAdd,
              "previous-basket": _vm.previousBasket(i),
              "first-basket": _vm.firstBasket,
              "compare-to-previous-basket": _vm.compareToPreviousBasket
            },
            on: {
              "save-baskets": _vm.saveBasketsToLocalStorage,
              "do-stuff": _vm.showGroupedActionPopUp,
              "copy-basket": _vm.copyBasket,
              "clear-basket": _vm.showConfirmationPopUp,
              "delete-basket": _vm.showConfirmationPopUp
            }
          })
        }),
        _vm._v(" "),
        _c("div", { staticClass: "basket" }, [
          _c(
            "a",
            {
              staticClass: "add-basket flex-horizontal",
              on: {
                click: function($event) {
                  return _vm.addBasket()
                }
              }
            },
            [
              _c("div", { staticClass: "btn-ico" }, [_vm._v("")]),
              _vm._v(" "),
              _c("div", { staticClass: "add-basket-text spacer-left" }, [
                _vm._v(_vm._s(_vm.add_new_basket))
              ])
            ]
          )
        ])
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "custom-control switch center" }, [
      _c("label", [
        _vm._v(
          "\n            " + _vm._s(_vm.switch_labels.compare_to_first) + " "
        ),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.compareToPreviousBasket,
              expression: "compareToPreviousBasket"
            }
          ],
          staticClass: "custom-control-input",
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.compareToPreviousBasket)
              ? _vm._i(_vm.compareToPreviousBasket, null) > -1
              : _vm.compareToPreviousBasket
          },
          on: {
            change: function($event) {
              var $$a = _vm.compareToPreviousBasket,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.compareToPreviousBasket = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.compareToPreviousBasket = $$a
                      .slice(0, $$i)
                      .concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.compareToPreviousBasket = $$c
              }
            }
          }
        }),
        _c("span", { staticClass: "lever" }),
        _vm._v(
          " " + _vm._s(_vm.switch_labels.compare_to_previous) + "\n        "
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "button",
      { staticClass: "button ml-auto", on: { click: _vm.exportBaskets } },
      [
        _c("i", { staticClass: "icon mr-2" }, [_vm._v("")]),
        _vm._v(_vm._s(_vm.btn.export_btn) + "\n    ")
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketsList.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketsList.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasketsList_vue_vue_type_template_id_703443b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasketsList.vue?vue&type=template&id=703443b0& */ "./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=template&id=703443b0&");
/* harmony import */ var _BasketsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketsList.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasketsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasketsList_vue_vue_type_template_id_703443b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasketsList_vue_vue_type_template_id_703443b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/BasketsList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketsList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketsList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=template&id=703443b0&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=template&id=703443b0& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketsList_vue_vue_type_template_id_703443b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketsList.vue?vue&type=template&id=703443b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketsList.vue?vue&type=template&id=703443b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketsList_vue_vue_type_template_id_703443b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketsList_vue_vue_type_template_id_703443b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

      this["export"].mode = this.compareToPreviousBasket ? 'Chaque liste est comparée à la précédente' : 'Les listes sont comparées à la première';
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

/***/ "./resources/js/helpers/LocalStorageHelper.js":
/*!****************************************************!*\
  !*** ./resources/js/helpers/LocalStorageHelper.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Intéractions avec le localStorage
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // WASTE-SIMULATOR
    // HOME component
    // récupère la date de l'audit et la formatte
    getAuditDateFromLocalStorage: function getAuditDateFromLocalStorage() {
      return this.formatToFrench(JSON.parse(localStorage.getItem('audit')).auditDate);
    },
    // INPUT component
    // Va chercher les valeurs de référence depuis le localStorage
    fetchWasteReferenceValuesFromLocalStorage: function fetchWasteReferenceValuesFromLocalStorage() {
      return JSON.parse(localStorage.getItem('localReferenceValues'));
    },
    // Enregistre les valeurs de référence personnalisées en localStorage
    savePersonalValuesToLocalStorage: function savePersonalValuesToLocalStorage(values) {
      localStorage.setItem('localReferenceValues', values);
    },
    //RESULTS component
    // efface le localStorage
    clearLocalStorage: function clearLocalStorage() {
      localStorage.removeItem('audit');
      localStorage.removeItem('simulations');
      events.$emit('check-data-in-local-storage');
    },
    // Enregistre l'audit en localStorage
    saveAuditToLocalStorage: function saveAuditToLocalStorage(audit) {
      localStorage.setItem('audit', audit);
      events.$emit('check-data-in-local-storage');
    },
    // Récupère l'audit du localStorage
    getAuditFromLocalStorage: function getAuditFromLocalStorage() {
      return JSON.parse(localStorage.getItem('audit'));
    },
    //SIMULATIONS component
    // Récupère les simulations du localStorage
    getSimulationsFromLocalStorage: function getSimulationsFromLocalStorage() {
      return JSON.parse(localStorage.getItem('simulations'));
    },
    // Efface les simulations du localStorage (pas l'audit)
    deleteSimulationsFromLocalStorage: function deleteSimulationsFromLocalStorage() {
      localStorage.removeItem('simulations');
    },
    // Enregistre les simulations en localStorage
    saveSimulationsToLocalStorage: function saveSimulationsToLocalStorage(sims) {
      localStorage.setItem('simulations', sims);
    },
    // CARBON-SIMULATOR
    // HOME
    deleteBasketsFromLocalStorage: function deleteBasketsFromLocalStorage() {
      localStorage.removeItem('baskets');
    },
    getBasketsDateFromLocalStorage: function getBasketsDateFromLocalStorage() {
      return this.formatToFrench(JSON.parse(localStorage.getItem('basketsDate')));
    },
    // BASKET LIST
    saveBasketsToLocalStorage: function saveBasketsToLocalStorage() {
      events.$emit('update-results');
      var basketsDate = Date.now();
      var baskets = JSON.stringify(this.baskets);
      localStorage.setItem('baskets', baskets);
      localStorage.setItem('basketsDate', basketsDate);
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/component-specific/basketsListHelper.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/component-specific/basketsListHelper.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    addBasket: function addBasket() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.baskets.push(this.prepareBasketToAdd(name));
      this.incrementBasketCounter();
      this.saveBasketsToLocalStorage();
    },
    copyBasket: function copyBasket(basket, index) {
      var tempBasket = JSON.parse(JSON.stringify(basket));
      this.baskets.splice(index + 1, 0, this.prepareBasketToAdd('Copie de ' + tempBasket.name, tempBasket.products, tempBasket.results));
      this.incrementBasketCounter();
      this.saveBasketsToLocalStorage();
    },
    deleteBasket: function deleteBasket(basketIndex) {
      this.showConfirmationModal = false;
      this.baskets.splice(basketIndex, 1);

      if (this.baskets.length === 0) {
        this.deleteBasketsFromLocalStorage();
      } else {
        this.saveBasketsToLocalStorage();
      }

      events.$emit('get-internal-counters');
    },
    clearBasket: function clearBasket(basketIndex) {
      this.showConfirmationModal = false;
      this.baskets[basketIndex].products = [];
      this.saveBasketsToLocalStorage();
      events.$emit('get-internal-counters');
    },
    prepareBasketToAdd: function prepareBasketToAdd() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var products = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var results = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      if (name === '') {
        name = 'liste ' + (this.basketsCounter + 1);
      }

      return {
        id: 'basket-' + (this.basketsCounter + 1),
        name: name,
        products: products,
        isSelected: true,
        results: results
      };
    },
    saveBasketsResults: function saveBasketsResults(basketIndex, results) {
      this.baskets[basketIndex].results = results;
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/groupedActionFilters.js":
/*!************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/groupedActionFilters.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    francifyBasket: function francifyBasket(basketIndex) {
      var _this = this;

      this.baskets[basketIndex].products.forEach(function (product) {
        product.origin = _this.origins[2]; // France
      });
      this.showGroupedActionModal = false;
      this.saveBasketsToLocalStorage();
    }
  }
});

/***/ })

}]);