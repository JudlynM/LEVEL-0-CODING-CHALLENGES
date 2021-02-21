function commonCharacters(string1 , string2) {

    var output = [];
    var temp = [];


    for(var i=0; i < string1.length; i++){
        
      output[string1.charAt(i)] = 1;
    }  
    
    for(var j=0; j < string2.length; j++){     
      if( output[string2.charAt(j)] === 1){
          
          temp.push(string2.charAt(j));
      }    
    }
    
    output = temp.join("");
    var noDuplicates = Array.from(new Set(output));
    console.log("Common letters: " + noDuplicates.toString());
    
  }
  
  commonCharacters("house", "computers");
