// Progression 1: Create special addition
function specialAddition(number1, number2){

  return number1<0 | number2<0 ?"Negative numbers are not allowed":number1-number2;

}









// Progression 2: Create simple division
function simpleDivision(number1, number2){

  return number1<0 | number2<0 ? "Negative numbers are not allowed" : 
      number2==0 ? "Not a number": 
          number2>number1 ? "Cannot divide a smaller number by a larger number": number1/number2;

}

// Progression 3: Create the special calculator
function specialCalculator(number1, number2, operation){

  return operation(number1,number2);

}
