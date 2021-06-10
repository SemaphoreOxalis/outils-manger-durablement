(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/admin/CountersAdminPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CountersAdminPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/CountersAdminPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_AdminPageText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../texts/AdminPageText */ "./resources/texts/AdminPageText.js");
/* harmony import */ var _helpers_DataBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/DataBase */ "./resources/js/helpers/DataBase.js");
//
//
//
//
//
//
//
//
//
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
  mixins: [_texts_AdminPageText__WEBPACK_IMPORTED_MODULE_0__["default"], _helpers_DataBase__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      counters: []
    };
  },
  created: function created() {
    this.fetchCountersValueFromDB();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CountersAdminPage.vue?vue&type=template&id=022a7928&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/CountersAdminPage.vue?vue&type=template&id=022a7928& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("h4", { staticClass: "mb-4" }, [_vm._v(_vm._s(_vm.cnters.title))]),
      _vm._v(" "),
      _c("h5", [_vm._v(_vm._s(_vm.cnters.waste))]),
      _vm._v(" "),
      _vm._l(_vm.counters, function(counter) {
        return _c("div", { key: counter.id + 2 }, [
          _c("label", [_vm._v(_vm._s(counter.label))]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group admin" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: counter.value,
                  expression: "counter.value"
                }
              ],
              staticClass: "custom-input browser-default number-field",
              attrs: { type: "number", required: "", min: "0", step: "1" },
              domProps: { value: counter.value },
              on: {
                change: function($event) {
                  return _vm.updateCounter(counter)
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(counter, "value", $event.target.value)
                }
              }
            })
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/CountersAdminPage.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/CountersAdminPage.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CountersAdminPage_vue_vue_type_template_id_022a7928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CountersAdminPage.vue?vue&type=template&id=022a7928& */ "./resources/js/components/admin/CountersAdminPage.vue?vue&type=template&id=022a7928&");
/* harmony import */ var _CountersAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountersAdminPage.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/CountersAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CountersAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CountersAdminPage_vue_vue_type_template_id_022a7928___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CountersAdminPage_vue_vue_type_template_id_022a7928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/CountersAdminPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/CountersAdminPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/CountersAdminPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountersAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountersAdminPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CountersAdminPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CountersAdminPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/CountersAdminPage.vue?vue&type=template&id=022a7928&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/CountersAdminPage.vue?vue&type=template&id=022a7928& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountersAdminPage_vue_vue_type_template_id_022a7928___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CountersAdminPage.vue?vue&type=template&id=022a7928& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/CountersAdminPage.vue?vue&type=template&id=022a7928&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountersAdminPage_vue_vue_type_template_id_022a7928___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CountersAdminPage_vue_vue_type_template_id_022a7928___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ })

}]);