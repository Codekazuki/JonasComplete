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

// Write a program that determines whether a given number is positive or negative.

function checkNumber(number) {
  if (number > 0) {
    console.log(`${number} is positive`);
  } else if (number < 0) {
    console.log(`${number} is negative`);
  } else {
    console.log("number is 0");
  }
}
checkNumber(-56);
// hoisting

// console.log(b);
// console.log(c);?
// console.log(a);

// let a = 6;
// const b = 9;
// const c = 10;

let totalProdct = 8;

function deleteAll() {
  console.log("all cart deleted");
}
if (!totalProdct) deleteAll();
//TEMPORAL DEAD ZONE

// this keyword
//array destructuring

const numbers = [3, 4, 5, 7, 4, 5, 6, 7, 8, 9, 0];
const newNumbers = [1, 2, numbers[0], numbers[1], numbers[2], numbers[3]];
console.log(numbers);
console.log(newNumbers);

const betterWay = [1, 2, ...numbers];
console.log(betterWay);
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

const school = {
  name: "Babcock",
  location: "Ilisan-remo",
  faculties: ["education", "sciences", "engineering"],
};
console.log(school.faculties);
const [firstFaculty, , thirdFaculty] = school.faculties;
console.log(firstFaculty, thirdFaculty);
const vovels = ["a", "e"];
const consonants = ["n", "m"];
const alpha = [...vovels, ...consonants];
console.log(alpha);
const shallowAlpha = [...alpha];
console.log(shallowAlpha);
