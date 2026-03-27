"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[88],{

/***/ 28088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafeAreaWeb: () => (/* binding */ SafeAreaWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);

class SafeAreaWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
    async getSafeAreaInsets() {
        return {
            insets: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }
        };
    }
    async getStatusBarHeight() {
        // throw this.unimplemented('Method not supported on Web.');
        return {
            statusBarHeight: 0
        };
    }
    setImmersiveNavigationBar() {
        throw this.unimplemented('Method not supported on Web.');
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=88.cc359a033c0b26babd5b.js.map