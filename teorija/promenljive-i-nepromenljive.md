# 'let' and 'const'

Two new keywords 'let' and 'const' allow the definition of variables in a block scope. Traditional variables always been defined for the function scope. The restriction of a block scope means that they are defined to be used within curly braces { ... }.

Variables defined with let are changeable but const doesn't allow reassignments.

```js
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; Can't do that, will result in a SyntaxError
}

console.log(a);     // a = 20, it is accessible outside of the scope
console.log(b);     // `let` are not available: 'ReferenceError b is not defined'
console.log(tmp);   // same goes for const: 'tmp is not defined'
```

Using let and const is recommended because its harder to leak variables to outer scopes.
