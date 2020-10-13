(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketProduct"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    product: Object,
    index: Number,
    origins: Array
  },
  data: function data() {
    return {};
  },
  methods: {
    removeProduct: function removeProduct(index) {
      this.$emit('remove-product', index);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=template&id=400d3486&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=template&id=400d3486& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "list-group-item product" }, [
    _c("p", [
      _vm._v("\n        " + _vm._s(_vm.product.name) + " - "),
      _c("small", [_vm._v(_vm._s(_vm.product.comment))]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "trash-icon",
          staticStyle: { display: "inline-block" },
          on: {
            click: function($event) {
              return _vm.removeProduct(_vm.index)
            }
          }
        },
        [_vm._v("\n            X\n        ")]
      )
    ]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.product.amount,
          expression: "product.amount"
        }
      ],
      staticStyle: { width: "100px" },
      attrs: { type: "number", min: "0" },
      domProps: { value: _vm.product.amount },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.product, "amount", $event.target.value)
        }
      }
    }),
    _vm._v(" " + _vm._s(_vm.product.unit.unit) + "\n    -\n    "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.product.price,
          expression: "product.price"
        }
      ],
      staticStyle: { width: "100px" },
      attrs: { type: "number", min: "0" },
      domProps: { value: _vm.product.price },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.product, "price", $event.target.value)
        }
      }
    }),
    _vm._v(" € -\n    "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.product.origin,
            expression: "product.origin"
          }
        ],
        staticStyle: { width: "100px" },
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
              _vm.product,
              "origin",
              $event.target.multiple ? $$selectedVal : $$selectedVal[0]
            )
          }
        }
      },
      _vm._l(_vm.origins, function(origin) {
        return _c("option", { domProps: { value: origin } }, [
          _vm._v("\n            " + _vm._s(origin.from) + "\n        ")
        ])
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketProduct.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketProduct.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasketProduct_vue_vue_type_template_id_400d3486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasketProduct.vue?vue&type=template&id=400d3486& */ "./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=template&id=400d3486&");
/* harmony import */ var _BasketProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketProduct.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasketProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasketProduct_vue_vue_type_template_id_400d3486___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasketProduct_vue_vue_type_template_id_400d3486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/BasketProduct.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketProduct.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketProduct_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=template&id=400d3486&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=template&id=400d3486& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketProduct_vue_vue_type_template_id_400d3486___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketProduct.vue?vue&type=template&id=400d3486& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketProduct.vue?vue&type=template&id=400d3486&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketProduct_vue_vue_type_template_id_400d3486___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketProduct_vue_vue_type_template_id_400d3486___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);