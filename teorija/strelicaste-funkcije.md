# Arrow-functions

With the arrow declaration it is possible to write shorter functions. You would have needed to write like this before:

```js
var square = function(x) { return x * x; };
```

Now it is:

```js
var square2 = x => x * x;
```

Most common usage of arrow functions is shortening of anonymous callback functions, like this:

```js
x => x + 1
```

You can put any expression on the right-hand side of the =>, and it will become the return value. If you need multiple arguments, you'll need to wrap them in parentheses:

```js
(x, y) => x + y
```

## `this` in Arrow-functions

Arrow functions lexically bind the value of 'this'. The this value inside an arrow function is the same as the this value outside of it:

```js
var foot = {
  kick: function () {
    this.yelp = "Ouch!";
    setImmediate(function () {
      console.log(this.yelp);
    });
  }
};
foot.kick();
```

When the call to console.log() occurs, a beginning JavaScript programmer might expect this.yelp to contain "Ouch!". In fact, it is undefined, because the function we passed to setImmediate got its own this (which by default is the global object, which has no yelp property).

In ES5, you might work around this with hacks. In ES6, arrow functions allow us to avoid such workarounds and instead just say what we mean. If we use an arrow function for the callback to setImmediate, the code will work as expected.
