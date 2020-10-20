(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/CarbonHomePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_GeneralText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../texts/GeneralText */ "./resources/texts/GeneralText.js");
/* harmony import */ var _texts_carbonSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/carbonSimulator/HomePageText */ "./resources/texts/carbonSimulator/HomePageText.js");
/* harmony import */ var _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/DateFormatter */ "./resources/js/helpers/DateFormatter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_texts_GeneralText__WEBPACK_IMPORTED_MODULE_0__["default"], _texts_carbonSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      previousBasketsDate: null,
      previousBasketsDetectedInLocalStorage: false
    };
  },
  created: function created() {
    this.checkPreviousBasketsFromLocalStorage();
  },
  methods: {
    checkPreviousBasketsFromLocalStorage: function checkPreviousBasketsFromLocalStorage() {
      if (localStorage.hasOwnProperty('baskets')) {
        this.previousBasketsDetectedInLocalStorage = true;
        this.previousBasketsDate = this.getBasketsDateFromLocalStorage();
      }
    },
    goToPreviousBaskets: function goToPreviousBaskets() {
      this.$router.push({
        name: 'basket-simulator'
      });
    },
    deleteBaskets: function deleteBaskets() {
      localStorage.removeItem('baskets');
      this.previousBasketsDetectedInLocalStorage = false;
      flash("Vos paniers ont bien été supprimés");
    },
    getBasketsDateFromLocalStorage: function getBasketsDateFromLocalStorage() {
      return this.formatToFrench(JSON.parse(localStorage.getItem('basketsDate')));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=template&id=335fe7a4&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=template&id=335fe7a4& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col" }, [
        _c("div", { staticClass: "info p-4 m-4" }, [
          _c("p", [
            _c("i", [_vm._v(_vm._s(_vm.no_private_info_sent_disclaimer))])
          ])
        ]),
        _vm._v(" "),
        _vm.previousBasketsDetectedInLocalStorage
          ? _c("div", { staticClass: "info p-4 m-4" }, [
              _c("p", [
                _vm._v(_vm._s(_vm.it_seems_you_have_baskets_from) + " "),
                _c("strong", [_vm._v(_vm._s(this.previousBasketsDate))])
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
                      on: { click: _vm.goToPreviousBaskets }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "icon align-self-center mr-4" },
                        [_vm._v("")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "text-left big-button-line-height" },
                        [
                          _c("strong", [_vm._v(_vm._s(_vm.prevBtn.goTo))]),
                          _c("br"),
                          _c("small", [
                            _vm._v(_vm._s(_vm.prevBtn.basket)),
                            _c("br"),
                            _vm._v(
                              _vm._s(_vm.prevBtn.from) +
                                " " +
                                _vm._s(this.previousBasketsDate)
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
                        on: { click: _vm.deleteBaskets }
                      },
                      [
                        _c("span", { staticClass: "icon mr-4" }, [_vm._v("")]),
                        _vm._v(_vm._s(_vm.delete_all_data))
                      ]
                    )
                  ])
                ]
              )
            ])
          : _vm._e()
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
            _c("li", [_vm._v(_vm._s(_vm.shopping_list))])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v(_vm._s(_vm.you_ll_get_results_in_15m))])
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: "basket-simulator", tag: "span" } },
            [
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
            ]
          )
        ],
        1
      )
    ])
  ])
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

/***/ "./resources/js/components/carbon-simulation/CarbonHomePage.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/CarbonHomePage.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CarbonHomePage_vue_vue_type_template_id_335fe7a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CarbonHomePage.vue?vue&type=template&id=335fe7a4& */ "./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=template&id=335fe7a4&");
/* harmony import */ var _CarbonHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CarbonHomePage.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CarbonHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CarbonHomePage_vue_vue_type_template_id_335fe7a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CarbonHomePage_vue_vue_type_template_id_335fe7a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/CarbonHomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarbonHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarbonHomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CarbonHomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=template&id=335fe7a4&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=template&id=335fe7a4& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarbonHomePage_vue_vue_type_template_id_335fe7a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CarbonHomePage.vue?vue&type=template&id=335fe7a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=template&id=335fe7a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarbonHomePage_vue_vue_type_template_id_335fe7a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CarbonHomePage_vue_vue_type_template_id_335fe7a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/texts/carbonSimulator/HomePageText.js":
/*!*********************************************************!*\
  !*** ./resources/texts/carbonSimulator/HomePageText.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      it_seems_you_have_baskets_from: 'Il semble que vous étiez en train de travailler sur vos paniers la dernière fois en date du',
      prevBtn: {
        goTo: 'Reprendre',
        basket: 'les paniers',
        from: 'du'
      },
      shopping_list: 'des achats alimentaires de votre cuisine (aliments ainsi que leur quantité et leur provenance',
      you_ll_get_results_in_15m: 'Grâce à ces données, vous obtiendrez une estimation économique et quantitative de l\'impact carbone de votre établissement en 15 minutes'
    };
  }
});

/***/ })

}]);