import sinon from 'sinon';
import test from 'ava';
import { isFunction } from 'lodash';
import { switchOn } from './switch-on';

test('given no args, it returns a fn', t => {
  const fn = switchOn();
  t.true(isFunction(fn));
});

test('given a condition, it returns a fn', t => {
  const fn = switchOn('red');
  t.true(isFunction(fn));
});

test('given an expression, it returns a fn', t => {
  const getVal = () => 'red';
  const fn = switchOn(getVal());
  t.true(isFunction(fn));
});

test('given no condition, it returns a fn that returns null', t => {
  const result = switchOn()();
  t.is(result, null);
});

test('given "red", it returns a fn that returns the key "red" when its provided its defined in the argument', t => {
  const result = switchOn('red')({ red: 'foo' });
  t.is(result, 'foo');
});

test('given "green", it returns a function that returns the key "defaultTo" when its provided in the argument', t => {
  const result = switchOn('green')({ defaultTo: 'foo' });
  t.is(result, 'foo');
});

test('given a key whose value is a function in the returned functions argument, it invokes the value', t => {
  const green = sinon.spy(() => 'foo');
  const result = switchOn('green')({ green });
  t.true(green.called);
  t.is(result, 'foo');
});

test('given no matching key but defaultTo, it invokes defaultTo', t => {
  const defaultTo = sinon.spy(() => 'foo');
  const result = switchOn('red')({ defaultTo });
  t.true(defaultTo.called);
  t.is(result, 'foo');
});
