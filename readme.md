# typed-arrays

Returns an array of all [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) classes: `Float32Array`, `Float64Array`, `Int8Array`, `Int16Array`, `Int32Array`, `Uint8Array`, `Uint8ClampedArray`, `Uint16Array`, and `Uint32Array`.

## Installation

Requires [Node.js](https://nodejs.org/) 5.0.0 or above.

```bash
npm i typed-arrays
```

## API

The module exports an object with two properties:

* `classes`: A function which, when called, will return an array of 9 Typed Array classes (functions).
* `names`: A function which, when called, will return an array of 9 Typed Array class name strings.

## Example

```javascript
const typedArrays = require('typed-arrays')

typedArrays.classes() // Array
typedArrays.names() // Array
```
