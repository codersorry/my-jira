export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (object) => {
  //解构成一个新的对象，避免污染原来的引用对象
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
