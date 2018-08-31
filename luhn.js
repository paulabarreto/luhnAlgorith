

// The formula verifies a number against its included check digit, which is usually appended to a
//partial account number to generate the full account number. This number must pass the following test:
//
// From the rightmost digit, which is the check digit, and moving left, double the value of every
//second digit. The check digit is not doubled; the first digit doubled is immediately to the left of the
//check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add
//the digits of the product (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same result
//can be found by subtracting 9 from the product (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
// Take the sum of all the digits.
// If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to
//the Luhn formula; else it is not valid.
// The sum of all the digits in the third row is 67+x.
//

//Receive a number
function isValid(number){
  var str = number.toString();
  var strReverse = str.split("").reverse().join("")
  var array = Array.from(strReverse);

  return array;
}
console.log(isValid(1238975));
//Reverse the number and retrieve every second digit
//Calculate the double of the digits
//Check if the result of the calculation is greater than 9.
  //If yes, then add the digits of the product
//Sum all the digits and take de modulo 10
  //if it is equal to 0 then the number is valid.

  module.exports = isValid;
