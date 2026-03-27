/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 16524:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

;// ./src/util/stream.ts
function transformBytesByStream(input, stream) {
  const writer = stream.writable.getWriter();
  void writer.write(input);
  void writer.close();
  return readBytesFromStream(stream.readable);
}

/**
 * Reads the whole readable binary stream into a Uint8Array
 */
async function readBytesFromStream(stream) {
  const reader = stream.getReader();
  const output = [];
  let totalSize = 0;
  for (;;) {
    const {
      value,
      done
    } = await reader.read();
    if (done) {
      break;
    }
    output.push(value);
    totalSize += value.byteLength;
  }
  if (output.length === 1) {
    return output[0];
  }
  const concatenated = new Uint8Array(totalSize);
  let offset = 0;
  for (const array of output) {
    concatenated.set(array, offset);
    offset += array.byteLength;
  }
  return concatenated;
}
;// ./src/util/compression.ts

async function ungzip(input) {
  const decompressionStream = tryCreateDecompressionStream('gzip');
  if (decompressionStream) {
    return transformBytesByStream(input, decompressionStream);
  }

  // Fflate is a polyfill, so we load it only if necessary.
  // Note: it's import `gunzipSync` exactly this way, otherwise the tree-shaking won't work.
  const {
    gunzipSync
  } = await __webpack_require__.e(/* import() */ 861).then(__webpack_require__.bind(__webpack_require__, 69861));
  return gunzipSync(bufferSourceToBytes(input));
}
function tryCreateDecompressionStream(format) {
  try {
    // If the format or `DecompressionStream` is not supported by the browser, this expression throws
    return new DecompressionStream(format);
  } catch {
    return undefined;
  }
}
function bufferSourceToBytes(source) {
  if (source instanceof ArrayBuffer) {
    return new Uint8Array(source);
  }
  return new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
}
;// ./src/config.ts
/* provided dependency */ var process = __webpack_require__(65606);
const APP_ENV = "production";
const IS_CORE_WALLET = "1" === '1';
const APP_NAME = (/* unused pure expression or super */ null && ( false || (IS_CORE_WALLET ? 'TON Wallet' : 'MyTonWallet')));
const APP_VERSION = (/* unused pure expression or super */ null && ("4.0.7"));
const APP_COMMIT_HASH = (/* unused pure expression or super */ null && ("050c7d3b3f0273d397f2a015a9921c73ef9186c9"));
const APP_ENV_MARKER = APP_ENV === 'staging' ? 'Beta' : APP_ENV === 'development' ? 'Dev' : undefined;
const EXTENSION_NAME = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'TON Wallet' : 'MyTonWallet · My TON Wallet'));
const EXTENSION_DESCRIPTION = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'Set up your own TON Wallet on The Open Network'
// eslint-disable-next-line @stylistic/max-len
: 'The most feature-rich TON+TRON wallet: multi-accounts, multi-send, Telegram Gifts and other collectibles, TON DNS+Proxy, and more.'));
const config_DEBUG = APP_ENV !== 'production' && APP_ENV !== 'perf' && APP_ENV !== 'test';
const DEBUG_MORE = false;
const config_DEBUG_API = false;
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
const PRODUCTION_URL = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'https://wallet.ton.org' : 'https://mytonwallet.app'));
const BETA_URL = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'https://beta.wallet.ton.org' : 'https://beta.mytonwallet.app'));
const APP_INSTALL_URL = 'https://get.mytonwallet.io/';
const APP_REPO_URL = 'https://github.com/mytonwallet-org/mytonwallet';
const BASE_URL = (/* unused pure expression or super */ null && ("https://wallet.ton.org"));
const BOT_USERNAME = (/* unused pure expression or super */ null && ( false || 'MyTonWalletBot'));
const SWAP_FEE_ADDRESS = (/* unused pure expression or super */ null && ( false || 'UQDUkQbpTVIgt7v66-JTFR-3-eXRFz_4V66F-Ufn6vOg0GOp'));
const DIESEL_ADDRESS = (/* unused pure expression or super */ null && ( false || 'UQC9lQOaEHC6YASiJJ2NrKEOlITMMQmc8j0_iZEHy-4sl3tG'));
const STRICTERDOM_ENABLED = config_DEBUG && !IS_PACKAGED_ELECTRON;
const DEBUG_ALERT_MSG = 'Shoot!\nSomething went wrong, please see the error details in Dev Tools Console.';
const PIN_LENGTH = 4;
const NATIVE_BIOMETRICS_USERNAME = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'TonWallet' : 'MyTonWallet'));
const NATIVE_BIOMETRICS_SERVER = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'https://wallet.ton.org' : 'https://mytonwallet.app'));
const IS_BIP39_MNEMONIC_ENABLED = !IS_CORE_WALLET;
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
const GLOBAL_STATE_CACHE_KEY = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tonwallet-global-state' : 'mytonwallet-global-state'));
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
const config_PROXY_API_BASE_URL = (/* unused pure expression or super */ null && ( false || 'https://api.mytonwallet.org/proxy'));
const config_IPFS_GATEWAY_BASE_URL = 'https://ipfs.io/ipfs/';
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
const IS_STAKING_DISABLED = (/* unused pure expression or super */ null && (IS_CORE_WALLET));
const VALIDATION_PERIOD_MS = 65_536_000; // 18.2 h.
const config_ONE_TON = 1_000_000_000n;
const DEFAULT_FEE = 15_000_000n; // 0.015 TON
const UNSTAKE_TON_GRACE_PERIOD = (/* unused pure expression or super */ null && (20 * 60 * 1000)); // 20 m.

const STAKING_POOLS =  false ? 0 : [];
const LIQUID_POOL =  false || 'EQD2_4d91M4TVbEBVyBF8J1UwpMJc361LKVCz6bBlffMW05o';
const LIQUID_JETTON = (/* unused pure expression or super */ null && ( false || 'EQCqC6EhRJ_tpWngKxL6dV0k6DSnRUrs9GSVkLbfdCqsj6TE'));
const STAKING_MIN_AMOUNT = (/* unused pure expression or super */ null && (config_ONE_TON));
const NOMINATORS_STAKING_MIN_AMOUNT = 10_000n * config_ONE_TON;
const MIN_ACTIVE_STAKING_REWARDS = 100_000_000n; // 0.1 MY

