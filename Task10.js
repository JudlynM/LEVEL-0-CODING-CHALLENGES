function commonCharacters(string1 , string2) {

    var output = [];
    var temp = [];


    for(var i=0; i < string1.length; i++) 
    {
      output[string1.charAt(i)] = 1;
    }  
    for(var i=0; i < string2.length; i++) 
    {
      if( output[string2.charAt(i)] == 1) {
          temp.push(string2.charAt(i));
      }
    }
    
    output = temp.join(" ");
    console.log(output);
  }
  
  commonCharacters("house", "computers");