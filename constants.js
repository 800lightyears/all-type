const TYPES = {
  // primivates
  String: '',
  Number: 0,
  BigInt: 1n,
  Boolean: false,
  Null: null,
  Undefined: undefined,
  Symbol: Symbol(),

  // reference type
  Array: [],
  Object: {},
  RegExp: new RegExp(),
  Date: new Date(),
  Set: new Set(),
  WeakSet: new WeakSet(),
  Map: new Map(),
  WeakMap: new WeakMap(),
  Error: new Error(),
  ArrayBuffer: new ArrayBuffer(1),
  Function: () => {},

  // specific type
  NaN: NaN,
}

exports.TYPES = TYPES
