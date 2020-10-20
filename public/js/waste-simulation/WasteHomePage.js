(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/WasteHomePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_GeneralText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../texts/GeneralText */ "./resources/texts/GeneralText.js");
/* harmony import */ var _texts_wasteSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/wasteSimulator/HomePageText */ "./resources/texts/wasteSimulator/HomePageText.js");
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
/* harmony import */ var _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/DateFormatter */ "./resources/js/helpers/DateFormatter.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// fenêtre modale d'aide



var HelpModal = function HelpModal() {
  return __webpack_require__.e(/*! import() | js/waste-simulation/HelpModal */ "js/waste-simulation/HelpModal").then(__webpack_require__.bind(null, /*! ./HelpModal.vue */ "./resources/js/components/waste-simulation/HelpModal.vue"));
};




/* harmony default export */ __webpack_exports__["default"] = ({
  // Déclaration de la parenté de ce composant
  components: {
    HelpModal: HelpModal
  },
  // Bibliothèqye de fonctions custom
  mixins: [_texts_GeneralText__WEBPACK_IMPORTED_MODULE_0__["default"], _texts_wasteSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_4__["default"]],
  // initialisation des données utilisées par le composant
  data: function data() {
    return {
      // initialise les compteurs
      counters: {
        auditsCounter: 0,
        simulationsCounter: 0
      },
      // par défaut, la fenêtre modale est masquée
      showModal: false,
      // propriétés utilisées pour afficher (ou non) la possibilité de se rendre directement à l'audit enregistré en localStorage
      previousAuditDetectedInLocalStorage: false,
      previousAuditDate: null
    };
  },
  // A l'initialisation du composant
  created: function created() {
    this.checkPreviousAuditFromLocalStorage();
    this.fetchCountersFromDB();
  },
  methods: {
    checkPreviousAuditFromLocalStorage: function checkPreviousAuditFromLocalStorage() {
      // On récupère l'audit stocké en localStorage s'il y en a un
      if (localStorage.hasOwnProperty('audit')) {
        this.previousAuditDetectedInLocalStorage = true;
        this.previousAuditDate = this.getAuditDateFromLocalStorage();
      }
    },
    // Si un audit a été effectué, possibilité de s'y rendre directement
    goToPreviousAudit: function goToPreviousAudit() {
      this.$router.push({
        name: 'results-page'
      });
    },
    // Efface l'audit enregistré en localStorage ainsi que les simulations associées
    deletePreviousAudit: function deletePreviousAudit() {
      this.clearLocalStorage();
      this.previousAuditDetectedInLocalStorage = false;
      flash("Vos simulations ont bien été supprimées");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=template&id=727801fe&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=template&id=727801fe& ***!
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
  return _c(
    "div",
    { staticClass: "py-4 px-4" },
    [
      _vm.showModal
        ? _c("help-modal", {
            on: {
              close: function($event) {
                _vm.showModal = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "info p-4 m-4" }, [
            _c("p", [
              _c("i", [_vm._v(_vm._s(_vm.no_private_info_sent_disclaimer))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info p-4 m-4", attrs: { c: "" } }, [
            _c("p", [
              _vm._v(_vm._s(_vm.it_seems_you_have_sims_from) + " "),
              _c("strong", [_vm._v(_vm._s(this.previousAuditDate))])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "d-flex flex-column align-items-center" },
              [
                _c(
                  "button",
                  {
                    staticClass:
                      "button big-button d-flex p-4 justify-content-center mb-2",
                    on: { click: _vm.goToPreviousAudit }
                  },
                  [
                    _c("div", { staticClass: "icon align-self-center mr-4" }, [
                      _vm._v("")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-left big-button-line-height" },
                      [
                        _c("strong", [_vm._v(_vm._s(_vm.prevBtn.goTo))]),
                        _c("br"),
                        _c("small", [
                          _vm._v(_vm._s(_vm.prevBtn.sim)),
                          _c("br"),
                          _vm._v(
                            _vm._s(_vm.prevBtn.from) +
                              " " +
                              _vm._s(_vm.previousAuditDate)
                          )
                        ])
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "text-center" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button alter",
                      on: { click: _vm.deletePreviousAudit }
                    },
                    [
                      _c("span", { staticClass: "icon mr-4" }, [_vm._v("")]),
                      _vm._v(_vm._s(_vm.delete_all_data))
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              _vm._s(_vm.cntrs.this_tool_has_generated) +
                " " +
                _vm._s(this.counters.auditsCounter) +
                " " +
                _vm._s(_vm.cntrs.audits) +
                " " +
                _vm._s(this.counters.simulationsCounter) +
                " " +
                _vm._s(_vm.cntrs.sims)
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col p-4 m-4" },
          [
            _c("p", [
              _vm._v(_vm._s(_vm.to_use_this) + " "),
              _c("strong", [_vm._v(_vm._s(_vm.you_ll_need))]),
              _vm._v(" :")
            ]),
            _vm._v(" "),
            _c("ul", { staticClass: "browser-default" }, [
              _c("li", [_vm._v(_vm._s(_vm.need.dishes_number))]),
              _vm._v(" "),
              _c("li", [
                _vm._v(_vm._s(_vm.need.dish_cost) + "\n                    "),
                _c(
                  "a",
                  {
                    staticClass: "button alter",
                    on: {
                      click: function($event) {
                        _vm.showModal = true
                      }
                    }
                  },
                  [_vm._v("?")]
                )
              ]),
              _vm._v(" "),
              _c("li", [_vm._v(_vm._s(_vm.need.dish_weight))]),
              _vm._v(" "),
              _c("li", [_vm._v(_vm._s(_vm.need.waste_volume))]),
              _vm._v(" "),
              _c("li", [_vm._v(_vm._s(_vm.need.waste_cost))])
            ]),
            _vm._v(" "),
            _c("p", [
              _c("strong", [_vm._v(_vm._s(_vm.you_ll_get_results_in_15m))])
            ]),
            _vm._v(" "),
            _c("router-link", { attrs: { to: "input", tag: "span" } }, [
              _c(
                "button",
                {
                  staticClass:
                    "button big-button d-flex p-4 m-2 justify-content-center"
                },
                [
                  _c("div", { staticClass: "icon align-self-center mr-4" }, [
                    _vm._v("")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-left big-button-line-height" },
                    [
                      _c("small", [_vm._v(_vm._s(_vm.lnchBtn.im_ready))]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("strong", [_vm._v(_vm._s(_vm.lnchBtn.start))]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("small", [_vm._v(_vm._s(_vm.lnchBtn.new_sim))])
                    ]
                  )
                ]
              )
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/waste-simulation/WasteHomePage.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/waste-simulation/WasteHomePage.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WasteHomePage_vue_vue_type_template_id_727801fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WasteHomePage.vue?vue&type=template&id=727801fe& */ "./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=template&id=727801fe&");
/* harmony import */ var _WasteHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WasteHomePage.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WasteHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WasteHomePage_vue_vue_type_template_id_727801fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WasteHomePage_vue_vue_type_template_id_727801fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/WasteHomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WasteHomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=template&id=727801fe&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=template&id=727801fe& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteHomePage_vue_vue_type_template_id_727801fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WasteHomePage.vue?vue&type=template&id=727801fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=template&id=727801fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteHomePage_vue_vue_type_template_id_727801fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteHomePage_vue_vue_type_template_id_727801fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/DataBase.js":
/*!******************************************!*\
  !*** ./resources/js/helpers/DataBase.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Intéractions avec la base de donnée
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    // WASTE HOME-PAGE component
    fetchCountersFromDB: function fetchCountersFromDB() {
      var _this = this;

      getCountersFromDB().then(function (response) {
        _this.counters.auditsCounter = response.data[0].value;
        _this.counters.simulationsCounter = response.data[1].value;
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
      // Appel AJAX
      patchCounter(counter).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    //INPUT component
    // RESULTS component
    incrementAuditCounter: function incrementAuditCounter() {
      incrementAC().then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementSimulationCounter: function incrementSimulationCounter() {
      incrementSC().then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
}); // Situées ici, ces fonctions sont "privées"

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
      var basketsDate = Date.now();
      var baskets = JSON.stringify(this.baskets);
      localStorage.setItem('baskets', baskets);
      localStorage.setItem('basketsDate', basketsDate);
    }
  }
});

/***/ }),

/***/ "./resources/texts/GeneralText.js":
/*!****************************************!*\
  !*** ./resources/texts/GeneralText.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      no_private_info_sent_disclaimer: 'Aucune des informations saisies sur cet outil ne sont sauvegardées en ligne. Le stockage est réalisé uniquement au sein de votre navigateur, et donc uniquement sur cet ordinateur',
      delete_all_data: 'Effacer toutes les données',
      to_use_this: 'Pour réaliser votre première simulation,',
      you_ll_need: 'vous aurez besoin',
      lnchBtn: {
        im_ready: 'Je suis prêt',
        start: 'Démarrer',
        new_sim: 'une nouvelle simulation'
      }
    };
  }
});

/***/ }),

/***/ "./resources/texts/wasteSimulator/HomePageText.js":
/*!********************************************************!*\
  !*** ./resources/texts/wasteSimulator/HomePageText.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      it_seems_you_have_sims_from: 'Il semble que vous ayez déjà réalisé des simulations sur ce site depuis ce navigateur pour la dernière fois en date du',
      prevBtn: {
        goTo: 'Reprendre',
        sim: 'la simulation',
        from: 'du'
      },
      cntrs: {
        this_tool_has_generated: 'Cet outil a été utilisé pour générer',
        audits: 'audits et',
        sims: 'simulations'
      },
      need: {
        dishes_number: 'du nombre de repas produits dans votre établissement (par an)',
        dish_cost: 'du coût de revient unitaire d\'un repas',
        dish_weight: 'du poids moyen d\'un repas (en g)',
        waste_volume: 'du volume de déchets ménagers produits par votre établissement (en tonnes)',
        waste_cost: 'du coût de traitement des déchets (en euros par tonne)'
      },
      you_ll_get_results_in_15m: 'Grâce à ces données, vous obtiendrez une estimation économique et quantitative du gaspillage alimentaire de votre établissement en 15 minutes'
    };
  }
});

/***/ })

}]);