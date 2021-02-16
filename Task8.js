function timeConverter( value ){
      var hours = Math.floor(value/60);
      var minutes = value % 60;

        if((hours === 1) && (minutes === 1)){
            return hours + "hour, " + minutes + "minute";
        }
        else if((hours === 1)){
            return hours + "hour, " + minutes + "minutes";
        }
        else if(minutes === 1){
            return hours + "hours, " + minutes + "minute"; 
        }
        else{
            return hours + "hours, " + minutes + "minutes";
        }
}
console.log(timeConverter(71));
