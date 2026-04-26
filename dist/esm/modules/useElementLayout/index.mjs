import { enable, useElementLayout as useGuiElementLayout } from "@hanzogui/use-element-layout";
import { useEffect, useMemo } from "react";
function useElementLayout(ref, onLayout) {
  const wrappedRef = useMemo(() => {
    return {
      current: {
        get host() {
          return ref.current;
        }
      }
    };
  }, [ref]);
  useEffect(() => {
    enable();
  }, []);
  return useGuiElementLayout(wrappedRef, onLayout);
}
export { useElementLayout };
//# sourceMappingURL=index.mjs.map
