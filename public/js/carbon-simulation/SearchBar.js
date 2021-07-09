(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/SearchBar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/carbon-simulation/searchBar */ "./resources/js/helpers/carbon-simulation/searchBar.js");
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
// from https://www.digitalocean.com/community/tutorials/vuejs-vue-autocomplete-component

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_helpers_carbon_simulation_searchBar__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    products: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    specialProducts: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    recipes: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    },
    focus: Boolean
  },
  data: function data() {
    return {
      search: '',
      chosen: {},
      results: [],
      isOpen: false,
      arrowCounter: -1
    };
  },
  watch: {
    focus: function focus(newVal, oldVal) {
      if (newVal === true) {
        this.setFocus();
      }
    }
  },
  mounted: function mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed: function destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    onChange: function onChange() {
      this.isOpen = true;
      this.results = this.searchWithSearchBar(this.products.concat(this.specialProducts).concat(this.recipes));
      this.$emit('search-complete', this.results);
    },
    setResult: function setResult(result) {
      this.chosen = _objectSpread(_objectSpread({}, result), {}, {
        id: 'chosen_product_' + result.id
      });
      this.search = '';
      this.isOpen = false;
      this.$emit('product-chosen', this.chosen);
    },
    onArrowDown: function onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter++;
      }
    },
    onArrowUp: function onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter--;
      }
    },
    onEnter: function onEnter() {
      if (this.arrowCounter === -1) {
        return;
      }

      this.setResult(this.results[this.arrowCounter]);
      this.arrowCounter = -1;
    },
    handleClickOutside: function handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.search = '';
        this.isOpen = false;
        this.arrowCounter = -1;
        this.$emit('lose-focus', this.chosen);
      }
    },
    setFocus: function setFocus() {
      var self = this;
      Vue.nextTick().then(function () {
        self.$refs.searchBar.focus();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=template&id=4e395b08&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=template&id=4e395b08& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "autocomplete" }, [
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.search,
          expression: "search"
        }
      ],
      ref: "searchBar",
      staticClass: "input search custom-input browser-default",
      attrs: {
        type: "search",
        name: "query",
        id: "search",
        maxlength: "256",
        placeholder: "Taper le nom de votre produit"
      },
      domProps: { value: _vm.search },
      on: {
        input: [
          function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.search = $event.target.value
          },
          _vm.onChange
        ],
        keydown: [
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "down", 40, $event.key, [
                "Down",
                "ArrowDown"
              ])
            ) {
              return null
            }
            return _vm.onArrowDown($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])
            ) {
              return null
            }
            return _vm.onArrowUp($event)
          },
          function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.onEnter($event)
          }
        ]
      }
    }),
    _vm._v(" "),
    _c(
      "ul",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.isOpen,
            expression: "isOpen"
          }
        ],
        staticClass: "autocomplete-results"
      },
      _vm._l(_vm.results, function(result, index) {
        return _c(
          "li",
          {
            key: index,
            staticClass: "autocomplete-result",
            class: { "is-active": index === _vm.arrowCounter },
            on: {
              click: function($event) {
                return _vm.setResult(result)
              }
            }
          },
          [
            _vm._v("\n            " + _vm._s(result.name)),
            result.comment
              ? _c("small", [_vm._v(" - " + _vm._s(result.comment))])
              : _vm._e(),
            _vm._v(" "),
            result.type === "recipe"
              ? _c("span", { staticClass: "ml-5" }, [
                  _vm._v("⭐ Recette de chef")
                ])
              : _vm._e()
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/SearchBar.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/SearchBar.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_4e395b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=4e395b08& */ "./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=template&id=4e395b08&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_4e395b08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_4e395b08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=template&id=4e395b08&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=template&id=4e395b08& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_4e395b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=4e395b08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/SearchBar.vue?vue&type=template&id=4e395b08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_4e395b08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_4e395b08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);