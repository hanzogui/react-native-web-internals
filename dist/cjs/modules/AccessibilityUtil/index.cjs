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
var AccessibilityUtil_exports = {};
__export(AccessibilityUtil_exports, {
  AccessibilityUtil: () => AccessibilityUtil
});
module.exports = __toCommonJS(AccessibilityUtil_exports);
var import_isDisabled = require("./isDisabled.cjs");
var import_propsToAccessibilityComponent = require("./propsToAccessibilityComponent.cjs");
var import_propsToAriaRole = require("./propsToAriaRole.cjs");
const AccessibilityUtil = {
  isDisabled: import_isDisabled.isDisabled,
  propsToAccessibilityComponent: import_propsToAccessibilityComponent.propsToAccessibilityComponent,
  propsToAriaRole: import_propsToAriaRole.propsToAriaRole
};