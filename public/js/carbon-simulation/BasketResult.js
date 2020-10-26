(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/carbon-simulation/BasketResult"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/NumberFormatter */ "./resources/js/helpers/NumberFormatter.js");
/* harmony import */ var _helpers_carbon_simulation_calculations_basketLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/carbon-simulation/calculations/basketLogic */ "./resources/js/helpers/carbon-simulation/calculations/basketLogic.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_helpers_carbon_simulation_calculations_basketLogic__WEBPACK_IMPORTED_MODULE_1__["default"], _helpers_NumberFormatter__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    products: Array,
    categories: Array,
    basketId: String,
    isFirst: Boolean
  },
  computed: {},
  watch: {
    products: {
      handler: function handler() {
        this.updateResults();
      },
      deep: true
    }
  },
  data: function data() {
    return {
      cats: [],
      globalProductImpact: {},
      globalTransportationImpact: {},
      globalCarbonImpact: {},
      globalMoneySpend: Number,
      globalCO2PerEuro: Number,
      globalCO2PerEuroFormatted: Number,
      globalCO2PerEuroUnit: String
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.cats = JSON.parse(JSON.stringify(this.categories));
    setTimeout(function () {
      _this.updateResults();
    }, 1500);
    this.createChart(this.basketId + '-chart');
  },
  methods: {
    updateResults: function updateResults() {
      this.getCarbonImpactByCategory();
      this.getGlobalCarbonImpact();
      this.getMoneyImpactByCategory();
      this.getGlobalMoneyImpact();
      this.$forceUpdate();
    },
    getCarbonImpactByCategory: function getCarbonImpactByCategory() {
      var _this2 = this;

      this.cats.forEach(function (cat) {
        _this2.getCarbonImpactFor(cat);
      });
    },
    getMoneyImpactByCategory: function getMoneyImpactByCategory() {
      var _this3 = this;

      this.cats.forEach(function (cat) {
        _this3.getMoneyImpactFor(cat);
      });
    },
    createChart: function createChart(chartId, chartData) {
      var ctx = document.getElementById(chartId).getContext('2d');
      var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
            borderWidth: 1
          }]
        },
        options: {}
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn-bd": "./node_modules/moment/locale/bn-bd.js",
	"./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-mx": "./node_modules/moment/locale/es-mx.js",
	"./es-mx.js": "./node_modules/moment/locale/es-mx.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tk": "./node_modules/moment/locale/tk.js",
	"./tk.js": "./node_modules/moment/locale/tk.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854& ***!
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
  return _c("div", { staticClass: "results-container" }, [
    _c(
      "ul",
      { staticClass: "nav nav-tabs", attrs: { id: "myTab", role: "tablist" } },
      [
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link active button btn-2",
              attrs: {
                id: "basket1-carbon-tab",
                "data-toggle": "tab",
                href: "#" + _vm.basketId + "-carbon",
                role: "tab",
                "aria-controls": "home",
                "aria-selected": "true"
              }
            },
            [_vm._v("Bilan carbone")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link button btn-2",
              attrs: {
                id: "basket1-finance-tab",
                "data-toggle": "tab",
                href: "#" + _vm.basketId + "-finance",
                role: "tab",
                "aria-controls": "profile",
                "aria-selected": "false"
              }
            },
            [_vm._v("Bilan financier")]
          )
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "nav-item" }, [
          _c(
            "a",
            {
              staticClass: "nav-link button btn-2 nav-ico",
              attrs: {
                id: "#basket1-graph-tab",
                "data-toggle": "tab",
                href: "#" + _vm.basketId + "-graph",
                role: "tab",
                "aria-controls": "contact",
                "aria-selected": "false"
              }
            },
            [_vm._v("")]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "tab-content" }, [
      _c(
        "div",
        {
          staticClass: "tab-pane fade show active",
          attrs: { id: _vm.basketId + "-carbon", role: "tabpanel" }
        },
        [
          _vm._l(_vm.cats, function(category) {
            return _c("div", { staticClass: "results-row flex-horizontal" }, [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v(_vm._s(category.name))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(category.carbonFormattedImpact) +
                      " " +
                      _vm._s(category.carbonImpactUnit) +
                      "\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        Impact produit : " +
                        _vm._s(category.productFormattedImpact) +
                        " " +
                        _vm._s(category.productImpactUnit)
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        Impact transport : " +
                        _vm._s(category.transportationFormattedImpact) +
                        " " +
                        _vm._s(category.transportationImpactUnit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ])
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "results-row flex-horizontal final-results" },
            [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v("Total")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(_vm.globalCarbonImpact.impact) +
                      " " +
                      _vm._s(_vm.globalCarbonImpact.unit) +
                      "\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        Impact produit : " +
                        _vm._s(_vm.globalProductImpact.impact) +
                        " " +
                        _vm._s(_vm.globalProductImpact.unit)
                    ),
                    _c("br"),
                    _vm._v(
                      "\n                        Impact transport : " +
                        _vm._s(_vm.globalTransportationImpact.impact) +
                        " " +
                        _vm._s(_vm.globalTransportationImpact.unit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm._m(0)
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade",
          attrs: { id: _vm.basketId + "-finance", role: "tabpanel" }
        },
        [
          _vm._l(_vm.cats, function(category) {
            return _c("div", { staticClass: "results-row flex-horizontal" }, [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v(_vm._s(category.name))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(category.moneySpent) + " €\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(category.co2PerEuroFormatted) +
                        " " +
                        _vm._s(category.co2PerEuroUnit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ])
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "results-row flex-horizontal final-results" },
            [
              _c("div", { staticClass: "results-categorie-name" }, [
                _vm._v("Total")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "results-div" }, [
                _c("a", { staticClass: "info-bubble" }, [
                  _vm._v(
                    _vm._s(_vm.globalMoneySpend) +
                      " €\n                        "
                  ),
                  _c("span", [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.globalCO2PerEuroFormatted) +
                        " " +
                        _vm._s(_vm.globalCO2PerEuroUnit) +
                        "\n                    "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              !_vm.isFirst
                ? _c("div", { staticClass: "results-div" }, [_vm._v("+ 42 %")])
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm._m(1)
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "tab-pane fade",
          attrs: {
            id: _vm.basketId + "-graph",
            role: "tabpanel",
            "aria-labelledby": "contact-tab"
          }
        },
        [
          _c("canvas", {
            attrs: {
              id: _vm.basketId + "-chart",
              width: "370px",
              height: "400px"
            }
          })
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "results-comment" }, [
      _c("div", [
        _vm._v(
          "Votre bilan carbone équivaut à un aller-retour Paris/New-York en avion"
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "results-comment" }, [
      _c("div", [
        _vm._v(
          "Votre bilan carbone équivaut à un aller-retour Paris/New-York en avion"
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketResult.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketResult.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasketResult.vue?vue&type=template&id=be8f5854& */ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&");
/* harmony import */ var _BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasketResult.vue?vue&type=script&lang=js& */ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/carbon-simulation/BasketResult.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketResult.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasketResult.vue?vue&type=template&id=be8f5854& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/carbon-simulation/BasketResult.vue?vue&type=template&id=be8f5854&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasketResult_vue_vue_type_template_id_be8f5854___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/helpers/NumberFormatter.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/NumberFormatter.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Permet des arrondis qui restent précis
// From https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    roundToOneDecimal: function roundToOneDecimal(number) {
      return Math.round((number + Number.EPSILON) * 10) / 10;
    },
    roundToTwoDecimal: function roundToTwoDecimal(number) {
      return Math.round((number + Number.EPSILON) * 100) / 100;
    },
    roundToThreeDecimal: function roundToThreeDecimal(number) {
      return Math.round((number + Number.EPSILON) * 1000) / 1000;
    },
    // from https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
    // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    separateThousands: function separateThousands(number) {
      try {
        return number.toLocaleString();
      } catch (e) {//
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/helpers/carbon-simulation/calculations/basketLogic.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/carbon-simulation/calculations/basketLogic.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    getCarbonImpactFor: function getCarbonImpactFor(category) {
      var categoryProductImpact = 0;
      var categoryTransportationImpact = 0;
      var categoryCarbonImpact = 0;
      var categoryProducts = this.products.filter(function (product) {
        return product.category.id === category.id;
      });
      categoryProducts.forEach(function (product) {
        var productImpact = 0;
        var transportationImpact = 0;
        var carbonImpact = 0;
        productImpact = product.amount * product.emissionFactor;
        transportationImpact = product.amount * product.origin.carbonImpactPerKg;
        carbonImpact = productImpact + transportationImpact;
        categoryProductImpact += productImpact;
        categoryTransportationImpact += transportationImpact;
        categoryCarbonImpact += carbonImpact;
      });
      category.productImpact = this.roundToThreeDecimal(categoryProductImpact);
      category.transportationImpact = this.roundToThreeDecimal(categoryTransportationImpact);
      category.carbonImpact = this.roundToThreeDecimal(categoryCarbonImpact);
      category.productFormattedImpact = this.divideIfNecessary(categoryProductImpact);
      category.transportationFormattedImpact = this.divideIfNecessary(categoryTransportationImpact);
      category.carbonFormattedImpact = this.divideIfNecessary(categoryCarbonImpact);
      category.productImpactUnit = this.getUnit(categoryProductImpact);
      category.transportationImpactUnit = this.getUnit(categoryTransportationImpact);
      category.carbonImpactUnit = this.getUnit(categoryCarbonImpact);
    },
    getGlobalCarbonImpact: function getGlobalCarbonImpact() {
      var _this = this;

      this.cats.forEach(function () {
        _this.globalProductImpact.impact = 0;
        _this.globalTransportationImpact.impact = 0;
        _this.globalCarbonImpact.impact = 0;

        _this.cats.forEach(function (category) {
          _this.globalProductImpact.impact += category.productImpact;
          _this.globalTransportationImpact.impact += category.transportationImpact;
          _this.globalCarbonImpact.impact += category.carbonImpact;
        });

        _this.globalProductImpact.unit = _this.getUnit(_this.globalProductImpact.impact);
        _this.globalTransportationImpact.unit = _this.getUnit(_this.globalTransportationImpact.impact);
        _this.globalCarbonImpact.unit = _this.getUnit(_this.globalCarbonImpact.impact);
        _this.globalProductImpact.impact = _this.divideIfNecessary(_this.globalProductImpact.impact);
        _this.globalTransportationImpact.impact = _this.divideIfNecessary(_this.globalTransportationImpact.impact);
        _this.globalCarbonImpact.impact = _this.divideIfNecessary(_this.globalCarbonImpact.impact);
      });
    },
    getMoneyImpactFor: function getMoneyImpactFor(category) {
      var categoryMoneySpent = 0;
      var categoryProducts = this.products.filter(function (product) {
        return product.category.id === category.id;
      });
      categoryProducts.forEach(function (product) {
        var productPrice = parseFloat(product.price);
        categoryMoneySpent += productPrice;
      });
      category.moneySpent = categoryMoneySpent;
      category.co2PerEuro = category.carbonImpact / categoryMoneySpent;
      category.co2PerEuroFormatted = this.divideIfNecessary(category.co2PerEuro);
      category.co2PerEuroUnit = this.getUnit(category.co2PerEuro) + '/€';
    },
    getGlobalMoneyImpact: function getGlobalMoneyImpact() {
      var _this2 = this;

      this.cats.forEach(function () {
        _this2.globalMoneySpend = 0;
        _this2.globalCO2PerEuro = 0;
        var totalCo2 = 0;

        _this2.cats.forEach(function (category) {
          _this2.globalMoneySpend += category.moneySpent;
          totalCo2 += category.carbonImpact;
        });

        _this2.globalCO2PerEuro = totalCo2 / _this2.globalMoneySpend;
        _this2.globalCO2PerEuroFormatted = _this2.divideIfNecessary(_this2.globalCO2PerEuro);
        _this2.globalCO2PerEuroUnit = _this2.getUnit(_this2.globalCO2PerEuro) + '/€';
      });
    },
    divideIfNecessary: function divideIfNecessary(amount) {
      if (amount >= 1000000) {
        return this.roundToTwoDecimal(amount / 1000000);
      }

      if (amount >= 1000) {
        return this.roundToTwoDecimal(amount / 1000);
      }

      return this.roundToOneDecimal(amount);
    },
    getUnit: function getUnit(amount) {
      if (amount >= 2000000) {
        return 'tonnes de CO2';
      }

      if (amount >= 1000000) {
        return 'tonne de CO2';
      }

      if (amount >= 1000) {
        return 'kgCO2';
      }

      return 'gCO2';
    }
  }
});

/***/ })

}]);