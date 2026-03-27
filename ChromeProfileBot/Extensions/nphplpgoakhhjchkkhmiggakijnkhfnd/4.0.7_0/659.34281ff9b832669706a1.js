(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[659],{

/***/ 25336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  buildLedgerTokenTransfer: () => (/* binding */ buildLedgerTokenTransfer),
  checkTonApp: () => (/* binding */ checkTonApp),
  connectLedger: () => (/* binding */ connectLedger),
  detectAvailableTransports: () => (/* binding */ detectAvailableTransports),
  getLedgerWalletAddress: () => (/* binding */ getLedgerWalletAddress),
  getLedgerWalletInfo: () => (/* binding */ getLedgerWalletInfo),
  getNextLedgerWallets: () => (/* binding */ getNextLedgerWallets),
  getTonAppInfo: () => (/* binding */ getTonAppInfo),
  hasUsbDevice: () => (/* binding */ hasUsbDevice),
  importLedgerWallet: () => (/* binding */ importLedgerWallet),
  openSystemBluetoothSettings: () => (/* binding */ openSystemBluetoothSettings),
  reconnectLedger: () => (/* binding */ reconnectLedger),
  signLedgerProof: () => (/* binding */ signLedgerProof),
  signLedgerTransactions: () => (/* binding */ signLedgerTransactions),
  submitLedgerDnsChangeWallet: () => (/* binding */ submitLedgerDnsChangeWallet),
  submitLedgerDnsRenewal: () => (/* binding */ submitLedgerDnsRenewal),
  submitLedgerNftTransfer: () => (/* binding */ submitLedgerNftTransfer),
  submitLedgerStake: () => (/* binding */ submitLedgerStake),
  submitLedgerStakingClaimOrUnlock: () => (/* binding */ submitLedgerStakingClaimOrUnlock),
  submitLedgerTransfer: () => (/* binding */ submitLedgerTransfer),
  submitLedgerUnstake: () => (/* binding */ submitLedgerUnstake),
  verifyAddress: () => (/* binding */ verifyAddress),
  waitLedgerTonApp: () => (/* binding */ waitLedgerTonApp)
});

// EXTERNAL MODULE: ./node_modules/@ledgerhq/errors/lib-es/index.js + 1 modules
var lib_es = __webpack_require__(24450);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
var TransportWebHID = __webpack_require__(68238);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/hw-transport-webusb/lib-es/TransportWebUSB.js + 1 modules
var TransportWebUSB = __webpack_require__(7416);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/index.js
var dist = __webpack_require__(1307);
// EXTERNAL MODULE: ./node_modules/@ton-community/ton-ledger/dist/index.js
var ton_ledger_dist = __webpack_require__(34557);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/address/Address.js
var address_Address = __webpack_require__(3512);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Builder.js
var boc_Builder = __webpack_require__(65871);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Cell.js
var boc_Cell = __webpack_require__(66902);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/types/SendMode.js
var SendMode = __webpack_require__(14568);
// EXTERNAL MODULE: ./src/api/types/index.ts
var types = __webpack_require__(23174);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./src/api/index.ts + 3 modules
var api = __webpack_require__(76944);
// EXTERNAL MODULE: ./src/api/chains/ton/constants.ts
var constants = __webpack_require__(3476);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R1.js
var WalletContractV1R1 = __webpack_require__(94471);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R2.js
var WalletContractV1R2 = __webpack_require__(90746);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R3.js
var WalletContractV1R3 = __webpack_require__(3273);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV2R1.js
var WalletContractV2R1 = __webpack_require__(71902);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV2R2.js
var WalletContractV2R2 = __webpack_require__(99579);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV3R1.js
var WalletContractV3R1 = __webpack_require__(79145);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV3R2.js
var WalletContractV3R2 = __webpack_require__(28784);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV4.js
var WalletContractV4 = __webpack_require__(7941);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV5R1.js
var WalletContractV5R1 = __webpack_require__(8387);
// EXTERNAL MODULE: ./src/util/dns.ts
var dns = __webpack_require__(67491);
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
;// ./src/util/withCacheAsync.ts
const cache = new WeakMap();
function withCacheAsync(fn) {
  let canBeCached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => !!value;
  return async function () {
    let fnCache = cache.get(fn);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const cacheKey = buildCacheKey(args);
    if (fnCache) {
      const cached = fnCache.get(cacheKey);
      if (cached) {
        return cached;
      }
    } else {
      fnCache = new Map();
      cache.set(fn, fnCache);
    }
    const newValue = await fn(...args);
    if (canBeCached(newValue)) {
      fnCache.set(cacheKey, newValue);
    }
    return newValue;
  };
}
function buildCacheKey(args) {
  return args.reduce((cacheKey, arg) => {
    return `${cacheKey}_${typeof arg === 'object' ? JSON.stringify(args) : arg}`;
  }, '');
}
// EXTERNAL MODULE: ./node_modules/@ton/crypto/dist/index.js
var crypto_dist = __webpack_require__(75269);
;// ./src/api/chains/ton/util/other.ts

function sha256BigInt(s) {
  return BigInt(`0x${(0,crypto_dist.sha256_sync)(s).toString('hex')}`);
}
;// ./src/api/chains/ton/util/dns.ts
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];
/* Source https://github.com/toncenter/tonweb/blob/master/src/contract/dns/DnsUtils.js */




function dnsCategoryToBigInt(category) {
  if (!category) return 0n; // all categories
  return sha256BigInt(category);
}
function parseSmartContractAddressImpl(cell, prefix0, prefix1) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== prefix0 || byte1 !== prefix1) {
    throw new Error('Invalid dns record value prefix');
  }
  return parseAddress(slice);
}
function parseSmartContractAddressRecord(cell) {
  return parseSmartContractAddressImpl(cell, 0x9f, 0xd3);
}
function parseNextResolverRecord(cell) {
  return parseSmartContractAddressImpl(cell, 0xba, 0x93);
}
function parseStorageBagIdRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== 0x74 || byte1 !== 0x73) {
    throw new Error('Invalid dns record value prefix');
  }
  const buffer = slice.loadBuffer(4);
  return buffer.toString('hex');
}
function parseSiteRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 === 0xad || byte1 === 0x01) {
    return parseAdnlAddressRecord(cell);
  } else {
    return parseStorageBagIdRecord(cell);
  }
}
function parseAdnlAddressRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== 0xad || byte1 !== 0x01) {
    throw new Error('Invalid dns record value prefix');
  }
  const buffer = slice.loadBuffer(4);
  return buffer.toString('hex');
}
async function dnsResolveImpl(client, dnsAddress, rawDomainBytes, category, oneStep) {
  const len = rawDomainBytes.length * 8;
  const domainCell = new Builder().storeBuffer(rawDomainBytes).asCell();
  const categoryBigInt = dnsCategoryToBigInt(category);
  const {
    stack
  } = await client.callGetMethod(Address.parse(dnsAddress), 'dnsresolve', [{
    type: 'slice',
    cell: domainCell
  }, {
    type: 'int',
    value: categoryBigInt
  }]);
  const resultLen = stack.readNumber();
  let cell;
  try {
    cell = stack.readCell();
  } catch (err) {
    // Do nothing
  }
  if (resultLen === 0) {
    return undefined; // domain cannot be resolved
  }
  if (resultLen % 8 !== 0) {
    throw new Error('domain split not at a component boundary');
  }
  // if (rawDomainBytes[resultLen] !== 0) {
  //     throw new Error('domain split not at a component boundary');
  // }
  if (resultLen > len) {
    throw new Error(`invalid response ${resultLen}/${len}`);
  } else if (resultLen === len) {
    if (category === DnsCategory.DnsNextResolver) {
      return cell ? parseNextResolverRecord(cell) : undefined;
    } else if (category === DnsCategory.Wallet) {
      return cell ? parseSmartContractAddressRecord(cell) : undefined;
    } else if (category === DnsCategory.Site) {
      return cell ? parseSiteRecord(cell) : undefined;
    } else if (category === DnsCategory.BagId) {
      return cell ? parseStorageBagIdRecord(cell) : undefined;
    } else {
      return cell;
    }
  } else if (!cell) {
    return undefined; // domain cannot be resolved
  } else {
    const nextAddress = parseNextResolverRecord(cell);
    if (oneStep) {
      if (category === DnsCategory.DnsNextResolver) {
        return nextAddress;
      } else {
        return undefined;
      }
    } else {
      return dnsResolveImpl(client, nextAddress.toString(), rawDomainBytes.slice(resultLen / 8), category, false);
    }
  }
}

/** Encodes the domain in accordance with the TEP-81 standard */
function encodeDomain(domain) {
  if (!domain || !domain.length) {
    throw new Error('empty domain');
  }
  if (domain === '.') {
    return '';
  }
  domain = domain.toLowerCase();
  for (let i = 0; i < domain.length; i++) {
    if (domain.charCodeAt(i) <= 32) {
      throw new Error('bytes in range 0..32 are not allowed in domain names');
    }
  }
  for (let i = 0; i < domain.length; i++) {
    const s = domain.substring(i, i + 1);
    for (let c = 127; c <= 159; c++) {
      // another control codes range
      if (s === String.fromCharCode(c)) {
        throw new Error('bytes in range 127..159 are not allowed in domain names');
      }
    }
  }
  const arr = domain.split('.');
  arr.forEach(part => {
    if (!part.length) {
      throw new Error('domain name cannot have an empty component');
    }
  });
  return `${arr.reverse().join('\0')}\0`;
}
function dnsResolve(client, rootDnsAddress, domain, category, oneStep) {
  let rawDomain = encodeDomain(domain);
  if (rawDomain.length < 126) {
    rawDomain = `\0${rawDomain}`;
  }
  return dnsResolveImpl(client, rootDnsAddress, Buffer.from(rawDomain), category, oneStep);
}
function parseAddress(slice) {
  slice.loadUint(3);
  let n = slice.loadUintBig(8);
  if (n > 127n) {
    // Maybe it's not necessary?
    n -= 256n;
  }
  const hashPart = slice.loadUintBig(256);
  if (`${n.toString(10)}:${hashPart.toString(16)}` === '0:0') {
    return undefined;
  }
  const s = `${n.toString(10)}:${hashPart.toString(16).padStart(64, '0')}`;
  return Address.parse(s);
}
;// ./src/api/chains/ton/contracts/DnsItem.ts



function dnsItemConfigToCell(config) {
  return (0,dist.beginCell)().endCell();
}
class DnsItem_DnsItem {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new DnsItem_DnsItem(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = dnsItemConfigToCell(config);
    const init = {
      code,
      data
    };
    return new DnsItem_DnsItem((0,dist.contractAddress)(workchain, init), init);
  }
  async getDomain(provider) {
    const res = await provider.get('get_domain', []);
    const domain = res.stack.readString();
    return domain;
  }
  async getTelemintDomain(provider) {
    const res = await provider.get('get_domain_full', []);
    const domain = res.stack.readString();
    const parts = domain.replace(/\\u0000/g, '.').replace(/\.$/, '').split('.');
    parts.reverse();
    return parts.join('.');
  }
  async getNftData(provider) {
    const res = await provider.get('get_nft_data', []);
    const index = res.stack.readBigNumber();
    const collectionAddress = res.stack.readAddress();
    const owner = res.stack.readAddressOpt();
    return {
      index,
      collectionAddress,
      owner
    };
  }
  async getLastFillUpTime(provider) {
    const result = await provider.get('get_last_fill_up_time', []);
    return result.stack.readBigNumber();
  }
  static buildFillUpMessage(queryId) {
    return DnsItem_DnsItem.buildDeleteDnsRecordMessage(queryId);
  }
  static buildDeleteDnsRecordMessage(queryId, category) {
    return (0,dist.beginCell)().storeUint(constants/* DnsOpCode */.kc.ChangeRecord, 32).storeUint(queryId ?? 0n, 64).storeUint(dnsCategoryToBigInt(category), 256).endCell();
  }
  static buildChangeDnsWalletMessage(address, queryId) {
    return (0,dist.beginCell)().storeUint(constants/* DnsOpCode */.kc.ChangeRecord, 32).storeUint(queryId ?? 0n, 64).storeUint(dnsCategoryToBigInt(constants/* DnsCategory */.kJ.Wallet), 256).storeRef((0,dist.beginCell)().storeUint(0x9fd3, 16).storeAddress(dist.Address.parse(address)).storeUint(0, 8).endCell()).endCell();
  }
}
;// ./src/api/chains/ton/contracts/JettonConstants.ts
class Op {
  static transfer = 0xf8a7ea5;
  static transfer_notification = 0x7362d09c;
  static internal_transfer = 0x178d4519;
  static excesses = 0xd53276db;
  static burn = 0x595f07bc;
  static burn_notification = 0x7bdd97de;
  static provide_wallet_address = 0x2c76b973;
  static take_wallet_address = 0xd1735400;
  static mint = 21;
  static change_admin = 3;
  static change_content = 4;
}
class Errors {
  static invalid_op = (/* unused pure expression or super */ null && (709));
  static not_admin = (/* unused pure expression or super */ null && (73));
  static unouthorized_burn = (/* unused pure expression or super */ null && (74));
  static discovery_fee_not_matched = (/* unused pure expression or super */ null && (75));
  static wrong_op = (/* unused pure expression or super */ null && (0xffff));
  static not_owner = (/* unused pure expression or super */ null && (705));
  static not_enough_ton = (/* unused pure expression or super */ null && (709));
  static not_enough_gas = (/* unused pure expression or super */ null && (707));
  static not_valid_wallet = (/* unused pure expression or super */ null && (707));
  static wrong_workchain = (/* unused pure expression or super */ null && (333));
  static balance_error = (/* unused pure expression or super */ null && (706));
}
;// ./src/api/chains/ton/contracts/JettonMaster.ts