const TONCONNECT_PROTOCOL_VERSION = 2;
const TONCONNECT_WALLET_JSBRIDGE_KEY = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tonwallet' : 'mytonwallet'));
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
const config_TONCOIN = {
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
    nativeToken: config_TONCOIN
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
const SWAP_CROSSCHAIN_SLUGS = new Set([config_TONCOIN.slug, TON_USDT_SLUG, TRX.slug, TRC20_USDT_MAINNET_SLUG]);
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
const DEFAULT_ENABLED_TOKEN_SLUGS = [config_TONCOIN.slug, TON_USDT_SLUG, TRX.slug, TRC20_USDT_TESTNET_SLUG, TRC20_USDT_MAINNET_SLUG];

// Toncoin, USDT TON, TRX, USDT TRC20
const DEFAULT_ENABLED_TOKEN_COUNT = 4;
const PRIORITY_TOKEN_SLUGS = [config_TONCOIN.slug, TON_USDT_SLUG, TRX.slug];
const COMMON_TOKEN = {
  isFromBackend: true,
  price: 0,
  priceUsd: 0,
  percentChange24h: 0
};
const TOKEN_INFO = {
  toncoin: {
    ...config_TONCOIN,
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
    symbol: config_TONCOIN.symbol,
    chain: config_TONCOIN.chain,
    slug: config_TONCOIN.slug,
    decimals: config_TONCOIN.decimals,
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
const DEFAULT_TRX_SWAP_FIRST_TOKEN_SLUG = config_TONCOIN.slug;
const DEFAULT_SWAP_FIRST_TOKEN_SLUG = config_TONCOIN.slug;
const DEFAULT_SWAP_SECOND_TOKEN_SLUG = (/* unused pure expression or super */ null && (TON_USDT_SLUG));
const DEFAULT_TRANSFER_TOKEN_SLUG = config_TONCOIN.slug;
const DEFAULT_CEX_SWAP_SECOND_TOKEN_SLUG = (/* unused pure expression or super */ null && (TRC20_USDT_MAINNET_SLUG));
const SWAP_DEX_LABELS = {
  dedust: 'DeDust',
  ston: 'STON.fi'
};
const MULTITAB_DATA_CHANNEL_NAME = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tw-multitab' : 'mtw-multitab'));
const ACTIVE_TAB_STORAGE_KEY = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tw-active-tab' : 'mtw-active-tab'));
const INDEXED_DB_NAME = 'keyval-store';
const INDEXED_DB_STORE_NAME = 'keyval';
const WINDOW_PROVIDER_CHANNEL = 'windowProvider';
const WINDOW_PROVIDER_PORT = (/* unused pure expression or super */ null && (`${IS_CORE_WALLET ? 'TonWallet' : 'MyTonWallet'}_popup_reversed`));
const SHOULD_SHOW_ALL_ASSETS_AND_ACTIVITY = (/* unused pure expression or super */ null && (IS_CORE_WALLET));
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
  [config_TONCOIN.symbol]: {
    name: 'Toncoin',
    decimals: 9
  }
};
const BURN_ADDRESS = 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ';
const DEFAULT_WALLET_VERSION = 'W5';
const POPULAR_WALLET_VERSIONS = (/* unused pure expression or super */ null && (['v3R1', 'v3R2', 'v4R2', 'W5']));
const LEDGER_WALLET_VERSIONS = (/* unused pure expression or super */ null && (['v3R2', 'v4R2']));
const config_DEFAULT_TIMEOUT = 10000;
const config_DEFAULT_RETRIES = 3;
const config_DEFAULT_ERROR_PAUSE = 500;
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
  tokenSlug: config_TONCOIN.slug,
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
  tokenSlug: config_TONCOIN.slug,
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
const TON_DNS_ZONES = IS_CORE_WALLET ? ALL_TON_DNS_ZONES.filter(_ref => {
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
;// ./src/lib/big.js/index.js
/*
 *  big.js v6.2.1
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2022 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */

/************************************** EDITABLE DEFAULTS *****************************************/

// The default values below must be integers within the stated ranges.

/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */
var DP = 20,
  // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,
  // 0, 1, 2 or 3

  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,
  // 0 to 1000000

  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,
  // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,
  // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
   */
  PE = 21,
  // 0 to 1000000

  /*
   * When true, an error will be thrown if a primitive number is passed to the Big constructor,
   * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
   * primitive number without a loss of precision.
   */
  STRICT = false,
  // true or false

  /**************************************************************************************************/

  // Error messages.
  NAME = '[big.js] ',
  INVALID = NAME + 'Invalid ',
  INVALID_DP = INVALID + 'decimal places',
  INVALID_RM = INVALID + 'rounding mode',
  DIV_BY_ZERO = NAME + 'Division by zero',
  // The shared prototype object.
  P = {},
  UNDEFINED = void 0,
  NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

/*
 * Create and return a Big constructor.
 */
function _Big_() {
  /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */
  function Big(n) {
    var x = this;

    // Enable constructor usage without new.
    if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

    // Duplicate.
    if (n instanceof Big) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      if (typeof n !== 'string') {
        if (Big.strict === true && typeof n !== 'bigint') {
          throw TypeError(INVALID + 'value');
        }

        // Minus zero?
        n = n === 0 && 1 / n < 0 ? '-0' : String(n);
      }
      parse(x, n);
    }

    // Retain a reference to this Big constructor.
    // Shadow Big.prototype.constructor which points to Object.
    x.constructor = Big;
  }
  Big.prototype = P;
  Big.DP = DP;
  Big.RM = RM;
  Big.NE = NE;
  Big.PE = PE;
  Big.strict = STRICT;
  Big.roundDown = 0;
  Big.roundHalfUp = 1;
  Big.roundHalfEven = 2;
  Big.roundUp = 3;
  return Big;
}

/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
  var e, i, nl;
  if (!NUMERIC.test(n)) {
    throw Error(INVALID + 'number');
  }

  // Determine sign.
  x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

  // Decimal point?
  if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

  // Exponential form?
  if ((i = n.search(/e/i)) > 0) {
    // Determine exponent.
    if (e < 0) e = i;
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {
    // Integer.
    e = n.length;
  }
  nl = n.length;

  // Determine leading zeros.
  for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
  if (i == nl) {
    // Zero.
    x.c = [x.e = 0];
  } else {
    // Determine trailing zeros.
    for (; nl > 0 && n.charAt(--nl) == '0';);
    x.e = e - i - 1;
    x.c = [];

    // Convert string to array of digits without leading/trailing zeros.
    for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
  }
  return x;
}

/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, sd, rm, more) {
  var xc = x.c;
  if (rm === UNDEFINED) rm = x.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
    xc.length = 1;
    if (more) {
      // 1, 0.1, 0.01, 0.001, 0.0001 etc.
      x.e = x.e - sd + 1;
      xc[0] = 1;
    } else {
      // Zero.
      xc[0] = x.e = 0;
    }
  } else if (sd < xc.length) {
    // xc[sd] is the digit after the digit that may be rounded up.
    more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);

    // Remove any digits after the required precision.
    xc.length = sd;

    // Round up?
    if (more) {
      // Rounding up may mean the previous digit has to be rounded up.
      for (; ++xc[--sd] > 9;) {
        xc[sd] = 0;
        if (sd === 0) {
          ++x.e;
          xc.unshift(1);
          break;
        }
      }
    }

    // Remove trailing zeros.
    for (sd = xc.length; !xc[--sd];) xc.pop();
  }
  return x;
}

/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */
function stringify(x, doExponential, isNonzero) {
  var e = x.e,
    s = x.c.join(''),
    n = s.length;

  // Exponential notation?
  if (doExponential) {
    s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

    // Normal notation.
  } else if (e < 0) {
    for (; ++e;) s = '0' + s;
    s = '0.' + s;
  } else if (e > 0) {
    if (++e > n) {
      for (e -= n; e--;) s += '0';
    } else if (e < n) {
      s = s.slice(0, e) + '.' + s.slice(e);
    }
  } else if (n > 1) {
    s = s.charAt(0) + '.' + s.slice(1);
  }
  return x.s < 0 && isNonzero ? '-' + s : s;
}

// Prototype/instance methods

/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};

/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */
P.cmp = function (y) {
  var isneg,
    x = this,
    xc = x.c,
    yc = (y = new x.constructor(y)).c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;
  isneg = i < 0;

  // Compare exponents.
  if (k != l) return k > l ^ isneg ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = -1; ++i < j;) {
    if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
  }

  // Compare lengths.
  return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};

/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
  var x = this,
    Big = x.constructor,
    a = x.c,
    // dividend
    b = (y = new Big(y)).c,
    // divisor
    k = x.s == y.s ? 1 : -1,
    dp = Big.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }

  // Divisor is zero?
  if (!b[0]) {
    throw Error(DIV_BY_ZERO);
  }

  // Dividend is 0? Return +-0.
  if (!a[0]) {
    y.s = k;
    y.c = [y.e = 0];
    return y;
  }
  var bl,
    bt,
    n,
    cmp,
    ri,
    bz = b.slice(),
    ai = bl = b.length,
    al = a.length,
    r = a.slice(0, bl),
    // remainder
    rl = r.length,
    q = y,
    // quotient
    qc = q.c = [],
    qi = 0,
    p = dp + (q.e = x.e - y.e) + 1; // precision of the result

  q.s = k;
  k = p < 0 ? 0 : p;

  // Create version of divisor with leading zero.
  bz.unshift(0);

  // Add zeros to make remainder as long as divisor.
  for (; rl++ < bl;) r.push(0);
  do {
    // n is how many times the divisor goes into current remainder.
    for (n = 0; n < 10; n++) {
      // Compare divisor and remainder.
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl;) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      }

      // If divisor < remainder, subtract divisor from remainder.
      if (cmp < 0) {
        // Remainder can't be more than 1 digit longer than divisor.
        // Equalise lengths using divisor with extra leading zero?
        for (bt = rl == bl ? b : bz; rl;) {
          if (r[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r[--ri];) r[ri] = 9;
            --r[ri];
            r[rl] += 10;
          }
          r[rl] -= bt[rl];
        }
        for (; !r[0];) r.shift();
      } else {
        break;
      }
    }

    // Add the digit n to the result array.
    qc[qi++] = cmp ? n : ++n;

    // Update the remainder.
    if (r[0] && cmp) r[rl] = a[ai] || 0;else r = [a[ai]];
  } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

  // Leading zero? Do not remove if result is simply zero (qi == 1).
  if (!qc[0] && qi != 1) {
    // There can't be more than one zero.
    qc.shift();
    q.e--;
    p--;
  }

  // Round?
  if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);
  return q;
};

/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
  return this.cmp(y) === 0;
};

/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
  return this.cmp(y) > 0;
};

/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
  return this.cmp(y) > -1;
};

/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
  return this.cmp(y) < 0;
};

/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
  return this.cmp(y) < 1;
};

/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
  var i,
    j,
    t,
    xlty,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  // Signs differ?
  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }
  var xc = x.c.slice(),
    xe = x.e,
    yc = y.c,
    ye = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y.s = -b;
    } else if (xc[0]) {
      y = new Big(x);
    } else {
      y.s = 1;
    }
    return y;
  }

  // Determine which is the bigger number. Prepend zeros to equalise exponents.
  if (a = xe - ye) {
    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }
    t.reverse();
    for (b = a; b--;) t.push(0);
    t.reverse();
  } else {
    // Exponents equal. Check digit by digit.
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;
    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }

  // x < y? Point xc to the array of the bigger number.
  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }

  /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */
  if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

  // Subtract yc from xc.
  for (b = i; j > a;) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i];) xc[i] = 9;
      --xc[i];
      xc[j] += 10;
    }
    xc[j] -= yc[j];
  }

  // Remove trailing zeros.
  for (; xc[--b] === 0;) xc.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xc[0] === 0;) {
    xc.shift();
    --ye;
  }
  if (!xc[0]) {
    // n - n = +0
    y.s = 1;

    // Result must be zero.
    xc = [ye = 0];
  }
  y.c = xc;
  y.e = ye;
  return y;
};

