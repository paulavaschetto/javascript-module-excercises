
// // display 0 to 9:
// for(i = 0; i < 10; i++){
//     console.log(i);
// }

// // display a row of 20 *:
// var newText = document.getElementById("mySpan")
// let string = "";
// for(var i = 0;i <20;i++) {
//     string += "*";
// }
// newText.innerHTML = string

// // Print a row of stars (*) with input number from user:

// function PrintStars() {

//     var _count = document.getElementById("etext").value;
//     var count = parseInt(_count);
//     document.getElementById("tableArea").innerHTML = "<br>" + count;
//     var star = '';
//     for (var i = 0; i < count; i++) {
//         star += '*';
//     }
//     document.getElementById("spanDisplay").innerHTML = star;

// }
// // https://www.codeproject.com/Questions/986720/Taking-input-from-user-and-printing-stars

// // Find out the sum from 1 to 20 (1 + 2 + 3 + 4 +..+ 19 + 20)

// sum = 0
// var n = 20
// for( i = 1; i <= n; i++){
//     sum += i
// }
// document.getElementById("sumEx").innerHTML = sum;

// // Find out the sum of 1 + 1/2 + 1/3 + 1/4 +..+ 1/100 
// const size = 100
// let result = 0

// for (let i = 1; i <= size; i++) {
//   result += 1 / i
// }
// document.getElementById("ex4").innerHTML = result;

// // Find out the sum of odd numbers from 1 to 20:
// sum5 = 0
// for(i = 1 ; i < 20; i += 2){
//     sum5 += i
// }
// document.getElementById("ex5").innerHTML = sum5;

// ex 6 salary calculator:
var annualIncrease = 1.05
var retireAge = 65
var age = document.getElementById("age").value
var userAge = parseInt(age)
// var ageToRetire =  retireAge - parseInt(age)
var annualSalary = document.getElementById("salary")
var totalEarned = 0

function calculate(){
    for(i = userAge; i < retireAge; i++){
     totalEarned = (annualSalary *= annualIncrease) * i
    }
}
document.getElementById("displayResult").innerHTML += totalEarned;
//  var totalEarned = (annualSalary *= annualIncrease) * ageToRetire;
    