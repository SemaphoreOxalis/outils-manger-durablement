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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    basketId: String,
    index: Number,
    origins: Array
  },
  data: function data() {
    return {
      fullProductShown: false
    };
  },
  computed: {
    collapseClass: function collapseClass() {
      return '.collapse-' + this.basketId + '-' + this.product.id;
    },
    headerId: function headerId() {
      return '#header-' + this.basketId + '-' + this.product.id;
    },
    collapseIconId: function collapseIconId() {
      return '#collapse-icon-' + this.basketId + '-' + this.product.id;
    }
  },
  methods: {
    removeProduct: function removeProduct(index) {
      this.$emit('remove-product', index);
    },
    save: function save() {
      this.$emit('save-changes');
    },
    toggleFullProduct: function toggleFullProduct() {
      this.fullProductShown = !this.fullProductShown;
      var collapseClass = this.collapseClass;
      var headerId = this.headerId;
      var collapseIconId = this.collapseIconId;
      $(collapseClass).on('show.bs.collapse', function () {
        $(collapseIconId).addClass("reversed");
      }).on('hide.bs.collapse', function () {
        $(collapseIconId).removeClass("reversed");
      });
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
  return _c("div", { staticClass: "product-item" }, [
    _c(
      "div",
      {
        staticClass: "product-header-container",
        attrs: { id: "header-" + _vm.basketId + "-" + _vm.product.id }
      },
      [
        _c("div", { staticClass: "d-flex" }, [
          _c("div", { staticClass: "text-block" }, [
            _c("span", { staticClass: "product-name" }, [
              _vm._v(_vm._s(_vm.product.name) + " "),
              _c("small", [_vm._v(_vm._s(_vm.product.origin.from))])
            ])
          ]),
          _vm._v(" "),
          _vm.product.comment
            ? _c(
                "a",
                {
                  staticClass:
                    "info-bubble product-info-bubble btn-ico alt tool info ml-2",
                  attrs: { title: _vm.product.comment }
                },
                [_vm._v("")]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex" }, [
          _c(
            "a",
            {
              staticClass: "btn-ico alt tool info-bubble",
              attrs: {
                "data-toggle": "collapse",
                "data-target": "#body-" + _vm.basketId + "-" + _vm.product.id,
                "aria-expanded": "false",
                "aria-controls": "body-" + _vm.basketId + "-" + _vm.product.id
              },
              on: { click: _vm.toggleFullProduct }
            },
            [
              _c("i", {
                staticClass: "icon icon-angle-down",
                attrs: {
                  id: "collapse-icon-" + _vm.basketId + "-" + _vm.product.id
                }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "btn-ico alt tool info-bubble",
              attrs: { title: "Supprimer ce produit de la liste" },
              on: {
                click: function($event) {
                  return _vm.removeProduct(_vm.index)
                }
              }
            },
            [_vm._v("")]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class:
          "collapse product-details-info collapse-" +
          _vm.basketId +
          "-" +
          _vm.product.id,
        attrs: { id: "body-" + _vm.basketId + "-" + _vm.product.id }
      },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.product.amount,
              expression: "product.amount"
            }
          ],
          staticClass:
            "ignore-draggable custom-input browser-default number-field input",
          attrs: {
            type: "number",
            maxlength: "256",
            min: "0",
            step: "1",
            required: ""
          },
          domProps: { value: _vm.product.amount },
          on: {
            change: _vm.save,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.product, "amount", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "units" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.product.unit.shortUnit) +
              "\n            "
          ),
          _c(
            "a",
            {
              staticClass:
                "info-bubble product-info-bubble btn-ico alt tool info",
              attrs: { title: _vm.product.unit.unit }
            },
            [_vm._v("")]
          )
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.product.price,
              expression: "product.price"
            }
          ],
          staticClass:
            "ignore-draggable custom-input browser-default number-field input",
          attrs: {
            type: "number",
            maxlength: "256",
            min: "0",
            step: "1",
            required: ""
          },
          domProps: { value: _vm.product.price },
          on: {
            change: _vm.save,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.product, "price", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "units" }, [_vm._v("€")]),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "center",
            attrs: { for: "origin-" + _vm.basketId + "-" + _vm.product.id }
          },
          [_vm._v("Origine")]
        ),
        _vm._v(" "),
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
            staticClass: "custom-select input custom-input",
            attrs: {
              id: "origin-" + _vm.basketId + "-" + _vm.product.id,
              name: "origin-" + _vm.basketId + "-" + _vm.product.id,
              "data-name": "Origine " + _vm.basketId + "-" + _vm.product.id
            },
            on: {
              change: [
                function($event) {
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
                },
                _vm.save
              ]
            }
          },
          _vm._l(_vm.origins, function(origin) {
            return _c("option", { domProps: { value: origin } }, [
              _vm._v(
                "\n                " + _vm._s(origin.from) + "\n            "
              )
            ])
          }),
          0
        )
      ]
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