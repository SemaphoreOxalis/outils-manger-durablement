(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/CarbonHomePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/CarbonHomePage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texts_GeneralText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../texts/GeneralText */ "./resources/texts/GeneralText.js");
/* harmony import */ var _texts_carbonSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../texts/carbonSimulator/HomePageText */ "./resources/texts/carbonSimulator/HomePageText.js");
/* harmony import */ var _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/DateFormatter */ "./resources/js/helpers/DateFormatter.js");
/* harmony import */ var _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/LocalStorageHelper */ "./resources/js/helpers/LocalStorageHelper.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_texts_GeneralText__WEBPACK_IMPORTED_MODULE_1__["default"], _texts_carbonSimulator_HomePageText__WEBPACK_IMPORTED_MODULE_2__["default"], _helpers_DateFormatter__WEBPACK_IMPORTED_MODULE_3__["default"], _helpers_LocalStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_5__["default"]],
  data: function data() {
    return {
      counters: {
        basketCounter: 0,
        productsCounter: 0
      },
      previousBasketsDate: null,
      previousBasketsDetectedInLocalStorage: false,
      localStorageDisclaimer: '',
      howToUse: ''
    };
  },
  created: function created() {
    this.checkPreviousBasketsFromLocalStorage();
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
              return _this.fetchContent('Carbone - Préparation');

            case 5:
              _this.howToUse = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
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
        _c("div", {
          domProps: { innerHTML: _vm._s(_vm.localStorageDisclaimer) }
        }),
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
          _c("div", { domProps: { innerHTML: _vm._s(_vm.howToUse) } }),
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
    updateContent: function updateContent(content) {
      patchContent(content).then(function (response) {
        flash(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    fetchFooter: function fetchFooter(type) {
      var _this4 = this;

      getFooter(type).then(function (response) {
        _this4.footer = _this4.decode(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    fetchContent: function fetchContent(name) {
      var _this5 = this;

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
                return _context.abrupt("return", _this5.decode(response));

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

function getContents() {
  return axios.get('/api/contents');
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
      you_ll_get_results_in_15m: 'Grâce à ces données, vous obtiendrez une estimation économique et quantitative de l\'impact carbone de votre établissement en 15 minutes',
      on_this_tool: 'Sur cet outil,',
      products_have_been_added_to: 'produits ont été ajoutés à',
      bskets: 'paniers'
    };
  }
});

/***/ })

}]);