/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 65606:
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/config.ts
/* provided dependency */ var process = __webpack_require__(65606);
const APP_ENV = "production";
const config_IS_CORE_WALLET = "1" === '1';
const APP_NAME = (/* unused pure expression or super */ null && ( false || (config_IS_CORE_WALLET ? 'TON Wallet' : 'MyTonWallet')));
const APP_VERSION = (/* unused pure expression or super */ null && ("4.0.7"));
const APP_COMMIT_HASH = (/* unused pure expression or super */ null && ("050c7d3b3f0273d397f2a015a9921c73ef9186c9"));
const APP_ENV_MARKER = APP_ENV === 'staging' ? 'Beta' : APP_ENV === 'development' ? 'Dev' : undefined;
const EXTENSION_NAME = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'TON Wallet' : 'MyTonWallet · My TON Wallet'));
const EXTENSION_DESCRIPTION = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'Set up your own TON Wallet on The Open Network'
// eslint-disable-next-line @stylistic/max-len
: 'The most feature-rich TON+TRON wallet: multi-accounts, multi-send, Telegram Gifts and other collectibles, TON DNS+Proxy, and more.'));
const DEBUG = APP_ENV !== 'production' && APP_ENV !== 'perf' && APP_ENV !== 'test';
const DEBUG_MORE = false;
const DEBUG_API = false;
const DEBUG_VIEW_ACCOUNTS = false;
const IS_PRODUCTION = APP_ENV === 'production';
const IS_TEST = APP_ENV === 'test';
const IS_PERF = APP_ENV === 'perf';
const IS_EXTENSION = (/* unused pure expression or super */ null && ("1" === '1'));
const IS_FIREFOX_EXTENSION = (/* unused pure expression or super */ null && ("false" === '1'));
const IS_OPERA_EXTENSION = process.env.IS_OPERA_EXTENSION === '1';
const IS_PACKAGED_ELECTRON = "false" === '1';
const IS_CAPACITOR = (/* unused pure expression or super */ null && ("false" === '1'));
const IS_ANDROID_DIRECT = (/* unused pure expression or super */ null && ("false" === '1'));
const IS_AIR_APP = (/* unused pure expression or super */ null && ("false" === '1'));
const IS_TELEGRAM_APP = (/* unused pure expression or super */ null && ("false" === '1'));
const ELECTRON_HOST_URL = 'https://dumb-host';
const INACTIVE_MARKER = '[Inactive]';
const PRODUCTION_URL = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'https://wallet.ton.org' : 'https://mytonwallet.app'));
const BETA_URL = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'https://beta.wallet.ton.org' : 'https://beta.mytonwallet.app'));
const APP_INSTALL_URL = 'https://get.mytonwallet.io/';
const APP_REPO_URL = 'https://github.com/mytonwallet-org/mytonwallet';
const BASE_URL = (/* unused pure expression or super */ null && ("https://wallet.ton.org"));
const BOT_USERNAME = (/* unused pure expression or super */ null && ( false || 'MyTonWalletBot'));
const SWAP_FEE_ADDRESS = (/* unused pure expression or super */ null && ( false || 'UQDUkQbpTVIgt7v66-JTFR-3-eXRFz_4V66F-Ufn6vOg0GOp'));
const DIESEL_ADDRESS = (/* unused pure expression or super */ null && ( false || 'UQC9lQOaEHC6YASiJJ2NrKEOlITMMQmc8j0_iZEHy-4sl3tG'));
const STRICTERDOM_ENABLED = DEBUG && !IS_PACKAGED_ELECTRON;
const DEBUG_ALERT_MSG = 'Shoot!\nSomething went wrong, please see the error details in Dev Tools Console.';
const PIN_LENGTH = 4;
const NATIVE_BIOMETRICS_USERNAME = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'TonWallet' : 'MyTonWallet'));
const NATIVE_BIOMETRICS_SERVER = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'https://wallet.ton.org' : 'https://mytonwallet.app'));
const IS_BIP39_MNEMONIC_ENABLED = !config_IS_CORE_WALLET;
const MNEMONIC_COUNT = 24;
const MNEMONIC_COUNTS = (/* unused pure expression or super */ null && (IS_BIP39_MNEMONIC_ENABLED ? [12, 24] : [24]));
const PRIVATE_KEY_HEX_LENGTH = 64;
const MNEMONIC_CHECK_COUNT = 3;
const MOBILE_SCREEN_MAX_WIDTH = 700; // px

const ANIMATION_END_DELAY = 50;
const ANIMATED_STICKER_TINY_ICON_PX = 16;
const ANIMATED_STICKER_ICON_PX = 30;
const ANIMATED_STICKER_TINY_SIZE_PX = 70;
const ANIMATED_STICKER_SMALL_SIZE_PX = 110;
const ANIMATED_STICKER_MIDDLE_SIZE_PX = 120;
const ANIMATED_STICKER_DEFAULT_PX = 150;
const ANIMATED_STICKER_BIG_SIZE_PX = 156;
const ANIMATED_STICKER_HUGE_SIZE_PX = 192;
const DEFAULT_PORTRAIT_WINDOW_SIZE = {
  width: 368,
  height: 770
};
const DEFAULT_LANDSCAPE_WINDOW_SIZE = {
  width: 980,
  height: 788
};
const DEFAULT_LANDSCAPE_ACTION_TAB_ID = 0;
const TRANSACTION_ADDRESS_SHIFT = 4;
const WHOLE_PART_DELIMITER = ' '; // https://www.compart.com/en/unicode/U+202F

