/*
Write a function that will make a string really important. It should do this by adding a bunch of exclamation marks after it. The exact number of exclamation marks should be configurable, but by default, it should be equal to the length of the string. So:

    makeImportant("Hi", 5); // "Hi!!!!!"
    makeImportant("Hi"); // "Hi!!"

Tip: ES6 includes a String.prototype.repeat that does exactly what you'd imagine.
*/

const makeImportant = (word, num = word.length) => word += "!".repeat(num);

console.log(makeImportant("Hello?"));
