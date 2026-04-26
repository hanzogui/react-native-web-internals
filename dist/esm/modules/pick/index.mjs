function pick(obj, list) {
  const nextObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true) {
        nextObj[key] = obj[key];
      }
    }
  }
  return nextObj;
}
export { pick };
//# sourceMappingURL=index.mjs.map
