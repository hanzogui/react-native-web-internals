"use strict";

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
var createEventHandle_exports = {};
__export(createEventHandle_exports, {
  createEventHandle: () => createEventHandle
});
module.exports = __toCommonJS(createEventHandle_exports);
var import_canUseDOM = require("../canUseDOM.cjs");
const emptyFunction = () => {};
function supportsPassiveEvents() {
  let supported = false;
  if (import_canUseDOM.canUseDOM) {
    try {
      const options = {};
      Object.defineProperty(options, "passive", {
        get() {
          supported = true;
          return false;
        }
      });
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch (e) {}
  }
  return supported;
}
const canUsePassiveEvents = supportsPassiveEvents();
function getOptions(options) {
  if (options == null) {
    return false;
  }
  return canUsePassiveEvents ? options : Boolean(options.capture);
}
function isPropagationStopped() {
  return this.cancelBubble;
}
function isDefaultPrevented() {
  return this.defaultPrevented;
}
function normalizeEvent(event) {
  event.nativeEvent = event;
  event.persist = emptyFunction;
  event.isDefaultPrevented = isDefaultPrevented;
  event.isPropagationStopped = isPropagationStopped;
  return event;
}
function createEventHandle(type, options) {
  const opts = getOptions(options);
  return function (target, listener) {
    if (target == null || typeof target.addEventListener !== "function") {
      throw new Error("createEventHandle: called on an invalid target.");
    }
    const element = target;
    if (listener != null) {
      const compatListener = e => listener(normalizeEvent(e));
      element.addEventListener(type, compatListener, opts);
      return function removeListener() {
        if (element != null) {
          element.removeEventListener(type, compatListener, opts);
        }
      };
    } else {
      return emptyFunction;
    }
  };
}