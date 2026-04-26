import { unitlessNumbers as isUnitlessNumber } from "../unitlessNumbers/index.mjs";
import { normalizeValueWithProperty } from "../../StyleSheet/compiler/normalizeValueWithProperty.mjs";
function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  if (typeof value === "object" && typeof value.__getValue === "function") {
    value = value.__getValue();
  }
  if (name === "transform" && Array.isArray(value)) {
    return value.map(t => {
      const key = Object.keys(t)[0];
      let val = t[key];
      if (typeof val === "object" && typeof val.__getValue === "function") {
        val = val.__getValue();
      }
      if (key === "matrix" || key === "matrix3d") {
        return `${key}(${val.join(",")})`;
      }
      return `${key}(${normalizeValueWithProperty(val, key)})`;
    }).join(" ");
  }
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + "px";
  }
  return ("" + value).trim();
}
export { dangerousStyleValue };
//# sourceMappingURL=dangerousStyleValue.mjs.map