function jettonMinterConfigToCell(config) {
  return (0,dist.beginCell)().storeCoins(0).storeAddress(config.admin).storeRef(config.content).storeRef(config.wallet_code).endCell();
}
function jettonContentToCell(content) {
  return beginCell().storeUint(content.type, 8).storeStringTail(content.uri) // Snake logic under the hood
  .endCell();
}
class JettonMaster_JettonMinter {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new JettonMaster_JettonMinter(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = jettonMinterConfigToCell(config);
    const init = {
      code,
      data
    };
    return new JettonMaster_JettonMinter((0,dist.contractAddress)(workchain, init), init);
  }
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: (0,dist.beginCell)().endCell()
    });
  }
  static jettonInternalTransfer(jetton_amount, forward_ton_amount, response_addr) {
    let query_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return (0,dist.beginCell)().storeUint(Op.internal_transfer, 32).storeUint(query_id, 64).storeCoins(jetton_amount).storeAddress(undefined).storeAddress(response_addr).storeCoins(forward_ton_amount).storeBit(false).endCell();
  }
  static mintMessage(from, to, jetton_amount, forward_ton_amount, total_ton_amount) {
    let query_id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    const mintMsg = (0,dist.beginCell)().storeUint(Op.internal_transfer, 32).storeUint(0, 64).storeCoins(jetton_amount).storeAddress(undefined).storeAddress(from) // Response addr
    .storeCoins(forward_ton_amount).storeMaybeRef(undefined).endCell();
    return (0,dist.beginCell)().storeUint(Op.mint, 32).storeUint(query_id, 64) // op, queryId
    .storeAddress(to).storeCoins(total_ton_amount).storeCoins(jetton_amount).storeRef(mintMsg).endCell();
  }
  async sendMint(provider, via, to, jetton_amount, forward_ton_amount, total_ton_amount) {
    if (total_ton_amount <= forward_ton_amount) {
      throw new Error('Total ton amount should be > forward amount');
    }
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMaster_JettonMinter.mintMessage(this.address, to, jetton_amount, forward_ton_amount, total_ton_amount),
      value: total_ton_amount + (0,dist.toNano)('0.015')
    });
  }

  /* provide_wallet_address#2c76b973 query_id:uint64 owner_address:MsgAddress include_address:Bool = InternalMsgBody;
  */
  static discoveryMessage(owner, include_address) {
    return (0,dist.beginCell)().storeUint(0x2c76b973, 32).storeUint(0, 64) // op, queryId
    .storeAddress(owner).storeBit(include_address).endCell();
  }
  async sendDiscovery(provider, via, owner, include_address) {
    let value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0,dist.toNano)('0.1');
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMaster_JettonMinter.discoveryMessage(owner, include_address),
      value
    });
  }
  static changeAdminMessage(newOwner) {
    return (0,dist.beginCell)().storeUint(Op.change_admin, 32).storeUint(0, 64) // op, queryId
    .storeAddress(newOwner).endCell();
  }
  async sendChangeAdmin(provider, via, newOwner) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMaster_JettonMinter.changeAdminMessage(newOwner),
      value: (0,dist.toNano)('0.05')
    });
  }
  static changeContentMessage(content) {
    return (0,dist.beginCell)().storeUint(Op.change_content, 32).storeUint(0, 64) // op, queryId
    .storeRef(content).endCell();
  }
  async sendChangeContent(provider, via, content) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMaster_JettonMinter.changeContentMessage(content),
      value: (0,dist.toNano)('0.05')
    });
  }
  async getWalletAddress(provider, owner) {
    const res = await provider.get('get_wallet_address', [{
      type: 'slice',
      cell: (0,dist.beginCell)().storeAddress(owner).endCell()
    }]);
    return res.stack.readAddress();
  }
  async getJettonData(provider) {
    const res = await provider.get('get_jetton_data', []);
    const totalSupply = res.stack.readBigNumber();
    const mintable = res.stack.readBoolean();
    const adminAddress = res.stack.readCellOpt();
    const content = res.stack.readCell();
    const walletCode = res.stack.readCell();
    return {
      totalSupply,
      mintable,
      adminAddress,
      content,
      walletCode
    };
  }
  async getTotalSupply(provider) {
    const res = await this.getJettonData(provider);
    return res.totalSupply;
  }
  async getAdminAddress(provider) {
    const res = await this.getJettonData(provider);
    return res.adminAddress;
  }
  async getContent(provider) {
    const res = await this.getJettonData(provider);
    return res.content;
  }
}
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonStaking/imports/constants.ts
var imports_constants = __webpack_require__(61995);
// EXTERNAL MODULE: ./src/util/safeExec.ts
var safeExec = __webpack_require__(50110);
;// ./src/api/chains/ton/contracts/util.ts

function readCellOpt(stack) {
  return (0,safeExec/* default */.A)(() => stack.readCellOpt(), {
    shouldIgnoreError: true
  }) ?? undefined;
}
;// ./src/api/chains/ton/contracts/JettonStaking/StakeWallet.ts



function userRewardsDictValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeUint(src.distributedRewards, 256).storeCoins(src.unclaimedRewards).endCell();
    },
    parse: src => {
      return {
        distributedRewards: src.loadUintBig(256),
        unclaimedRewards: src.loadCoins()
      };
    }
  };
}
function stakeWalletConfigToCell(config) {
  return (0,dist.beginCell)().storeAddress(config.stakingPoolAddress).storeAddress(config.minterAddress).storeAddress(config.ownerAddress).storeRef((0,dist.beginCell)().storeUint(config.lockPeriod, 32).storeUint(1, 19).endCell()).endCell();
}
class StakeWallet {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new StakeWallet(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = stakeWalletConfigToCell(config);
    const init = {
      code,
      data
    };
    return new StakeWallet((0,dist.contractAddress)(workchain, init), init);
  }
  static getAvailableRewards(stakeWalletConfig, poolConfig) {
    if (!poolConfig.rewardJettons) {
      return {};
    }
    const timeNow = Math.floor(Date.now() / 1000);
    const rewardMultiplier = poolConfig.lockPeriods.get(Number(stakeWalletConfig.lockPeriod)).rewardMultiplier;
    const res = {};
    for (const rewardJettonWallet of poolConfig.rewardJettons.keys()) {
      const poolRewardsInfo = poolConfig.rewardJettons.get(rewardJettonWallet);
      const userRewardsInfo = stakeWalletConfig.rewardsDict.get(rewardJettonWallet);
      let unclaimedRewards = userRewardsInfo ? userRewardsInfo.unclaimedRewards : 0n;
      const userDistributedRewards = userRewardsInfo ? userRewardsInfo.distributedRewards : 0n;
      let poolDistributedRewards = poolRewardsInfo.distributedRewards;
      for (const i of poolRewardsInfo.rewardsDeposits.keys()) {
        const rewardDeposit = poolRewardsInfo.rewardsDeposits.get(i);
        if (rewardDeposit.startTime < timeNow && poolConfig.tvlWithMultipliers) {
          poolDistributedRewards += rewardDeposit.distributionSpeed * BigInt(Math.min(timeNow, rewardDeposit.endTime) - rewardDeposit.startTime) * imports_constants/* Dividers */.Hc.DISTRIBUTED_REWARDS_DIVIDER / (imports_constants/* Dividers */.Hc.DISTRIBUTION_SPEED_DIVIDER * poolConfig.tvlWithMultipliers);
        }
      }
      unclaimedRewards += (poolDistributedRewards - userDistributedRewards) * stakeWalletConfig.jettonBalance * BigInt(rewardMultiplier) / (imports_constants/* Dividers */.Hc.DISTRIBUTED_REWARDS_DIVIDER * BigInt(imports_constants/* Dividers */.Hc.REWARDS_DIVIDER));
      res[rewardJettonWallet.toString()] = unclaimedRewards;
    }
    return res;
  }
  async getStorageData(provider) {
    const {
      stack
    } = await provider.get('get_storage_data', []);
    const res = {
      stakingPoolAddress: stack.readAddress(),
      ownerAddress: stack.readAddress(),
      lockPeriod: stack.readBigNumber(),
      jettonBalance: stack.readBigNumber(),
      rewardsDict: readCellOpt(stack),
      unstakeRequests: readCellOpt(stack),
      requestsCount: stack.readBigNumber(),
      totalRequestedJettons: stack.readBigNumber(),
      isActive: Boolean(stack.readNumber()),
      unstakeCommission: stack.readBigNumber(),
      unstakeFee: stack.readBigNumber(),
      minDeposit: stack.readBigNumber(),
      maxDeposit: stack.readBigNumber(),
      whitelist: readCellOpt(stack),
      minterAddress: stack.readAddress()
    };
    if (res.rewardsDict) {
      res.rewardsDict = res.rewardsDict.beginParse().loadDictDirect(dist.Dictionary.Keys.Address(), userRewardsDictValueParser());
    }
    if (res.unstakeRequests) {
      res.unstakeRequests = res.unstakeRequests.beginParse().loadDictDirect(dist.Dictionary.Keys.Uint(32), dist.Dictionary.Values.BigVarUint(4));
    }
    if (res.whitelist) {
      res.whitelist = res.whitelist.beginParse().loadDictDirect(dist.Dictionary.Keys.Address(), dist.Dictionary.Values.Bool());
    }
    return res;
  }
}
;// ./src/api/chains/ton/contracts/JettonStaking/StakingPool.ts



function lockPeriodsValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeCoins(src.curTvl).storeCoins(src.tvlLimit).storeUint(src.rewardMultiplier, 16).storeUint(src.depositCommission, 16).storeUint(src.unstakeCommission, 16).storeAddress(src.minterAddress).endCell();
    },
    parse: src => {
      return {
        curTvl: src.loadCoins(),
        tvlLimit: src.loadCoins(),
        rewardMultiplier: src.loadUint(16),
        depositCommission: src.loadUint(16),
        unstakeCommission: src.loadUint(16),
        minterAddress: src.loadAddress()
      };
    }
  };
}
function rewardsDepositsValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeCoins(src.distributionSpeed).storeUint(src.startTime, 32).storeUint(src.endTime, 32).endCell();
    },
    parse: src => {
      return {
        distributionSpeed: src.loadCoins(),
        startTime: src.loadUint(32),
        endTime: src.loadUint(32)
      };
    }
  };
}
function rewardJettonsValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeUint(src.distributedRewards, 256).storeDict(src.rewardsDeposits, dist.Dictionary.Keys.Uint(32), rewardsDepositsValueParser()).endCell();
    },
    parse: src => {
      return {
        distributedRewards: src.loadUintBig(256),
        rewardsDeposits: src.loadDict(dist.Dictionary.Keys.Uint(32), rewardsDepositsValueParser())
      };
    }
  };
}
function stakingPoolConfigToCell(config) {
  return (0,dist.beginCell)().storeAddress(config.factoryAddress).storeUint(config.poolId, 32).endCell();
}
function stakingPoolInitedData(config) {
  return beginCell().storeBit(config.inited).storeUint(config.poolId, 32).storeAddress(config.adminAddress).storeAddress(config.creatorAddress).storeAddress(config.lockWalletAddress).storeMaybeRef(config.content).storeRef(config.stakeWalletCode).storeRef(beginCell().storeCoins(config.tvl).storeCoins(config.tvlWithMultipliers).storeCoins(config.minDeposit).storeCoins(config.maxDeposit).storeDict(config.rewardJettons, Dictionary.Keys.Address(), rewardJettonsValueParser()).storeUint(config.rewardJettonsCount ?? 0, 8).storeUint(config.rewardsDepositsCount ?? 0, 8).storeDict(config.lockPeriods, Dictionary.Keys.Uint(32), lockPeriodsValueParser()).storeDict(config.whitelist, Dictionary.Keys.Address(), Dictionary.Values.Bool()).storeCoins(config.unstakeFee).storeCoins(config.collectedCommissions).storeUint(config.rewardsCommission, 16).storeUint(config.version ?? 0, 16).endCell()).endCell();
}
class StakingPool {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new StakingPool(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = stakingPoolConfigToCell(config);
    const init = {
      code,
      data
    };
    return new StakingPool((0,dist.contractAddress)(workchain, init), init);
  }
  static stakePayload(lockPeriod) {
    return (0,dist.beginCell)().storeUint(imports_constants/* JettonStakingOpCodes */.Hx.STAKE_JETTONS, 32).storeUint(lockPeriod, 32).endCell();
  }
  async getData(provider) {
    const {
      stack
    } = await provider.get('get_nft_data', []);
    return {
      init: stack.readBoolean(),
      index: stack.readBigNumber(),
      collection: stack.readAddressOpt(),
      owner: stack.readAddressOpt(),
      content: stack.readCell()
    };
  }
  async getStorageData(provider) {
    const {
      stack
    } = await provider.get('get_storage_data', []);
    const res = {
      inited: stack.readBoolean(),
      poolId: stack.readBigNumber(),
      adminAddress: stack.readAddress(),
      creatorAddress: stack.readAddress(),
      stakeWalletCode: stack.readCell(),
      lockWalletAddress: stack.readAddress(),
      tvl: stack.readBigNumber(),
      tvlWithMultipliers: stack.readBigNumber(),
      minDeposit: stack.readBigNumber(),
      maxDeposit: stack.readBigNumber(),
      rewardJettons: readCellOpt(stack),
      rewardJettonsCount: stack.readBigNumber(),
      rewardsDepositsCount: stack.readBigNumber(),
      lockPeriods: stack.readCellOpt(),
      whitelist: readCellOpt(stack),
      unstakeFee: stack.readBigNumber(),
      collectedCommissions: stack.readBigNumber(),
      rewardsCommission: stack.readBigNumber(),
      version: stack.readBigNumber()
    };
    if (res.rewardJettons) {
      res.rewardJettons = res.rewardJettons.beginParse().loadDictDirect(dist.Dictionary.Keys.Address(), rewardJettonsValueParser());
    }
    if (res.lockPeriods) {
      res.lockPeriods = res.lockPeriods.beginParse().loadDictDirect(dist.Dictionary.Keys.Uint(32), lockPeriodsValueParser());
    }
    if (res.whitelist) {
      res.whitelist = res.whitelist.beginParse().loadDictDirect(dist.Dictionary.Keys.Address(), dist.Dictionary.Values.Bool());
    }
    return res;
  }
  async getWalletAddress(provider, ownerAddress, lockPeriod) {
    const {
      stack
    } = await provider.get('get_stake_wallet_address', [{
      type: 'slice',
      cell: (0,dist.beginCell)().storeAddress(ownerAddress).endCell()
    }, {
      type: 'int',
      value: BigInt(lockPeriod)
    }]);
    return stack.readAddressOpt();
  }
}
;// ./src/api/chains/ton/contracts/JettonWallet.ts

function jettonWalletConfigToCell(config) {
  return (0,dist.beginCell)().endCell();
}
class JettonWallet_JettonWallet {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new JettonWallet_JettonWallet(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = jettonWalletConfigToCell(config);
    const init = {
      code,
      data
    };
    return new JettonWallet_JettonWallet((0,dist.contractAddress)(workchain, init), init);
  }
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: (0,dist.beginCell)().endCell()
    });
  }
  async getJettonBalance(provider) {
    const state = await provider.getState();
    if (state.state.type !== 'active') {
      return 0n;
    }
    const res = await provider.get('get_wallet_data', []);
    return res.stack.readBigNumber();
  }
  static transferMessage(jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload) {
    return (0,dist.beginCell)().storeUint(0xf8a7ea5, 32).storeUint(0, 64) // op, queryId
    .storeCoins(jetton_amount).storeAddress(to).storeAddress(responseAddress).storeMaybeRef(customPayload).storeCoins(forward_ton_amount).storeMaybeRef(forwardPayload).endCell();
  }
  async sendTransfer(provider, via, value, jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet_JettonWallet.transferMessage(jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload),
      value
    });
  }

  /*
    burn#595f07bc query_id:uint64 amount:(VarUInteger 16)
                  response_destination:MsgAddress custom_payload:(Maybe ^Cell)
                  = InternalMsgBody;
  */
  static burnMessage(jetton_amount, responseAddress, customPayload) {
    return (0,dist.beginCell)().storeUint(0x595f07bc, 32).storeUint(0, 64) // op, queryId
    .storeCoins(jetton_amount).storeAddress(responseAddress).storeMaybeRef(customPayload).endCell();
  }
  async sendBurn(provider, via, value, jetton_amount, responseAddress, customPayload) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet_JettonWallet.burnMessage(jetton_amount, responseAddress, customPayload),
      value
    });
  }

  /*
    withdraw_tons#107c49ef query_id:uint64 = InternalMsgBody;
  */
  static withdrawTonsMessage() {
    return (0,dist.beginCell)().storeUint(0x6d8e5e3c, 32).storeUint(0, 64) // op, queryId
    .endCell();
  }
  async sendWithdrawTons(provider, via) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet_JettonWallet.withdrawTonsMessage(),
      value: (0,dist.toNano)('0.1')
    });
  }

  /*
    withdraw_jettons#10 query_id:uint64 wallet:MsgAddressInt amount:Coins = InternalMsgBody;
  */
  static withdrawJettonsMessage(from, amount) {
    return (0,dist.beginCell)().storeUint(0x768a50b2, 32).storeUint(0, 64) // op, queryId
    .storeAddress(from).storeCoins(amount).storeMaybeRef(undefined).endCell();
  }
  async sendWithdrawJettons(provider, via, from, amount) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet_JettonWallet.withdrawJettonsMessage(from, amount),
      value: (0,dist.toNano)('0.1')
    });
  }
  async getWalletData(provider) {
    const res = await provider.get('get_wallet_data', []);
    const balance = res.stack.readBigNumber();
    const owner = res.stack.readAddress();
    const minter = res.stack.readAddress();
    const code = res.stack.readCell();
    return {
      balance,
      owner,
      minter,
      code
    };
  }
}
;// ./src/api/common/utils.ts
/* provided dependency */ var utils_Buffer = __webpack_require__(48287)["Buffer"];

function sha256(bytes) {
  return crypto.subtle.digest('SHA-256', bytes);
}
function bytesToHex(bytes) {
  return utils_Buffer.from(bytes).toString('hex');
}
function hexToBytes(hex) {
  return Uint8Array.from(utils_Buffer.from(hex, 'hex'));
}
function bytesToBase64(bytes) {
  return utils_Buffer.from(bytes).toString('base64');
}
function base64ToBytes(base64) {
  return Uint8Array.from(utils_Buffer.from(base64, 'base64'));
}
function base64ToString(base64) {
  return utils_Buffer.from(base64, 'base64').toString('utf-8');
}
function isKnownStakingPool(address) {
  return STAKING_POOLS.some(poolPart => address.endsWith(poolPart));
}
;// ./src/api/environment.ts
/*
 * This module is to be used instead of /src/util/environment.ts
 * when `window` is not available (e.g. in a web worker).
 */


const ELECTRON_ORIGIN = 'file://';
let environment;
function setEnvironment(args) {
  var _self;
  environment = {
    ...args,
    isDappSupported: true,
    isSseSupported: args.isElectron || IS_CAPACITOR && !args.isNativeBottomSheet,
    apiHeaders: {
      'X-App-Origin': args.isElectron ? ELECTRON_ORIGIN : (_self = self) === null || _self === void 0 ? void 0 : _self.origin
    },
    toncenterMainnetKey: args.isElectron ? ELECTRON_TONCENTER_MAINNET_KEY : TONCENTER_MAINNET_KEY,
    toncenterTestnetKey: args.isElectron ? ELECTRON_TONCENTER_TESTNET_KEY : TONCENTER_TESTNET_KEY
  };
  return environment;
}
function getEnvironment() {
  return environment;
}
// EXTERNAL MODULE: ./src/util/bigint.ts
var bigint = __webpack_require__(809);
;// ./src/api/chains/ton/util/index.ts

function cloneDeep(value) {
  return JSON.parse(JSON.stringify(value), bigintReviver);
}
function util_generateQueryId() {
  return bigintRandom(8);
}
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js
var axios = __webpack_require__(57536);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/client/TonClient.js
var client_TonClient = __webpack_require__(98737);
// EXTERNAL MODULE: ./node_modules/axios/lib/core/buildFullPath.js
var buildFullPath = __webpack_require__(88262);
// EXTERNAL MODULE: ./node_modules/axios/lib/core/settle.js
var settle = __webpack_require__(63853);
// EXTERNAL MODULE: ./node_modules/axios/lib/helpers/buildURL.js
var buildURL = __webpack_require__(93967);
// EXTERNAL MODULE: ./node_modules/axios/lib/utils.js
var utils = __webpack_require__(17275);
;// ./src/lib/axios-fetch-adapter/index.js





const {
  isFormData,
  isStandardBrowserEnv,
  isUndefined
} = utils/* default */.A;

/**
 * - Create a request object
 * - Get response body
 * - Check if timeout
 */
async function fetchAdapter(config) {
  const request = createRequest(config);
  const promiseChain = [getResponse(request, config)];
  if (config.timeout && config.timeout > 0) {
    promiseChain.push(new Promise(res => {
      setTimeout(() => {
        const message = config.timeoutErrorMessage ? config.timeoutErrorMessage : `timeout of ${config.timeout}ms exceeded`;
        res(createError(message, config, 'ECONNABORTED', request));
      }, config.timeout);
    }));
  }
  const data = await Promise.race(promiseChain);
  return new Promise((resolve, reject) => {
    if (data instanceof Error) {
      reject(data);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      Object.prototype.toString.call(config.settle) === '[object Function]' ? config.settle(resolve, reject, data) : (0,settle/* default */.A)(resolve, reject, data);
    }
  });
}

/**
 * Fetch API stage two is to get response body. This funtion tries to retrieve
 * response body based on response's type
 */
async function getResponse(request, config) {
  let stageOne;
  try {
    stageOne = await fetch(request);
  } catch (e) {
    return createError('Network Error', config, 'ERR_NETWORK', request);
  }
  const response = {
    ok: stageOne.ok,
    status: stageOne.status,
    statusText: stageOne.statusText,
    headers: new Headers(stageOne.headers),
    // Make a copy of headers
    config,
    request
  };
  if (stageOne.status >= 200 && stageOne.status !== 204) {
    switch (config.responseType) {
      case 'arraybuffer':
        response.data = await stageOne.arrayBuffer();
        break;
      case 'blob':
        response.data = await stageOne.blob();
        break;
      case 'json':
        response.data = await stageOne.json();
        break;
      case 'formData':
        response.data = await stageOne.formData();
        break;
      default:
        response.data = await stageOne.text();
        break;
    }
  }
  return response;
}

/**
 * This function will create a Request object based on configuration's axios
 */
