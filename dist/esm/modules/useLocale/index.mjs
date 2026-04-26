import React from "react";
import { isLocaleRTL } from "./isLocaleRTL.mjs";
import { jsx } from "react/jsx-runtime";
const defaultLocale = {
  direction: "ltr",
  locale: "en-US"
};
const LocaleContext = React.createContext(defaultLocale);
function getLocaleDirection(locale) {
  return isLocaleRTL(locale) ? "rtl" : "ltr";
}
function LocaleProvider(props) {
  const {
    direction,
    locale,
    children
  } = props;
  const needsContext = direction || locale;
  return needsContext ? /* @__PURE__ */jsx(LocaleContext.Provider, {
    value: {
      direction: locale ? getLocaleDirection(locale) : direction,
      locale
    },
    children
  }) : children;
}
function useLocaleContext() {
  return React.useContext(LocaleContext);
}
export { LocaleProvider, getLocaleDirection, useLocaleContext };
//# sourceMappingURL=index.mjs.map
