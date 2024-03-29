(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/carbon-simulation/OriginsAdminPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_database_OriginsDataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/carbon-simulation/database/OriginsDataBase */ "./resources/js/helpers/carbon-simulation/database/OriginsDataBase.js");
/* harmony import */ var _texts_AdminPageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../texts/AdminPageText */ "./resources/texts/AdminPageText.js");
/* harmony import */ var _texts_carbonSimulator_AdminPagesText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../texts/carbonSimulator/AdminPagesText */ "./resources/texts/carbonSimulator/AdminPagesText.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_helpers_carbon_simulation_database_OriginsDataBase__WEBPACK_IMPORTED_MODULE_0__["default"], _texts_AdminPageText__WEBPACK_IMPORTED_MODULE_1__["default"], _texts_carbonSimulator_AdminPagesText__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      origins: [],
      newOrigin: {
        from: '',
        distance: 0,
        carbonImpact: 0,
        carbonImpactPerKg: 0
      }
    };
  },
  created: function created() {
    this.fetchOrigins();
  },
  methods: {
    refreshOrigins: function refreshOrigins() {
      this.fetchOrigins();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=template&id=05830178&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=template&id=05830178& ***!
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
      _c("h4", [_vm._v(_vm._s(_vm.tabs.origins))]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          _vm._s(_vm.howTo.youCanDoStuffWith) +
            " " +
            _vm._s(_vm.howTo.origins) +
            " " +
            _vm._s(_vm.howTo.fieldsCantBeNull)
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.origins, function(origin) {
        return _c("div", { key: origin.id }, [
          _c("div", { staticClass: "form-group admin" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: origin.from,
                  expression: "origin.from"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              attrs: { type: "text", required: "" },
              domProps: { value: origin.from },
              on: {
                change: function($event) {
                  return _vm.updateOrigin(origin)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(origin, "from", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: origin.distance,
                  expression: "origin.distance"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              attrs: { type: "number", required: "", min: "0", step: "1" },
              domProps: { value: origin.distance },
              on: {
                change: function($event) {
                  return _vm.updateOrigin(origin)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(origin, "distance", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: origin.carbonImpact,
                  expression: "origin.carbonImpact"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              attrs: {
                type: "number",
                required: "",
                min: "0",
                step: "0.00001"
              },
              domProps: { value: origin.carbonImpact },
              on: {
                change: function($event) {
                  return _vm.updateOrigin(origin)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(origin, "carbonImpact", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: origin.carbonImpactPerKg,
                  expression: "origin.carbonImpactPerKg"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              attrs: {
                type: "number",
                required: "",
                min: "0",
                step: "0.00001"
              },
              domProps: { value: origin.carbonImpactPerKg },
              on: {
                change: function($event) {
                  return _vm.updateOrigin(origin)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(origin, "carbonImpactPerKg", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "trash-icon",
                on: {
                  click: function($event) {
                    return _vm.deleteOrigin(origin.id)
                  }
                }
              },
              [_c("i", { staticClass: "icon" }, [_vm._v("")])]
            )
          ])
        ])
      }),
      _vm._v(" "),
      _c("div", { staticClass: "form-group admin" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newOrigin.from,
              expression: "newOrigin.from"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: {
            type: "text",
            required: "",
            placeholder: "ajouter une origine"
          },
          domProps: { value: _vm.newOrigin.from },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newOrigin, "from", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newOrigin.distance,
              expression: "newOrigin.distance"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: { type: "number", required: "", min: "0", step: "1" },
          domProps: { value: _vm.newOrigin.distance },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newOrigin, "distance", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newOrigin.carbonImpact,
              expression: "newOrigin.carbonImpact"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: { type: "number", required: "", min: "0", step: "0.00001" },
          domProps: { value: _vm.newOrigin.carbonImpact },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newOrigin, "carbonImpact", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newOrigin.carbonImpactPerKg,
              expression: "newOrigin.carbonImpactPerKg"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: { type: "number", required: "", min: "0", step: "0.00001" },
          domProps: { value: _vm.newOrigin.carbonImpactPerKg },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newOrigin, "carbonImpactPerKg", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "button alter", on: { click: _vm.addOrigin } },
          [_vm._v(_vm._s(_vm.okBtn))]
        )
      ])
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "my-2 d-flex justify-content-around pr-3" },
      [
        _c("p", [_c("strong", [_vm._v("Origine")])]),
        _vm._v(" "),
        _c("p", [_c("strong", [_vm._v("Distance (km)")])]),
        _vm._v(" "),
        _c("p", [_c("strong", [_vm._v("Impact Carbone")])]),
        _vm._v(" "),
        _c("p", [_c("strong", [_vm._v("Impact Carbone par Km")])])
      ]
    )
  }
]
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

/***/ "./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OriginsAdminPage_vue_vue_type_template_id_05830178___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OriginsAdminPage.vue?vue&type=template&id=05830178& */ "./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=template&id=05830178&");
/* harmony import */ var _OriginsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OriginsAdminPage.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OriginsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OriginsAdminPage_vue_vue_type_template_id_05830178___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OriginsAdminPage_vue_vue_type_template_id_05830178___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OriginsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OriginsAdminPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OriginsAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=template&id=05830178&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=template&id=05830178& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OriginsAdminPage_vue_vue_type_template_id_05830178___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OriginsAdminPage.vue?vue&type=template&id=05830178& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/OriginsAdminPage.vue?vue&type=template&id=05830178&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OriginsAdminPage_vue_vue_type_template_id_05830178___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OriginsAdminPage_vue_vue_type_template_id_05830178___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/database/OriginsDataBase.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/database/OriginsDataBase.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    fetchOrigins: function fetchOrigins() {
      var _this = this;

      getOrigins().then(function (response) {
        _this.origins = response.data;
      });
    },
    updateOrigin: function updateOrigin(origin) {
      patchOrigin(origin).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    addOrigin: function addOrigin() {
      var _this2 = this;

      postOrigin(this.newOrigin).then(function (response) {
        _this2.origins.push(response.data);

        _this2.newOrigin = {};
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    deleteOrigin: function deleteOrigin(originId) {
      var _this3 = this;

      destroyOrigin(originId).then(function (response) {
        flash(response.data);

        _this3.refreshOrigins();
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
});

function getOrigins() {
  return axios.get('/api/origins');
}

function patchOrigin(origin) {
  return axios.patch('/api/origins/' + origin.id, {
    from: origin.from,
    distance: origin.distance,
    carbonImpact: origin.carbonImpact,
    carbonImpactPerKg: origin.carbonImpactPerKg
  });
}

function postOrigin(newOrigin) {
  return axios.post('/api/origins', {
    from: newOrigin.from,
    distance: newOrigin.distance,
    carbonImpact: newOrigin.carbonImpact,
    carbonImpactPerKg: newOrigin.carbonImpactPerKg
  });
}

function destroyOrigin(originId) {
  return axios["delete"]('/api/origins/' + originId);
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

/***/ }),

/***/ "./resources/texts/carbonSimulator/AdminPagesText.js":
/*!***********************************************************!*\
  !*** ./resources/texts/carbonSimulator/AdminPagesText.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tabs: {
        products: 'Produits',
        categories: 'Catégories',
        units: 'Unités',
        origins: 'Origines'
      },
      okBtn: 'OK',
      howTo: {
        youCanDoStuffWith: 'ici, vous pouvez renommer, ajouter ou supprimer des',
        products: 'produits',
        categories: 'catégories',
        units: 'unités',
        origins: 'origines',
        fieldsCantBeNull: '(les champs ne peuvent être égaux à 0)',
        warning: {
          warning: 'ATTENTION :',
          deletingCategory: 'supprimer une catégorie supprimera tous les produits associés',
          deletingUnit: 'supprimer une unité supprimera tous les produits associés'
        }
      }
    };
  }
});

/***/ })

}]);