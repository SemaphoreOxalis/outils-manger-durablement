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
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_texts_GeneralText__WEBPACK_IMPORTED_MODULE_0__["default"], _texts_carbonSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_4__["default"]],
  data: function data() {
    return {
      counters: {
        basketCounter: 0,
        productsCounter: 0
      },
      previousBasketsDate: null,
      previousBasketsDetectedInLocalStorage: false
    };
  },
  created: function created() {
    this.checkPreviousBasketsFromLocalStorage();
    this.fetchCountersFromDB();
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
      this.deleteBasketsFromLocalStorage();
      this.previousBasketsDetectedInLocalStorage = false;
      flash("Vos paniers ont bien été supprimés");
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
          : _vm._e(),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            _vm._s(_vm.on_this_tool) +
              " " +
              _vm._s(this.counters.productsCounter) +
              " " +
              _vm._s(_vm.products_have_been_added_to) +
              " " +
              _vm._s(this.counters.basketCounter) +
              " " +
              _vm._s(_vm.bskets)
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
            _c("li", [_vm._v(_vm._s(_vm.shopping_list))])
          ]),
          _vm._v(" "),
          _c("p", [
            _c("strong", [_vm._v(_vm._s(_vm.you_ll_get_results_in_15m))])
          ]),
          _vm._v(" "),
          !_vm.previousBasketsDetectedInLocalStorage
            ? _c(
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
                      _c(
                        "div",
                        { staticClass: "icon align-self-center mr-4" },
                        [_vm._v("")]
                      ),
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
            : _vm._e()
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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
      you_ll_get_results_in_15m: 'Grâce à ces données, vous obtiendrez une estimation économique et quantitative de l\'impact carbone de votre établissement en 15 minutes',
      on_this_tool: 'Sur cet outil,',
      products_have_been_added_to: 'produits ont été ajoutés à',
      bskets: 'paniers'
    };
  }
});

/***/ })

}]);