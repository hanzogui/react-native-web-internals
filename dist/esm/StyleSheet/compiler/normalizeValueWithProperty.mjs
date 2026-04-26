import { unitlessNumbers } from "../../modules/unitlessNumbers/index.mjs";
import { normalizeColor } from "./normalizeColor.mjs";
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
  if ((property == null || !unitlessNumbers[property]) && typeof value === "number") {
    returnValue = `${value}px`;
  } else if (property != null && colorProps[property]) {
    returnValue = normalizeColor(value);
  }
  return returnValue;
}
export { normalizeValueWithProperty };
//# sourceMappingURL=normalizeValueWithProperty.mjs.map
