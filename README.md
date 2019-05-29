# react-render-helpers

[![CircleCI](https://circleci.com/gh/jth0024/react-render-helpers/tree/master.svg?style=svg)](https://circleci.com/gh/jth0024/react-render-helpers/tree/master)

A collection of helpers for conditionally rendering components or elements in React.

- Works with both **JSX** and **Hyperscript** syntax.
- Supports **lazy evaluation** to avoid null reference errors.
- Supports **modularized imports** to improve tree-shaking.
- Supports **curried** helpers for easy partial application.


## Installation

```bash
yarn add react-render-helpers

// or using NPM

npm i react-render-helpers
```

## Documentation

### hideIf

```javascript
import { hideIf } from 'react-render-helpers'
// Or use modular imports
import hideIf from 'react-render-helpers/hideIf'

export default ({ isClosed }) => (
  <div className='window'>
    {hideIf(isClosed)(<div>The window is open!</div>)}
    // Or provide a function to use lazy evaluation
    {hideIf(isClosed)(() => (<div> The window is STILL open!</div>))}
  </div>
)
```


### showIf

```javascript
import { showIf } from 'react-render-helpers'
// Or use modular imports
import showIf from 'react-render-helpers/showIf'

export default ({ isClosed }) => (
  <div className='window'>
    {showIf(isClosed)(<div>The window is closed!</div>)}
    // Or provide a function to use lazy evaluation
    {showIf(isClosed)(() => (<div>The window is STILL closed!</div>))}
  </div>
)
```


### switchOn

```javascript
import { switchOn } from 'react-render-helpers'
// Or use modular imports
import switchOn from 'react-render-helpers/switchOn'

export default ({ color }) => (
  <div className='palette'>
    {switchOn(color)({
      blue: (<div className='blue'>Blue!</div>),
      red: (<div className='red'>Red!</div>),
      defaultTo: (<div className='no-color'>Transparent!</div>),
    })}
    // Or provide functions as values to use lazy evaluation
    {switchOn(color)({
      blue: () => (<div className='blue'>Blue!</div>),
      red: () => (<div className='red'>Red!</div>),
      defaultTo: () => (<div className='no-color'>Transparent!</div>),
    })}
  </div>
)
```
