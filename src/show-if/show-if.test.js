import sinon from 'sinon';
import test from 'ava';
import { isFunction } from 'lodash';
import { showIf } from './show-if';

test('given no args, it returns a fn', t => {
  const fn = showIf();
  t.true(isFunction(fn));
});

test('given a condition, it returns a fn', t => {
  const fn = showIf(true);
  t.true(isFunction(fn));
});

test('given an expression, it returns a fn', t => {
  const fn = showIf(3 === 4);
  t.true(isFunction(fn));
});

test('given false, it returns a fn that returns null', t => {
  const result = showIf(false)();
  t.is(result, null);
});

test('given true, it returns a fn that returns its parameter', t => {
  const result = showIf(true)('hey');
  t.is(result, 'hey');
});

test('given true, it returns a fn that invokes its parameter', t => {
  const parameter = sinon.spy(() => 'car');
  const result = showIf(true)(parameter);
  t.true(parameter.called);
  t.is(result, 'car');
});
