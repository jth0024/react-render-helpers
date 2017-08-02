# react-render-helpers
A collection of helpers for conditionally rendering components or elements in React.

- Supports both **JSX** and **Hyperscript** syntax.
- Supports **lazy evaluation** to avoid null reference errors.
- Provides **curried** helpers for easy partial application.


## Installation

```bash
yarn add react-render-helpers
```

## Documentation

### hideIf

```javascript
import h from 'react-hyperscript';
import { hideIf } from 'react-render-helpers';

export default ({ isClosed }) => h('.window', {}, [
  hideIf(isClosed)(h('div', {}, 'Window is open!')),
  // Or provide a function for lazy evaluation
  hideIf(isClosed)(() => h('div', {}, 'Window is open!')),
]);
```


### showIf

```javascript
import h from 'react-hyperscript';
import { showIf } from 'react-render-helpers';

export default ({ isClosed }) => h('.window', {}, [
  showIf(isClosed)(h('div', {}, 'Window is closed!')),
  // Or provide a function for lazy evaluation
  showIf(isClosed)(() => h('div', {}, 'Window is closed!')),
]);
```


### switchOn

```javascript
import h from 'react-hyperscript';
import { switchOn } from 'react-render-helpers';

export default ({ color }) => h('.palette', {}, [
  switchOn(color)({
    blue: h('div.blue', { style: { color: 'blue' } }, 'Blue!'),
    red: h('div.red', { style: { color: 'red' } }, 'Red!'),
    defaultTo: h('div', {}, 'No color...'),
  }),
  // Or provide functions as values for lazy evaluation
  switchOn(color)({
    blue: () => h('div.blue', { style: { color: 'blue' } }, 'Blue!'),
    red: () => h('.red', { style: { color: 'red' } }, 'Red!'),
    defaultTo: () => h('div', {}, 'No color...') ,
  }),
]);
```
