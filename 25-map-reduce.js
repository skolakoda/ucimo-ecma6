/*
Process the array and output the first letter of words in a row.
For example, in case of ["Hello", "Arrow", "Function"] should result in "HAF".
*/

const arr = ["Hello", "Arrow", "Function"];

const result = arr.map(word => word[0])
	               .reduce((prev, next) => prev + next);

console.log(result);