/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
  var ygtx,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;
  if (!y.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;
  if (ygtx) return new Big(x);
  a = Big.DP;
  b = Big.RM;
  Big.DP = Big.RM = 0;
  x = x.div(y);
  Big.DP = a;
  Big.RM = b;
  return this.minus(x.times(y));
};

/*
 * Return a new Big whose value is the value of this Big negated.
 */
P.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s;
  return x;
};

/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
  var e,
    k,
    t,
    x = this,
    Big = x.constructor;
  y = new Big(y);

  // Signs differ?
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  var xe = x.e,
    xc = x.c,
    ye = y.e,
    yc = y.c;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y = new Big(x);
      } else {
        y.s = x.s;
      }
    }
    return y;
  }
  xc = xc.slice();

  // Prepend zeros to equalise exponents.
  // Note: reverse faster than unshifts.
  if (e = xe - ye) {
    if (e > 0) {
      ye = xe;
      t = yc;
    } else {
      e = -e;
      t = xc;
    }
    t.reverse();
    for (; e--;) t.push(0);
    t.reverse();
  }

  // Point xc to the longer array.
  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }
  e = yc.length;

  // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
  for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;

  // No need to check for zero, as +x + +y != 0 && -x + -y != 0

  if (k) {
    xc.unshift(k);
    ++ye;
  }

  // Remove trailing zeros.
  for (e = xc.length; xc[--e] === 0;) xc.pop();
  y.c = xc;
  y.e = ye;
  return y;
};

/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
  var x = this,
    one = new x.constructor('1'),
    y = one,
    isneg = n < 0;
  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
    throw Error(INVALID + 'exponent');
  }
  if (isneg) n = -n;
  for (;;) {
    if (n & 1) y = y.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }
  return isneg ? one.div(y) : y;
};

/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.prec = function (sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + 'precision');
  }
  return round(new this.constructor(this), sd, rm);
};

/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.round = function (dp, rm) {
  if (dp === UNDEFINED) dp = 0;else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};

/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
  var r,
    c,
    t,
    x = this,
    Big = x.constructor,
    s = x.s,
    e = x.e,
    half = new Big('0.5');

  // Zero?
  if (!x.c[0]) return new Big(x);

  // Negative?
  if (s < 0) {
    throw Error(NAME + 'No square root');
  }

  // Estimate.
  s = Math.sqrt(x + '');

  // Math.sqrt underflow/overflow?
  // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
  if (s === 0 || s === 1 / 0) {
    c = x.c.join('');
    if (!(c.length + e & 1)) c += '0';
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
  } else {
    r = new Big(s + '');
  }
  e = r.e + (Big.DP += 4);

  // Newton-Raphson iteration.
  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
  return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};

/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
  var c,
    x = this,
    Big = x.constructor,
    xc = x.c,
    yc = (y = new Big(y)).c,
    a = xc.length,
    b = yc.length,
    i = x.e,
    j = y.e;

  // Determine sign of result.
  y.s = x.s == y.s ? 1 : -1;

  // Return signed 0 if either 0.
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }

  // Initialise exponent of result as x.e + y.e.
  y.e = i + j;

  // If array xc has fewer digits than yc, swap xc and yc, and lengths.
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }

  // Initialise coefficient array of result with zeros.
  for (c = new Array(j = a + b); j--;) c[j] = 0;

  // Multiply.

  // i is initially xc.length.
  for (i = b; i--;) {
    b = 0;

    // a is yc.length.
    for (j = a + i; j > i;) {
      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;

      // carry
      b = b / 10 | 0;
    }
    c[j] = b;
  }

  // Increment result exponent if there is a final carry, otherwise remove leading zero.
  if (b) ++y.e;else c.shift();

  // Remove trailing zeros.
  for (i = c.length; !c[--i];) c.pop();
  y.c = c;
  return y;
};

/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toExponential = function (dp, rm) {
  var x = this,
    n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), ++dp, rm);
    for (; x.c.length < dp;) x.c.push(0);
  }
  return stringify(x, true, !!n);
};

/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp, rm) {
  var x = this,
    n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), dp + x.e + 1, rm);

    // x.e may have changed if the value is rounded up.
    for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
  }
  return stringify(x, false, !!n);
};

/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P[Symbol.for('nodejs.util.inspect.custom')] = P.toJSON = P.toString = function () {
  var x = this,
    Big = x.constructor;
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};

/*
 * Return the value of this Big as a primitve number.
 */
P.toNumber = function () {
  var n = Number(stringify(this, true, true));
  if (this.constructor.strict === true && !this.eq(n.toString())) {
    throw Error(NAME + 'Imprecise conversion');
  }
  return n;
};

/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toPrecision = function (sd, rm) {
  var x = this,
    Big = x.constructor,
    n = x.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + 'precision');
    }
    x = round(new Big(x), sd, rm);
    for (; x.c.length < sd;) x.c.push(0);
  }
  return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};

/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = function () {
  var x = this,
    Big = x.constructor;
  if (Big.strict === true) {
    throw Error(NAME + 'valueOf disallowed');
  }
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};

// Export

var big_js_Big = _Big_();

/// <reference types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/big.js/index.d.ts" />
/* harmony default export */ const big_js = ((/* unused pure expression or super */ null && (big_js_Big)));
;// ./src/util/decimals.ts


big_js_Big.RM = 0; // RoundDown
big_js_Big.NE = -100000; // Disable exponential form
big_js_Big.PE = 100000; // Disable exponential form

const ten = big_js_Big(10);
function decimals_fromDecimal(value, decimals) {
  return BigInt(Big(value).mul(ten.pow(decimals ?? TONCOIN.decimals)).round().toString());
}
function toDecimal(value, decimals) {
  let noFloor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return toBig(value, decimals ?? TONCOIN.decimals, noFloor).toString();
}
function toBig(value) {
  let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TONCOIN.decimals;
  let noFloor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return Big(value.toString()).div(ten.pow(decimals)).round(decimals, noFloor ? Big.roundHalfUp : undefined);
}
function roundDecimal(value, decimals) {
  return Big(value).round(decimals).toString();
}
;// ./src/util/random.ts
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function sample(arr) {
  return arr[random(0, arr.length - 1)];
}
function random_randomBytes(size) {
  return self.crypto.getRandomValues(new Uint8Array(size));
}
function randomBase64(byteSize) {
  return Buffer.from(random_randomBytes(byteSize)).toString('base64');
}
;// ./src/util/bigint.ts



const bigint_BIGINT_PREFIX = 'bigint:';
function bigintReviver(key, value) {
  if (typeof value === 'string' && value.startsWith(bigint_BIGINT_PREFIX)) {
    return BigInt(value.slice(7));
  }
  return value;
}
function bigintAbs(value) {
  return value === -0n || value < 0n ? -value : value;
}
function bigintSum(values) {
  let result = 0n;
  for (const value of values) result += value;
  return result;
}
function bigintDivideToNumber(value, num) {
  return value * ONE_TON / fromDecimal(num);
}
function bigintMultiplyToNumber(value, num) {
  return value * fromDecimal(num) / ONE_TON;
}
function bigintRandom(bytes) {
  let value = BigInt(0);
  for (const randomNumber of randomBytes(bytes)) {
    const randomBigInt = BigInt(randomNumber);
    value = (value << BigInt(8)) + randomBigInt;
  }
  return value;
}
function bigintCountBits(value) {
  const binaryString = value.toString(2);
  return binaryString.length;
}
function bigintMax(value0, value1) {
  return value0 > value1 ? value0 : value1;
}
function bigintMin(value0, value1) {
  return value0 < value1 ? value0 : value1;
}
function bigintMultiplePercent(value, percent) {
  return value * fromDecimal(percent / 100) / ONE_TON;
}
;// ./src/util/extensionMessageSerializer.ts

const UNDEFINED_PREFIX = 'undefined:';
function extensionMessageReplacer(key, value) {
  if (value === undefined) {
    return `${UNDEFINED_PREFIX}marker`;
  }

  // Bigint is replaced by patching `toJSON` method

  return value;
}
function extensionMessageReviver(key, value) {
  // Handle bigint values
  if (typeof value === 'string' && value.startsWith(BIGINT_PREFIX)) {
    return BigInt(value.slice(BIGINT_PREFIX.length));
  }

  // Handle undefined values
  if (typeof value === 'string' && value.startsWith(UNDEFINED_PREFIX)) {
    return undefined;
  }
  return value;
}
function extensionMessageSerializer_encodeExtensionMessage(data) {
  return JSON.stringify(data, extensionMessageReplacer);
}
function extensionMessageSerializer_decodeExtensionMessage(data) {
  if (typeof data === 'string') {
    return JSON.parse(data, extensionMessageReviver);
  }
  return data;
}
;// ./src/util/assert.ts
class AssertionError extends Error {
  constructor(message,
  // Any additional information for the error to help debug it. Don't put sensitive information here.
  metadata) {
    super(message);
    this.metadata = metadata;
  }
}
function assert(condition, message, metadata) {
  if (!condition) {
    throw new AssertionError(message, metadata);
  }
}
;// ./src/util/logs.ts


