/*
In this exercise, we'll focus on one of the most common usage of arrow functions: shortening very simple functions. In ES6, you can write an arrow function like

    x => x + 1

and that means the same thing as the ES5 code

    function (x) { return x + 1; }

You can put any expression on the right-hand side of the =>, and it will become the return value. If you need multiple arguments, you'll need to wrap them in parentheses:

    (x, y) => x + y

-------------------------------------------------------------------------------
You'll be given a variable number of arguments (process.argv[2] onward), all of which will be strings. Use arrow functions to perform a map-reduce operation over them, before outputting them to the console. Your solution should start with something like:

    var inputs = process.argv.slice(2);
    var result = inputs.map( /// )
                        .reduce( /// );

You should:

  * Map all incoming strings to their first character
  * Reduce the result by concatenating them together

So an input of ["Hello", "arrow", "functions"] would become "Haf".

You should output the sentence string with result the console, like this:

    [Hello,arrow,functions] becomes "Haf"
*/

var arr = process.argv.slice(2);
var result = arr.map(x => x[0])
                .reduce((x, y) => x + y);

console.log(`[${arr}] becomes "${result}"`);
