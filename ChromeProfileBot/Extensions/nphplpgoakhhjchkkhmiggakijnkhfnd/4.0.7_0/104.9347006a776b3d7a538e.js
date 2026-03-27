"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[104],{

/***/ 78104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareWeb: () => (/* binding */ ShareWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);

class ShareWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
    async canShare() {
        if (typeof navigator === 'undefined' || !navigator.share) {
            return { value: false };
        }
        else {
            return { value: true };
        }
    }
    async share(options) {
        if (typeof navigator === 'undefined' || !navigator.share) {
            throw this.unavailable('Share API not available in this browser');
        }
        await navigator.share({
            title: options.title,
            text: options.text,
            url: options.url,
        });
        return {};
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=104.9347006a776b3d7a538e.js.map