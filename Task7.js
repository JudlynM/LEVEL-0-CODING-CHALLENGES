function celsiusToFahrenheit( value ){
    
    //To convert we divide by 5, then multiply by 9, then add 32.

    return ((value/5) * 9) + 32;

}
console.log(celsiusToFahrenheit(180));


function FahrenheitTocelsius( value ){
    
    //To convert we deduct 32, then multiply by 5, then divide by 9.

    return (((value-32) * 5) / 9);

}
console.log(FahrenheitTocelsius(356));