# Dynamic properties

In ES6 it is possible to use expressions as property names. Before you had to define dynamic properties of objects like this:

```js
var prop = "foo";

var obj = {};
obj[prop] = "bar";
```

can now be written like this:

```js
var prop = "foo";
var obj = {
  [prop]: "bar"
};
```

This is called a Computed Property. The content of [] can also be a function:

```js
var obj = {
  // using an inline function
  [(()=>"bar" + "baz")()]: "foo"
};
```

With the new Computed Property syntax you can express dynamic properties without using temporary variables.
