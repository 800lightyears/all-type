## all-type
checking the variable type

### Installation
```
$ npm i all-type -S
```
or
```
$ yarn add all-type -S
```

### Example
```javascript
const is = require('all-type')

is.String('') // true
is.Number(0) // true
is.BigInt(1n) // true
is.Boolean(true) // true
is.Null(null) // true
is.Undefined(undefined) // true
is.Symbol(Symbol()) // true
is.Array([]) // true
is.Object({}) // true
is.RegExp(new RegExp()) // true
is.Date(new Date()) // true
is.Set(new Set()) // true
is.WeakSet(new WeakSet) // true
is.Map(new Map()) // true
is.WeakMap(new WeakMap()) // true
is.Error(new Error()) // true
is.ArrayBuffer(new ArrayBuffer(1)) // true
is.Function(() => {}) // true
is.NaN(NaN) // true
```

### License
[MIT](LICENSE)