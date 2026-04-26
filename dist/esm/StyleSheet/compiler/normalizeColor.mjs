import { isWebColor } from "../../modules/isWebColor/index.mjs";
import { processColor } from "../../modules/processColor/index.mjs";
const normalizeColor = (color, opacity = 1) => {
  if (color == null) return;
  if (typeof color === "string" && isWebColor(color)) {
    return color;
  }
  const colorInt = processColor(color);
  if (colorInt != null) {
    const r = colorInt >> 16 & 255;
    const g = colorInt >> 8 & 255;
    const b = colorInt & 255;
    const a = (colorInt >> 24 & 255) / 255;
    const alpha = (a * opacity).toFixed(2);
    return `rgba(${r},${g},${b},${alpha})`;
  }
  if (true) {
    if (typeof color === "string") {
      return color;
    }
  }
};
export { normalizeColor };
//# sourceMappingURL=normalizeColor.mjs.map