const DEFAULT_SLIPPAGE_VALUE = 5;
const GLOBAL_STATE_CACHE_DISABLED = false;
const GLOBAL_STATE_CACHE_KEY = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'tonwallet-global-state' : 'mytonwallet-global-state'));
const ANIMATION_LEVEL_MIN = 0;
const ANIMATION_LEVEL_MED = 1;
const ANIMATION_LEVEL_MAX = 2;
const ANIMATION_LEVEL_DEFAULT = (/* unused pure expression or super */ null && (ANIMATION_LEVEL_MAX));
const THEME_DEFAULT = 'system';
const MAIN_ACCOUNT_ID = '0-ton-mainnet';
const TONCENTER_MAINNET_URL = (/* unused pure expression or super */ null && ( false || 'https://toncenter.mytonwallet.org'));
const TONCENTER_MAINNET_KEY = (/* unused pure expression or super */ null && (""));
const ELECTRON_TONCENTER_MAINNET_KEY = (/* unused pure expression or super */ null && (""));
const TONAPIIO_MAINNET_URL = (/* unused pure expression or super */ null && ( false || 'https://tonapiio.mytonwallet.org'));
const TONCENTER_TESTNET_URL = (/* unused pure expression or super */ null && ( false || 'https://toncenter-testnet.mytonwallet.org'));
const TONCENTER_TESTNET_KEY = (/* unused pure expression or super */ null && (""));
const ELECTRON_TONCENTER_TESTNET_KEY = (/* unused pure expression or super */ null && (""));
const TONAPIIO_TESTNET_URL = (/* unused pure expression or super */ null && ( false || 'https://tonapiio-testnet.mytonwallet.org'));
const BRILLIANT_API_BASE_URL = (/* unused pure expression or super */ null && ( false || 'https://api.mytonwallet.org'));
const PROXY_API_BASE_URL = (/* unused pure expression or super */ null && ( false || 'https://api.mytonwallet.org/proxy'));
const IPFS_GATEWAY_BASE_URL = 'https://ipfs.io/ipfs/';
const SSE_BRIDGE_URL = 'https://tonconnectbridge.mytonwallet.org/bridge/';
const TRON_MAINNET_API_URL =  false || 'https://tronapi.mytonwallet.org';
const TRON_TESTNET_API_URL =  false || 'https://api.shasta.trongrid.io';
const FRACTION_DIGITS = 9;
const SHORT_FRACTION_DIGITS = 2;
const MAX_PUSH_NOTIFICATIONS_ACCOUNT_COUNT = 3;
const SUPPORT_USERNAME = 'mysupport';
const MTW_TIPS_CHANNEL_NAME = {
  en: 'MyTonWalletTips',
  ru: 'MyTonWalletTipsRu'
};
const NFT_MARKETPLACE_TITLES = {
  getgems: 'Getgems',
  fragment: 'Fragment'
};
const MTW_STATIC_BASE_URL = 'https://static.mytonwallet.org';
const MTW_CARDS_BASE_URL = (/* unused pure expression or super */ null && (`${MTW_STATIC_BASE_URL}/cards/`));
const MTW_CARDS_MINT_BASE_URL = (/* unused pure expression or super */ null && (`${MTW_STATIC_BASE_URL}/mint-cards/`));
const MYTONWALLET_PROMO_URL = 'https://mytonwallet.io/';
const MYTONWALLET_MULTISEND_DAPP_URL = 'https://multisend.mytonwallet.io/';
const TELEGRAM_WEB_URL = 'https://web.telegram.org/a/';
const NFT_MARKETPLACE_URL = 'https://getgems.io/';
const NFT_MARKETPLACE_TITLE = NFT_MARKETPLACE_TITLES.getgems;
const GETGEMS_BASE_MAINNET_URL = 'https://getgems.io/';
const GETGEMS_BASE_TESTNET_URL = 'https://testnet.getgems.io/';
const EMPTY_HASH_VALUE = 'NOHASH';
const IFRAME_WHITELIST = (/* unused pure expression or super */ null && (['http://localhost:*', 'https://tonscan.org']));
const SUBPROJECT_URL_MASK = 'https://*.mytonwallet.io';
const CHANGELLY_SUPPORT_EMAIL = 'support@changelly.com';
const CHANGELLY_LIVE_CHAT_URL = 'https://changelly.com/';
const CHANGELLY_SECURITY_EMAIL = 'security@changelly.com';
const CHANGELLY_TERMS_OF_USE = 'https://changelly.com/terms-of-use';
const CHANGELLY_PRIVACY_POLICY = 'https://changelly.com/privacy-policy';
const CHANGELLY_AML_KYC = 'https://changelly.com/aml-kyc';
const CHANGELLY_WAITING_DEADLINE = (/* unused pure expression or super */ null && (3 * 60 * 60 * 1000)); // 3 hours

