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
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
var index_exports = {};
__export(index_exports, {
  AccessibilityUtil: () => import_AccessibilityUtil.AccessibilityUtil,
  ImageLoader: () => import_ImageLoader.ImageLoader,
  InteractionManager: () => import_InteractionManager.InteractionManager,
  Platform: () => import_Platform.Platform,
  StyleSheet: () => import_StyleSheet2.StyleSheet,
  TextAncestorContext: () => import_TextAncestorContext.TextAncestorContext,
  TextInputState: () => import_TextInputState.TextInputState,
  UIManager: () => import_UIManager.UIManager,
  canUseDOM: () => import_canUseDOM.canUseDOM,
  colorProps: () => import_colorProps.colorProps,
  createDOMProps: () => import_createDOMProps.createDOMProps,
  createEventHandle: () => import_createEventHandle.createEventHandle,
  createReactDOMStyle: () => import_createReactDOMStyle.createReactDOMStyle,
  createSheet: () => import_dom.createSheet,
  createTransformValue: () => import_createReactDOMStyle.createTransformValue,
  dismissKeyboard: () => import_dismissKeyboard.dismissKeyboard,
  flattenStyle: () => import_StyleSheet.flatten,
  getBoundingClientRect: () => import_getBoundingClientRect.getBoundingClientRect,
  isSelectionValid: () => import_isSelectionValid.isSelectionValid,
  isWebColor: () => import_isWebColor.isWebColor,
  multiplyStyleLengthValue: () => import_multiplyStyleLengthValue.multiplyStyleLengthValue,
  normalizeColor: () => import_normalizeColor.normalizeColor,
  pick: () => import_pick.pick,
  processColor: () => import_processColor.processColor,
  requestIdleCallback: () => import_requestIdleCallback.requestIdleCallback,
  setValueForStyles: () => import_setValueForStyles.setValueForStyles,
  stylesFromProps: () => import_createDOMProps2.stylesFromProps,
  unitlessNumbers: () => import_unitlessNumbers.unitlessNumbers,
  useElementLayout: () => import_useElementLayout.useElementLayout,
  useEvent: () => import_useEvent.useEvent,
  useHover: () => import_useHover.useHover,
  useLayoutEffect: () => import_useLayoutEffect.useLayoutEffectImpl,
  useMergeRefs: () => import_useMergeRefs.useMergeRefs,
  usePlatformMethods: () => import_usePlatformMethods.usePlatformMethods,
  useStable: () => import_useStable.useStable
});
module.exports = __toCommonJS(index_exports);
__reExport(index_exports, require("./modules/AssetRegistry/index.cjs"), module.exports);
__reExport(index_exports, require("./modules/forwardedProps/index.cjs"), module.exports);
__reExport(index_exports, require("./modules/mergeRefs/index.cjs"), module.exports);
__reExport(index_exports, require("./modules/modality/index.cjs"), module.exports);
__reExport(index_exports, require("./modules/useLocale/index.cjs"), module.exports);
var import_usePlatformMethods = require("./modules/usePlatformMethods/index.cjs");
var import_TextAncestorContext = require("./TextAncestorContext.cjs");
__reExport(index_exports, require("@hanzogui/react-native-use-pressable"), module.exports);
__reExport(index_exports, require("@hanzogui/react-native-use-responder-events"), module.exports);
var import_colorProps = require("./colorProps.cjs");
var import_AccessibilityUtil = require("./modules/AccessibilityUtil/index.cjs");
var import_canUseDOM = require("./modules/canUseDOM.cjs");
var import_createDOMProps = require("./modules/createDOMProps/index.cjs");
var import_createDOMProps2 = require("./modules/createDOMProps/index.cjs");
var import_createReactDOMStyle = require("./StyleSheet/compiler/createReactDOMStyle.cjs");
var import_createEventHandle = require("./modules/createEventHandle/index.cjs");
var import_dismissKeyboard = require("./modules/dismissKeyboard/index.cjs");
var import_getBoundingClientRect = require("./modules/getBoundingClientRect/index.cjs");
var import_ImageLoader = require("./modules/ImageLoader/index.cjs");
var import_isSelectionValid = require("./modules/isSelectionValid/index.cjs");
var import_isWebColor = require("./modules/isWebColor/index.cjs");
var import_multiplyStyleLengthValue = require("./modules/multiplyStyleLengthValue/index.cjs");
var import_normalizeColor = require("./modules/normalizeColor/index.cjs");
var import_pick = require("./modules/pick/index.cjs");
var import_Platform = require("./modules/Platform/index.cjs");
__reExport(index_exports, require("./StyleSheet/preprocess.cjs"), module.exports);
var import_StyleSheet = require("./StyleSheet/index.cjs");
var import_dom = require("./StyleSheet/dom/index.cjs");
var import_requestIdleCallback = require("./modules/requestIdleCallback/index.cjs");
var import_setValueForStyles = require("./modules/setValueForStyles/index.cjs");
var import_TextInputState = require("./modules/TextInputState/index.cjs");
var import_UIManager = require("./modules/UIManager/index.cjs");
var import_unitlessNumbers = require("./modules/unitlessNumbers/index.cjs");
var import_useElementLayout = require("./modules/useElementLayout/index.cjs");
var import_useEvent = require("./modules/useEvent/index.cjs");
var import_useHover = require("./modules/useHover/index.cjs");
var import_useLayoutEffect = require("./modules/useLayoutEffect/index.cjs");
var import_useStable = require("./modules/useStable/index.cjs");
var import_InteractionManager = require("./modules/InteractionManager.cjs");
__reExport(index_exports, require("./modules/invariant.cjs"), module.exports);
var import_processColor = require("./modules/processColor/index.cjs");
var import_StyleSheet2 = require("./StyleSheet/index.cjs");
var import_useMergeRefs = require("./modules/useMergeRefs/index.cjs");