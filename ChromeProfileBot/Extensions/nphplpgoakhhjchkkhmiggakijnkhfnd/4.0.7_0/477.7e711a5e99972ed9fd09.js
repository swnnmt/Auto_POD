"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[477],{

/***/ 4477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NativeAudio: () => (/* binding */ NativeAudio),
  NativeAudioWeb: () => (/* binding */ NativeAudioWeb)
});

// EXTERNAL MODULE: ./node_modules/@capacitor/core/dist/index.js
var dist = __webpack_require__(16546);
;// ./node_modules/@capgo/native-audio/dist/esm/audio-asset.js
class AudioAsset {
    constructor(audio) {
        this.audio = audio;
    }
}
//# sourceMappingURL=audio-asset.js.map
;// ./node_modules/@capgo/native-audio/dist/esm/web.js


class NativeAudioWeb extends dist/* WebPlugin */.E_ {
    constructor() {
        super();
    }
    async resume(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        if (audio.paused) {
            return audio.play();
        }
    }
    async pause(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        return audio.pause();
    }
    async setCurrentTime(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        audio.currentTime = options.time;
        return;
    }
    async getCurrentTime(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        return { currentTime: audio.currentTime };
    }
    async getDuration(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        if (Number.isNaN(audio.duration)) {
            throw "no duration available";
        }
        if (!Number.isFinite(audio.duration)) {
            throw "duration not available => media resource is streaming";
        }
        return { duration: audio.duration };
    }
    async configure(options) {
        throw `configure is not supported for web: ${JSON.stringify(options)}`;
    }
    async isPreloaded(options) {
        try {
            return { found: !!this.getAudioAsset(options.assetId) };
        }
        catch (e) {
            return { found: false };
        }
    }
    async preload(options) {
        var _a;
        if (NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.has(options.assetId)) {
            throw "AssetId already exists. Unload first if like to change!";
        }
        if (!((_a = options.assetPath) === null || _a === void 0 ? void 0 : _a.length)) {
            throw "no assetPath provided";
        }
        if (!options.isUrl &&
            !new RegExp("^/?" + NativeAudioWeb.FILE_LOCATION).test(options.assetPath)) {
            const slashPrefix = options.assetPath.startsWith("/") ? "" : "/";
            options.assetPath = `${NativeAudioWeb.FILE_LOCATION}${slashPrefix}${options.assetPath}`;
        }
        const audio = new Audio(options.assetPath);
        audio.autoplay = false;
        audio.loop = false;
        audio.preload = "auto";
        if (options.volume) {
            audio.volume = options.volume;
        }
        NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.set(options.assetId, new AudioAsset(audio));
    }
    onEnded(assetId) {
        this.notifyListeners("complete", { assetId });
    }
    async play(options) {
        const { assetId, time = 0 } = options;
        const audio = this.getAudioAsset(assetId).audio;
        await this.stop(options);
        audio.loop = false;
        audio.currentTime = time;
        audio.addEventListener("ended", () => this.onEnded(assetId), {
            once: true,
        });
        return audio.play();
    }
    async loop(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        await this.stop(options);
        audio.loop = true;
        return audio.play();
    }
    async stop(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        audio.pause();
        audio.loop = false;
        audio.currentTime = 0;
    }
    async unload(options) {
        await this.stop(options);
        NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.delete(options.assetId);
    }
    async setVolume(options) {
        if (typeof (options === null || options === void 0 ? void 0 : options.volume) !== "number") {
            throw "no volume provided";
        }
        const audio = this.getAudioAsset(options.assetId).audio;
        audio.volume = options.volume;
    }
    async setRate(options) {
        if (typeof (options === null || options === void 0 ? void 0 : options.rate) !== "number") {
            throw "no rate provided";
        }
        const audio = this.getAudioAsset(options.assetId).audio;
        audio.playbackRate = options.rate;
    }
    async isPlaying(options) {
        const audio = this.getAudioAsset(options.assetId).audio;
        return { isPlaying: !audio.paused };
    }
    getAudioAsset(assetId) {
        this.checkAssetId(assetId);
        if (!NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.has(assetId)) {
            throw `no asset for assetId "${assetId}" available. Call preload first!`;
        }
        return NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID.get(assetId);
    }
    checkAssetId(assetId) {
        if (typeof assetId !== "string") {
            throw "assetId must be a string";
        }
        if (!(assetId === null || assetId === void 0 ? void 0 : assetId.length)) {
            throw "no assetId provided";
        }
    }
}
NativeAudioWeb.FILE_LOCATION = "";
NativeAudioWeb.AUDIO_ASSET_BY_ASSET_ID = new Map();
const NativeAudio = new NativeAudioWeb();

//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=477.7e711a5e99972ed9fd09.js.map