const PROXY_HOSTS = (/* unused pure expression or super */ null && (""));
const TINY_TRANSFER_MAX_COST = 0.01;
const IMAGE_CACHE_NAME = 'mtw-image';
const LANG_CACHE_NAME = 'mtw-lang-226';
const LANG_LIST = [{
  langCode: 'en',
  name: 'English',
  nativeName: 'English',
  rtl: false
}, {
  langCode: 'es',
  name: 'Spanish',
  nativeName: 'Español',
  rtl: false
}, {
  langCode: 'ru',
  name: 'Russian',
  nativeName: 'Русский',
  rtl: false
}, {
  langCode: 'zh-Hans',
  name: 'Chinese (Simplified)',
  nativeName: '简体',
  rtl: false
}, {
  langCode: 'zh-Hant',
  name: 'Chinese (Traditional)',
  nativeName: '繁體',
  rtl: false
}, {
  langCode: 'tr',
  name: 'Turkish',
  nativeName: 'Türkçe',
  rtl: false
}, {
  langCode: 'de',
  name: 'German',
  nativeName: 'Deutsch',
  rtl: false
}, {
  langCode: 'th',
  name: 'Thai',
  nativeName: 'ไทย',
  rtl: false
}, {
  langCode: 'uk',
  name: 'Ukrainian',
  nativeName: 'Українська',
  rtl: false
}, {
  langCode: 'pl',
  name: 'Polish',
  nativeName: 'Polski',
  rtl: false
}];
const IS_STAKING_DISABLED = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET));
const VALIDATION_PERIOD_MS = 65_536_000; // 18.2 h.
const ONE_TON = 1_000_000_000n;
const DEFAULT_FEE = 15_000_000n; // 0.015 TON
const UNSTAKE_TON_GRACE_PERIOD = (/* unused pure expression or super */ null && (20 * 60 * 1000)); // 20 m.

const STAKING_POOLS =  false ? 0 : [];
const LIQUID_POOL =  false || 'EQD2_4d91M4TVbEBVyBF8J1UwpMJc361LKVCz6bBlffMW05o';
const LIQUID_JETTON = (/* unused pure expression or super */ null && ( false || 'EQCqC6EhRJ_tpWngKxL6dV0k6DSnRUrs9GSVkLbfdCqsj6TE'));
const STAKING_MIN_AMOUNT = (/* unused pure expression or super */ null && (ONE_TON));
const NOMINATORS_STAKING_MIN_AMOUNT = 10_000n * ONE_TON;
const MIN_ACTIVE_STAKING_REWARDS = 100_000_000n; // 0.1 MY

const TONCONNECT_PROTOCOL_VERSION = 2;
const TONCONNECT_WALLET_JSBRIDGE_KEY = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'tonwallet' : 'mytonwallet'));
const EMBEDDED_DAPP_BRIDGE_CHANNEL = 'embedded-dapp-bridge';
const NFT_FRAGMENT_COLLECTIONS = (/* unused pure expression or super */ null && (['0:0e41dc1dc3c9067ed24248580e12b3359818d83dee0304fabcf80845eafafdb2',
// Anonymous Telegram Numbers
'0:80d78a35f955a14b679faa887ff4cd5bfc0f43b4a4eea2a7e6927f3701b273c2' // Telegram Usernames
]));
const NFT_FRAGMENT_GIFT_IMAGE_TO_URL_REGEX = /^https?:\/\/nft\.(fragment\.com\/gift\/[\w-]+-\d+)\.\w+$/i;
const TELEGRAM_GIFTS_SUPER_COLLECTION = 'super:telegram-gifts';
const MTW_CARDS_WEBSITE = 'https://cards.mytonwallet.io';
const MTW_CARDS_COLLECTION = 'EQCQE2L9hfwx1V8sgmF9keraHx1rNK9VmgR1ctVvINBGykyM';
const TON_DNS_COLLECTION = 'EQC3dNlesgVD8YbAazcauIrXBPfiVhMMr5YYk2in0Mtsz0Bz';
const TON_DNS_RENEWAL_WARNING_DAYS = 14;
const TON_DNS_RENEWAL_NFT_WARNING_DAYS = 30;
const TONCOIN = {
  name: 'Toncoin',
  symbol: 'TON',
  slug: 'toncoin',
  decimals: 9,
  chain: 'ton',
  cmcSlug: 'toncoin'
};
const TRX = {
  name: 'TRON',
  symbol: 'TRX',
  slug: 'trx',
  decimals: 6,
  chain: 'tron',
  cmcSlug: 'tron'
};
const MYCOIN = {
  name: 'MyTonWallet Coin',
  symbol: 'MY',
  slug: 'ton-eqcfvnlrbn',
  decimals: 9,
  chain: 'ton',
  minterAddress: 'EQCFVNlRb-NHHDQfv3Q9xvDXBLJlay855_xREsq5ZDX6KN-w'
};
const MYCOIN_TESTNET = {
  ...MYCOIN,
  slug: 'ton-kqawlxpebw',
  minterAddress: 'kQAWlxpEbwhCDFX9gp824ee2xVBhAh5VRSGWfbNFDddAbQoQ'
};
const CHAIN_CONFIG = {
  ton: {
    isMemoSupported: true,
    isDnsSupported: true,
    addressRegex: /^([-\w_]{48}|0:[\da-h]{64})$/i,
    addressPrefixRegex: /^([-\w_]{1,48}|0:[\da-h]{0,64})$/i,
    nativeToken: TONCOIN
  },
  tron: {
    isMemoSupported: false,
    isDnsSupported: false,
    addressRegex: /^T[1-9A-HJ-NP-Za-km-z]{33}$/,
    addressPrefixRegex: /^T[1-9A-HJ-NP-Za-km-z]{0,33}$/,
    nativeToken: TRX,
    mainnet: {
      apiUrl: TRON_MAINNET_API_URL,
      usdtAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
    },
    testnet: {
      apiUrl: TRON_TESTNET_API_URL,
      usdtAddress: 'TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs'
    }
  }
};
const TRC20_USDT_MAINNET_SLUG = 'tron-tr7nhqjekq';
const TRC20_USDT_TESTNET_SLUG = 'tron-tg3xxyexbk';
const TON_USDT_SLUG = 'ton-eqcxe6mutq';
const STAKED_TON_SLUG = 'ton-eqcqc6ehrj';
const STAKED_MYCOIN_SLUG = 'ton-eqcbzvsfwq';
const TRX_SWAP_COUNT_FEE_ADDRESS = 'TW2LXSebZ7Br1zHaiA2W1zRojDkDwjGmpw';
const MYCOIN_STAKING_POOL = 'EQC3roTiRRsoLzfYVK7yVVoIZjTEqAjQU3ju7aQ7HWTVL5o5';
const ETHENA_STAKING_VAULT = 'EQChGuD1u0e7KUWHH5FaYh_ygcLXhsdG2nSHPXHW8qqnpZXW';
const ETHENA_STAKING_MIN_AMOUNT = 1_000_000; // 1 USDe
// eslint-disable-next-line @stylistic/max-len
const ETHENA_ELIGIBILITY_CHECK_URL = 'https://t.me/id_app/start?startapp=cQeewNnc3pVphUcwY63WruKMQDpgePd1E7eMVoqphMZAdGoU9jwS4qRqrM1kSeaqrAiiDiC3EYAJPwZDGWqxZpw5vtGxmHma59XEt';

