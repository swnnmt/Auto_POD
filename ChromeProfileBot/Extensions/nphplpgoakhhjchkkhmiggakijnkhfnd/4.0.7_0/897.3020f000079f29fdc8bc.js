"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[897],{

/***/ 52897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CapacitorUSBPlugin: () => (/* binding */ CapacitorUSBPlugin),
  HIDTransport: () => (/* binding */ HIDTransport),
  listLedgerDevices: () => (/* binding */ listLedgerDevices)
});

// EXTERNAL MODULE: ./node_modules/@capacitor/core/dist/index.js
var dist = __webpack_require__(16546);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/devices/lib-es/index.js
var lib_es = __webpack_require__(71108);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/errors/lib-es/index.js + 1 modules
var errors_lib_es = __webpack_require__(24450);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/hw-transport/lib-es/Transport.js
var Transport = __webpack_require__(13983);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/logs/lib-es/index.js
var logs_lib_es = __webpack_require__(13648);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js + 1 modules
var Subject = __webpack_require__(27291);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js
var mergeAll = __webpack_require__(93031);
;// ./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js

function concatAll() {
    return (0,mergeAll/* mergeAll */.U)(1);
}
//# sourceMappingURL=concatAll.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/util/args.js + 1 modules
var util_args = __webpack_require__(36049);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js + 9 modules
var from = __webpack_require__(37968);
;// ./node_modules/rxjs/dist/esm5/internal/observable/concat.js



function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return concatAll()((0,from/* from */.H)(args, (0,util_args/* popScheduler */.lI)(args)));
}
//# sourceMappingURL=concat.js.map
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js + 1 modules
var mergeMap = __webpack_require__(28452);
;// ./node_modules/@mytonwallet/capacitor-usb-hid/dist/esm/index.js
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];







const CapacitorUSBPlugin = (0,dist/* registerPlugin */.F3)('CapacitorUSBPlugin', {
    web: () => __webpack_require__.e(/* import() */ 106).then(__webpack_require__.bind(__webpack_require__, 11106)).then(m => new m.CapacitorUSBPluginWeb()),
});
const disconnectedErrors = [
    'I/O error',
    "Attempt to invoke virtual method 'int android.hardware.usb.UsbDevice.getDeviceClass()' on a null object reference",
    'Invalid channel',
    'Permission denied by user for device',
];
async function listLedgerDevices() {
    const devices = (await CapacitorUSBPlugin.getDeviceList()).devices;
    return devices.filter((d) => d.vendorId === lib_es/* ledgerUSBVendorId */.v9);
}
const liveDeviceEventsSubject = new Subject/* Subject */.B();
CapacitorUSBPlugin.addListener('onDeviceConnect', (device) => {
    if (device.vendorId !== lib_es/* ledgerUSBVendorId */.v9)
        return;
    const deviceModel = (0,lib_es/* identifyUSBProductId */.zH)(device.productId);
    liveDeviceEventsSubject.next({
        type: 'add',
        descriptor: device,
        deviceModel,
    });
});
CapacitorUSBPlugin.addListener('onDeviceDisconnect', (device) => {
    if (device.vendorId !== lib_es/* ledgerUSBVendorId */.v9)
        return;
    const deviceModel = (0,lib_es/* identifyUSBProductId */.zH)(device.productId);
    liveDeviceEventsSubject.next({
        type: 'remove',
        descriptor: device,
        deviceModel,
    });
});
const liveDeviceEvents = liveDeviceEventsSubject;
/**
 * Ledger's React Native HID Transport implementation
 * @example
 * import TransportHID from "@ledgerhq/react-native-hid";
 * ...
 * TransportHID.create().then(transport => ...)
 */
class HIDTransport extends Transport/* default */.Ay {
    constructor(deviceId, productId) {
        super();
        this.deviceId = deviceId;
        this.deviceModel = (0,lib_es/* identifyUSBProductId */.zH)(productId);
    }
    /**
     * List currently connected devices.
     * @returns Promise of devices
     */
    static async list() {
        if (!this.isSupported)
            return Promise.resolve([]);
        return listLedgerDevices();
    }
    /**
     * Listen to ledger devices events
     */
    static listen(observer) {
        if (!this.isSupported) {
            return {};
        }
        return concat((0,from/* from */.H)(listLedgerDevices()).pipe((0,mergeMap/* mergeMap */.Z)((devices) => (0,from/* from */.H)(devices.map((device) => ({
            type: 'add',
            descriptor: device,
            deviceModel: (0,lib_es/* identifyUSBProductId */.zH)(device.productId),
        }))))), liveDeviceEvents).subscribe(observer);
    }
    /**
     * Open a the transport with a Ledger device
     */
    static async open(deviceObj) {
        try {
            const result = await CapacitorUSBPlugin.openDevice({ deviceId: deviceObj.id });
            if (result.success) {
                return new HIDTransport(deviceObj.id, deviceObj.productId);
            }
            else {
                throw new Error();
            }
        }
        catch (error) {
            if (disconnectedErrors.includes(error.message)) {
                throw new errors_lib_es.DisconnectedDevice(error.message);
            }
            throw error;
        }
    }
    /**
     * @param {*} apdu input value
     * @returns Promise of apdu response
     */
    async exchange(apdu) {
        return this.exchangeAtomicImpl(async () => {
            try {
                const apduHex = apdu.toString('hex');
                (0,logs_lib_es.log)('apdu', `=> ${apduHex}`);
                const result = await CapacitorUSBPlugin.exchange({ deviceId: this.deviceId, apduHex });
                const resultHex = Buffer.from(result.response, 'hex');
                (0,logs_lib_es.log)('apdu', `<= ${resultHex}`);
                return resultHex;
            }
            catch (error) {
                if (disconnectedErrors.includes(error.message)) {
                    this.emit('disconnect', error);
                    throw new errors_lib_es.DisconnectedDeviceDuringOperation(error.message);
                }
                throw error;
            }
        });
    }
    /**
     * Close the transport
     * @returns Promise
     */
    async close() {
        await this.exchangeBusyPromise;
        void CapacitorUSBPlugin.closeDevice({ deviceId: this.deviceId });
    }
}
/**
 * Check if the transport is supported (basically true on Android)
 */
HIDTransport.isSupported = () => Promise.resolve(true);


//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=897.3020f000079f29fdc8bc.js.map