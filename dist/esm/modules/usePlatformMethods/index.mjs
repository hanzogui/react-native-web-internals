import { createMeasure, createMeasureInWindow, createMeasureLayout } from "@hanzogui/use-element-layout";
import { useStable } from "../useStable/index.mjs";
function usePlatformMethods({
  pointerEvents,
  style
}) {
  const ref = useStable(() => hostNode => {
    if (hostNode != null) {
      hostNode.measure = createMeasure(hostNode);
      hostNode.measureLayout = createMeasureLayout(hostNode);
      hostNode.measureInWindow = createMeasureInWindow(hostNode);
    }
  });
  return ref;
}
export { usePlatformMethods };
//# sourceMappingURL=index.mjs.map