// In cross-chain swaps, only a few TON/TRON tokens are available.
// It’s not optimal to request swap history for all the others.
const SWAP_CROSSCHAIN_SLUGS = new Set([TONCOIN.slug, TON_USDT_SLUG, TRX.slug, TRC20_USDT_MAINNET_SLUG]);
const STON_PTON_ADDRESS = 'EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez';
const STON_PTON_SLUG = 'ton-eqcm3b12qk';
const DNS_IMAGE_GEN_URL = 'https://dns-image.mytonwallet.org/img?d=';
const TRC20_USDT = {
  name: 'Tether USD',
  symbol: 'USDT',
  decimals: 6,
  chain: 'tron'
};
const TON_USDT = {
  name: 'Tether USD',
  symbol: 'USD₮',
  chain: 'ton',
  slug: TON_USDT_SLUG,
  decimals: 6,
  tokenAddress: 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'
};
const TON_USDE = {
  name: 'Ethena USDe',
  symbol: 'USDe',
  chain: 'ton',
  tokenAddress: 'EQAIb6KmdfdDR7CN1GBqVJuP25iCnLKCvBlJ07Evuu2dzP5f',
  slug: 'ton-eqaib6kmdf',
  decimals: 6,
  // eslint-disable-next-line @stylistic/max-len
  image: 'https://imgproxy.toncenter.com/binMwUmcnFtjvgjp4wSEbsECXwfXUwbPkhVvsvpubNw/pr:small/aHR0cHM6Ly9tZXRhZGF0YS5sYXllcnplcm8tYXBpLmNvbS9hc3NldHMvVVNEZS5wbmc'
};
const TON_TSUSDE = {
  name: 'Ethena tsUSDe',
  symbol: 'tsUSDe',
  chain: 'ton',
  tokenAddress: 'EQDQ5UUyPHrLcQJlPAczd_fjxn8SLrlNQwolBznxCdSlfQwr',
  slug: 'ton-eqdq5uuyph',
  decimals: 6,
  // eslint-disable-next-line @stylistic/max-len
  image: 'https://cache.tonapi.io/imgproxy/vGZJ7erwsWPo7DpVG_V7ygNn7VGs0szZXcNLHB_l0ms/rs:fill:200:200:1/g:no/aHR0cHM6Ly9tZXRhZGF0YS5sYXllcnplcm8tYXBpLmNvbS9hc3NldHMvdHNVU0RlLnBuZw.webp'
};
const ALL_STAKING_POOLS = [LIQUID_POOL, MYCOIN_STAKING_POOL, ETHENA_STAKING_VAULT, TON_TSUSDE.tokenAddress];
const DEFAULT_ENABLED_TOKEN_SLUGS = [TONCOIN.slug, TON_USDT_SLUG, TRX.slug, TRC20_USDT_TESTNET_SLUG, TRC20_USDT_MAINNET_SLUG];

