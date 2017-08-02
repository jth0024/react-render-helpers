import has from 'lodash/has';
import isFunction from 'lodash/isFunction';

export const switchOn = value => cases => {
  if (has(cases, value)) {
    return isFunction(cases[value])
      ? cases[value]()
      : cases[value];
  }

  if (has(cases, 'defaultTo')) {
    return isFunction(cases.defaultTo)
      ? cases.defaultTo()
      : cases.defaultTo;
  }

  return null;
};
