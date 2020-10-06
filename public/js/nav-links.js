(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/nav-links"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationLinks.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavigationLinks.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_NavigationLinksText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../texts/NavigationLinksText */ "./resources/texts/NavigationLinksText.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_texts_NavigationLinksText__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      dataInLocalStorage: false
    };
  },
  mounted: function mounted() {
    this.checkDataInLocalStorage();
    events.$on('check-data-in-local-storage', this.checkDataInLocalStorage);
  },
  methods: {
    checkDataInLocalStorage: function checkDataInLocalStorage() {
      this.dataInLocalStorage = localStorage.hasOwnProperty('audit');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationLinks.vue?vue&type=template&id=59f9f82c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/NavigationLinks.vue?vue&type=template&id=59f9f82c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "router-link",
        { staticClass: "menu-item button icon", attrs: { to: "/" } },
        [_vm._v("\n        "), _c("span", [_vm._v(_vm._s(_vm.home))])]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "menu-item button icon",
          attrs: { to: "/waste-simulator" }
        },
        [
          _vm._v("\n        "),
          _c("span", [_vm._v(_vm._s(_vm.waste_simulator))])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "menu-item button icon ml-4",
          attrs: { to: "/waste-simulator/input" }
        },
        [_vm._v("\n        "), _c("span", [_vm._v(_vm._s(_vm.new_audit))])]
      ),
      _vm._v(" "),
      _vm.dataInLocalStorage
        ? _c(
            "router-link",
            {
              staticClass: "menu-item button icon ml-4",
              attrs: { to: "/waste-simulator/results" }
            },
            [
              _vm._v("\n        "),
              _c("span", [_vm._v(_vm._s(_vm.resume_sim))])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "menu-item button icon",
          attrs: { to: "/carbon-simulator" }
        },
        [
          _vm._v("\n        "),
          _c("span", [_vm._v(_vm._s(_vm.carbon_simulator))])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "menu-item button icon ml-4",
          attrs: { to: "/carbon-simulator/basket-simulator" }
        },
        [_vm._v("\n        "), _c("span", [_vm._v(_vm._s(_vm.resume_basket))])]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/NavigationLinks.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/NavigationLinks.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavigationLinks_vue_vue_type_template_id_59f9f82c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationLinks.vue?vue&type=template&id=59f9f82c& */ "./resources/js/components/NavigationLinks.vue?vue&type=template&id=59f9f82c&");
/* harmony import */ var _NavigationLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationLinks.vue?vue&type=script&lang=js& */ "./resources/js/components/NavigationLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavigationLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavigationLinks_vue_vue_type_template_id_59f9f82c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavigationLinks_vue_vue_type_template_id_59f9f82c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/NavigationLinks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/NavigationLinks.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/NavigationLinks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationLinks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationLinks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationLinks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/NavigationLinks.vue?vue&type=template&id=59f9f82c&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/NavigationLinks.vue?vue&type=template&id=59f9f82c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationLinks_vue_vue_type_template_id_59f9f82c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NavigationLinks.vue?vue&type=template&id=59f9f82c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/NavigationLinks.vue?vue&type=template&id=59f9f82c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationLinks_vue_vue_type_template_id_59f9f82c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavigationLinks_vue_vue_type_template_id_59f9f82c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/texts/NavigationLinksText.js":
/*!************************************************!*\
  !*** ./resources/texts/NavigationLinksText.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      home: 'Accueil',
      waste_simulator: 'Outil Gaspi',
      new_audit: 'Nouvel audit',
      resume_sim: 'Reprendre simulation',
      carbon_simulator: 'Outil Carbone',
      resume_basket: 'reprendre panier'
    };
  }
});

/***/ })

}]);