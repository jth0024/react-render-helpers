/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

export function has(object, key) {
  return (
    object != null &&
    hasOwnProperty.call(object, key)
  );
}
