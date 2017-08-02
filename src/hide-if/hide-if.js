import isFunction from 'lodash/isFunction';

export const hideIf = condition => result => {
  if (condition) return null;
  return isFunction(result)
    ? result()
    : result;
};
