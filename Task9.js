function printVowels( input ){

        var output = [ ]; //local variable to "capture" vowels within string parameter.

    for(i=0 ; i < input.length; i++) //for-loop iterates through input and pushes all vowel occurence.
    {

        switch(input[i])
        {
            case "a":
                output.push(input[i]);
                break;

            case "e":
                output.push(input[i]);
                break;

            case "i":
                output.push(input[i]);
                break;

            case "o":
                output.push(input[i]);
                break;

            case "u":
                output.push(input[i]);
                break;
            
           case "A":
                output.push(input[i]);
                break;
    
            case "E":
                output.push(input[i]);
                break;
    
            case "I":
                output.push(input[i]);
                break;
    
            case "O":
                output.push(input[i]);
                break;
    
            case "U":
                output.push(input[i]);
                break;
                
        }

    }
    return output;

}


console.log(printVowels("Hello world, my name is Judlyn (Jude) and I am enjoying Javascript!"));