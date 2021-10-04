(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/HomePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomePage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomePage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _texts_HomePageText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../texts/HomePageText */ "./resources/texts/HomePageText.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/DataBase */ "./resources/js/helpers/DataBase.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_texts_HomePageText__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      title: "<div class=\"loader-spinner\"></div>",
      text: "<div class=\"loader-spinner\"></div>"
    };
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.fetchContent('Titre Page d\'accueil');

            case 2:
              _this.title = _context.sent;
              _context.next = 5;
              return _this.fetchContent('Texte Page d\'accueil');

            case 5:
              _this.text = _context.sent;

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomePage.vue?vue&type=template&id=fa44bb0e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomePage.vue?vue&type=template&id=fa44bb0e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("div", { domProps: { innerHTML: _vm._s(_vm.title) } }),
    _vm._v(" "),
    _c("div", { domProps: { innerHTML: _vm._s(_vm.text) } }),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col" },
        [
          _c(
            "router-link",
            { attrs: { to: "/waste-simulator", tag: "span" } },
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
                      _c("small", [_vm._v(_vm._s(_vm.btns.i_am_simulating))]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("strong", [_vm._v(_vm._s(_vm.btns.food_waste))])
                    ]
                  )
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col" },
        [
          _c(
            "router-link",
            { attrs: { to: "/carbon-simulator", tag: "span" } },
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
                      _c("small", [_vm._v("Je simule le")]),
                      _vm._v(" "),
                      _c("strong", [_vm._v(_vm._s(_vm.btns.carbon_impact))]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("small", [_vm._v("de mes repas")])
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

/***/ "./resources/js/components/HomePage.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/HomePage.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_fa44bb0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=fa44bb0e& */ "./resources/js/components/HomePage.vue?vue&type=template&id=fa44bb0e&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/components/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_fa44bb0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_fa44bb0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomePage.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/HomePage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HomePage.vue?vue&type=template&id=fa44bb0e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/HomePage.vue?vue&type=template&id=fa44bb0e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_fa44bb0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=fa44bb0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomePage.vue?vue&type=template&id=fa44bb0e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_fa44bb0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_fa44bb0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/texts/HomePageText.js":
/*!*****************************************!*\
  !*** ./resources/texts/HomePageText.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: {
        part_1: 'Applications de sensibilisation aux',
        part_2: 'changements de pratique de production',
        part_3: 'alimentaire en restauration collective'
      },
      welcome_text: 'Bienvenue sur ces outils, issus de la collaboration du C.H de Niort et de l\'ANAP, dans le cadre d\'un appel à projet de la fondation Carasso, financé par la région Nouvelle-Aquitaine et l\'Europe',
      you_ll_be_able_to: 'Ces outils simples vous permettront d\'établir un diagnostic de vos pratiques de production en matière de bilan carbone et de gaspillage alimentaire, et vous donneront la possibilité de simuler des changements de pratique afin d\'en constater le effets',
      btns: {
        i_am_simulating: 'Je simule mon',
        food_waste: 'gaspillage alimentaire',
        carbon_impact: 'bilan carbone'
      }
    };
  }
});

/***/ })

}]);