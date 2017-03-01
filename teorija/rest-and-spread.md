# Rest and spread

ES6 provides two closely related concepts, rest and spread, for functions with variadic numbers of arguments. An example of a variadic function would be Math.max, which you can call with any number of arguments: Math.max(1, 2) or Math.max(1, 2, 3) or ...

In ES6, you can use the ...args syntax to "spread" an array out when calling such a function. For example,

```js
var numbers = [1, 1, 2, 3, 5, 8];
var max = Math.max(...numbers);
```

Rest parameters (the spread counterpart) are used when you want to write a function that accepts a variadic number of arguments, but acts on them as if they were an array. For example,

```js
function sum(...args) {
  var result = 0;
  args.forEach(value => result += value);
  return result;
}

sum(1, 2, 3); // 6
```
