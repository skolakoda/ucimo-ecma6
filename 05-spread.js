/*
ES6 provides two closely related concepts, rest and spread, for functions with variadic numbers of arguments. An example of a variadic function would be Math.max, which you can call with any number of arguments: Math.max(1, 2) or Math.max(1, 2, 3) or ...

In ES6, you can use the ...args syntax to "spread" an array out when calling such a function. For example,

    var numbers = [1, 1, 2, 3, 5, 8];
    var max = Math.max(...numbers);

This replaces the need for our old friend, .apply. Good riddance!

-------------------------------------------------------------------------------
You'll be given a variable number of arguments (process.argv[2] onward) to your program, all of which will be numbers. Use the ES6 spread operator to find the minimum value of these numbers and log it to the console, alongside with the list of numbers themselves. So the output should be:

    The minimum of [18,5,7,24] is 5
*/

var numbers = process.argv.splice(2);
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);