// Toncoin, USDT TON, TRX, USDT TRC20
const DEFAULT_ENABLED_TOKEN_COUNT = 4;
const PRIORITY_TOKEN_SLUGS = [TONCOIN.slug, TON_USDT_SLUG, TRX.slug];
const COMMON_TOKEN = {
  isFromBackend: true,
  price: 0,
  priceUsd: 0,
  percentChange24h: 0
};
const TOKEN_INFO = {
  toncoin: {
    ...TONCOIN,
    isFromBackend: true,
    price: 3.1,
    priceUsd: 3.1,
    percentChange24h: 0
  },
  trx: {
    ...TRX,
    ...COMMON_TOKEN
  },
  [TRC20_USDT_MAINNET_SLUG]: {
    // mainnet
    ...TRC20_USDT,
    slug: TRC20_USDT_MAINNET_SLUG,
    tokenAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    ...COMMON_TOKEN
  },
  [TRC20_USDT_TESTNET_SLUG]: {
    // testnet
    ...TRC20_USDT,
    slug: TRC20_USDT_TESTNET_SLUG,
    tokenAddress: 'TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs',
    ...COMMON_TOKEN
  },
  [TON_USDT_SLUG]: {
    ...TON_USDT,
    // eslint-disable-next-line @stylistic/max-len
    image: 'https://cache.tonapi.io/imgproxy/T3PB4s7oprNVaJkwqbGg54nexKE0zzKhcrPv8jcWYzU/rs:fill:200:200:1/g:no/aHR0cHM6Ly90ZXRoZXIudG8vaW1hZ2VzL2xvZ29DaXJjbGUucG5n.webp',
    slug: TON_USDT_SLUG,
    ...COMMON_TOKEN
  },
  [MYCOIN.slug]: {
    ...MYCOIN,
    // eslint-disable-next-line @stylistic/max-len
    image: 'https://cache.tonapi.io/imgproxy/Qy038wCBKISofJ0hYMlj6COWma330cx3Ju1ZSPM2LRU/rs:fill:200:200:1/g:no/aHR0cHM6Ly9teXRvbndhbGxldC5pby9sb2dvLTI1Ni1ibHVlLnBuZw.webp',
    ...COMMON_TOKEN
  },
  [TON_USDE.slug]: {
    ...TON_USDE,
    ...COMMON_TOKEN
  },
  [TON_TSUSDE.slug]: {
    ...TON_TSUSDE,
    ...COMMON_TOKEN
  }
};
const TOKEN_WITH_LABEL = {
  [TRC20_USDT_MAINNET_SLUG]: 'TRC-20',
  [TRC20_USDT_TESTNET_SLUG]: 'TRC-20',
  [TON_USDT_SLUG]: 'TON'
};
const INIT_SWAP_ASSETS = {
  toncoin: {
    name: 'Toncoin',
    symbol: TONCOIN.symbol,
    chain: TONCOIN.chain,
    slug: TONCOIN.slug,
    decimals: TONCOIN.decimals,
    price: 0,
    priceUsd: 0,
    isPopular: true
  },
  [TON_USDT_SLUG]: {
    name: 'Tether USD',
    symbol: 'USD₮',
    chain: 'ton',
    slug: TON_USDT_SLUG,
    decimals: 9,
    // eslint-disable-next-line @stylistic/max-len
    image: 'https://cache.tonapi.io/imgproxy/T3PB4s7oprNVaJkwqbGg54nexKE0zzKhcrPv8jcWYzU/rs:fill:200:200:1/g:no/aHR0cHM6Ly90ZXRoZXIudG8vaW1hZ2VzL2xvZ29DaXJjbGUucG5n.webp',
    tokenAddress: 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs',
    price: 0,
    priceUsd: 0,
    isPopular: true
  }
};
const DEFAULT_TRX_SWAP_FIRST_TOKEN_SLUG = TONCOIN.slug;
const DEFAULT_SWAP_FIRST_TOKEN_SLUG = TONCOIN.slug;
const DEFAULT_SWAP_SECOND_TOKEN_SLUG = (/* unused pure expression or super */ null && (TON_USDT_SLUG));
const DEFAULT_TRANSFER_TOKEN_SLUG = TONCOIN.slug;
const DEFAULT_CEX_SWAP_SECOND_TOKEN_SLUG = (/* unused pure expression or super */ null && (TRC20_USDT_MAINNET_SLUG));
const SWAP_DEX_LABELS = {
  dedust: 'DeDust',
  ston: 'STON.fi'
};
const MULTITAB_DATA_CHANNEL_NAME = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'tw-multitab' : 'mtw-multitab'));
const ACTIVE_TAB_STORAGE_KEY = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET ? 'tw-active-tab' : 'mtw-active-tab'));
const INDEXED_DB_NAME = 'keyval-store';
const INDEXED_DB_STORE_NAME = 'keyval';
const WINDOW_PROVIDER_CHANNEL = 'windowProvider';
const WINDOW_PROVIDER_PORT = (/* unused pure expression or super */ null && (`${config_IS_CORE_WALLET ? 'TonWallet' : 'MyTonWallet'}_popup_reversed`));
const SHOULD_SHOW_ALL_ASSETS_AND_ACTIVITY = (/* unused pure expression or super */ null && (config_IS_CORE_WALLET));
const PORTRAIT_MIN_ASSETS_TAB_VIEW = 4;
const LANDSCAPE_MIN_ASSETS_TAB_VIEW = 6;
const DEFAULT_PRICE_CURRENCY = 'USD';
const CURRENCIES = {
  USD: {
    name: 'US Dollar',
    decimals: 2,
    shortSymbol: '$'
  },
  EUR: {
    name: 'Euro',
    decimals: 2,
    shortSymbol: '€'
  },
  RUB: {
    name: 'Ruble',
    decimals: 2,
    shortSymbol: '₽'
  },
  CNY: {
    name: 'Yuan',
    decimals: 2,
    shortSymbol: '¥'
  },
  BTC: {
    name: 'Bitcoin',
    decimals: 9
  },
  [TONCOIN.symbol]: {
    name: 'Toncoin',
    decimals: 9
  }
};
const BURN_ADDRESS = 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ';
const DEFAULT_WALLET_VERSION = 'W5';
const POPULAR_WALLET_VERSIONS = (/* unused pure expression or super */ null && (['v3R1', 'v3R2', 'v4R2', 'W5']));
const LEDGER_WALLET_VERSIONS = (/* unused pure expression or super */ null && (['v3R2', 'v4R2']));
const DEFAULT_TIMEOUT = 10000;
const DEFAULT_RETRIES = 3;
const DEFAULT_ERROR_PAUSE = 500;
const HISTORY_PERIODS = (/* unused pure expression or super */ null && (['1D', '7D', '1M', '3M', '1Y', 'ALL']));
const BROWSER_HISTORY_LIMIT = 10;
const NFT_BATCH_SIZE = 4;
const NOTCOIN_VOUCHERS_ADDRESS = 'EQDmkj65Ab_m0aZaW8IpKw4kYqIgITw_HRstYEkVQ6NIYCyW';
const BURN_CHUNK_DURATION_APPROX_SEC = 30;
const NOTCOIN_FORWARD_TON_AMOUNT = 30000000n; // 0.03 TON
const NOTCOIN_EXCHANGERS = (/* unused pure expression or super */ null && (['EQAPZauWVPUcm2hUJT9n36pxznEhl46rEn1bzBXN0RY_yiy2', 'EQASgm0Qv3h2H2mF0W06ikPqYq2ctT3dyXMJH_svbEKKB3iZ', 'EQArlmP-RhVIG2yAFGZyPZfM3m0YccxmpvoRi6sgRzWnAA0s', 'EQA6pL-spYqZp1Ck6o3rpY45Cl-bvLMW_j3qdVejOkUWpLnm', 'EQBJ_ehYjumQKbXfWUue1KHKXdTm1GuYJB0Fj2ST_DwORvpd', 'EQBRmYSjxh9xlZpUqEmGjF5UjukI9v_Cm2kCTu4CoBn3XkOD', 'EQBkiqncd7AFT5_23H-RoA2Vynk-Nzq_dLoeMVRthAU9RF0p', 'EQB_OzTHXbztABe0QHgr4PtAV8T64LR6aDunXgaAoihOdxwO', 'EQCL-x5kLg6tKVNGryItTuj6tG3FH5mhUEu0xRqQc-kbEmbe', 'EQCZh2yJ46RaQH3AYmjEA8SMMXi77Oein4-3lvqkHseIAhD-', 'EQChKo5IK3iNqUHUGDB9gtzjCjMTPtmsFqekuCA2MdreVEyu', 'EQC6DNCBv076TIliRMfOt20RpbS7rNKDfSky3WrFEapFt8AH', 'EQDE_XFZOYae_rl3ZMsgBCtRSmYhl8B4y2BZEP7oiGBDhlgy', 'EQDddqpGA2ePXQF47A2DSL3GF6ZzIVmimfM2d16cdymy2noT', 'EQDv0hNNAamhYltCh3pTJrq3oRB9RW2ZhEYkTP6fhj5BtZNu', 'EQD2mP7zgO7-imUJhqYry3i07aJ_SR53DaokMupfAAobt0Xw']));
const CLAIM_ADDRESS = 'EQB3zOTvPi1PmwdcTpqSfFKZnhi1GNKEVJM-LdoAirdLtash';
const CLAIM_AMOUNT = 30000000n; // 0.03 TON
const CLAIM_COMMENT = 'claim';
const MINT_CARD_ADDRESS = 'EQBpst3ZWJ9Dqq5gE2YH-yPsFK_BqMOmgi7Z_qK6v7WbrPWv';
const MINT_CARD_COMMENT = 'Mint card';
const MINT_CARD_REFUND_COMMENT = 'Refund';

