
/*Utilizing the 'arguments' object, we are able to handle the case of 
the function taking in an unknown number of numbers as parameters*/

function maxNumber( ) {

    var max = -Infinity; //minimum case set. To be overridden in function.

    for (var i = 0; i < arguments.length; i++) { 
        if (arguments[i] > max) {
        max = arguments[i];
      }
    }
    return max;
  }

  console.log(maxNumber(2,50,-150,2500));


