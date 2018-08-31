//Receive a number
//Reverse the number and retrieve every second digit
//Reverse the number and retrieve every second digit
//Calculate the double of the digits
//Check if the result of the calculation is greater than 9.
  //If yes, then add the digits of the product
//Sum all the digits and take de modulo 10
  //if it is equal to 0 then the number is valid.

function isValid(number){
  var str = number.toString();
  var strReverse = str.split("").reverse().join("")
  var array = Array.from(strReverse);
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if (i % 2 !== 0){
      array[i] = (array[i] * 2)
      if(array[i] > 9){
        array[i] -= 9;
      }
    }
    if(i !== 0){
      array[i] = parseInt(array[i]);
      newArray.push(array[i]);
    } else {
      var lastDigit = array[i];
    }
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var sum = newArray.reduce(reducer);
  sum = sum * 9;
  sum = sum / 10;
  sum = Math.round((sum - Math.floor(sum)) * 10);

  return (sum == lastDigit);
}
console.log(isValid(4024007125621978));


module.exports = isValid;
