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
var modality_exports = {};
__export(modality_exports, {
  addModalityListener: () => addModalityListener,
  getActiveModality: () => getActiveModality,
  getModality: () => getModality,
  testOnly_resetActiveModality: () => testOnly_resetActiveModality
});
module.exports = __toCommonJS(modality_exports);
var import_canUseDOM = require("../canUseDOM.cjs");
var import_createEventHandle = require("../createEventHandle/index.cjs");
const supportsPointerEvent = () => !!(typeof window !== "undefined" && window.PointerEvent != null);
let activeModality = "keyboard";
let modality = "keyboard";
let previousModality;
let previousActiveModality;
let isEmulatingMouseEvents = false;
const listeners = /* @__PURE__ */new Set();
const KEYBOARD = "keyboard";
const MOUSE = "mouse";
const TOUCH = "touch";
const BLUR = "blur";
const CONTEXTMENU = "contextmenu";
const FOCUS = "focus";
const KEYDOWN = "keydown";
const MOUSEDOWN = "mousedown";
const MOUSEMOVE = "mousemove";
const MOUSEUP = "mouseup";
const POINTERDOWN = "pointerdown";
const POINTERMOVE = "pointermove";
const SCROLL = "scroll";
const SELECTIONCHANGE = "selectionchange";
const TOUCHCANCEL = "touchcancel";
const TOUCHMOVE = "touchmove";
const TOUCHSTART = "touchstart";
const VISIBILITYCHANGE = "visibilitychange";
const bubbleOptions = {
  passive: true
};
const captureOptions = {
  capture: true,
  passive: true
};
const addBlurListener = (0, import_createEventHandle.createEventHandle)(BLUR, bubbleOptions);
const addFocusListener = (0, import_createEventHandle.createEventHandle)(FOCUS, bubbleOptions);
const addVisibilityChangeListener = (0, import_createEventHandle.createEventHandle)(VISIBILITYCHANGE, captureOptions);
const addKeyDownListener = (0, import_createEventHandle.createEventHandle)(KEYDOWN, captureOptions);
const addPointerDownListener = (0, import_createEventHandle.createEventHandle)(POINTERDOWN, captureOptions);
const addPointerMoveListener = (0, import_createEventHandle.createEventHandle)(POINTERMOVE, captureOptions);
const addContextMenuListener = (0, import_createEventHandle.createEventHandle)(CONTEXTMENU, captureOptions);
const addMouseDownListener = (0, import_createEventHandle.createEventHandle)(MOUSEDOWN, captureOptions);
const addMouseMoveListener = (0, import_createEventHandle.createEventHandle)(MOUSEMOVE, captureOptions);
const addMouseUpListener = (0, import_createEventHandle.createEventHandle)(MOUSEUP, captureOptions);
const addScrollListener = (0, import_createEventHandle.createEventHandle)(SCROLL, captureOptions);
const addSelectiomChangeListener = (0, import_createEventHandle.createEventHandle)(SELECTIONCHANGE, captureOptions);
const addTouchCancelListener = (0, import_createEventHandle.createEventHandle)(TOUCHCANCEL, captureOptions);
const addTouchMoveListener = (0, import_createEventHandle.createEventHandle)(TOUCHMOVE, captureOptions);
const addTouchStartListener = (0, import_createEventHandle.createEventHandle)(TOUCHSTART, captureOptions);
function restoreModality() {
  if (previousModality != null || previousActiveModality != null) {
    if (previousModality != null) {
      modality = previousModality;
      previousModality = null;
    }
    if (previousActiveModality != null) {
      activeModality = previousActiveModality;
      previousActiveModality = null;
    }
    callListeners();
  }
}
function onBlurWindow() {
  previousModality = modality;
  previousActiveModality = activeModality;
  activeModality = KEYBOARD;
  modality = KEYBOARD;
  callListeners();
  isEmulatingMouseEvents = false;
}
function onFocusWindow() {
  restoreModality();
}
function onKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  if (modality !== KEYBOARD) {
    modality = KEYBOARD;
    activeModality = KEYBOARD;
    callListeners();
  }
}
function onVisibilityChange() {
  if (document.visibilityState !== "hidden") {
    restoreModality();
  }
}
function onPointerish(event) {
  const eventType = event.type;
  if (supportsPointerEvent()) {
    if (eventType === POINTERDOWN) {
      if (activeModality !== event.pointerType) {
        modality = event.pointerType;
        activeModality = event.pointerType;
        callListeners();
      }
      return;
    }
    if (eventType === POINTERMOVE) {
      if (modality !== event.pointerType) {
        modality = event.pointerType;
        callListeners();
      }
      return;
    }
  } else {
    if (!isEmulatingMouseEvents) {
      if (eventType === MOUSEDOWN) {
        if (activeModality !== MOUSE) {
          modality = MOUSE;
          activeModality = MOUSE;
          callListeners();
        }
      }
      if (eventType === MOUSEMOVE) {
        if (modality !== MOUSE) {
          modality = MOUSE;
          callListeners();
        }
      }
    }
    if (eventType === TOUCHSTART) {
      isEmulatingMouseEvents = true;
      if (event.touches && event.touches.length > 1) {
        isEmulatingMouseEvents = false;
      }
      if (activeModality !== TOUCH) {
        modality = TOUCH;
        activeModality = TOUCH;
        callListeners();
      }
      return;
    }
    if (eventType === CONTEXTMENU || eventType === MOUSEUP || eventType === SELECTIONCHANGE || eventType === SCROLL || eventType === TOUCHCANCEL || eventType === TOUCHMOVE) {
      isEmulatingMouseEvents = false;
    }
  }
}
if (import_canUseDOM.canUseDOM) {
  addBlurListener(window, onBlurWindow);
  addFocusListener(window, onFocusWindow);
  addKeyDownListener(document, onKeyDown);
  addPointerDownListener(document, onPointerish);
  addPointerMoveListener(document, onPointerish);
  addVisibilityChangeListener(document, onVisibilityChange);
  addContextMenuListener(document, onPointerish);
  addMouseDownListener(document, onPointerish);
  addMouseMoveListener(document, onPointerish);
  addMouseUpListener(document, onPointerish);
  addTouchCancelListener(document, onPointerish);
  addTouchMoveListener(document, onPointerish);
  addTouchStartListener(document, onPointerish);
  addSelectiomChangeListener(document, onPointerish);
  addScrollListener(document, onPointerish);
}
function callListeners() {
  const value = {
    activeModality,
    modality
  };
  listeners.forEach(listener => {
    listener(value);
  });
}
function getActiveModality() {
  return activeModality;
}
function getModality() {
  return modality;
}
function addModalityListener(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function testOnly_resetActiveModality() {
  isEmulatingMouseEvents = false;
  activeModality = KEYBOARD;
  modality = KEYBOARD;
}