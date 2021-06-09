(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/HelpModal"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/HelpModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/HelpModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texts_wasteSimulator_HelpModalText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/wasteSimulator/HelpModalText */ "./resources/texts/wasteSimulator/HelpModalText.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_texts_wasteSimulator_HelpModalText__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      text: ''
    };
  },
  methods: {
    // nécessaire pour notifier le composant parent (WasteHomePage.vue)
    close: function close() {
      this.$emit('close');
    }
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.fetchContent('Gaspi - Modale calcul prix d\'un repas');

            case 2:
              _this.text = _context.sent;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/HelpModal.vue?vue&type=template&id=1517b9a2&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/HelpModal.vue?vue&type=template&id=1517b9a2& ***!
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
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-container" }, [
          _c("div", { staticClass: "modal-body" }, [
            _c("div", { domProps: { innerHTML: _vm._s(_vm.text) } })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "help-modal modal-footer" }, [
            _c(
              "button",
              {
                staticClass: "modal-default-button button alter",
                on: { click: _vm.close }
              },
              [
                _vm._v(
                  "\n                        " +
                    _vm._s(_vm.okBtn) +
                    "\n                    "
                )
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/waste-simulation/HelpModal.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/waste-simulation/HelpModal.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelpModal_vue_vue_type_template_id_1517b9a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelpModal.vue?vue&type=template&id=1517b9a2& */ "./resources/js/components/waste-simulation/HelpModal.vue?vue&type=template&id=1517b9a2&");
/* harmony import */ var _HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HelpModal.vue?vue&type=script&lang=js& */ "./resources/js/components/waste-simulation/HelpModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelpModal_vue_vue_type_template_id_1517b9a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HelpModal_vue_vue_type_template_id_1517b9a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/waste-simulation/HelpModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/waste-simulation/HelpModal.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/HelpModal.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HelpModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/HelpModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/waste-simulation/HelpModal.vue?vue&type=template&id=1517b9a2&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/waste-simulation/HelpModal.vue?vue&type=template&id=1517b9a2& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_template_id_1517b9a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./HelpModal.vue?vue&type=template&id=1517b9a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/HelpModal.vue?vue&type=template&id=1517b9a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_template_id_1517b9a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelpModal_vue_vue_type_template_id_1517b9a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/texts/wasteSimulator/HelpModalText.js":
/*!*********************************************************!*\
  !*** ./resources/texts/wasteSimulator/HelpModalText.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dish_cost_is_calculated: 'Le prix de revient peut être calculé à partir :',
      from: {
        food_cost: 'du montant total des achats alimentaires',
        team_size: 'de la masse salariale de l\'équipe de restauration',
        investment: 'du coût des investissements',
        energy_cost: 'du coût de l\'énergie',
        unit_cost_of_bought_dish: 'du coût unitaire d\'un repas facturé'
      },
      or_with: 'OU',
      if_you_externalize: 'dans le cas où votre établissement fait appel à un prestataire :',
      okBtn: 'OK'
    };
  }
});

/***/ })

}]);