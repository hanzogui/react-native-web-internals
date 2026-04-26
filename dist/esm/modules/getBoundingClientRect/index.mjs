const getBoundingClientRect = node => {
  if (node != null) {
    const isElement = node.nodeType === 1;
    if (isElement && typeof node.getBoundingClientRect === "function") {
      return node.getBoundingClientRect();
    }
  }
};
export { getBoundingClientRect };
//# sourceMappingURL=index.mjs.map
