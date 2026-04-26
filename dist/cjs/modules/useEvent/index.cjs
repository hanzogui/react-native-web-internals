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
var useEvent_exports = {};
__export(useEvent_exports, {
  useEvent: () => useEvent
});
module.exports = __toCommonJS(useEvent_exports);
var import_createEventHandle = require("../createEventHandle/index.cjs");
var import_useLayoutEffect = require("../useLayoutEffect/index.cjs");
var import_useStable = require("../useStable/index.cjs");
function useEvent(event, options) {
  const targetListeners = (0, import_useStable.useStable)(() => /* @__PURE__ */new Map());
  const addListener = (0, import_useStable.useStable)(() => {
    const addEventListener = (0, import_createEventHandle.createEventHandle)(event, options);
    return (target, callback) => {
      const removeTargetListener = targetListeners.get(target);
      if (removeTargetListener != null) {
        removeTargetListener();
      }
      if (callback == null) {
        targetListeners.delete(target);
      }
      const removeEventListener = addEventListener(target, callback);
      targetListeners.set(target, removeEventListener);
      return removeEventListener;
    };
  });
  (0, import_useLayoutEffect.useLayoutEffectImpl)(() => {
    return () => {
      targetListeners.forEach(removeListener => {
        removeListener();
      });
      targetListeners.clear();
    };
  }, [targetListeners]);
  return addListener;
}