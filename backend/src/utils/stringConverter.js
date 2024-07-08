module.exports = (objParams) => {
  for (let obj in objParams) {
    if (/Id|id/.test(obj)) {
      objParams[obj] = Number(objParams[obj]);
    }
  }
  return objParams;
};