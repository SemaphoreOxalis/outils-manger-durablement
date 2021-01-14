(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/waste-simulation/WasteSimulatorAdminPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_AdminPageText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../texts/AdminPageText */ "./resources/texts/AdminPageText.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");
/* harmony import */ var _helpers_waste_simulation_WasteDataBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/waste-simulation/WasteDataBase */ "./resources/js/helpers/waste-simulation/WasteDataBase.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import des fonctions utiles regroupées dans des fichiers 'helpers'



/* harmony default export */ __webpack_exports__["default"] = ({
  // déclaration de dépendance à ces bibliothèques de fonctions
  mixins: [_texts_AdminPageText__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_waste_simulation_WasteDataBase__WEBPACK_IMPORTED_MODULE_2__["default"]],
  // initialisation des données utilisées par le composant
  data: function data() {
    return {
      values: []
    };
  },
  // Valeurs calculées à la volée
  computed: {
    // L'utilisateur est-il bien authentifié ?
    signedIn: function signedIn() {
      return window.App.signedIn;
    }
  },
  // A la création du composent (i.e quand on arrive sur la "page")
  created: function created() {
    // Va chercher les valeurs de référence dans la BDD
    this.fetchWasteReferenceValues();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
      _c("p", { staticClass: "mb-4" }, [
        _c("strong", [_vm._v(_vm._s(_vm.here_you_can_edit_values))])
      ]),
      _vm._v(" "),
      _c("h4", [_vm._v(_vm._s(_vm.waste_ref_values.title))]),
      _vm._v(" "),
      _vm._l(_vm.values, function(value) {
        return _c("div", { key: value.id }, [
          _c("label", [_vm._v(_vm._s(value.label))]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group admin" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: value.value,
                  expression: "value.value"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              attrs: {
                type: "number",
                required: "",
                min: "0",
                max: "100",
                step: "0.01"
              },
              domProps: { value: value.value },
              on: {
                change: function($event) {
                  return _vm.updateRefValue(value)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(value, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("span", [_vm._v(" %")])
          ])
        ])
      })
    ],
    2
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

/***/ "./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WasteSimulatorAdminPage_vue_vue_type_template_id_0a8024ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca& */ "./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca&");
/* harmony import */ var _WasteSimulatorAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WasteSimulatorAdminPage.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WasteSimulatorAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WasteSimulatorAdminPage_vue_vue_type_template_id_0a8024ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WasteSimulatorAdminPage_vue_vue_type_template_id_0a8024ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteSimulatorAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WasteSimulatorAdminPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteSimulatorAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteSimulatorAdminPage_vue_vue_type_template_id_0a8024ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteSimulatorAdminPage.vue?vue&type=template&id=0a8024ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteSimulatorAdminPage_vue_vue_type_template_id_0a8024ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WasteSimulatorAdminPage_vue_vue_type_template_id_0a8024ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
        _this.counters.basketCounter = response.data[2].value;
        _this.counters.productsCounter = response.data[3].value;
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
    },
    incrementBasketCounter: function incrementBasketCounter() {
      incrementBC().then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementProductCounter: function incrementProductCounter() {
      incrementPC().then(function (response) {
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

function incrementBC() {
  return axios.patch('/api/counters/3/increment');
}

function incrementPC() {
  return axios.patch('/api/counters/4/increment');
}

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

/***/ "./resources/texts/AdminPageText.js":
/*!******************************************!*\
  !*** ./resources/texts/AdminPageText.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      admin_title: 'Panneau d\'administration',
      here_you_can_edit_values: 'Ici, vous pouvez modifier simplement les valeurs de référence utilisées par l\'application',
      waste_ref_values: {
        title: 'Valeurs de référence'
      },
      cnters: {
        title: 'Compteurs',
        waste: 'Compteurs du simulateur de gaspillage alimentaire'
      },
      go_away: 'Vous n\'avez pas l\'autorisation d\'être ici'
    };
  }
});

/***/ })

}]);