const MAX_LOG_LENGTH = 999;
const logs = [];
function errorReplacer(_, value) {
  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
      stack: value.stack,
      metadata: value instanceof AssertionError ? value.metadata : undefined
    };
  }
  return value;
}
function addLog(log) {
  if (logs.length > MAX_LOG_LENGTH) {
    logs.shift();
  }
  logs.push({
    ...log,
    args: log.args.map(arg => JSON.stringify(arg, errorReplacer)),
    time: Date.now()
  });
}
function getLogs() {
  return logs;
}
function logDebugError(message) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  addLog({
    message,
    level: 'debugError',
    args
  });
  if (config_DEBUG) {
    // eslint-disable-next-line no-console
    console.error(`[DEBUG][${message}]`, ...args);
  }
}
function logs_logDebug(message) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  addLog({
    message,
    level: 'debug',
    args
  });
  if (DEBUG) {
    // eslint-disable-next-line no-console
    console.log(`[DEBUG] ${message}`, ...args);
  }
}
function logDebugApi(message, obj1, obj2) {
  if (DEBUG_API) {
    // eslint-disable-next-line no-console
    console.debug(`[DEBUG] ${message}`);
    // eslint-disable-next-line no-console
    if (obj1) console.dir(obj1);
    // eslint-disable-next-line no-console
    if (obj2) console.dir(obj2);
  }
}
function logSelfXssWarnings() {
  const selfXssWarnings = {
    en: 'WARNING! This console can be a way for bad people to take over your crypto wallet through something called ' + 'a Self-XSS attack. So, don\'t put in or paste code you don\'t understand. Stay safe!',
    ru: 'ВНИМАНИЕ! Через эту консоль злоумышленники могут захватить ваш криптовалютный кошелёк с помощью так ' + 'называемой атаки Self-XSS. Поэтому не вводите и не вставляйте код, который вы не понимаете. Берегите себя!',
    es: '¡ADVERTENCIA! Esta consola puede ser una forma en que las personas malintencionadas se apoderen de su ' + 'billetera de criptomonedas mediante un ataque llamado Self-XSS. Por lo tanto, ' + 'no introduzca ni pegue código que no comprenda. ¡Cuídese!',
    zh: '警告！这个控制台可能成为坏人通过所谓的Self-XSS攻击来接管你的加密货币钱包的方式。因此，请不要输入或粘贴您不理解的代码。请保护自己！'
  };
  const langCode = navigator.language.split('-')[0];
  const text = selfXssWarnings[langCode] || selfXssWarnings.en;

  // eslint-disable-next-line no-console
  console.log('%c%s', 'color: red; background: yellow; font-size: 18px;', text);
}
;// ./src/util/createPostMessageInterface.ts


const callbackState = new Map();
/**
 * Provides functions, defined in this messenger (a window, a worker), to another messenger.
 * The other messenger can call the functions using `createConnector`.
 */
function createPostMessageInterface(api, channel) {
  let target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : self;
  let shouldIgnoreErrors = arguments.length > 3 ? arguments[3] : undefined;
  function sendToOrigin(data, transferables) {
    data.channel = channel;
    if (transferables) {
      target.postMessage(data, transferables);
    } else {
      target.postMessage(data);
    }
  }
  if (!shouldIgnoreErrors) {
    handleErrors(sendToOrigin);
  }
  function handleMessage(e) {
    var _e$data;
    if (((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.channel) === channel) {
      void onMessage(api, e.data, sendToOrigin);
    }
  }

  // Correct for any target, but TypeScript weirdly complains
  target.addEventListener('message', handleMessage);
  return () => {
    target.removeEventListener('message', handleMessage);
  };
}

/**
 * Provides functions, defined in the main window, to an IFrame.
 */
function createReverseIFrameInterface(api, targetOrigin, target, channel) {
  function sendToOrigin(data, transferables) {
    data.channel = channel;
    if (transferables) {
      throw new Error('Cannot send `Transferable` to `Window`');
    } else {
      target.postMessage(data, targetOrigin);
    }
  }
  function handleMessage(e) {
    var _e$data2;
    if (targetOrigin && e.origin !== targetOrigin) return;
    if (((_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.channel) === channel) {
      void onMessage(api, e.data, sendToOrigin);
    }
  }
  window.addEventListener('message', handleMessage);
  return () => {
    window.removeEventListener('message', handleMessage);
  };
}

/**
 * Provides functions, defined in this extension service worker, to a window.
 * The window can call the functions using `createExtensionConnector`.
 */
function createExtensionInterface(portName, api, channel, cleanUpdater) {
  let withAutoInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  chrome.runtime.onConnect.addListener(port => {
    var _port$sender;
    if (port.name !== portName) {
      return;
    }
    const url = (_port$sender = port.sender) === null || _port$sender === void 0 ? void 0 : _port$sender.url;
    const origin = url ? new URL(url).origin : undefined;
    const dAppUpdater = update => {
      sendToOrigin({
        type: 'update',
        update
      });
    };
    function sendToOrigin(data) {
      data.channel = channel;
      port.postMessage(encodeExtensionMessage(data));
    }
    handleErrors(sendToOrigin);
    port.onMessage.addListener(data => {
      data = decodeExtensionMessage(data);
      if (data.channel === channel) {
        void onMessage(api, data, sendToOrigin, dAppUpdater, origin);
      }
    });
    port.onDisconnect.addListener(() => {
      cleanUpdater === null || cleanUpdater === void 0 || cleanUpdater(dAppUpdater);
    });
    if (withAutoInit) {
      void onMessage(api, {
        type: 'init',
        args: []
      }, sendToOrigin, dAppUpdater);
    }
  });
}

/**
 * Provides functions, defined in this window, to the extension service worker.
 * The service worker can call the functions using `createReverseExtensionConnector`.
 */
function createReverseExtensionInterface(portName, api) {
  let port;
  function sendToServiceWorker(data) {
    port.postMessage(encodeExtensionMessage(data));
  }
  function connect() {
    port = chrome.runtime.connect({
      name: portName
    });
    port.onMessage.addListener(data => {
      data = decodeExtensionMessage(data);
      void onMessage(api, data, sendToServiceWorker);
    });

    // For some reason port can suddenly get disconnected
    port.onDisconnect.addListener(() => {
      connect();
    });
  }
  connect();
}
async function onMessage(api, data, sendToOrigin, onUpdate, origin) {
  if (!onUpdate) {
    onUpdate = update => {
      sendToOrigin({
        type: 'update',
        update
      });
    };
  }
  switch (data.type) {
    case 'init':
      {
        var _api$init;
        const {
          args
        } = data;
        const promise = typeof api === 'function' ? api('init', origin, onUpdate, ...args) : (_api$init = api.init) === null || _api$init === void 0 ? void 0 : _api$init.call(api, onUpdate, ...args);
        await promise;
        break;
      }
    case 'callMethod':
      {
        const {
          messageId,
          name,
          args,
          withCallback
        } = data;
        try {
          // This method is probably from another worker
          if (typeof api !== 'function' && !api[name]) return;
          if (messageId && withCallback) {
            const callback = function () {
              for (var _len = arguments.length, callbackArgs = new Array(_len), _key = 0; _key < _len; _key++) {
                callbackArgs[_key] = arguments[_key];
              }
              const lastArg = callbackArgs[callbackArgs.length - 1];
              sendToOrigin({
                type: 'methodCallback',
                messageId,
                callbackArgs
              }, isTransferable(lastArg) ? [lastArg] : undefined);
            };
            callbackState.set(messageId, callback);
            args.push(callback);
          }
          const response = typeof api === 'function' ? await api(name, origin, ...args) : await api[name](...args);
          const {
            arrayBuffer
          } = typeof response === 'object' && response && 'arrayBuffer' in response || {};
          if (messageId) {
            sendToOrigin({
              type: 'methodResponse',
              messageId,
              response
            }, arrayBuffer ? [arrayBuffer] : undefined);
          }
        } catch (err) {
          logDebugError(name, err);
          if (messageId) {
            sendToOrigin({
              type: 'methodResponse',
              messageId,
              error: {
                message: err.message
              }
            });
          }
        }
        if (messageId) {
          callbackState.delete(messageId);
        }
        break;
      }
    case 'cancelProgress':
      {
        const callback = callbackState.get(data.messageId);
        if (callback) {
          callback.isCanceled = true;
        }
        break;
      }
  }
}
function isTransferable(obj) {
  return obj instanceof ArrayBuffer || obj instanceof ImageBitmap;
}
function handleErrors(sendToOrigin) {
  self.onerror = e => {
    var _e$error, _e$error2;
    const message = ((_e$error = e.error) === null || _e$error === void 0 ? void 0 : _e$error.message) || 'Uncaught exception in worker';
    logDebugError(message, e.error);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message,
        stack: (_e$error2 = e.error) === null || _e$error2 === void 0 ? void 0 : _e$error2.stack
      }
    });
  };
  self.addEventListener('unhandledrejection', e => {
    var _e$reason, _e$reason2;
    const message = ((_e$reason = e.reason) === null || _e$reason === void 0 ? void 0 : _e$reason.message) || 'Unhandled rejection in worker';
    logDebugError(message, e.reason);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message,
        stack: (_e$reason2 = e.reason) === null || _e$reason2 === void 0 ? void 0 : _e$reason2.stack
      }
    });
  });
}
;// ./src/api/types/misc.ts
/**
 * The `fee` field should contain the final (real) fee, because we want to show the real fee in local transactions
 */

