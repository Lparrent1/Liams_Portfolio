var name = prompt("Please enter your name");
               
var num1 = prompt ("Give me a number");

var num2 = prompt ("Give me another number");

function myFunction (){
    var total = parseInt(num1) + parseInt(num2);
    console.log (total);
    return total;
}

document.write ('You are going to have a wonderful day, ' + name + ". ");

document.write ('By the way, the sum of your numbers is ' + myFunction() + ".");





