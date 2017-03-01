/*
Create a program that takes a command-line argument and outputs it after "Hello ", using template strings.
*/

const name = process.argv[2] || "Daman";

console.log(`Hello, ${name}!`);
