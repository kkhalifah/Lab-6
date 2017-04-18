function convertTemp (number, unitOfMeasure) {
  //what function does
 if (unitOfMeasure === "c"){
   number= (5/9) *(number -32);
 console.log (number + "c");
 }
 else if (unitOfMeasure === "f"){
 number =  number*(9/5)+32;
 console.log( number + "f");}}
//call function name of Fn (arguement);
convertTemp (212, "c");
convertTemp (65, "c");
convertTemp (0, "c");
convertTemp (100, "f");
convertTemp (-40, "f");
