// // DOM document object model
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

// document.querySelector(".check").addEventListener("click", () => {
//   const userGuess = Number(document.querySelector(".guess").value);

//   if (!userGuess || userGuess > 20) {
//     document.querySelector(".message").innerHTML =
//       "You never put better number";
//     document.querySelector(".message").style.backgroundColor = "red";
//     document.querySelector(".ins").style.display = "block";
//   } else if (userGuess === secretNumber) {
//     document.querySelector(".message").innerHTML =
//       "You are smart .... ✅✅🏆🏆✅✅";
//     document.querySelector("body").style.backgroundColor = "#D9E7E2";
//     document.querySelector(".hiddenNumber").innerHTML = secretNumber;
//     document.querySelector(".playAgain").style.display = "block";
//   } else if (userGuess > secretNumber) {
//     document.querySelector(".message").innerHTML =
//       "Your head dry ...... Number is too high";
//   } else if (userGuess < secretNumber) {
//     document.querySelector(".message").innerHTML = "Dry head ,..... too low";
//   }

//   document.querySelector(".guess").value = "";

//   document.querySelector(".playAgain").addEventListener("click", () => {
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector(".message").innerHTML = "Start guessing";
//     document.querySelector("body").style.backgroundColor = "";
//     document.querySelector(".playAgain").style.display = "none";
//     document.querySelector(".hiddenNumber").innerHTML = "???";
//   });
// });
// const add = () => {
//   console.log("hello");
//   const hi = () => {};
//   return 2 + 2;
// };
// const square = () => {
//   console.log("HII");
//   return 4 * 4;
// };
// console.log(add(), square());
// const arr = ["a", "b", "c", "d", "a", "a"];
// console.log(arr.indexOf("a", -1));
// console.log("hello");
// const array = [2, 4, 67, 8, 1];
// const sortedArray = arr.sort();
// console.log(sortedArray);
// const newAr = [, , ,];
// console.log(newAr);
// console.log("hello");

// var x = 20;

// function double(number) {
//   var answer = number + number;
//   return answer;
// }
// var one = double(10);
// var two = double(x * 2);

// console.log(one);
// console.log(two);
// lexical environment
// scope,scope chain, closure
function outer() {
  var hello = 20;
  console.log("hello, I am visible");
  console.log(hello);
  function inner() {}
  inner();
}
// console.log(hello);
outer();
let a;
console.log(a);
// console.log(b);
a = 50 + 25;
console.log(a);