function createRequest(config) {
  const headers = new Headers(config.headers);

  // HTTP basic authentication
  if (config.auth) {
    const username = config.auth.username || '';
    const password = config.auth.password ? decodeURI(encodeURIComponent(config.auth.password)) : '';
    headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
  }
  const method = config.method.toUpperCase();
  const options = {
    headers,
    method
  };
  if (method !== 'GET' && method !== 'HEAD') {
    options.body = config.data;

    // In these cases the browser will automatically set the correct Content-Type,
    // but only if that header hasn't been set yet. So that's why we're deleting it.
    if (isFormData(options.body) && isStandardBrowserEnv()) {
      headers.delete('Content-Type');
    }
  }
  if (config.mode) {
    options.mode = config.mode;
  }
  if (config.cache) {
    options.cache = config.cache;
  }
  if (config.integrity) {
    options.integrity = config.integrity;
  }
  if (config.redirect) {
    options.redirect = config.redirect;
  }
  if (config.referrer) {
    options.referrer = config.referrer;
  }
  // This config is similar to XHR’s withCredentials flag, but with three available values instead of two.
  // So if withCredentials is not set, default value 'same-origin' will be used
  if (!isUndefined(config.withCredentials)) {
    options.credentials = config.withCredentials ? 'include' : 'omit';
  }
  const fullPath = (0,buildFullPath/* default */.A)(config.baseURL, config.url);
  const url = (0,buildURL/* default */.A)(fullPath, config.params, config.paramsSerializer);

  // Expected browser to throw error if there is any wrong configuration value
  return new Request(url, options);
}

/**
 * Note:
 *
 *   From version >= 0.27.0, createError function is replaced by AxiosError class.
 *   So I copy the old createError function here for backward compatible.
 *
 *
 *
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function createError(message, config, code, request, response) {
  if (axios/* default */.A.AxiosError && typeof axios/* default */.A.AxiosError === 'function') {
    return new axios/* default */.A.AxiosError(message, axios/* default */.A.AxiosError[code], config, request, response);
  }
  const error = new Error(message);
  return enhanceError(error, config, code, request, response);
}

/**
 *
 * Note:
 *
 *   This function is for backward compatible.
 *
 *
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      // eslint-disable-next-line no-null/no-null
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
}
// EXTERNAL MODULE: ./src/lib/axios-retry/index.js
var axios_retry = __webpack_require__(91179);
var axios_retry_default = /*#__PURE__*/__webpack_require__.n(axios_retry);
// EXTERNAL MODULE: ./src/api/errors.ts
var errors = __webpack_require__(39989);
// EXTERNAL MODULE: ./src/util/schedulers.ts
var schedulers = __webpack_require__(37836);
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
    retries = config/* DEFAULT_RETRIES */.TUC,
    timeouts = config/* DEFAULT_TIMEOUT */.cSq,
    shouldSkipRetryFn = isNotTemporaryError
  } = options ?? {};
  let message = 'Unknown error.';
  let statusCode;
  for (let i = 1; i <= retries; i++) {
    try {
      if (i > 1) {
        (0,logs/* logDebug */.MD)(`Retry request #${i}:`, url.toString(), statusCode);
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
        throw new errors/* ApiServerError */.K$(message, statusCode);
      }
      if (i < retries) {
        await (0,schedulers/* pause */.v7)(config/* DEFAULT_ERROR_PAUSE */.WRE * i);
      }
    }
  }
  throw new errors/* ApiServerError */.K$(message);
}
async function fetchWithTimeout(url, init) {
  let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config/* DEFAULT_TIMEOUT */.cSq;
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
;// ./src/api/chains/ton/util/TonClient.ts







axios_retry_default()(axios/* default */.A, {
  retries: config/* DEFAULT_RETRIES */.TUC,
  shouldResetTimeout: true,
  retryDelay: retryCount => {
    return retryCount * config/* DEFAULT_ERROR_PAUSE */.WRE;
  },
  onRetry: (retryNumber, error, requestConfig) => {
    var _error$response;
    (0,logs/* logDebug */.MD)(`Retry request #${retryNumber}:`, requestConfig.url, (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status);
  }
});
axios/* default */.A.defaults.adapter = fetchAdapter;
class TonClient extends client_TonClient/* TonClient */.x {
  constructor(parameters) {
    super(parameters);
    this.initParameters = parameters;
  }
  getAddressInfo(address) {
    return this.callRpc('getAddressInformation', {
      address
    });
  }
  callRpc(method, params) {
    return this.sendRequest(this.parameters.endpoint, {
      id: 1,
      jsonrpc: '2.0',
      method,
      params
    });
  }
  async sendFile(src) {
    const boc = typeof src === 'object' ? src.toString('base64') : src;
    await this.callRpc('sendBocReturnHashNoError', {
      boc
    });
  }
  async sendRequest(apiUrl, request) {
    const method = request.method;
    const headers = {
      ...this.initParameters.headers,
      'Content-Type': 'application/json'
    };
    if (this.parameters.apiKey) {
      headers['X-API-Key'] = this.parameters.apiKey;
    }
    const body = JSON.stringify(request);
    const response = await fetchWithRetry(apiUrl, {
      method: 'POST',
      body,
      headers
    }, {
      shouldSkipRetryFn: (message, statusCode) => TonClient_isNotTemporaryError(method, message, statusCode)
    });
    const data = await response.json();
    return data.result;
  }
}
function TonClient_isNotTemporaryError(method, message, statusCode) {
  return Boolean(statusCode === 422 || (message === null || message === void 0 ? void 0 : message.match(/(exit code|exitcode=|duplicate message)/)));
}
;// ./src/api/chains/ton/util/tonCore.ts
/* provided dependency */ var tonCore_Buffer = __webpack_require__(48287)["Buffer"];


























const TON_MAX_COMMENT_BYTES = 127;
let clientByNetwork;
const walletClassMap = {
  simpleR1: WalletContractV1R1/* WalletContractV1R1 */.m,
  simpleR2: WalletContractV1R2/* WalletContractV1R2 */.t,
  simpleR3: WalletContractV1R3/* WalletContractV1R3 */.A,
  v2R1: WalletContractV2R1/* WalletContractV2R1 */.H,
  v2R2: WalletContractV2R2/* WalletContractV2R2 */.a,
  v3R1: WalletContractV3R1/* WalletContractV3R1 */.G,
  v3R2: WalletContractV3R2/* WalletContractV3R2 */.N,
  v4R2: WalletContractV4/* WalletContractV4 */.U,
  W5: WalletContractV5R1.WalletContractV5R1
};
function getTonClient() {
  let network = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mainnet';
  if (!clientByNetwork) {
    const {
      apiHeaders,
      toncenterMainnetKey,
      toncenterTestnetKey
    } = getEnvironment();
    clientByNetwork = {
      mainnet: new TonClient({
        endpoint: `${config/* TONCENTER_MAINNET_URL */._J8}/api/v2/jsonRPC`,
        timeout: config/* DEFAULT_TIMEOUT */.cSq,
        apiKey: toncenterMainnetKey,
        headers: apiHeaders
      }),
      testnet: new TonClient({
        endpoint: `${config/* TONCENTER_TESTNET_URL */.pyR}/api/v2/jsonRPC`,
        timeout: config/* DEFAULT_TIMEOUT */.cSq,
        apiKey: toncenterTestnetKey,
        headers: apiHeaders
      })
    };
  }
  return clientByNetwork[network];
}
const resolveTokenWalletAddress = withCacheAsync(async (network, address, tokenAddress) => {
  const minter = getTonClient(network).open(new JettonMaster_JettonMinter(dist.Address.parse(tokenAddress)));
  const walletAddress = await minter.getWalletAddress(dist.Address.parse(address));
  return toBase64Address(walletAddress, true, network);
});
const resolveTokenAddress = withCacheAsync(async (network, tokenWalletAddress) => {
  const tokenWallet = getTonClient(network).open(new JettonWallet_JettonWallet(dist.Address.parse(tokenWalletAddress)));
  const data = await tokenWallet.getWalletData();
  return toBase64Address(data.minter, true, network);
});
const getWalletPublicKey = withCacheAsync(async (network, address) => {
  const res = await getTonClient(network).runMethodWithError(dist.Address.parse(address), 'get_public_key');
  if (res.exit_code !== 0) {
    return undefined;
  }
  const bigintKey = res.stack.readBigNumber();
  const hex = bigintKey.toString(16).padStart(64, '0');
  return hexToBytes(hex);
});
const getJettonPoolStakeWallet = withCacheAsync(async (network, poolAddress, period, address) => {
  const tonClient = getTonClient(network);
  const pool = tonClient.open(StakingPool.createFromAddress(dist.Address.parse(poolAddress)));
  const walletAddress = await pool.getWalletAddress(dist.Address.parse(address), period);
  return tonClient.open(StakeWallet.createFromAddress(walletAddress));
});
function getJettonMinterData(network, address) {
  const contract = getTonClient(network).open(new JettonMinter(Address.parse(address)));
  return contract.getJettonData();
}
function oneCellFromBoc(bytes) {
  return Cell.fromBoc(tonCore_Buffer.from(bytes));
}
function toBase64Address(address) {
  let isBounceable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : constants/* DEFAULT_IS_BOUNCEABLE */.e2;
  let network = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof address === 'string') {
    address = dist.Address.parse(address);
  }
  return address.toString({
    urlSafe: true,
    bounceable: isBounceable,
    testOnly: network === 'testnet'
  });
}
function toRawAddress(address) {
  if (typeof address === 'string') {
    address = Address.parse(address);
  }
  return address.toRawString();
}
function buildTokenTransferBody(params) {
  const {
    queryId,
    tokenAmount,
    toAddress,
    responseAddress,
    forwardAmount,
    customPayload
  } = params;
  let forwardPayload = params.forwardPayload;
  let builder = new Builder().storeUint(JettonOpCode.Transfer, 32).storeUint(queryId || generateQueryId(), 64).storeCoins(tokenAmount).storeAddress(Address.parse(toAddress)).storeAddress(Address.parse(responseAddress)).storeMaybeRef(customPayload).storeCoins(forwardAmount ?? 0n);
  if (forwardPayload instanceof Uint8Array) {
    const freeBytes = Math.round(builder.availableBits / 8);
    forwardPayload = packBytesAsSnake(forwardPayload, freeBytes);
  }
  if (!forwardPayload) {
    builder.storeBit(false);
  } else if (typeof forwardPayload === 'string') {
    builder = builder.storeBit(false).storeUint(0, 32).storeBuffer(tonCore_Buffer.from(forwardPayload));
  } else if (forwardPayload instanceof Uint8Array) {
    builder = builder.storeBit(false).storeBuffer(tonCore_Buffer.from(forwardPayload));
  } else {
    builder = builder.storeBit(true).storeRef(forwardPayload);
  }
  return builder.endCell();
}
function parseBase64(base64) {
  try {
    return Cell.fromBase64(base64);
  } catch (err) {
    logDebugError('parseBase64', err);
    return Uint8Array.from(tonCore_Buffer.from(base64, 'base64'));
  }
}
function commentToBytes(comment) {
  const buffer = tonCore_Buffer.from(comment);
  const bytes = new Uint8Array(buffer.length + 4);
  const startBuffer = tonCore_Buffer.alloc(4);
  startBuffer.writeUInt32BE(constants/* OpCode */.$G.Comment);
  bytes.set(startBuffer, 0);
  bytes.set(buffer, 4);
  return bytes;
}
function packBytesAsSnake(bytes) {
  let maxBytes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TON_MAX_COMMENT_BYTES;
  const buffer = tonCore_Buffer.from(bytes);
  if (buffer.length <= maxBytes) {
    return bytes;
  }
  return packBytesAsSnakeCell(bytes);
}
function packBytesAsSnakeCell(bytes) {
  const bytesPerCell = TON_MAX_COMMENT_BYTES;
  const cellCount = Math.ceil(bytes.length / bytesPerCell);
  let headCell;
  for (let i = cellCount - 1; i >= 0; i--) {
    const cellOffset = i * bytesPerCell;
    const cellLength = Math.min(bytesPerCell, bytes.length - cellOffset);
    const cellBuffer = tonCore_Buffer.from(bytes.buffer, bytes.byteOffset + cellOffset, cellLength); // This creates a buffer that references the input bytes instead of copying them

    const nextHeadCell = new dist.Builder().storeBuffer(cellBuffer);
    if (headCell) {
      nextHeadCell.storeRef(headCell);
    }
    headCell = nextHeadCell.endCell();
  }
  return headCell ?? dist.Cell.EMPTY;
}
function packBytesAsSnakeForEncryptedData(data) {
  const ROOT_BUILDER_BYTES = 39;
  const MAX_CELLS_AMOUNT = 16;
  if (data.length > ROOT_BUILDER_BYTES + MAX_CELLS_AMOUNT * TON_MAX_COMMENT_BYTES) {
    throw new Error('Input text is too long');
  }
  return new Builder().storeBuffer(tonCore_Buffer.from(data.subarray(0, ROOT_BUILDER_BYTES))).storeRef(packBytesAsSnakeCell(data.subarray(ROOT_BUILDER_BYTES))).endCell();
}
function buildLiquidStakingDepositBody(queryId) {
  return new Builder().storeUint(LiquidStakingOpCode.Deposit, 32).storeUint(queryId || 0, 64).asCell();
}
function buildLiquidStakingWithdrawBody(options) {
  const {
    queryId,
    amount,
    responseAddress,
    waitTillRoundEnd,
    fillOrKill
  } = options;
  const customPayload = buildLiquidStakingWithdrawCustomPayload(waitTillRoundEnd, fillOrKill);
  return new Builder().storeUint(JettonOpCode.Burn, 32).storeUint(queryId ?? 0, 64).storeCoins(amount).storeAddress(Address.parse(responseAddress)).storeBit(1).storeRef(customPayload).asCell();
}
function buildLiquidStakingWithdrawCustomPayload(waitTillRoundEnd, fillOrKill) {
  return new dist.Builder().storeUint(Number(waitTillRoundEnd), 1).storeUint(Number(fillOrKill), 1).asCell();
}
function getTokenBalance(network, walletAddress) {
  const tokenWallet = getTonClient(network).open(new JettonWallet(Address.parse(walletAddress)));
  return tokenWallet.getJettonBalance();
}
function tonCore_parseAddress(address) {
  try {
    if (Address.isRaw(address)) {
      return {
        address: Address.parseRaw(address),
        isRaw: true,
        isValid: true
      };
    } else if (Address.isFriendly(address)) {
      return {
        ...Address.parseFriendly(address),
        isUserFriendly: true,
        isValid: true
      };
    }
  } catch (err) {
    // Do nothing
  }
  return {
    isValid: false
  };
}
function getIsRawAddress(address) {
  return Boolean(tonCore_parseAddress(address).isRaw);
}
async function getDnsItemDomain(network, address) {
  if (typeof address === 'string') address = Address.parse(address);
  const contract = getTonClient(network).open(new DnsItem(address));
  const nftData = await contract.getNftData();
  const collectionAddress = toBase64Address(nftData.collectionAddress, true);
  const zone = getDnsZoneByCollection(collectionAddress);
  const base = zone !== null && zone !== void 0 && zone.isTelemint ? await contract.getTelemintDomain() : await contract.getDomain();
  return `${base}.${zone === null || zone === void 0 ? void 0 : zone.suffixes[0]}`;
}
function buildJettonUnstakePayload(jettonsToUnstake, forceUnstake, queryId) {
  return (0,dist.beginCell)().storeUint(imports_constants/* JettonStakingOpCodes */.Hx.UNSTAKE_JETTONS, 32).storeUint(queryId ?? 0, 64).storeCoins(jettonsToUnstake).storeBit(forceUnstake ?? false).endCell();
}
function buildJettonClaimPayload(poolWallets, queryId) {
  const rewardsToClaim = dist.Dictionary.empty(dist.Dictionary.Keys.Address(), dist.Dictionary.Values.Bool());
  for (const poolWallet of poolWallets) {
    rewardsToClaim.set(dist.Address.parse(poolWallet), true);
  }
  return (0,dist.beginCell)().storeUint(imports_constants/* JettonStakingOpCodes */.Hx.CLAIM_REWARDS, 32).storeUint(queryId ?? 0, 64).storeDict(rewardsToClaim, dist.Dictionary.Keys.Address(), dist.Dictionary.Values.Bool()).endCell();
}

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
function unpackDicts(obj) {
  if (!isSimpleObject(obj)) {
    return obj;
  }
  return mapValues(obj, value => {
    if (value instanceof Dictionary) {
      return unpackDicts(fromKeyValueArrays(value.keys(), value.values()));
    }
    if (isSimpleObject(value)) {
      return unpackDicts(value);
    }
    return value;
  });
}
function isSimpleObject(obj) {
  // eslint-disable-next-line no-null/no-null
  return obj !== null && typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype;
}
function getOurFeePayload() {
  return new Builder().storeUint(OpCode.OurFee, 32).endCell();
}
// EXTERNAL MODULE: ./src/util/account.ts
var util_account = __webpack_require__(86243);
;// ./src/util/compareVersions.ts
function compareVersions(versionA, versionB) {
  const partsA = versionA.split('.').map(Number);
  const partsB = versionB.split('.').map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const partA = partsA[i] || 0;
    const partB = partsB[i] || 0;
    if (partA > partB) return 1;
    if (partA < partB) return -1;
  }
  return 0;
}
// EXTERNAL MODULE: ./src/util/windowEnvironment.ts
var windowEnvironment = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/util/ledger/constants.ts
var ledger_constants = __webpack_require__(32693);
// EXTERNAL MODULE: ./src/util/ledger/utils.ts + 1 modules
var ledger_utils = __webpack_require__(99544);
;// ./src/api/chains/ton/contracts/Ethena/TsUSDeWallet.ts


