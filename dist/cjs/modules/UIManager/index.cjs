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
var UIManager_exports = {};
__export(UIManager_exports, {
  UIManager: () => UIManager
});
module.exports = __toCommonJS(UIManager_exports);
var import_use_element_layout = require("@hanzogui/use-element-layout");
const focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
const UIManager = {
  blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus(node) {
    try {
      const name = node.nodeName;
      if (node.getAttribute("tabIndex") == null && focusableElements[name] == null) {
        node.setAttribute("tabIndex", "-1");
      }
      node.focus();
    } catch (err) {}
  },
  measure(node, callback) {
    return (0, import_use_element_layout.measure)(node, callback);
  },
  measureInWindow(node, callback) {
    return (0, import_use_element_layout.measureInWindow)(node, callback);
  },
  // note its flipped fail and success on purpose lol
  async measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    return measureLayout(node, relativeToNativeNode, onSuccess);
  },
  configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental() {}
};