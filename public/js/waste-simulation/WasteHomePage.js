(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/waste-simulation/WasteHomePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/waste-simulation/WasteHomePage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texts_GeneralText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/GeneralText */ "./resources/texts/GeneralText.js");
/* harmony import */ var _texts_wasteSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../texts/wasteSimulator/HomePageText */ "./resources/texts/wasteSimulator/HomePageText.js");
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
/* harmony import */ var _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/DateFormatter */ "./resources/js/helpers/DateFormatter.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");


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
  mixins: [_texts_GeneralText__WEBPACK_IMPORTED_MODULE_1__["default"], _texts_wasteSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_4__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_5__["default"]],
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
      previousAuditDate: null,
      localStorageDisclaimer: '',
      howToUse: '',
      button: null
    };
  },
  // A l'initialisation du composant
  created: function created() {
    this.checkPreviousAuditFromLocalStorage();
    this.fetchCountersFromDB();
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.fetchContent('Disclaimer LocalStorage');

            case 2:
              _this.localStorageDisclaimer = _context.sent;
              _context.next = 5;
              return _this.fetchContent('Gaspi - Préparation');

            case 5:
              _this.howToUse = _context.sent;

              _this.$nextTick(function () {
                _this.button = document.createElement('span');
                _this.button.innerHTML = '<a class="button alter info-bubble" @click="displayModal">?<span>aide</span></a>';

                _this.button.addEventListener('click', _this.displayModal);

                document.getElementById('add-help-modal-button').appendChild(_this.button);
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this.button.removeEventListener('click', this.displayModal);
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
    },
    displayModal: function displayModal() {
      this.showModal = true;
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
          _c("div", {
            domProps: { innerHTML: _vm._s(_vm.localStorageDisclaimer) }
          }),
          _vm._v(" "),
          _vm.previousAuditDetectedInLocalStorage
            ? _c("div", { staticClass: "info p-4 m-4" }, [
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
                          _c("span", { staticClass: "icon mr-4" }, [
                            _vm._v("")
                          ]),
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
            _c("div", { domProps: { innerHTML: _vm._s(_vm.howToUse) } }),
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