(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/GeneralLayout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GeneralLayout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GeneralLayout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_GeneralLayoutText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../texts/GeneralLayoutText */ "./resources/texts/GeneralLayoutText.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/DataBase */ "./resources/js/helpers/DataBase.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_texts_GeneralLayoutText__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_1__["default"]],
  watch: {
    $route: function $route(to, from) {
      this.chooseFooterToDisplay(to.path);
    }
  },
  data: function data() {
    return {
      showCounters: false,
      counters: {},
      recipesNumber: Number,
      stats: '',
      footer: "<div class=\"loader-spinner\"></div>"
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchCountersFromDB();
    this.fetchRecipesNumber();
    this.chooseFooterToDisplay(this.$route.path);
    events.$on('increment-recipes-number', function () {
      _this.recipesNumber += 1;
    });
  },
  methods: {
    chooseFooterToDisplay: function chooseFooterToDisplay(path) {
      if (path.startsWith('/waste-simulator')) {
        this.showCounters = true;
        this.stats = 'gaspi';
        this.fetchFooter('Footer Gaspi');
      } else if (path.startsWith('/carbon-simulator')) {
        this.showCounters = true;
        this.stats = 'carbon';
        this.fetchFooter('Footer Carbone');
      } else if (path.startsWith('/admin')) {
        this.showCounters = false;
        this.fetchFooter('Footer Admin');
      } else {
        this.showCounters = false;
        this.fetchFooter('Footer General');
      }
    },
    logClickOnFeedback: function logClickOnFeedback() {
      this.log('Bouton de retour cliqué');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GeneralLayout.vue?vue&type=template&id=ceab5652&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GeneralLayout.vue?vue&type=template&id=ceab5652& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "d-flex flex-column align-items-end vh-100" },
    [
      _c("main", { staticClass: "container mb-auto" }, [
        _c("div", { staticClass: "py-4" }, [_c("router-view")], 1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center mt-auto mb-2 sticky-link" }, [
        _c(
          "a",
          {
            staticClass: "button alter",
            attrs: {
              href: "https://airtable.com/shrFZqKu6MuVIK5DZ",
              target: "_blank"
            },
            on: { click: _vm.logClickOnFeedback }
          },
          [
            _c("i", { staticClass: "icon mr-2" }),
            _vm._v("J'ai une question "),
            _c("br"),
            _vm._v(" ou un retour à faire\n        ")
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "mt-auto w-100", attrs: { id: "general-footer" } },
        [
          _vm.stats === "gaspi" && _vm.showCounters
            ? _c("p", { staticClass: "text-center pt-2" }, [
                _vm._v(
                  "\n            Cet outil a été utilisé pour générer " +
                    _vm._s(_vm.counters.auditsCounter) +
                    " audits\n            et " +
                    _vm._s(_vm.counters.simulationsCounter) +
                    " simulations\n        "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.stats === "carbon" && _vm.showCounters
            ? _c(
                "p",
                { staticClass: "text-center pt-2" },
                [
                  _vm._v(
                    "\n            Sur cet outil, " +
                      _vm._s(_vm.counters.productsCounter) +
                      " produits ont été ajoutés à\n            "
                  ),
                  _c(
                    "router-link",
                    { attrs: { to: { name: "basket-simulator" }, tag: "a" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.counters.basketCounter) +
                          " listes de courses"
                      )
                    ]
                  ),
                  _vm._v(", et\n            "),
                  _c(
                    "router-link",
                    { attrs: { to: { name: "recipes-index" }, tag: "a" } },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.recipesNumber) +
                          " recettes de Chef"
                      )
                    ]
                  ),
                  _vm._v(" ont été proposées\n        ")
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { domProps: { innerHTML: _vm._s(_vm.footer) } }),
          _vm._v(" "),
          _c("p", { staticClass: "text-center" }, [
            _c(
              "small",
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "changelog" }, tag: "a" } },
                  [_vm._v("Journal des modifications")]
                )
              ],
              1
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/GeneralLayout.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/GeneralLayout.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralLayout_vue_vue_type_template_id_ceab5652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralLayout.vue?vue&type=template&id=ceab5652& */ "./resources/js/components/GeneralLayout.vue?vue&type=template&id=ceab5652&");
/* harmony import */ var _GeneralLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralLayout.vue?vue&type=script&lang=js& */ "./resources/js/components/GeneralLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GeneralLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralLayout_vue_vue_type_template_id_ceab5652___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralLayout_vue_vue_type_template_id_ceab5652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GeneralLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GeneralLayout.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/GeneralLayout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GeneralLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GeneralLayout.vue?vue&type=template&id=ceab5652&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/GeneralLayout.vue?vue&type=template&id=ceab5652& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralLayout_vue_vue_type_template_id_ceab5652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralLayout.vue?vue&type=template&id=ceab5652& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GeneralLayout.vue?vue&type=template&id=ceab5652&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralLayout_vue_vue_type_template_id_ceab5652___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralLayout_vue_vue_type_template_id_ceab5652___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
    log: function log(message) {
      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      writeLog(message, details).then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    // WASTE HOME-PAGE component
    fetchCountersFromDB: function fetchCountersFromDB() {
      var _this = this;

      getCountersFromDB().then(function (response) {
        _this.counters.auditsCounter = response.data[0].value;
        _this.counters.simulationsCounter = response.data[1].value;
        _this.counters.basketCounter = response.data[2].value;
        _this.counters.productsCounter = response.data[3].value;
        _this.counters.recipesCounter = response.data[4].value;
      });
    },
    fetchRecipesNumber: function fetchRecipesNumber() {
      var _this2 = this;

      axios.get('/api/recipes/count').then(function (response) {
        _this2.recipesNumber = response.data;
      });
    },
    // ADMIN component
    fetchCountersValueFromDB: function fetchCountersValueFromDB() {
      var _this3 = this;

      getCountersFromDB().then(function (response) {
        _this3.counters = response.data;
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
      incrementAC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementSimulationCounter: function incrementSimulationCounter() {
      incrementSC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementBasketCounter: function incrementBasketCounter() {
      incrementBC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementProductCounter: function incrementProductCounter() {
      incrementPC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    incrementRecipeCounter: function incrementRecipeCounter() {
      incrementRC().then(function (response) {// console.log(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    //CONTENTS
    fetchContents: function fetchContents() {
      var _this4 = this;

      getContents().then(function (response) {
        _this4.contents = response.data;
        _this4.selectedContent = _this4.contents[0];
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    fetchImages: function fetchImages() {
      var _this5 = this;

      getImages().then(function (response) {
        _this5.images = response.data;
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
      var _this6 = this;

      getFooter(type).then(function (response) {
        _this6.footer = _this6.decode(response.data);
      })["catch"](function (error) {
        flash(error.response.data, 'danger');
      });
    },
    fetchContent: function fetchContent(name) {
      var _this7 = this;

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
                return _context.abrupt("return", _this7.decode(response));

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
});

function writeLog(message, details) {
  return axios.post('/api/logs', {
    message: message,
    details: details
  });
}

function getContents() {
  return axios.get('/api/contents');
}

function getImages() {
  return axios.get('/api/images');
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

function incrementRC() {
  return axios.patch('/api/counters/5/increment');
}

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

/***/ "./resources/texts/GeneralLayoutText.js":
/*!**********************************************!*\
  !*** ./resources/texts/GeneralLayoutText.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      this_is_from_Niort_CH: 'Cet outil est le fruit du travail du CH de Niort,',
      financed_by: 'dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe',
      images_alt_text: {
        carasso: 'logo fondation Carasso',
        region_na: 'logo région Nouvelle-Aquitaine',
        europe: 'logo Europe'
      },
      feedback_text: 'J\'ai une question ou un retour à faire'
    };
  }
});

/***/ })

}]);