"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[564],{

/***/ 94564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogWeb: () => (/* binding */ DialogWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);

class DialogWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
  async alert(options) {
    window.alert(options.message);
  }
  async prompt(options) {
    const val = window.prompt(options.message, options.inputText || '');
    return {
      value: val !== null ? val : '',
      cancelled: val === null
    };
  }
  async confirm(options) {
    const val = window.confirm(options.message);
    return {
      value: val
    };
  }
}

/***/ })

}]);
//# sourceMappingURL=564.77429a3a20e376311498.js.map