var TsUSDeWallet_OpCode = /*#__PURE__*/function (OpCode) {
  OpCode[OpCode["transfer_timelocked"] = 3612397257] = "transfer_timelocked";
  return OpCode;
}(TsUSDeWallet_OpCode || {});
class TsUSDeWallet extends JettonWallet_JettonWallet {
  constructor(address) {
    super(address);
    this.address = address;
  }
  static createFromAddress(address) {
    return new TsUSDeWallet(address);
  }
  async getTimeLockData(provider) {
    try {
      const stack = (await provider.get('get_timelock_data', [])).stack;
      const lockedUsdeBalance = stack.readBigNumber();
      const unlockTime = stack.readNumber();
      return {
        lockedUsdeBalance,
        unlockTime
      };
    } catch (err) {
      var _err$message;
      if ((_err$message = err.message) !== null && _err$message !== void 0 && _err$message.includes('exit_code: -13')) {
        return {
          lockedUsdeBalance: 0n
        };
      } else {
        throw err;
      }
    }
  }
  static transferTimelockedMessage(options) {
    return (0,dist.beginCell)().storeUint(TsUSDeWallet_OpCode.transfer_timelocked, 32).storeUint(0, 64) // op, queryId
    .storeCoins(options.jettonAmount).storeAddress(options.to).storeAddress(options.responseAddress).storeMaybeRef(options.customPayload).storeCoins(options.forwardTonAmount).storeMaybeRef(options.forwardPayload).endCell();
  }
}
;// ./src/util/ledger/index.ts
/* provided dependency */ var ledger_Buffer = __webpack_require__(48287)["Buffer"];


