let ApiLiquidUnstakeMode = /*#__PURE__*/function (ApiLiquidUnstakeMode) {
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["Default"] = 0] = "Default";
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["Instant"] = 1] = "Instant";
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["BestRate"] = 2] = "BestRate";
  return ApiLiquidUnstakeMode;
}({});

// Country codes from ISO-3166-1 spec

/** Each string value can be either an address or a domain name */
;// ./src/api/types/errors.ts
let ApiCommonError = /*#__PURE__*/function (ApiCommonError) {
  ApiCommonError["Unexpected"] = "Unexpected";
  ApiCommonError["ServerError"] = "ServerError";
  ApiCommonError["DebugError"] = "DebugError";
  ApiCommonError["UnsupportedVersion"] = "UnsupportedVersion";
  return ApiCommonError;
}({});
let ApiAuthError = /*#__PURE__*/function (ApiAuthError) {
  ApiAuthError["InvalidMnemonic"] = "InvalidMnemonic";
  ApiAuthError["InvalidAddress"] = "InvalidAddress";
  ApiAuthError["DomainNotResolved"] = "DomainNotResolved";
  return ApiAuthError;
}({});
let ApiTransactionDraftError = /*#__PURE__*/function (ApiTransactionDraftError) {
  ApiTransactionDraftError["InvalidAmount"] = "InvalidAmount";
  ApiTransactionDraftError["InvalidToAddress"] = "InvalidToAddress";
  ApiTransactionDraftError["InsufficientBalance"] = "InsufficientBalance";
  ApiTransactionDraftError["InvalidStateInit"] = "InvalidStateInit";
  ApiTransactionDraftError["StateInitWithoutBin"] = "StateInitWithoutBin";
  ApiTransactionDraftError["DomainNotResolved"] = "DomainNotResolved";
  ApiTransactionDraftError["WalletNotInitialized"] = "WalletNotInitialized";
  ApiTransactionDraftError["InvalidAddressFormat"] = "InvalidAddressFormat";
  ApiTransactionDraftError["InactiveContract"] = "InactiveContract";
  return ApiTransactionDraftError;
}({});
let ApiTransactionError = /*#__PURE__*/function (ApiTransactionError) {
  ApiTransactionError["PartialTransactionFailure"] = "PartialTransactionFailure";
  ApiTransactionError["IncorrectDeviceTime"] = "IncorrectDeviceTime";
  ApiTransactionError["InsufficientBalance"] = "InsufficientBalance";
  ApiTransactionError["UnsuccesfulTransfer"] = "UnsuccesfulTransfer";
  ApiTransactionError["NotSupportedHardwareOperation"] = "NotSupportedHardwareOperation";
  ApiTransactionError["HardwareBlindSigningNotEnabled"] = "HardwareBlindSigningNotEnabled";
  ApiTransactionError["WrongAddress"] = "WrongAddress";
  ApiTransactionError["WrongNetwork"] = "WrongNetwork";
  return ApiTransactionError;
}({});
;// ./src/api/types/index.ts










;// ./src/api/errors.ts

class ApiBaseError extends Error {
  constructor(message, displayError) {
    super(message);
    this.displayError = displayError;
    this.name = this.constructor.name;
  }
}
class ApiUserRejectsError extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Canceled by the user';
    super(message);
  }
}
class errors_ApiServerError extends ApiBaseError {
  constructor(message, statusCode) {
    super(message, ApiCommonError.ServerError);
    this.statusCode = statusCode;
  }
}
class ApiUnsupportedVersionError extends ApiBaseError {
  constructor(message) {
    super(message, ApiCommonError.UnsupportedVersion);
  }
}
class ApiHardwareBlindSigningNotEnabled extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Blind signing not enabled';
    super(message, ApiTransactionError.HardwareBlindSigningNotEnabled);
  }
}
class AbortOperationError extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Abort operation';
    super(message);
  }
}
class NotImplemented extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Not implemented';
    super(message);
  }
}
function maybeApiErrors(fn) {
  return async function () {
    try {
      return await fn(...arguments);
    } catch (err) {
      return handleServerError(err);
    }
  };
}
function handleServerError(err) {
  if (err instanceof errors_ApiServerError) {
    return {
      error: err.displayError
    };
  }
  throw err;
}
;// ./src/util/fetch.ts




const MAX_TIMEOUT = 30000; // 30 sec

function fetchJsonWithProxy(url, data, init) {
  return fetchJson(getProxiedJsonUrl(url.toString()), data, init);
}
async function fetchJson(url, data, init) {
  const urlObject = new URL(url);
  if (data) {
    Object.entries(data).forEach(_ref => {
      let [key, value] = _ref;
      if (value === undefined) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach(item => {
          urlObject.searchParams.append(key, item.toString());
        });
      } else {
        urlObject.searchParams.set(key, value.toString());
      }
    });
  }
  const response = await fetchWithRetry(urlObject, init);
  return response.json();
}
async function fetchWithRetry(url, init, options) {
  const {
    retries = DEFAULT_RETRIES,
    timeouts = DEFAULT_TIMEOUT,
    shouldSkipRetryFn = isNotTemporaryError
  } = options ?? {};
  let message = 'Unknown error.';
  let statusCode;
  for (let i = 1; i <= retries; i++) {
    try {
      if (i > 1) {
        logDebug(`Retry request #${i}:`, url.toString(), statusCode);
      }
      const timeout = Array.isArray(timeouts) ? timeouts[i - 1] ?? timeouts[timeouts.length - 1] : Math.min(timeouts * i, MAX_TIMEOUT);
      const response = await fetchWithTimeout(url, init, timeout);
      statusCode = response.status;
      if (statusCode >= 400) {
        const {
          error
        } = await response.json().catch(() => {});
        throw new Error(error ?? `HTTP Error ${statusCode}`);
      }
      return response;
    } catch (err) {
      message = typeof err === 'string' ? err : err.message ?? message;
      const shouldSkipRetry = shouldSkipRetryFn(message, statusCode);
      if (shouldSkipRetry) {
        throw new ApiServerError(message, statusCode);
      }
      if (i < retries) {
        await pause(DEFAULT_ERROR_PAUSE * i);
      }
    }
  }
  throw new ApiServerError(message);
}
async function fetchWithTimeout(url, init) {
  let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config_DEFAULT_TIMEOUT;
  const controller = new AbortController();
  const id = setTimeout(() => {
    controller.abort();
  }, timeout);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal
    });
  } finally {
    clearTimeout(id);
  }
}
async function handleFetchErrors(response, ignoreHttpCodes) {
  if (!response.ok && !(ignoreHttpCodes !== null && ignoreHttpCodes !== void 0 && ignoreHttpCodes.includes(response.status))) {
    // eslint-disable-next-line prefer-const
    let {
      error,
      errors
    } = await response.json().catch(() => undefined);
    if (!error && errors && errors.length) {
      var _errors$;
      error = (_errors$ = errors[0]) === null || _errors$ === void 0 ? void 0 : _errors$.msg;
    }
    throw new ApiServerError(error ?? `HTTP Error ${response.status}`, response.status);
  }
  return response;
}
function isNotTemporaryError(message, statusCode) {
  return statusCode && [400, 404].includes(statusCode);
}
function getProxiedJsonUrl(url) {
  return `${PROXY_API_BASE_URL}/download-json?url=${encodeURIComponent(url)}`;
}
function getProxiedLottieUrl(url) {
  return `${PROXY_API_BASE_URL}/download-lottie?url=${encodeURIComponent(url)}`;
}
function fixIpfsUrl(url) {
  return url.replace('ipfs://', IPFS_GATEWAY_BASE_URL);
}
;// ./src/lib/rlottie/rlottie.worker.ts




