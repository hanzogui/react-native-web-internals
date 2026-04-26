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
var resolveShadowValue_exports = {};
__export(resolveShadowValue_exports, {
  resolveShadowValue: () => resolveShadowValue
});
module.exports = __toCommonJS(resolveShadowValue_exports);
var import_normalizeColor = require("./normalizeColor.cjs");
var import_normalizeValueWithProperty = require("./normalizeValueWithProperty.cjs");
const defaultOffset = {
  height: 0,
  width: 0
};
const resolveShadowValue = style => {
  const {
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius
  } = style;
  const {
    height,
    width
  } = shadowOffset || defaultOffset;
  const offsetX = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(width);
  const offsetY = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(height);
  const blurRadius = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(shadowRadius || 0);
  const color = (0, import_normalizeColor.normalizeColor)(shadowColor || "black", shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
  }
};