const knownJettonAddresses = ton_ledger_dist/* KNOWN_JETTONS */._t.map(_ref => {
  let {
    masterAddress
  } = _ref;
  return masterAddress.toString({
    bounceable: true,
    urlSafe: true
  });
});
let transport;
let tonTransport;
let transportSupport;
let currentLedgerTransport;
let hidImportPromise;
let bleImportPromise;
let BleConnector;
let MtwHidTransport;
let listLedgerDevices;
async function ensureBleConnector() {
  if (!config/* IS_CAPACITOR */.UMQ) return undefined;
  if (!bleImportPromise) {
    bleImportPromise = Promise.all(/* import() */[__webpack_require__.e(580), __webpack_require__.e(513), __webpack_require__.e(642)]).then(__webpack_require__.bind(__webpack_require__, 17642)).then(module => {
      return module.BleConnector;
    });
    BleConnector = await bleImportPromise;
  }
  return bleImportPromise;
}
async function ensureHidTransport() {
  if (!windowEnvironment/* IS_ANDROID_APP */.xy) return undefined;
  if (!hidImportPromise) {
    hidImportPromise = Promise.all(/* import() */[__webpack_require__.e(580), __webpack_require__.e(897)]).then(__webpack_require__.bind(__webpack_require__, 52897)).then(module => {
      return {
        transport: module.HIDTransport,
        listLedgerDevices: module.listLedgerDevices
      };
    });
    const result = await hidImportPromise;
    MtwHidTransport = result.transport;
    listLedgerDevices = result.listLedgerDevices;
  }
  return hidImportPromise;
}
void ensureBleConnector();
void ensureHidTransport();
async function detectAvailableTransports() {
  await ensureBleConnector();
  await ensureHidTransport();
  const [hid, bluetooth, webUsb] = await Promise.all([windowEnvironment/* IS_ANDROID_APP */.xy ? MtwHidTransport.isSupported() : TransportWebHID/* default */.A.isSupported(), BleConnector ? BleConnector.isSupported() : false, TransportWebUSB/* default */.A.isSupported()]);
  (0,logs/* logDebug */.MD)('LEDGER TRANSPORTS', {
    hid,
    bluetooth,
    webUsb
  });
  transportSupport = {
    hid,
    bluetooth,
    webUsb
  };
  return {
    isUsbAvailable: hid || webUsb,
    isBluetoothAvailable: bluetooth
  };
}
async function hasUsbDevice() {
  const support = await getTransportSupport();
  if (support.hid) {
    return windowEnvironment/* IS_ANDROID_APP */.xy ? await hasCapacitorHIDDevice() : await hasWebHIDDevice();
  }
  if (support.webUsb) {
    return await hasWebUsbDevice();
  }
  return false;
}
function getInternalWalletVersion(version) {
  return ledger_constants/* LedgerWalletVersion */.fE[version];
}
async function importLedgerWallet(network, accountIndex) {
  const walletInfo = await getLedgerWalletInfo(network, accountIndex);
  return (0,api/* callApi */.p)('importLedgerWallet', network, walletInfo);
}
function openSystemBluetoothSettings() {
  if (!BleConnector) return;
  void BleConnector.openSettings();
}
async function reconnectLedger() {
  try {
    var _tonTransport;
    if (await ((_tonTransport = tonTransport) === null || _tonTransport === void 0 ? void 0 : _tonTransport.isAppOpen())) {
      return true;
    }
  } catch {
    // Do nothing
  }
  const isLedgerConnected = await connectLedger();
  if (!isLedgerConnected) return false;
  try {
    return await waitLedgerTonApp();
  } catch (err) {
    if ((0,ledger_utils/* isLedgerConnectionBroken */.HN)(err.name)) {
      return reconnectLedger();
    }
    throw err;
  }
}
async function connectLedger(preferredTransport) {
  const support = await getTransportSupport();
  if (preferredTransport) currentLedgerTransport = preferredTransport;
  try {
    switch (currentLedgerTransport) {
      case 'bluetooth':
        transport = await connectBLE();
        break;
      case 'usb':
      default:
        if (support.hid) {
          transport = await connectHID();
        } else if (support.webUsb) {
          transport = await connectWebUsb();
        }
        break;
    }
    if (!transport) {
      (0,logs/* logDebugError */.SJ)('connectLedger: BLE and/or HID are not supported');
      return false;
    }
    tonTransport = new ton_ledger_dist/* TonTransport */.vs(transport);
    return true;
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('connectLedger', err);
    return false;
  }
}
async function waitLedgerTonAppDeadline() {
  await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz * ledger_constants/* ATTEMPTS */.PY);
  return false;
}
async function checkTonApp() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    try {
      var _tonTransport2;
      const isTonOpen = await ((_tonTransport2 = tonTransport) === null || _tonTransport2 === void 0 ? void 0 : _tonTransport2.isAppOpen());
      if (isTonOpen) {
        var _transport;
        if ((_transport = transport) !== null && _transport !== void 0 && (_transport = _transport.deviceModel) !== null && _transport !== void 0 && _transport.id.startsWith('nanoS')) {
          var _tonTransport3;
          // Workaround for Ledger Nano S or Nano S Plus, this is a way to check if it is unlocked.
          // There will be an error with code 0x530c.
          await ((_tonTransport3 = tonTransport) === null || _tonTransport3 === void 0 ? void 0 : _tonTransport3.getAddress(getLedgerAccountPathByIndex(0), {
            walletVersion: ledger_constants/* LedgerWalletVersion */.fE[ledger_constants/* DEFAULT_WALLET_VERSION */.Ro]
          }));
        }
        return true;
      }
    } catch (err) {
      if ((0,ledger_utils/* isLedgerConnectionBroken */.HN)(err.name)) {
        tonTransport = undefined;
        throw err;
      }
      if (!(err !== null && err !== void 0 && err.message.includes('0x530c'))) {
        (0,logs/* logDebugError */.SJ)('waitLedgerTonApp', err);
      }
    }
    await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
  }
  return false;
}
function waitLedgerTonApp() {
  return Promise.race([checkTonApp(), waitLedgerTonAppDeadline()]);
}
function connectHID() {
  if (windowEnvironment/* IS_ANDROID_APP */.xy) {
    return connectCapacitorHID();
  }
  return connectWebHID();
}
async function connectWebHID() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    const [device] = await TransportWebHID/* default */.A.list();
    if (!device) {
      await TransportWebHID/* default */.A.create();
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
      continue;
    }
    if (device.opened) {
      return new TransportWebHID/* default */.A(device);
    } else {
      return TransportWebHID/* default */.A.open(device);
    }
  }
  throw new Error('Failed to connect');
}
async function connectWebUsb() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    const [device] = await TransportWebUSB/* default */.A.list();
    if (!device) {
      await TransportWebUSB/* default */.A.create();
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
      continue;
    }
    if (device.opened) {
      return (await TransportWebUSB/* default */.A.openConnected()) ?? (await TransportWebUSB/* default */.A.request());
    } else {
      return TransportWebUSB/* default */.A.open(device);
    }
  }
  throw new Error('Failed to connect');
}
async function connectCapacitorHID() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    const [device] = await listLedgerDevices();
    if (!device) {
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
      continue;
    }
    try {
      return await Promise.race([MtwHidTransport.open(device), new Promise((_, reject) => {
        setTimeout(() => reject(new Error()), 1000);
      })]);
    } catch (error) {
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
    }
  }
  throw new Error('Failed to connect');
}
async function connectBLE() {
  if (!BleConnector) {
    throw new Error('BLE is not supported on this device.');
  }
  const connection = await BleConnector.connect();
  return connection.bleTransport;
}
async function submitLedgerStake(accountId, amount, state) {
  let realFee = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0n;
  const address = await (0,api/* callApi */.p)('fetchAddress', accountId, 'ton');
  let result;
  const localTransactionParams = {
    type: 'stake',
    fee: realFee
  };
  switch (state.type) {
    case 'nominators':
      {
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: state.pool,
          amount: amount + constants/* TON_GAS */.sl.stakeNominators,
          comment: constants/* STAKE_COMMENT */.v8
        }, config/* TONCOIN */.Tu9.slug, localTransactionParams);
        break;
      }
    case 'liquid':
      {
        const payload = {
          type: 'tonstakers-deposit',
          queryId: 0n,
          // eslint-disable-next-line no-null/no-null
          appId: null
        };
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: config/* LIQUID_POOL */.qMf,
          amount: amount + constants/* TON_GAS */.sl.stakeLiquid
        }, config/* TONCOIN */.Tu9.slug, localTransactionParams, payload);
        break;
      }
    case 'jetton':
      {
        const {
          pool: poolAddress,
          period,
          tokenAddress,
          tokenSlug
        } = state;
        Object.assign(localTransactionParams, {
          inMsgHash: undefined,
          slug: tokenSlug,
          toAddress: poolAddress
        });
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: poolAddress,
          tokenAddress,
          amount,
          data: StakingPool.stakePayload(period),
          forwardAmount: constants/* TON_GAS */.sl.stakeJettonsForward
        }, config/* TONCOIN */.Tu9.slug, localTransactionParams);
        break;
      }
    case 'ethena':
      {
        localTransactionParams.toAddress = config/* ETHENA_STAKING_VAULT */.BV6;
        localTransactionParams.slug = state.tokenSlug;
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: config/* ETHENA_STAKING_VAULT */.BV6,
          tokenAddress: config/* TON_USDE */.wpN.tokenAddress,
          amount,
          forwardAmount: constants/* TON_GAS */.sl.stakeEthenaForward
        }, config/* TONCOIN */.Tu9.slug, localTransactionParams);
      }
  }
  if (result) {
    await (0,api/* callApi */.p)('updateAccountMemoryCache', accountId, address, {
      stakedAt: Date.now()
    });
  }
  return result;
}
async function submitLedgerUnstake(accountId, state, amount) {
  let realFee = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0n;
  const {
    network
  } = (0,util_account/* parseAccountId */.cK)(accountId);
  const address = await (0,api/* callApi */.p)('fetchAddress', accountId, 'ton');
  let result;
  const localActivityParams = {
    type: 'unstakeRequest',
    fee: realFee
  };
  switch (state.type) {
    case 'nominators':
      {
        const poolAddress = toBase64Address(state.pool, true, network);
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: poolAddress,
          amount: constants/* TON_GAS */.sl.unstakeNominators,
          comment: constants/* UNSTAKE_COMMENT */.mv
        }, config/* TONCOIN */.Tu9.slug, localActivityParams);
        break;
      }
    case 'liquid':
      {
        const tokenWalletAddress = await (0,api/* callApi */.p)('resolveTokenWalletAddress', network, address, config/* LIQUID_JETTON */.Kzb);
        const mode = !state.instantAvailable ? types/* ApiLiquidUnstakeMode */.Dn.BestRate : types/* ApiLiquidUnstakeMode */.Dn.Default;
        const fillOrKill = false;
        const waitTillRoundEnd = mode === types/* ApiLiquidUnstakeMode */.Dn.BestRate;
        const payload = {
          type: 'jetton-burn',
          queryId: 0n,
          amount,
          responseDestination: address_Address.Address.parse(address),
          customPayload: buildLiquidStakingWithdrawCustomPayload(waitTillRoundEnd, fillOrKill)
        };
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: tokenWalletAddress,
          amount: constants/* TON_GAS */.sl.unstakeLiquid
        }, config/* TONCOIN */.Tu9.slug, localActivityParams, payload);
        break;
      }
    case 'jetton':
      {
        const {
          stakeWalletAddress
        } = state;
        const payload = {
          type: 'unsafe',
          message: buildJettonUnstakePayload(amount, true)
        };
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: stakeWalletAddress,
          amount: constants/* TON_GAS */.sl.unstakeJettons
        }, config/* TONCOIN */.Tu9.slug, localActivityParams, payload);
        break;
      }
    case 'ethena':
      {
        localActivityParams.amount = constants/* TON_GAS */.sl.unstakeEthena;
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: config/* TON_TSUSDE */.VG8.tokenAddress,
          amount,
          tokenAddress: config/* TON_TSUSDE */.VG8.tokenAddress,
          forwardAmount: constants/* TON_GAS */.sl.unstakeEthenaForward
        }, config/* TONCOIN */.Tu9.slug, localActivityParams);
        break;
      }
  }
  return result;
}
async function submitLedgerStakingClaimOrUnlock(accountId, state) {
  let realFee = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0n;
  const fromAddress = await (0,api/* callApi */.p)('fetchAddress', accountId, 'ton');
  let result;
  switch (state.type) {
    case 'jetton':
      {
        const payload = {
          type: 'unsafe',
          message: buildJettonClaimPayload(state.poolWallets)
        };
        const localActivityParams = {
          fee: realFee
        };
        result = await submitLedgerTransfer({
          accountId,
          amount: constants/* TON_GAS */.sl.claimJettons,
          password: '',
          toAddress: state.stakeWalletAddress
        }, config/* TONCOIN */.Tu9.slug, localActivityParams, payload);
        break;
      }
    case 'ethena':
      {
        const payload = {
          type: 'unsafe',
          message: TsUSDeWallet.transferTimelockedMessage({
            jettonAmount: state.unstakeRequestAmount,
            to: address_Address.Address.parse(config/* TON_TSUSDE */.VG8.tokenAddress),
            responseAddress: address_Address.Address.parse(fromAddress),
            forwardTonAmount: constants/* TON_GAS */.sl.unstakeEthenaLockedForward
          })
        };
        const localActivityParams = {
          type: 'unstake',
          fee: realFee
        };
        result = await submitLedgerTransfer({
          accountId,
          password: '',
          toAddress: state.tsUsdeWalletAddress,
          amount: constants/* TON_GAS */.sl.unstakeEthenaLocked
        }, config/* TONCOIN */.Tu9.slug, localActivityParams, payload);
      }
  }
  return result;
}
async function submitLedgerTransfer(options, slug, localActivityParams, payload) {
  const {
    accountId,
    tokenAddress,
    comment,
    data,
    forwardAmount
  } = options;
  let {
    toAddress,
    amount
  } = options;
  const {
    network
  } = (0,util_account/* parseAccountId */.cK)(accountId);
  const pendingTransferId = await (0,api/* callApi */.p)('waitAndCreateTonPendingTransfer', accountId);
  const fromAddress = await (0,api/* callApi */.p)('fetchAddress', accountId, 'ton');
  const [path, walletInfo, appInfo, account] = await Promise.all([getLedgerAccountPath(accountId), (0,api/* callApi */.p)('getWalletInfo', network, fromAddress), getTonAppInfo(), (0,api/* callApi */.p)('fetchLedgerAccount', accountId)]);
  const {
    seqno,
    balance
  } = walletInfo;
  const parsedAddress = address_Address.Address.parseFriendly(toAddress);
  let isBounceable = parsedAddress.isBounceable;
  const normalizedAddress = parsedAddress.address.toString({
    urlSafe: true,
    bounceable: constants/* DEFAULT_IS_BOUNCEABLE */.e2
  });
  const {
    isUnsafeSupported,
    isJettonIdSupported
  } = appInfo;
  if (tokenAddress) {
    ({
      toAddress,
      amount,
      payload
    } = await buildLedgerTokenTransfer({
      network,
      tokenAddress,
      fromAddress: fromAddress,
      toAddress,
      amount,
      data: comment || data,
      isJettonIdSupported,
      forwardAmount
    }));
    isBounceable = true;
  } else if (comment) {
    if ((0,ledger_utils/* isValidLedgerComment */.Vq)(comment)) {
      payload = {
        type: 'comment',
        text: comment
      };
    } else if (isUnsafeSupported) {
      payload = {
        type: 'unsafe',
        message: buildCommentPayload(comment)
      };
    } else {
      return {
        error: types/* ApiTransactionError */.jf.NotSupportedHardwareOperation
      };
    }
  }
  const isFullTonBalance = !tokenAddress && balance === amount;
  const sendMode = (isFullTonBalance ? SendMode.SendMode.CARRY_ALL_REMAINING_BALANCE : SendMode.SendMode.PAY_GAS_SEPARATELY) + SendMode.SendMode.IGNORE_ERRORS;
  const walletSpecifiers = account.ton.version === 'v3R2' ? {
    includeWalletOp: false
  } : undefined;
  try {
    const signedCell = await tonTransport.signTransaction(path, {
      to: address_Address.Address.parse(toAddress),
      sendMode,
      seqno,
      timeout: getTransferExpirationTime(),
      bounce: isBounceable,
      amount: BigInt(amount),
      payload,
      walletSpecifiers
    });
    const message = {
      base64: signedCell.toBoc().toString('base64'),
      seqno,
      localActivity: {
        amount: options.amount,
        fromAddress: fromAddress,
        toAddress: normalizedAddress,
        comment,
        slug,
        fee: 0n,
        ...localActivityParams
      }
    };
    return await (0,api/* callApi */.p)('sendSignedTransferMessage', accountId, message, pendingTransferId);
  } catch (err) {
    await (0,api/* callApi */.p)('cancelPendingTransfer', pendingTransferId);
    handleLedgerErrors(err);
    (0,logs/* logDebugError */.SJ)('submitLedgerTransfer', err);
    return undefined;
  }
}
async function submitLedgerNftTransfer(options) {
  const {
    accountId,
    nftAddress,
    comment,
    nft,
    realFee
  } = options;
  let {
    toAddress
  } = options;
  const {
    network
  } = (0,util_account/* parseAccountId */.cK)(accountId);
  const pendingTransferId = await (0,api/* callApi */.p)('waitAndCreateTonPendingTransfer', accountId);
  const fromAddress = await (0,api/* callApi */.p)('fetchAddress', accountId, 'ton');
  const [path, walletInfo, appInfo, account] = await Promise.all([getLedgerAccountPath(accountId), (0,api/* callApi */.p)('getWalletInfo', network, fromAddress), getTonAppInfo(), (0,api/* callApi */.p)('fetchLedgerAccount', accountId)]);
  if (!appInfo.isUnsafeSupported) {
    return {
      error: types/* ApiTransactionError */.jf.NotSupportedHardwareOperation
    };
  }
  const {
    seqno
  } = walletInfo;
  const isNotcoinBurn = (nft === null || nft === void 0 ? void 0 : nft.collectionAddress) === config/* NOTCOIN_VOUCHERS_ADDRESS */.KmP && (toAddress === config/* BURN_ADDRESS */.pV9 || config/* NOTCOIN_EXCHANGERS */.WVU.includes(toAddress));
  // eslint-disable-next-line no-null/no-null
  let forwardPayload = null;
  let forwardAmount = constants/* NFT_TRANSFER_FORWARD_AMOUNT */.Wb;
  if (isNotcoinBurn) {
    ({
      forwardPayload,
      toAddress
    } = buildNotcoinVoucherExchange(nftAddress, nft.index));
    forwardAmount = 50000000n;
  } else if (comment) {
    forwardPayload = buildCommentPayload(comment);
  }
  const walletSpecifiers = account.ton.version === 'v3R2' ? {
    includeWalletOp: false
  } : undefined;
  try {
    const signedCell = await tonTransport.signTransaction(path, {
      to: address_Address.Address.parse(nftAddress),
      sendMode: SendMode.SendMode.PAY_GAS_SEPARATELY + SendMode.SendMode.IGNORE_ERRORS,
      seqno,
      timeout: getTransferExpirationTime(),
      bounce: true,
      amount: constants/* NFT_TRANSFER_AMOUNT */.uS,
      payload: {
        type: 'nft-transfer',
        queryId: 0n,
        newOwner: address_Address.Address.parse(toAddress),
        responseDestination: address_Address.Address.parse(fromAddress),
        // eslint-disable-next-line no-null/no-null
        customPayload: null,
        forwardAmount,
        forwardPayload
      },
      walletSpecifiers
    });
    const message = {
      base64: signedCell.toBoc().toString('base64'),
      seqno,
      localActivity: {
        amount: 0n,
        // Regular NFT transfers should have no amount in the activity list
        fromAddress: fromAddress,
        toAddress: options.toAddress,
        comment,
        fee: realFee ?? 0n,
        slug: config/* TONCOIN */.Tu9.slug,
        nft,
        normalizedAddress: toBase64Address(nftAddress, true, network)
      }
    };
    return await (0,api/* callApi */.p)('sendSignedTransferMessage', accountId, message, pendingTransferId);
  } catch (error) {
    await (0,api/* callApi */.p)('cancelPendingTransfer', pendingTransferId);
    (0,logs/* logDebugError */.SJ)('submitLedgerNftTransfer', error);
    return undefined;
  }
}
function buildNotcoinVoucherExchange(nftAddress, nftIndex) {
  const first4Bits = address_Address.Address.parse(nftAddress).hash.readUint8() >> 4;
  const toAddress = config/* NOTCOIN_EXCHANGERS */.WVU[first4Bits];
  const forwardPayload = new boc_Builder.Builder().storeUint(0x5fec6642, 32).storeUint(nftIndex, 64).endCell();
  return {
    forwardPayload,
    toAddress
  };
}
async function buildLedgerTokenTransfer(_ref2) {
  let {
    network,
    tokenAddress,
    fromAddress,
    toAddress,
    amount,
    data,
    isJettonIdSupported,
    forwardAmount = constants/* TOKEN_TRANSFER_FORWARD_AMOUNT */.tF
  } = _ref2;
  const tokenWalletAddress = await (0,api/* callApi */.p)('resolveTokenWalletAddress', network, fromAddress, tokenAddress);
  const realTokenAddress = await (0,api/* callApi */.p)('resolveTokenAddress', network, tokenWalletAddress);
  if (tokenAddress !== realTokenAddress) {
    throw new Error('Invalid contract');
  }

  // eslint-disable-next-line no-null/no-null
  const forwardPayload = typeof data === 'string' ? buildCommentPayload(data) : data ?? null;
  const payload = {
    type: 'jetton-transfer',
    queryId: 0n,
    amount,
    destination: address_Address.Address.parse(toAddress),
    responseDestination: address_Address.Address.parse(fromAddress),
    // eslint-disable-next-line no-null/no-null
    customPayload: null,
    forwardAmount,
    forwardPayload,
    // eslint-disable-next-line no-null/no-null
    knownJetton: isJettonIdSupported ? getKnownJettonId(tokenAddress) : null
  };
  const tonAmountForTransfer = await (0,api/* callApi */.p)('getAmountForTokenTransfer', tokenAddress, false);
  if (!tonAmountForTransfer) {
    throw new Error('Couldn\'t get the TON amount for transfer');
  }
  let toncoinAmount = tonAmountForTransfer.amount;
  if (forwardAmount > constants/* TOKEN_TRANSFER_FORWARD_AMOUNT */.tF) {
    toncoinAmount += forwardAmount;
  }
  return {
    amount: toncoinAmount,
    toAddress: tokenWalletAddress,
    payload
  };
}
function getKnownJettonId(tokenAddress) {
  const index = knownJettonAddresses.indexOf(tokenAddress);
  // eslint-disable-next-line no-null/no-null
  return index > -1 ? {
    jettonId: index,
    workchain: constants/* WORKCHAIN */.Zm
  } : null;
}
function buildCommentPayload(comment) {
  const bytes = commentToBytes(comment);
  return packBytesAsSnakeCell(bytes);
}
async function signLedgerTransactions(accountId, messages, options) {
  const {
    isTonConnect,
    vestingAddress
  } = options ?? {};
  const {
    network
  } = (0,util_account/* parseAccountId */.cK)(accountId);
  const [path, appInfo, account] = await Promise.all([getLedgerAccountPath(accountId), getTonAppInfo(), (0,api/* callApi */.p)('fetchLedgerAccount', accountId)]);
  const fromAddress = account.ton.address;
  const {
    isUnsafeSupported,
    isJettonIdSupported
  } = appInfo;
  if (isTonConnect && !isUnsafeSupported) {
    throw new errors/* ApiUnsupportedVersionError */.cp('Please update Ledger TON app.');
  }
  const seqno = await (0,api/* callApi */.p)('getWalletSeqno', accountId, vestingAddress);
  let walletSpecifiers;
  if (account.ton.version === 'v3R2') {
    walletSpecifiers = {
      includeWalletOp: false
    };
  }
  if (vestingAddress) {
    walletSpecifiers = {
      subwalletId: ledger_constants/* VESTING_SUBWALLET_ID */.$C,
      includeWalletOp: false
    };
  }
  const preparedParams = await Promise.all(messages.map(async (message, index) => {
    var _ledgerPayload;
    const {
      toAddress,
      amount,
      stateInit: stateInitBase64,
      rawPayload
    } = message;
    const isBounceable = address_Address.Address.isFriendly(toAddress) ? address_Address.Address.parseFriendly(toAddress).isBounceable : constants/* DEFAULT_IS_BOUNCEABLE */.e2;
    let ledgerPayload;
    if (rawPayload) {
      ledgerPayload = (0,ton_ledger_dist/* parseMessage */.vY)(boc_Cell.Cell.fromBase64(rawPayload), {
        disallowModification: true
      });
    }
    if (((_ledgerPayload = ledgerPayload) === null || _ledgerPayload === void 0 ? void 0 : _ledgerPayload.type) === 'jetton-transfer') {
      const tokenAddress = await (0,api/* callApi */.p)('resolveTokenAddress', network, toAddress);
      // eslint-disable-next-line no-null/no-null
      ledgerPayload.knownJetton = isJettonIdSupported ? getKnownJettonId(tokenAddress) : null;
    }
    const stateInit = stateInitBase64 ? (0,dist.loadStateInit)(boc_Cell.Cell.fromBase64(stateInitBase64).asSlice()) : undefined;
    return {
      to: address_Address.Address.parse(toAddress),
      sendMode: SendMode.SendMode.PAY_GAS_SEPARATELY + SendMode.SendMode.IGNORE_ERRORS,
      seqno: seqno + index,
      timeout: getTransferExpirationTime(),
      bounce: isBounceable,
      amount: BigInt(amount),
      payload: ledgerPayload,
      walletSpecifiers,
      stateInit
    };
  }));
  const signedMessages = [];
  const attempts = ledger_constants/* ATTEMPTS */.PY + preparedParams.length;
  let index = 0;
  let attempt = 0;
  while (index < preparedParams.length && attempt < attempts) {
    const params = preparedParams[index];
    const message = messages[index];
    try {
      var _message$payload;
      const base64 = (await tonTransport.signTransaction(path, params)).toBoc().toString('base64');
      signedMessages.push({
        base64,
        seqno: params.seqno,
        localActivity: {
          amount: message.amount,
          fromAddress,
          toAddress: message.toAddress,
          comment: ((_message$payload = message.payload) === null || _message$payload === void 0 ? void 0 : _message$payload.type) === 'comment' ? message.payload.comment : undefined,
          fee: 0n,
          slug: config/* TONCOIN */.Tu9.slug
        }
      });
      index++;
    } catch (err) {
      handleLedgerErrors(err);
      (0,logs/* logDebugError */.SJ)('signLedgerTransactions', err);
    }
    attempt++;
  }
  return signedMessages;
}
async function signLedgerProof(accountId, proof) {
  const path = await getLedgerAccountPath(accountId);
  const {
    timestamp,
    domain,
    payload
  } = proof;
  const result = await tonTransport.getAddressProof(path, {
    domain,
    timestamp,
    payload: ledger_Buffer.from(payload)
  });
  return result.signature.toString('base64');
}
function submitLedgerDnsRenewal(accountId, nft, realFee) {
  return submitLedgerTransfer({
    accountId,
    password: '',
    toAddress: nft.address,
    amount: constants/* TON_GAS */.sl.changeDns
  }, config/* TONCOIN */.Tu9.slug, {
    type: 'dnsRenew',
    fee: realFee,
    nft
  }, {
    type: 'unsafe',
    message: DnsItem_DnsItem.buildFillUpMessage()
  });
}
function submitLedgerDnsChangeWallet(accountId, nft, newWalletAddress, realFee) {
  return submitLedgerTransfer({
    accountId,
    password: '',
    toAddress: nft.address,
    amount: constants/* TON_GAS */.sl.changeDns
  }, config/* TONCOIN */.Tu9.slug, {
    type: 'dnsChangeAddress',
    fee: realFee,
    nft
  }, {
    type: 'unsafe',
    message: DnsItem_DnsItem.buildChangeDnsWalletMessage(newWalletAddress)
  });
}
async function getNextLedgerWallets(network) {
  let lastExistingIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  let alreadyImportedAddresses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const result = [];
  let index = lastExistingIndex + 1;
  try {
    while (true) {
      const walletInfo = await getLedgerWalletInfo(network, index);
      if (alreadyImportedAddresses.includes(walletInfo.address)) {
        index += 1;
        continue;
      }
      if (walletInfo.balance !== 0n) {
        result.push(walletInfo);
        index += 1;
        continue;
      }
      if (!result.length) {
        result.push(walletInfo);
      }
      return result;
    }
  } catch (err) {
    return (0,errors/* handleServerError */.QS)(err);
  }
}
async function getLedgerWalletInfo(network, accountIndex) {
  var _deviceModel, _deviceModel2;
  const isTestnet = network === 'testnet';
  const {
    address,
    publicKey
  } = await getLedgerWalletAddress(accountIndex, isTestnet);
  const balance = await (0,api/* callApi */.p)('getWalletBalance', 'ton', network, address);
  return {
    index: accountIndex,
    address,
    publicKey: publicKey.toString('hex'),
    balance,
    version: ledger_constants/* DEFAULT_WALLET_VERSION */.Ro,
    driver: 'HID',
    deviceId: (_deviceModel = transport.deviceModel) === null || _deviceModel === void 0 ? void 0 : _deviceModel.id,
    deviceName: (_deviceModel2 = transport.deviceModel) === null || _deviceModel2 === void 0 ? void 0 : _deviceModel2.productName
  };
}
function getLedgerWalletAddress(index, isTestnet) {
  const path = getLedgerAccountPathByIndex(index);
  return tonTransport.getAddress(path, {
    testOnly: isTestnet,
    chain: ledger_constants/* INTERNAL_WORKCHAIN */.xk,
    bounceable: constants/* WALLET_IS_BOUNCEABLE */.eL,
    walletVersion: ledger_constants/* LedgerWalletVersion */.fE[ledger_constants/* DEFAULT_WALLET_VERSION */.Ro]
  });
}
async function verifyAddress(accountId) {
  const [account, path] = await Promise.all([(0,api/* callApi */.p)('fetchLedgerAccount', accountId), getLedgerAccountPath(accountId)]);
  await tonTransport.validateAddress(path, {
    bounceable: ledger_constants/* IS_BOUNCEABLE */.mN,
    walletVersion: getInternalWalletVersion(account.ton.version)
  });
}
async function getLedgerAccountPath(accountId) {
  const account = await (0,api/* callApi */.p)('fetchLedgerAccount', accountId);
  const index = account.ton.index;
  return getLedgerAccountPathByIndex(index);
}
function getLedgerAccountPathByIndex(index, isTestnet) {
  let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constants/* WORKCHAIN */.Zm;
  const network = isTestnet ? 1 : 0;
  const chain = workchain === constants/* Workchain */.li.MasterChain ? 255 : 0;
  return [44, 607, network, chain, index, 0];
}
function getTransferExpirationTime() {
  return Math.floor(Date.now() / 1000 + constants/* TRANSFER_TIMEOUT_SEC */.kF);
}
async function getTonAppInfo() {
  var _deviceModel3;
  const version = await tonTransport.getVersion();
  const isUnsafeSupported = compareVersions(version, ledger_constants/* VERSION_WITH_UNSAFE */.zg) >= 0;
  const isJettonIdSupported = compareVersions(version, ledger_constants/* VERSION_WITH_JETTON_ID */.x9) >= 0
  // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
  && ((_deviceModel3 = transport.deviceModel) === null || _deviceModel3 === void 0 ? void 0 : _deviceModel3.id) !== 'nanoS';
  return {
    version,
    isUnsafeSupported,
    isJettonIdSupported
  };
}
function handleLedgerErrors(err) {
  if (err !== null && err !== void 0 && err.message.includes('(0xbd00)')) {
    throw new errors/* ApiHardwareBlindSigningNotEnabled */.bS();
  }
  if ((err === null || err === void 0 ? void 0 : err.statusCode) === lib_es.StatusCodes.CONDITIONS_OF_USE_NOT_SATISFIED) {
    throw new errors/* ApiUserRejectsError */.KB();
  }
}
async function tryDetectDevice(listDeviceFn, createTransportFn) {
  try {
    for (let i = 0; i < ledger_constants/* DEVICE_DETECT_ATTEMPTS */.eZ; i++) {
      const [device] = await listDeviceFn();
      if (!device) {
        if (createTransportFn) await createTransportFn();
        await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
        continue;
      }
      return true;
    }
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryDetectDevice', err);
  }
  return false;
}
function hasWebHIDDevice() {
  return tryDetectDevice(() => TransportWebHID/* default */.A.list(), () => TransportWebHID/* default */.A.create());
}
function hasWebUsbDevice() {
  return tryDetectDevice(() => TransportWebUSB/* default */.A.list(), () => TransportWebUSB/* default */.A.create());
}
function hasCapacitorHIDDevice() {
  return tryDetectDevice(listLedgerDevices);
}
async function getTransportSupport() {
  // Ensure transports support is detected lazily if missing
  if (!transportSupport) {
    await detectAvailableTransports();
  }
  return transportSupport;
}

