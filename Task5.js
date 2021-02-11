/* 
This function is created using Heron's formula. source : https://www.mathopenref.com/heronsformula.html
It calculates the area of a triangle when you know the lengths of all three sides. 

The formula is given by:  Area = Sqrt[p(p-x1)(p-x2)(p-x3)] where p = (x1 + x2 + x3)/2 i.e. half of perimeter
*/


function areaOfTriangle(x,y,z){

    var p = ((x+y+z)/2);

    return Math.sqrt((p)*(p-x)*(p-y)*(p-z));
}

console.log(areaOfTriangle(20,5,19));