// eslint-disable-next-line @stylistic/max-len
const RE_LINK_TEMPLATE = /((ftp|https?):\/\/)?(?<host>(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z][-a-zA-Z0-9]{1,62})\b([-a-zA-Z0-9()@:%_+.,~#?&/=]*)/g;
// eslint-disable-next-line @stylistic/max-len
const RE_TG_BOT_MENTION = /telegram[:\s-]*((@[a-z0-9_]+)|(https:\/\/)?(t\.me|telegram\.me|telegram\.dog)\/[a-z0-9_]+)/mig;
const STARS_SYMBOL = '⭐️';
const GIVEAWAY_CHECKIN_URL = (/* unused pure expression or super */ null && ( false || 'https://giveaway.mytonwallet.io'));
const AUTOLOCK_OPTIONS_LIST = [{
  value: 'never',
  name: 'Disabled',
  selectedName: 'Disabled',
  period: 0
}, {
  value: '1',
  name: '30 seconds',
  selectedName: 'If away for 30 sec',
  period: 30_000
}, {
  value: '2',
  name: '3 minutes',
  selectedName: 'If away for 3 min',
  period: 60_000 * 3
}, {
  value: '3',
  name: '10 minutes',
  selectedName: 'If away for 10 min',
  period: 60_000 * 10
}];
const AUTO_CONFIRM_DURATION_MINUTES = 5;
const PRICELESS_TOKEN_HASHES = new Set(['173e31eee054cb0c76f77edc7956bed766bf48a1f63bd062d87040dcd3df700f',
// FIVA SY tsTON EQAxGi9Al7hamLAORroxGkvfap6knGyzI50ThkP3CLPLTtOZ
'5226dd4e6db9af26b24d5ca822bc4053b7e08152f923932abf25030c7e38bb42',
// FIVA PT tsTON EQAkxIRGXgs2vD2zjt334MBjD3mXg2GsyEZHfzuYX_trQkFL
'fea2c08a704e5192b7f37434927170440d445b87aab865c3ea2a68abe7168204',
// FIVA YT tsTON EQAcy60qg22RCq87A_qgYK8hooEgjCZ44yxhdnKYdlWIfKXL
'e691cf9081a8aeb22ed4d94829f6626c9d822752e035800b5543c43f83d134b5',
// FIVA LP tsTON EQD3BjCjxuf8mu5kvxajVbe-Ila1ScZZlAi03oS7lMmAJjM3
'301ce25925830d713b326824e552e962925c4ff45b1e3ea21fc363a459a49b43',
// FIVA SY eUSDT EQDi9blCcyT-k8iMpFMYY0t7mHVyiCB50ZsRgyUECJDuGvIl
'02250f83fbb8624d859c2c045ac70ee2b3b959688c3d843aec773be9b36dbfc3',
// FIVA PT eUSDT EQBzVrYkYPHx8D_HPfQacm1xONa4XSRxl826vHkx_laP2HOe
'dba3adb2c917db80fd71a6a68c1fc9e12976491a8309d5910f9722efc084ce4d',
// FIVA YT eUSDT EQCwUSc2qrY5rn9BfFBG9ARAHePTUvITDl97UD0zOreWzLru
'7da9223b90984d6a144e71611a8d7c65a6298cad734faed79438dc0f7a8e53d1',
// FIVA LP eUSDT EQBNlIZxIbQGQ78cXgG3VRcyl8A0kLn_6BM9kabiHHhWC4qY
'ddf80de336d580ab3c11d194f189c362e2ca1225cae224ea921deeaba7eca818',
// tsUSDe EQDQ5UUyPHrLcQJlPAczd_fjxn8SLrlNQwolBznxCdSlfQwr
'eb9d9891a32ec94425c09735f6ade73f4c171da0091f874d6e9d25247d583990',
// Affluent TON Lending Vault EQADQ6JcK0NMuNM5uwCcS9bjcn2RTvcxYIZjNlhIhywUrfBN
'f66c149de251ffd031bdb34b79abe43a062ba16b815433691e3ec40a77f01d71',
// Affluent Ethena Multiply Vault EQDXmtbt1-WSP00tSh6N6FH-4lX7LbnrjORClmtmuZqg4Ymm
'bca42dbdcbc0d885aaffb1eeeb027d9f338c2dd68701a05641c1d1c3171a7400' // Affluent TON Multiply Vault EQDtxQqkgIRQQR5hWlrQxiJMtLwjR3rEYNUBbEcvPDwCs1Ng
]);
const STAKED_TOKEN_SLUGS = new Set([STAKED_TON_SLUG, STAKED_MYCOIN_SLUG, TON_TSUSDE.slug]);
const DEFAULT_OUR_SWAP_FEE = 0.875;
const DEFAULT_STAKING_STATE = {
  type: 'liquid',
  id: 'liquid',
  tokenSlug: TONCOIN.slug,
  annualYield: 3.9,
  yieldType: 'APY',
  balance: 0n,
  pool: LIQUID_POOL,
  tokenBalance: 0n,
  unstakeRequestAmount: 0n,
  instantAvailable: 0n,
  start: 0,
  end: 0
};
const DEFAULT_NOMINATORS_STAKING_STATE = {
  type: 'nominators',
  id: 'nominators',
  tokenSlug: TONCOIN.slug,
  annualYield: 3.9,
  yieldType: 'APY',
  balance: 0n,
  pool: 'Ef8dgIOIRyCLU0NEvF8TD6Me3wrbrkS1z3Gpjk3ppd8m8-s_',
  start: 0,
  end: 0,
  pendingDepositAmount: 0n
};
const SWAP_API_VERSION = 2;
const TONCENTER_ACTIONS_VERSION = 'v1';
const JVAULT_URL = 'https://jvault.xyz';
const HELP_CENTER_URL = {
  home: {
    en: 'https://help.mytonwallet.io/',
    ru: 'https://help.mytonwallet.io/ru'
  },
  domainScam: {
    en: 'https://help.mytonwallet.io/intro/scams/.ton-domain-scams',
    // eslint-disable-next-line @stylistic/max-len
    ru: 'https://help.mytonwallet.io/ru/baza-znanii/moshennichestvo-i-skamy/moshennichestvo-s-ispolzovaniem-domenov-.ton'
  },
  seedScam: {
    en: 'https://help.mytonwallet.io/intro/scams/leaked-seed-phrases',
    ru: 'https://help.mytonwallet.io/ru/baza-znanii/moshennichestvo-i-skamy/slitye-sid-frazy'
  },
  ethenaStaking: {
    en: 'https://help.mytonwallet.io/intro/staking/what-is-usde-how-does-usde-staking-work',
    ru: 'https://help.mytonwallet.io/ru/baza-znanii/steiking/chto-takoe-usde-kak-rabotaet-steiking-usde'
  }
};
const ALL_TON_DNS_ZONES = [{
  suffixes: ['ton'],
  baseFormat: /^([-\da-z]+\.){0,2}[-\da-z]{4,126}$/i,
  resolver: 'EQC3dNlesgVD8YbAazcauIrXBPfiVhMMr5YYk2in0Mtsz0Bz',
  collectionName: 'TON DNS Domains'
}, {
  suffixes: ['t.me'],
  baseFormat: /^([-\da-z]+\.){0,2}[-_\da-z]{4,32}$/i,
  resolver: 'EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi',
  isTelemint: true,
  collectionName: 'Telegram Usernames'
}, {
  suffixes: ['vip', 'ton.vip', 'vip.ton'],
  baseFormat: /^([-\da-z]+\.){0,2}?[\da-z]{1,24}$/i,
  resolver: 'EQBWG4EBbPDv4Xj7xlPwzxd7hSyHMzwwLB5O6rY-0BBeaixS',
  collectionName: 'VIP DNS Domains',
  isUnofficial: true
}, {
  suffixes: ['gram'],
  baseFormat: /^([-\da-z]+\.){0,2}[\da-z]{1,127}$/i,
  resolver: 'EQAic3zPce496ukFDhbco28FVsKKl2WUX_iJwaL87CBxSiLQ',
  collectionName: 'GRAM DNS Domains',
  isUnofficial: true
}];
const TON_DNS_ZONES = config_IS_CORE_WALLET ? ALL_TON_DNS_ZONES.filter(_ref => {
  let {
    isUnofficial
  } = _ref;
  return !isUnofficial;
}) : ALL_TON_DNS_ZONES;
const DEFAULT_AUTOLOCK_OPTION = '3';
const WRONG_ATTEMPTS_BEFORE_LOG_OUT_SUGGESTION = 2;
const UNKNOWN_TOKEN = {
  symbol: '[Unknown]',
  decimals: 9
};
;// ./src/api/providers/extension/config.ts

const POPUP_PORT = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'TonWallet_popup' : 'MyTonWallet_popup'));
const CONTENT_SCRIPT_PORT = config_IS_CORE_WALLET ? 'TonWallet_contentScript' : 'MyTonWallet_contentScript';
const PAGE_CONNECTOR_CHANNEL = config_IS_CORE_WALLET ? 'TonWallet_pageConnector' : 'MyTonWallet_pageConnector';
;// ./src/api/providers/extension/pageContentProxy.ts

