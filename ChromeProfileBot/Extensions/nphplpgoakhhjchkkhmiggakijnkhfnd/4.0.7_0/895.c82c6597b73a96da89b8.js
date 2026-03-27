"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[895],{

/***/ 73895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppLauncherWeb: () => (/* binding */ AppLauncherWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);

class AppLauncherWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
    async canOpenUrl(_options) {
        return { value: true };
    }
    async openUrl(options) {
        window.open(options.url, '_blank');
        return { completed: true };
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=895.c82c6597b73a96da89b8.js.map