import sinon from 'sinon';
import test from 'ava';
import { isFunction } from 'lodash';
import { hideIf } from './hide-if';

test('given no args, it returns a fn', t => {
  const fn = hideIf();
  t.true(isFunction(fn));
});

test('given a condition, it returns a fn', t => {
  const fn = hideIf(true);
  t.true(isFunction(fn));
});

test('given an expression, it returns a fn', t => {
  const fn = hideIf(3 === 4);
  t.true(isFunction(fn));
});

test('given true, it returns a fn that returns null', t => {
  const result = hideIf(true)();
  t.is(result, null);
});

test('given false, it returns a fn that returns its parameter', t => {
  const result = hideIf(false)('hey');
  t.is(result, 'hey');
});

test('given false, it returns a fn that invokes its parameter', t => {
  const parameter = sinon.spy(() => 'car');
  const result = hideIf(false)(parameter);
  t.true(parameter.called);
  t.is(result, 'car');
});
