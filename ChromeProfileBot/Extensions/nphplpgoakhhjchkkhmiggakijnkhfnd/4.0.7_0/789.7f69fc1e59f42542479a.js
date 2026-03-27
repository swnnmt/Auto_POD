"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[789],{

/***/ 83789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HapticsWeb: () => (/* binding */ HapticsWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23693);


class HapticsWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
    constructor() {
        super(...arguments);
        this.selectionStarted = false;
    }
    async impact(options) {
        const pattern = this.patternForImpact(options === null || options === void 0 ? void 0 : options.style);
        this.vibrateWithPattern(pattern);
    }
    async notification(options) {
        const pattern = this.patternForNotification(options === null || options === void 0 ? void 0 : options.type);
        this.vibrateWithPattern(pattern);
    }
    async vibrate(options) {
        const duration = (options === null || options === void 0 ? void 0 : options.duration) || 300;
        this.vibrateWithPattern([duration]);
    }
    async selectionStart() {
        this.selectionStarted = true;
    }
    async selectionChanged() {
        if (this.selectionStarted) {
            this.vibrateWithPattern([70]);
        }
    }
    async selectionEnd() {
        this.selectionStarted = false;
    }
    patternForImpact(style = _definitions__WEBPACK_IMPORTED_MODULE_1__/* .ImpactStyle */ .k.Heavy) {
        if (style === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .ImpactStyle */ .k.Medium) {
            return [43];
        }
        else if (style === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .ImpactStyle */ .k.Light) {
            return [20];
        }
        return [61];
    }
    patternForNotification(type = _definitions__WEBPACK_IMPORTED_MODULE_1__/* .NotificationType */ ._.Success) {
        if (type === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .NotificationType */ ._.Warning) {
            return [30, 40, 30, 50, 60];
        }
        else if (type === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .NotificationType */ ._.Error) {
            return [27, 45, 50];
        }
        return [35, 65, 21];
    }
    vibrateWithPattern(pattern) {
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
        else {
            throw this.unavailable('Browser does not support the vibrate API');
        }
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=789.7f69fc1e59f42542479a.js.map