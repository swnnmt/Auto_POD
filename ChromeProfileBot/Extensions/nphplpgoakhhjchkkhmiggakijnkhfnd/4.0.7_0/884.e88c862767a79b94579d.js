"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[884],{

/***/ 15884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationBarWeb: () => (/* binding */ NavigationBarWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);

class NavigationBarWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
    async show() {
        return new Promise((resolve) => {
            console.log('Navigation Bar Showed!');
            resolve();
        });
    }
    async hide() {
        return new Promise((resolve) => {
            console.log('Navigation Bar Hided!');
            resolve();
        });
    }
    async setColor(options) {
        return new Promise((resolve) => {
            console.log(`Navigation Bar color changed to ${options.color ? options.color : '#FFFFFF'} : Dark Buttons: ${options.darkButtons ? 'YES' : 'NO'}`);
            resolve();
        });
    }
    async setTransparency(options) {
        return new Promise((resolve) => {
            console.log(`Navigation Bar is transparent: ${options.isTransparent ? 'YES' : 'NO'}`);
            resolve();
        });
    }
    async getColor() {
        return new Promise((resolve) => {
            resolve({ color: '#FFFFFF' });
        });
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=884.e88c862767a79b94579d.js.map