const PAGE_ORIGIN = window.location.href;
let port;
window.addEventListener('message', handlePageMessage);
connectPort();
function handlePageMessage(e) {
  var _e$data;
  if (((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.channel) === PAGE_CONNECTOR_CHANNEL) {
    sendToPort(e.data);
  }
}
function connectPort() {
  port = chrome.runtime.connect({
    name: CONTENT_SCRIPT_PORT
  });
  port.onMessage.addListener(sendToPage);
}
function sendToPage(payload) {
  window.postMessage(payload, PAGE_ORIGIN);
}
function sendToPort(payload) {
  let isRepeated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  try {
    port.postMessage(payload);
  } catch (err) {
    const isInvalidated = err.message.toString().includes('Extension context invalidated');
    if (isInvalidated) {
      window.removeEventListener('message', handlePageMessage);
      return;
    }
    const isDisconnected = err.message.toString().includes('disconnected port');
    if (isDisconnected && !isRepeated) {
      connectPort();
      sendToPort(payload, true);
    }
  }
}
;// ./src/extension/contentScript.ts

(function injectScript() {
  const scriptTag = document.createElement('script');
  scriptTag.async = true;
  scriptTag.src = chrome.runtime.getURL('/extensionPageScript.js');
  const container = document.head || document.documentElement;
  container.appendChild(scriptTag);
  scriptTag.remove();
})();
})();

/******/ })()
;
//# sourceMappingURL=extensionContentScript.js.map