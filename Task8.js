function timeConverter( value ){

if (value < 0){

    console.log("Value should be 0 or above.");

}

else{
    hours = value / 60;
    hoursRounded = Math.round(hours);

    minutes = ((hours - hoursRounded) * 60);
    minutesRounded = Math.round(minutes);

 return hoursRounded + "hour(s), " + minutesRounded + "minute(s)"  ;
    }

}
console.log(timeConverter(71));
