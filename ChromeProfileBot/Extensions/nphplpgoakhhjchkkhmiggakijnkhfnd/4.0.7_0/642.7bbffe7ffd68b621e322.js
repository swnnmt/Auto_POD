"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[642],{

/***/ 17642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BleConnector: () => (/* binding */ BleConnector)
});

// EXTERNAL MODULE: ./node_modules/@capacitor-community/bluetooth-le/dist/esm/index.js + 5 modules
var esm = __webpack_require__(12757);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(54011);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/devices/lib-es/index.js
var lib_es = __webpack_require__(71108);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/devices/lib/ble/receiveAPDU.js
var receiveAPDU = __webpack_require__(17276);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/devices/lib/ble/sendAPDU.js
var sendAPDU = __webpack_require__(15123);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/errors/lib-es/index.js + 1 modules
var errors_lib_es = __webpack_require__(24450);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/hw-transport/lib-es/Transport.js
var Transport = __webpack_require__(13983);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/logs/lib-es/index.js
var logs_lib_es = __webpack_require__(13648);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/firstValueFrom.js
var firstValueFrom = __webpack_require__(72985);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/merge.js
var merge = __webpack_require__(44240);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timeout.js + 8 modules
var timeout = __webpack_require__(9162);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/defer.js
var defer = __webpack_require__(72316);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js + 9 modules
var from = __webpack_require__(37968);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/of.js
var of = __webpack_require__(62467);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/throwError.js
var throwError = __webpack_require__(13288);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/tap.js
var tap = __webpack_require__(59099);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/catchError.js
var catchError = __webpack_require__(66847);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/finalize.js
var finalize = __webpack_require__(69850);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/map.js
var map = __webpack_require__(81160);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/first.js + 4 modules
var first = __webpack_require__(65277);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js
var ignoreElements = __webpack_require__(8767);
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/share.js
var share = __webpack_require__(1005);
;// ./src/lib/ledger-hw-transport-ble/awaitsBleOn.ts


async function awaitsBleOn() {
  await esm/* BluetoothLe */.gq.initialize();
  const isEnabled = await esm/* BluetoothLe */.gq.isEnabled();
  if (!isEnabled) {
    throw new errors_lib_es.BluetoothRequired('', {
      state: 'disable'
    });
  }
}
// EXTERNAL MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js + 1 modules
var Observable = __webpack_require__(93776);
;// ./src/lib/ledger-hw-transport-ble/monitorCharacteristic.ts
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];



const LOG_TYPE = 'ble-verbose';
const monitorCharacteristic = (deviceId, serviceId, characteristic, context) => new Observable/* Observable */.c(o => {
  const tracer = new logs_lib_es.LocalTracer(LOG_TYPE, context);
  tracer.trace('Start monitoring BLE characteristics', {
    characteristicUuid: characteristic.uuid
  });
  void esm/* BleClient */.Fk.startNotifications(deviceId, serviceId, characteristic.uuid, value => {
    const uint8Array = new Uint8Array(value.buffer);
    const buffer = Buffer.from(uint8Array);
    o.next(buffer);
  });
  return () => {
    void esm/* BleClient */.Fk.stopEnabledNotifications();
  };
});
;// ./src/lib/ledger-hw-transport-ble/remapErrors.ts

const remapError = error => {
  if (!error || !error.message) return error;
  if (error.message.includes('was disconnected') || error.message.includes('not found')) {
    return new errors_lib_es.DisconnectedDevice();
  }
  return error;
};
const rethrowError = e => {
  // throw remapError(e);
  throw e ?? new Error();
};
const decoratePromiseErrors = promise => promise.catch(rethrowError);
;// ./src/lib/ledger-hw-transport-ble/BleTransport.ts
/* provided dependency */ var BleTransport_Buffer = __webpack_require__(48287)["Buffer"];
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */




// ---------------------------------------------------------------------------------------------
// Since this is a react-native library and metro bundler does not support
// package exports yet (see: https://github.com/facebook/metro/issues/670)
// we need to import the file directly from the lib folder.
// Otherwise it would force the consumer of the lib to manually "tell" metro to resolve to /lib.
//
// TLDR: /!\ Do not remove the /lib part in the import statements below (@ledgerhq/devices/lib) ! /!\
// See: https://github.com/LedgerHQ/ledger-live/pull/879










const BleTransport_LOG_TYPE = 'ble-verbose';

/**
 * This is potentially not needed anymore, to be checked if the bug is still happening.
 */
const reconnectionConfig = {
  pairingThreshold: 1000,
  delayAfterFirstPairing: 4000
};

