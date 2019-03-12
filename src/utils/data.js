export function isEmptyObject(object) {
  const keyValues = Object.entries(object);
  const result = keyValues.length === 0 && (object.constructor === Object);
  return result;
}

export function isEmptyArray(array) {
  const result = array.length === 0;
  return result;
}
