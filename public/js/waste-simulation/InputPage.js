(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/InputPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/InputPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/InputPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texts_wasteSimulator_InputPageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/wasteSimulator/InputPageText */ "./resources/texts/wasteSimulator/InputPageText.js");
/* harmony import */ var _helpers_waste_simulation_validation_InputValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/waste-simulation/validation/InputValidation */ "./resources/js/helpers/waste-simulation/validation/InputValidation.js");
/* harmony import */ var _helpers_waste_simulation_calculations_InputLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/waste-simulation/calculations/InputLogic */ "./resources/js/helpers/waste-simulation/calculations/InputLogic.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");
/* harmony import */ var _helpers_waste_simulation_WasteDataBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/waste-simulation/WasteDataBase */ "./resources/js/helpers/waste-simulation/WasteDataBase.js");
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
/* harmony import */ var _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/NumberFormatter */ "./resources/js/helpers/NumberFormatter.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import de bibliothèques de fonctions
 // validation des données saisies

 // logique principale du composant

 // intéractions avec la base de donnée


 // intéractions avec le localStorage

 // Petite bibliothèque de fonctions bien pratique pour arrondir les nombres


/* harmony default export */ __webpack_exports__["default"] = ({
  // déclaration de la dépendance à ces mixins (bibliothèques de fonctions dans des fichiers externes, dans un souci de lisibilité)
  mixins: [_texts_wasteSimulator_InputPageText__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_waste_simulation_validation_InputValidation__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_waste_simulation_calculations_InputLogic__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_4__["default"], _helpers_waste_simulation_WasteDataBase__WEBPACK_IMPORTED_MODULE_5__["default"], _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"], _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_7__["default"]],
  // initialisation des données utilisées par le composant
  data: function data() {
    return {
      // Valeurs de référence
      referenceValues: {
        foodLeftoversVolumeInGlobalWaste: 0,
        actualFoodLeftoversInFoodWaste: 0
      },
      // Champs à remplir
      userInput: {
        dishesNumber: 100000,
        // précis à 1
        dishCost: 3,
        // précis à 0.01 €
        dishWeight: 400,
        // précis à 1 g
        globalWasteVolume: 100,
        // précis à 0.001 T
        wasteTreatmentCost: 100,
        // précis à 0.01 €
        startDate: null,
        endDate: null
      },
      // Booléens servant au feedback visuel lorsqu'on édite les valeurs de référence
      editingReferenceValues: false,
      defaultValues: true,
      subtitle: "<div class=\"loader-spinner\"></div>"
    };
  },
  // A la création du composent (i.e quand on arrive sur la "page")
  created: function created() {
    // Va chercher les valeurs de référence, cf. méthode ci-dessous
    this.checkWasteReferenceValues();
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var stepper, stepperInstance;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              stepper = document.querySelector('.stepper');
              stepperInstance = new MStepper(stepper, {
                // options
                firstActive: 0 // this is the default

              });
              _context.next = 4;
              return _this.fetchContent('Gaspi - Input - Sous-titre');

            case 4:
              _this.subtitle = _context.sent;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // Fonctions utilisées par le composant
  methods: {
    // Va chercher les valeurs de référence
    checkWasteReferenceValues: function checkWasteReferenceValues() {
      // Soit dans le local Storage (valeurs personnalisées)
      if (localStorage.getItem('localReferenceValues')) {
        this.referenceValues = this.fetchWasteReferenceValuesFromLocalStorage();
        this.defaultValues = false;
      } // Sinon en BDD (valeurs par défaut)
      else {
          this.fetchWasteReferenceValuesFromDB();
          this.defaultValues = true;
        }
    },
    // Enregistre en localStorage les valeurs personnalisées de l'utilisateur
    saveLocalReferenceValues: function saveLocalReferenceValues() {
      var values = JSON.stringify(this.referenceValues);
      this.savePersonalValuesToLocalStorage(values);
      this.editingReferenceValues = false;
      this.defaultValues = false;
      flash('Les nouvelles valeurs ont correctement été enregistrées dans votre navigateur');
    },
    // Réinitialise les valeurs de référence à leurs valeurs par défaut depuis la BDD
    resetReferenceValues: function resetReferenceValues() {
      this.fetchWasteReferenceValuesFromDB();
      this.defaultValues = true;
      flash('Les valeurs ont été correctement réinitialisées depuis la base de donnée');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/InputPage.vue?vue&type=template&id=61a86ea2&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/InputPage.vue?vue&type=template&id=61a86ea2& ***!
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
  return _c("div", { staticClass: "py-4 px-4" }, [
    _vm.editingReferenceValues
      ? _c("div", { staticClass: "editing-mask" })
      : _vm._e(),
    _vm._v(" "),
    _c("div", { domProps: { innerHTML: _vm._s(_vm.subtitle) } }),
    _vm._v(" "),
    _c("ul", { staticClass: "stepper linear" }, [
      _c("li", { staticClass: "step" }, [
        _c("div", { staticClass: "step-title" }, [
          _vm._v(_vm._s(_vm.steps.dates))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "step-content" }, [
          _c("h4", { staticClass: "col-12" }, [
            _vm._v(_vm._s(_vm.step_instruction.dates))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row " }, [
            _c("div", { staticClass: "col col-6" }, [
              _c("label", [_vm._v(_vm._s(_vm.labels.start_date))]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userInput.startDate,
                    expression: "userInput.startDate"
                  }
                ],
                staticClass:
                  "custom-input datepicker number-field browser-default",
                attrs: {
                  type: "date",
                  id: "start",
                  required: "",
                  max: _vm.userInput.endDate
                },
                domProps: { value: _vm.userInput.startDate },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.userInput, "startDate", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col col-6" }, [
              _c("label", [_vm._v(_vm._s(_vm.labels.end_date))]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userInput.endDate,
                    expression: "userInput.endDate"
                  }
                ],
                staticClass:
                  "custom-input datepicker number-field browser-default",
                attrs: {
                  type: "date",
                  id: "end",
                  required: "",
                  min: _vm.userInput.startDate
                },
                domProps: { value: _vm.userInput.endDate },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.userInput, "endDate", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "step-actions" }, [
            _c("button", { staticClass: "button next-step" }, [
              _vm._v(_vm._s(_vm.nextBtn) + " "),
              _c("span", { staticClass: "icon" }, [_vm._v("")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "step" }, [
        _c("div", { staticClass: "step-title waves-effect" }, [
          _vm._v(_vm._s(_vm.steps.dishes))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "step-content" }, [
          _c("h4", { staticClass: "col-12" }, [
            _vm._v(_vm._s(_vm.step_instruction.dishes))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col col-4" }, [
              _c("label", [_vm._v(_vm._s(_vm.labels.dishes_number) + " :")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userInput.dishesNumber,
                    expression: "userInput.dishesNumber"
                  }
                ],
                staticClass: "custom-input number-field browser-default",
                attrs: {
                  id: "dishes-number",
                  type: "number",
                  required: "",
                  min: "1",
                  step: "1"
                },
                domProps: { value: _vm.userInput.dishesNumber },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.userInput, "dishesNumber", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", [
                _vm._v(_vm._s(_vm.labels.dish_cost)),
                _c("sup", [_vm._v("*")]),
                _vm._v(" :")
              ]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userInput.dishCost,
                    expression: "userInput.dishCost"
                  }
                ],
                staticClass: "custom-input number-field browser-default",
                attrs: {
                  id: "dish-cost",
                  type: "number",
                  required: "",
                  min: "0.01",
                  step: "0.01"
                },
                domProps: { value: _vm.userInput.dishCost },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.userInput, "dishCost", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("label", [_vm._v(_vm._s(_vm.labels.dish_weight) + " :")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userInput.dishWeight,
                    expression: "userInput.dishWeight"
                  }
                ],
                staticClass: "custom-input number-field browser-default",
                attrs: {
                  id: "dish-weight",
                  type: "number",
                  required: "",
                  min: "1",
                  step: "1"
                },
                domProps: { value: _vm.userInput.dishWeight },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.userInput, "dishWeight", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col col-8 mt-3 p-3 info" }, [
              _c("div", { staticClass: "lighten-3" }, [
                _c("p", [_vm._v(_vm._s(_vm.dish_cost_is_calculated_with))]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                               " +
                      _vm._s(_vm.calcul_1.line_1)
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                               " +
                      _vm._s(_vm.calcul_1.line_2)
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                               " +
                      _vm._s(_vm.calcul_1.line_3)
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                               " +
                      _vm._s(_vm.calcul_1.line_4)
                  ),
                  _c("br"),
                  _vm._v(
                    "\n                               " +
                      _vm._s(_vm.calcul_1.line_5) +
                      "\n                            "
                  )
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("strong", [_vm._v(_vm._s(_vm.or_with))]),
                  _vm._v(", " + _vm._s(_vm.if_you_externalize) + " :")
                ]),
                _vm._v(" "),
                _c("p", [_vm._v(_vm._s(_vm.calcul_2))])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "step-actions" }, [
            _c("button", { staticClass: "button alter previous-step" }, [
              _c("span", { staticClass: "icon" }, [_vm._v("")]),
              _vm._v(" " + _vm._s(_vm.prevBtn))
            ]),
            _vm._v(" "),
            _c("button", { staticClass: "button next-step" }, [
              _vm._v(_vm._s(_vm.nextBtn) + " "),
              _c("span", { staticClass: "icon" }, [_vm._v("")])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "step" }, [
        _c("div", { staticClass: "step-title waves-effect" }, [
          _vm._v(_vm._s(_vm.steps.wastes))
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "step-content" }, [
          _c("h4", { staticClass: "col-12" }, [
            _vm._v(_vm._s(_vm.step_instruction.wastes))
          ]),
          _vm._v(" "),
          _c("p", [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v(_vm._s(_vm.learn_more_about_profiling_ones_wastes) + " "),
              _c("span", { staticClass: "icon" }, [_vm._v("")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col col-3" }, [
              _c("label", [_vm._v(_vm._s(_vm.labels.waste_volume) + " :")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userInput.globalWasteVolume,
                    expression: "userInput.globalWasteVolume"
                  }
                ],
                staticClass:
                  "custom-input number-field w-input browser-default",
                attrs: {
                  id: "global-waste-volume",
                  type: "number",
                  required: "",
                  min: "0.001",
                  step: "0.001"
                },
                domProps: { value: _vm.userInput.globalWasteVolume },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.userInput,
                      "globalWasteVolume",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _c("label", [_vm._v(_vm._s(_vm.labels.waste_cost) + " :")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.userInput.wasteTreatmentCost,
                    expression: "userInput.wasteTreatmentCost"
                  }
                ],
                staticClass:
                  "custom-input number-field w-input browser-default",
                attrs: {
                  id: "waste-treatment-cost",
                  type: "number",
                  required: "",
                  min: "0.01",
                  step: "0.01"
                },
                domProps: { value: _vm.userInput.wasteTreatmentCost },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.userInput,
                      "wasteTreatmentCost",
                      $event.target.value
                    )
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col col-9 reference-values info p-3 mt-3" },
              [
                _vm.defaultValues
                  ? _c("p", [
                      _vm._v(_vm._s(_vm.following) + " "),
                      _c(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://www.techopital.com/le-ch-de-niort-travaille-sur-un-modele-de-diagnostic-du-gaspillage-alimentaire-NS_4425.html",
                            target: "_blank"
                          }
                        },
                        [
                          _vm._v(_vm._s(_vm.niort_waste_profiling) + " "),
                          _c("span", { staticClass: "icon" }, [_vm._v("")])
                        ]
                      ),
                      _vm._v(",")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "px-2 py-2",
                    class: _vm.editingReferenceValues
                      ? "editing-reference-values"
                      : ""
                  },
                  [
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.it_has_been_discovered) +
                          "\n                                "
                      ),
                      _vm.editingReferenceValues
                        ? _c("span", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.referenceValues
                                      .foodLeftoversVolumeInGlobalWaste,
                                  expression:
                                    "referenceValues.foodLeftoversVolumeInGlobalWaste"
                                }
                              ],
                              staticClass:
                                "custom-input number-field browser-default",
                              attrs: {
                                type: "number",
                                required: "",
                                min: "0.01",
                                max: "100",
                                step: "0.01"
                              },
                              domProps: {
                                value:
                                  _vm.referenceValues
                                    .foodLeftoversVolumeInGlobalWaste
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.referenceValues,
                                    "foodLeftoversVolumeInGlobalWaste",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        : _c("span", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm.referenceValues
                                    .foodLeftoversVolumeInGlobalWaste
                                ) +
                                "\n                                "
                            )
                          ]),
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.percent_of_global_waste_volume) +
                          "\n                                "
                      ),
                      _c("strong", [
                        _vm._v(
                          _vm._s(
                            _vm.foodLeftoversVolumeInGlobalWasteInYourCase
                          ) +
                            " " +
                            _vm._s(_vm.tons)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        _vm._s(_vm.without_any_change) +
                          ",\n                                "
                      ),
                      _vm.editingReferenceValues
                        ? _c("span", [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.referenceValues
                                      .actualFoodLeftoversInFoodWaste,
                                  expression:
                                    "referenceValues.actualFoodLeftoversInFoodWaste"
                                }
                              ],
                              staticClass:
                                "custom-input number-field browser-default",
                              attrs: {
                                type: "number",
                                required: "",
                                min: "0.01",
                                max: "100",
                                step: "0.01"
                              },
                              domProps: {
                                value:
                                  _vm.referenceValues
                                    .actualFoodLeftoversInFoodWaste
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.referenceValues,
                                    "actualFoodLeftoversInFoodWaste",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ])
                        : _c("span", [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(
                                  _vm.referenceValues
                                    .actualFoodLeftoversInFoodWaste
                                ) +
                                "\n                                "
                            )
                          ]),
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.percent_of_this_volume) +
                          "\n                                "
                      ),
                      _c("strong", [
                        _vm._v(
                          _vm._s(_vm.actualFoodLeftoversInFoodWasteInYourCase) +
                            " " +
                            _vm._s(_vm.tons)
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.editingReferenceValues
                      ? _c(
                          "button",
                          {
                            staticClass: "button alter",
                            attrs: { disabled: _vm.areThereInvalidValues },
                            on: { click: _vm.saveLocalReferenceValues }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.okBtn) +
                                "\n                            "
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    _vm._s(_vm.dont_hesitate_to) +
                      "\n                            "
                  ),
                  _c(
                    "button",
                    {
                      staticClass: "button alter mr-0",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.editingReferenceValues = true
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.edit_values))]
                  ),
                  _vm._v(
                    "\n                            " + _vm._s(_vm.or_to) + " "
                  ),
                  _c(
                    "button",
                    {
                      staticClass: "button alter",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.resetReferenceValues($event)
                        }
                      }
                    },
                    [_vm._v(_vm._s(_vm.reset_values))]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "step-actions pb-4" },
            [
              _c("button", { staticClass: "button alter previous-step" }, [
                _c("span", { staticClass: "icon" }, [_vm._v("")]),
                _vm._v(" " + _vm._s(_vm.prevBtn))
              ]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  attrs: {
                    to: {
                      name: "results-page",
                      params: {
                        userInput: _vm.userInput,
                        referenceValues: _vm.referenceValues
                      }
                    },
                    tag: "span"
                  }
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "button",
                      attrs: {
                        disabled: _vm.areThereInvalidData,
                        id: "launching-audit-button"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.start_sim) +
                          "\n                        "
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/waste-simulation/InputPage.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/waste-simulation/InputPage.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputPage_vue_vue_type_template_id_61a86ea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputPage.vue?vue&type=template&id=61a86ea2& */ "./resources/js/components/waste-simulation/InputPage.vue?vue&type=template&id=61a86ea2&");
/* harmony import */ var _InputPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputPage.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/InputPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InputPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InputPage_vue_vue_type_template_id_61a86ea2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InputPage_vue_vue_type_template_id_61a86ea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/InputPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/InputPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/InputPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/InputPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/InputPage.vue?vue&type=template&id=61a86ea2&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/InputPage.vue?vue&type=template&id=61a86ea2& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPage_vue_vue_type_template_id_61a86ea2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./InputPage.vue?vue&type=template&id=61a86ea2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/InputPage.vue?vue&type=template&id=61a86ea2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPage_vue_vue_type_template_id_61a86ea2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InputPage_vue_vue_type_template_id_61a86ea2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/helpers/waste-simulation/WasteDataBase.js":
/*!****************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/WasteDataBase.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // ADMIN component
    // Va chercher les valeurs de référence depuis la BDD
    fetchWasteReferenceValues: function fetchWasteReferenceValues() {
      var _this = this;

      getValuesFromDB().then(function (response) {
        _this.values = response.data;
      });
    },
    // Met à jour les valeurs de référence dans la BDD
    updateRefValue: function updateRefValue(value) {
      // Appel AJAX
      patchValue(value).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    //INPUT component
    // Va chercher les valeurs de référence depuis la BDD
    fetchWasteReferenceValuesFromDB: function fetchWasteReferenceValuesFromDB() {
      var _this2 = this;

      getValuesFromDB().then(function (response) {
        //TODO : virer trucs qu'ont rien à faire ici
        // On efface les valeurs personnalisée du localStorage
        localStorage.removeItem('localReferenceValues');
        _this2.referenceValues.foodLeftoversVolumeInGlobalWaste = response.data[0].value;
        _this2.referenceValues.actualFoodLeftoversInFoodWaste = response.data[1].value;
      });
    }
  }
}); // Situées ici, ces fonctions sont "privées"

function getValuesFromDB() {
  return axios.get('/api/waste-values');
}

function patchValue(value) {
  return axios.patch('/api/waste-values/' + value.id, {
    value: value.value
  });
}

/***/ }),

/***/ "./resources/js/helpers/waste-simulation/calculations/InputLogic.js":
/*!**************************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/calculations/InputLogic.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Logique du composant InputPage.vue
/* harmony default export */ __webpack_exports__["default"] = ({
  // Données calculées en fonction des sonnées saisies
  computed: {
    // CALCULS - "soit dans votre cas ..... tonnes"
    // calcul de la part fermentescible globale ( environ 25 % du volume global de déchets )
    foodLeftoversVolumeInGlobalWasteInYourCase: function foodLeftoversVolumeInGlobalWasteInYourCase() {
      return this.roundToThreeDecimal(this.referenceValues.foodLeftoversVolumeInGlobalWaste / 100 * this.userInput.globalWasteVolume);
    },
    // calcul du volume de gaspillage alimentaire ( environ 75 % de la part fermentescible globale )
    actualFoodLeftoversInFoodWasteInYourCase: function actualFoodLeftoversInFoodWasteInYourCase() {
      return this.roundToThreeDecimal(this.referenceValues.actualFoodLeftoversInFoodWaste / 100 * this.foodLeftoversVolumeInGlobalWasteInYourCase);
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/waste-simulation/validation/InputValidation.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/helpers/waste-simulation/validation/InputValidation.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Validation des données saisies lors de l'audit
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    // VALIDATION - empêche de continuer si les données saisies ne sont pas pertinentes
    // validation des données saisies pour l'audit
    areThereInvalidData: function areThereInvalidData() {
      // Validation des données de référence (cf. plus bas)
      if (this.areThereInvalidValues) {
        return true;
      } // Validation des données saisies (supérieures à 0)


      if (this.userInput.dishesNumber < 1 || this.userInput.dishCost < 0.01 || this.userInput.dishWeight < 1 || this.userInput.globalWasteVolume < 0.001 || this.userInput.wasteTreatmentCost < 0.01) {
        return true;
      } // Validation des dates (doivent être présentes et cohérentes)


      if (!this.userInput.startDate || !this.userInput.endDate || this.userInput.startDate > this.userInput.endDate) {
        return true;
      } // Si tout est OK, il n'y a pas d'erreur


      return false;
    },
    // validation des valeurs de référence ( entre 0 et 100 %)
    areThereInvalidValues: function areThereInvalidValues() {
      if (this.referenceValues.foodLeftoversVolumeInGlobalWaste < 0.01 || this.referenceValues.foodLeftoversVolumeInGlobalWaste > 100) {
        return true;
      }

      if (this.referenceValues.actualFoodLeftoversInFoodWaste < 0.01 || this.referenceValues.actualFoodLeftoversInFoodWaste > 100) {
        return true;
      } // Si tout est OK, il n'y a pas d'erreur


      return false;
    }
  }
});

/***/ }),

/***/ "./resources/texts/wasteSimulator/InputPageText.js":
/*!*********************************************************!*\
  !*** ./resources/texts/wasteSimulator/InputPageText.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      get_an_audit: 'Obtenez une estimation économique et quantitative du gaspillage alimentaire',
      in_15m: 'de votre établissement en 15 minutes',
      steps: {
        dates: 'Les dates',
        dishes: 'Les repas',
        wastes: 'Les déchets'
      },
      step_instruction: {
        dates: 'Précisez la période sur laquelle vos données vont porter :',
        dishes: 'Saisissez les informations sur les repas produits/commandés par votre cuisine sur cette période',
        wastes: 'Saisissez les informations sur les déchets (hors déchets médicaux pour les structures médicales) sur la même période.'
      },
      labels: {
        start_date: 'Date de début :',
        end_date: 'Date de fin :',
        dishes_number: 'Nombre de repas',
        dish_cost: 'Coût de revient d\'un repas',
        dish_weight: 'Poids moyen d\'un repas (en g)',
        waste_volume: 'Volume constaté (en tonnes)',
        waste_cost: 'Coût de traitement par tonnes (en €)'
      },
      nextBtn: 'suivant',
      prevBtn: 'retour',
      okBtn: 'OK',
      dish_cost_is_calculated_with: '*Le prix de revient d’un repas peut être calculé grâce à la formule suivante :',
      calcul_1: {
        line_1: '[(montant total des achats alimentaires (matière première)',
        line_2: '+ masse salariale de l\'équipe de restauration',
        line_3: '+ investissements',
        line_4: '+ coût de l\'énergie)',
        line_5: '/ nombre de repas produits]'
      },
      or_with: 'ou',
      if_you_externalize: 'en cas d\'externalisation',
      calcul_2: '[coût facturé / nombre de repas produits]',
      learn_more_about_profiling_ones_wastes: 'En savoir plus sur la méthode pour réaliser la caractérisation de ses déchets',
      following: 'Suite à la',
      niort_waste_profiling: 'caractérisation des déchets du C.H de Niort',
      it_has_been_discovered: 'Il a été constaté que la part des restes alimentaires représente environ',
      percent_of_global_waste_volume: '% du volume global des ordures ménagères, soit dans votre cas',
      tons: 'tonnes',
      without_any_change: 'Sans action particulière',
      percent_of_this_volume: '% de ces restes sont considérés comme des déchets issus du gaspillage, soit dans votre cas',
      dont_hesitate_to: 'Bien sûr, si vous avez déjà effectué votre caractérisation et que vous disposez de chiffres plus précis, n\'hésitez pas à',
      edit_values: 'modifier ces valeurs',
      or_to: 'ou à',
      reset_values: 'les réinitialiser à leurs valeur par défaut',
      start_sim: 'Je lance ma simulation'
    };
  }
});

/***/ })

}]);