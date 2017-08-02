# react-render-helpers
A series of helper functions to add inline control-flow logic in React render methods.


## Installation

```bash
yarn add react-render-helpers
```


## Usage

This library has 3 named exports, `hideIf`, `showIf`, and `switchOn`. Each export is a curried function that accepts one parameter, a condition (any truthy expression or a key for switchOn), and returns a function. The returned function accepts also accepts one parameter, a React node or any function that returns a React node.

The helpers are curried to enable partial application. For example, `const showOnError = showIf(error)` could be used to conditionally show error messages when they exist. Our new function, `showOnError`, could be called with a React node or a function that returns a React node as the only argument.

It's useful to pass a function instead of a React node to avoid accessing undefined values. For example, `showIf(person)(() => person.name)` will never throw an error because the function will only be called when person is defined.

**Note**: The examples below use react-hyperscript (my preference), but JSX, createElement, or any other valid syntax is supported.


### hideIf

```javascript
import h from 'react-hyperscript';
import { hideIf } from 'react-render-helpers';

export default ({ isClosed }) => h('.window', {}, [
  hideIf(isClosed)(h('.message', 'Open!')),
]);
```

```javascript
export default ({ isClosed }) => h('.window', {}, [
  hideIf(isClosed)(() => h('.message', 'Open!')),
]);
```


### showIf

```javascript
import h from 'react-hyperscript';
import { showIf } from 'react-render-helpers';

export default ({ isClosed }) => h('.window', {}, [
  showIf(isClosed)(h('.message', 'Closed!')),
]);
```

```javascript
export default ({ isClosed }) => h('.window', {}, [
  showIf(isClosed)(() => h('.message', 'Closed!')),
]);
```


### switchOn

```javascript
import h from 'react-hyperscript';
import { switchOn } from 'react-render-helpers';

export default ({ color }) => h('.palette', {}, [
  switchOn(color)({
    blue: h('.blue', 'Blue!'),
    red: h('.red', 'Red!'),
    defaultTo: h('.white', 'No color...') ,
  })
]);
```

```javascript
export default ({ color }) => h('.palette', {}, [
  switchOn(color)({
    blue: () => h('.blue', 'Blue!'),
    red: () => h('.red', 'Red!'),
    defaultTo: () => h('.white', 'No color...') ,
  })
]);
```
