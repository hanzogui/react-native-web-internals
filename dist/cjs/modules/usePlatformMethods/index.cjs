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
var usePlatformMethods_exports = {};
__export(usePlatformMethods_exports, {
  usePlatformMethods: () => usePlatformMethods
});
module.exports = __toCommonJS(usePlatformMethods_exports);
var import_use_element_layout = require("@hanzogui/use-element-layout");
var import_useStable = require("../useStable/index.cjs");
function usePlatformMethods({
  pointerEvents,
  style
}) {
  const ref = (0, import_useStable.useStable)(() => hostNode => {
    if (hostNode != null) {
      hostNode.measure = (0, import_use_element_layout.createMeasure)(hostNode);
      hostNode.measureLayout = (0, import_use_element_layout.createMeasureLayout)(hostNode);
      hostNode.measureInWindow = (0, import_use_element_layout.createMeasureInWindow)(hostNode);
    }
  });
  return ref;
}