import { getTag } from './get-tag';
import { isObject } from './is-object';

export function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = getTag(value);

  /* eslint-disable eqeqeq */
  return (
    tag == '[object Function]' ||
    tag == '[object AsyncFunction]' ||
    tag == '[object GeneratorFunction]' ||
    tag == '[object Proxy]'
  );
  /* eslint-enable */
}
