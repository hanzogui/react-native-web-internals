import { canUseDOM } from "../../modules/canUseDOM.mjs";
function createCSSStyleSheet(id, rootNode, textContent) {
  if (canUseDOM) {
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
export { createCSSStyleSheet };
//# sourceMappingURL=createCSSStyleSheet.mjs.map
