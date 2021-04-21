function toFahrenheit(celsius) {
	return (celsius / 5) * 9 + 32;
}
console.log(toFahrenheit(180));

function toCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}
console.log(toCelsius(356));
