function timeConverter(value) {
	let hoursConvert = Math.floor(value / 60);
	let minutesConvert = value % 60;

	hours = hoursConvert.toString();
	minutes = minutesConvert.toString();

	if (hoursConvert === 1 && minutesConvert === 1) {
		return hours + " hour, " + minutes + " minute";
	} else if (hoursConvert === 1) {
		return hours + " hour, " + minutes + " minutes";
	} else if (minutesConvert === 1) {
		return hours + " hours, " + minutes + " minute";
	} else {
		return hours + " hours, " + minutes + " minutes";
	}
}

console.log(timeConverter(61));
