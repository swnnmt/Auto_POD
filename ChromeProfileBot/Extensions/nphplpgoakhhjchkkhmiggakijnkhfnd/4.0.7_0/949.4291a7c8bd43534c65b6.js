"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[949],{

/***/ 70949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ rlottie_RLottie)
});

// EXTERNAL MODULE: ./src/util/animation.ts
var animation = __webpack_require__(19822);
;// ./src/util/cycleRestrict.ts
function cycleRestrict(length, index) {
  return index - Math.floor(index / length) * length;
}
// EXTERNAL MODULE: ./src/util/Deferred.ts
var Deferred = __webpack_require__(9705);
// EXTERNAL MODULE: ./src/util/generateUniqueId.ts
var generateUniqueId = __webpack_require__(14235);
// EXTERNAL MODULE: ./src/util/launchMediaWorkers.ts
var launchMediaWorkers = __webpack_require__(41074);
// EXTERNAL MODULE: ./src/util/windowEnvironment.ts
var windowEnvironment = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/lib/fasterdom/fasterdom.ts
var fasterdom = __webpack_require__(66644);
;// ./src/lib/rlottie/RLottie.ts







const WAITING = Symbol('WAITING');
const HIGH_PRIORITY_QUALITY = windowEnvironment/* IS_ANDROID */.Ni || windowEnvironment/* IS_IOS */.pz ? 0.75 : 1;
const LOW_PRIORITY_QUALITY = windowEnvironment/* IS_ANDROID */.Ni ? 0.5 : 0.75;
const LOW_PRIORITY_QUALITY_SIZE_THRESHOLD = 24;
const HIGH_PRIORITY_CACHE_MODULO = windowEnvironment/* IS_SAFARI */.Yw ? 2 : 4;
const LOW_PRIORITY_CACHE_MODULO = 0;
const workers = (0,launchMediaWorkers/* default */.Ay)().map(_ref => {
  let {
    connector
  } = _ref;
  return connector;
});
const instancesByRenderId = new Map();
const PENDING_CANVAS_RESIZES = new WeakMap();
let lastWorkerIndex = -1;
class RLottie {
  // Config

  views = new Map();
  msPerFrame = 1000 / 60;
  reduceFactor = 1;
  frames = [];
  // State