try {
  self.importScripts('rlottie-wasm.js');
} catch (err) {
  throw new Error('Failed to import rlottie-wasm.js');
}
let rLottieApi;
const rLottieApiPromise = new Promise(resolve => {
  Module.onRuntimeInitialized = () => {
    rLottieApi = {
      init: Module.cwrap('lottie_init', '', []),
      destroy: Module.cwrap('lottie_destroy', '', ['number']),
      resize: Module.cwrap('lottie_resize', '', ['number', 'number', 'number']),
      buffer: Module.cwrap('lottie_buffer', 'number', ['number']),
      render: Module.cwrap('lottie_render', '', ['number', 'number']),
      loadFromData: Module.cwrap('lottie_load_from_data', 'number', ['number', 'number'])
    };
    resolve();
  };
});
const HIGH_PRIORITY_MAX_FPS = 60;
const LOW_PRIORITY_MAX_FPS = 30;
const DESTROY_REPEAT_DELAY = 1000;
const LOTTIE_JSON_STUB = '{"tgs":1,"w":16,"h":16,"layers":[]}';
const renderers = new Map();
async function init(key, tgsUrl, imgSize, isLowPriority, customColor, onInit) {
  if (!rLottieApi) {
    await rLottieApiPromise;
  }
  const json = await extractJson(tgsUrl);
  const stringOnWasmHeap = allocate(intArrayFromString(json), 'i8', 0);
  const handle = rLottieApi.init();
  const framesCount = rLottieApi.loadFromData(handle, stringOnWasmHeap);
  rLottieApi.resize(handle, imgSize, imgSize);
  const imageData = new ImageData(imgSize, imgSize);
  const {
    reduceFactor,
    msPerFrame,
    reducedFramesCount
  } = calcParams(json, isLowPriority, framesCount);
  renderers.set(key, {
    imgSize,
    reduceFactor,
    handle,
    imageData,
    customColor
  });
  onInit(reduceFactor, msPerFrame, reducedFramesCount);
}
async function changeData(key, tgsUrl, isLowPriority, onInit) {
  if (!rLottieApi) {
    await rLottieApiPromise;
  }
  const json = await extractJson(tgsUrl);
  const stringOnWasmHeap = allocate(intArrayFromString(json), 'i8', 0);
  const {
    handle
  } = renderers.get(key);
  const framesCount = rLottieApi.loadFromData(handle, stringOnWasmHeap);
  const {
    reduceFactor,
    msPerFrame,
    reducedFramesCount
  } = calcParams(json, isLowPriority, framesCount);
  onInit(reduceFactor, msPerFrame, reducedFramesCount);
}
async function extractJson(tgsUrl) {
  var _response$headers$get;
  const response = await fetchWithTimeout(tgsUrl);
  if (!response.ok) {
    return LOTTIE_JSON_STUB;
  }
  const contentType = (_response$headers$get = response.headers.get('Content-Type')) === null || _response$headers$get === void 0 ? void 0 : _response$headers$get.split(';')[0];
  if (contentType === 'application/json') {
    return response.text();
  }
  try {
    const arrayBuffer = await response.arrayBuffer();
    const inflated = await ungzip(arrayBuffer);
    return new TextDecoder().decode(inflated);
  } catch (err) {
    logDebugError('[extractJson] decompression error:', err === null || err === void 0 ? void 0 : err.message, err);
    return LOTTIE_JSON_STUB;
  }
}
function calcParams(json, isLowPriority, framesCount) {
  const animationData = JSON.parse(json);
  const maxFps = isLowPriority ? LOW_PRIORITY_MAX_FPS : HIGH_PRIORITY_MAX_FPS;
  const sourceFps = animationData.fr || maxFps;
  const reduceFactor = sourceFps % maxFps === 0 ? sourceFps / maxFps : 1;
  return {
    reduceFactor,
    msPerFrame: 1000 / (sourceFps / reduceFactor),
    reducedFramesCount: Math.ceil(framesCount / reduceFactor)
  };
}
async function renderFrames(key, frameIndex, onProgress) {
  if (!rLottieApi) {
    await rLottieApiPromise;
  }
  const {
    imgSize,
    reduceFactor,
    handle,
    imageData,
    customColor
  } = renderers.get(key);
  const realIndex = frameIndex * reduceFactor;
  rLottieApi.render(handle, realIndex);
  const bufferPointer = rLottieApi.buffer(handle);
  const data = Module.HEAPU8.subarray(bufferPointer, bufferPointer + imgSize * imgSize * 4);
  if (customColor) {
    const arr = new Uint8ClampedArray(data);
    applyColor(arr, customColor);
    imageData.data.set(arr);
  } else {
    imageData.data.set(data);
  }
  const imageBitmap = await createImageBitmap(imageData);
  onProgress(frameIndex, imageBitmap);
}
function applyColor(arr, color) {
  for (let i = 0; i < arr.length; i += 4) {
    arr[i] = color[0];
    arr[i + 1] = color[1];
    arr[i + 2] = color[2];
  }
}
function destroy(key) {
  let isRepeated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  try {
    const renderer = renderers.get(key);
    rLottieApi.destroy(renderer.handle);
    renderers.delete(key);
  } catch (err) {
    // `destroy` sometimes can be called before the initialization is finished
    if (!isRepeated) {
      setTimeout(() => destroy(key, true), DESTROY_REPEAT_DELAY);
    }
  }
}
const api = {
  'rlottie:init': init,
  'rlottie:changeData': changeData,
  'rlottie:renderFrames': renderFrames,
  'rlottie:destroy': destroy
};
createPostMessageInterface(api);
;// ./src/util/accentColor/constants.ts
const COLOR_COUNT = 2;
const QUALITY = 1;
const ACCENT_COLORS = {
  light: ['#31AFC7', '#35C759', '#FF9500', '#FF2C55', '#AF52DE', '#5856D7', '#73AAED', '#FFB07A', '#B76C78', '#9689D1', '#E572CC', '#6BA07A', '#338FCC', '#1FC863', '#929395', '#E4B102', '#000000'],
  dark: ['#3AB5CC', '#32D74B', '#FF9F0B', '#FF325A', '#BF5AF2', '#7977FF', '#73AAED', '#FFB07A', '#B76C78', '#9689D1', '#E572CC', '#6BA07A', '#338FCC', '#2CD36F', '#C3C5C6', '#DDBA00', '#FFFFFF']
};
const ACCENT_RADIOACTIVE_INDEX = 13;
const ACCENT_SILVER_INDEX = 14;
const ACCENT_GOLD_INDEX = 15;
const ACCENT_BNW_INDEX = 16;
const excludedIndices = new Set([ACCENT_RADIOACTIVE_INDEX, ACCENT_SILVER_INDEX, ACCENT_GOLD_INDEX, ACCENT_BNW_INDEX]);
const COLORS_TO_DETECT = ACCENT_COLORS.light.map((color, index) => ({
  color,
  index
})).filter(_ref => {
  let {
    index
  } = _ref;
  return !excludedIndices.has(index);
});
;// ./src/util/colors.ts
function hex2rgb(param) {
  const hex = param.replace('#', '');
  return [parseInt(hex.substring(0, 2), 16), parseInt(hex.substring(2, 4), 16), parseInt(hex.substring(4, 6), 16)];
}
function rgbToHex(rgb) {
  return `#${rgb.map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }).join('')}`;
}
function euclideanDistance(color1, color2) {
  const r = 0.3 * (color1[0] - color2[0]) ** 2;
  const g = 0.59 * (color1[1] - color2[1]) ** 2;
  const b = 0.11 * (color1[2] - color2[2]) ** 2;
  return Math.sqrt(r + g + b);
}
function rgbToLab(rgb) {
  let [r, g, b] = rgb.map(value => value / 255);
  [r, g, b] = [r, g, b].map(value => value > 0.04045 ? ((value + 0.055) / 1.055) ** 2.4 : value / 12.92);
  let x = r * 0.4124 + g * 0.3576 + b * 0.1805;
  let y = r * 0.2126 + g * 0.7152 + b * 0.0722;
  let z = r * 0.0193 + g * 0.1192 + b * 0.9505;
  [x, y, z] = [x / 0.95047, y, z / 1.08883].map(value => value > 0.008856 ? value ** (1 / 3) : 7.787 * value + 16 / 116);
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

/**
 * Calculates the perceptual difference between two RGB colors.
 *
 * Delta E is a metric for understanding how the human eye perceives color difference.
 * The following table provides a general guideline:
 *
 * Delta E  |  Perception
 * ---------|-------------------------------------------
 * <= 1.0   | Not perceptible by human eyes.
 * 1 - 2    | Perceptible through close observation.
 * 2 - 10   | Perceptible at a glance.
 * 11 - 49  | Colors are more similar than opposite.
 * 100      | Colors are exact opposite.
 *
 * @param rgbA The first color as an RGB array.
 * @param rgbB The second color as an RGB array.
 * @returns The Delta E value representing the color difference.
 */
function deltaE(rgbA, rgbB) {
  const [l1, a1, b1] = rgbToLab(rgbA);
  const [l2, a2, b2] = rgbToLab(rgbB);
  const c1 = Math.sqrt(a1 * a1 + b1 * b1);
  const c2 = Math.sqrt(a2 * a2 + b2 * b2);
  const deltaC = c1 - c2;
  const deltaL = l1 - l2;
  const deltaA = a1 - a2;
  const deltaB = b1 - b2;
  const deltaH = Math.sqrt(deltaA * deltaA + deltaB * deltaB - deltaC * deltaC);
  const sl = 1.0;
  const sc = 1.0 + 0.045 * c1;
  const sh = 1.0 + 0.015 * c1;
  const deltaLKlsl = deltaL / sl;
  const deltaCkcsc = deltaC / sc;
  const deltaHkhsh = deltaH / sh;
  return Math.sqrt(deltaLKlsl * deltaLKlsl + deltaCkcsc * deltaCkcsc + deltaHkhsh * deltaHkhsh);
}
;// ./src/util/getCachedImageUrl.ts

async function getCachedImageUrl(url) {
  const cache = await caches.open(IMAGE_CACHE_NAME);
  const cachedResponse = await cache.match(url);
  if (cachedResponse) {
    const blob = await cachedResponse.blob();
    return URL.createObjectURL(blob);
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Image loading error: ${response.statusText}. URL: ${url}`);
  }
  await cache.put(url, response.clone());
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}
// EXTERNAL MODULE: ./src/lib/quantize.js
var quantize = __webpack_require__(43110);
var quantize_default = /*#__PURE__*/__webpack_require__.n(quantize);
;// ./src/lib/offscreen-canvas/offscreen-canvas.worker.ts






function extractImageData(img) {
  const canvas = new OffscreenCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return ctx.getImageData(0, 0, canvas.width, canvas.height).data;
}
function createPixelArray(imgData, pixelCount, quality) {
  const pixels = imgData;
  const pixelArray = [];
  for (let i = 0, offset, r, g, b, a; i < pixelCount; i += quality) {
    offset = i * 4;
    r = pixels[offset + 0];
    g = pixels[offset + 1];
    b = pixels[offset + 2];
    a = pixels[offset + 3];

    // If pixel is mostly opaque and not white
    if (typeof a === 'undefined' || a >= 125) {
      if (!(r > 250 && g > 250 && b > 250)) {
        pixelArray.push([r, g, b]);
      }
    }
  }
  return pixelArray;
}
function extractPaletteFromImage(img, quality, colorCount) {
  const imageData = extractImageData(img);
  const pixelArray = createPixelArray(imageData, img.width * img.height, quality);
  const cmap = quantize_default()(pixelArray, colorCount);
  return cmap ? cmap.palette() : undefined;
}
async function processNftImage(url, quality, colorCount) {
  let bitmap;
  try {
    const cachedBlobUrl = await getCachedImageUrl(url);
    const response = await fetch(cachedBlobUrl);
    const blob = await response.blob();
    bitmap = await createImageBitmap(blob);
    const palette = extractPaletteFromImage(bitmap, quality, colorCount);
    if (!palette || palette.length === 0) {
      return undefined;
    }
    const dominantRgb = palette[0];
    const distances = COLORS_TO_DETECT.map(_ref => {
      let {
        color
      } = _ref;
      return euclideanDistance(dominantRgb, hex2rgb(color));
    });
    const minDistance = Math.min(...distances);
    const minDistanceIndex = distances.indexOf(minDistance);
    return COLORS_TO_DETECT[minDistanceIndex].index;
  } catch (error) {
    logDebugError('[Worker] Error processing NFT image:', error);
    return undefined;
  } finally {
    if (bitmap) {
      bitmap.close();
    }
  }
}
const offscreen_canvas_worker_api = {
  'offscreen-canvas:processNftImage': processNftImage
};
createPostMessageInterface(offscreen_canvas_worker_api);
;// ./src/lib/mediaWorker/index.worker.ts



/***/ }),

/***/ 43110:
/***/ ((module) => {

/* eslint-disable */

/*
 * quantize.js Copyright 2008 Nick Rabinowitz
 * Ported to node.js by Olivier Lesnicki
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

// fill out a couple protovis dependencies
/*
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 */
if (!pv) {
  var pv = {
    map: function (array, f) {
      var o = {};
      return f ? array.map(function (d, i) {
        o.index = i;
        return f.call(o, d);
      }) : array.slice();
    },
    naturalOrder: function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    sum: function (array, f) {
      var o = {};
      return array.reduce(f ? function (p, d, i) {
        o.index = i;
        return p + f.call(o, d);
      } : function (p, d) {
        return p + d;
      }, 0);
    },
    max: function (array, f) {
      return Math.max.apply(null, f ? pv.map(array, f) : array);
    }
  };
}

/**
 * Basic Javascript port of the MMCQ (modified median cut quantization)
 * algorithm from the Leptonica library (http://www.leptonica.com/).
 * Returns a color map you can use to map original pixels to the reduced
 * palette. Still a work in progress.
 *
 * @author Nick Rabinowitz
 * @example

// array of pixels as [R,G,B] arrays
var myPixels = [[190,197,190], [202,204,200], [207,214,210], [211,214,211], [205,207,207]
                // etc
                ];
var maxColors = 4;

var cmap = MMCQ.quantize(myPixels, maxColors);
var newPalette = cmap.palette();
var newPixels = myPixels.map(function(p) {
    return cmap.map(p);
});

 */
var MMCQ = function () {
  // private constants
  var sigbits = 5,
    rshift = 8 - sigbits,
    maxIterations = 1000,
    fractByPopulations = 0.75;

  // get reduced-space color index for a pixel

  function getColorIndex(r, g, b) {
    return (r << 2 * sigbits) + (g << sigbits) + b;
  }

  // Simple priority queue

  function PQueue(comparator) {
    var contents = [],
      sorted = false;
    function sort() {
      contents.sort(comparator);
      sorted = true;
    }
    return {
      push: function (o) {
        contents.push(o);
        sorted = false;
      },
      peek: function (index) {
        if (!sorted) sort();
        if (index === undefined) index = contents.length - 1;
        return contents[index];
      },
      pop: function () {
        if (!sorted) sort();
        return contents.pop();
      },
      size: function () {
        return contents.length;
      },
      map: function (f) {
        return contents.map(f);
      },
      debug: function () {
        if (!sorted) sort();
        return contents;
      }
    };
  }

  // 3d color space box

  function VBox(r1, r2, g1, g2, b1, b2, histo) {
    var vbox = this;
    vbox.r1 = r1;
    vbox.r2 = r2;
    vbox.g1 = g1;
    vbox.g2 = g2;
    vbox.b1 = b1;
    vbox.b2 = b2;
    vbox.histo = histo;
  }
  VBox.prototype = {
    volume: function (force) {
      var vbox = this;
      if (!vbox._volume || force) {
        vbox._volume = (vbox.r2 - vbox.r1 + 1) * (vbox.g2 - vbox.g1 + 1) * (vbox.b2 - vbox.b1 + 1);
      }
      return vbox._volume;
    },
    count: function (force) {
      var vbox = this,
        histo = vbox.histo;
      if (!vbox._count_set || force) {
        var npix = 0,
          i,
          j,
          k,
          index;
        for (i = vbox.r1; i <= vbox.r2; i++) {
          for (j = vbox.g1; j <= vbox.g2; j++) {
            for (k = vbox.b1; k <= vbox.b2; k++) {
              index = getColorIndex(i, j, k);
              npix += histo[index] || 0;
            }
          }
        }
        vbox._count = npix;
        vbox._count_set = true;
      }
      return vbox._count;
    },
    copy: function () {
      var vbox = this;
      return new VBox(vbox.r1, vbox.r2, vbox.g1, vbox.g2, vbox.b1, vbox.b2, vbox.histo);
    },
    avg: function (force) {
      var vbox = this,
        histo = vbox.histo;
      if (!vbox._avg || force) {
        var ntot = 0,
          mult = 1 << 8 - sigbits,
          rsum = 0,
          gsum = 0,
          bsum = 0,
          hval,
          i,
          j,
          k,
          histoindex;
        for (i = vbox.r1; i <= vbox.r2; i++) {
          for (j = vbox.g1; j <= vbox.g2; j++) {
            for (k = vbox.b1; k <= vbox.b2; k++) {
              histoindex = getColorIndex(i, j, k);
              hval = histo[histoindex] || 0;
              ntot += hval;
              rsum += hval * (i + 0.5) * mult;
              gsum += hval * (j + 0.5) * mult;
              bsum += hval * (k + 0.5) * mult;
            }
          }
        }
        if (ntot) {
          vbox._avg = [~~(rsum / ntot), ~~(gsum / ntot), ~~(bsum / ntot)];
        } else {
          //console.log('empty box');
          vbox._avg = [~~(mult * (vbox.r1 + vbox.r2 + 1) / 2), ~~(mult * (vbox.g1 + vbox.g2 + 1) / 2), ~~(mult * (vbox.b1 + vbox.b2 + 1) / 2)];
        }
      }
      return vbox._avg;
    },
    contains: function (pixel) {
      var vbox = this,
        rval = pixel[0] >> rshift;
      gval = pixel[1] >> rshift;
      bval = pixel[2] >> rshift;
      return rval >= vbox.r1 && rval <= vbox.r2 && gval >= vbox.g1 && gval <= vbox.g2 && bval >= vbox.b1 && bval <= vbox.b2;
    }
  };

  // Color map

  function CMap() {
    this.vboxes = new PQueue(function (a, b) {
      return pv.naturalOrder(a.vbox.count() * a.vbox.volume(), b.vbox.count() * b.vbox.volume());
    });
    ;
  }
  CMap.prototype = {
    push: function (vbox) {
      this.vboxes.push({
        vbox: vbox,
        color: vbox.avg()
      });
    },
    palette: function () {
      return this.vboxes.map(function (vb) {
        return vb.color;
      });
    },
    size: function () {
      return this.vboxes.size();
    },
    map: function (color) {
      var vboxes = this.vboxes;
      for (var i = 0; i < vboxes.size(); i++) {
        if (vboxes.peek(i).vbox.contains(color)) {
          return vboxes.peek(i).color;
        }
      }
      return this.nearest(color);
    },
    nearest: function (color) {
      var vboxes = this.vboxes,
        d1,
        d2,
        pColor;
      for (var i = 0; i < vboxes.size(); i++) {
        d2 = Math.sqrt(Math.pow(color[0] - vboxes.peek(i).color[0], 2) + Math.pow(color[1] - vboxes.peek(i).color[1], 2) + Math.pow(color[2] - vboxes.peek(i).color[2], 2));
        if (d2 < d1 || d1 === undefined) {
          d1 = d2;
          pColor = vboxes.peek(i).color;
        }
      }
      return pColor;
    },
    forcebw: function () {
      // XXX: won't  work yet
      var vboxes = this.vboxes;
      vboxes.sort(function (a, b) {
        return pv.naturalOrder(pv.sum(a.color), pv.sum(b.color));
      });

      // force darkest color to black if everything < 5
      var lowest = vboxes[0].color;
      if (lowest[0] < 5 && lowest[1] < 5 && lowest[2] < 5) vboxes[0].color = [0, 0, 0];

      // force lightest color to white if everything > 251
      var idx = vboxes.length - 1,
        highest = vboxes[idx].color;
      if (highest[0] > 251 && highest[1] > 251 && highest[2] > 251) vboxes[idx].color = [255, 255, 255];
    }
  };

  // histo (1-d array, giving the number of pixels in
  // each quantized region of color space), or null on error

  function getHisto(pixels) {
    var histosize = 1 << 3 * sigbits,
      histo = new Array(histosize),
      index,
      rval,
      gval,
      bval;
    pixels.forEach(function (pixel) {
      rval = pixel[0] >> rshift;
      gval = pixel[1] >> rshift;
      bval = pixel[2] >> rshift;
      index = getColorIndex(rval, gval, bval);
      histo[index] = (histo[index] || 0) + 1;
    });
    return histo;
  }
  function vboxFromPixels(pixels, histo) {
    var rmin = 1000000,
      rmax = 0,
      gmin = 1000000,
      gmax = 0,
      bmin = 1000000,
      bmax = 0,
      rval,
      gval,
      bval;
    // find min/max
    pixels.forEach(function (pixel) {
      rval = pixel[0] >> rshift;
      gval = pixel[1] >> rshift;
      bval = pixel[2] >> rshift;
      if (rval < rmin) rmin = rval;else if (rval > rmax) rmax = rval;
      if (gval < gmin) gmin = gval;else if (gval > gmax) gmax = gval;
      if (bval < bmin) bmin = bval;else if (bval > bmax) bmax = bval;
    });
    return new VBox(rmin, rmax, gmin, gmax, bmin, bmax, histo);
  }
  function medianCutApply(histo, vbox) {
    if (!vbox.count()) return;
    var rw = vbox.r2 - vbox.r1 + 1,
      gw = vbox.g2 - vbox.g1 + 1,
      bw = vbox.b2 - vbox.b1 + 1,
      maxw = pv.max([rw, gw, bw]);
    // only one pixel, no split
    if (vbox.count() == 1) {
      return [vbox.copy()];
    }
    /* Find the partial sum arrays along the selected axis. */
    var total = 0,
      partialsum = [],
      lookaheadsum = [],
      i,
      j,
      k,
      sum,
      index;
    if (maxw == rw) {
      for (i = vbox.r1; i <= vbox.r2; i++) {
        sum = 0;
        for (j = vbox.g1; j <= vbox.g2; j++) {
          for (k = vbox.b1; k <= vbox.b2; k++) {
            index = getColorIndex(i, j, k);
            sum += histo[index] || 0;
          }
        }
        total += sum;
        partialsum[i] = total;
      }
    } else if (maxw == gw) {
      for (i = vbox.g1; i <= vbox.g2; i++) {
        sum = 0;
        for (j = vbox.r1; j <= vbox.r2; j++) {
          for (k = vbox.b1; k <= vbox.b2; k++) {
            index = getColorIndex(j, i, k);
            sum += histo[index] || 0;
          }
        }
        total += sum;
        partialsum[i] = total;
      }
    } else {
      /* maxw == bw */
      for (i = vbox.b1; i <= vbox.b2; i++) {
        sum = 0;
        for (j = vbox.r1; j <= vbox.r2; j++) {
          for (k = vbox.g1; k <= vbox.g2; k++) {
            index = getColorIndex(j, k, i);
            sum += histo[index] || 0;
          }
        }
        total += sum;
        partialsum[i] = total;
      }
    }
    partialsum.forEach(function (d, i) {
      lookaheadsum[i] = total - d;
    });
    function doCut(color) {
      var dim1 = color + '1',
        dim2 = color + '2',
        left,
        right,
        vbox1,
        vbox2,
        d2,
        count2 = 0;
      for (i = vbox[dim1]; i <= vbox[dim2]; i++) {
        if (partialsum[i] > total / 2) {
          vbox1 = vbox.copy();
          vbox2 = vbox.copy();
          left = i - vbox[dim1];
          right = vbox[dim2] - i;
          if (left <= right) d2 = Math.min(vbox[dim2] - 1, ~~(i + right / 2));else d2 = Math.max(vbox[dim1], ~~(i - 1 - left / 2));
          // avoid 0-count boxes
          while (!partialsum[d2]) d2++;
          count2 = lookaheadsum[d2];
          while (!count2 && partialsum[d2 - 1]) count2 = lookaheadsum[--d2];
          // set dimensions
          vbox1[dim2] = d2;
          vbox2[dim1] = vbox1[dim2] + 1;
          // console.log('vbox counts:', vbox.count(), vbox1.count(), vbox2.count());
          return [vbox1, vbox2];
        }
      }
    }
    // determine the cut planes
    return maxw == rw ? doCut('r') : maxw == gw ? doCut('g') : doCut('b');
  }
  function quantize(pixels, maxcolors) {
    // short-circuit
    if (!pixels.length || maxcolors < 2 || maxcolors > 256) {
      // console.log('wrong number of maxcolors');
      return false;
    }

    // XXX: check color content and convert to grayscale if insufficient

    var histo = getHisto(pixels),
      histosize = 1 << 3 * sigbits;

    // check that we aren't below maxcolors already
    var nColors = 0;
    histo.forEach(function () {
      nColors++;
    });
    if (nColors <= maxcolors) {
      // XXX: generate the new colors from the histo and return
    }

    // get the beginning vbox from the colors
    var vbox = vboxFromPixels(pixels, histo),
      pq = new PQueue(function (a, b) {
        return pv.naturalOrder(a.count(), b.count());
      });
    pq.push(vbox);

    // inner function to do the iteration

    function iter(lh, target) {
      var ncolors = 1,
        niters = 0,
        vbox;
      while (niters < maxIterations) {
        vbox = lh.pop();
        if (!vbox.count()) {
          /* just put it back */
          lh.push(vbox);
          niters++;
          continue;
        }
        // do the cut
        var vboxes = medianCutApply(histo, vbox),
          vbox1 = vboxes[0],
          vbox2 = vboxes[1];
        if (!vbox1) {
          // console.log("vbox1 not defined; shouldn't happen!");
          return;
        }
        lh.push(vbox1);
        if (vbox2) {
          /* vbox2 can be null */
          lh.push(vbox2);
          ncolors++;
        }
        if (ncolors >= target) return;
        if (niters++ > maxIterations) {
          // console.log("infinite loop; perhaps too few pixels!");
          return;
        }
      }
    }

    // first set of colors, sorted by population
    iter(pq, fractByPopulations * maxcolors);
    // console.log(pq.size(), pq.debug().length, pq.debug().slice());

    // Re-sort by the product of pixel occupancy times the size in color space.
    var pq2 = new PQueue(function (a, b) {
      return pv.naturalOrder(a.count() * a.volume(), b.count() * b.volume());
    });
    while (pq.size()) {
      pq2.push(pq.pop());
    }

    // next set - generate the median cuts using the (npix * vol) sorting.
    iter(pq2, maxcolors - pq2.size());

    // calculate the actual colors
    var cmap = new CMap();
    while (pq2.size()) {
      cmap.push(pq2.pop());
    }
    return cmap;
  }
  return {
    quantize: quantize
  };
}();
module.exports = MMCQ.quantize;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [840], () => (__webpack_require__(16524)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"840":"8fb9d837a098dc49c6cf","861":"c128021bf7a4b123d8f8"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			524: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return __webpack_require__.e(840).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=524.9223b5749075d1b5f58e.js.map