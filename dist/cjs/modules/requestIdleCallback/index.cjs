var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var requestIdleCallback_exports = {};
__export(requestIdleCallback_exports, {
  cancelIdleCallback: () => cancelIdleCallback,
  requestIdleCallback: () => requestIdleCallback
});
module.exports = __toCommonJS(requestIdleCallback_exports);
var import_canUseDOM = require("../canUseDOM.cjs");
const _requestIdleCallback = function (cb, options) {
  return setTimeout(() => {
    const start = Date.now();
    cb({
      didTimeout: false,
      timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};
const _cancelIdleCallback = function (id) {
  clearTimeout(id);
};
const isSupported = import_canUseDOM.canUseDOM && typeof window.requestIdleCallback !== "undefined";
const requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
const cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;