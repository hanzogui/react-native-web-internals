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
var preprocess_exports = {};
__export(preprocess_exports, {
  createBoxShadowValue: () => createBoxShadowValue,
  createTextShadowValue: () => createTextShadowValue,
  preprocess: () => preprocess,
  processStyle: () => processStyle
});
module.exports = __toCommonJS(preprocess_exports);
var import_normalizeColor = require("./compiler/normalizeColor.cjs");
var import_normalizeValueWithProperty = require("./compiler/normalizeValueWithProperty.cjs");
const emptyObject = {};
const defaultOffset = {
  height: 0,
  width: 0
};
const createBoxShadowValue = style => {
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
const createTextShadowValue = style => {
  const {
    textShadowColor,
    textShadowOffset,
    textShadowRadius
  } = style;
  const {
    height,
    width
  } = textShadowOffset || defaultOffset;
  const radius = textShadowRadius || 0;
  const offsetX = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(width);
  const offsetY = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(height);
  const blurRadius = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(radius);
  const color = (0, import_normalizeValueWithProperty.normalizeValueWithProperty)(textShadowColor, "textShadowColor");
  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
  }
};
const preprocess = originalStyle => {
  const style = originalStyle || emptyObject;
  const nextStyle = {};
  for (const originalProp in style) {
    const originalValue = style[originalProp];
    let prop = originalProp;
    let value = originalValue;
    if (!Object.prototype.hasOwnProperty.call(style, originalProp) || originalValue == null) {
      continue;
    }
    if (prop === "shadowColor" || prop === "shadowOffset" || prop === "shadowOpacity" || prop === "shadowRadius") {
      const boxShadowValue = createBoxShadowValue(style);
      if (boxShadowValue != null && nextStyle.boxShadow == null) {
        const {
          boxShadow
        } = style;
        prop = "boxShadow";
        value = boxShadow ? `${boxShadow}, ${boxShadowValue}` : boxShadowValue;
      } else {
        continue;
      }
    }
    if (prop === "textShadowColor" || prop === "textShadowOffset" || prop === "textShadowRadius") {
      const textShadowValue = createTextShadowValue(style);
      if (textShadowValue != null && nextStyle.textShadow == null) {
        const {
          textShadow
        } = style;
        prop = "textShadow";
        value = textShadow ? `${textShadow}, ${textShadowValue}` : textShadowValue;
      } else {
        continue;
      }
    }
    nextStyle[prop] = value;
  }
  return nextStyle;
};
const processStyle = preprocess;