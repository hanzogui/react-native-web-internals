import { normalizeColor } from "./normalizeColor.mjs";
import { normalizeValueWithProperty } from "./normalizeValueWithProperty.mjs";
const defaultOffset = {
  height: 0,
  width: 0
};
const resolveShadowValue = style => {
  const {
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius
  } = style;
  const {
    height,
    width
  } = shadowOffset || defaultOffset;
  const offsetX = normalizeValueWithProperty(width);
  const offsetY = normalizeValueWithProperty(height);
  const blurRadius = normalizeValueWithProperty(shadowRadius || 0);
  const color = normalizeColor(shadowColor || "black", shadowOpacity);
  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
  }
};
export { resolveShadowValue };
//# sourceMappingURL=resolveShadowValue.mjs.map
