import { render } from "@testing-library/react";
import * as React from "react";
import mergeRefs from "../index.mjs";
import { jsx } from "react/jsx-runtime";
describe("modules/mergeRefs", () => {
  test("merges refs of different types", () => {
    const ref = React.createRef(null);
    let functionRefValue = null;
    let hookRef;
    function Component() {
      const functionRef = x => {
        functionRefValue = x;
      };
      hookRef = React.useRef(null);
      return /* @__PURE__ */jsx("div", {
        ref: mergeRefs(ref, hookRef, functionRef)
      });
    }
    render(/* @__PURE__ */jsx(Component, {}));
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(hookRef.current).toBeInstanceOf(HTMLDivElement);
    expect(functionRefValue).toBeInstanceOf(HTMLDivElement);
  });
});
//# sourceMappingURL=index-test.mjs.map
