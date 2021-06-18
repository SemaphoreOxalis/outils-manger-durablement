(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/carbon-simulation/CategoriesAdminPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/carbon-simulation/database/CategoriesDataBase */ "./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_helpers_carbon_simulation_database_CategoriesDataBase__WEBPACK_IMPORTED_MODULE_0__["default"], _texts_AdminPageText__WEBPACK_IMPORTED_MODULE_1__["default"], _texts_carbonSimulator_AdminPagesText__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      categories: [],
      newCategory: ''
    };
  },
  created: function created() {
    this.fetchCategories();
  },
  methods: {
    refreshCategories: function refreshCategories() {
      this.fetchCategories();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=template&id=40df7d3f&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=template&id=40df7d3f& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
      _c("h4", [_vm._v(_vm._s(_vm.tabs.categories))]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          _vm._s(_vm.howTo.youCanDoStuffWith) +
            " " +
            _vm._s(_vm.howTo.categories)
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _c("strong", [_vm._v(_vm._s(_vm.howTo.warning.warning))]),
        _vm._v(" " + _vm._s(_vm.howTo.warning.deletingCategory))
      ]),
      _vm._v(" "),
      _vm._l(_vm.categories, function(category) {
        return _c("div", { key: category.id }, [
          _c("div", { staticClass: "form-group admin" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: category.name,
                  expression: "category.name"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              attrs: { type: "text", required: "" },
              domProps: { value: category.name },
              on: {
                change: function($event) {
                  return _vm.updateCategory(category)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(category, "name", $event.target.value)
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
                    return _vm.deleteCategory(category.id)
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
              value: _vm.newCategory,
              expression: "newCategory"
            }
          ],
          staticClass: "custom-input browser-default number-field",
          attrs: {
            type: "text",
            required: "",
            placeholder: "ajouter une catégorie"
          },
          domProps: { value: _vm.newCategory },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newCategory = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "button alter", on: { click: _vm.addCategory } },
          [_vm._v(_vm._s(_vm.okBtn))]
        )
      ])
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

/***/ "./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CategoriesAdminPage_vue_vue_type_template_id_40df7d3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CategoriesAdminPage.vue?vue&type=template&id=40df7d3f& */ "./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=template&id=40df7d3f&");
/* harmony import */ var _CategoriesAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoriesAdminPage.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CategoriesAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CategoriesAdminPage_vue_vue_type_template_id_40df7d3f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CategoriesAdminPage_vue_vue_type_template_id_40df7d3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesAdminPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=template&id=40df7d3f&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=template&id=40df7d3f& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesAdminPage_vue_vue_type_template_id_40df7d3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CategoriesAdminPage.vue?vue&type=template&id=40df7d3f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/admin/CategoriesAdminPage.vue?vue&type=template&id=40df7d3f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesAdminPage_vue_vue_type_template_id_40df7d3f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CategoriesAdminPage_vue_vue_type_template_id_40df7d3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/database/CategoriesDataBase.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    fetchCategories: function fetchCategories() {
      var _this = this;

      getCategories().then(function (response) {
        _this.categories = response.data;
      });
    },
    updateCategory: function updateCategory(category) {
      patchCategory(category).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    addCategory: function addCategory() {
      var _this2 = this;

      postCategory(this.newCategory).then(function (response) {
        _this2.categories.push(response.data);

        _this2.newCategory = '';
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    deleteCategory: function deleteCategory(catId) {
      var _this3 = this;

      destroyCategory(catId).then(function (response) {
        flash(response.data);

        _this3.refreshCategories();
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    }
  }
});

function getCategories() {
  return axios.get('/api/categories');
}

function patchCategory(category) {
  return axios.patch('/api/categories/' + category.id, {
    name: category.name
  });
}

function postCategory(newCatName) {
  return axios.post('/api/categories', {
    name: newCatName
  });
}

function destroyCategory(catId) {
  return axios["delete"]('/api/categories/' + catId);
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