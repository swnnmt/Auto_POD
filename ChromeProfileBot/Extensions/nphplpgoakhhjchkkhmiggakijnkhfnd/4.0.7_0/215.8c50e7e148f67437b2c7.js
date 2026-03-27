"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[215],{

/***/ 29215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarcodeScannerWeb: () => (/* binding */ BarcodeScannerWeb)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16546);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);


class BarcodeScannerWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .WebPlugin */ .E_ {
    constructor() {
        super(...arguments);
        this._isSupported = 'BarcodeDetector' in window;
        this.errorVideoElementMissing = 'videoElement must be provided.';
        this.eventBarcodesScanned = 'barcodesScanned';
    }
    async startScan(options) {
        if (!this._isSupported) {
            throw this.createUnavailableException();
        }
        if (!(options === null || options === void 0 ? void 0 : options.videoElement)) {
            throw new Error(this.errorVideoElementMissing);
        }
        this.videoElement = options.videoElement;
        this.stream = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: {
                    ideal: (options === null || options === void 0 ? void 0 : options.lensFacing) === _definitions__WEBPACK_IMPORTED_MODULE_1__/* .LensFacing */ .Nn.Front ? 'user' : 'environment',
                },
            },
            audio: false,
        });
        options.videoElement.srcObject = this.stream;
        await options.videoElement.play();
        const barcodeDetector = new BarcodeDetector();
        this.intervalId = window.setInterval(async () => {
            if (!options.videoElement) {
                return;
            }
            const barcodes = await barcodeDetector.detect(options.videoElement);
            if (barcodes.length === 0) {
                return;
            }
            else {
                this.handleScannedBarcodes(barcodes);
            }
        }, 500);
    }
    async stopScan() {
        if (!this._isSupported) {
            throw this.createUnavailableException();
        }
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = undefined;
        }
        if (this.stream) {
            this.stream.getTracks().forEach(track => track.stop());
            this.stream = undefined;
        }
        if (this.videoElement) {
            this.videoElement.srcObject = null;
            this.videoElement = undefined;
        }
    }
    async readBarcodesFromImage(_options) {
        throw this.createUnavailableException();
    }
    async scan() {
        throw this.createUnavailableException();
    }
    async isSupported() {
        return { supported: this._isSupported };
    }
    async enableTorch() {
        throw this.createUnavailableException();
    }
    async disableTorch() {
        throw this.createUnavailableException();
    }
    async toggleTorch() {
        throw this.createUnavailableException();
    }
    async isTorchEnabled() {
        throw this.createUnavailableException;
    }
    async isTorchAvailable() {
        throw this.createUnavailableException();
    }
    async setZoomRatio(_options) {
        throw this.createUnavailableException();
    }
    async getZoomRatio() {
        throw this.createUnavailableException();
    }
    async getMinZoomRatio() {
        throw this.createUnavailableException();
    }
    async getMaxZoomRatio() {
        throw this.createUnavailableException();
    }
    async openSettings() {
        throw this.createUnavailableException();
    }
    async isGoogleBarcodeScannerModuleAvailable() {
        throw this.createUnavailableException();
    }
    async installGoogleBarcodeScannerModule() {
        throw this.createUnavailableException();
    }
    async checkPermissions() {
        try {
            const result = await navigator.permissions.query({
                name: 'camera',
            });
            return {
                camera: result.state,
            };
        }
        catch (error) {
            return {
                camera: 'prompt',
            };
        }
    }
    async requestPermissions() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            stream.getTracks().forEach(track => track.stop());
            return {
                camera: 'granted',
            };
        }
        catch (error) {
            return {
                camera: 'denied',
            };
        }
    }
    createUnavailableException() {
        return new _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .CapacitorException */ .I9('This plugin method is not available on this platform.', _capacitor_core__WEBPACK_IMPORTED_MODULE_0__/* .ExceptionCode */ .$c.Unavailable);
    }
    handleScannedBarcodes(barcodes) {
        const result = {
            barcodes: barcodes.map(barcode => ({
                cornerPoints: [
                    [barcode.cornerPoints[0].x, barcode.cornerPoints[0].y],
                    [barcode.cornerPoints[1].x, barcode.cornerPoints[1].y],
                    [barcode.cornerPoints[2].x, barcode.cornerPoints[2].y],
                    [barcode.cornerPoints[3].x, barcode.cornerPoints[3].y],
                ],
                displayValue: barcode.rawValue,
                rawValue: barcode.rawValue,
                format: barcode.format.toUpperCase(),
                valueType: _definitions__WEBPACK_IMPORTED_MODULE_1__/* .BarcodeValueType */ .gH.Unknown,
            })),
        };
        this.notifyListeners(this.eventBarcodesScanned, result);
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=215.8c50e7e148f67437b2c7.js.map