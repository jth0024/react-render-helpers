const objectProto = Object.prototype;
const hasOwnProperty = objectProto.hasOwnProperty;
const toString = objectProto.toString;
// eslint-disable-next-line eqeqeq
const symToStringTag = typeof Symbol != 'undefined'
  ? Symbol.toStringTag
  : undefined;


export function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value);
  }

  const isOwn = hasOwnProperty.call(value, symToStringTag);
  const tag = value[symToStringTag];
  let unmasked = false;

  /* eslint-disable no-param-reassign, no-empty*/
  try {
    value[symToStringTag] = undefined;
    unmasked = true;
  } catch (e) {}
  /* eslint-enable */

  const result = toString.call(value);

  /* eslint-disable no-param-reassign */
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  /* eslint-enable */

  return result;
}
