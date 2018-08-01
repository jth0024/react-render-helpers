export function isObject(value) {
  const type = typeof value;
  // eslint-disable-next-line eqeqeq
  const isTypeCorrect = (type == 'object' || type == 'function');
  const isValueTruthy = value != null;

  return (
    isValueTruthy &&
    isTypeCorrect
  );
}
