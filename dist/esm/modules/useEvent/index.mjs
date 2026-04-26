import { createEventHandle } from "../createEventHandle/index.mjs";
import { useLayoutEffectImpl as useLayoutEffect } from "../useLayoutEffect/index.mjs";
import { useStable } from "../useStable/index.mjs";
function useEvent(event, options) {
  const targetListeners = useStable(() => /* @__PURE__ */new Map());
  const addListener = useStable(() => {
    const addEventListener = createEventHandle(event, options);
    return (target, callback) => {
      const removeTargetListener = targetListeners.get(target);
      if (removeTargetListener != null) {
        removeTargetListener();
      }
      if (callback == null) {
        targetListeners.delete(target);
      }
      const removeEventListener = addEventListener(target, callback);
      targetListeners.set(target, removeEventListener);
      return removeEventListener;
    };
  });
  useLayoutEffect(() => {
    return () => {
      targetListeners.forEach(removeListener => {
        removeListener();
      });
      targetListeners.clear();
    };
  }, [targetListeners]);
  return addListener;
}
export { useEvent };
//# sourceMappingURL=index.mjs.map
