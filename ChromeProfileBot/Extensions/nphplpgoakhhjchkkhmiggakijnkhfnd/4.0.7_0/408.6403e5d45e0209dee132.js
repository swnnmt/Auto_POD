"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[408],{

/***/ 408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Keyboard: () => (/* binding */ Keyboard),
  KeyboardResize: () => (/* reexport */ KeyboardResize),
  KeyboardStyle: () => (/* reexport */ KeyboardStyle)
});

// EXTERNAL MODULE: ./node_modules/@capacitor/core/dist/index.js
var dist = __webpack_require__(16546);
;// ./node_modules/@capacitor/keyboard/dist/esm/definitions.js
/// <reference types="@capacitor/cli" />
var KeyboardStyle;
(function (KeyboardStyle) {
    /**
     * Dark keyboard.
     *
     * @since 1.0.0
     */
    KeyboardStyle["Dark"] = "DARK";
    /**
     * Light keyboard.
     *
     * @since 1.0.0
     */
    KeyboardStyle["Light"] = "LIGHT";
    /**
     * On iOS 13 and newer the keyboard style is based on the device appearance.
     * If the device is using Dark mode, the keyboard will be dark.
     * If the device is using Light mode, the keyboard will be light.
     * On iOS 12 the keyboard will be light.
     *
     * @since 1.0.0
     */
    KeyboardStyle["Default"] = "DEFAULT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
    /**
     * Only the `body` HTML element will be resized.
     * Relative units are not affected, because the viewport does not change.
     *
     * @since 1.0.0
     */
    KeyboardResize["Body"] = "body";
    /**
     * Only the `ion-app` HTML element will be resized.
     * Use it only for Ionic Framework apps.
     *
     * @since 1.0.0
     */
    KeyboardResize["Ionic"] = "ionic";
    /**
     * The whole native Web View will be resized when the keyboard shows/hides.
     * This affects the `vh` relative unit.
     *
     * @since 1.0.0
     */
    KeyboardResize["Native"] = "native";
    /**
     * Neither the app nor the Web View are resized.
     *
     * @since 1.0.0
     */
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
//# sourceMappingURL=definitions.js.map
;// ./node_modules/@capacitor/keyboard/dist/esm/index.js

const Keyboard = (0,dist/* registerPlugin */.F3)('Keyboard');


//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=408.6403e5d45e0209dee132.js.map