// Allows us to give more granulary error messages
const bluetoothInfoCache = {};
function retrieveInfos(device) {
  if (!device || !device.uuids) return undefined;
  const [serviceUUID] = device.uuids;
  if (!serviceUUID) return undefined;
  const infos = (0,lib_es/* getInfosForServiceUuid */.R6)(serviceUUID);
  if (!infos) return undefined;

  // If we retrieved information, update the cache
  bluetoothInfoCache[device.deviceId] = infos;
  return infos;
}
const delay = ms => new Promise(success => setTimeout(success, ms));

/**
 * A cache of Bluetooth transport instances associated with device IDs.
 * Allows efficient storage and retrieval of previously initialized transports.
 * @type {Object.<string, BluetoothTransport>}
 */
const transportsCache = {};

// `connectOptions` is actually used by `react-native-ble-plx` even if comment above `ConnectionOptions` says it's not used
const connectOptions = {
  // 156 bytes to max the iOS < 10 limit (158 bytes)
  // (185 bytes for iOS >= 10)(up to 512 bytes for Android, but could be blocked at 23 bytes)
  requestMTU: 156,
  // Priority 1 = high.
  connectionPriority: 1
};
const clearDisconnectTimeout = (deviceId, context) => {
  const cachedTransport = transportsCache[deviceId];
  if (cachedTransport && cachedTransport.disconnectTimeout) {
    (0,logs_lib_es.trace)({
      type: BleTransport_LOG_TYPE,
      message: 'Clearing queued disconnect',
      context
    });
    clearTimeout(cachedTransport.disconnectTimeout);
  }
};
let currentDeviceService;

/**
 * React Native bluetooth BLE implementation
 * @example
 * import BleTransport from "@ledgerhq/react-native-hw-transport-ble";
 */
class BleTransport extends Transport/* default */.Ay {
  static disconnectTimeoutMs = 5000;
  static list = () => {
    throw new Error('not implemented');
  };

  /**
   * Scan for bluetooth Ledger devices
   * @param observer Device is partial in order to avoid the live-common/this dep
   * @returns TransportSubscription
   */
  static listen(observer) {
    let unsubscribed = false;
    const tracer = new logs_lib_es.LocalTracer(BleTransport_LOG_TYPE);
    tracer.trace('Listening for devices ...');
    void esm/* BleClient */.Fk.getConnectedDevices((0,lib_es/* getBluetoothServiceUuids */.gq)()).then(async devices => {
      if (unsubscribed) return;
      for (const it of devices) {
        observer.next({
          type: 'add',
          device: it
        });
      }
      await esm/* BleClient */.Fk.stopLEScan();
      void esm/* BleClient */.Fk.requestLEScan({
        services: (0,lib_es/* getBluetoothServiceUuids */.gq)()
      }, result => {
        if (unsubscribed) return;
        observer.next({
          type: 'add',
          device: result.device
        });
      });
    });
    return {
      unsubscribe: async () => {
        unsubscribed = true;
        await esm/* BleClient */.Fk.stopLEScan();
      }
    };
  }

