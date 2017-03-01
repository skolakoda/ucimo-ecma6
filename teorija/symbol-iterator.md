# Symbol.Iterator

In ES6 the for of iterator has been added. Let's look at an example:

```js
var res = [];
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

For of is native to arrays, but it can be added to objects also. To make something iterable you have to use Symbol.Iterator. Here is an example of how to calculating the fibonacci sequence to the 1000st number using Symbol.Iterator:

```js
var fibonacci = {
  // Make a method that has the Symbol.iterator function.
  [Symbol.iterator]() {
    let pre = 0:
    let cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        if (pre < 1000)  return { done: false, value: pre };
        return { done: true };
      }
    }
  }
}

// The result's value property will become `n`.
for (var n of fibonacci) {
  console.log(n);
}
```
