# Destructuring

Destructuring makes it easier to access properties of arrays and objects. The most common example is the swapping of the value in two variables:

```js
    // old way
    var foo = 123;
    var bar = 456;
    var tmp = foo;
    foo = bar;
    bar = tmp;
```

With destructuring it it becomes easier like this.

```js
    var foo = 123;
    var bar = 456;
    var [bar, foo] = [foo, bar];
```

It is even possible to access elements that are children of the array.

```js
    var [a, [b], [c]] = ['hello', [', '], ['world']];
    console.log(a + b + c);// hello, world
```

It can also be used to access the properties of objects:

```js
    var pt = {x: 123, y: 444};
    var {x, y} = pt;
    console.log(x, y); // 123 444
```