  /**
   * Opens a BLE transport
   *
   * @param {Device | string} deviceOrId
   * @param timeoutMs Applied when trying to connect to a device
   * @param context An optional context object for log/tracing strategy
   * @param injectedDependencies Contains optional injected dependencies used by the transport implementation
   *  - rxjsScheduler: dependency injected RxJS scheduler to control time. Default AsyncScheduler.
   */
  static async open(deviceOrId, timeoutMs, context) {
    let {
      rxjsScheduler
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return BleTransport_open(deviceOrId, true, timeoutMs, context, {
      rxjsScheduler
    });
  }

  /**
   * Exposes method from the ble-plx library to disconnect a device
   *
   * Disconnects from {@link Device} if it's connected or cancels pending connection.
   * A "disconnect" event will normally be emitted by the ble-plx lib once the device is disconnected.
   * Errors are logged but silenced.
   */
  static disconnectDevice = async (id, onDisconnect, context) => {
    const tracer = new logs_lib_es.LocalTracer(BleTransport_LOG_TYPE, context);
    tracer.trace(`Trying to disconnect device ${id}`);
    try {
      await esm/* BleClient */.Fk.disconnect(id);
      onDisconnect === null || onDisconnect === void 0 || onDisconnect();
    } catch (error) {
      // Only log, ignore if disconnect did not work
      tracer.withType('ble-error').trace('Error while trying to cancel device connection', {
        error
      });
    }
    tracer.trace(`Device ${id} disconnected`);
  };
  // eslint-disable-next-line no-null/no-null
  disconnectTimeout = null;
  isConnected = true;
  mtuSize = 20;

  // Observable emitting data received from the device via BLE

  notYetDisconnected = true;

  // Transaction ids of communication operations that are currently pending

  /**
   * The static `open` function is used to handle `BleTransport` instantiation
   *
   * @param device
   * @param writableWithResponseCharacteristic A BLE characteristic that we can write on,
   *   and that will be acknowledged in response from the device when it receives the written value.
   * @param writableWithoutResponseCharacteristic A BLE characteristic that we can write on,
   *   and that will not be acknowledged in response from the device
   * @param notifyObservable A multicast observable that emits messages received from the device
   * @param deviceModel
   * @param params Contains optional options and injected dependencies used by the transport implementation
   *  - abortTimeoutMs: stop the exchange after a given timeout. Another timeout exists
   *    to detect unresponsive device (see `unresponsiveTimeout`). This timeout aborts the exchange.
   *  - rxjsScheduler: dependency injected RxJS scheduler to control time. Default: AsyncScheduler.
   */
  constructor(device, writableWithResponseCharacteristic, writableWithoutResponseCharacteristic, notifyObservable, deviceModel) {
    let {
      context,
      rxjsScheduler
    } = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    super({
      context,
      logType: BleTransport_LOG_TYPE
    });
    this.id = device.deviceId;
    this.device = device;
    this.writableWithResponseCharacteristic = writableWithResponseCharacteristic;
    this.writableWithoutResponseCharacteristic = writableWithoutResponseCharacteristic;
    this.notifyObservable = notifyObservable;
    this.deviceModel = deviceModel;
    this.rxjsScheduler = rxjsScheduler;
    this.currentTransactionIds = [];
    clearDisconnectTimeout(this.id);
    this.tracer.trace(`New instance of BleTransport for device ${this.id}`);
  }

  /**
   * A message exchange (APDU request <-> response) with the device that can be aborted.
   *
   * The message will be BLE-encoded/framed before being sent, and the response will be BLE-decoded.
   *
   * @param message A buffer (u8 array) of a none BLE-encoded message (an APDU for ex) to be sent to the device
   *   as a request
   * @param options Contains optional options for the exchange function
   *  - abortTimeoutMs: stop the exchange after a given timeout. Another timeout exists
   *    to detect unresponsive device (see `unresponsiveTimeout`). This timeout aborts the exchange.
   * @returns A promise that resolves with the response data from the device.
   */
  exchange = (() => {
    var _this = this;
    return function (message) {
      let {
        abortTimeoutMs
      } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (_this.exchangeBusyPromise) {
        void BleTransport.disconnectDevice(_this.id, _this.onDisconnect);
      }
      const tracer = _this.tracer.withUpdatedContext({
        function: 'exchange'
      });
      tracer.trace('Exchanging APDU ...', {
        abortTimeoutMs
      });
      tracer.withType('apdu').trace(`=> ${message.toString('hex')}`);
      return _this.exchangeAtomicImpl(() => {
        return (0,firstValueFrom/* firstValueFrom */._)(
        // `sendApdu` will only emit if an error occurred, otherwise it will complete,
        // while `receiveAPDU` will emit the full response.
        // Consequently, it monitors the response while being able to reject on an error from the send.
        (0,merge/* merge */.h)(_this.notifyObservable.pipe(data => (0,receiveAPDU/* receiveAPDU */.m)(data, {
          context: tracer.getContext()
        })), (0,sendAPDU.sendAPDU)(_this.write, message, _this.mtuSize, {
          context: tracer.getContext()
        })).pipe(abortTimeoutMs ? (0,timeout/* timeout */.w)(abortTimeoutMs, _this.rxjsScheduler) : (0,tap/* tap */.M)(), (0,tap/* tap */.M)(data => {
          tracer.withType('apdu').trace(`<= ${data.toString('hex')}`);
        }), (0,catchError/* catchError */.W)(async error => {
          // Currently only 1 reason the exchange has been explicitly aborted (other than job and transport errors): a timeout
          if (error instanceof timeout/* TimeoutError */.M) {
            tracer.trace('Aborting due to timeout and trying to cancel all communication write of the current exchange', {
              abortTimeoutMs,
              transactionIds: _this.currentTransactionIds
            });

            // No concurrent exchange should happen at the same time, so all pending operations are part of the same exchange
            await _this.cancelPendingOperations();
            throw new errors_lib_es.TransportExchangeTimeoutError('Exchange aborted due to timeout');
          }
          tracer.withType('ble-error').trace('Error while exchanging APDU', {
            error
          });
          if (_this.notYetDisconnected) {
            // In such case we will always disconnect because something is bad.
            // This sends a `disconnect` event.
            await BleTransport.disconnectDevice(_this.id, _this.onDisconnect);
          }
          const mappedError = remapError(error);
          tracer.trace('Error while exchanging APDU, mapped and throws following error', {
            mappedError
          });
          // eslint-disable-next-line @typescript-eslint/only-throw-error
          throw mappedError;
        }), (0,finalize/* finalize */.j)(() => {
          tracer.trace('Clearing current transaction ids', {
            currentTransactionIds: _this.currentTransactionIds
          });
          _this.clearCurrentTransactionIds();
        })));
      });
    };
  })();
  async cancelPendingOperations() {
    // BleTransport does not support cancellation
    await BleTransport.disconnectDevice(this.id, this.onDisconnect);
  }

  /**
   * Sets the collection of current transaction ids to an empty array
   */
  clearCurrentTransactionIds() {
    this.currentTransactionIds = [];
  }

  /**
   * Negotiate with the device the maximum transfer unit for the ble frames
   * @returns Promise<number>
   */
  async inferMTU() {
    let mtu = await esm/* BleClient */.Fk.getMtu(this.device.deviceId);
    this.tracer.trace('Inferring MTU ...', {
      currentDeviceMtu: mtu
    });
    await this.exchangeAtomicImpl(async () => {
      try {
        mtu = await (0,firstValueFrom/* firstValueFrom */._)((0,merge/* merge */.h)(this.notifyObservable.pipe((0,map/* map */.T)(maybeError => {
          // Catches the `PairingFailed` Error that has only been emitted
          if (maybeError instanceof Error) {
            throw maybeError;
          }
          return maybeError;
        }), (0,first/* first */.$)(buffer => buffer.readUInt8(0) === 0x08), (0,map/* map */.T)(buffer => buffer.readUInt8(5))), (0,defer/* defer */.v)(() => (0,from/* from */.H)(this.write(BleTransport_Buffer.from([0x08, 0, 0, 0, 0])))).pipe((0,ignoreElements/* ignoreElements */.w)())));
      } catch (error) {
        this.tracer.withType('ble-error').trace('Error while inferring MTU', {
          mtu
        });
        await BleTransport.disconnectDevice(this.id, this.onDisconnect);
        const mappedError = remapError(error);
        this.tracer.trace('Error while inferring APDU, mapped and throws following error', {
          mappedError
        });
        // eslint-disable-next-line @typescript-eslint/only-throw-error
        throw mappedError;
      } finally {
        // When negotiating the MTU, a message is sent/written to the device, and a transaction id was associated to this write
        this.clearCurrentTransactionIds();
      }
    });
    this.tracer.trace('Successfully negotiated MTU with device', {
      mtu,
      mtuSize: this.mtuSize
    });
    if (mtu > 20) {
      this.mtuSize = mtu;
    }
    return this.mtuSize;
  }

  /**
   * Exposed method from the ble-plx library.
   * Request the connection priority for the given device.
   * @returns {Promise<void>}
   * @param connectionPriority
   */
  async requestConnectionPriority(connectionPriority) {
    let connectionPriorityMapped;
    switch (connectionPriority) {
      case 'High':
        connectionPriorityMapped = esm/* ConnectionPriority */.rj.CONNECTION_PRIORITY_BALANCED;
        break;
      case 'LowPower':
        connectionPriorityMapped = esm/* ConnectionPriority */.rj.CONNECTION_PRIORITY_LOW_POWER;
        break;
      case 'Balanced':
        connectionPriorityMapped = esm/* ConnectionPriority */.rj.CONNECTION_PRIORITY_BALANCED;
        break;
    }
    await decoratePromiseErrors(esm/* BleClient */.Fk.requestConnectionPriority(this.device.deviceId, connectionPriorityMapped));
  }

  /**
   * Do not call this directly unless you know what you're doing. Communication
   * with a Ledger device should be through the {@link exchange} method.
   *
   * For each call a transaction id is added to the current stack of transaction ids.
   * With this transaction id, a pending BLE communication operations can be cancelled.
   * Note: each frame/packet of a longer BLE-encoded message to be sent should have their unique transaction id.
   *
   * @param buffer BLE-encoded packet to send to the device
   * @param frameId Frame id to make `write` aware of a bigger message that this frame/packet is part of.
   *  Helps to create related a collection of transaction ids
   */
  write = async buffer => {
    const transactionId = (0,v4/* default */.A)();
    this.currentTransactionIds.push(transactionId);
    const tracer = this.tracer.withUpdatedContext({
      transactionId
    });
    tracer.trace('Writing to device', {
      willMessageBeAcked: !this.writableWithoutResponseCharacteristic
    });
    try {
      const uint8Array = new Uint8Array(buffer);
      const dataView = new DataView(uint8Array.buffer, uint8Array.byteOffset, uint8Array.byteLength);
      await esm/* BleClient */.Fk.write(this.device.deviceId, currentDeviceService, this.writableWithResponseCharacteristic.uuid, dataView);
      tracer.withType('ble-frame').trace(`=> ${buffer.toString('hex')}`);
    } catch (error) {
      tracer.trace('Error while writing APDU', {
        error
      });
      throw new errors_lib_es.DisconnectedDeviceDuringOperation(error instanceof Error ? error.message : `${String(error)}`);
    }
  };

  /**
   * We intentionally do not immediately close a transport connection.
   * Instead, we queue the disconnect and wait for a future connection to dismiss the event.
   * This approach prevents unnecessary disconnects and reconnects. We use the isConnected
   * flag to ensure that we do not trigger a disconnect if the current cached transport has
   * already been disconnected.
   * @returns {Promise<void>}
   */
  async close() {
    const tracer = this.tracer.withUpdatedContext({
      function: 'close'
    });
    tracer.trace('Closing, queuing a disconnect with a timeout ...');
    let resolve;
    const disconnectPromise = new Promise(innerResolve => {
      resolve = innerResolve;
    });
    clearDisconnectTimeout(this.id);
    this.disconnectTimeout = setTimeout(() => {
      tracer.trace('Disconnect timeout has been reached ...');
      if (this.isConnected) {
        BleTransport.disconnectDevice(this.id, this.onDisconnect, tracer.getContext()).catch(() => {}).finally(resolve);
      } else {
        resolve();
      }
    }, BleTransport.disconnectTimeoutMs);

    // The closure will occur no later than 5s, triggered either by disconnection
    // or the actual response of the apdu.
    await Promise.race([this.exchangeBusyPromise || Promise.resolve(), disconnectPromise]);
  }
}

/**
 * Opens a BLE connection with a given device. Returns a Transport instance.
 *
 * @param deviceOrId
 * @param needsReconnect
 * @param timeoutMs Optional Timeout (in ms) applied during the connection with the device
 * @param context Optional tracing/log context
 * @param injectedDependencies Contains optional injected dependencies used by the transport implementation
 *  - rxjsScheduler: dependency injected RxJS scheduler to control time. Default AsyncScheduler.
 * @returns A BleTransport instance
 */
async function BleTransport_open(deviceOrId, needsReconnect, timeoutMs, context) {
  let {
    rxjsScheduler
  } = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  const tracer = new logs_lib_es.LocalTracer(BleTransport_LOG_TYPE, context);
  let device;
  tracer.trace(`Opening ${typeof deviceOrId === 'string' ? deviceOrId : deviceOrId.deviceId}`, {
    needsReconnect
  });
  let deviceId;
  // eslint-disable-next-line prefer-const
  let transport;
  if (typeof deviceOrId === 'string') {
    deviceId = deviceOrId;
    if (transportsCache[deviceOrId]) {
      tracer.trace('Transport in cache, using it');
      clearDisconnectTimeout(deviceOrId);

      // The cached transport probably has an older trace/log context
      transportsCache[deviceOrId].setTraceContext(context);
      return transportsCache[deviceOrId];
    }
    tracer.trace(`Trying to open device: ${deviceOrId}`);
    await awaitsBleOn();

    // Returns a list of known devices by their identifiers
    const devices = await esm/* BleClient */.Fk.getDevices([deviceOrId]);
    tracer.trace(`Found ${devices.length} already known device(s) with given id`, {
      deviceOrId
    });
    [device] = devices;
    if (!device) {
      // Returns a list of the peripherals currently connected to the system
      // which have discovered services, connected to system doesn't mean
      // connected to our app, we check that below.
      const services = (await esm/* BleClient */.Fk.getServices(deviceOrId)).map(it => it.uuid);
      const connectedDevices = await esm/* BleClient */.Fk.getConnectedDevices(services);
      const connectedDevicesFiltered = connectedDevices.filter(d => d.deviceId === deviceOrId);
      tracer.trace(`No known device with given id.
        Found ${connectedDevicesFiltered.length} devices from already connected devices`, {
        deviceOrId
      });
      [device] = connectedDevicesFiltered;
    }
    if (!device) {
      // We still don't have a device, so we attempt to connect to it.
      tracer.trace('No known nor connected devices with given id. Trying to connect to device', {
        deviceOrId,
        timeoutMs
      });

      // Nb ConnectionOptions dropped since it's not used internally by ble-plx.
      try {
        await esm/* BleClient */.Fk.connect(deviceOrId, () => {
          var _transport$onDisconne, _transport;
          (_transport$onDisconne = (_transport = transport).onDisconnect) === null || _transport$onDisconne === void 0 || _transport$onDisconne.call(_transport);
        }, {
          timeout: timeoutMs
        });
      } catch (e) {
        tracer.trace(`Error code: ${e.errorCode}`);
        throw e;
      }
    }
    if (!device) {
      throw new errors_lib_es.CantOpenDevice();
    }
  } else {
    // It was already a Device
    device = deviceOrId;
    deviceId = deviceOrId.deviceId;
  }
  const connectedDevices = await esm/* BleClient */.Fk.getConnectedDevices((0,lib_es/* getBluetoothServiceUuids */.gq)());
  if (!connectedDevices.find(it => it.deviceId === deviceId)) {
    tracer.trace('Device found but not connected. connecting...', {
      timeoutMs,
      connectOptions
    });
    try {
      await esm/* BleClient */.Fk.connect(deviceId, () => {
        var _transport$onDisconne2, _transport2;
        (_transport$onDisconne2 = (_transport2 = transport).onDisconnect) === null || _transport$onDisconne2 === void 0 || _transport$onDisconne2.call(_transport2);
      }, {
        timeout: timeoutMs
      });
    } catch (error) {
      tracer.trace('Connect error', {
        error
      });
      // eslint-disable-next-line @typescript-eslint/only-throw-error
      throw remapError(error);
    }
  }
  tracer.trace('Device is connected now, getting services and characteristics');
  let services = [];
  await esm/* BleClient */.Fk.discoverServices(deviceId);
  services = await esm/* BleClient */.Fk.getServices(deviceId);
  let res = retrieveInfos(device);
  const characteristics = [];
  if (!res) {
    for (const serviceUUID of (0,lib_es/* getBluetoothServiceUuids */.gq)()) {
      try {
        const deviceService = services.find(it => it.uuid === serviceUUID);
        res = (0,lib_es/* getInfosForServiceUuid */.R6)(serviceUUID);
        if (res && deviceService) {
          characteristics.push(...deviceService.characteristics);
          currentDeviceService = res.serviceUuid;
          break;
        }
      } catch (e) {
        // Attempt to connect to the next service
      }
    }
  }
  if (!res) {
    tracer.trace('Service not found');
    throw new errors_lib_es.TransportError('service not found', 'BLEServiceNotFound');
  }
  const {
    deviceModel,
    writeUuid,
    writeCmdUuid,
    notifyUuid
  } = res;

  /* if (!characteristics) {
    characteristics = await device.characteristicsForService(serviceUuid);
  } */

  if (!characteristics) {
    tracer.trace('Characteristics not found');
    throw new errors_lib_es.TransportError('service not found', 'BLEServiceNotFound');
  }
  let writableWithResponseCharacteristic;
  let writableWithoutResponseCharacteristic;
  // A characteristic that can monitor value changes
  let notifiableCharacteristic;
  for (const c of characteristics) {
    if (c.uuid === writeUuid) {
      writableWithResponseCharacteristic = c;
    } else if (c.uuid === writeCmdUuid) {
      writableWithoutResponseCharacteristic = c;
    } else if (c.uuid === notifyUuid) {
      notifiableCharacteristic = c;
    }
  }
  if (!writableWithResponseCharacteristic) {
    throw new errors_lib_es.TransportError('write characteristic not found', 'BLECharacteristicNotFound');
  }
  if (!notifiableCharacteristic) {
    throw new errors_lib_es.TransportError('notify characteristic not found', 'BLECharacteristicNotFound');
  }
  if (!writableWithResponseCharacteristic.properties.write) {
    throw new errors_lib_es.TransportError('The writable-with-response characteristic is not writable with response', 'BLECharacteristicInvalid');
  }
  if (!notifiableCharacteristic.properties.notify) {
    throw new errors_lib_es.TransportError('notify characteristic not notifiable', 'BLECharacteristicInvalid');
  }
  if (writableWithoutResponseCharacteristic) {
    if (!writableWithoutResponseCharacteristic.properties.writeWithoutResponse) {
      throw new errors_lib_es.TransportError('The writable-without-response characteristic is not writable without response', 'BLECharacteristicInvalid');
    }
  }
  const deviceMtu = await esm/* BleClient */.Fk.getMtu(device.deviceId);
  tracer.trace(`device.mtu=${deviceMtu}`);

  // Inits the observable that will emit received data from the device via BLE
  const notifyObservable = monitorCharacteristic(deviceId, currentDeviceService, notifiableCharacteristic, context).pipe((0,catchError/* catchError */.W)(e => {
    // LL-9033 fw 2.0.2 introduced this case, we silence the inner unhandled error.
    // It will be handled when negotiating the MTU in `inferMTU` but will be ignored in other cases.
    const msg = String(e);
    return msg.includes('notify change failed') ? (0,of.of)(new errors_lib_es.PairingFailed(msg)) : (0,throwError/* throwError */.$)(() => e);
  }), (0,tap/* tap */.M)(value => {
    if (value instanceof errors_lib_es.PairingFailed) return;
    (0,logs_lib_es.trace)({
      type: 'ble-frame',
      message: `<= ${value.toString('hex')}`,
      context
    });
  }),
  // Returns a new Observable that multicasts (shares) the original Observable.
  // As long as there is at least one Subscriber this Observable will be subscribed and emitting data.
  (0,share/* share */.u)());

  // Keeps the input from the device observable alive (multicast observable)
  const notif = notifyObservable.subscribe();
  transport = new BleTransport(device, writableWithResponseCharacteristic, writableWithoutResponseCharacteristic, notifyObservable, deviceModel, {
    context,
    rxjsScheduler
  });
  tracer.trace('New BleTransport created');

  // Keeping it as a comment for now but if no new bluetooth issues occur, we will be able to remove it
  // await transport.requestConnectionPriority("High");

  // let disconnectedSub: Subscription;

  // Callbacks on `react-native-ble-plx` notifying the device has been disconnected
  transport.onDisconnect = error => {
    var _transport$disconnect, _transport3;
    transport.isConnected = false;
    transport.notYetDisconnected = false;
    notif.unsubscribe();
    // disconnectedSub?.remove();

    clearDisconnectTimeout(transport.id);
    delete transportsCache[transport.id];
    tracer.trace(`On device disconnected callback: cleared cached transport for ${transport.id},
      emitting Transport event "disconnect. Error: ${error}"`, {
      reason: error
    });
    transport.emit('disconnect', error);
    (_transport$disconnect = (_transport3 = transport).disconnectCallback) === null || _transport$disconnect === void 0 || _transport$disconnect.call(_transport3);
  };
  transportsCache[transport.id] = transport;
  const beforeMTUTime = Date.now();

  /* disconnectedSub = device.onDisconnected((e) => {
    if (!transport.notYetDisconnected) return;
    onDisconnect(e);
  }); */

  try {
    await transport.inferMTU();
  } finally {
    const afterMTUTime = Date.now();
    if (reconnectionConfig) {
      // Refer to ledgerjs archived repo issue #279.
      // All HW .v1 LNX have a bug that prevents us from communicating with the device right after pairing.
      // When we connect for the first time we issue a disconnect and reconnect, this guarantees that we are
      // in a good state. This is avoidable in some key scenarios ↓
      if (afterMTUTime - beforeMTUTime < reconnectionConfig.pairingThreshold) {
        needsReconnect = false;
      } else if (deviceModel.id === lib_es/* DeviceModelId */.Dp.stax) {
        tracer.trace('Skipping "needsReconnect" strategy for Stax');
        needsReconnect = false;
      }
      if (needsReconnect) {
        tracer.trace('Device needs reconnection. Triggering a disconnect');
        await BleTransport.disconnectDevice(transport.id, transport.onDisconnect);
        await delay(reconnectionConfig.delayAfterFirstPairing);
      }
    } else {
      needsReconnect = false;
    }
  }
  if (needsReconnect) {
    tracer.trace('Reconnecting');
    return BleTransport_open(device, false, timeoutMs, context);
  }
  return transport;
}
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
// EXTERNAL MODULE: ./src/util/schedulers.ts
var schedulers = __webpack_require__(37836);
// EXTERNAL MODULE: ./src/util/windowEnvironment.ts
var windowEnvironment = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/util/ledger/constants.ts
var constants = __webpack_require__(32693);
;// ./src/util/ledger/bleConnector.ts








let isBleInitialized = false;
let bleInitializationPromise;
let listeningSubscription;
let scannedDevices = [];
let pairedDevice;
let onLedgerConnected;
function isConnecting() {
  return !!listeningSubscription;
}
function scannedDeviceIsValidYet(scannedDevice) {
  if (!scannedDevices.find(it => it.identifier === scannedDevice.identifier)) {
    // List is already cleared
    return false;
  }

  // A device is already paired
  return !pairedDevice;
}
async function tryConnectingLedgerDevice(scannedDevice) {
  try {
    // Check if stopped before retry
    if (!scannedDeviceIsValidYet(scannedDevice)) return;
    const bleTransport = await BleTransport.open(scannedDevice.device);
    // Check if stopped before connection establish
    if (!scannedDeviceIsValidYet(scannedDevice)) return;
    const ledgerConnection = {
      device: scannedDevice.device,
      bleTransport
    };
    pairedDevice = ledgerConnection;
    bleTransport.disconnectCallback = () => {
      pairedDevice = undefined;
      if (isConnecting()) {
        stop();
        void start();
      }
    };
    setTimeout(() => {
      var _pairedDevice;
      // Make sure not disconnected yet
      if (((_pairedDevice = pairedDevice) === null || _pairedDevice === void 0 ? void 0 : _pairedDevice.device.deviceId) === ledgerConnection.device.deviceId) {
        var _onLedgerConnected;
        (_onLedgerConnected = onLedgerConnected) === null || _onLedgerConnected === void 0 || _onLedgerConnected(ledgerConnection);
        stop();
      } else if (isConnecting()) {
        // Unexpectedly, disconnected before calling the callback, restart!
        pairedDevice = undefined;
        stop();
        void start();
      }
    }, 1000);
  } catch (error) {
    setTimeout(() => {
      void tryConnectingLedgerDevice(scannedDevice);
    }, 10000);
  }
}
async function isSupported() {
  if (!config/* IS_CAPACITOR */.UMQ) return false;
  let isEnabled = false;
  try {
    await ensureBleInitialized();
    if (windowEnvironment/* IS_ANDROID */.Ni) {
      await esm/* BleClient */.Fk.requestEnable();
    }
    isEnabled = await esm/* BleClient */.Fk.isEnabled();
    (0,logs/* logDebug */.MD)('BLE isSupported result', {
      isEnabled
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('Error while checking BLE availability', err);
  }
  return isEnabled;
}
async function start() {
  await ensureBleInitialized();
  listeningSubscription = BleTransport.listen({
    next: event => {
      switch (event.type) {
        case 'add':
          if (event.device) {
            if (!event.device.name) return;
            if (scannedDevices.find(it => {
              var _event$device;
              return it.device.deviceId === ((_event$device = event.device) === null || _event$device === void 0 ? void 0 : _event$device.deviceId);
            })) return;
            const scannedDevice = {
              identifier: (0,v4/* default */.A)(),
              device: event.device
            };
            scannedDevices.push(scannedDevice);
            void tryConnectingLedgerDevice(scannedDevice);
          }
          break;
      }
    },
    error: () => {
      stop();
    },
    complete: () => {
      stop();
    }
  });
}
function stop() {
  var _listeningSubscriptio;
  scannedDevices = [];
  (_listeningSubscriptio = listeningSubscription) === null || _listeningSubscriptio === void 0 || _listeningSubscriptio.unsubscribe();
  listeningSubscription = undefined;
}
function connect() {
  return new Promise(resolve => {
    onLedgerConnected = resolve;
    if (pairedDevice) {
      onLedgerConnected(pairedDevice);
      return;
    }
    if (isConnecting()) return;
    void start();
  });
}
async function openSettings() {
  if (windowEnvironment/* IS_ANDROID */.Ni) {
    await esm/* BleClient */.Fk.openBluetoothSettings();
  } else if (windowEnvironment/* IS_IOS */.pz) {
    await esm/* BleClient */.Fk.openAppSettings();
  }
}
const BleConnector = {
  isSupported,
  connect,
  stop,
  openSettings
};
async function ensureBleInitialized() {
  if (isBleInitialized) return;
  if (bleInitializationPromise) return bleInitializationPromise;
  bleInitializationPromise = (async () => {
    let attempt = 0;
    let lastError;
    while (attempt < constants/* DEVICE_DETECT_ATTEMPTS */.eZ && !isBleInitialized) {
      try {
        await esm/* BleClient */.Fk.initialize({
          androidNeverForLocation: true
        });
        isBleInitialized = true;
        return;
      } catch (err) {
        lastError = err;
        (0,logs/* logDebugError */.SJ)('BLE initialize attempt failed', err);
        await (0,schedulers/* pause */.v7)(constants/* PAUSE */.Hz * attempt);
      }
      attempt += 1;
    }
    if (!isBleInitialized) {
      throw lastError ?? new Error('BLE initialize failed');
    }
  })().finally(() => {
    bleInitializationPromise = undefined;
  });
  return bleInitializationPromise;
}

/***/ })

}]);
//# sourceMappingURL=642.7bbffe7ffd68b621e322.js.map