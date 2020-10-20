(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/ProductList"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/carbon-simulation/searchBar */ "./resources/js/helpers/carbon-simulation/searchBar.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var draggable = function draggable() {
  return __webpack_require__.e(/*! import() | js/draggable */ "vendors~js/draggable").then(__webpack_require__.t.bind(null, /*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js", 7));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    draggable: draggable
  },
  mixins: [_helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    categories: Array,
    products: Array,
    selectedCategoryId: Number,
    selectedByCategory: Boolean,
    origins: Array,
    counters: Array
  },
  data: function data() {
    return {
      search: '',
      productListInternalCounter: 0
    };
  },
  computed: {
    filteredProducts: function filteredProducts() {
      var _this = this;

      if (this.search) {
        this.$emit('deselect-category');
        return this.searchWithSearchBar(this.products);
      }

      if (this.selectedByCategory && this.selectedCategoryId != null) {
        return this.products.filter(function (product) {
          return product.category.id === _this.selectedCategoryId;
        });
      }

      return this.products;
    }
  },
  created: function created() {
    events.$on('clear-search-bar', this.clearSearchBar);
  },
  methods: {
    getClasses: function getClasses(categoryId) {
      return ['list-group-item', 'category', categoryId === this.selectedCategoryId ? 'selected' : ''];
    },
    filterProdByCategory: function filterProdByCategory(categoryId) {
      this.$emit('filter-products-by-category', categoryId);
    },
    addProdToBasket: function addProdToBasket(product) {
      this.$emit('add-product-to-basket', product);
    },
    addProductByDrag: function addProductByDrag(product) {
      events.$emit('get-internal-counters');
      this.productListInternalCounter = this.getMaxCounter();
      return {
        id: 'basket-product-' + (this.productListInternalCounter + 1),
        name: product.name,
        comment: product.comment,
        unit: product.unit,
        category: product.category,
        origin: this.origins[2],
        // France par défaut
        unit_id: product.unit_id,
        category_id: product.category_id,
        emissionFactor: product.emissionFactor,
        amount: 1,
        price: 1
      };
    },
    clearSearchBar: function clearSearchBar() {
      this.search = '';
    },
    getMaxCounter: function getMaxCounter() {
      if (this.counters.length > 0) {
        return Math.max.apply(Math, _toConsumableArray(this.counters));
      } else {
        return 0;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.left {\n    border: 1px black solid;\n    padding: 2px;\n}\n.middle {\n    border: 1px black solid;\n    padding: 2px;\n}\n.product {\n    cursor: -webkit-grab;\n    cursor: grab;\n}\n.category {\n    cursor: pointer;\n}\n.selected,\n.moving {\n    background-color: var(--main-color-darker);\n    color: var(--light-grey);\n}\ninput {\n    width: 50px;\n}\nselect {\n    display: inline-block;\n    max-width: 200px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("h3", [_vm._v("Produits")]),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search,
          expression: "search"
        }
      ],
      attrs: { type: "text", placeholder: "Chercher un produit" },
      domProps: { value: _vm.search },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.search = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "left col-4" },
        _vm._l(_vm.categories, function(category) {
          return _c(
            "div",
            {
              key: category.id,
              class: _vm.getClasses(category.id),
              on: {
                click: function($event) {
                  return _vm.filterProdByCategory(category.id)
                }
              }
            },
            [
              _vm._v(
                "\n\n                " +
                  _vm._s(category.name) +
                  "\n\n            "
              )
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "middle col-8" },
        [
          _c(
            "draggable",
            {
              staticClass: "dragArea list-group",
              attrs: {
                group: { name: "draggableProducts", pull: "clone", put: false },
                sort: false,
                chosenClass: "moving",
                clone: _vm.addProductByDrag
              },
              model: {
                value: _vm.filteredProducts,
                callback: function($$v) {
                  _vm.filteredProducts = $$v
                },
                expression: "filteredProducts"
              }
            },
            _vm._l(_vm.filteredProducts, function(product) {
              return _c(
                "div",
                { key: product.id, staticClass: "list-group-item product" },
                [
                  _vm._v(
                    "\n                    " +
                      _vm._s(product.name) +
                      "\n                    "
                  ),
                  _c("small", [_vm._v(_vm._s(product.comment))]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function($event) {
                          return _vm.addProdToBasket(product)
                        }
                      }
                    },
                    [_vm._v("+")]
                  )
                ]
              )
            }),
            0
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

/***/ "./resources/js/components/carbon-simulation/ProductList.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/ProductList.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=6b6789aa& */ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/ProductList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=template&id=6b6789aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/ProductList.vue?vue&type=template&id=6b6789aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_6b6789aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);