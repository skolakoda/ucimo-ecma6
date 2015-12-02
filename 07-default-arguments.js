/*
In ES6, functions can take default arguments:

    function sayHello(greeting = "Hello", name = "CampJS") {
        console.log(`${greeting} ${name}!`);
    }

When you call the function without arguments, the default ones are applied instead:

    sayHello();            // "Hello CampJS!"
    sayHello("Hi there");  // "Hi there CampJS!"

You can also use undefined to trigger the default:

    sayHello(undefined, undefined); // "Hello CampJS!"
    sayHello("Hiya", undefined);    // "Hiya CampJS!"
    sayHello(undefined, "JSConf");  // "Hello JSConf!"

Note that other falsy values will not trigger the defaulting, like null, false, "", or 0:

    sayHello(null, 0); // "null 0!"

-------------------------------------------------------------------------------
Your goal is to write a Node module whose export is a function. It will take two arguments: a lower bound and an upper bound. It should return the midpoint between those two bounds. It should have defaults. The lower bound should default to 0, and the upper bound should default to 1.

Your solution should look something like

    module.exports = function midpoint(//) {
        // what goes here?
    };

We'll test your module by passing it a few different sets of arguments.
*/

module.exports = function midpoint(lower = 0, upper = 1) {
    return (lower + upper) / 2;
};
