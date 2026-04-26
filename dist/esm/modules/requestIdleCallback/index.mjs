import { canUseDOM } from "../canUseDOM.mjs";
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
const isSupported = canUseDOM && typeof window.requestIdleCallback !== "undefined";
const requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
const cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
export { cancelIdleCallback, requestIdleCallback };
//# sourceMappingURL=index.mjs.map