/***/ }),

/***/ 32693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $C: () => (/* binding */ VESTING_SUBWALLET_ID),
/* harmony export */   Hz: () => (/* binding */ PAUSE),
/* harmony export */   PY: () => (/* binding */ ATTEMPTS),
/* harmony export */   Ro: () => (/* binding */ DEFAULT_WALLET_VERSION),
/* harmony export */   eZ: () => (/* binding */ DEVICE_DETECT_ATTEMPTS),
/* harmony export */   fE: () => (/* binding */ LedgerWalletVersion),
/* harmony export */   mN: () => (/* binding */ IS_BOUNCEABLE),
/* harmony export */   x9: () => (/* binding */ VERSION_WITH_JETTON_ID),
/* harmony export */   xk: () => (/* binding */ INTERNAL_WORKCHAIN),
/* harmony export */   zg: () => (/* binding */ VERSION_WITH_UNSAFE)
/* harmony export */ });
let LedgerWalletVersion = /*#__PURE__*/function (LedgerWalletVersion) {
  LedgerWalletVersion["v3R2"] = "v3r2";
  LedgerWalletVersion["v4R2"] = "v4";
  return LedgerWalletVersion;
}({});
const INTERNAL_WORKCHAIN = 0; // workchain === -1 ? 255 : 0;
const DEFAULT_WALLET_VERSION = 'v4R2';
const DEVICE_DETECT_ATTEMPTS = 3;
const PAUSE = 125;
const ATTEMPTS = 10;
const IS_BOUNCEABLE = false;
const VERSION_WITH_UNSAFE = '2.1.0';
const VERSION_WITH_JETTON_ID = '2.2.0';
const VESTING_SUBWALLET_ID = 0x10C;

