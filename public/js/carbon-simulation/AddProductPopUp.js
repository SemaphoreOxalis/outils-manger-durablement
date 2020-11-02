(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/AddProductPopUp"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../texts/carbonSimulator/BasketSimulatorText */ "./resources/texts/carbonSimulator/BasketSimulatorText.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_texts_carbonSimulator_BasketSimulatorText__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    product: Object,
    origins: Array,
    selectedBaskets: Array
  },
  data: function data() {
    return {
      productToAdd: {}
    };
  },
  computed: {
    isInputInvalid: function isInputInvalid() {
      if (this.productToAdd.amount < 0.01) {
        return true;
      }

      if (this.productToAdd.price < 0.01) {
        return true;
      }

      return false;
    }
  },
  created: function created() {
    this.productToAdd = _objectSpread(_objectSpread({}, this.product), {}, {
      id: 'product_to_add_' + this.product.id,
      amount: '',
      price: '',
      origin: this.origins[2]
    });
    var self = this;
    Vue.nextTick().then(function () {
      self.$refs.qty.focus();
    });
  },
  methods: {
    add: function add() {
      this.$emit('add', this.productToAdd);
    },
    exit: function exit() {
      this.productToAdd = {};
      this.$emit('exit-without-adding');
    },
    onEnter: function onEnter() {
      this.add();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=template&id=76703cdb&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=template&id=76703cdb& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "transition",
    {
      staticClass: "modal fade",
      attrs: {
        name: "modal",
        id: "basicExampleModal",
        tabindex: "-1",
        role: "dialog",
        "aria-labelledby": "exampleModalLabel",
        "aria-hidden": "true"
      }
    },
    [
      _c("div", { staticClass: "modal-mask" }, [
        _c(
          "div",
          { staticClass: "modal-wrapper modal-dialog modal-dialog-centered" },
          [
            _c(
              "div",
              {
                ref: "modal",
                staticClass: "modal-container modal-content",
                on: {
                  keydown: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onEnter($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "modal-header" }, [
                  _c("small", [_vm._v(_vm._s(_vm.add_popup.help))]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Close"
                      },
                      on: { click: _vm.exit }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "h5",
                    {
                      staticClass: "modal-title",
                      attrs: { id: "exampleModalLabel" }
                    },
                    [
                      _vm._v(_vm._s(_vm.add_popup.you_are_adding) + " "),
                      _c("strong", [_vm._v(_vm._s(this.productToAdd.name))])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "results-row" }, [
                    _vm._v(
                      _vm._s(_vm.add_popup.by_this_amount) +
                        "\n                        "
                    ),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productToAdd.amount,
                          expression: "productToAdd.amount"
                        }
                      ],
                      ref: "qty",
                      staticClass:
                        "number-field custom-input browser-default input",
                      attrs: { type: "number", min: "0", required: "required" },
                      domProps: { value: _vm.productToAdd.amount },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.productToAdd,
                            "amount",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", [_vm._v(_vm._s(this.productToAdd.unit.unit))])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "results-row" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.add_popup.for_that_much_$) +
                        " "
                    ),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productToAdd.price,
                          expression: "productToAdd.price"
                        }
                      ],
                      staticClass:
                        "number-field custom-input browser-default input",
                      attrs: { type: "number", min: "0", required: "required" },
                      domProps: { value: _vm.productToAdd.price },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.productToAdd,
                            "price",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" €\n                    ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "results-row" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.add_popup.from) +
                        "\n                        "
                    ),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.productToAdd.origin,
                            expression: "productToAdd.origin"
                          }
                        ],
                        staticClass: "custom-select input",
                        attrs: {
                          id: "origine-4",
                          name: "origine-4",
                          "data-name": "Origine 4"
                        },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.productToAdd,
                              "origin",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          }
                        }
                      },
                      _vm._l(_vm.origins, function(origin) {
                        return _c("option", { domProps: { value: origin } }, [
                          _vm._v(
                            "\n                                " +
                              _vm._s(origin.from) +
                              "\n                            "
                          )
                        ])
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "results-row" },
                    [
                      _vm._v(
                        _vm._s(_vm.add_popup.in_baskets) +
                          "\n                        "
                      ),
                      _vm._l(_vm.selectedBaskets, function(basket, i) {
                        return _c("span", [
                          i == _vm.selectedBaskets.length - 1
                            ? _c("span", [
                                _c("strong", [_vm._v(_vm._s(basket.name))])
                              ])
                            : _c("span", [
                                _c("strong", [_vm._v(_vm._s(basket.name))]),
                                _vm._v(",\n                        ")
                              ])
                        ])
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "modal-default-button button",
                      attrs: { disabled: _vm.isInputInvalid },
                      on: { click: _vm.add }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.add_popup.ok) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "modal-default-button button alter",
                      on: { click: _vm.exit }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.add_popup.cancel) +
                          "\n                    "
                      )
                    ]
                  )
                ])
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/AddProductPopUp.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/AddProductPopUp.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddProductPopUp_vue_vue_type_template_id_76703cdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddProductPopUp.vue?vue&type=template&id=76703cdb& */ "./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=template&id=76703cdb&");
/* harmony import */ var _AddProductPopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProductPopUp.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddProductPopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddProductPopUp_vue_vue_type_template_id_76703cdb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddProductPopUp_vue_vue_type_template_id_76703cdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/AddProductPopUp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductPopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProductPopUp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductPopUp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=template&id=76703cdb&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=template&id=76703cdb& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductPopUp_vue_vue_type_template_id_76703cdb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddProductPopUp.vue?vue&type=template&id=76703cdb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/AddProductPopUp.vue?vue&type=template&id=76703cdb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductPopUp_vue_vue_type_template_id_76703cdb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddProductPopUp_vue_vue_type_template_id_76703cdb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);