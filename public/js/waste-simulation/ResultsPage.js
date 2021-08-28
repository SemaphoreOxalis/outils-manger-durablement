(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/ResultsPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texts_wasteSimulator_ResultsPageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/wasteSimulator/ResultsPageText */ "./resources/texts/wasteSimulator/ResultsPageText.js");
/* harmony import */ var _helpers_waste_simulation_validation_SimulationValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/waste-simulation/validation/SimulationValidation */ "./resources/js/helpers/waste-simulation/validation/SimulationValidation.js");
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import des composants enfants

var AuditItem = function AuditItem() {
  return __webpack_require__.e(/*! import() | js/waste-simulation/AuditItem */ "js/waste-simulation/AuditItem").then(__webpack_require__.bind(null, /*! ./AuditItem.vue */ "./resources/js/components/waste-simulation/AuditItem.vue"));
}; // Logique de validation


 // import des helpers



/* harmony default export */ __webpack_exports__["default"] = ({
  // déclaration des composants enfants
  components: {
    AuditItem: AuditItem
  },
  // déclaration des helpers
  mixins: [_texts_wasteSimulator_ResultsPageText__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_waste_simulation_validation_SimulationValidation__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_4__["default"]],
  // données à récupérer de la page Input
  props: {
    userInput: [Object, undefined],
    referenceValues: [Object, undefined]
  },
  // initialisation des données utilisées par le composant
  data: function data() {
    return {
      auditRawData: {},
      simulationsErrors: [],
      areSimulationsInvalid: false,
      legendShown: false,
      auditResults: {},
      showResultsModal: false,
      title: "<div class=\"loader-spinner\"></div>",
      howTo: "<div class=\"loader-spinner\"></div>",
      links: "<div class=\"loader-spinner\"></div>"
    };
  },
  // A l'initialisation du composant (i.e quand on arrive sur la "page")
  created: function created() {
    var _this = this;

    // Si on vient de la page de saisie
    if (this.userInput) {
      this.incrementAuditCounter();
      this.handleUserInput();
      setTimeout(function () {
        _this.showResultsModal = true;
      }, 500);
    } // sinon (i.e si on vient directement de l'accueil par ex. on veut récupérer l'audit stocké en localStorage)
    else if (localStorage.hasOwnProperty('audit')) {
        this.auditRawData = this.getAuditFromLocalStorage();
      } // et si on arrive de nulle part et qu'il n'y a rien dans le localStorage, redirection vers la homepage
      else {
          this.$router.push({
            name: 'home-page'
          });
        } // Listener


    events.$on('validate', this.checkValidation); // HACK : ce timeout est nécessaire, sinon la variable areSimulationsInvalid est calculée avant d'avant d'avoir les données des simulations

    setTimeout(function () {
      _this.validateSimulations();

      _this.fetchAuditResults();

      _this.$forceUpdate();
    }, 10);
  },
  mounted: function mounted() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this2.fetchContent('Gaspi - Résultats - Titre');

            case 2:
              _this2.title = _context.sent;
              _context.next = 5;
              return _this2.fetchContent('Gaspi - Résultats - Mode d\'emploi');

            case 5:
              _this2.howTo = _context.sent;
              _context.next = 8;
              return _this2.fetchContent('Gaspi - Résultats - Liens EGALIM-ANAP');

            case 8:
              _this2.links = _context.sent;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // Fonctions inhérentes au composant
  methods: {
    // Efface les simulations (pas l'audit)
    resetSimulations: function resetSimulations() {
      // demande au composant Simulations d'effacer ses données
      events.$emit('reset-simulations');
    },
    // Traite les données saisies par l'utilisateur si il vient de réaliser un audit
    handleUserInput: function handleUserInput() {
      // on efface le localStorage (audit et simulations précédentes s'il y en a)
      this.clearLocalStorage(); // On récupère les données saisies lors de la phase de saisie, qu'on stocke dans un seul objet par souci de practicité

      this.auditRawData = _objectSpread(_objectSpread(_objectSpread({}, this.userInput), this.referenceValues), {}, {
        auditDate: Date.now()
      });
      var audit = JSON.stringify(this.auditRawData); // On enregistre l'audit en localStorage

      this.saveAuditToLocalStorage(audit);
    },
    fetchAuditResults: function fetchAuditResults() {
      events.$emit('get-audit-results');
    },
    setAuditResults: function setAuditResults(result) {
      this.auditResults.foodWasteCost = result.foodWasteCost;
      this.auditResults.amountOfDishesWasted = result.amountOfDishesWasted;
    },
    // Demande aux composants concernés de rassembler les données pour un export (Audit, Simulations et Simulation)
    exportSimulations: function exportSimulations() {
      events.$emit('export-simulations');
    },
    // envoie une demande au composant concerné (AuditSimulationList.vue)
    addSimulation: function addSimulation() {
      events.$emit('add-simulation');
      this.incrementSimulationCounter();
    },
    // montre/cache la légende
    toggleLegend: function toggleLegend() {
      this.legendShown = !this.legendShown;
      $(".collapse").on('show.bs.collapse', function () {
        $("#collapse-icon").addClass("reversed");
      }).on('hide.bs.collapse', function () {
        $("#collapse-icon").removeClass("reversed");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=template&id=0e2ef15b&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=template&id=0e2ef15b& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "py-4 px-4" }, [
    _vm.showResultsModal
      ? _c("div", { attrs: { id: "results-modal" } })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("div", { domProps: { innerHTML: _vm._s(_vm.title) } }),
        _vm._v(" "),
        _vm.showResultsModal
          ? _c("transition", { attrs: { name: "modal" } }, [
              _c("div", { staticClass: "modal-mask" }, [
                _c("div", { staticClass: "modal-wrapper" }, [
                  _c("div", { staticClass: "modal-container" }, [
                    _c("div", { staticClass: "modal-body" }, [
                      _c("p", [
                        _vm._v(_vm._s(_vm.modal.you_just_made_an_audit))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(_vm.modal.your_food_waste_amounts_to) + " "
                        ),
                        _c("strong", [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.auditResults.foodWasteCost || "loading..."
                              )
                            }
                          })
                        ]),
                        _vm._v(
                          " " +
                            _vm._s(_vm.modal.euros_or) +
                            "\n                                "
                        ),
                        _c("strong", [
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.auditResults.amountOfDishesWasted ||
                                  "loading..."
                              )
                            }
                          })
                        ]),
                        _vm._v(" " + _vm._s(_vm.modal.dishes))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.modal.you_can_add_sims_to_this_table))
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          _vm._s(
                            _vm.modal.each_sim_is_compared_to_the_one_above
                          )
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "modal-footer" }, [
                      _c(
                        "button",
                        {
                          staticClass: "modal-default-button button alter",
                          on: {
                            click: function($event) {
                              _vm.showResultsModal = false
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                " +
                              _vm._s(_vm.modal.closeBtn) +
                              "\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "position-relative info p-3 mb-4" }, [
          _c("div", { staticClass: "d-flex justify-content-end" }, [
            !_vm.legendShown
              ? _c("span", { staticClass: "mr-2 align-self-center colored" }, [
                  _vm._v(_vm._s(_vm.how_to.title))
                ])
              : _vm._e(),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button alter",
                attrs: {
                  "data-toggle": "collapse",
                  "data-target": "#legend",
                  "aria-expanded": "true",
                  "aria-controls": "legend"
                },
                on: { click: _vm.toggleLegend }
              },
              [
                _c("i", {
                  staticClass: "icon icon-angle-down",
                  attrs: { id: "collapse-icon" }
                })
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "collapse", attrs: { id: "legend" } }, [
            _c("div", { domProps: { innerHTML: _vm._s(_vm.howTo) } })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "spacer" },
          [
            _c("audit-item", {
              attrs: { "audit-raw-data": this.auditRawData },
              on: { "sent-audit-results": this.setAuditResults }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "d-flex mt-4" }, [
              _c(
                "button",
                { staticClass: "button", on: { click: _vm.addSimulation } },
                [
                  _c("i", { staticClass: "icon mr-2" }, [_vm._v("")]),
                  _vm._v(_vm._s(_vm.btns.add_sim) + "\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button alter",
                  on: { click: _vm.resetSimulations }
                },
                [
                  _c("i", { staticClass: "icon mr-2" }, [_vm._v("")]),
                  _vm._v(_vm._s(_vm.btns.reset_sims) + "\n                ")
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button ml-auto",
                  attrs: { disabled: _vm.areSimulationsInvalid },
                  on: { click: _vm.exportSimulations }
                },
                [
                  _c("i", { staticClass: "icon mr-2" }, [_vm._v("")]),
                  _vm._v(_vm._s(_vm.btns.export_sims) + "\n                ")
                ]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { domProps: { innerHTML: _vm._s(_vm.links) } }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center mt-2" },
          [
            _c("router-link", { attrs: { to: "input", tag: "span" } }, [
              _c("button", { staticClass: "button alter" }, [
                _c("i", { staticClass: "icon mr-2" }, [_vm._v("")]),
                _vm._v(_vm._s(_vm.btns.new_audit) + "\n                ")
              ])
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/waste-simulation/ResultsPage.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/waste-simulation/ResultsPage.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResultsPage_vue_vue_type_template_id_0e2ef15b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResultsPage.vue?vue&type=template&id=0e2ef15b& */ "./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=template&id=0e2ef15b&");
/* harmony import */ var _ResultsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsPage.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResultsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResultsPage_vue_vue_type_template_id_0e2ef15b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResultsPage_vue_vue_type_template_id_0e2ef15b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/ResultsPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=template&id=0e2ef15b&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=template&id=0e2ef15b& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsPage_vue_vue_type_template_id_0e2ef15b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResultsPage.vue?vue&type=template&id=0e2ef15b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/ResultsPage.vue?vue&type=template&id=0e2ef15b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsPage_vue_vue_type_template_id_0e2ef15b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResultsPage_vue_vue_type_template_id_0e2ef15b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/DataBase.js":
/*!******************************************!*\
  !*** ./resources/js/helpers/DataBase.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HTMLSpecialCharsDecoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HTMLSpecialCharsDecoder */ "./resources/js/helpers/HTMLSpecialCharsDecoder.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Intéractions avec la base de donnée

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_HTMLSpecialCharsDecoder__WEBPACK_IMPORTED_MODULE_1__["default"]],
  methods: {
    log: function log(message) {
      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      writeLog(message, details).then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    // WASTE HOME-PAGE component
    fetchCountersFromDB: function fetchCountersFromDB() {
      var _this = this;

      getCountersFromDB().then(function (response) {
        _this.counters.auditsCounter = response.data[0].value;
        _this.counters.simulationsCounter = response.data[1].value;
        _this.counters.basketCounter = response.data[2].value;
        _this.counters.productsCounter = response.data[3].value;
        _this.counters.recipesCounter = response.data[4].value;
      });
    },
    // ADMIN component
    fetchCountersValueFromDB: function fetchCountersValueFromDB() {
      var _this2 = this;

      getCountersFromDB().then(function (response) {
        _this2.counters = response.data;
      });
    },
    updateCounter: function updateCounter(counter) {
      patchCounter(counter).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    //INPUT component
    // RESULTS component
    incrementAuditCounter: function incrementAuditCounter() {
      incrementAC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementSimulationCounter: function incrementSimulationCounter() {
      incrementSC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementBasketCounter: function incrementBasketCounter() {
      incrementBC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementProductCounter: function incrementProductCounter() {
      incrementPC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementRecipeCounter: function incrementRecipeCounter() {
      incrementRC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    //CONTENTS
    fetchContents: function fetchContents() {
      var _this3 = this;

      getContents().then(function (response) {
        _this3.contents = response.data;
        _this3.selectedContent = _this3.contents[0];
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    fetchImages: function fetchImages() {
      var _this4 = this;

      getImages().then(function (response) {
        _this4.images = response.data;
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    updateContent: function updateContent(content) {
      patchContent(content).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    fetchFooter: function fetchFooter(type) {
      var _this5 = this;

      getFooter(type).then(function (response) {
        _this5.footer = _this5.decode(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    fetchContent: function fetchContent(name) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _yield$axios$get, response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios.get('/api/contents/' + name);

              case 3:
                _yield$axios$get = _context.sent;
                response = _yield$axios$get.data;
                return _context.abrupt("return", _this6.decode(response));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                flash(_context.t0.response.data, 'danger');

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }))();
    }
  }
}); // Situées ici, ces fonctions sont "privées"

function writeLog(message, details) {
  return axios.post('/api/logs', {
    message: message,
    details: details
  });
}

function getContents() {
  return axios.get('/api/contents');
}

function getImages() {
  return axios.get('/api/images');
}

function patchContent(content) {
  return axios.patch('/api/contents/' + content.id, {
    html_content: content.html_content,
    original: content.original
  });
}

function getFooter(type) {
  return axios.get('/api/contents/footer/' + type);
}

function getCountersFromDB() {
  return axios.get('/api/counters');
}

function patchCounter(counter) {
  return axios.patch('/api/counters/' + counter.id, {
    value: counter.value
  });
}

function incrementAC() {
  return axios.patch('/api/counters/1/increment');
}

function incrementSC() {
  return axios.patch('/api/counters/2/increment');
}

function incrementBC() {
  return axios.patch('/api/counters/3/increment');
}

function incrementPC() {
  return axios.patch('/api/counters/4/increment');
}

function incrementRC() {
  return axios.patch('/api/counters/5/increment');
}

/***/ }),

/***/ "./resources/js/helpers/HTMLSpecialCharsDecoder.js":
/*!*********************************************************!*\
  !*** ./resources/js/helpers/HTMLSpecialCharsDecoder.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    decode: function decode(string) {
      var HTMLSpecialCharMap = {
        '&amp;': '&',
        '&#038;': "&",
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'",
        '&#8217;': "’",
        '&#8216;': "‘",
        '&#8211;': "–",
        '&#8212;': "—",
        '&#8230;': "…",
        '&#8221;': '”'
      };
      return string.replace(/\&[\w\d\#]{2,5}\;/g, function (i) {
        return HTMLSpecialCharMap[i];
      });
    }
  }
});

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
    },
    // MISC
    eraseLocalStorageIfVersionOlderThan: function eraseLocalStorageIfVersionOlderThan(version) {
      var tool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (!localStorage.hasOwnProperty('version')) {
        this.erase(tool);
      } else {
        if (localStorage.getItem('version') !== version) {
          this.erase(tool);
        }
      }

      localStorage.setItem('version', App.version);
    },
    erase: function erase(tool) {
      if (tool === 'basketSim') {
        localStorage.removeItem('baskets');
        localStorage.removeItem('basketsDate');
      }

      flash('Des données obsolètes ont été supprimées', 'warning');
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/waste-simulation/validation/SimulationValidation.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/validation/SimulationValidation.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // RESULTS component
    // Envoi d'une demande aux simulations pour avoir leur validation
    validateSimulations: function validateSimulations() {
      events.$emit('validate-simulations');
    },
    // Retour de l'envoi de cette demande
    checkValidation: function checkValidation(simulationIndex, simulationIsInvalid) {
      // On crée un tableau qui contient, pour chaque simulation, true ou false en fonction d'erreurs éventuelles de saisie
      this.simulationsErrors[simulationIndex] = simulationIsInvalid;
      this.areSimulationsInvalid = this.simulationsErrors.includes(true);
    },
    // SIMULATION component
    // Envoi aux composants parents le résultat de la validation
    validate: function validate() {
      events.$emit('validate', this.index, this.isInvalid);
    }
  }
});

/***/ }),

/***/ "./resources/texts/wasteSimulator/ResultsPageText.js":
/*!***********************************************************!*\
  !*** ./resources/texts/wasteSimulator/ResultsPageText.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // RESULTS PAGE component
      your_results: 'Résultats et comparaisons de vos simulations',
      modal: {
        you_just_made_an_audit: 'Vous venez de réaliser l\'audit simplifié de votre gaspillage alimentaire.',
        your_food_waste_amounts_to: 'Il estime le coût de votre gaspillage alimentaire à',
        euros_or: '€ (soit l\'équivalent de',
        dishes: 'repas)',
        you_can_add_sims_to_this_table: 'Le tableau ci-dessous vous permet d\'ajouter des simulations modélisant les modifications de vos pratiques: réduction du volume de gaspillage alimentaire, optimisation du nombre de repas...',
        each_sim_is_compared_to_the_one_above: 'Chaque simulation est comparée en temps réel avec celle qui la précède dans le tableau, n\'hésitez pas à expérimenter !',
        closeBtn: 'Fermer'
      },
      how_to: {
        title: 'Mode d\'emploi',
        add_sims_to_audit: 'Commencez par ajouter une ou plusieurs simulations à votre audit',
        these_fields: 'Les champs de ce type',
        are_editable: 'sont modifiables',
        reorganize_sims: 'Vous pouvez maintenant réorganiser vos simulations en les faisant glisser',
        delete_one_sim: 'Vous pouvez supprimer les simulations inutiles une par une',
        delete_all_sims: 'ou toutes les supprimer d\'un seul clic',
        export_sims: 'Le bouton "exporter" vous permet de récupérer l\'ensemble des données sur votre logiciel de tableur'
      },
      btns: {
        add_sim: 'Ajouter une simulation',
        reset_sims: 'Je réinitialise toutes mes simulations',
        export_sims: 'Exporter le rapport de simulation',
        new_audit: 'J\'effectue un nouvel audit'
      },
      congrats_you_just_completed: 'Bravo, vous venez de franchir la première étape de la démarche de',
      egalim: 'la loi EGALIM',
      what_to_do: 'Que faire de ces résultats ? Rendez vous sur le',
      go_to_anap_site: 'site ressource de l\'ANAP pour découvrir les actions réalisables',
      // AUDIT component
      labels: {
        name: 'Nom de la simulation',
        dishes_number: 'Nombre de repas produits',
        dish_cost: 'Coût de revient d\'un repas',
        dish_weight: 'Poids moyen d\'un repas (en g)',
        waste_cost: 'Coût de traitement par tonne (€)',
        waste_volume: 'Volume de gaspillage alimentaire (tonnes).',
        waste_estimation: {
          estimate: 'Estimation du gaspillage alimentaire',
          in_g_per_dish: 'en g par repas',
          in_euros: 'en €',
          in_dishes_number: 'en nombre de repas'
        }
      },
      // SIMULATIONS LIST component
      compare_to: {
        audit: 'Comparer les simulations à l\'audit',
        previous_sim: 'Comparer les simulations entre elles'
      }
    };
  }
});

/***/ })

}]);