# Default arguments

Functions can take default arguments:

```js
function sayHello(greeting = "Hello", name = "CampJS") {
  console.log(`${greeting} ${name}!`);
}
```

When you call the function without arguments, the default ones are applied instead:

```js
sayHello();            // "Hello CampJS!"
sayHello("Hi there");  // "Hi there CampJS!"
```

You can also use undefined to trigger the default:

```js
sayHello(undefined, undefined); // "Hello CampJS!"
sayHello("Hiya", undefined);    // "Hiya CampJS!"
sayHello(undefined, "JSConf");  // "Hello JSConf!"
```

Note that other falsy values will not trigger the defaulting, like null, false, "", or 0:

```js
sayHello(null, 0); // "null 0!"
```
## Functions as default arguments

Default arguments can be functions. For example, the default argument for the transform method is the identity function, x => x:

```js
function log(arg, transform = x => x) {
  console.log(transform(arg));
}

log("Hello");                       // "Hello"
log("Hello", y => y.toUpperCase()); // "HELLO"
```
