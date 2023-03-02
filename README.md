# mio-jazmin
## Little library of Test mio-jazmin 

Example of how to use:

```
npm i mio-jazmin
```

Now for the colors of each consologeo we use "chalk"
```
npm i chalk 
```

Next

## Code to test the mio-jazmin library 

### Number, Object and array test
```js
const objTest = {
  result: 7,
  a: {
    b: 3,
  },
  data: [],
};
const arrayTest = [12, "hi", undefined, [], {}];
const arrayResult = [12, "hi", undefined, [], {}, "hola"];
```

### Section to import the library 
```js
import {describe, it, expect } from "./mioJazmin.js";
// console.log(describe) // test el import que para javascript parece necesitar tener la extensión, donde de: "./mioJazmin" debemos pasar a: -> "./mioJazmin.js"
```
### Code to Test
```js
function sum(a, b) {
  return a + b;
}
function sumObj(a, b) {
  var result = {
    result: a + b,
    a: {
      b: 3,
    },
    data: [],
  };
  return result;
}
function arr(data) {
  var result = [...arrayTest];
  result.push(data);
  return result;
}
```

### Test 
```js
describe("Suma dos números", function () {
  it("para 3 + 4 devuelve 7", function () {
    expect(sum(3, 4));
    expect.toBe(7);
  });
});
describe("Objeto con una prop result igual a 7", function () {
  it("devuelve un obj modificando prop result a 7", function () {
    expect(sumObj(3, 4));
    expect.toBe(objTest);
  });
});
describe("Array con el último elemento un string 'hola'", function () {
  it("devuelve un arr modificado", function () {
    expect(arr("hola"));
    expect.toBe(arrayResult);
  });
});
```
