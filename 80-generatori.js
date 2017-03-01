const fibonacci = function* fGenerator() {
	let pre = 0;
	let	cur = 1;
	while (pre < 1000) {
        [pre, cur] = [cur, pre + cur]; // update values
		yield pre; // yield (return) each step
	}
}();

for (const x of fibonacci) {
	console.log(x);
}