/***/ }),

/***/ 51936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isRetryAllowed)
/* harmony export */ });
const denyList = new Set(['ENOTFOUND', 'ENETUNREACH',
// SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
'UNABLE_TO_GET_ISSUER_CERT', 'UNABLE_TO_GET_CRL', 'UNABLE_TO_DECRYPT_CERT_SIGNATURE', 'UNABLE_TO_DECRYPT_CRL_SIGNATURE', 'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY', 'CERT_SIGNATURE_FAILURE', 'CRL_SIGNATURE_FAILURE', 'CERT_NOT_YET_VALID', 'CERT_HAS_EXPIRED', 'CRL_NOT_YET_VALID', 'CRL_HAS_EXPIRED', 'ERROR_IN_CERT_NOT_BEFORE_FIELD', 'ERROR_IN_CERT_NOT_AFTER_FIELD', 'ERROR_IN_CRL_LAST_UPDATE_FIELD', 'ERROR_IN_CRL_NEXT_UPDATE_FIELD', 'OUT_OF_MEM', 'DEPTH_ZERO_SELF_SIGNED_CERT', 'SELF_SIGNED_CERT_IN_CHAIN', 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'CERT_CHAIN_TOO_LONG', 'CERT_REVOKED', 'INVALID_CA', 'PATH_LENGTH_EXCEEDED', 'INVALID_PURPOSE', 'CERT_UNTRUSTED', 'CERT_REJECTED', 'HOSTNAME_MISMATCH']);

// TODO: Use `error?.code` when targeting Node.js 14
function isRetryAllowed(error) {
  return !denyList.has(error && error.code);
}

/***/ }),

/***/ 71281:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 91179:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_OPTIONS = exports.exponentialDelay = exports.isNetworkOrIdempotentRequestError = exports.isIdempotentRequestError = exports.isSafeRequestError = exports.isRetryableError = exports.isNetworkError = exports.namespace = void 0;
const is_retry_allowed_1 = __importDefault(__webpack_require__(51936));
exports.namespace = 'axios-retry';
function isNetworkError(error) {
  const CODE_EXCLUDE_LIST = ['ERR_CANCELED', 'ECONNABORTED'];
  if (error.response) {
    return false;
  }
  if (!error.code) {
    return false;
  }
  // Prevents retrying timed out & cancelled requests
  if (CODE_EXCLUDE_LIST.includes(error.code)) {
    return false;
  }
  // Prevents retrying unsafe errors
  return (0, is_retry_allowed_1.default)(error);
}
exports.isNetworkError = isNetworkError;
const SAFE_HTTP_METHODS = ['get', 'head', 'options'];
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
function isRetryableError(error) {
  return error.code !== 'ECONNABORTED' && (!error.response || error.response.status >= 500 && error.response.status <= 599);
}
exports.isRetryableError = isRetryableError;
function isSafeRequestError(error) {
  var _a;
  if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
    // Cannot determine if the request can be retried
    return false;
  }
  return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isSafeRequestError = isSafeRequestError;
function isIdempotentRequestError(error) {
  var _a;
  if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
    // Cannot determine if the request can be retried
    return false;
  }
  return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isIdempotentRequestError = isIdempotentRequestError;
function isNetworkOrIdempotentRequestError(error) {
  return isNetworkError(error) || isIdempotentRequestError(error);
}
exports.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
function noDelay() {
  return 0;
}
function exponentialDelay() {
  let retryNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let _error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let delayFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  const delay = Math.pow(2, retryNumber) * delayFactor;
  const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
  return delay + randomSum;
}
exports.exponentialDelay = exponentialDelay;
exports.DEFAULT_OPTIONS = {
  retries: 3,
  retryCondition: isNetworkOrIdempotentRequestError,
  retryDelay: noDelay,
  shouldResetTimeout: false,
  onRetry: () => {}
};
function getRequestOptions(config, defaultOptions) {
  return Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_OPTIONS), defaultOptions), config[exports.namespace]);
}
function setCurrentState(config, defaultOptions) {
  const currentState = getRequestOptions(config, defaultOptions || {});
  currentState.retryCount = currentState.retryCount || 0;
  currentState.lastRequestTime = currentState.lastRequestTime || Date.now();
  config[exports.namespace] = currentState;
  return currentState;
}
function fixConfig(axiosInstance, config) {
  // @ts-ignore
  if (axiosInstance.defaults.agent === config.agent) {
    // @ts-ignore
    delete config.agent;
  }
  if (axiosInstance.defaults.httpAgent === config.httpAgent) {
    delete config.httpAgent;
  }
  if (axiosInstance.defaults.httpsAgent === config.httpsAgent) {
    delete config.httpsAgent;
  }
}
function shouldRetry(currentState, error) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      retries,
      retryCondition
    } = currentState;
    const shouldRetryOrPromise = (currentState.retryCount || 0) < retries && retryCondition(error);
    // This could be a promise
    if (typeof shouldRetryOrPromise === 'object') {
      try {
        const shouldRetryPromiseResult = yield shouldRetryOrPromise;
        // keep return true unless shouldRetryPromiseResult return false for compatibility
        return shouldRetryPromiseResult !== false;
      } catch (_err) {
        return false;
      }
    }
    return shouldRetryOrPromise;
  });
}
const axiosRetry = (axiosInstance, defaultOptions) => {
  const requestInterceptorId = axiosInstance.interceptors.request.use(config => {
    setCurrentState(config, defaultOptions);
    return config;
  });
  const responseInterceptorId = axiosInstance.interceptors.response.use(null, error => __awaiter(void 0, void 0, void 0, function* () {
    const {
      config
    } = error;
    // If we have no information to retry the request
    if (!config) {
      return Promise.reject(error);
    }
    const currentState = setCurrentState(config, defaultOptions);
    if (yield shouldRetry(currentState, error)) {
      currentState.retryCount += 1;
      const {
        retryDelay,
        shouldResetTimeout,
        onRetry
      } = currentState;
      const delay = retryDelay(currentState.retryCount, error);
      // Axios fails merging this configuration to the default configuration because it has an issue
      // with circular structures: https://github.com/mzabriskie/axios/issues/370
      fixConfig(axiosInstance, config);
      if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
        const lastRequestDuration = Date.now() - currentState.lastRequestTime;
        const timeout = config.timeout - lastRequestDuration - delay;
        if (timeout <= 0) {
          return Promise.reject(error);
        }
        config.timeout = timeout;
      }
      config.transformRequest = [data => data];
      yield onRetry(currentState.retryCount, error, config);
      return new Promise(resolve => {
        setTimeout(() => resolve(axiosInstance(config)), delay);
      });
    }
    return Promise.reject(error);
  }));
  return {
    requestInterceptorId,
    responseInterceptorId
  };
};
// Compatibility with CommonJS
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.isRetryableError = isRetryableError;
exports["default"] = axiosRetry;

/***/ })

}]);
//# sourceMappingURL=659.34281ff9b832669706a1.js.map