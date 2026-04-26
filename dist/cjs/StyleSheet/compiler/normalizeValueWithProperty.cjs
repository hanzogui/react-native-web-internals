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
var normalizeValueWithProperty_exports = {};
__export(normalizeValueWithProperty_exports, {
  normalizeValueWithProperty: () => normalizeValueWithProperty
});
module.exports = __toCommonJS(normalizeValueWithProperty_exports);
var import_unitlessNumbers = require("../../modules/unitlessNumbers/index.cjs");
var import_normalizeColor = require("./normalizeColor.cjs");
const colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  let returnValue = value;
  if ((property == null || !import_unitlessNumbers.unitlessNumbers[property]) && typeof value === "number") {
    returnValue = `${value}px`;
  } else if (property != null && colorProps[property]) {
    returnValue = (0, import_normalizeColor.normalizeColor)(value);
  }
  return returnValue;
}