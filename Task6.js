
function maxNumber() {
	var max = -Infinity;

	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}
	return max;
}

console.log(maxNumber(2, 5000, -150, 2500));
