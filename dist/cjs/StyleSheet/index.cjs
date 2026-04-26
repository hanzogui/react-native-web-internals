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
var StyleSheet_exports = {};
__export(StyleSheet_exports, {
  StyleSheet: () => StyleSheet,
  flatten: () => flatten
});
module.exports = __toCommonJS(StyleSheet_exports);
const absoluteFillObject = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
const absoluteFill = absoluteFillObject;
function create(styles) {
  return styles;
}
function compose(style1, style2) {
  return flatten(style1, style2);
}
function flatten(...styles) {
  return styles.flat().flat().flat().flat().reduce((acc, cur) => {
    if (cur) {
      Object.assign(acc, cur);
    }
    return acc;
  }, {});
}
function getSheet() {
  return {
    id: "",
    textContent: sheet.getTextContent()
  };
}
function StyleSheet(styles, options) {}
StyleSheet.absoluteFill = absoluteFill;
StyleSheet.absoluteFillObject = absoluteFillObject;
StyleSheet.create = create;
StyleSheet.compose = compose;
StyleSheet.flatten = flatten;
StyleSheet.getSheet = getSheet;
StyleSheet.hairlineWidth = 1;