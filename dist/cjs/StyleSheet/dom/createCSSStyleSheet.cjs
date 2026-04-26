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
var createCSSStyleSheet_exports = {};
__export(createCSSStyleSheet_exports, {
  createCSSStyleSheet: () => createCSSStyleSheet
});
module.exports = __toCommonJS(createCSSStyleSheet_exports);
var import_canUseDOM = require("../../modules/canUseDOM.cjs");
function createCSSStyleSheet(id, rootNode, textContent) {
  if (import_canUseDOM.canUseDOM) {
    const root = rootNode != null ? rootNode : document;
    let element = root.getElementById(id);
    if (element == null) {
      element = document.createElement("style");
      element.setAttribute("id", id);
      if (typeof textContent === "string") {
        element.appendChild(document.createTextNode(textContent));
      }
      if (root instanceof ShadowRoot) {
        root.insertBefore(element, root.firstChild);
      } else {
        const head = root.head;
        if (head) {
          head.appendChild(element);
        }
      }
    }
    return element.sheet;
  } else {
    return null;
  }
}