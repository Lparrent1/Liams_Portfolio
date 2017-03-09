 
var num1 = prompt("Give a number.");
               
var num2 = prompt("Give me another number.");

var num3 = prompt("Give another number.");

var varArray = [(Number(num1)), (Number(num2)), (Number(num3))];
var arrayLength = varArray.length;
var sum = 0;

for(var i = 0; i < arrayLength; i++)
    sum+=varArray[i];

document.write ('By the way, the sum of your numbers is ' + sum + ".");