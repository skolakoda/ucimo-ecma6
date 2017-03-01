function average(...args) {
  var total = args.reduce((sum, n) => sum + n);
  return total / args.length;
}

console.log(average(1, 2, 3));
console.log(average(5, 10));
