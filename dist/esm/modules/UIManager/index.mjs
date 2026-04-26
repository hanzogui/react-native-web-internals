import { measure, measureInWindow } from "@hanzogui/use-element-layout";
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
    return measure(node, callback);
  },
  measureInWindow(node, callback) {
    return measureInWindow(node, callback);
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
export { UIManager };
//# sourceMappingURL=index.mjs.map