  isAnimating = false;
  isWaiting = true;
  isEnded = false;
  isDestroyed = false;
  isRendererInited = false;
  approxFrameIndex = 0;
  prevFrameIndex = -1;
  stopFrameIndex = 0;
  speed = 1;
  direction = 1;
  static init() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const [, canvas, renderId, params, viewId = (0,generateUniqueId/* default */.A)(),, onLoad] = args;
    let instance = instancesByRenderId.get(renderId);
    if (!instance) {
      instance = new RLottie(...args);
      instancesByRenderId.set(renderId, instance);
    } else {
      instance.addView(viewId, canvas, onLoad, params === null || params === void 0 ? void 0 : params.coords);
    }
    return instance;
  }
  constructor(tgsUrl, container, renderId, params) {
    let viewId = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0,generateUniqueId/* default */.A)();
    let customColor = arguments.length > 5 ? arguments[5] : undefined;
    let onLoad = arguments.length > 6 ? arguments[6] : undefined;
    let onEnded = arguments.length > 7 ? arguments[7] : undefined;
    let onLoop = arguments.length > 8 ? arguments[8] : undefined;
    this.tgsUrl = tgsUrl;
    this.container = container;
    this.renderId = renderId;
    this.params = params;
    this.customColor = customColor;
    this.onLoad = onLoad;
    this.onEnded = onEnded;
    this.onLoop = onLoop;
    this.addView(viewId, container, onLoad, params.coords);
    this.initConfig();
    this.initRenderer();
  }
  removeView(viewId) {
    const {
      canvas,
      ctx,
      isSharedCanvas,
      coords
    } = this.views.get(viewId);
    if (isSharedCanvas) {
      ctx.clearRect(coords.x, coords.y, this.imgSize, this.imgSize);
    } else {
      canvas.remove();
    }
    this.views.delete(viewId);
    if (!this.views.size) {
      this.destroy();
    }
  }
  isPlaying() {
    return this.isAnimating || this.isWaiting;
  }
  play() {
    let forceRestart = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let viewId = arguments.length > 1 ? arguments[1] : undefined;
    if (viewId) {
      this.views.get(viewId).isPaused = false;
    }
    if (this.isEnded && forceRestart) {
      this.approxFrameIndex = Math.floor(0);
    }
    this.stopFrameIndex = undefined;
    this.direction = 1;
    this.doPlay();
  }
  pause(viewId) {
    this.lastRenderAt = undefined;
    if (viewId) {
      this.views.get(viewId).isPaused = true;
      const areAllContainersPaused = Array.from(this.views.values()).every(_ref2 => {
        let {
          isPaused
        } = _ref2;
        return isPaused;
      });
      if (!areAllContainersPaused) {
        return;
      }
    }
    if (this.isWaiting) {
      this.stopFrameIndex = this.approxFrameIndex;
    } else {
      this.isAnimating = false;
    }
    if (!this.params.isLowPriority) {
      this.frames = this.frames.map((frame, i) => {
        if (i === this.prevFrameIndex) {
          return frame;
        } else {
          if (frame && frame !== WAITING) {
            frame.close();
          }
          return undefined;
        }
      });
    }
  }
  playSegment(_ref3) {
    let [startFrameIndex, stopFrameIndex] = _ref3;
    let forceRestart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let viewId = arguments.length > 2 ? arguments[2] : undefined;
    if (viewId) {
      this.views.get(viewId).isPaused = false;
    }
    const frameIndex = Math.round(this.approxFrameIndex);
    this.stopFrameIndex = Math.floor(stopFrameIndex / this.reduceFactor);
    if (frameIndex !== stopFrameIndex || forceRestart) {
      this.approxFrameIndex = Math.floor(startFrameIndex / this.reduceFactor);
    }
    this.direction = startFrameIndex < stopFrameIndex ? 1 : -1;
    this.doPlay();
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  setNoLoop(noLoop) {
    this.params.noLoop = noLoop;
  }
  async setSharedCanvasCoords(viewId, newCoords) {
    const containerInfo = this.views.get(viewId);
    const {
      canvas,
      ctx
    } = containerInfo;
    const isCanvasDirty = !canvas.dataset.isJustCleaned || canvas.dataset.isJustCleaned === 'false';
    if (!isCanvasDirty) {
      await PENDING_CANVAS_RESIZES.get(canvas);
    }
    let [canvasWidth, canvasHeight] = [canvas.width, canvas.height];
    if (isCanvasDirty) {
      const sizeFactor = this.calcSizeFactor();
      [canvasWidth, canvasHeight] = ensureCanvasSize(canvas, sizeFactor);
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      canvas.dataset.isJustCleaned = 'true';
      (0,fasterdom/* requestMeasure */.YS)(() => {
        canvas.dataset.isJustCleaned = 'false';
      });
    }
    containerInfo.coords = {
      x: Math.round(((newCoords === null || newCoords === void 0 ? void 0 : newCoords.x) || 0) * canvasWidth),
      y: Math.round(((newCoords === null || newCoords === void 0 ? void 0 : newCoords.y) || 0) * canvasHeight)
    };
    const frame = this.getFrame(this.prevFrameIndex) || this.getFrame(Math.round(this.approxFrameIndex));
    if (frame && frame !== WAITING) {
      ctx.drawImage(frame, containerInfo.coords.x, containerInfo.coords.y);
    }
  }
  addView(viewId, container, onLoad, coords) {
    const sizeFactor = this.calcSizeFactor();
    let imgSize;
    if (container instanceof HTMLDivElement) {
      if (!(container.parentNode instanceof HTMLElement)) {
        throw new Error('[RLottie] Container is not mounted');
      }
      const {
        size,
        shouldStretch
      } = this.params;
      imgSize = Math.round(size * sizeFactor);
      if (!this.imgSize) {
        this.imgSize = imgSize;
        this.imageData = new ImageData(imgSize, imgSize);
      }
      (0,fasterdom/* requestMutation */.RK)(() => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (shouldStretch) {
          canvas.style.width = '100%';
        } else {
          canvas.style.width = `${size}px`;
          canvas.style.height = `${size}px`;
        }
        canvas.style.display = 'block';
        canvas.width = imgSize;
        canvas.height = imgSize;
        container.appendChild(canvas);
        this.views.set(viewId, {
          canvas,
          ctx,
          onLoad
        });
      });
    } else {
      if (!container.isConnected) {
        throw new Error('[RLottie] Shared canvas is not mounted');
      }
      const canvas = container;
      const ctx = canvas.getContext('2d');
      imgSize = Math.round(this.params.size * sizeFactor);
      if (!this.imgSize) {
        this.imgSize = imgSize;
        this.imageData = new ImageData(imgSize, imgSize);
      }
      const [canvasWidth, canvasHeight] = ensureCanvasSize(canvas, sizeFactor);
      this.views.set(viewId, {
        canvas,
        ctx,
        isSharedCanvas: true,
        coords: {
          x: Math.round(coords.x * canvasWidth),
          y: Math.round(coords.y * canvasHeight)
        },
        onLoad
      });
    }
    if (this.isRendererInited) {
      this.doPlay();
    }
  }
  calcSizeFactor() {
    const {
      size,
      isLowPriority,
      // Reduced quality only looks acceptable on big enough images
      quality = isLowPriority && (!size || size > LOW_PRIORITY_QUALITY_SIZE_THRESHOLD) ? LOW_PRIORITY_QUALITY : HIGH_PRIORITY_QUALITY
    } = this.params;

    // Reduced quality only looks acceptable on high DPR screens
    return Math.max(window.devicePixelRatio * quality, 1);
  }
  destroy() {
    this.isDestroyed = true;
    this.pause();
    this.clearCache();
    this.destroyRenderer();
    instancesByRenderId.delete(this.renderId);
  }
  clearCache() {
    this.frames.forEach(frame => {
      if (frame && frame !== WAITING) {
        frame.close();
      }
    });

    // Help GC
    this.imageData = undefined;
    this.frames = [];
  }
  initConfig() {
    const {
      isLowPriority
    } = this.params;
    this.cacheModulo = isLowPriority ? LOW_PRIORITY_CACHE_MODULO : HIGH_PRIORITY_CACHE_MODULO;
  }
  setColor(newColor) {
    this.customColor = newColor;
  }
  initRenderer() {
    this.workerIndex = cycleRestrict(launchMediaWorkers/* MAX_WORKERS */.bP, ++lastWorkerIndex);
    void workers[this.workerIndex].request({
      name: 'rlottie:init',
      args: [this.renderId, this.tgsUrl, this.imgSize, this.params.isLowPriority || false, this.customColor, this.onRendererInit.bind(this)]
    });
  }
  destroyRenderer() {
    void workers[this.workerIndex].request({
      name: 'rlottie:destroy',
      args: [this.renderId]
    });
  }
  onRendererInit(reduceFactor, msPerFrame, framesCount) {
    this.isRendererInited = true;
    this.reduceFactor = reduceFactor;
    this.msPerFrame = msPerFrame;
    this.framesCount = framesCount;
    if (this.isWaiting) {
      this.doPlay();
    }
  }
  changeData(tgsUrl) {
    this.pause();
    this.tgsUrl = tgsUrl;
    this.initConfig();
    void workers[this.workerIndex].request({
      name: 'rlottie:changeData',
      args: [this.renderId, this.tgsUrl, this.params.isLowPriority || false, this.onChangeData.bind(this)]
    });
  }
  onChangeData(reduceFactor, msPerFrame, framesCount) {
    this.reduceFactor = reduceFactor;
    this.msPerFrame = msPerFrame;
    this.framesCount = framesCount;
    this.isWaiting = false;
    this.isAnimating = false;
    this.doPlay();
  }
  doPlay() {
    if (!this.framesCount) {
      return;
    }
    if (this.isDestroyed) {
      return;
    }
    if (this.isAnimating) {
      return;
    }
    if (!this.isWaiting) {
      this.lastRenderAt = undefined;
    }
    this.isEnded = false;
    this.isAnimating = true;
    this.isWaiting = false;
    (0,animation/* animate */.i0)(() => {
      if (this.isDestroyed) {
        return false;
      }

      // Paused from outside
      if (!this.isAnimating) {
        const areAllLoaded = Array.from(this.views.values()).every(_ref4 => {
          let {
            isLoaded
          } = _ref4;
          return isLoaded;
        });
        if (areAllLoaded) {
          return false;
        }
      }
      const frameIndex = Math.round(this.approxFrameIndex);
      const frame = this.getFrame(frameIndex);
      if (!frame || frame === WAITING) {
        if (!frame) {
          this.requestFrame(frameIndex);
        }
        this.isAnimating = false;
        this.isWaiting = true;
        return false;
      }
      if (this.cacheModulo && frameIndex % this.cacheModulo === 0) {
        this.cleanupPrevFrame(frameIndex);
      }
      if (frameIndex !== this.prevFrameIndex) {
        this.views.forEach(containerData => {
          const {
            ctx,
            isLoaded,
            isPaused,
            coords: {
              x,
              y
            } = {},
            onLoad
          } = containerData;
          if (!isLoaded || !isPaused) {
            ctx.clearRect(x || 0, y || 0, this.imgSize, this.imgSize);
            ctx.drawImage(frame, x || 0, y || 0);
          }
          if (!isLoaded) {
            containerData.isLoaded = true;
            onLoad === null || onLoad === void 0 || onLoad();
          }
        });
        this.prevFrameIndex = frameIndex;
      }
      const now = Date.now();
      const currentSpeed = this.lastRenderAt ? this.msPerFrame / (now - this.lastRenderAt) : 1;
      const delta = this.direction * this.speed / currentSpeed;
      const expectedNextFrameIndex = Math.round(this.approxFrameIndex + delta);
      this.lastRenderAt = now;

      // Forward animation finished
      if (delta > 0 && (frameIndex === this.framesCount - 1 || expectedNextFrameIndex > this.framesCount - 1)) {
        var _this$onLoop;
        if (this.params.noLoop) {
          var _this$onEnded;
          this.isAnimating = false;
          this.isEnded = true;
          (_this$onEnded = this.onEnded) === null || _this$onEnded === void 0 || _this$onEnded.call(this);
          return false;
        }
        (_this$onLoop = this.onLoop) === null || _this$onLoop === void 0 || _this$onLoop.call(this);
        this.approxFrameIndex = 0;

        // Backward animation finished
      } else if (delta < 0 && (frameIndex === 0 || expectedNextFrameIndex < 0)) {
        var _this$onLoop2;
        if (this.params.noLoop) {
          var _this$onEnded2;
          this.isAnimating = false;
          this.isEnded = true;
          (_this$onEnded2 = this.onEnded) === null || _this$onEnded2 === void 0 || _this$onEnded2.call(this);
          return false;
        }
        (_this$onLoop2 = this.onLoop) === null || _this$onLoop2 === void 0 || _this$onLoop2.call(this);
        this.approxFrameIndex = this.framesCount - 1;

        // Stop frame reached
      } else if (this.stopFrameIndex !== undefined && (frameIndex === this.stopFrameIndex || delta > 0 && expectedNextFrameIndex > this.stopFrameIndex || delta < 0 && expectedNextFrameIndex < this.stopFrameIndex)) {
        this.stopFrameIndex = undefined;
        this.isAnimating = false;
        return false;

        // Preparing next frame
      } else {
        this.approxFrameIndex += delta;
      }
      const nextFrameIndex = Math.round(this.approxFrameIndex);
      if (!this.getFrame(nextFrameIndex)) {
        this.requestFrame(nextFrameIndex);
        this.isWaiting = true;
        this.isAnimating = false;
        return false;
      }
      return true;
    }, fasterdom/* requestMutation */.RK);
  }
  getFrame(frameIndex) {
    return this.frames[frameIndex];
  }
  requestFrame(frameIndex) {
    this.frames[frameIndex] = WAITING;
    void workers[this.workerIndex].request({
      name: 'rlottie:renderFrames',
      args: [this.renderId, frameIndex, this.onFrameLoad.bind(this)]
    });
  }
  cleanupPrevFrame(frameIndex) {
    if (this.framesCount < 3) {
      return;
    }
    const prevFrameIndex = cycleRestrict(this.framesCount, frameIndex - 1);
    this.frames[prevFrameIndex] = undefined;
  }
  onFrameLoad(frameIndex, imageBitmap) {
    if (this.frames[frameIndex] !== WAITING) {
      return;
    }
    this.frames[frameIndex] = imageBitmap;
    if (this.isWaiting) {
      this.doPlay();
    }
  }
}
function ensureCanvasSize(canvas, sizeFactor) {
  const expectedWidth = Math.round(canvas.offsetWidth * sizeFactor);
  const expectedHeight = Math.round(canvas.offsetHeight * sizeFactor);
  if (canvas.width !== expectedWidth || canvas.height !== expectedHeight) {
    const deferred = new Deferred/* default */.A();
    PENDING_CANVAS_RESIZES.set(canvas, deferred.promise);
    (0,fasterdom/* requestMutation */.RK)(() => {
      canvas.width = expectedWidth;
      canvas.height = expectedHeight;
      deferred.resolve();
    });
  }
  return [expectedWidth, expectedHeight];
}
/* harmony default export */ const rlottie_RLottie = (RLottie);

/***/ })

}]);
//# sourceMappingURL=949.4291a7c8bd43534c65b6.js.map