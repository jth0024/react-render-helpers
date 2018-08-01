import { isFunction } from '../utils/is-function';

export const hideIf = condition => result => {
  if (condition) return null;
  return isFunction(result)
    ? result()
    : result;
};
